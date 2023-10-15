---
title: "ConfigServer Security & Firewall"
date: 2023-10-15
author: "Ilia Ross"
weight: 4500
---

### About
A stateful packet inspection (SPI) firewall, login/intrusion detection and security application for Linux servers.

### Supported OS
* Red Hat Enterprise Linux 7, 8 and 9
* Rocky Linux 8 and 9
* AlmaLinux 8 and 9
* Fedora 38
* CentOS Stream 8 and 9
* CentOS 7
* CloudLinux 7, 8 and 9

* Debian 10, 11 and 12
* Ubuntu 18.04, 20.04 and 22.04

### Download
The latest version of [ConfigServer Security & Firewall](https://configserver.com/configserver-security-and-firewall/) can be downloaded at official [configserver.com](https://configserver.com/configserver-security-and-firewall/) website or using [csf.tgz](https://download.configserver.com/csf.tgz) direct link. The latest _sha256_ checksums can also be [downloaded](https://www.configserver.com/checksums.txt).

#### Installation
To install ConfigServer Security & Firewall, you'll need _root_ access. The installation process is straightforward and consists of the following steps:

```bash
cd /usr/local/src
curl -O https://download.configserver.com/csf.tgz
tar -xzf csf.tgz
cd csf
./install.sh
```
After installation, you need to install ConfigServer Security & Firewall Webmin module. To do this, go to **Webmin ⇾ Webmin Configuration: Webmin Modules** page and choose **From local file** option. Then select the file **`/usr/local/csf/csfwebmin.tgz`** and click on **Install Module** as shown in the screenshot below:

[![](/images/docs/screenshots/modules/light/configserver-security-and-firewall-install.png "ConfigServer Security & Firewall Installation Screenshot")](/images/docs/screenshots/modules/light/configserver-security-and-firewall-install.png)

### Features
This product was developed to address the complexities and inefficiencies of other tools available for server security:

*   Straight-forward SPI _iptables_ firewall script
*   Daemon process that checks for login authentication failures for:
    *   OpenSSH, Webmin
    *   Dovecot, Postfix, Proftpd
    *   Password protected web pages (_htpasswd_)
    *   _mod\_security_ failures (v1 and v2)
    *   Custom login failures with separate log file and regular expression matching
*   POP3/IMAP login tracking to enforce logins per hour
*   SSH login notification
*   SU login notification
*   Excessive connection blocking
*   Outstanding Webmin UI integration
*   Easy upgrade between versions from within the control panel
*   Easy upgrade between versions from shell
*   Auto-configures the SSH port if it’s non-standard on installation
*   Block traffic on unused server IP addresses – helps reduce the risk to your server
*   Alert when end-user scripts sending excessive emails per hour – for identifying spamming scripts
*   Suspicious process reporting – reports potential exploits running on the server
*   Excessive user processes reporting
*   Excessive user process usage reporting and optional termination
*   Suspicious file reporting – reports potential exploit files in `/tmp` and similar directories
*   Directory and file watching – reports if a watched directory or a file changes
*   Block traffic on a variety of Block Lists including [DShield Block List](http://feeds.dshield.org/block.txt) and [Spamhaus DROP List](http://www.spamhaus.org/drop/index.lasso)
*   BOGON packet protection
*   Pre-configured settings for Low, Medium or High firewall security
*   Works with multiple ethernet devices
*   Server security check – performs a basic security and settings check on the server
*   Allow Dynamic DNS IP addresses – always allow your IP address even if it changes whenever you connect to the internet
*   Alert sent if server load average remains high for a specified length of time
*   _mod\_security_ log reporting (if installed)
*   IDS (Intrusion Detection System) – the last line of detection alerts you to changes to system and application binaries
*   SY flood protection
*   Ping of death protection
*   Port scan tracking and blocking
*   Permanent _and_ temporary (with TTL) IP blocking
*   Exploit checks
*   Account modification tracking – sends alerts if an account entry is modified, e.g. if the password is changed or the login shell
*   Shared _syslog_ aware
*   Messenger service – allows you to redirect connection requests from blocked IP addresses to pre-configured text and HTML pages to inform the visitor that they have been blocked in the firewall. This can be particularly useful for those with a large user base and help process support requests more efficiently
*    Country code blocking – allows you to deny or allow access by ISO Country Code
*    Port flooding detection – per IP, per Port connection flooding detection and mitigation to help block DOS attacks
*   _lfd_ clustering – allows IP address blocks to be automatically propagated around a group of servers running _lfd_. It allows allows cluster-wide allows, removals and configuration changes
*   Quick start _csf_ – deferred startup by _lfd_ for servers with large block and/or allow lists
*   Distributed login failure attack detection
*   Temporary IP allows (with TTL)
*   IPv6 support with _ip6tables_
*   System statistics – basic graphs showing the performance of the server, e.g. Load Averages, CPU Usage, Memory Usage, etc
*   [ipset](http://ipset.netfilter.org/) support for large IP lists
*   Integrated with the CloudFlare firewall

**Note:** Any OS that is EOL will not be supported and newer versions may no longer work as new functionality is added.

#### ConfigServer firewall (csf)

A comprehensive, straight-forward, and flexible SPI _iptables_ firewall.

#### Login failure daemon (lfd)

A daemon that scans for login attempts against your server that continually fail within a short period of time, effectively blocking brute-force attacks.

### Screenshots

[![](/images/docs/screenshots/modules/light/configserver-security-and-firewall-1.png "ConfigServer Security & Firewall Screenshot 1")](/images/docs/screenshots/modules/light/configserver-security-and-firewall-1.png)
[![](/images/docs/screenshots/modules/light/configserver-security-and-firewall-2.png "ConfigServer Security & Firewall Screenshot 2")](/images/docs/screenshots/modules/light/configserver-security-and-firewall-2.png)
[![](/images/docs/screenshots/modules/light/configserver-security-and-firewall-3.png "ConfigServer Security & Firewall Screenshot 3")](/images/docs/screenshots/modules/light/configserver-security-and-firewall-3.png)

### Support

For support, please use the [ConfigServer Community Forum](https://forum.configserver.com). Direct support for the free scripts is not provided via helpdesk or email.

### Licensing

The application is released under our [script license](https://download.configserver.com/csf/license.txt). It's free of charge, with no warranty.

### Documentation

- [readme.txt](https://download.configserver.com/csf/readme.txt)
- [install.txt](https://download.configserver.com/csf/install.txt)
- [changelog.txt](https://download.configserver.com/csf/changelog.txt)
