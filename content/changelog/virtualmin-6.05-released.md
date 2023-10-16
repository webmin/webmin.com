---
title: "Virtualmin 6.05 released"
date: 2018-11-30
tags: ["changelog", "virtualmin-changelog"]
---

This release allows domain owners to restore global backups, adds support for wildcard Let's Encrypt certs, fixes license updates, and allows the domain name used in links from virtualmin to be customized.

{{< details-start post-content-indent-details "<i class='wm wm-fw wm-newspaper'></i>" open >}}
- Scheduled backups created by root can now be designated as allowing restore by virtual server owners, so that they don't have to maintain their own backups.
- When used with Webmin 1.900 or above, Let's Encrypt SSL certificates can be requested for wildcard domains.
- The domain name used in links to a server's website can now be customized to use one of its aliases instead.
- Many Install Script updates.
- Bug fixed in `change-license` CLI command that would prevent it from correctly re-checking the license after changing it.
{{< details-end >}}
