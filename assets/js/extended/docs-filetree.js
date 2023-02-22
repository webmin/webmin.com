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
