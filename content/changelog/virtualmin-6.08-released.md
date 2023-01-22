---
title: "Virtualmin 6.08 released"
date: 2019-10-16
tags: ["changelog", "virtualmin-changelog"]
---

- Fixes for several security issues that could be exploited by domain owners.

  Thanks to RACK911 Labs for finding and reporting these!
- Much improved MariaDB 10.x support.
- Virtual servers to backup can now be selected by reseller.
- Fixes for Dropbox backup problems.
- Fixes for FPM port collision problem.

The Dropbox fix also needs a Webmin update to 1.932 (also rolled out today). The updated MariaDB 10.x support means we can finally support Debian 10 and CentOS 8. Debian 10 support should be announced in a day or two (we're testing and it looks good so far), and CentOS 8 soon after.