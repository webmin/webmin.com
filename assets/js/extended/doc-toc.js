// Custom made TOC SpyScroll
(function() {
    const scrollTarget = document.querySelector(".post-content"),
        labelTargetSelStr = '.docs-toc-content',
        labelTarget = document.querySelector(labelTargetSelStr),
        labelTargets = ([...labelTarget.querySelectorAll(`a[href^="#"]`)]
            .map(function(e) {
                const m = e.href.match(/.*#(.*)/)
                if (m) {
                    return [e, m[1]]
                }
                return null;
            }).filter(function(e) { return e !== null })),
        hrefArray = labelTargets.map(function([e, href]) { return href }),
        dataArray = ([...scrollTarget.querySelectorAll(`[id]`)].map(function(e) {
            if (hrefArray.includes(e.id)) {
                return [e, ...labelTargets.filter(function([elem, href]) {
                    return href === e.id
                })[0]]
            }
            return null
        }).filter(function(e) { return e !== null }));
    if (scrollTarget && labelTarget) {
        document.addEventListener("scroll", function(e) {
            // Stop if hidden
            if (!document.querySelector(labelTargetSelStr).offsetParent) {
                return;
            }
            // Accomodate header offset
            const scrollOffset = document.querySelector('.header').clientHeight / 2,
                scrollDifference = document.documentElement.scrollHeight - window.innerHeight,
                scrollposition = document.documentElement.scrollTop,
                labelTargetsClear = function() {
                    labelTargets.forEach(function(e) { e[0].classList.remove('active') });
                };
            if (scrollDifference - scrollposition <= 2) {
                labelTargetsClear();
                labelTargets[labelTargets.length - 1][0].classList.add("active");
            } else {
                for (const [curElem, labelElem, curID] of dataArray) {
                    if (window.scrollY + scrollOffset >= curElem.offsetTop) {
                        labelTargetsClear();
                        labelElem.classList.add("active");
                        continue;
                    }
                    labelElem.classList.remove("active");
                }

            }
        });
        // On initial load trigger scroll
        // once to select the right link
        document.dispatchEvent(new Event("scroll"));
    }
})();