---
title: "Webmin 2.000 and Usermin 1.860 released"
date: 2022-08-23
draft: false
---

* Add to enforce HTTP Strict Transport Security (HSTS) policy in SSL enabled mode
* Add better `http` to `https` redirects when SSL is enabled
* Add support for installing multiple versions of Webmin on `systemd` systems
* Add support for AMD CPU thermisters #1714
* Add better support for Webmin minor (release) versions upgrades
* Add Webmin and Usermin configuration modules display minor (release) version
* Add Mint Linux support
* Add latest Authentic 20.00 [theme update](https://github.com/webmin/authentic-theme/releases/tag/20.00) with number of bug fixes
* Fix to also restart dependent services (i.e. `fail2ban`) upon `firewalld` restart
* Fix to preserve service state for Webmin and Usermin upon package upgrades (i.e. don't start stopped)
* Fix Bind module config incorrectly updated upon Webmin upgrades on CentOS 7
