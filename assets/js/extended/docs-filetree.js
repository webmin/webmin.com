(function () {
    // Attach docs filetree menu to the right
    // container depending on the screen size
    const containerSelector = ".docs-menu > .docs-menu-content";
    window.addEventListener("resize", function (e) {
        const asideMenu = document.querySelector(".docs-menu"),
            asideMobile = document.querySelector(".asideMobile .inner");

        // Desktop mode
        if (asideMenu && asideMenu.offsetParent) {
            const contentActiveContent = asideMobile.querySelector(".docs-menu-content");
            contentActiveContent && asideMenu.append(contentActiveContent);
            // Mobile mode
        } else {
            const contentActiveContent = asideMenu.querySelector(".docs-menu-content");
            contentActiveContent && asideMobile.append(contentActiveContent);
        }
        document.dispatchEvent(new Event("scroll"));
    });
    window.dispatchEvent(new Event("resize"));

    // Scroll filetree into view
    const closestDetails = document.querySelector(".docs-menu details .active"),
        scrollToElementInContainer = function (element, container) {
            const containerRect = container.getBoundingClientRect(),
                containerStyle = window.getComputedStyle(container),
                elementRect = element.getBoundingClientRect(),
                relativeTop = elementRect.top - containerRect.top,
                scrollPosition =
                    relativeTop +
                    container.scrollTop -
                    (parseInt(containerStyle.paddingTop) + containerRect.top);
            // Scroll to the element
            container.scrollTop = scrollPosition;
        };
    closestDetails && closestDetails.closest("details").setAttribute("open", "open");
    if (
        closestDetails &&
        !__.isVisibleInContainer(closestDetails, document.querySelector(".docs-menu-content"))
    ) {
        scrollToElementInContainer(closestDetails, document.querySelector(containerSelector));
    }
    // When searching control related content
    document.getElementById("searchInput").addEventListener("keyup", function (event) {
        document.querySelector(".docs-menu-content").scrollTop = 0;
        if (closestDetails && !this.value && !window.matchMedia("(max-width: 900px)").matches) {
            scrollToElementInContainer(closestDetails, document.querySelector(containerSelector));
        }
    });
})();
