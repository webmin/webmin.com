window.addEventListener("DOMContentLoaded", () => {
    setTimeout(function () {
        Chocolat(document.querySelectorAll('.post-content a[href*="/screenshots/"]'), {
            allowFullScreen: false,
            imageSize: "contain",
            loop: false,
            fullScreen: false,
            imageSource: "href",
            allowZoom: false,
            imageSize: "scale-down",
            afterInitialize: function afterInitialize() {
                document.documentElement.classList.add("overflow-hidden");
                document.querySelectorAll(".header, .main").forEach(function(el) {
                    el.classList.add("disabled");
                });
            },
            afterClose: function afterClose() {
                document.documentElement.classList.remove("overflow-hidden");
                document.querySelectorAll(".header, .main").forEach(function(el) {
                    el.classList.remove("disabled");
                });
            },
        });
        document.addEventListener("keydown", function (event) {
            if (event.key === "Escape" && document.body.classList.contains("chocolat-open")) {
                event.preventDefault();
                document.querySelector(".chocolat-layout .chocolat-close").click();
            }
        });
        document.querySelector("#theme-toggle").addEventListener(
            "click",
            function () {
                document.querySelector(".post-content img.loading") && location.reload();
            },
            false
        );
    }, 100);
});
