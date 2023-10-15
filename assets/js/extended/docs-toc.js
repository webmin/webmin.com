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

    let $this = {};
    labelTarget.querySelectorAll('ul > li > a').forEach(function(elem) {
        elem.addEventListener("click", function(e) {
            $this.scrollDelay = 1;
            e.preventDefault();
        });
    })
    if (scrollTarget && labelTarget) {
        document.addEventListener("scroll", function(e) {

            // Stop if hidden
            if (!document.querySelector(labelTargetSelStr).offsetParent) {
                return;
            }

            // Scroll direction
            let scrollDirection = 'up',
                st = window.pageYOffset || document.documentElement.scrollTop;
            if (st > $this.lastScrollTop) {
                scrollDirection = 'down';
            }
            $this.lastScrollTop = st <= 0 ? 0 : st;

            // Accommodate header offset
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
                let lastLabelElem;
                for (const [curElem, labelElem, curID] of dataArray) {
                    if (window.scrollY + scrollOffset >= curElem.offsetTop) {
                        labelTargetsClear();
                        labelElem.classList.add("active");
                        lastLabelElem = labelElem;
                        continue;
                    }
                    labelElem.classList.remove("active");
                }

                // Scroll into view the content on main page scroll
                if (typeof $this.scrollTimer === 'number') clearTimeout($this.scrollTimer);
                if (typeof $this.scrollLastElem === 'number') clearTimeout($this.scrollLastElem);
                if (lastLabelElem) {
                    $this.scrollLastElem = window.setTimeout(function() {
                        const isVisibleElem = isVisible(lastLabelElem);
                        $this.scrollTimer = window.setTimeout(function() {
                            let elemParent = lastLabelElem.parentNode,
                                elemsCont = labelTarget.querySelector('ul'),
                                elemsContTitle = labelTarget.querySelector('h4'),
                                elemIndex = Array.prototype.indexOf.call(elemsCont.childNodes, elemParent);
                            if (!isVisibleElem) {
                                if (elemIndex === 0) {
                                    elemParent = elemsContTitle;
                                }
                                elemParent.scrollIntoView({ behavior: "instant", block: 'nearest', inline: 'nearest' });
                            }
                            setTimeout(function() {
                                $this.scrollDelay = 0;
                            }, 3e1 + 4e1);
                        }, $this.scrollDelay ? 3e1 : 0);
                    }, $this.scrollDelay ? 4e1 : 0);
                }

            }
        }, { passive: true });
        // On initial load trigger scroll
        // once to select the right link
        document.dispatchEvent(new Event("scroll"));
    }
})();