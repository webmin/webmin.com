---
title: "Webmin 2.650 and Usermin 2.550 released"
date: 2026-06-16
tags: ["changelog", "webmin-changelog", "usermin-changelog"]
---

* Add new Systemd Services and Units module
* Add new GRUB 2 Boot Loader module
* Add new Kea DHCP Server module
* Add basic Alpine Linux support
* Add IP-based Let's Encrypt certificate support with Certbot 5.3
* Add quick service and port forwarding controls to the nftables module
* Add optional pre- and post-scripts for scheduled package updates
* Add option to control when scheduled package update email is sent
* Add per-user RPC/API-only access option to the Webmin Users module
* Update Xterm.js to fix Control-C handling on iPadOS/Safari terminals
* Update Webmin systemd service unit to run without forking
* Fix Bootup and Shutdown module to show only services and not all units on systemd systems
* Fix Let's Encrypt renewal scheduling to count from the last successful request
* Fix NetworkManager detection on Debian and IPv6 DNS nameserver saving
* Fix Dovecot configuration file handling when saving extra configs
* Fix mailbox listing to skip unusable Maildir entries and remove stale deleted or moved entries
* Fix Apache module to hide disabled default virtual hosts from the active server list
* Fix Netplan DNS saving to preserve YAML structure
* Fix BIND DNS handling of underscores, trailing dots, and mass record length checks
* Fix MariaDB user creation when using auth plugin syntax
* Fix PHP-FPM monitor on EL systems when using `/etc/php.ini` as the config file
* Fix RPC-only accounts to block browser/module access before module ACL checks
* Fix reflected XSS in Webmin status messages
* Fix authentication state handling for SSL certificate logins and proxied keep-alive requests
* Fix path validation in File Manager, package delete helpers, and Apache virtual host files
* Update the Authentic theme to the latest version with various improvements and fixes:
  - Add zooming to stats history graphs by holding shift and scrolling in the dashboard
  - Add support for saving live stats history for up to 24 hours without performance impact
  - Add better support for the new Nginx, nftables, and upcoming systemd, Kea-DHCP, and GRUB 2 Webmin modules
  - Add ability to always show available dashboard panels in theme configuration
  - Fix iOS terminal viewport sizing
  - Fix editor save handling, clean-state indication and dirty reload guard
  - Fix popover positioning, z-index and border color for help bubbles
  - Fix the active product switch border in the navigation menu for the dark palette
  - Fix to validate password reset return URLs

---

#### Assets

| File                       | Size | File                       | Size |
| -------------------------- | -----| -------------------------- | ---- |
| **Webmin**                 |      | **Usermin**                |      |
|[webmin-2.650-1.noarch.rpm](https://github.com/webmin/webmin/releases/download/2.650/webmin-2.650-1.noarch.rpm)     | 32.2 MB  |   [usermin-2.550-1.noarch.rpm](https://github.com/webmin/usermin/releases/download/2.550/usermin-2.550-1.noarch.rpm)    | 13.8 MB |
|[webmin_2.650_all.deb](https://github.com/webmin/webmin/releases/download/2.650/webmin_2.650_all.deb)               | 26.4 MB  |   [usermin-2.550_all.deb](https://github.com/webmin/usermin/releases/download/2.550/usermin_2.550_all.deb)              | 9.4 MB  |
|[webmin-2.650.pkg.gz](https://github.com/webmin/webmin/releases/download/2.650/webmin-2.650.pkg.gz)                 | 36.1 MB  |   [usermin-2.550.tar.gz](https://github.com/webmin/usermin/releases/download/2.550/usermin-2.550.tar.gz)                | 15.4 MB |
|[webmin-2.650.tar.gz](https://github.com/webmin/webmin/releases/download/2.650/webmin-2.650.tar.gz)                 | 36.7 MB  |
|[webmin-2.650-minimal.tar.gz](https://github.com/webmin/webmin/releases/download/2.650/webmin-2.650-minimal.tar.gz) | 3.7 MB   |
