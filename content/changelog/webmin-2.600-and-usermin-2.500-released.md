---
title: "Webmin 2.600 and Usermin 2.500 released"
date: 2025-11-09
tags: ["changelog", "webmin-changelog", "usermin-changelog"]
---

* Add an options to enable the slow query log in the MySQL/MariaDB module [#2560](https://github.com/webmin/webmin/issues/2560)
* Add ability to install multiple PHP extensions at once in the PHP Configuration module
* Add ability to show package URL in the Software Packages module [#1141](https://github.com/virtualmin/virtualmin-gpl/issues/1141)
* Add support to show Debian package install time in the Software Packages module
* Add support to show detailed Webmin server stats using new `webmin stats` CLI command [forum.virtualmin.com/t/135556](https://forum.virtualmin.com/t/is-this-memory-used-a-bit-high/135556/6?u=ilia)
* Add a major Authentic theme UI update with lots of visual and structural improvements for a smoother and more modern experience

  [More details...](https://forum.virtualmin.com/t/authentic-theme-version-26-00-release-overview/135755?u=ilia)

* Fix EOL library fatal error for OS in development [#2121](https://github.com/webmin/webmin/issues/2121)
* Fix correctly saving jails with parameters containing quotes in the Fail2Ban module [#2572](https://github.com/webmin/webmin/issues/2572)
* Fix file is always renamed as the effective user in the Upload and Download module [#1054](https://github.com/webmin/webmin/issues/1054)

---

#### Assets

| File                       | Size | File                       | Size |
| -------------------------- | -----| -------------------------- | ---- |
| **Webmin**                 |      | **Usermin**                |      |
|[webmin-2.600-1.noarch.rpm](https://github.com/webmin/webmin/releases/download/2.600/webmin-2.600-1.noarch.rpm)     | 30.4 MB  |   [usermin-2.500-1.noarch.rpm](https://github.com/webmin/usermin/releases/download/2.500/usermin-2.500-1.noarch.rpm)    | 13.8 MB |
|[webmin_2.600_all.deb](https://github.com/webmin/webmin/releases/download/2.600/webmin_2.600_all.deb)               | 25.4 MB  |   [usermin-2.500_all.deb](https://github.com/webmin/usermin/releases/download/2.500/usermin_2.500_all.deb)              | 9.4 MB   |
|[webmin-2.600.pkg.gz](https://github.com/webmin/webmin/releases/download/2.600/webmin-2.600.pkg.gz)                 | 35.4 MB  |   [usermin-2.500.tar.gz](https://github.com/webmin/usermin/releases/download/2.500/usermin-2.500.tar.gz)                | 15.4 MB |
|[webmin-2.600.tar.gz](https://github.com/webmin/webmin/releases/download/2.600/webmin-2.600.tar.gz)                 | 36.4 MB  |
|[webmin-2.600-minimal.tar.gz](https://github.com/webmin/webmin/releases/download/2.600/webmin-2.600-minimal.tar.gz) | 2.9 MB |
