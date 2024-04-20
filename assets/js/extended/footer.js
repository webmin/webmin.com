/* jshint esversion: 6 */
(function () {
    const siteName = "{{ site.BaseURL }}",
        pageHTMLSel = "html",
        postTargSel = "body > .main > .post-single",
        headerTargSel = "body > .header",
        menuLinkTargSel = headerTargSel + " > .nav #menu > li > a",
        themeToggleTargSel = headerTargSel + " #theme-toggle",
        postsLinksTargSel = ".main .post-content a",
        hmenuDropDownTargSel = ".hmenu-panel > .hmenu-drop-down",
        hmenuDropDownPaletteTargSel = hmenuDropDownTargSel + " .hmenu-link-button",
        hmenuDropDownIconButtons = hmenuDropDownTargSel + " .hmenu-links button",
        hmenuLink = document.querySelector(menuLinkTargSel + ".dropdown-menu"),
        hmenuLinkText = hmenuLink.querySelector("span"),
        outerlinksAll = [
            document.querySelectorAll(menuLinkTargSel + '[href*="forum.virtualmin.com"]'),
            document.querySelectorAll(postsLinksTargSel),
        ],
        screenShotLinks = [document.querySelectorAll(postTargSel + ' [href*="/images/docs/"]')],
        isMac = navigator.userAgent.includes("Mac"),
        altKey = isMac ? "⌥" : "Alt",
        concatKey = isMac ? " " : " + ";

    let themeToggleRef;

    // Custom dropdown menu offsets calcs
    const hmenu_html = `{{ partial "nav_menu.html" . }}`,
        hmenuResize = function () {
            const headerElemHeight = document
                    .querySelector(headerTargSel)
                    .getBoundingClientRect().height,
                headerElemTopOffset = document
                    .querySelector(headerTargSel)
                    .getBoundingClientRect().top,
                hmenuRightOffset =
                    document.documentElement.getBoundingClientRect().width -
                    hmenuLinkText.getBoundingClientRect().right,
                hmenuDropDownTarg = hmenuLink.querySelector(hmenuDropDownTargSel);
            if (hmenuDropDownTarg) {
                const hmenuDropDownHeight = parseInt(
                    hmenuDropDownTarg.getBoundingClientRect().height
                );
                hmenuDropDownTarg.style.right = hmenuRightOffset + "px";
                if (
                    headerElemTopOffset - headerElemHeight > hmenuDropDownHeight ||
                    (document.querySelector(headerTargSel).getBoundingClientRect().top !== 0 &&
                        window.scrollY < 10 &&
                        window.innerHeight ===
                            Math.round(
                                document.querySelector(headerTargSel).getBoundingClientRect().bottom
                            ))
                ) {
                    hmenuLinkText.classList.add("top");
                    hmenuDropDownTarg.style.top = null;
                    hmenuDropDownTarg.style.bottom =
                        "calc(" +
                        ((
                            hmenuLinkText.getBoundingClientRect().height +
                            parseFloat(window.getComputedStyle(hmenuLinkText).paddingTop) -
                            2.5
                        ).toFixed(2) +
                            "px)");
                } else {
                    hmenuLinkText.classList.remove("top");
                    hmenuDropDownTarg.style.bottom = null;
                    hmenuDropDownTarg.style.top =
                        "calc(" +
                        ((
                            hmenuLinkText.getBoundingClientRect().height +
                            parseFloat(window.getComputedStyle(hmenuLinkText).paddingBottom) -
                            4.5
                        ).toFixed(2) +
                            "px)");
                }
            }
        },
        menuHeightType = function () {
            const pageHTML = document.querySelector(pageHTMLSel),
                navMenu = document.querySelector(headerTargSel + " > .nav");
            pageHTML.dataset.nav = navMenu.offsetHeight > 10e1 ? "lg" : "sm";
        };

    // Add event listener for Alt+T to toggle palette
    document.addEventListener("keydown", function (e) {
        // Check first if no input or textarea is focused
        if (
            document.activeElement.tagName === "INPUT" ||
            document.activeElement.tagName === "TEXTAREA" ||
            document.activeElement.contentEditable === "true" ||
            e.ctrlKey ||
            e.metaKey
        ) {
            return;
        }
        // Alt+T to toggle palette
        if (e.altKey && e.code === "KeyT") {
            e.preventDefault();
            (themeToggleRef = themeToggleRef || document.querySelector(themeToggleTargSel)).click();
        }
        // Alt+F to toggle fullscreen for images (if available)
        if (e.altKey && e.code === "KeyF") {
            const fullScreenToggle = document.querySelector(
                ".chocolat-image-wrapper .screen-full-container > i"
            );
            e.preventDefault();
            if (fullScreenToggle) {
                fullScreenToggle.click();
            }
        }
        // Alt+H to go to homepage
        if (e.altKey && e.code === "KeyH") {
            e.preventDefault();
            location.href = "/";
        }
        // Slash or Alt+S to go to search page or focus
        // search input if available (documentation page).
        // If Shift key is held down and Slash key pressed,
        // open the documentation page.
        if (e.code === "Slash" || (e.altKey && e.code === "KeyS")) {
            e.preventDefault();
            // Shift key held down, representing the "?" key,
            // so open the documentation page
            if (e.shiftKey && !e.altKey) {
                location.href = "/docs/";
                return;
            }
            const searchInput = document.querySelector("#searchInput");
            if (searchInput) {
                searchInput.focus();
            } else {
                this.location.href = "/search/";
            }
        }
    });

    // On click open the menu
    hmenuLink.addEventListener("click", function () {
        var isHmenu = hmenuLink.querySelector(".hmenu-panel");
        // Remove it
        if (isHmenu) {
            isHmenu.remove();
            hmenuLinkText.classList.remove("active");
            document.querySelector(headerTargSel).classList.remove("no-overflow");
        }
        // Append new
        else {
            hmenuLink.insertAdjacentHTML("beforeend", hmenu_html);
            hmenuLinkText.classList.add("active");
            hmenuResize();
            document.querySelector(headerTargSel).classList.add("no-overflow");

            // Add selected class if any
            const hmenuActiveLink =
                hmenuLink.querySelector(
                    hmenuDropDownTargSel + ' a[href="' + location.pathname + '"]'
                ) ||
                hmenuLink.querySelector(
                    hmenuDropDownTargSel + ' a[href="' + (location.pathname + location.hash) + '"]'
                );
            hmenuActiveLink && hmenuActiveLink.classList.add("active");

            // Detach and reattach palette switcher preserving original event listeners
            (themeToggleRef = themeToggleRef || document.querySelector(themeToggleTargSel)),
                (paletteLink = document.querySelector(hmenuDropDownPaletteTargSel));
            if (themeToggleRef && paletteLink) {
                themeToggleRef.setAttribute(
                    "title",
                    "Switch Palette (" + altKey + concatKey + "T)"
                );
                paletteLink.appendChild(themeToggleRef);
            }

            // Dynamically update title with hotkey of all buttons with data-hotkey attribute
            document.querySelectorAll(hmenuDropDownIconButtons).forEach((btn) => {
                const hotkey = btn.getAttribute("data-hotkey");
                if (hotkey) {
                    btn.setAttribute(
                        "title",
                        `${btn.getAttribute(
                            "data-title"
                        )} (${altKey}${concatKey}${hotkey.toUpperCase()})`
                    );
                }
            });

            // Add event listener to dropdown links and
            // buttons to trigger theme progress
            document
                .querySelectorAll(
                    hmenuDropDownTargSel + " a, " + hmenuDropDownIconButtons + "[onclick]"
                )
                .forEach(function (link) {
                    if (
                        (link.href &&
                            link.href.includes(location.hostname) &&
                            link.target !== "_blank" &&
                            !link.href.startsWith("#") &&
                            !link.href.startsWith("javascript:")) ||
                        link.getAttribute("onclick")
                    ) {
                        link.addEventListener("click", function (event) {
                            // Modifier keys should not trigger the progress bar
                            if (event.ctrlKey || event.altKey || event.metaKey || event.shiftKey) {
                                return;
                            }
                            // Skip if it's the same page, and just a hash change
                            if (link.tagName === "A") {
                                const targetUrl = new URL(link.href);
                                if (targetUrl.hash) {
                                    const currentUrl = new URL(window.location.href);
                                    // Normalize URLs by removing any hash
                                    targetUrl.hash = "";
                                    currentUrl.hash = "";
                                    if (targetUrl.toString() === currentUrl.toString()) {
                                        return;
                                    }
                                }
                            }
                            __.themeProgress.end();
                            __.themeProgress.start();
                        });
                    }
                });
        }
    });

    // Resize actions for the page
    window.addEventListener("resize", function () {
        hmenuResize();
        menuHeightType();

        // Browser in fullscreen mode (OS) or not?
        this.setTimeout(function () {
            document.documentElement.setAttribute(
                "data-fullscreen",
                screen.height === window.outerHeight && !document.fullscreenElement
            );
        }, 150);
    });
    window.dispatchEvent(new Event("resize"));

    // On load test menu height
    setTimeout(menuHeightType, 10e1);

    // Click event
    window.onclick = function (evt) {
        // Check for opened menus and close them on clicking outside
        const clickOutsideElemsAll = document.querySelectorAll('[data-click-outside="true"]');
        if (clickOutsideElemsAll.length) {
            clickOutsideElemsAll.forEach(function (clickOutsideElem) {
                const clickOutsideElemRef = document.querySelector(
                    "." + clickOutsideElem.getAttribute("data-reference")
                );
                // If click target is opener itself
                if (
                    clickOutsideElemRef === evt.target ||
                    clickOutsideElemRef.contains(evt.target) ||
                    clickOutsideElem === evt.target ||
                    clickOutsideElem.contains(evt.target) ||
                    document.querySelector(themeToggleTargSel).contains(evt.target)
                )
                    return;
                // Close becaise clicked outside
                if (clickOutsideElemRef) clickOutsideElemRef.click();
            });
        }
    };

    // Outer links go to the new tab
    outerlinksAll.forEach(function (outerlinks) {
        if (outerlinks) {
            outerlinks.forEach(function (outerlink) {
                if (
                    outerlink.href &&
                    !outerlink.href.startsWith("mailto:") &&
                    !outerlink.href.startsWith(siteName)
                ) {
                    if (outerlink.target !== "_self") {
                        outerlink.setAttribute("target", "_blank");
                    }
                    // Forum link needs to have special handling
                    if (
                        !outerlink.getAttribute("onclick") &&
                        outerlink.href.includes("forum.virtualmin.com")
                    ) {
                        outerlink.setAttribute("onclick", "__.themeLink(event, this)");
                    }
                }
            });
        }
    });

    // Outer links go to the new tab
    screenShotLinks.forEach(function (outerlinks) {
        if (outerlinks) {
            outerlinks.forEach(function (outerlink) {
                if (outerlink.href) {
                    outerlink.setAttribute("target", "_blank");
                }
            });
        }
    });

    // Navigation buttons tweak
    const isLocation = function (test) {
        return (
            location &&
            typeof location.pathname === "string" &&
            location.pathname.includes("/" + test + "/")
        );
    };
    if (isLocation("changelog") || isLocation("archives")) {
        const archivesMenuLink =
            document.querySelector(menuLinkTargSel + '[href$="archives/"] > span') ||
            document.querySelector(menuLinkTargSel + '[href$="changelog/"] > span');
        if (archivesMenuLink) {
            archivesMenuLink.classList.add("active");
        }
    }

    if (isLocation("docs")) {
        const docsMenuLink = document.querySelector(menuLinkTargSel + '[href$="docs/"] > span');
        if (docsMenuLink) {
            docsMenuLink.classList.add("active");
        }
    }

    // Tweak screenshots to blend with palette
    const isDarkMode = function () {
            return (
                localStorage.getItem("pref-theme") === "dark" ||
                document.body.classList.contains("dark")
            );
        },
        screenshotType = function () {
            return isDarkMode() ? "dark" : "light";
        },
        screenshotTypeRev = function () {
            return !isDarkMode() ? "dark" : "light";
        },
        updateScreenshots = function () {
            const screenshots = document.querySelectorAll(
                'figure > img, a > img[src*="/images/screenshots"], a > img[src*="/docs/screenshots"]'
            );
            let screenshotsFound = false;
            if (screenshots.length) {
                screenshots.forEach(function (screenshot) {
                    if (screenshot && screenshot.src) {
                        screenshot.classList.remove("loaded");
                        screenshot.classList.add("loading");
                        screenshot.setAttribute(
                            "onload",
                            'javascript: this.classList.add("loaded");this.style.aspectRatio=""+this.naturalWidth+"/"+this.naturalHeight+"";'
                        );
                        screenshotsFound = true;
                        const themeMode = screenshotType(),
                            themeModeRev = screenshotTypeRev();
                        screenshot.src = screenshot.src.replace(
                            "/" + themeModeRev + "/",
                            "/" + themeMode + "/"
                        );
                        if (screenshot.parentElement.nodeName === "A") {
                            screenshot.parentElement.href = screenshot.parentElement.href.replace(
                                "/" + themeModeRev + "/",
                                "/" + themeMode + "/"
                            );
                        }
                    }
                });
            }
            return screenshotsFound;
        };

    // We need to check it in another stack, because Safari
    // is just not reliable for anything complex
    setTimeout(function () {
        if (
            document.querySelector('html[class*="page-index"]') ||
            document.querySelector('html[class^="page-page"]') ||
            document.querySelector('html[class*="page-changelog"]') ||
            document.querySelector('html[class*="page-docs"]')
        ) {
            // On changing mode change screenshots palette
            if (updateScreenshots()) {
                const themeToggle = document.querySelector("#theme-toggle");
                themeToggle.addEventListener(
                    "click",
                    function () {
                        updateScreenshots();
                    },
                    false
                );
            }
        }
    }, 10);

    // Use our pagination class
    const paginations = document.querySelectorAll(".pagination > a");
    if (paginations.length) {
        paginations.forEach(function (pagination) {
            if (pagination) {
                pagination.classList.add("btn", "btn-sm", "btn-outline-dark");
            }
        });
    }

    // Clear accesskey attrs
    const elementsWithAccessKey = document.querySelectorAll("[accesskey]");
    elementsWithAccessKey.forEach(function (element) {
        element.removeAttribute("accesskey");
        element.removeAttribute("title");
    });

    // Wait for DOM ready to include footer
    document.addEventListener("DOMContentLoaded", function () {
        // Implement the top bouncy loader on each link click
        document.querySelectorAll("a").forEach(function (link) {
            if (
                link.href &&
                link.href.includes(location.hostname) &&
                link.target !== "_blank" &&
                !link.href.startsWith("mailto:") &&
                !link.href.startsWith("#") &&
                !link.href.startsWith("javascript:")
            ) {
                link.addEventListener("click", function (event) {
                    // Modifier keys should not trigger the progress bar
                    if (event.ctrlKey || event.altKey || event.metaKey || event.shiftKey) {
                        return;
                    }
                    // Skip if it's the same page, and just a hash change
                    if (link.tagName === "A") {
                        const targetUrl = new URL(link.href);
                        if (targetUrl.hash) {
                            const currentUrl = new URL(window.location.href);
                            // Normalize URLs by removing any hash
                            targetUrl.hash = "";
                            currentUrl.hash = "";
                            if (targetUrl.toString() === currentUrl.toString()) {
                                return;
                            }
                        }
                    }
                    __.themeProgress.end();
                    __.themeProgress.start();
                });
            }
        });

        // Implement the top bouncy loader on each form submit
        const forms = document.querySelectorAll("form");
        forms.forEach(function (form) {
            form.addEventListener("submit", function () {
                __.themeProgress.end();
                __.themeProgress.start();
            });
        });

        // On page accessed via back/forward button
        try {
            if (
                window.performance &&
                window.performance.getEntriesByType("navigation")[0].type === "back_forward"
            ) {
                setTimeout(function () {
                    __.themeProgress.end();
                }, 1);
            }
        } catch (e) {}

        // On page loaded from BFCache (Back-Forward Cache)
        window.addEventListener("pageshow", function (event) {
            if (event.persisted) {
                setTimeout(function () {
                    __.themeProgress.end();
                }, 1);
            }
        });
    });
})();
