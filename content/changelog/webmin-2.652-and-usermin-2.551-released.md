---
title: "Webmin 2.652 and Usermin 2.551 released"
date: 2026-07-16
tags: ["changelog", "webmin-changelog", "usermin-changelog"]
---

* Add a global per-user ACL control to block URL downloads from non-public IP addresses in File Manager, Mailboxes, and Upload and Download modules
* Fix to recognize hex numeric HTML entities to work in various elements
* Fix `patch` sub-command to reload Webmin instead of restarting, making it possible to run from Terminal module
* Fix SSL certificate and TCP monitors to report transient connection failures as down, and SSL check timeouts as timed out, rather than uninstalled
* Fix local file imports to enforce file access ACLs in Users and Groups, LDAP Users, MySQL/MariaDB, and PostgreSQL modules
* Fix Webmin user switching and session checks to find sessions stored with HMAC session keys
* Fix Usermin user switching to use one-time login URLs instead of the legacy cookie handoff and service restart flow
* Fix APT package architecture suffix handling to avoid false package update failure reports
* Fix missing Maildir folders to be counted as empty in Mailboxes module
* Fix Postfix version comparisons to handle version strings safely
* Fix SELinux labeling for Webmin and Usermin runtime data
* Update the Authentic theme to the latest version with various improvements:
  - Fix inconsistent gaps around rounded UI elements
  - Fix CPU usage values exceeding 100% in the dashboard
  - Fix File Manager remote downloads to respect download address restrictions
  - Fix spacing in the login page welcome message

---

#### Assets

| File                       | Size | File                       | Size |
| -------------------------- | -----| -------------------------- | ---- |
| **Webmin**                 |      | **Usermin**                |      |
|[webmin-2.652-1.noarch.rpm](https://github.com/webmin/webmin/releases/download/2.652/webmin-2.652-1.noarch.rpm)     | 32.5 MB  |   [usermin-2.551-1.noarch.rpm](https://github.com/webmin/usermin/releases/download/2.551/usermin-2.551-1.noarch.rpm)    | 13.8 MB |
|[webmin_2.652_all.deb](https://github.com/webmin/webmin/releases/download/2.652/webmin_2.652_all.deb)               | 26.7 MB  |   [usermin-2.551_all.deb](https://github.com/webmin/usermin/releases/download/2.551/usermin_2.551_all.deb)              | 9.4 MB  |
|[webmin-2.652.pkg.gz](https://github.com/webmin/webmin/releases/download/2.652/webmin-2.652.pkg.gz)                 | 36.3 MB  |   [usermin-2.551.tar.gz](https://github.com/webmin/usermin/releases/download/2.551/usermin-2.551.tar.gz)                | 15.4 MB |
|[webmin-2.652.tar.gz](https://github.com/webmin/webmin/releases/download/2.652/webmin-2.652.tar.gz)                 | 37.1 MB  |
|[webmin-2.652-minimal.tar.gz](https://github.com/webmin/webmin/releases/download/2.652/webmin-2.652-minimal.tar.gz) | 3.7 MB   |
