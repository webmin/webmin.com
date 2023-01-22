---
title: "Virtualmin 6.00 released"
date: 2017-08-10
tags: ["changelog", "virtualmin-changelog"]
---

This mostly a bugfix release, including fixes to bugs found during the beta 5.99 release. The final pieces of Virtualmin 6, the installer, virtualmin-config package, and libraries, will be moved into place later today for a "soft launch" of Virtualmin 6 (it'll be another day before the docs are fully updated to cover the new stuff).

- Removed support for Qmail+LDAP as a mail server.
- Unexpected server processes running as domain users are now detected and included in the validation report, and can optionally be automatically terminated.
- Added support for using `clamdscan` for remote virus scanning, so that `clamd-stream-client` doesn't need to be installed.
