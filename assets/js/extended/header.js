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
