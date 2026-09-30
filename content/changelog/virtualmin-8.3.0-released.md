---
title: "Virtualmin 8.3.0 released"
date: 2026-09-29
tags: ["changelog", "virtualmin-changelog"]
author: "Ilia Ross"
---

* Add Matomo web analytics installer to Virtualmin GPL, including detection of existing installs and display of the tracking code to embed in website pages
* Fix missing ProFTPD SFTP and TLS log rotation while preserving existing rotation rules
* Fix rotated Apache and Nginx logs keeping the old domain name after a virtual server is renamed
* Fix domain owners losing access to Nginx logs after reopening or rotation
* Fix cloning Apache virtual servers overwriting newly issued SSL certificates with the source server's certificate [#1280](https://github.com/virtualmin/virtualmin-gpl/issues/1280)
* Fix missing POP3 password authentication in mail client autoconfiguration
* Fix backup restores rejecting UID conflicts and existing cloud DNS zones before applying restore options and destination settings
* Fix mail settings restores removing the local Postfix SASL configuration path and breaking SMTP authentication on Debian 13
* Fix incorrect SSL certificate paths left by older releases when breaking certificate sharing, recovering the current certificate and any missing CA chain from the combined file
* Fix batch-created virtual servers not applying the template's initial website content
* Fix batch virtual server creation progress and status reporting
* Fix `modify-user` CLI command dropping all but one local mail forwarding destination on any update, and show local forwards in `list-users` output
* Fix cPanel, DirectAdmin and Plesk migrations creating unsupported bounce aliases on Postfix, which accepted mail for such addresses and then bounced it [#380](https://github.com/virtualmin/virtualmin-gpl/issues/380)
* Fix cPanel, DirectAdmin and Plesk migrations creating duplicate Unix users when importing database users
* Fix missing disk usage for mail files after the 8.2.0 update
* Fix errors during package upgrades when the MySQL or mail features are disabled
* Fix Google Drive backup folder and file listings stopping after the first page of results, which could hide existing backups from restores and purging and create duplicate backup folders for Virtualmin Pro users
* Change default external IP lookup endpoints
