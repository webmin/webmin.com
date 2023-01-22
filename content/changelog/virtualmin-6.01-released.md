---
title: "Virtualmin 6.01 released"
date: 2017-10-17
tags: ["changelog", "virtualmin-changelog"]
---

- Multiple remote MySQL servers can now be defined, and selected on a per-domain basis at virtual server creation time. This allows some or all domains to easily use different MySQL hosts.
- Support for rating scripts and viewing existing ratings has been removed, as this was a confusing and rarely-used feature.
- Installable scripts can now be in multiple categories, and the UI has been updated to reflect this.
- Fixed WordPress Install Script invisibility on some platforms.
- New Dropbox API support.
- Fixed File Manager link for domain owners.
- A variety of other minor bugfixes.
- BIND DNS feature bug that leads to “none” being inserted into zones (which is invalid syntax, so causes BIND to not start)
- Inability to create/delete databases as domain owner user (this was an access control issue, with too little privilege available when performing the action as a domain owner user).
- Also creates a combined with CA SSL certificate bundle when setting up SSL (which can be used for cases where separate files don’t work).