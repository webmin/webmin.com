---
title: "Webmin 2.670 and Usermin 2.570 released"
date: 2026-09-20
tags: ["changelog", "webmin-changelog", "usermin-changelog"]
---

* Add new Hardware Information module for inspecting system, firmware, security, PCI, USB, storage, network, processor, sensor, driver, and kernel module details
* Add options to send Webmin and Usermin errors to the systemd journal [forum.virtualmin.com/t/136562](https://forum.virtualmin.com/t/miniserv-webserver-log-growing-too-big-should-be-rotated/136562)
* Add webserver logging controls to Usermin Configuration module
* Add option to rotate Webmin and Usermin webserver logs using `logrotate` instead of periodically clearing them [#2821](https://github.com/webmin/webmin/pull/2821)
* Add DNF 4 and 5 package hold management to the Software Package Updates module
* Add `return` based redirects with 301, 302, 303, 307 and 308 codes to the URL Re-Writing pages in the Nginx Webserver module [forum.virtualmin.com/t/137940](https://forum.virtualmin.com/t/137940)
* Add support for editing the email signature in HTML format using the built-in editor, including inline images in Usermin
* Fix DNF update confirmations by previewing packages and dependencies that will be installed or updated
* Fix reboot-required detection on DNF systems without a standalone `needs-restarting` command [forum.virtualmin.com/t/137973](https://forum.virtualmin.com/t/137973)
* Fix Postfix map updates failing when CIDR tables are configured
* Fix PostgreSQL initialization on EL systems to use SCRAM-SHA-256 authentication by default
* Fix IPsec host key generation with modern Libreswan [#2132](https://github.com/webmin/webmin/issues/2132)
* Fix journal since filter showing oldest entries on older systemd [forum.virtualmin.com/t/137876](https://forum.virtualmin.com/t/137876)
* Fix disk usage and mounted filesystem handling for mount points and devices with spaces, such as ZFS datasets [#2833](https://github.com/webmin/webmin/issues/2833)
* Fix native ext4 quota detection for filesystems mounted using `LABEL=` or `UUID=` identifiers [forum.virtualmin.com/t/137832](https://forum.virtualmin.com/t/137832)
* Fix slave zone files staying empty on Debian and Ubuntu secondaries by creating BIND zone files owned by the `bind` user [forum.virtualmin.com/t/137767](https://forum.virtualmin.com/t/137767)
* Fix Nginx Webserver module lock files not being released, causing saves to hang during long-running operations
* Fix module name validation to prevent loading files outside installed modules
* Fix ACL operations bypassing configured allowed paths in File Manager
* Fix arbitrary file reads in Software Packages module
* Fix TLS client certificate verification
* Fix the signature being added again when re-editing a saved draft in Usermin
* Update Backup Configuration module's destination selector to use the new select-based UI
* Update the Authentic theme to the latest version with various improvements:
  - Add support for HTML signatures in Usermin
  - Fix light palette layout gaps to be slightly tighter to match dark palette better
  - Fix data tables and their filter to be restored fully functional on history back navigation
  - Fix history back navigation after a full page reload
  - Fix disabled checked checkboxes showing a cross instead of a checkmark
  - Fix theme authorization to use explicit Webmin module ACLs for privileged actions
  - Fix Cloudmin shell history file path validation
  - Fix module name validation in configuration pages
  - Fix ACL operations bypassing configured allowed paths in File Manager
  - Fix mail server credentials being exposed in Usermin responses
  - Drop server-side Perl customizations
  - Drop the built-in theme updater
  - Drop dashboard-managed CSF update checks

---

#### Assets

| File                       | Size | File                       | Size |
| -------------------------- | -----| -------------------------- | ---- |
| **Webmin**                 |      | **Usermin**                |      |
|[webmin-2.670-1.noarch.rpm](https://github.com/webmin/webmin/releases/download/2.670/webmin-2.670-1.noarch.rpm)     | 32.5 MB  |   [usermin-2.570-1.noarch.rpm](https://github.com/webmin/usermin/releases/download/2.570/usermin-2.570-1.noarch.rpm)    | 13.8 MB |
|[webmin_2.670_all.deb](https://github.com/webmin/webmin/releases/download/2.670/webmin_2.670_all.deb)               | 26.7 MB  |   [usermin-2.570_all.deb](https://github.com/webmin/usermin/releases/download/2.570/usermin_2.570_all.deb)              | 9.4 MB  |
|[webmin-2.670.pkg.gz](https://github.com/webmin/webmin/releases/download/2.670/webmin-2.670.pkg.gz)                 | 36.3 MB  |   [usermin-2.570.tar.gz](https://github.com/webmin/usermin/releases/download/2.570/usermin-2.570.tar.gz)                | 15.4 MB |
|[webmin-2.670.tar.gz](https://github.com/webmin/webmin/releases/download/2.670/webmin-2.670.tar.gz)                 | 37.1 MB  |
|[webmin-2.670-minimal.tar.gz](https://github.com/webmin/webmin/releases/download/2.670/webmin-2.670-minimal.tar.gz) | 3.7 MB   |
