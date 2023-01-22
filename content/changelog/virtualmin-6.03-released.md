---
title: "Virtualmin 6.03 released"
date: 2018-04-23
tags: ["changelog", "virtualmin-changelog"]
---

This release includes multiple script installer updates, removes support for PHP 4 but adds 7.2, improves the handling of dynamic DNS zones, and fixes a bunch of small bugs.

{{< details-start post-content-indent-details "<i class='wm wm-newspaper'></i>" open >}}
- When adding an alias to a domain with a Let’s Encrypt SSL certificate, the cert is automatically updated to include the alias domain.
- Backups from cPanel, Plesk and other control panels can now be migrated even when Nginx is used as a webserver.
- Numerous Script Installer updates.
{{< details-end >}}
