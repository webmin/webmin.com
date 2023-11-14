/* jshint esversion: 6 */
(function() {
    // Main page tweaks
    const mainPageSocials = document.querySelector('.main > article > .entry-footer > .social-icons'),
    ghStarsHTML = '<iframe src="https://ghbtns.com/github-btn.html?user=webmin&repo=webmin&type=star&count=true&size=large" frameborder="0" scrolling="0" width="170" height="30" title="GitHub"></iframe>',
    ghWatchHTML = '<iframe src="https://ghbtns.com/github-btn.html?user=webmin&repo=webmin&type=watch&count=true&size=large&v=2" frameborder="0" scrolling="0" width="170" height="30" title="GitHub"></iframe>',
    ghForkHTML = '<iframe src="https://ghbtns.com/github-btn.html?user=webmin&repo=webmin&type=fork&count=true&size=large" frameborder="0" scrolling="0" width="170" height="30" title="GitHub"></iframe>';
    if (mainPageSocials) {
        mainPageSocials.innerHTML = ghStarsHTML + ghWatchHTML + ghForkHTML;
        const bmenu_elem = document.createElement("div");
        bmenu_elem.classList.add('main-buttons-container');
        bmenu_elem.innerHTML = `{{ partial "main-buttons.html" . }}`;
        mainPageSocials.after(bmenu_elem);
        const img_elem = document.createElement("a");
        img_elem.classList.add('screenshot-entry');
        img_elem.href = '/screenshots/';
        mainPageSocials.after(img_elem);
    }
})();