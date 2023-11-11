/* jshint esversion: 6 */
(function() {
    const
        siteName = '{{ site.BaseURL }}',
        pageHTMLSel = 'html',
        postTargSel = 'body > .main > .post-single',
        headerTargSel = 'body > .header',
        menuLinkTargSel = '' + headerTargSel + ' > .nav #menu > li > a',
        themeToggleTargSel = '' + headerTargSel + ' #theme-toggle',
        postsLinksTargSel = '.main .post-content a',
        hmenuDropDownTargSel = '.hmenu-panel > .hmenu-drop-down',
        searchLink = document.querySelector('' + menuLinkTargSel + '[href$="/search/"] > span'),
        hmenuLink = document.querySelector('' + menuLinkTargSel + '[href$="/hmenu/"]'),
        hmenuLinkText = hmenuLink.querySelector('span'),
        outerlinksAll = [
            document.querySelectorAll('' + menuLinkTargSel + '[href*="forum.virtualmin.com"]'),
            document.querySelectorAll(postsLinksTargSel),
        ],
        screenShotLinks = [
            document.querySelectorAll('' + postTargSel + ' [href*="/images/docs/"]'),
        ];

    // Search link as icon
    searchLink.classList.add('wm', 'wm-search');
    searchLink.innerHTML = String();

    // Custom dropdown menu offsets calcs
    const hmenu_html = `{{ partial "nav_menu.html" . }}`,
        hmenuResize = function() {
            const hmenuRightOffset = document.documentElement.clientWidth - hmenuLinkText.getBoundingClientRect().right,
                hmenuRightOffsetPixel = devicePixelRatio >= 1 ? (Math.ceil(hmenuRightOffset / 0.25) * 0.25) : hmenuRightOffset,
                // hmenuRightOffsetPixelViewPort = window.matchMedia('(min-width: 1280px)').matches ? 32 : 4,
                hmenuRightOffsetPixelViewPort = 0,
                hmenuTopOffset = hmenuLinkText.getBoundingClientRect().top,
                hmenuDropDownTarg = hmenuLink.querySelector(hmenuDropDownTargSel);
            if (hmenuDropDownTarg) {
                hmenuDropDownTarg.style.right = (hmenuRightOffsetPixel - hmenuRightOffsetPixelViewPort) + "px";
                hmenuDropDownTarg.style.top = "calc(" + (hmenuTopOffset + hmenuLinkText.offsetHeight) + "px - 1px)";
            }
        },
        menuHeightType = function() {
            const pageHTML = document.querySelector(pageHTMLSel),
                navMenu = document.querySelector(headerTargSel + ' > .nav');
                pageHTML.dataset.nav = navMenu.offsetHeight > 10e1 ? 'lg' : 'sm';
        };
    hmenuLinkText.classList.add('wm', 'wm-md', 'wm-menu');
    hmenuLinkText.innerHTML = String();
    hmenuLink.setAttribute('href', 'javascript:;');
    hmenuLink.removeAttribute('title');
    hmenuLink.classList.add('hmenu-panel-opener');
    hmenuLink.addEventListener("click", function() {
        var isHmenu = hmenuLink.querySelector('.hmenu-panel');
        // Remove it
        if (isHmenu) {
            isHmenu.remove();
            hmenuLinkText.classList.remove('active');
        }
        // Append new
        else {
            hmenuLink.insertAdjacentHTML('beforeend', hmenu_html);
            hmenuLinkText.classList.add('active');
            hmenuResize();

            // Add selected class if any
            const hmenuActiveLink =
                hmenuLink.querySelector(hmenuDropDownTargSel + ' a[href="' + (location.pathname) + '"]') ||
                hmenuLink.querySelector(hmenuDropDownTargSel + ' a[href="' + (location.pathname + location.hash) + '"]');
            hmenuActiveLink && hmenuActiveLink.classList.add('active');
        }
    });

    // Resize actions for the page
    window.onresize = function() {
        hmenuResize();
        menuHeightType();
    }

    // On load test menu height
    setTimeout(menuHeightType, 10e1);

    // Click event
    window.onclick = function(evt) {
        // Check for opened menus and close them on clicking outside
        const clickOutsideElemsAll = document.querySelectorAll('[data-click-outside="true"]');
        if (clickOutsideElemsAll.length) {
            clickOutsideElemsAll.forEach(function(clickOutsideElem) {
                const clickOutsideElemRef = document.querySelector("." + clickOutsideElem.getAttribute('data-reference'));
                // If click target is opener itself
                if (clickOutsideElemRef === evt.target || clickOutsideElemRef.contains(evt.target) ||
                    clickOutsideElem === evt.target || clickOutsideElem.contains(evt.target) ||
                    document.querySelector(themeToggleTargSel).contains(evt.target)) return;
                // Close becaise clicked outside
                if (clickOutsideElemRef) clickOutsideElemRef.click();
            });
        }
    }

    // Outer links go to the new tab
    outerlinksAll.forEach(function(outerlinks) {
        if (outerlinks) {
            outerlinks.forEach(function(outerlink) {
                if (outerlink.href &&
                    !outerlink.href.startsWith('mailto:') &&
                    !outerlink.href.startsWith(siteName)) {
                    outerlink.setAttribute('target', '_blank');
                }
            });
        }
    });

    // Outer links go to the new tab
    screenShotLinks.forEach(function(outerlinks) {
        if (outerlinks) {
            outerlinks.forEach(function(outerlink) {
                if (outerlink.href) {
                    outerlink.setAttribute('target', '_blank');
                }
            });
        }
    });

    // Navigation buttons tweak
    const isLocation = function(test) {
        return location && typeof location.pathname === 'string' && location.pathname.includes('/' + test + '/');
    }
    if (isLocation('changelog') || isLocation('archives')) {
        const archivesMenuLink =
            document.querySelector('' + menuLinkTargSel + '[href$="archives/"] > span') ||
            document.querySelector('' + menuLinkTargSel + '[href$="changelog/"] > span');
        if (archivesMenuLink) {
            archivesMenuLink.classList.add('active');
        }
    }

    if (isLocation('docs')) {
        const docsMenuLink =
            document.querySelector('' + menuLinkTargSel + '[href$="docs/"] > span');
        if (docsMenuLink) {
            docsMenuLink.classList.add('active');
        }
    }

    // Main page tweaks
    const mainPageSocials = document.querySelector('.main > article > .entry-footer > .social-icons'),
        ghStarsHTML = '<iframe src="https://ghbtns.com/github-btn.html?user=webmin&repo=webmin&type=star&count=true&size=large" frameborder="0" scrolling="0" width="170" height="30" title="GitHub"></iframe>',
        ghWatchHTML = '<iframe src="https://ghbtns.com/github-btn.html?user=webmin&repo=webmin&type=watch&count=true&size=large&v=2" frameborder="0" scrolling="0" width="170" height="30" title="GitHub"></iframe>',
        ghForkHTML = '<iframe src="https://ghbtns.com/github-btn.html?user=webmin&repo=webmin&type=fork&count=true&size=large" frameborder="0" scrolling="0" width="170" height="30" title="GitHub"></iframe>';
    if (mainPageSocials) {
        mainPageSocials.innerHTML = ghStarsHTML + ghWatchHTML + ghForkHTML;
        const bmenu_elem = document.createElement("div");
        bmenu_elem.classList.add('main-buttons-container');
        bmenu_elem.innerHTML = `{{ partial "main-buttons.html" . }}`;
        mainPageSocials.after(bmenu_elem);
        const img_elem = document.createElement("a");
        img_elem.classList.add('screenshot-entry');
        img_elem.href = '/screenshots/';
        mainPageSocials.after(img_elem);
    }

    // Tweak screenshots to blend with palette
    const isDarkMode = function() { return localStorage.getItem("pref-theme") === 'dark' || document.body.classList.contains('dark') },
        screenshotType = function() { return isDarkMode() ? 'dark' : 'light' },
        screenshotTypeRev = function() { return !isDarkMode() ? 'dark' : 'light' },
        updateScreenshots = function() {
            const screenshots = document.querySelectorAll('figure > img, a > img[src*="/docs/screenshots"]');
            let screenshotsFound = false;
            if (screenshots.length) {
                screenshots.forEach(function(screenshot) {
                    if (screenshot && screenshot.src) {
                        screenshot.classList.remove('loaded');
                        screenshot.classList.add('loading');
                        screenshot.setAttribute('onload', 'javascript: this.classList.add("loaded")');
                        screenshotsFound = true;
                        const themeMode = screenshotType(),
                            themeModeRev = screenshotTypeRev();
                        screenshot.src = screenshot.src.replace('/' + themeModeRev + '/', '/' + themeMode + '/');
                        if (screenshot.parentElement.nodeName === 'A') {
                            screenshot.parentElement.href =
                                screenshot.parentElement.href.replace('/' + themeModeRev + '/', '/' + themeMode + '/');
                        }
                    }
                });
            }
            return screenshotsFound;
        };

    // We need to check it in another stack, because Safari
    // is just not reliable for anything complex
    setTimeout(function() {
        if (document.querySelector('html[class*="page-index"]') ||
            document.querySelector('html[class^="page-page"]') ||
            document.querySelector('html[class*="page-changelog"]') ||
            document.querySelector('html[class*="page-docs"]')) {
            // On changing mode change screenshots palette
            if (updateScreenshots()) {
                const themeToggle = document.querySelector('#theme-toggle');
                themeToggle.addEventListener("click", function() {
                    updateScreenshots();
                }, false);
            }
        }
    }, 10);

    // Use our pagination class
    const paginations = document.querySelectorAll('.pagination > a');
    if (paginations.length) {
        paginations.forEach(function(pagination) {
            if (pagination) {
                pagination.classList.add('btn', 'btn-sm', 'btn-outline-dark');
            }
        });
    }
})();