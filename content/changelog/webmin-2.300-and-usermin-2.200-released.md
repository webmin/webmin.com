---
title: "Webmin 2.300 and Usermin 2.200 released"
date: 2025-02-14
tags: ["changelog", "webmin-changelog", "usermin-changelog"]
---

* Add multiple improvements to SSH Server module to support contemporary systems
* Add support to configure SSH socket activation in SSH Server module in contemporary systems #2356
* Add support for managing PHP extensions in PHP Configuration module
* Add API to edit _systemd_ units in Bootup and Shutdown module
* Add rich-rule and direct-rule API to FirewallD module
* Add support for collecting bandwidth stats on systems with Journald in Bandwidth Monitoring module
* Add support for displaying translations aggregated and separate statistics using language manager script
* Add support for allowing a given IP temporarily or permanently in FirewallD module
* Add support for listing `deb822-style` repos on Debian and derivatives in Software Package Updates module
* Add support for openEuler Linux LTS and Innovation versions  
* Add support for setting up repos on SUSE distros using repo setup script
* Add a status monitor to check if a reboot is required in System and Server Status module
* Add support for displaying CPU and disk data in the latest macOS versions
* Add UI option to control if SSL client certificate provided by proxies can be trusted
* Add ACL option to set the allowed user based on the directory being accessed in File Manager module
* Add ability to resolve compatibility-level conditionals in Postfix module
* Add ability to use zoom window in/out using standard hotkeys in Terminal module
* Add service restart button in MySQL/MariaDB module
* Add DBI and DBD modules to the recommended list
* Fix to check first if delete, rename, paste, and save are allowed for safe user in File Manager
* Fix to stop trusting remote client IP address for Webmin logging unless it's allowed
* Fix to correctly set exit code on success when using force mode in Webmin `set-config` CLI command
* Fix to include zone name in deleted records log message in BIND DNS module
* Fix to ensure _systemd_ custom units are created in the correct directory in Bootup and Shutdown module
* Fix to create correct RC script on FreeBSD systems when Webmin is installed using the setup script
* Fix to improve how permissions are displayed in MySQL/MariaDB module
* Fix to show current hashed password if there is one in MySQL/MariaDB module
* Fix to place editable options at the top of the list in MySQL/MariaDB module #2319
* Fix to correctly quote usernames in `xfs_quota` command in Disk Quotas module
* Fix file locking in global generic file locking function
* Fix to clean up temporary Webmin PID-based lock directories
* Fix to bring back support for limits in last command in Users and Groups module
* Fix Postfix module incorrectly saving config files for some pages
* Fix to support multi-line mappings in Postfix module for virtual maps
* Fix to turn off autorenew for all Webmin-generated Let's Encrypt SSL certificates as renewals are handled internally
* Fix to prefer JSON::XS over JSON::PP if both are installed
* Fix to just lock the DNS zone file instead of the whole domain to prevent potential deadlocks
* Fix SPF record joining to avoid space separation in BIND DNS module
* Fix updating serial number in BIND DNS module
* Fix error message for salt field in BIND DNS module
* Fix for slave zones can now be called secondary in BIND DNS module #2257
* Fix not to save passwords in the password fields in Users and Groups module
* Fix not binding to an IP, add a `Listen` directive for a custom port if needed in Apache module #2341
* Fix Usermin manual installation using setup script
* Fix to enhance display support for Fetchmail module
* Fix WebSocket connections for _sudo_-capable users
* Rename Google Authenticator to just TOTP Authenticator
* Improve sorting for date-based columns in data tables  
* Drop `lynx` package from the recommended list
* Drop `Authen::OATH` module and all its dependencies in favor of a simpler implementation for TOTP authentication
* Updated Chinese translations
* Update German translations

---

#### Assets

| File                       | Size | File                       | Size |
| -------------------------- | -----| -------------------------- | ---- |
| **Webmin**                 |      | **Usermin**                |      |
|[webmin-2.300-1.noarch.rpm](https://github.com/webmin/webmin/releases/download/2.300/webmin-2.300-1.noarch.rpm) | 31 MB | [usermin-2.200-1.noarch.rpm](https://github.com/webmin/usermin/releases/download/2.200/usermin-2.200-1.noarch.rpm)    | 13 MB |
|[webmin_2.300_all.deb](https://github.com/webmin/webmin/releases/download/2.300/webmin_2.300_all.deb)           | 25.8 MB | [usermin-2.200_all.deb](https://github.com/webmin/usermin/releases/download/2.200/usermin_2.200_all.deb)              | 10.8 MB |
|[webmin-2.300.pkg.gz](https://github.com/webmin/webmin/releases/download/2.300/webmin-2.300.pkg.gz)             | 36 MB | [usermin-2.200.tar.gz](https://github.com/webmin/usermin/releases/download/2.200/usermin-2.200.tar.gz)                | 15.6 MB |
|[webmin-2.300.tar.gz](https://github.com/webmin/webmin/releases/download/2.300/webmin-2.300.tar.gz)             | 36.6 MB | | |
|[webmin-2.300-minimal.tar.gz](https://github.com/webmin/webmin/releases/download/2.300/webmin-2.300-minimal.tar.gz) | 3.5 MB | |
