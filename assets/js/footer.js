/* jshint esversion: 6 */
(function() {
    const
        siteName = '{{ site.BaseURL }}',
        headerTargSel = 'body > .header',
        menuLinkTargSel = '' + headerTargSel + ' > .nav #menu > li > a',
        themeToggleTargSel = '' + headerTargSel + ' #theme-toggle',
        postsLinksTargSel = '.main .post-content a',
        postsLinksWithBadgeTarg = document.querySelectorAll('.main .post-content a > .badge'),
        hmenuDropDownTargSel = '.hmenu-panel > .hmenu-drop-down',
        searchLink = document.querySelector('' + menuLinkTargSel + '[href$="/search/"] > span'),
        hmenuLink = document.querySelector('' + menuLinkTargSel + '[href$="/hmenu/"]'),
        hmenuLinkText = hmenuLink.querySelector('span'),
        outerlinksAll = [
            document.querySelectorAll('' + menuLinkTargSel + '[href$="Webmin/Main_Page"]'),
            document.querySelectorAll(postsLinksTargSel),
        ];

    // Search link as icon
    searchLink.classList.add('wm', 'wm-search');
    searchLink.innerHTML = String();

    // Custom dropdown menu offsets calcs
    const hmenu_html = `{{ partial "nav_menu.html" . }}`,
        hmenuResize = function() {
            const hmenuRightOffset = document.documentElement.clientWidth - hmenuLinkText.getBoundingClientRect().right,
                hmenuRightOffsetPixel = devicePixelRatio >= 1 ? (Math.ceil(hmenuRightOffset / 0.25) * 0.25) : hmenuRightOffset,
                hmenuTopOffset = hmenuLinkText.getBoundingClientRect().top,
                hmenuDropDownTarg = hmenuLink.querySelector(hmenuDropDownTargSel);
            if (hmenuDropDownTarg) {
                hmenuDropDownTarg.style.right = hmenuRightOffsetPixel + "px";
                hmenuDropDownTarg.style.top = "calc(" + (hmenuTopOffset + hmenuLinkText.offsetHeight) + "px - 4px)";
            }
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
                hmenuLink.querySelector(hmenuDropDownTargSel + ' a[href="' + (location.pathname + location.hash) + '"]');
            hmenuActiveLink && hmenuActiveLink.classList.add('active');
        }
    });

    // Mark all links with the badge inside
    postsLinksWithBadgeTarg.forEach(function(postsLinkWithBadge) {
        postsLinkWithBadge.parentElement.classList.add('badge-link');
        postsLinkWithBadge.parentElement.parentElement.classList.add('badge-container');
    });

    // Resize actions for the page
    window.onresize = function() {
        hmenuResize();
    }

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

    // Outer links to new thw tab
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

    // Navigation buttons tweak
    const isLocation = function(test) {
        return location && typeof location.pathname === 'string' && location.pathname.includes('/' + test + '/');
    }
    if (isLocation('changelog') || isLocation('archives')) {
        document.querySelector('' + menuLinkTargSel + '[href$="changelog/"] > span').classList.add('active');
    }

    // Main page tweaks
    const mainPageSocials = document.querySelector('.main > article > .entry-footer > .social-icons'),
        ghStarsHTML = '<iframe src="https://ghbtns.com/github-btn.html?user=webmin&repo=webmin&type=star&count=true&size=large" frameborder="0" scrolling="0" width="170" height="30" title="GitHub"></iframe>',
        ghWatchHTML = '<iframe src="https://ghbtns.com/github-btn.html?user=webmin&repo=webmin&type=watch&count=true&size=large&v=2" frameborder="0" scrolling="0" width="170" height="30" title="GitHub"></iframe>',
        ghForkHTML = '<iframe src="https://ghbtns.com/github-btn.html?user=webmin&repo=webmin&type=fork&count=true&size=large" frameborder="0" scrolling="0" width="170" height="30" title="GitHub"></iframe>';
    if (mainPageSocials) {
        mainPageSocials.innerHTML = ghStarsHTML + ghWatchHTML + ghForkHTML;
    }
})();