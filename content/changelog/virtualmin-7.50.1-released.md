---
title: "Virtualmin 7.50.1 released"
date: 2025-12-05
tags: ["changelog", "virtualmin-changelog"]
author: "Ilia Ross"
---

* Fix to correctly add new virtual hosts in Apache config to prevent wrong site being served
* Fix DNS NS record update correctly when renaming domain
* Fix to set a custom DNS address for a subdomain only if it really differs from the primary one
* Fix mail alias domains to manage users expectedly
* Fix to correctly show current IPv6 address in the form when changing it
* Fix the default BIND to listen on port 53 unless already configured
* Fix redirect all requests to SSL site option work correctly
* Fix support to manage PHP 8.5 versions

[More details...](https://forum.virtualmin.com/t/virtualmin-virtual-server-7-50-1-released/135958)
