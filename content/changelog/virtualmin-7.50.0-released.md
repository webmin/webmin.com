---
title: "Virtualmin 7.50.0 released"
date: 2025-10-18
tags: ["changelog", "virtualmin-changelog"]
author: "Ilia Ross"
---

* Add support for Bunny DNS for Virtualmin Pro users
* Add improvements to external IPv4 and IPv6 address detection
* Add improvements and simplifications to the post-installation wizard
* Add pure-Perl implementation for retrieving SSL certificate information
* Fix to significantly improve support for IPv6 across different services
* Fix Apache and Dovecot config issues when restoring the backup
* Fix to stop breaking Apache config if hostname SSL request fails during Virtualmin installation
* Fix not to smoosh DNS TXT records together when using CLI [#1104](https://github.com/virtualmin/virtualmin-gpl/issues/1104)
* Fix to disallow out-of-domain DNS records when using CLI
* Fix to correctly add IPv6 to SSL virtual hosts
* Fix incorrect logic when checking IPv4 and IPv6 addresses in the config check
* Fix mailbox cleanup to correctly handle messages moved between folders, like to trash or spam
* Fix missing POP port in mail auto-config that caused some email clients to fail automatic configuration
* Fix to properly use the global Webmin notification email address for alerts
* Fix to hide `localhost` DNS record unless explicitly enabled
* Fix to completely remove the obsolete `m` DNS record

[More details...](https://forum.virtualmin.com/t/virtualmin-virtual-server-7-50-0-released/135550)