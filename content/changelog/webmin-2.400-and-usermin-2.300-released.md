---
title: "Webmin 2.400 and Usermin 2.300 released"
date: 2025-05-25
tags: ["changelog", "webmin-changelog", "usermin-changelog"]
---

* Add built-in support for forgotten password recovery
* Add support for SSL certificates and DNS over TLS in the BIND module
* Add support to configure listen for any type of address in Dovecot module
* Add ability to manage available PHP packages directly from PHP Configuration module
* Add ability to configure and show proper branding logo on the login page
* Add display of the PHP binary and its version in the PHP Configuration module
* Add improvements to MySQL/MariaDB module when editing users and privileges
* Add support for AxoSyslog in System Logs NG module
* Add TOML as editable format in the File Manager module
* Add support for template variables in help pages
* Add support for enabling gender-neutral translations if supported by the language
* Improve security of single-use login links
* Fix to check if local version of `mysqldump` supports `--set-gtid-purged` flag
* Fix to respect option to copy new key and certificate to Webmin in the SSL Encryption module
* Fix to use new API for auxiliary remote QR code generation
* Fix to show human-readable timestamps for kernel log in the System Logs module
* Fix to respect reverse order flag in the System Logs module
* Fix to prefer JSON::XS over JSON::PP if available for better performance
* Fix bugs with IPv6 interface creation on systems using Network Manager
* Fix to address the security issue in the System Documentation module
* Fix to use fast PRC mode by default in the Webmin Servers Index module
* Fix Fail2Ban version detection
* Fix to follow German translation rules that most people already accept

---

#### Assets

| File                       | Size | File                       | Size |
| -------------------------- | -----| -------------------------- | ---- |
| **Webmin**                 |      | **Usermin**                |      |
|[webmin-2.400-1.noarch.rpm](https://github.com/webmin/webmin/releases/download/2.400/webmin-2.400-1.noarch.rpm)     | 31 MB |   [usermin-2.300-1.noarch.rpm](https://github.com/webmin/usermin/releases/download/2.300/usermin-2.300-1.noarch.rpm)    | 14.3 MB |
|[webmin_2.400_all.deb](https://github.com/webmin/webmin/releases/download/2.400/webmin_2.400_all.deb)               | 25.9 MB | [usermin-2.300_all.deb](https://github.com/webmin/usermin/releases/download/2.300/usermin_2.300_all.deb)              | 9.9 MB |
|[webmin-2.400.pkg.gz](https://github.com/webmin/webmin/releases/download/2.400/webmin-2.400.pkg.gz)                 | 36 MB |   [usermin-2.300.tar.gz](https://github.com/webmin/usermin/releases/download/2.300/usermin-2.300.tar.gz)                | 16.3 MB |
|[webmin-2.400.tar.gz](https://github.com/webmin/webmin/releases/download/2.400/webmin-2.400.tar.gz)                 | 36.7 MB | | |
|[webmin-2.400-minimal.tar.gz](https://github.com/webmin/webmin/releases/download/2.400/webmin-2.400-minimal.tar.gz) | 3.5 MB | |
