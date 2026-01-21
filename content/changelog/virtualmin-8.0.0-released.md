---
title: "Virtualmin 8.0.0 released"
date: 2026-01-21
tags: ["changelog", "virtualmin-changelog"]
author: "Ilia Ross"
---

* Add support for *systemd* resource limits for Virtualmin Pro users
* Add support for SFTP backups and restores, including the ability to purge SFTP backups
* Add support for paginated display of large user lists
* Add backup signing improvements, including the ability to skip signing when necessary
* Add option to forward the original HTTP hostname when proxying requests
* Add phpMyAdmin integration (if installed) when editing databases for virtual servers
* Add a row showing when and why a domain was disabled in the virtual server summary
* Add improvements to ACME service notifications
* Add reseller access to edit PHP-FPM configs
* Add improvements to handling of remote/cloud DNS hosting
* Fix validation of A and AAAA DNS records when using `modify-dns` CLI
* Fix reliability of remote backups during long-running tasks using Webmin RPC
* Fix several DKIM-related issues
* Fix handling of EC SSL certificates
* Update the repo setup script and workflow to match the newer packaging/CI layout
