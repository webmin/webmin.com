---
title: "Intro"
date: 2017-10-02
categories: []
aliases: []
toc: false
draft: false
---
# Introduction To Webmin

Webmin is a web-based interface for system administration for Unix. Using any browser that supports tables and forms (and Java for the File Manager module), you can setup user accounts, Apache, DNS, file sharing and so on.

Webmin consists of a simple web server, and a number of CGI programs which directly update system files like /etc/inetd.conf and /etc/passwd. The web server and all CGI programs are written in Perl version 5, and use no non-standard Perl modules.

# Who developed Webmin?

Almost all the development of Webmin was done by [Jamie Cameron][1], though many people have contributed patches and translations into additional languages. There are also many [third-party modules][2] that were developed by other people separately.

# What licence is Webmin distributed under?

All recent versions of Webmin are under a BSD-like licence, meaning that it may be freely distributed and modified for commercial and non-commercial use.

Because Webmin supports the concept of modules (like PhotoShop plugins), anyone can develop and distribute their own Webmin modules for any purpose, and distribute them under any licence (such as GPL, commercial or shareware). [More information][3] about the Webmin API and writing your own modules is available.

# Thanks To..

The following people have helped in the development of Webmin

* **Martin Mewes**<br />
 Translating large amounts of Webmin into German, and co-ordinating other translators.
* **Jaume Badiella**<br />
 Providing an extensive Catalan translation, which is more complete than any language other than English.
* **Gerhard Klein (Gerhard@Klein-home.de)**<br />
 Porting various Webmin modules to HPUX.
* **Alicher Alikhodjaev (cher@park.ru)**<br />
 Providing porting information for FreeBSD.
* **Juergen Egeling (egeling@punkt.de)**<br />
 More porting information for FreeBSD.
* **Hans Waasdorp (hansw@imco.nl)**<br />
 Providing access to a FreeBSD 3.0 system for testing.
* **Thomas James Mackie III (tmackie@awak.com)**<br />
 Providing access to TurboLinux and Corel Linux systems for testing.
* **Kevin Lo (kevlo@openbsd.org)**<br />
 Contributing a port for OpenBSD.

  [1]: mailto:jcameron@webmin.com
  [2]: http://webmin.thirdpartymodules.com/
  [3]: http://doxfer.webmin.com/Webmin/ModuleDevelopment
