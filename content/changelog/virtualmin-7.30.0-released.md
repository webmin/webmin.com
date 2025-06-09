---
title: "Virtualmin 7.30.0 released"
date: 2024-11-19
tags: ["changelog", "virtualmin-changelog"]
author: "Ilia Ross"
---

* Add support for multiple ACME-compatible SSL providers in the Pro version, like ZeroSSL, Sectigo and many other
* Add comprehensive page for license management in Virtualmin Pro
* Add numerous improvements to the DirectAdmin migration process
* Add a new `--json` flag to the Virtualmin CLI command to enable output in JSON format
* Add ability to bring supported web apps under Virtualmin control during migration
* Add an option in the wizard to configure the system default email address
* Add an option to enable or disable SSL certificate renewal email notifications
* Add status monitors for Usermin and Postgrey to the dashboard
* Add template option to create an alias domain with its own DNS zone
* Add ability for CAA DNS records to be manually edited and created
* Add ability to edit RUA and RUF DMARC DNS fields
* Fix numerous DNS-related bugs
* Fix support for `zstd` compression in backups
* Fix an issue with MySQL user creation in certain edge cases
* Fix config file to set the correct port/socket for Postgrey in EL systems
