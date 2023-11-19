// Custom made TOC SpyScroll
(function () {
    const scrollTarget = document.querySelector(".post-content"),
        labelTargetSelStr = ".docs-toc-content",
        labelTarget = document.querySelector(labelTargetSelStr),
        labelTargets = [...labelTarget.querySelectorAll(`a[href^="#"]`)]
            .map(function (e) {
                const m = e.href.match(/.*#(.*)/);
                if (m) {
                    return [e, m[1]];
                }
                return null;
            })
            .filter(function (e) {
                return e !== null;
            }),
        hrefArray = labelTargets.map(function ([e, href]) {
            return href;
        }),
        dataArray = [...scrollTarget.querySelectorAll(`[id]`)]
            .map(function (e) {
                if (hrefArray.includes(e.id)) {
                    return [
                        e,
                        ...labelTargets.filter(function ([elem, href]) {
                            return href === e.id;
                        })[0],
                    ];
                }
                return null;
            })
            .filter(function (e) {
                return e !== null;
            });

    let $this = {};
    labelTarget.querySelectorAll("ul > li > a").forEach(function (elem) {
        elem.addEventListener("click", function (e) {
            $this.scrollDelay = 1;
            e.preventDefault();
        });
    });
    if (scrollTarget && labelTarget) {
        document.addEventListener(
            "scroll",
            function () {
                const scrollToElementInContainer = function (element, container) {
                        const containerRect = container.getBoundingClientRect(),
                            elementRect = element.getBoundingClientRect(),
                            relativeTop = elementRect.top - containerRect.top,
                            scrollPosition = relativeTop + container.scrollTop;

                        // Scroll to the element
                        container.scrollTop = scrollPosition;
                    },
                    execScroll = function () {
                        // Stop if hidden or loading
                        if (
                            !document.body.dataset.loaded ||
                            !document.querySelector(labelTargetSelStr).offsetParent
                        ) {
                            return;
                        }

                        // Scroll direction
                        let scrollDirection = "up",
                            st = window.pageYOffset || document.documentElement.scrollTop;
                        if (st > $this.lastScrollTop) {
                            scrollDirection = "down";
                        }
                        $this.lastScrollTop = st <= 0 ? 0 : st;

                        // Accommodate header offset
                        const scrollOffset = document.querySelector(".header").clientHeight * 2,
                            scrollDifference =
                                document.documentElement.scrollHeight - window.innerHeight,
                            scrollposition = document.documentElement.scrollTop,
                            labelTargetsClear = function () {
                                labelTargets.forEach(function (e) {
                                    e[0].classList.remove("active");
                                });
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
                            if (typeof $this.scrollTimer === "number")
                                clearTimeout($this.scrollTimer);
                            if (typeof $this.scrollLastElem === "number")
                                clearTimeout($this.scrollLastElem);
                            if (lastLabelElem) {
                                $this.scrollLastElem = window.setTimeout(
                                    function () {
                                        const isVisibleElem = isVisibleInContainer(
                                            lastLabelElem,
                                            labelTarget
                                        );
                                        $this.scrollTimer = window.setTimeout(
                                            function () {
                                                let elemParent = lastLabelElem.parentNode,
                                                    elemsCont = labelTarget.querySelector("ul"),
                                                    elemsContTitle =
                                                        labelTarget.querySelector("h4"),
                                                    elemIndex = Array.prototype.indexOf.call(
                                                        elemsCont.childNodes,
                                                        elemParent
                                                    );
                                                if (!isVisibleElem) {
                                                    if (elemIndex === 0) {
                                                        elemParent = elemsContTitle;
                                                    }
                                                    if (!document.body.dataset.page_loaded) {
                                                        scrollToElementInContainer(
                                                            elemParent,
                                                            labelTarget
                                                        );
                                                    } else {
                                                        elemParent.scrollIntoView({
                                                            behavior: "auto",
                                                            // Glitcy in Firefox, manifested as non-stop scrolling, but why!?
                                                            // scrollDirection === "up" ? "end" : "start",
                                                            block: "center",
                                                            // inline: "center",
                                                        });
                                                    }
                                                }
                                                setTimeout(function () {
                                                    $this.scrollDelay = 0;
                                                }, 3e1 + 4e1 + 1e1);
                                            },
                                            $this.scrollDelay ? 3e1 : 1e1
                                        );
                                    },
                                    $this.scrollDelay ? 4e1 : 0
                                );
                            }
                        }
                    };
                // When scrolling stopped
                const deferredScroll = (time) => {
                    $this_ = this;
                    if ($this_.debounceTimer) {
                        $this.scrollDelay = 1;
                        clearTimeout($this_.debounceTimer);
                    }
                    $this_.debounceTimer = setTimeout(function () {
                        execScroll();
                        $this_.scrollCounter = 1;
                        // Update URL hash
                        if (document.body.dataset.page_loaded) {
                            const activeLink = labelTarget.querySelector("a.active");
                            if (activeLink) {
                                const activeLinkHash = activeLink.getAttribute("href");
                                if (activeLinkHash && activeLinkHash !== window.location.hash) {
                                    window.history.replaceState(
                                        null,
                                        null,
                                        window.location.pathname + activeLinkHash
                                    );
                                }
                            }
                        }
                    }, time);
                };
                // If triggered by click, scroll delay is lower than usual
                deferredScroll(1e1);

                if (!this.scrollCounter) {
                    this.scrollCounter = 1;
                } else {
                    // After scrolling for a
                    // while, update the TOC
                    this.scrollCounter++;
                    if (this.scrollCounter > 10e1) {
                        this.scrollCounter = 1;
                        execScroll();
                    }
                }
            },
            { passive: true }
        );
    }

    // Adjust initial scroll position
    window.addEventListener("load", function () {
        setTimeout(function () {
            document.body.dataset.loaded = true;
            // On initial load trigger scroll
            // once to select the right link
            document.dispatchEvent(new Event("scroll"));
            setTimeout(function () {
                document.body.dataset.page_loaded = true;
            }, 30e1);
        });
    });
})();
