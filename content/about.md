---
title: "About"
date: 2017-10-02
showtoc: false
---

## Intro

Webmin is a web-based system administration tool for Unix-like servers, and services with over 1,000,000 installations worldwide. Using it, it is possible to configure operating system internals, such as users, disk quotas, services or configuration files, as well as modify, and control open-source apps, such as **BIND** DNS Server, **Apache** HTTP Server, **PHP**, **MariaDB/MySQL**, and many more.

Webmin consists of a simple web server, and a number of sub-programs which directly update system files like `/etc/fstab` and `/etc/passwd`. The web server and all sub-programs are written in Perl version 5, and use no non-standard Perl modules.

## Licence

All recent versions of Webmin are licensed under BSD-3-Clause licence, meaning that it may be freely distributed and modified for commercial and non-commercial use.

## Supported Systems
Because different Unix-like operating systems and Linux distributions use different locations for their various config files, Webmin can only support systems for which it has been configured. The following operating systems are supported by the current Webmin version:
{{< details-start post-content-details "<i class='wm wm-linux'></i>"  >}}
{{% include file="/data/about/supported-os.md" %}}
{{< details-end >}}

## Supported Languages
Translation of Webmin modules into different languages is done by volunteers. {{% include file="/data/supported-languages.md" %}}
{{< details-start post-content-details "<i class='wm wm-language'></i>"  >}}
{{% include file="/data/supported-languages-list.md" %}}
{{< details-end >}}

## Modules
Because Webmin supports the concept of modules (like Photoshop plugins), anyone can develop and distribute their own Webmin modules for any purpose, and distribute them under any licence (such as GPL, commercial or shareware). [More information](https://doxfer.webmin.com/Webmin/ModuleDevelopment) about the Webmin API and writing your own modules is available.

## Developers
[Jamie Cameron](/about-jamie) &mdash; Author and the lead developer.

[@iliajie](https://github.com/iliajie) &mdash; Author of [Authentic Theme](https://github.com/webmin/authentic-theme), [language manager](https://github.com/webmin/webmin/blob/master/bin/language-manager) script and multiple continuous code contributions.
{{< details-start post-content-indent-details "<i class='wm wm-users-cog'></i>"  >}}
Webmin provides an excellent platform for programs that configure Linux and Unix systems. Interfaces for backup servers, spam and virus filtering, SOHO servers, firewalls and much more have been built on top of Webmin, typically as custom modules and/or themes. Many businesses have created modules to configure specialized or in-house applications, such as for satellite control, medical devices and tape loaders.

If none of the standard or third-party modules meet your requirements, and you don't have the programming skills to put together a module yourself, one of the developers listed on this page may be able to help you (for a price).

* [**Alex Medina**](mailto:alex@alexmedina.name) - Specialty: Everything
* [**Antonio Gallo**](mailto:agx@linux.it) - Specialty: Webmin modules and themes, tailor made Linux distribution customization
* [**Charlie Garrison**](mailto:garrison@zeta.org.au) - Specialty: System administration (MySQL, djbdns, qmail, Apache, mod\_perl, OSX, Linux)
* [**Dana French**](dfrench@mtxia.com) - Specialty: Business Continuity, Disaster Recovery, High Availability, and Virtualization
* [**Richard Teachout**](http://www.teachout.com/) - Specialty: General module development.

{{< alert primary exclamation "Getting listed on this page?" "If you want your name or company to be listed here too, just email us at **[developers@webmin.com](mailto:developers@webmin.com)** with your details, specialty and some information about module or theme development work you have done in the past." >}}

{{< details-end >}}

## Contributors

**Martin Mewes** &mdash; Translating large amounts of Webmin into German, and co-ordinating other translators.

**Jaume Badiella** &mdash; Providing an extensive Catalan translation, which is more complete than any language other than English.

**[Gerhard Klein](mailto:gerhard@Klein-home.de)** &mdash; Porting various Webmin modules to HPUX.

**[Alicher Alikhodjaev](mailto:cher@park.ru)** &mdash; Providing porting information for FreeBSD.

**[Juergen Egeling](mailto:egeling@punkt.de)** &mdash; More porting information for FreeBSD.

**[Hans Waasdorp](mailto:hansw@imco.nl)** &mdash; Providing access to a FreeBSD 3.0 system for testing.

**[Thomas James Mackie III](mailto:tmackie@awak.com)** &mdash; Providing access to TurboLinux and Corel Linux systems for testing.

**[Kevin Lo](mailto:kevlo@openbsd.org)** &mdash; Contributing a port for OpenBSD.

**[.. and hundreds of many others](https://github.com/webmin/webmin/graphs/contributors)**


