---
title: "Webmin 2.500 and Usermin 2.400 released"
date: 2025-09-04
tags: ["changelog", "webmin-changelog", "usermin-changelog"]
---

* Add support for the Webmin webserver to work in both HTTP and HTTPS modes at the same time
* Add distinct warning to the login page if the connection is not secure
* Add support for timeouts in temporary rules in FirewallD module
* Add support for the new Dovecot version 2.4
* Add support for MariaDB version 12 [#2522](https://github.com/webmin/webmin/issues/2522)
* Add support for IMAP through a local command for Usermin
* Add latest SSLeay support for redirects to SSL work
* Add improvements to "Bootup and Shutdown" module for _systemd_ systems
* Add field for secondary server key in BIND module
* Add reversible encryption helpers API
* Add API to display relative dates
* Add API to mask sensitive text, like displayed passwords, unless hovered over
* Add status monitor for PHP FPM [#2499](https://github.com/webmin/webmin/issues/2499)
* Add support for DNF5 format in the "Software Packages" module
* Add support for redirecting to the enforced domain when the `musthost_redirect` directive is set
* Add option to customize the SMTP login for scheduled background monitoring in the "System and Server Status" module
* Change to show relative dates in "Webmin Users: Current Login Sessions" and "Webmin Actions Log: Search Results" pages
* Change "Last Logins" on the dashboard to show usernames, relative dates, and all users from the past 3 days
* Change to always enable HSTS by default
* Fix MySQL/MariaDB to remove obsolete `set-variable` options that break modern config files [#2497](https://github.com/webmin/webmin/issues/2497)
* Fix download link in table rows in MySQL/MariaDB module
* Fix module not to fail on old MySQL 5.5
* Update the Authentic theme to the latest version with various improvements and fixes:
  - Add support to automatically set the color palette based on OS or browser preferences
  - Add improvements to tooltips in dark palette
  - Change the default shortcut key for toggling the light/dark palette
  - Change the default shortcut key for toggling right slider
  - Change wording to use "shortcut" instead of "hotkey"
  - Change the default maximum column width
  - Fix navigation menu load in proxy mode [#2502](https://github.com/webmin/webmin/issues/2502)
  - Fix navigation menu to always stay in sync with the product switch
  - Fix sporadic issue where the navigation menu disappeared and the content page was shifted
  - Fix info alert text color and button color in the dark palette
  - Fix styling of checkboxes and radios for backup and restore pages in Virtualmin
  - Fix styling for extra backup destinations in Virtualmin
  - Fix advanced schedule display in the cron chooser in Virtualmin
    
    [More details...](https://github.com/webmin/authentic-theme/releases/tag/25.00)

---

#### Assets

| File                       | Size | File                       | Size |
| -------------------------- | -----| -------------------------- | ---- |
| **Webmin**                 |      | **Usermin**                |      |
|[webmin-2.500-1.noarch.rpm](https://github.com/webmin/webmin/releases/download/2.500/webmin-2.500-1.noarch.rpm)     | 31 MB  |   [usermin-2.400-1.noarch.rpm](https://github.com/webmin/usermin/releases/download/2.400/usermin-2.400-1.noarch.rpm)    | 14.4 MB |
|[webmin_2.500_all.deb](https://github.com/webmin/webmin/releases/download/2.500/webmin_2.500_all.deb)               | 26 MB  |   [usermin-2.400_all.deb](https://github.com/webmin/usermin/releases/download/2.400/usermin_2.400_all.deb)              | 10 MB   |
|[webmin-2.500.pkg.gz](https://github.com/webmin/webmin/releases/download/2.500/webmin-2.500.pkg.gz)                 | 36 MB  |   [usermin-2.400.tar.gz](https://github.com/webmin/usermin/releases/download/2.400/usermin-2.400.tar.gz)                | 16.4 MB |
|[webmin-2.500.tar.gz](https://github.com/webmin/webmin/releases/download/2.500/webmin-2.500.tar.gz)                 | 37 MB  |
|[webmin-2.500-minimal.tar.gz](https://github.com/webmin/webmin/releases/download/2.500/webmin-2.500-minimal.tar.gz) | 3.5 MB |
