(function() {
    // Attach docs filetree menu to the right
    // container depending on the screen size
    window.addEventListener("resize", function(e) {
        const asideMenu = document.querySelector('.docs-menu'),
            asideMobile = document.querySelector('.asideMobile .inner');

        // Desktop mode
        if (asideMenu && asideMenu.offsetParent) {
            const contentActiveContent = asideMobile.querySelector('.docs-menu-content');
            contentActiveContent && asideMenu.append(contentActiveContent)
            // Mobile mode
        } else {
            const contentActiveContent = asideMenu.querySelector('.docs-menu-content');
            contentActiveContent && asideMobile.append(contentActiveContent)
        }
        document.dispatchEvent(new Event("scroll"));
    });
    window.dispatchEvent(new Event("resize"));

    // Scroll filetree into view
    const closestDetails = document.querySelector('.docs-menu details .active');
    closestDetails && closestDetails.closest('details').setAttribute('open', 'open');
    setTimeout(function() {
        if (closestDetails && !isVisible(closestDetails)) {
            closestDetails.scrollIntoView({ behavior: "instant", block: 'center', inline: 'nearest' });
        }
    }, (3e1 + 4e1) * 3)
})();