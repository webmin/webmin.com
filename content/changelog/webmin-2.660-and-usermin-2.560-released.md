---
title: "Webmin 2.660 and Usermin 2.560 released"
date: 2026-08-16
tags: ["changelog", "webmin-changelog", "usermin-changelog"]
---

* Add support for creating `vfsv1` Linux quota files for limits above 4 TiB, while preserving existing quota file formats
* Add Btrfs subvolume quota management to the Disk Quotas module, with full and simple accounting modes
* Add support for openSUSE 16 vendor and local Logrotate configuration overlays [#2682](https://github.com/webmin/webmin/issues/2682)
* Add support for applying multiple patches at once with the `patch` sub-command
* Add APT package hold management to the Package Updates module
* Add incremental ban time options to the Fail2Ban module
* Fix Webmin server connections that open but never send a request, preventing them from waiting indefinitely [#2815](https://github.com/webmin/webmin/pull/2815)
* Fix to ignore failures when adding IPv6 link-local (fe80\:\:) addresses that may already be configured automatically
* Fixed creation of permissions new log files in the System Logs module (thanks to Kevin Carter)
* Fix Fail2Ban jail editor to correctly separate actions when one has no parameters [#2718](https://github.com/webmin/webmin/issues/2718)
* Fix to honor the editable users ACL in the group member chooser in Users and Groups module [#2464](https://github.com/webmin/webmin/issues/2464)
* Update the Authentic theme to the latest version with various improvements:
  - Fix change detection and submission for forms using grouped bottom action buttons
  - Fix login page front side clipping and flip animation for long welcome messages
  - Fix opening the wrong directory in Terminal for domain owners in File Manager
  - Fix disallowed entry handling in File Manager [forum.virtualmin.com/t/137654](https://forum.virtualmin.com/t/extra-admin-file-manager-permissions/137654?u=ilia)
  - Fix inline images not displaying when printing emails in Usermin
  - Fix various styling issues for ConfigServer Security & Firewall
  - Fix navigation detection for the new Virtualmin Podman plugin
  - Fix bottom page action buttons wrapping and alignment
  - Fix errors for Webmin-only users in File Manager

---

#### Assets

| File                       | Size | File                       | Size |
| -------------------------- | -----| -------------------------- | ---- |
| **Webmin**                 |      | **Usermin**                |      |
|[webmin-2.660-1.noarch.rpm](https://github.com/webmin/webmin/releases/download/2.660/webmin-2.660-1.noarch.rpm)     | 32.5 MB  |   [usermin-2.560-1.noarch.rpm](https://github.com/webmin/usermin/releases/download/2.560/usermin-2.560-1.noarch.rpm)    | 13.8 MB |
|[webmin_2.660_all.deb](https://github.com/webmin/webmin/releases/download/2.660/webmin_2.660_all.deb)               | 26.7 MB  |   [usermin-2.560_all.deb](https://github.com/webmin/usermin/releases/download/2.560/usermin_2.560_all.deb)              | 9.4 MB  |
|[webmin-2.660.pkg.gz](https://github.com/webmin/webmin/releases/download/2.660/webmin-2.660.pkg.gz)                 | 36.3 MB  |   [usermin-2.560.tar.gz](https://github.com/webmin/usermin/releases/download/2.560/usermin-2.560.tar.gz)                | 15.4 MB |
|[webmin-2.660.tar.gz](https://github.com/webmin/webmin/releases/download/2.660/webmin-2.660.tar.gz)                 | 37.1 MB  |
|[webmin-2.660-minimal.tar.gz](https://github.com/webmin/webmin/releases/download/2.660/webmin-2.660-minimal.tar.gz) | 3.7 MB   |
