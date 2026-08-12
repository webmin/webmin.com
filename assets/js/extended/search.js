const defaultKeys = [
    { name: "title", weight: 4 },
    { name: "heading", weight: 3 },
    { name: "summary", weight: 2 },
    { name: "content", weight: 1 },
];
const searchDelay = 333;
const searchIndicatorDelay = 0;

function fuseOptions(options) {
    options = options || {};
    return {
        isCaseSensitive: options.iscasesensitive ?? false,
        includeScore: options.includescore ?? false,
        includeMatches: false,
        minMatchCharLength: options.minmatchcharlength ?? 1,
        shouldSort: options.shouldsort ?? true,
        findAllMatches: options.findallmatches ?? false,
        keys: options.keys ?? defaultKeys,
        location: options.location ?? 0,
        threshold: options.threshold ?? 0.4,
        distance: options.distance ?? 100,
        ignoreLocation: options.ignorelocation ?? true,
    };
}

function resultLimit(options) {
    const limit = Number(options && options.limit);
    return Number.isInteger(limit) && limit > 0 ? limit : 20;
}

function queryPattern(query) {
    const terms = query
        .trim()
        .split(/\s+/)
        .filter(Boolean)
        .sort((a, b) => b.length - a.length)
        .map((term) => term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
    return terms.length ? new RegExp(terms.join("|"), "gi") : null;
}

function appendHighlightedText(element, value, query) {
    const pattern = queryPattern(query);
    if (!pattern) {
        element.textContent = value;
        return;
    }

    let offset = 0;
    for (const match of value.matchAll(pattern)) {
        element.append(document.createTextNode(value.slice(offset, match.index)));
        const mark = document.createElement("mark");
        mark.textContent = match[0];
        element.append(mark);
        offset = match.index + match[0].length;
    }
    element.append(document.createTextNode(value.slice(offset)));
}

function queryLocation(value, query) {
    const normalizedValue = value.toLocaleLowerCase();
    const normalizedQuery = query.trim().toLocaleLowerCase();
    const phraseIndex = normalizedValue.indexOf(normalizedQuery);
    if (phraseIndex !== -1) {
        return { index: phraseIndex, strength: Number.MAX_SAFE_INTEGER };
    }

    let index = -1;
    let strength = 0;
    for (const term of normalizedQuery.split(/\s+/).filter(Boolean)) {
        const termIndex = normalizedValue.indexOf(term);
        if (termIndex !== -1) {
            index = index === -1 ? termIndex : Math.min(index, termIndex);
            strength += 1;
        }
    }
    return { index, strength };
}

function excerpt(result, query) {
    const item = result.item;
    const candidates = [item.content, item.summary]
        .filter(Boolean)
        .map((value) => {
            value = String(value);
            return { value, ...queryLocation(value, query) };
        })
        .sort((a, b) => b.strength - a.strength || a.index - b.index);
    const matched = candidates.find((candidate) => candidate.index !== -1);
    const value = matched
        ? matched.value
        : String(item.summary || item.content || "");
    if (!value) return "";
    const matchStart = matched ? matched.index : 0;

    let start = Math.max(0, matchStart - 70);
    let end = Math.min(value.length, Math.max(matchStart + 110, start + 180));
    if (start > 0) {
        const nextSpace = value.indexOf(" ", start);
        if (nextSpace !== -1 && nextSpace < matchStart) start = nextSpace + 1;
    }
    if (end < value.length) {
        const previousSpace = value.lastIndexOf(" ", end);
        if (previousSpace > matchStart) end = previousSpace;
    }

    const excerptText = value.slice(start, end).replace(/\s+/g, " ").trim();
    return `${start > 0 ? "…" : ""}${excerptText}${end < value.length ? "…" : ""}`;
}

function resultElement(result, query) {
    const item = result.item;
    const pageTitle = item.pageTitle || item.title;
    const resultTitle = item.heading || item.title || pageTitle;
    const listItem = document.createElement("li");
    const link = document.createElement("a");
    const title = document.createElement("span");

    listItem.className = "post-entry search-result";
    link.className = "search-result-link";
    link.href = item.permalink;
    link.setAttribute(
        "aria-label",
        item.heading ? `${pageTitle}: ${item.heading}` : pageTitle
    );

    if (item.heading) {
        const page = document.createElement("span");
        page.className = "search-result-page";
        page.textContent = pageTitle;
        link.append(page);
    }

    title.className = "search-result-title";
    appendHighlightedText(title, resultTitle, query);
    link.append(title);

    const excerptText = excerpt(result, query);
    if (excerptText) {
        const description = document.createElement("span");
        description.className = "search-result-excerpt";
        appendHighlightedText(description, excerptText, query);
        link.append(description);
    }

    listItem.append(link);
    return listItem;
}

function messageElement(message, error) {
    const listItem = document.createElement("li");
    listItem.className = `search-message${error ? " search-message-error" : ""}`;
    listItem.setAttribute("role", "status");
    listItem.textContent = message;
    return listItem;
}

export function initializeSearch({ indexUrl, options, docsOnly = false }) {
    const resultsList = document.getElementById("searchResults");
    const input = document.getElementById("searchInput");
    if (!resultsList || !input) return;
    const searchBox = input.closest("#searchbox");
    const docsMenu = input.closest(".docs-menu-content");

    let fuse;
    let loadFailed = false;
    let currentResult = null;
    let searchTimer;
    let searchIndicatorTimer;
    const limit = resultLimit(options);

    resultsList.setAttribute("aria-live", "polite");

    function clearResults(clearInput = false, preserveSearching = false) {
        window.clearTimeout(searchTimer);
        window.clearTimeout(searchIndicatorTimer);
        if (!preserveSearching) resultsList.replaceChildren();
        currentResult = null;
        if (clearInput) {
            input.value = "";
            docsMenu?.classList.remove("search-active");
        }
    }

    function links() {
        return Array.from(resultsList.querySelectorAll(".search-result-link"));
    }

    function focusResult(link) {
        resultsList.querySelectorAll(".focus").forEach((element) => {
            element.classList.remove("focus");
        });
        if (link) {
            link.focus();
            link.parentElement.classList.add("focus");
            currentResult = link;
        } else {
            input.focus();
            currentResult = null;
        }
    }

    function search() {
        const query = input.value.trim();
        const preserveSearching = Boolean(
            query.length >= 2 && resultsList.querySelector(".search-message-searching")
        );
        docsMenu?.classList.toggle("search-active", query.length >= 2);
        clearResults(false, preserveSearching);
        if (query.length < 2) return;

        if (loadFailed) {
            resultsList.append(messageElement("Search is temporarily unavailable.", true));
            return;
        }
        if (!fuse) {
            resultsList.append(messageElement("Loading search…"));
            return;
        }

        if (!preserveSearching) {
            searchIndicatorTimer = window.setTimeout(() => {
                if (query === input.value.trim()) {
                    const message = messageElement("Searching…");
                    message.classList.add("search-message-searching");
                    resultsList.replaceChildren(message);
                }
            }, searchIndicatorDelay);
        }

        searchTimer = window.setTimeout(() => {
            if (query !== input.value.trim()) return;
            window.clearTimeout(searchIndicatorTimer);
            const results = fuse.search(query, { limit });
            if (!results.length) {
                resultsList.replaceChildren(messageElement("No results found"));
                return;
            }

            const fragment = document.createDocumentFragment();
            results.forEach((result) => fragment.append(resultElement(result, query)));
            resultsList.replaceChildren(fragment);
        }, searchDelay);
    }

    fetch(indexUrl)
        .then((response) => {
            if (!response.ok) throw new Error(`Search index returned ${response.status}`);
            return response.json();
        })
        .then((data) => {
            const records = docsOnly
                ? data.filter((record) => record.section === "docs")
                : data;
            fuse = new Fuse(records, fuseOptions(options));
            if (input.value.trim()) search();
        })
        .catch((error) => {
            loadFailed = true;
            console.error(error);
            if (input.value.trim()) search();
        });

    input.addEventListener("input", search);
    input.addEventListener("search", () => {
        if (!input.value) clearResults(true);
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && searchBox?.contains(document.activeElement)) {
            clearResults(true);
            input.focus();
            return;
        }

        const resultLinks = links();
        if (!resultLinks.length || !searchBox?.contains(document.activeElement)) {
            return;
        }

        const active = currentResult || document.activeElement;
        const activeIndex = resultLinks.indexOf(active);
        if (event.key === "ArrowDown") {
            event.preventDefault();
            focusResult(resultLinks[Math.min(activeIndex + 1, resultLinks.length - 1)]);
        } else if (event.key === "ArrowUp") {
            event.preventDefault();
            if (activeIndex <= 0) focusResult();
            else focusResult(resultLinks[activeIndex - 1]);
        } else if (event.key === "ArrowRight" && activeIndex !== -1) {
            active.click();
        }
    });
}
