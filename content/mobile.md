---
title: "Mobile"
date: 2017-10-02
categories: []
aliases: []
toc: false
draft: false
---
# Virtualmin Mobile/iPhone Theme

If you access Virtualmin or even just regular Webmin via a mobile device such as an iPhone, Treo, cellphone or PDA with a limited browser, the mobile theme will re-format the UI to make it easier to use. It makes use of the themeing capabilities in the Webmin UI library that most modules have been updated to use, which allow forms and pages to be reformatted to fit a smaller screen.

If you use Virtualmin, you can quickly navigate to domains and perform global configuration changes using the first menu that appears after login. In a way, the user interface is similar to that of the Virtualmin framed theme, in which navigation is by domain rather than by module. However, all the regular Webmin modules are still accessible, and are listed under their categories on the first page.

Thanks to the wonderful [IUI][1] library for iPhone application development, if you are using the Safari browser on an iPhone or iPod touch the theme's UI will take advantage of features that are available on those devices. Unlike most mobile devices, Javascript and CSS are fully supported, and are used to create a UI that mimics native iPhone applications.

# Downloading the Theme

The mobile theme is available in the following formats :

Webmin theme package, for any system<br />
<https://download.webmin.com/download/virtualmin/virtual-server-mobile-2.7.wbt.gz> (68 kB)

RPM format, for Redhat, Fedora or CentOS<br />
<https://download.webmin.com/download/virtualmin/wbt-virtual-server-mobile-2.7-1.noarch.rpm> (80 kB)

Debian package format, for Debian and Ubuntu<br />
[https://download.webmin.com/download/virtualmin/webmin-virtual-server-mobile\_2.7\_all.deb][2] (72 kB)

# Installing the Mobile Theme

The installation process is essentiall the same as any other Webmin theme, but with an additional confirmation step to enable it for mobile devices only :

1. Download the appropriate theme package above. If you installed Webmin from an RPM, get the RPM - if from a Debian package, get the theme in the same format.
2. Login to Webmin, and go to **Webmin** -&gt; **Webmin Configuration** -&gt; **Webmin Modules**.
3. Install the downloaded file.
4. Go back to the **Webmin Configuration** module, and click on **Mobile Device Options**.
5. Select the **Virtualmin Mobile Theme** from the **Theme for mobile browsers** menu, and click **Save**.

You should now be able to use the browser on your iPhone or other mobile device to open the Webmin URL for your system, and see the mobile-specific user interface. If not, this indicates a problem with Webmin's browser detection, and a [bug report][3] should be filed.

# iPhone Screenshots

[<img src="images/mobile_sysinfo.png" width="160" height="240" />][4] [<img src="images/mobile_domains.png" width="160" height="240" />][5] [<img src="images/mobile_alias.png" width="160" height="240" />][6]

# Treo Screenshots

[<img src="images/treo_edit.png" width="161" height="161" />][7] [<img src="images/treo_alias.png" width="161" height="161" />][8]

  [1]: http://code.google.com/p/iui/
  [2]: https://download.webmin.com/download/virtualmin/webmin-virtual-server-mobile_2.7_all.deb
  [3]: bugs.html
  [4]: images/mobile_sysinfo.png
  [5]: images/mobile_domains.png
  [6]: images/mobile_alias.png
  [7]: images/treo_edit.png
  [8]: images/treo_alias.png
