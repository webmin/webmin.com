---
title: "Virtualmin 5.04 released"
date: 2016-08-03
tags: ["changelog", "virtualmin-changelog"]
---

- SSL versions 2 and 3 and TLS versions 1.0 and 1.1 are disabled by default in the Apache configuration for new domains.
- In the post-installation wizard, if Virtualmin does not know the current MySQL pasword the admin will be prompted to enter it.
- Added a config option to redirect HTTP requests to HTTPS for new domains (if they have an SSL website enabled).
- Backups can now be deleted either from the Backup Logs page, or using the delete-backup API command.