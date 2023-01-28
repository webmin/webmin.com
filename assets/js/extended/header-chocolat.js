window.addEventListener('DOMContentLoaded', () => {
    const chocolat_drop = document.createElement("div");
    chocolat_drop.classList.add('chocolat-drop');
    document.querySelector("body > .header").before(chocolat_drop);
    const chocolat = Chocolat([
        { src: '/images/webmin_2.010_-_dashboard.png', title: 'Webmin Dashboard' },
        { src: '/images/webmin_2.010_-_file_manager.png', title: 'Webmin File Manager' },
        { src: '/images/webmin_2.010_-_terminal.png', title: 'Webmin Terminal' },
    ], {
        container: document.querySelector('body > .chocolat-drop'),
        loop: true,
        imageSize: 'scale-down',
        afterClose: function() {
          setTimeout(function() {
            chocolat.api.open();
          }, 200);
        },
        afterMarkup: function () {
          setTimeout(function() {
           chocolat.api.set('fullScreen', true);
          }, 200)
        }
    });
    chocolat.api.open();

    window.onresize = function() {
      const targetClassList = document.querySelector('html').classList;
        if(document.webkitIsFullScreen || document.mozFullScreen || document.msFullscreenElement) {
          targetClassList.add('chocolat-fullscreen');
        } else {
          targetClassList.remove('chocolat-fullscreen');
          chocolat.api.set('imageSize', 'contain')
          // Reposition the image according to the new value `contain`
          chocolat.api.position()
        }
    }
});