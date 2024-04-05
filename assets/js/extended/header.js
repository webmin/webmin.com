/* jshint esversion: 6 */
const isVisibleInContainer = (elem, container) => {
    if (!(elem instanceof Element) || !(container instanceof Element)) return false;

    // Check for CSS visibility
    const style = getComputedStyle(elem);
    if (style.display === "none" || style.visibility !== "visible" || style.opacity === "0") {
        return false;
    }

    const elemRect = elem.getBoundingClientRect(),
        containerRect = container.getBoundingClientRect();

    // Check if the element is within the container's bounds
    return (
        elemRect.top >= containerRect.top &&
        elemRect.left >= containerRect.left &&
        elemRect.bottom <= containerRect.bottom &&
        elemRect.right <= containerRect.right
    );
};

const themeLink = function (event, element) {
    // Prevent the default link behavior
    event.preventDefault();

    // Check if the body has the class 'dark'
    const theme = document.body.classList.contains("dark") ? "dark" : "light",

    // Modify the link based on the theme
    newHref = element.href + "?theme=" + theme;

    // Check if the link is meant to be opened in a new window/tab
    if (element.target === "_blank") {
        // Open in a new tab
        window.open(newHref, "_blank");
    } else {
        // Navigate in the current tab
        window.location.href = newHref;
    }
};
