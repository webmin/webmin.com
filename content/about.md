---
title: "About"
date: 2017-10-02
draft: false
showtoc: false
---

Webmin is a web-based system administration tool for Unix-like servers, and services with over 1,000,000 installations worldwide. Using it, it is possible to configure operating system internals, such as users, disk quotas, services or configuration files, as well as modify, and control open-source apps, such as **BIND** DNS Server, **Apache** HTTP Server, **PHP**, **MySQL**, and many more.

Webmin consists of a simple web server, and a number of sub-programs which directly update system files like `/etc/fstab` and `/etc/passwd`. The web server and all sub-programs are written in Perl version 5, and use no non-standard Perl modules.

### Licence

All recent versions of Webmin are licensed under BSD-3-Clause licence, meaning that it may be freely distributed and modified for commercial and non-commercial use.

### Supported OS
Because different Unix-like operating systems and Linux distributions use different locations for their various config files, Webmin can only support systems for which it has been configured.
{{< details-start supported-os "<i class='wm wm-facebook'></i>"  >}}
{{% include file="/static/data/supported-os.txt" %}}
{{< details-end >}}


### Modules
Because Webmin supports the concept of modules (like Photoshop plugins), anyone can develop and distribute their own Webmin modules for any purpose, and distribute them under any licence (such as GPL, commercial or shareware). [More information](https://doxfer.webmin.com/Webmin/ModuleDevelopment) about the Webmin API and writing your own modules is available.

### Lead Developer

Almost all the development of Webmin was done by [Jamie Cameron](../about-jamie), though many people have contributed patches and translations.

### Contributions

**[@iliajie](https://github.com/iliajie)** &mdash; Continuous code contributions, author of language manager script and [Authentic Theme](https://github.com/webmin/authentic-theme)

**Martin Mewes** &mdash; Translating large amounts of Webmin into German, and co-ordinating other translators

**Jaume Badiella** &mdash; Providing an extensive Catalan translation, which is more complete than any language other than English

**[Gerhard Klein](mailto:gerhard@Klein-home.de)** &mdash; Porting various Webmin modules to HPUX

**[Alicher Alikhodjaev](mailto:cher@park.ru)** &mdash; Providing porting information for FreeBSD

**[Juergen Egeling](mailto:egeling@punkt.de)** &mdash; More porting information for FreeBSD

**[Hans Waasdorp](mailto:hansw@imco.nl)** &mdash; Providing access to a FreeBSD 3.0 system for testing

**[Thomas James Mackie III](mailto:tmackie@awak.com)** &mdash; Providing access to TurboLinux and Corel Linux systems for testing

**[Kevin Lo](mailto:kevlo@openbsd.org)** &mdash; Contributing a port for OpenBSD




