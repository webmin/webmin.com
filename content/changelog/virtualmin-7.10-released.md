---
title: "Virtualmin 7.10 released"
date: 2024-03-24
tags: ["changelog", "virtualmin-changelog"]
---

* Add S3 account management integration
* Add reworked Edit Users page with ability to add separate database and webserver users
* Add support for adding and updating SSH public key for virtual server users
* Add support for selecting CGI mode for virtual server using Website Options page and CLI
* Add Google Drive sub-folder support for backups and purging
* Add support for purging Backblaze date-based buckets
* Add support for name-based virtual FTP servers
* Add charset and collation retention for MySQL/MariaDB databases restored from backups
* Add support for restoring backups from relative paths using Virtualmin CLI
* Add option to clear spam and trash mail sub-folders
* Add sanity check for the DNS master IP address
* Add link from DNS Records page to reset DNS records
* Fix bugs in syncing of DNS TTL records
* Fix to re-parent DNS records upon owner change
* Fix to correctly split long DNS TXT records
* Fix to include webmail DNS records for Nginx configurations too
* Fix to further improve auto-discover config feature work correctly in Microsoft Outlook
* Fix to test if generated password matches the pattern required for installed scripts
* Fix to switch to System Logs Viewer module for viewing logs
* Fix wizard to handle MySQL/MariaDB socket authentication
* Fix to allow Let's Encrypt certificates be requested even without a website
* Updated terminology now refers to incremental backups as differential backups
