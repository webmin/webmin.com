---
title: "Virtualmin 7.8 released"
date: 2023-09-15
tags: ["changelog", "virtualmin-changelog"]
---

* Update host and domain default page [#629](https://github.com/virtualmin/virtualmin-gpl/issues/629)
* Add support for different Let's Encrypt compatible CAs
* Add checks for PHP FPM port mismatches and collisions
* Add API to setup Virtualmin default hostname SSL
* Add mass password update API in Virtualmin CLI
* Add mass modify users API in Virtualmin CLI
* Add various improvements and fixes to Cloudflare DNS
* Add a flag to show more details when purging backups 
* Add support for fetching mail logs from `journalctl` if there are no regular log files available
* Changed password hashing to be enabled by default on all new installs
* Fix to allow domain name check to be skipped in domain creation time
* Fix backups when DNS zone is hosted on Cloudmin services
* Fix various bugs for S3 backups
* Fix syncing of SSL cert to MySQL/MariaDB [#571](https://github.com/virtualmin/virtualmin-gpl/issues/571)
* Fix to break possible linkage to `snakeoil` cert and key
* Fix to show progress when checking `php.ini` files in config check
* Fix to convert SSL private key to `PKCS1` for MySQL/MariaDB
* Fix various issues when cloning virtual servers
* Fix to make extra sure that old FPM pool is deleted
* Fix to ue `127.0.0.1` instead of `localhost` for DKIM milters
* Fix placeholder when toggled for create initial web page option 
* Fix to make sure the PHP log file exists for logrotate not fail [#596](https://github.com/virtualmin/virtualmin-gpl/issues/596)
* Fix to make sure that parallel backups don't fail
* Fix to preserve PHP log when changing PHP version
* Fix to re-enable connectivity check by default for all new installs
* Fix to drop creating host default domain in Virtualmin wizard and instead use a new setting in Virtualmin Configuration page, under SSL Settings
