window.addEventListener('DOMContentLoaded', () => {
    // Add container
    const chocolat_drop = document.createElement("div");
    chocolat_drop.classList.add('chocolat-drop');
    document.querySelector("body > .header").before(chocolat_drop);

    // Set offsets
    const menuTopHeight = function() { return document.querySelector('body > .header').clientHeight },
        footerBottomHeight = function() { return document.querySelector('body > footer').clientHeight },
        fixChocolatDrop = function() {
            chocolat_drop.style = 'top: ' + menuTopHeight() + 'px; bottom: ' + footerBottomHeight() + 'px';
            document.querySelector('body > .main').style.setProperty('min-height', 'calc(100vh - ' + menuTopHeight() + 'px - ' + footerBottomHeight() + 'px)');
        };
    fixChocolatDrop();

    // Initialize Chocolat
    const chocolat = Chocolat([
        { src: '/images/webmin_2.010_-_dashboard.png', title: 'Webmin Dashboard' },
        { src: '/images/webmin_2.010_-_file_manager.png', title: 'Webmin File Manager' },
        { src: '/images/webmin_2.010_-_terminal.png', title: 'Webmin Terminal' },
    ], {
        container: document.querySelector('body > .chocolat-drop'),
        loop: false,
        fullScreen: true,
        imageSize: 'scale-down',
        afterClose: function() {
            setTimeout(function() {
                chocolat.api.open();
            }, 1e2);
        },
    });
    chocolat.api.open();

    window.onresize = function() {
        const targetClassList = document.querySelector('html').classList;
        if (document.fullscreenElement || document.webkitCurrentFullScreenElement || document.webkitFullscreenElement) {
            targetClassList.add('chocolat-fullscreen');
        } else {
            targetClassList.remove('chocolat-fullscreen');
            chocolat.api.set('imageSize', 'contain')
            // Reposition the image according to the new value `contain`
            chocolat.api.position()
        }
        fixChocolatDrop();
    }
});