---
title: "Webmin 2.640 and Usermin 2.540 released"
date: 2026-05-04
tags: ["changelog", "webmin-changelog", "usermin-changelog"]
---

* Add new nftables module with profiles, saved tables, and chains/sets management
* Add new Nginx module with look and feel matching the Apache module
* Add option to hide sensitive values (like passwords or tokens) from Webmin's request logs
* Add custom ACME server support for Webmin SSL renewal
* Add support for the latest MariaDB on Ubuntu 26.04
* Add multi-statement SQL query support when executing inline in MySQL/MariaDB module
* Add support for ext4 hidden inode quota mode
* Add used space and usage percentage reporting for ZFS in the dashboard
* Add mass enable and disable buttons for status monitors in the System and Server Status module
* Update tiny ACME client to the latest version
* Update DHCP default config for openSUSE 16 [#2678](https://github.com/webmin/webmin/issues/2678)
* Fix to prevent bypassing two-factor authentication in RPC requests
* Fix session cookies to use safer defaults
* Fix handling of connections coming through a reverse proxy
* Fix unsafe mailbox attachment handling in Mailbox module
* Fix unsafe decoding of Outlook `winmail.dat` attachments
* Fix Certbot standalone port conflicts
* Fix to correctly preserve full quoted action parameters in the Fail2Ban jail editor [#2647](https://github.com/webmin/webmin/issues/2647)
* Fix ZFS to fall back to `df` when disk space cannot be computed from `zpool`
* Fix to allow toggling process priority and I/O controls on or off
* Fix issue where disabled email notifications were still being processed
* Update Authentic theme to the latest version with various improvements and fixes:
  - Add option to control corner roundness for the menu, content area and right-side slider
  - Change the content area to use rounded corners and a margin by default
  - Fix message of the day display in login page correctly [webmin#2555](https://github.com/webmin/webmin/issues/2685)
  - Fix tooltip visibility in dark palette
  - Fix session login button spinner
  - Fix various button styling issues (active state, tiny buttons, airy buttons, stack position)

---

#### Assets

| File                       | Size | File                       | Size |
| -------------------------- | -----| -------------------------- | ---- |
| **Webmin**                 |      | **Usermin**                |      |
|[webmin-2.640-1.noarch.rpm](https://github.com/webmin/webmin/releases/download/2.640/webmin-2.640-1.noarch.rpm)     | 33.3 MB  |   [usermin-2.540-1.noarch.rpm](https://github.com/webmin/usermin/releases/download/2.540/usermin-2.540-1.noarch.rpm)    | 13.8 MB |
|[webmin_2.640_all.deb](https://github.com/webmin/webmin/releases/download/2.640/webmin_2.640_all.deb)               | 27.3 MB  |   [usermin-2.540_all.deb](https://github.com/webmin/usermin/releases/download/2.540/usermin_2.540_all.deb)              | 9.4 MB  |
|[webmin-2.640.pkg.gz](https://github.com/webmin/webmin/releases/download/2.640/webmin-2.640.pkg.gz)                 | 37.2 MB  |   [usermin-2.540.tar.gz](https://github.com/webmin/usermin/releases/download/2.540/usermin-2.540.tar.gz)                | 15.4 MB |
|[webmin-2.640.tar.gz](https://github.com/webmin/webmin/releases/download/2.640/webmin-2.640.tar.gz)                 | 37.9 MB  |
|[webmin-2.640-minimal.tar.gz](https://github.com/webmin/webmin/releases/download/2.640/webmin-2.640-minimal.tar.gz) | 3.8 MB   |
