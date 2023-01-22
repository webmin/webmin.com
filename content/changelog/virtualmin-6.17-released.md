---
title: "Virtualmin 6.17 released"
date: 2021-09-09
tags: ["changelog", "virtualmin-changelog"]
---

 - Added a field to the virtual server creation page to use an existing SSH key for logins, or generate a new key.
 - If needed, Virtualmin will configure the exact PHP version required to run scripts when installed.
 - Two-factor authentication for Usermin is setup for domain owners at the same time as Virtualmin.
 - Added the `create-login-link` API command to login as a domain owner without a password.
 - Massively simplified the SSL Certificate page for services certificates.
 - Added a field for entering an SSH private key file for use in backups, instead of a password.

Virtualmin Pro also includes a number of new cloud DNS providers (in addition to Route 53 support that's already been in for a while), including Cloudflare and Google Cloud DNS, which is a preview of features to come in Virtualmin Pro version 7. These are very large new features, and should be considered beta. Don't rely on them in production until you thoroughly test your use case, but do let us know if you find any bugs.