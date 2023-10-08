---
title: "Webmin 2.103 and Usermin 2.003 released"
date: 2023-10-08
tags: ["changelog", "webmin-changelog", "usermin-changelog"]
---
* Add support for hostname detection using `hostnamectl` command
* Add support for other ACME services
* Add ability to hide dotfiles in File Manager [#1578](https://github.com/webmin/authentic-theme/issues/1578)
* Add `xz`, `zstd` and plain `tar` support when creating archives in File Manager [#2009](https://github.com/webmin/webmin/issues/2009)
* Add support for English (United States) (military time) locale
* Fix to copy `allow-transfer` directives up from global config in BIND module
* Fix to correctly switch key hash type with ACME services
* Fix bug when `backend` wasn't saved correctly in Fail2Ban module [#1992](https://github.com/webmin/webmin/issues/1992)
* Fix large files download in Upload and Download module
* Fix Google Authentication on RHEL systems derivatives
* Update the Authentic theme to the latest version with various fixes and improvements

---

#### Assets

| File                       | Size | File                       | Size |
| -------------------------- | -----| -------------------------- | ---- |
| **Webmin**                 |      | **Usermin**                |      |
|[webmin-2.103-1.noarch.rpm](https://github.com/webmin/webmin/releases/download/2.103/webmin-2.103-1.noarch.rpm) | 40.9 MB | [usermin-2.003-1.noarch.rpm](https://github.com/webmin/usermin/releases/download/2.003/usermin-2.003-1.noarch.rpm)    | 16.3 MB |
|[webmin_2.103_all.deb](https://github.com/webmin/webmin/releases/download/2.103/webmin_2.103_all.deb)           | 33.6 MB | [usermin-2.003_all.deb](https://github.com/webmin/usermin/releases/download/2.003/usermin_2.003_all.deb)              | 11.8 MB |
|[webmin-2.103.pkg.gz](https://github.com/webmin/webmin/releases/download/2.103/webmin-2.103.pkg.gz)             | 45.8 MB | [usermin-2.003.tar.gz](https://github.com/webmin/usermin/releases/download/2.003/usermin-2.003.tar.gz)                | 18.3 MB |
|[webmin-2.103.tar.gz](https://github.com/webmin/webmin/releases/download/2.103/webmin-2.103.tar.gz)             | 46.4 MB | | |
|[webmin-2.103-minimal.tar.gz](https://github.com/webmin/webmin/releases/download/2.103/webmin-2.103-minimal.tar.gz) | 4.6 MB | |
