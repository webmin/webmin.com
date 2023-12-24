---
title: "Virtualmin 7.9 released"
date: 2023-12-16
tags: ["changelog", "virtualmin-changelog"]
---

* Add reworked navigation menu for better usability and accessibility
* Add support for different PHP-FPM process manager modes (_dynamic_, _static_, _ondemand_)
* Add Google Drive support as cloud storage provider for Virtualmin Pro users
* Add enhanced Jailkit domain features for Virtualmin Pro users, including abilities to copy extra commands and sections, and to reset previously configured jail environment
* Add ability to preserve `php_value`, `php_admin_value`, `env` and `pm.` settings when changing PHP-FPM version
* Add Cloudflare API token support for more secure and precise authentication, replacing the need for using global API keys
* Add API for restarting system or virtual server services using `virtualmin restart-server` command
* Add support for showing dynamic placeholder for path/file field in **Backup and Restore ⇾ Scheduled Backups** page [#647](https://github.com/virtualmin/virtualmin-gpl/issues/647#issuecomment-1732368172)
* Add ability to use the database character set when performing back up and restore
* Add improvements to validate domain output page
* Add various improvements for migrations from cPanel and Plesk
* Add template substitutions to support variables for the MySQL/MariaDB host and port [#666](https://github.com/virtualmin/virtualmin-gpl/issues/666)
* Add ability to show domain type when listing domains in UI [#676](https://github.com/virtualmin/virtualmin-gpl/pull/676)
* Add support for using Webmin RPC to perform virtual servers transfer to remote systems
* Add an option to re-allocate usernames when restoring backups
* Change SPF to default to `~all` instead of `?all` [#696](https://github.com/virtualmin/virtualmin-gpl/issues/696)
* Extend the GPL version with the capability to edit proxy paths, previously exclusive to Pro users
* Fix Backblaze clearing old backups [#640](https://github.com/virtualmin/virtualmin-gpl/issues/640)
* Fix issues when performing DNS-based Let's Encrypt renewals, including in wildcard mode
* Fix auto-discover config feature work correctly in Microsoft Outlook
* Fix to correctly revoke access to previously allowed MySQL/MariaDB databases
* Fix renewal errors for Let's Encrypt certificates caused by using incorrect certificate types
* Fix caching system external IP address for faster API calls
* Fix issues with base website redirects causing redirect loops in the past
* Fix to improve virtual servers restore experience
* Fix DKIM signature issue on Debian and Ubuntu systems
* Fix auto-reply form not being saved correctly
* Fix to correctly print _years_ in bandwidth usage reports [#689](https://github.com/virtualmin/virtualmin-gpl/issues/689)
* Fix detecting network interface names on Amazon Linux systems
* Fix enforcing correct permissions for PHP-FPM socket file
* Fix to preserve the PHP-FPM socket file when changing versions
* Fix to make sure all PHP-FPM versions are enabled at boot [#644](https://github.com/virtualmin/virtualmin-gpl/issues/644)
* Fix various issues with file locking