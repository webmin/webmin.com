---
title: "Virtualmin 6.15 released"
date: 2021-03-07
tags: ["changelog", "virtualmin-changelog"]
---

This major update re-designs the PHP options page, adds the ability to request SSL certs for all virtual servers, and allows DNS hosting to be offloaded to Amazon Route 53.

{{< details-start post-content-indent-details "<i class='wm wm-fw wm-newspaper'></i>" open >}}
  - Consolidated all PHP options into a single page, and moved website options to it's own page in the UI.
  - SSL certificates can now be generated and managed for virtual servers even when they don't have the SSL feature enabled.
  - Added the Cloud DNS Providers page, for configuring Virtualmin to use Route53 to host DNS rather than doing it locally.
{{< details-end >}}

