---
title: "Virtualmin 7.20 released"
date: 2024-06-24
tags: ["changelog", "virtualmin-changelog"]
author: "Ilia Ross"
---

* Add support to record most recent user logins for virtual servers
* Add ability to disable domains on given schedule
* Add support for proxying WebSocket with Apache and Nginx proxy paths
* Add an API to manage scheduled backups
* Add the ability to enable DKIM even if the mail feature is disabled
* Add ability to check the resolvability of alternative names before issuing a Let's Encrypt certificate
* Add an API to move SSL certificates to a new location if it differs from the active template
* Add an option to the Website Options page to redirect www to non-www and vice versa (currently for Apache systems only)
* Add support for host-based redirects (currently for Apache systems only)
* Fix to change the default settings so that records are not proxied by default when using Cloudflare
* Fix a bug where CGI execution mode was disabled on initial install
* Fix PHP modes availability depending on the CGI execution mode
* Fix a bug with default shell selection when a user is created using the CLI
* Fix the issue where the last login time is not being updated
* Fix false-positive warnings about missing IPv6 addresses
* Fix domain locking bugs
* Drop support for obsolete or not fully supported mail servers like VPopMail, and Exim
