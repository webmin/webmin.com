---
title: "Webmin 2.110 and Usermin 2.010 released"
date: 2024-04-15
tags: ["changelog", "webmin-changelog", "usermin-changelog"]
---
* Add an API to check if the system is running or approaching its end of life (EOL)
* Add support for `systemd-timesyncd` and `chronyd` to the System Time module
* Add Ubuntu 24.04 support
* Add Squid 6 support
* Add latest Devuan Linux support
* Add an option to request Let's Encrypt certificates using `certbot` in standalone mode [forum.virtualmin.com/t/123696](http://forum.virtualmin.com/t/webmin-ssl-certificate-with-lets-encrypt-directly-obtain-certificate-without-requiring-apache-or-nginx/123696/)
* Add IMAP and SMTP monitors in the System and Server Status module
* Fix TLS connection to SMTP servers not working in some cases
* Fix ProFTPd module to use actual UI library
* Fix to using the `qrencode` command to generate QR codes locally instead of the remote Google Chart API
* Fix a number of various other issues

---

#### Assets

| File                       | Size | File                       | Size |
| -------------------------- | -----| -------------------------- | ---- |
| **Webmin**                 |      | **Usermin**                |      |
|[webmin-2.110-1.noarch.rpm](https://github.com/webmin/webmin/releases/download/2.110/webmin-2.110-1.noarch.rpm) | 39.1 MB | [usermin-2.010-1.noarch.rpm](https://github.com/webmin/usermin/releases/download/2.010/usermin-2.010-1.noarch.rpm)    | 15.6 MB |
|[webmin_2.110_all.deb](https://github.com/webmin/webmin/releases/download/2.110/webmin_2.110_all.deb)           | 32.2 MB | [usermin-2.010_all.deb](https://github.com/webmin/usermin/releases/download/2.010/usermin_2.010_all.deb)              | 11.3 MB |
|[webmin-2.110.pkg.gz](https://github.com/webmin/webmin/releases/download/2.110/webmin-2.110.pkg.gz)             | 43.8 MB | [usermin-2.010.tar.gz](https://github.com/webmin/usermin/releases/download/2.010/usermin-2.010.tar.gz)                | 17.5 MB |
|[webmin-2.110.tar.gz](https://github.com/webmin/webmin/releases/download/2.110/webmin-2.110.tar.gz)             | 44.4 MB | | |
|[webmin-2.110-minimal.tar.gz](https://github.com/webmin/webmin/releases/download/2.110/webmin-2.110-minimal.tar.gz) | 4.45 MB | |
