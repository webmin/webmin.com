---
title: "Webmin 2.621 and Usermin 2.521 released"
date: 2026-01-09
tags: ["changelog", "webmin-changelog", "usermin-changelog"]
---
* Fix to prevent NAT from dropping idle RPC sessions during long transfers
* Fix to improve the message when socket authentication is used in the MySQL/MariaDB module
* Fix to make upload tracking work correctly in all situations and on all systems
* Fix to correctly display the PHP version in the PHP Configuration module when managing packages
* Update Xterm.js to the latest version with lots of improvements and fixes
* Update Authentic theme to the latest version with various improvements and fixes:
  * Fix the support for the cloned Terminal module
  * Fix error handling for file uploads when the user is out of quota or the system is out of disk space in the File Manager module
  * Fix to stop loading full file into memory for upload check to prevent memory leak on large uploads in the File Manager module
  * Fix to permanently save the state of the navigation menu and right-side slider when toggled

---

#### Assets

| File                       | Size | File                       | Size |
| -------------------------- | -----| -------------------------- | ---- |
| **Webmin**                 |      | **Usermin**                |      |
|[webmin-2.621-1.noarch.rpm](https://github.com/webmin/webmin/releases/download/2.621/webmin-2.621-1.noarch.rpm)     | 33.3 MB  |   [usermin-2.521-1.noarch.rpm](https://github.com/webmin/usermin/releases/download/2.521/usermin-2.521-1.noarch.rpm)    | 13.8 MB |
|[webmin_2.621_all.deb](https://github.com/webmin/webmin/releases/download/2.621/webmin_2.621_all.deb)               | 27.3 MB  |   [usermin-2.521_all.deb](https://github.com/webmin/usermin/releases/download/2.521/usermin_2.521_all.deb)              | 9.4 MB  |
|[webmin-2.621.pkg.gz](https://github.com/webmin/webmin/releases/download/2.621/webmin-2.621.pkg.gz)                 | 37.2 MB  |   [usermin-2.521.tar.gz](https://github.com/webmin/usermin/releases/download/2.521/usermin-2.521.tar.gz)                | 15.4 MB |
|[webmin-2.621.tar.gz](https://github.com/webmin/webmin/releases/download/2.621/webmin-2.621.tar.gz)                 | 37.9 MB  |
|[webmin-2.621-minimal.tar.gz](https://github.com/webmin/webmin/releases/download/2.621/webmin-2.621-minimal.tar.gz) | 3.8 MB   |
