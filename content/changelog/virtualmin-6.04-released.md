---
title: "Virtualmin 6.04 released"
date: 2018-10-10
tags: ["changelog", "virtualmin-changelog"]
---

- Before a DNS zone is updated, BIND will be told to freeze it and thaw afterwards. This ensures that dynamic updates are preserved.
- Dovecot and Postfix per-IP SSL certificate setup can now be configured on a per-template basis.
- Redirects for / created using the UI are automatically adjusted to exclude Let’s Encrypt validation paths.
- Various bugfixes, script updates, typos, and minor UI improvements.