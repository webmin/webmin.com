---
title: "Webmin 2.520 and Usermin 2.420 released"
date: 2025-10-04
tags: ["changelog", "webmin-changelog", "usermin-changelog"]
---

* Fix to make sure the mail URL uses a well-known host name [security]
* Fix support for other Raspberry Pi sensors [#2545](https://github.com/webmin/webmin/issues/2545)
* Fix the printing of the bottom button row in the form column table
* Fix to recommend Perl `Sys::Syslog` module [#2557](https://github.com/webmin/webmin/issues/2557)
* Fix to avoid using short hostname in HTTPS redirects when an FQDN is available
* Fix to use _/proc_ sampler instead of `vmstat` for the same output with much lower overhead
* Fix to query specific fields in FreeBSD memory stats collection, cutting CPU use by 80%
* Fix to kill Webmin subprocesses during RC stop on FreeBSD and other systems
* Fix to correctly fetch command version in `PPTP VPN Client` module [#2567](https://github.com/webmin/webmin/issues/2567)
* Add a complete overhaul of `var_dump` subroutine, which is now fully portable
* Update the Authentic theme to the latest version with various fixes:
  - Fix the text color when reading email in the Read User Mail module [webmin#2555](https://github.com/webmin/webmin/issues/2555)
  - Fix to ensure the selected color palette is correctly stored when changed manually [webmin#2552](https://github.com/webmin/webmin/issues/2552)
  - Fix a bug when the Webmin version label was missing when copying to clipboard system information from the dashboard
  - Fix DNS query spike from network stats collection on FreeBSD [webmin#2556](https://github.com/webmin/webmin/issues/2556)
  - Fix to display the appropriate icon for proxy mode on new Bunny DNS
  - Fix spinner color in toast messages for dark palette
  - Fix other bugs and add various small improvements
    
    [More details...](https://github.com/webmin/authentic-theme/releases/tag/25.00)

---

#### Assets

| File                       | Size | File                       | Size |
| -------------------------- | -----| -------------------------- | ---- |
| **Webmin**                 |      | **Usermin**                |      |
|[webmin-2.520-1.noarch.rpm](https://github.com/webmin/webmin/releases/download/2.520/webmin-2.520-1.noarch.rpm)     | 31 MB  |   [usermin-2.420-1.noarch.rpm](https://github.com/webmin/usermin/releases/download/2.420/usermin-2.420-1.noarch.rpm)    | 14.4 MB |
|[webmin_2.520_all.deb](https://github.com/webmin/webmin/releases/download/2.520/webmin_2.520_all.deb)               | 26 MB  |   [usermin-2.420_all.deb](https://github.com/webmin/usermin/releases/download/2.420/usermin_2.420_all.deb)              | 10 MB   |
|[webmin-2.520.pkg.gz](https://github.com/webmin/webmin/releases/download/2.520/webmin-2.520.pkg.gz)                 | 36 MB  |   [usermin-2.420.tar.gz](https://github.com/webmin/usermin/releases/download/2.420/usermin-2.420.tar.gz)                | 16.4 MB |
|[webmin-2.520.tar.gz](https://github.com/webmin/webmin/releases/download/2.520/webmin-2.520.tar.gz)                 | 37 MB  |
|[webmin-2.520-minimal.tar.gz](https://github.com/webmin/webmin/releases/download/2.520/webmin-2.520-minimal.tar.gz) | 3.5 MB |
