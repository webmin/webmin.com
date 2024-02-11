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
        hmenuLink = document.querySelector(menuLinkTargSel + ".dropdown-menu"),
        hmenuLinkText = hmenuLink.querySelector("span"),
        outerlinksAll = [
            document.querySelectorAll(menuLinkTargSel + '[href*="forum.virtualmin.com"]'),
            document.querySelectorAll(postsLinksTargSel),
        ],
        screenShotLinks = [document.querySelectorAll(postTargSel + ' [href*="/images/docs/"]')];

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
                paletteLink.appendChild(themeToggleRef);
            }
        }
    });

    // Resize actions for the page
    window.onresize = function () {
        hmenuResize();
        menuHeightType();
    };

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
})();
