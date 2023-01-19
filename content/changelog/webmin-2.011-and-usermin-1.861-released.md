---
title: "Webmin 2.011 and Usermin 1.861 released"
date: 2023-01-12
tags: ["changelog"]
---

* Add ability to set shell character encoding and set `TERM` environmental variable in the new Terminal module
* Add support for editing network interfaces in include files for Debian systems
* Add various improvements to the old good Framed Theme
* Fix to change Gray Framed Theme name to Framed Theme
* Fix to verify and close WebSocket session, if parent session was closed
* Fix to remove `RC4` from the list of strong ciphers
* Fix don't fail LDAP user or group deletion, if they have already been deleted
* Fix error handling in MySQL/MariaDB Database server module when executing SQL commands
* Fix adding an extra server attachment field and other bugs in Read User Mail module
* Fix the link to release notes for Rocky Linux
* Fix issues with freezing and thawing dynamic reverse zones in BIND DNS Server module
* Fix bugs for modules granting anonymous access
* Fix `mailbox_idle_check_interval` option related bugs in Dovecot module [sourceforge.net#5602](https://sourceforge.net/p/webadmin/bugs/5602/)
* Fix to use correct extension for package file when upgrading Webmin [webmin/authentic-theme#1633](https://github.com/webmin/authentic-theme/issues/1633)
* Update the Authentic theme to the latest version

---

#### Assets

| File                       | Size | File                       | Size |
| -------------------------- | -----| -------------------------- | ---- |
| **Webmin**                 |      | **Usermin**                |      |
|[webmin-2.011-1.noarch.rpm](https://github.com/webmin/webmin/releases/download/2.011/webmin-2.011-1.noarch.rpm) | 39.9 MB | [usermin-1.861-1.noarch.rpm](https://github.com/webmin/usermin/releases/download/1.861/usermin-1.861-1.noarch.rpm) | 15.7 MB |
|[webmin_2.011_all.deb](https://github.com/webmin/webmin/releases/download/2.011/webmin_2.011_all.deb)           | 32.7 MB | [usermin-1.861_all.deb](https://github.com/webmin/usermin/releases/download/1.861/usermin_1.861_all.deb)           | 10.9 MB |
|[webmin-2.011.tar.gz](https://github.com/webmin/webmin/releases/download/2.011/webmin-2.011.tar.gz)             | 44.9 MB | [usermin-1.861.tar.gz](https://github.com/webmin/usermin/releases/download/1.861/usermin-1.861.tar.gz)             | 17.4 MB |
|[webmin-2.011.pkg.gz](https://github.com/webmin/webmin/releases/download/2.011/webmin-2.011.pkg.gz)             | 44.3 MB | | |
