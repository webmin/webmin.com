---
title: "Webmin 2.200 and Usermin 2.020 released"
date: 2024-07-21
tags: ["changelog", "webmin-changelog", "usermin-changelog"]
---
* Add support for blocking a given IP temporarily or permanently in the FirewallD module
* Add support for parsing iCalendar event files in the Mailbox module
* Add support for tailing logs in real time in System Logs module
* Add ability to preserve original file ACLs when writing files [webmin/authentic-theme#1511](https://github.com/webmin/authentic-theme/discussions/1511#discussioncomment-9913902)
* Add a `patch` sub-command to the `webmin` command for easy application of patches
* Add a config option to display hostname and comment in the DHCP Server module [#2221](https://github.com/webmin/webmin/issues/2221)
* Add support for ED25519 and ED448 algorithms in BIND DNS module for DNSSEC
* Add support for larger ranger of authentication methods in Dovecot module
* Add improved support for displaying last logins in the Users and Groups module
* Fix to prevent duplicate `also-notify` and `allow-transfer` IPs in the BIND DNS module
* Fix issues with Terminal module to correct text display problems in editor mode
* Fix to store Terminal module logs in the `/var/webmin` directory
* Fix to display the Spam folder nicely in the Mailbox module
* Fix how modules are loaded in ProFTPd module
* Fix support for the Chrony service on Debian systems in the System Time module
* Fix to use static routes to set the default gateway in Network Configuration module
* Fix to correctly invalidate EOL cache on re-checks [#2139](https://github.com/webmin/webmin/issues/2139)
* Fix to change default monitor name based on database used MariaDB vs MySQL [#2139](https://github.com/virtualmin/virtualmin-gpl/issues/798)
* Fix to disable manual upgrades for systems installed from the repository
* Fix to preserve Webmin service state during package upgrades [#2133](https://github.com/webmin/webmin/issues/2133)
* Change to enforce _sudo_-capable logins as themselves in the Terminal module [docs/modules/terminal](https://webmin.com/docs/modules/terminal/#about)
* Rename "System Logs" module to "System Logs RS" and "System Logs Viewer" to "System Logs" for clarity

---

#### Assets

| File                       | Size | File                       | Size |
| -------------------------- | -----| -------------------------- | ---- |
| **Webmin**                 |      | **Usermin**                |      |
|[webmin-2.200-1.noarch.rpm](https://github.com/webmin/webmin/releases/download/2.200/webmin-2.200-1.noarch.rpm) | 41.0 MB | [usermin-2.020-1.noarch.rpm](https://github.com/webmin/usermin/releases/download/2.020/usermin-2.020-1.noarch.rpm)    | 16.5 MB |
|[webmin_2.200_all.deb](https://github.com/webmin/webmin/releases/download/2.200/webmin_2.200_all.deb)           | 33.7 MB | [usermin-2.020_all.deb](https://github.com/webmin/usermin/releases/download/2.020/usermin_2.020_all.deb)              | 11.9 MB |
|[webmin-2.200.pkg.gz](https://github.com/webmin/webmin/releases/download/2.200/webmin-2.200.pkg.gz)             | 45.9 MB | [usermin-2.020.tar.gz](https://github.com/webmin/usermin/releases/download/2.020/usermin-2.020.tar.gz)                | 18.5 MB |
|[webmin-2.200.tar.gz](https://github.com/webmin/webmin/releases/download/2.200/webmin-2.200.tar.gz)             | 46.5 MB | | |
|[webmin-2.200-minimal.tar.gz](https://github.com/webmin/webmin/releases/download/2.200/webmin-2.200-minimal.tar.gz) | 4.6 MB | |
