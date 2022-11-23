---
title: "Changes"
date: 2017-10-02
categories: []
aliases: []
toc: false
draft: false
---
# Change Log

The major changes in each Webmin release are listed below. A more detailed list of changes and fixes can be found in the detailed change logs, linked below.

**Version 2.000 (23rd August 2022)**

* Enforce HTTP Strict Transport Security (HSTS) policy in SSL enabled mode.
* Add better http to https redirects when SSL is enabled.
* Add support for installing multiple versions of Webmin on systemd systems.
* Add support for AMD CPU thermisters
* Add better support for Webmin minor (release) versions upgrades.
* Add Webmin and Usermin configuration modules display minor (release) version.
* Add Mint Linux support.
* Add latest Authentic 20.00 theme update with number of bug fixes.
* Fix to also restart dependent services (i.e. fail2ban) upon firewalld restart.
* Fix to preserve service state for Webmin and Usermin upon package upgrades (i.e. don't start stopped).
* Fix Bind module config incorrectly updated upon Webmin upgrades on CentOS 7.

**Version 1.999 (4th August 2022)**

* Minor bugfixes for issues found in 1.998.

**Version 1.998 (27th July 2022)**

* Fix Apache, BIND, MySQL, ProFTPd and other modules configs on newest distros for new installs
* Fix to use Cron default path when run from UI
* Fix post uninstall cleanups
* Fix version detection bug for Log File Rotation module
* Add improvements to Partitions on Local Disks module
* Add better support for CentOS Stream Linux for new installs
* Add improvements for searching and naming global PHP configs files
* Add support for unix extensions option for Samba module #1695
* Add latest Authentic theme update with various bug fixes and small improvements

**Version 1.997 (13th July 2022)**

* Added support for LVM RAID volumes.
* Fixed issues with restarting when Webmin is upgraded from the UI.

**Version 1.996 (4th July 2022)**

* Fixed SystemD issues that prevented Webmin from restarting when upgraded.

**Version 1.995 (30th June 2022)**

* Fixed an XSS security issue in the HTTP Tunnel module.
* Add improvements to stability for systemd systems.
* Add native support to default to system default hashing format.
* Add support to yescrypt password hashing scheme.
* Add new System Logs Viewer (logviewer) module.
* Add new webmin server sub-command.
* Add to set enviromental variables in Filesystem Backup module.
* Fix upload tracker issues with large uploads.
* Fix NVMe drives status support.
* Fix AlmaLinux support.
* Fix BIND config for FreeBSD 12 on initial setup.

**Version 1.994 (22nd May 2022)**

* Fixed a [security issue][1] (CVE-2022-30708) that can be exploited by less privileged Webmin users to gain root access.
* Numerous small bugfixes and enhancements.

**Version 1.991 (18th April 2022)**

* This is mostly a bugfix release for issues found since 1.990.

**Version 1.990 (3rd March 2022)**

* Fixed two [security bugs][2] in the File Manager module that could be exploited by less privileged Webmin users.
* Added buttons to stop and start the Cron daemon.
* Fail2ban rules are preserved when applying the IPtables configuration file.
* Added support for static routes when using Netplan for network configuration.
* Updated the Authentic Theme to the latest version.
* Updated the UI in several modules to use the latest API and be more consistent with the rest of Webmin.

**Version 1.984 (26th December 2021)**

* Mostly a bugfix release for issues found in 1.983.

**Version 1.983 (4th December 2021)**

* Bugfix release for issues found in 1.982.

**Version 1.982 (26th November 2021)**

* Added support for HTTP2 in the Apache module.
* Added an optional feature to re-format the Apache configuration file.
* Several different contributed translation updates.
* Added support for extracting archive files and directory uploads in the File Manager.
* Updated the Authentic Theme to the latest version.
* Many many other small bugfixes and features.

**Version 1.981 (28th August 2021)**

* Fixes a couple of minor bugs, including one that broke MySQL backups in some cases.

**Version 1.980 (22nd August 2021)**

* In the Webmin Configuration module, added an option on the Authentication Options page to enable a password change API for use by other programs.
* Removed rarely-used code to check for Webmin module updates.
* Improved discovery of PHP INI configuration files.
* Added support for Rocky and Alma Linuxes.
* Let's Encrypt renewals can use Virtualmin Cloud DNS providers, if configured.
* Various language updates from contributors.
* Update the Authentic Theme to the latest release.

**Version 1.979 (15th June 2021)**

* Added support for setting up two-factor authentication in Usermin.
* Security fixes for un-trusted inputs in the Network Configuration module.
* Updated the Authentic Theme to the latest version.
* Various bugfixes for issues found in version 1.974.

**Version 1.974 (1st May 2021)**

* Bugfix release for various issues in 1.973.

**Version 1.973 (7th March 2021)**

* Bugfix release for minor issues in 1.972.

**Version 1.972 (1st March 2021)**

* Updated the CA cert used for Let's Encrypt again.
* Updated the Authentic Theme to the latest version.
* Added support for per-user preferences to the File Manager and other modules.

**Version 1.970 (6th January 2021)**

* Updated the CA cert used for Let's Encrypt.
* Updated the Authentic Theme to the latest version.
* Added limits on the number of concurrent connections per IP address and IP network.
* Fixed a security bug that affects Webmin when run on Windows.
* Many French translation updates.

**Version 1.962 (11th November 2020)**

* Bugfix release for 2FA issues.

**Version 1.960 (19th October 2020)**

* Updated the Authentic theme to the latest version, which improves the two-factor signin UI, adds a search box on config pages, increases font contrast, updates radio/checkboxes, and more.
* Improved support for user and permission management in newer MySQL / MariaDB versions.
* Added buttons to start and stop atd in the Scheduled Commands module.
* Indentation is now preserved when editing Apache configs.
* Remove need for the apt-show-versions commands to correctly discover APT package updates.
* Addes support for STARTTLS when sending email.
* Massive improvements to the YAML parsing in the Network Configuration module, to support more complex Netplan configs.
* Many many other small bugfixes, UI improvements and features.

**Version 1.955 (22nd August 2020)**

* More bugfixes, and an update to the theme.

**Version 1.954 (2nd August 2020)**

* Minor bugfixes to 1.953

**Version 1.953 (5th July 2020)**

* Added optional automatically generated translations for all languages, and switched all encodings to UTF-8.
* Updated the Authentic theme to the latest version.
* Added support for Postfix SNI certificate maps.
* Added Chrony support in the System Time module.
* Added caching for LDAP and MySQL connections for Webmin users.
* Removed several noisy messages from the error log.
* Many many other small bugfixes and features.

**Version 1.941 (15th January 2020)**

* Put back an updated version of the built-in Let's Encrypt client.

**Version 1.940 (28th December 2019)**

* Removed Webmin's built-in Let's Encrypt client, in favor of recommending the official certbot command.
* Added support for creating "safe-mode" Webmin users who have access only to modules and permissions that don't grant root access.
* Added support for CAA records in the BIND module.
* Postfix maps with more than 100 entries by default are now shown with a search box.
* Updated the Authentic Theme to the latest version, which includes numerous improvements to the file manager and overall UI.

**Version 1.930 (17th August 2019)**

* Fixed a [security hole][3] that allows remote exploits if the option to change expired passwords is enabled. All users should upgrade immediately to pick up this fix!
* Updated the Authentic Theme to the latest version.

**Version 1.920 (6th July 2019)**

* Updated the Authentic Theme to the latest version.
* Added an option to disable (comment out) hosts file entries.
* Added a monitor type to check if a bootup action is running or not.
* Translation updates for multiple languages.

**Version 1.910 (9th May 2019)**

* Updated the Authentic Theme to the latest version.
* More translation updates for multiple languages.
* The next run time of each cron job can be displayed by enabling a new config option.
* Added a tab for managing APT and YUM repos to the Software Packages module.
* Added support for file ownership and permission checks to the File or Directory monitor.

**Version 1.900 (19th November 2018)**

* Updated the Authentic Theme to the latest version.
* Translation updates for multiple languages.
* When installing a package, the list of other dependencies that will be also installed is displayed for confirmation.
* Wildcard SSL certs can now be requested via Let's Encrypt in DNS mode, if the native client is installed.
* Announcements to all Webmin users can now be displayed on the System Information page.

**Version 1.890 (19th July 2018)**

* Added support to the Network Configuration module for the Netplan interface format used on Ubuntu 18 and above.
* Bulgarian, German and Catalan language translation updates.
* Theme updates to the file manager, high-contrast mode, Japanese, German, Swedish and Albanian language updates, better date display and more.
* Improved support for freezing and thawing dynamic zones and IPv6 zone transfers in the BIND module.
* Scheduled funtions are now recorded in the Webmin Actions Log module.
* Improved detection of new Postfix versions.
* Email autoresponder option to prevent replies to forwarded email.
* OpenSuSE Leap, Debian 9 and Ubuntu 18 support.

**Version 1.881 (16th March 2018)**

* Bugfixes for the Cron module.
* Further updates to the Authentic theme.

**Version 1.880 (4th March 2018)**

* German, Catalan and Bulgarian translation updates.
* The newest version of the Authentic theme.
* Added a page for manually editing the MySQL config files, and implemented support for config includes.
* Added a page for manually editing the allowed hosts config file.
* Added a config option to set a minimum interval between notifications for each monitor in the System and Server Status module.
* Bugfixes for DNS validation for Let's Encrypt certificates.

**Version 1.870 (8th December 2017)**

* Major updates to the Authentic theme to speed up page loads and add real-time system statistics.
* Greek, Bulgarian, Catalan and Russian translation updates and encoding fixes.
* Severel fixes for Let's Encrypt SSL certificate requests.
* UI cleanups in the Majordomo module.
* UI unification in the IPv4 and IPv6 firewall modules.
* Numerous fixes for minor Perl error and warnings.

**Version 1.860 (10th October 2017)**

* Fixed an XSS vulnerability in the MySQL module (thanks to Munzir Taha).
* Fixed a security issue that could be exploited by using the Upload and Download module to fetch an untrusted URL (thanks to Maor Shwartz)
* Updated to the latest version of the Authentic theme.
* More Majordomo module improvements, thanks to gnadelwartz.
* Fixed upstart vs systemd detection.
* German translation updates from Raymond Vetter, Albanian from Adalen Vladi, and Catalan from Jaume Badiella.
* Let's Encrypt fixes when using DNS-based validation in a sub-domain.

**Version 1.850 (28th June 2017)**

* Fixed multi-hostname DNS registration and the display of error messages in Let's Encrypt support.
* Numerous Majordomo module improvements, thanks to gnadelwartz.
* Added support for creating and editing port forwards in the FirewallD module.
* Filesystems that have less than 1% free disk space are now shown on the System Information page.
* Numerous bugfixes across multiple modules.

**Version 1.840 (8th May 2017)**

* Fixes for XSS security vulnerabilities
* Many updates to the Authentic theme.
* SSHFP record support in the BIND module.
* Thin provisioned LV support in the LVM module.
* SNI (per-domain-name) SSL certificate support in Webmin itself.
* DNS validation mode for Let's Encrypt certificates.
* Manual editor for Cron jobs.
* More German, Norwegian and Catalan translation updates.

**Version 1.831 (7th January 2017)**

* Authentic Theme and File Manager bugfixes.

**Version 1.830 (29th December 2016)**

* Numerous bugfixes across multiple modules.
* Support for systems that have a different local and remote MySQL version.
* Major update to the Authentic theme.
* Support for the latest LDAP client configs as seen on CentOS 7.
* Removed two ancient obsolete themes from the default package.
* File Manager updates to support SElinux and file attributes.
* Support for the latest Let's Encrypt client program and CA certificate.
* More German, Norwegian and Catalan translation updates.

**Version 1.820 (3rd October 2016)**

* Fixed several bugs in the BIND DNS Server module that caused Perl errors.
* Added support for editing TLSA (SSL Certificate) DNS records.
* Single MySQL database backups can now be downloaded in the browser.
* The Let's Encrypt key size can now be customized.
* More German, Norwegian and Catalan translation updates.

**Version 1.810 (8th August 2016)**

* Fixed a security bug in the new Authentic theme that could be exploited by non-root Webmin users.
* Added the Linux IPv6 Firewall module, contributed by Patrick Wahle.
* Added an option to the Webmin Configuration logging page for sending Webmin action log messages via email.
* Failed Webmin logins are now recorded and displayed in the actions log.
* More German, Norwegian and Catalan translation updates.

**Version 1.801 (26th May 2016)**

* Fixed a security bug in the new Authentic theme.
* Added a recent logins section to the System Information page.
* When updating multiple packages, they are done in a single YUM or APT operation if possible.
* Added support for the network() source type for Syslog-NG.
* Added buttons to clone Unix users and groups.
* More German, Norwegian and Catalan translation updates.

**Version 1.791 (7th March 2016)**

* When attaching files to an email message or uploading files, multiple can now be selected at the same time.
* Added an option for automatically renewing Let's Encrypt certificates.
* If the Let's Encrypt client is not installed, Webmin will use its own built-in client code to request a certificate.
* Included the latest version of the Authentic Theme.
* More German, Norwegian and Catalan translation updates.

**Version 1.780 (30th December 2015)**

* Webmin can now request an SSL certificate for itself from Let's Encrypt, if you have the letsencrypt client command installed.
* The MySQL module now supports the new user table format seen in MySQL 5.7.
* In the BIND module, automatic creation and deletion of reverse records in partial delegation zones now works the same as in full reverse zones.
* The status of monitors from the System and Server Status module can now be displayed on the System Information page.
* Updates to the Filemin file manager and Authentic theme.
* Converted several more modules to the new Webmin UI framework.
* More German, Norwegian and Catalan translation updates.

**Version 1.770 (5th October 2015)**

* Added the Filemin File Manager module, which will eventually replace the old Java file manager.
* For new installs, switched the location of data files in many modules to /var/webmin instead of /etc/webmin.
* On CentOS, Fedora and Redhat systems, the DNSn lines in ifcfg-\* files are now updated in sync with resolv.conf.
* Added an option to have Webmin validate the SSL certificate on remote systems when making RPC calls, to ensure that the connection to them has not been MITM'd.
* More German, Norwegian and Catalan translation updates. Also Polish, thanks to Piotr Kozica.

**Version 1.760 (22nd June 2015)**

* Added the FirewallD module, for configuring the new default firewall seen on CentOS and RHEL 7.
* More German, Norwegian and Catalan translation updates.
* Fixed a bug that allowed the xmlrpc.cgi script to be used in an XSS attack (thanks to Peter Allow from IBM).

**Version 1.750 (12th May 2015)**

* More German translation updates, thanks to Raymond Vetter, Norwegian updates, thanks to Stein-Aksel Basma, and Catalan translation updates from Jaume Badiella.
* Much improved MacOS support, including the ability to create and manage LaunchD agents, and install software packages from PKGsrc.
* Various fixes needed to support the new NSLCD LDAP client used by CentOS 7.
* Improved support in multiple modules for Debian Jessie and Ubuntu 15.
* New pie charts, icons and other improvements in the Authentic theme.
* Removed the obsolete Majordomo, LILO, CFengine, CVS server and Security Sentries modules from the standard distribution.

**Version 1.740 (15th March 2015)**

* Added the awesome new Authentic Theme by Ilia Rostovtsev!
* More German translation updates, thanks to Raymond Vetter, Norwegian updates, thanks to Stein-Aksel Basma, and Catalan translation updates from Jaume Badiella.
* Added support for editing DMARC DNS records, which are specially encoded TXT records for defining the response to SPF and DKIM violations.
* Added an option to use an SSL connection when Webmin sends email, for connecting to remote mail servers like Gmail that don't allow unencrypted SMTP.
* Added module access control options to limit visible system status information on a per-user basis.
* Added a button to reload the Postfix configuration.

**Version 1.730 (1st January 2015)**

* Deprecated the old blue-theme in favor of the new gray-theme.
* Catalan translation updates from Jaume Badiella.
* More German translation updates, thanks to Raymond Vetter.
* Added API functions that modules (like Virtualmin) can provide and theme authors can call to get the preferred left and right side menus. Also updated the default theme to use this API.
* Added support for NSEC3PARAM records to the BIND module.
* All operations on user mailboxes are now performed with the permissions of the user, to prevent attacks using malicious symlinks.

**Version 1.720 (24th November 2014)**

* SSL v2 and v3 are now disabled by default at Webmin install time, to block the POODLE attack. They can be re-enabled on the SSL Encryption page of the Webmin Configuration module.
* Added a new status monitor type for alerting on the SSD wear level.
* Added an API function that theme authors can use to request left-menu items desired by Virtualmin and Cloudmin (or other modules).
* The list of PCI compliant ciphers has been updated, and will be kept up to date on future upgrades.
* New Debian and MacOS versions are now supported.

**Version 1.710 (29th September 2014)**

* Added additional protection against the Shellshock bug, for systems where bash is still vulnerable.
* Added the iSCSI TGTd module, for configuring the iSCSI server seen on CentOS and Redhat Enterprise 6 and above.
* More German translation updates thanks to Raymond Vetter, and Catalan from Jaume Badiella.
* Added support for the FreeBSD pkgng binary package repository as an alternative to ports.

**Version 1.700 (11th August 2014)**

* Support for CentOS 7, RHEL 7 and related distributions in all modules.
* More German translation updates thanks to Raymond Vetter, and Catalan from Jaume Badiella.
* Quotas on XFS filesystems on Linux can now be edited.
* The Network Configuration module now supports the "ip" commmand if "ifconfig" is not installed.
* Completely re-wrote the UI for the NFS Exports module to use the standard Webmin UI library, simplify selection of NFS v3 and v4 modes, and support more security types.
* Added support for nslcd to the LDAP Client module, as seen on CentOS 6 and above.

**Version 1.690 (20th May 2014)**

* Several security fixes for XSS attacks in popup windows.
* Added the Fail2Ban module, for blocking the IP addresses of systems that have many failed logins.
* More German translation updates thanks to Raymond Vetter, Catalan from Jaume Badiella and Norwegian updates from Stein-Aksel Basma.
* Fixed handling of the url\_rewrite\_children directive in the Squid module to support all the process count options.
* Improved Ubuntu 14.04 support.

**Version 1.680 (13th March 2014)**

* More German translation updates thanks to Raymond Vetter, Catalan from Jaume Badiella and Norwegian updates from Stein-Aksel Basma.
* Fixed security issues that could be exploited by un-trusted Webmin users in the PHP Configuration and Webalizer modules.
* Signed the File Manager module Java applet, to prevent scary browser warnings.
* UI library and strict perl conversions across several modules.
* When a language with a UTF-8 character set is selected, email is converted to UTF-8 before being displayed. This allows an inbox with mixed language subject lines to be properly displayed.

**Version 1.670 (13th January 2014)**

* More German translation updates thanks to Raymond Vetter, Catalan from Jaume Badiella, Norwegian updates from Stein-Aksel Basma and Bahasa Malaysia from Nawawi Jamili, Nizam Adnan and Weldan Jamili.
* Updated the Webmin Users, Webmin Configuration and Squid modules to use the standard UI library for a more consistent and themable UI.
* Added binary slave zone support and invalid chroot detection to the BIND module.
* Made the flow in the Disk Quotas module for enabling quotas from scratch simpler.
* Fixed FTP transfers to support IPv6-only servers, and added IPv6 network size support to Webmin's address-based access control.
* Added filtering for lists in the user, group and file chooser popups, thanks to a patch from Nawawi Jamili.
* Added support for rolling back LVM snapshots, thanks to a patch from Caspar Smit.
* Updated the Perl code in multiple modules to be strict and warnings compliant, to better detect bugs.

**Version 1.660 (5th October 2013)**

* More German translation updates thanks to Raymond Vetter, Catalan from Jaume Badiella, and Norwegian updates from Stein-Aksel Basma.
* [Two-factor authentication][4] support using either Google Authenticator (TOTP) or Authy.
* Added an option to use perfect forward secret ciphers for SSL, which protects traffic even if the Webmin private key is compomised.
* Added limits on output size and command run-time in the Command Shell module.

**Version 1.650 (17th August 2013)**

* Fixed bugs in the Apache and Software packages module.
* Added the ability to change the execution time of Webmin scheduled functions.

**Version 1.640 (13th August 2013)**

* Even more German translation updates thanks to Raymond Vetter, Norwegian updates thanks to Stein-Aksel Basma, Polish from Piotr Kozica, and Catalan from Jaume Badiella.
* UI consistency improvements in the Linux Firewall and Xinetd modules.
* Support for new Apache 2.4 features, such as IncludeOptional, the removal of NameVirtualHost and use of apachectl to get enabled modules.
* Improved error detection and better handling of disks that don't start on cylinder 1 in the Fdisk module.
* Support for growing a logical volume to the maximum size possible in the LVM module.
* Fixes for total and free memory detection under OpenVZ / Virtuozzo.
* Mandriva Linux improvements in the Bootup and Shutdown and other modules.
* Fix for a bug that could cause /etc/webmin to be deleted following a failed upgrade on Debian.
* Improved support for FreeBSD 8, bringing it into sync with FreeBSD 9.

**Version 1.630 (14th May 2013)**

* More German translation updates thanks to Raymond Vetter, Polish translation updates from Piotr Kozica, and Norwegian updates thanks to Stein-Aksel Basma.
* Added support for the real SPF record type in the BIND module.
* Created a new Partitions on Local Disks module for FreeBSD, which can handle BSD slices, partitions and disk labels.
* Improved support for interface configuration and startup commands as used on FreeBSD 9 in the DHCP Server module.
* Added support in the Logical Volume Management module for moving an LV to a different device.
* Added support for IPv6, DHCP and new ethernet device names on FreeBSD.
* In the Software Packages module, added support for updating and installing packages from FreeBSD ports.
* Improved support for FreeBSD partitions in the Disk and Network Filesystems module.
* See the [github commit log][5] for more.

**Version 1.620 (2nd February 2013)**

* Norwegian updates, thanks to Stein-Aksel Basma, Catalan updates, thanks to Jaume Badiella, German translation updates, thanks to Raymond Vetter, and Polish translation updates from Piotr Kozica.
* Fixed an XSS attack in miniserv error messages, and added an option to disable SSL compression to defeat the BEAST attack.
* The LDAP attribute userPassword for users and groups is no longer set if not needed.
* Bridges not connected to any interface can be created in the Network Configuration module.
* Webmin scheduled functions can now be viewed and run in the Webmin Configuration module. Also fixed a problem in which a long-running function could prevent Webmin from restarting.
* Init scripts that hang forever when asked for their status will no longer hang the UI in the Bootup and Shutdown module.
* Added a form in the Webmin Configuration module for testing mail server settings.
* Added BTRFS support to the Disk and Network Filesystems module, and removed some obsolete filesystems.
* Improved support for FreeBSD 9 and 10 in the Apache and filesystems modules.
* Support for custom quota files in the Disk Quotas module.
* Handle the case where the root filesystem is on /dev/root (as seen on CentOS 5.9) in the Disk Quotas module.
* Added links from the System Information page to relevant modules, and a display of CPU and drive temperatures.
* Improved detection of in-use ports when changing the Webmin port.
* Added XZ compression format support in the Filesystem Backup module.
* See the [github commit log][6] for more.

**Version 1.610 (16th November 2012)**

* A new module for iSCSI Target configuration, and fixes to the iSCSI client and server modules.
* Even more German translation updates, thanks to Raymond Vetter.
* Catalan updates, thanks to Jaume Badiella.
* Changed all links to DNS zones to use the zone name instead of an index, to prevent incorrect modification during concurrent access to the module.
* Added support for the new ifconfig -a output format, as seen on Fedora 17.

**Version 1.600 (22nd September 2012)**

* Fixed several cross-site scripting security bugs, and added port validation to the referer security check.
* Changed the default theme for new installs to the Gray Framed Theme, which has the same updated CSS, icons and color scheme as Virtualmin.
* Added iSCSI client and server modules, for accessing and sharing disk devices over the network.
* Even more German translation updates, thanks to Raymond Vetter.
* Norwegian updates, thanks to Stein-Aksel Basma.
* Dutch translation updates, thanks to Gandyman.
* Improved bonding and VLAN support in the Network Configuration module, thanks to Caspar Smit.
* Added support for sender dependent transport maps to the Postfix module.
* Updated the Samba module to use new Webmin UI functions, for a more consistent look.
* Added logging of status changes and previous values to the System and Server Status module.
* Routing table support and sorting fixes in the Shorewall module, thanks to Paul Gear.

**Version 1.590 (30th June 2012)**

* Added the Shorewall6 Firewall module, a fork of the existing Shorewall module but for IPv6, contributed by Wouter van Bommel.
* Many more German translation updates, thanks to Raymond Vetter.
* More Dutch updates, thanks to Gandyman.
* Catalan updates, thanks to Jaume Badiella.
* Norwegian updates, thanks to Stein-Aksel Basma.
* Apache virtual hosts owned by Virtualmin can no longer have their address, port, name or document directory changed.
* The source IP and port for BIND zone transfers can now be specific on the Addresses and Topology page.
* Added support for zone signing in the BIND module using the DNSSEC-Tools suite, thanks to a patch from Suresh Krishnaswamy.
* Allowed the MTU to be set at boot time on Debian Linux, and fixed bugs editing VLANs, thanks to a patch to the Network Configuration module from Caspar Smit.
* In the Disk and Network Filesystems module, updated the UI for Linux and most other operating systems to use Webmin's new UI functions.
* Added an option to have the time synced when Webmin starts at system boot.
* An SSL CSR can now be generated in the Webmin Configuration module, and the Webmin cert copied to Usermin.
* Added a Unix user password restriction for the minimum number of days before a password can be changed, and a human-readable description for the valid password regular expression.

**Version 1.580 (21st January 2012)**

* Many more German translation updates, thanks to Raymond Vetter.
* Catalan updates, thanks to Jaume Badiella.
* Norwegian translation updates, thanks to Stein-Aksel Basma.
* Added UTF-8 encodings for languages using the iso-8859-2, like Czech and Polish.
* Support for Fedora 15 and 16 across multiple modules.
* The Bootup and Shutdown module now fully supports the systemd boot service, seen on Fedora 15 and later.
* The MySQL, PostgreSQL, Filesystem Backup and Backup Configuration Files modules now all support the use of Webmin variable substitutions in backup paths (like $HOSTNAME) via a new Module Config option.
* Added fields to the Edit User page in the MySQL module for setting the maximum concurrent logins and operations per hour for users.
* Scheduled MySQL backups can now have their success or failure sent via email, via new options on the Backup Database page.
* When executing SQL or restoring a backup file, the character set can now be selected for the imported data.
* The Webmin Actions Log can now be searched by description.
* If Postfix is installed when the hostname is changed, the mydestination (local hostname) configuration parameter is updated too.

**Version 1.570 (4th October 2011)**

* Many more German translation updates, thanks to Raymond Vetter.
* More French translation updates, thanks to ButterflyOfFire.
* Arabic translation updates from Abdulaziz Alanazi.
* In the DHCP Server module, added a client option for subnets and groups for DNS domains to search.
* Added confirmation before deleting multiple user, host, database, table and column permissions in MySQL.
* Added refresh buttons to the mail queue in the Sendmail, Postfix and Qmail modules.
* In the Custom Commands module, added an option to the file editor to run a command before the file is displayed. Also added new date and left-right menu parameter types.
* Improved support for CentOS 6 in the Dovecot module.
* Cleaned up the SSL UI in the Usermin Configuration module.

**Version 1.560 (5th August 2011)**

* Major German translation updates, thanks to Raymond Vetter, Italian translation updates, thanks to Andrea Oliveri, and Catalan updates, thanks to Jaume Badiella.
* Added support for CentOS 6, and improved detection of Android tablets.
* Added the Text Login module, which allows shell access without requiring Java be installed on the client system.
* Support for dynamically generated default parameters and commands with no output in the Custom Commands module.
* Added support for using parted to manage disks if installed, which also supports the new GPT partition table format which is needed on disks larger than 2T.
* The Network Configuration module can now be used to create and edit bridges, and connect them to ethernet interfaces on Debian, Ubuntu, Redhat, CentOS and Fedora systems.
* Fixed links in the DNS, Users and Groups and other modules to use object names instead of indexes, to improve reliability when multiple users are editing the same data.
* Added support for setting per-IP chained certificates for Webmin and Usermin.

**Version 1.550 (26th April 2011)**

* Fixed an XSS vulnerability in the Users and Groups module that can be triggered if an attacker has the ability to change the real name of a Unix user.
* Added support for the Upstart boot system, seen on Ubuntu 10 and later.
* Added the Test Zone Transfer button to the slave zone page in the BIND module, to check if zone transfers are possible or not.
* Added the Sending Email page to the Webmin Configuration module, which controls how Webmin itself sends messages.
* In the PHP Configuration module, added support for selecting the timezone on the Other Settings page, thanks to Matt Lewandowsky.
* In the DHCP module, added a Module Config option to automatically refresh the lease list every few seconds, and a link to force a manual refresh.
* Many more fixes and [new features][7].

**Version 1.540 (30th March 2011)**

* Added support for Pardus Linux (thanks to Kaan Ozdincer), Debian 6, Ubuntu 10.10 and Amazon Linux.
* The Network Configuration module on Linux and Solaris now supports management of IPv6 addresses on active and boot-time interfaces, and IPv6 routing.
* Major Dutch updates thanks to Gandyman, and a large French translation update thanks to ButterflyOfFire.
* Sped up the loading of language files by pre-caching them in memory when Webmin is started, and not performing sub-string substitutions in most modules.
* Support for the new Dovecot 2.0 configuration file format.
* SHA512 encryption for Unix users is now supported.
* Improved IPv6 support in the BIND module, an option to set the default view for new zones, and automatic population of the also-notify and allow-transfer blocks for master zones that have slaves added.
* Many more fixes and [new features][8].

**Version 1.530 (1st December 2010)**

* Full IPv6 support in Webmin itself. Requests can now be accepted on IPv6 addresses, and all modules that make outgoing connections support IPv6. Also, many modules have been updated to allow servers to be configured to use IPv6, like Sendmail, SSHd and Squid.
* Webmin users and groups can now be stored in a MySQL, PostgreSQL or LDAP database, instead of local files. This includes all permissions, settings and module grants. This allows the user database to be much larger, and to be shared between multiple systems.
* Updated the Catalan translation, thanks to Jaume Badiella.
* Records can now be deleted from multiple zones at once in the BIND DNS Server module.
* Boot options can be re-ordered in the GRUB module. Also, all actions in that module are now logged.
* Fixed support for 3ware RAID arrays in the SMART module.
* The Webmin Actions Log module can now be used to view the output shown in the browser for all actions that display something when performed, like deleting a Unix user.
* Many more fixes and [new features][9].

**Version 1.520 (28th August 2010)**

* Dutch translation updates from Gandyman, Polish from Dariusz Dabowski, and Russian from Marat Shavlukov.
* Moved the time synchronization and background status collection cron jobs into Webmin's own cron service, which uses less RAM.
* Better support for multi-value and quoted options in the DHCP Server module.
* Support for physdev rule conditions in the Linux Firewall module, and better handling of different comment types.
* Online resizing of filesystems in the LVM module, thanks to Caspar Smit. Also better detection of filesystem types from /etc/fstab, and a way to increase the size of an LVM physical volume.
* X509 authentication support for users in the MySQL module.
* The autoreponder script in the Sendmail, Postfix and Qmail modules now uses SpamAssassin to block replies to spam, if installed.
* Easier selection of PCI-compliant cyphers for use by Webmin in the Webmin Configuration module.
* Many more fixes and [new features][10].

**Version 1.510 (5th March 2010)**

* Package updates are now fetched more efficiently from YUM and APT.
* Czech and Brazillian Portuguese updates, thanks to Karel Hudan and Djavan Fagundes respectively.
* The Webmin RPM now preserves the /etc/webmin directory when un-installed and then re-installed.
* Added support for creating EXT4 filesystems in the RAID, LVM and disk partitions modules.
* SATA drives using SCSI emulation on Linux now show up with SATA as the description.
* Collation order and InnoDB support in the MySQL module.
* Buttons to rename a chain and move rules in the Linux Firewall module.
* Disk space monitoring by percentage of free space in the System and Server Status module.
* Friendler inputs for changing the size of an existing LV in the Logical Volume Management module.
* Support for new NSEC3 algorithms for DNSSEC in the BIND module.
* Many more fixes and [new features][11].

**Version 1.500 (7th December 2009)**

* Fixed an XSS security hole that could be used to capture session cookies, found by Ryan Giobbi.
* Added the Software Package Updates module, for installing new packages from YUM or APT.
* Updated the default system information page to show available packages, and added a page to the Webmin Configuration module to collect this information in the background.
* Added logging to the Scheduled Commands module.
* Fixed editing of the fileset exclude list and adding volume labelling support to the Bacula module.
* Improved Postfix TLS support, fixed the config file parser, and added protection against incorrect map entry deletion.
* Added a status monitoring for detecting large directories, and a button for refreshing just selected monitors.
* Added support for the rsyslog IncludeConfig directive in the System Logs module, used by default on Ubuntu 9.
* Many more fixes and [new features][12].

**Version 1.490 (17th September 2009)**

* Catalan, Dutch and Basque translations, thanks to Jaume Badiella, Gandyman and Mireia Lezea respectively.
* Updated bonding support to use the new format in Debian 5.0, thanks to Caspar Smit.
* Removed all Perl warnings from the core Webmin library, thanks to Joe Cooper.
* Many RAID changes thanks to Caspar Smit, including full device support, spare groups, superblock clearing, RAID 6 spares and an option to skip metadata initialization.
* Better handling for Rsyslog tags in the config file.
* Logins and logouts to Webmin can now be included in the actions log.
* Removed code and UI for selecting a Sourceforge mirror, and use their mirror auto-detection instead.
* Support for setting the hardware clock is now detected automatically on Linux.
* Many more fixes and [new features][13].

**Version 1.480 (10th June 2009)**

* Translation updates for Catalan (thanks to Jaume Badiella), Russian, French (by ButterflyOfFire) and Dutch (thanks to Gandyman).
* Major improvements in Webmin's search function, including links to the page where the matching text or help was found.
* The LDAP Server module now supports the new LDIF-format configuration files, as seen on Ubuntu 8.10.
* Support for FreeBSD and OSX in the SMART drive status module.
* On Solaris, the Software Packages module now uses the new CSW command for installing packages, and can show package versions.
* BIND module improvements, including SPF redirect and explanation modifiers, mass record buttons in domain search results, and named.conf parsing fixes.
* DHCP lease grouping by subnet, improvements in lease utilization counts, an option to add new objects to a separate file, and custom option parsing fixes.
* Many more fixes and [new features][14].

**Version 1.470 (18th March 2009)**

* Fixed several bugs in Webmin 1.470, in particular the File Manager module, status monitoring and popup windows.
* When adding a DNS master zone with automatically created slaves, add an also-notify block to the master configuration to update the slaves.

**Version 1.460 (11th March 2009)**

* Converted all modules to use the new WebminCore API, which reduces memory use between modules and is pre-loaded by default to improve response times.
* Major Catalan translation updates from Jaume Badiella, and Dutch from Gandyman. Also added a UK English language option.
* Improved support for FreeBSD 7.1 and Debian Lenny across multiple modules.
* Fixed IPv6 address handling in the Apache module.
* Improved handling of systems where the MYSQL\_PWD environment does not work, causing odd failures to login to MySQL.
* Added a button in the Linux RAID module for changing the number of active devices, thanks to Diego Zuccato.
* Converted several modules to use the new Webmin UI library.
* Added GPG verification of Webmin module updates, when installed.
* View the [detailed change log][15] for many more updates.

**Version 1.450 (25th January 2009)**

* Added full DNSSEC support to the BIND module, including multiple keys per zone and automatic key re-signing.
* Converted the core API files and those for several modules into POD format, and brought function docs up to date.
* Big Russian and Dutch translation updates, thanks to Anton Statutov and Gandyman.
* Converted the UI in the MySQL, SpamAssassin, BIND and other modules to use the new Webmin UI library. Also cleaned up the layout of several modules, to make them faster and easier to use.
* Created a new easy-to-create theme type - overlays, which can change the CSS and icons of other themes, without modifying the layout.
* Added Blowfish password encryption support and batch group export and creation to the Users and Groups module.
* The LDAP Server module can now be used to select which protocols slapd will accept, such as SSL and non-SSL. Also re-factored the connection code so that all three LDAP modules respect all settings in ldap.conf, thanks to Paul Ganci.
* Updated the MySQL module to use the MYSQL\_PWD variable for authentication, instead of a command-line flag.
* View the [detailed change log][16] for many more updates.

**Version 1.441 (26th October 2008)**

* Fixes the left frame in the default theme under IE, and the width of the login form.
* Adds the missing Add User link in the LDAP Users and Groups module.

**Version 1.440 (20th October 2008)**

* Updated many modules to use the new Webmin user interface library, for a more consistent look.
* Added a large Croatian translation update, thanks to Domagoj Bikic, and many Japanese translation updates, thanks to Kazuya Masuda.
* Many BIND module updates, such as a new root zone file, view-level zone restrictions, a page for finding free IP addresses, inputs for concurrent zone transfers and more.
* Fixed bugs in support for DHCP custom options.
* Re-designed the Read User Mail module to match Usermin, and added support for Exim, thanks to Emmanuel Florac.
* Added tabs for user and group lists to the LDAP and regular Users and Groups module, and improved AIX support.
* View the [detailed change log][17].

**Version 1.430 (12th August 2008)**

* Added a new TCP Wrappers module, thanks to Pavel Burda.
* Greek, Catalan and Dutch translation updates, thanks to Vagelis Koutsomitros, Jaume Badiella and Gandyman.
* Many BIND module improvements for mass domain changes, ACL editing, record checking and more.
* IO scheduling classes can be set on Linux for running processes and Webmin cron jobs.
* Better handling of multiple Postfix RBL domains.
* Improved support for custom DHCP options.
* SSL certificate validity checking in the System and Server Status module.
* View the [detailed change log][18].

**Version 1.420 (25th May 2008)**

* Support for the odd Apache config file format under Ubuntu 8.04, and other fixes for that distribution.
* Clashes between hosts with the same MAC address, IP address or hostname are now detected in the DHCPd module.
* Dovecot locking methods, index and control files can now be configured.
* Moved Postfix SMTP client restrictions to a new page, and re-wrote the UI to follow Webmin standards.
* Updated the Postfix BCC Mappings page to support both sender and recipient maps.
* Per-user auto-whitelists can be viewed and cleared in the SpamAssassin module.
* Email notifications can be send when uploads or downloads complete in the Upload and Download module.
* Added a debugging log file, which records all files read and written, commands run and more. This can be enabled in the Webmin Configuration module.
* Many Korean updates, thanks to JoungKyun Kim.
* More Dutch updates, thanks to Gandyman.
* View the [detailed change log][19].

**Version 1.410 (26th March 2008)**

* Big Czech translation updates, thanks to Petr Vanek and the Czech translation team.
* Many Dutch updates, thanks to Gandyman.
* XSS protection in all Webmin popup windows, which allows a bug fix that was preventing them from appearing in IE.
* Per-Webmin-user control over password changes and support for temporary passwords, thanks to GE Medical Systems.
* Fixed several bugs that prevented bandwidth monitoring from working properly on FreeBSD and OSX.
* Various LDAP client, server and users module fixes.
* The MySQL and PostgreSQL modules now have an option to show only DB and table names, which speeds up their display on systems with many of each.
* Request and reply header access control and cache manager password support in the Squid module.
* Email, SMS and SNMP status messages sent by Webmin can now be customized.
* View the [detailed change log][20].

**Version 1.400 (8th February 2008)**

* Links from unknown referers are no longer allowed by default, to block a new class of XSS attacks.
* Many modules have been converted to use the new Webmin UI library, for a more consistent look.
* The Backup Configuration Files module can now include directories, and connect to FTP and SSH servers on different ports.
* Changed the layout of the Scheduled Cron Jobs module, and added a search for if there are more than 100 jobs.
* Added a second layer to the UI of the Partitions on Local Disks module, so that the first page shows only disks.
* Re-designed the layout of the Logical Volume Management module, and fixed removal of physical devices with LVM 2.
* Fixed login problems in the MySQL module, added searching for variables, added tabs to the Execute SQL page, and prevented the display of huge lists of databases and tables.
* Created a dedicated page in the Sendmail module for ports and addresses, and added support for Maildir mail stores.
* Added outgoing BCC mapping support to the Postfix module.
* The BIND module now supports Windows, and can add records that already exist to multiple domains.
* View the [detailed change log][21].

**Version 1.390 (20 December 2007)**

* Added the LDAP Server module, for managing OpenLDAP and browsing it's database.
* Webmin modules and help pages can be searched using a new field on the left frame of the default theme.
* The BSD Firewall (IPFW) module now supports the file format used natively by FreeBSD's /etc/rc.conf file.
* Support for VLANs and channel bonding on Debian, comments on interfaces on Redhat and alias interface bugfixes for FreeBSD, all in the Network Configuration module.
* The PAM module now supports include directives, and the UI has been re-written.
* More map types are supported in the Postfix module.
* Squid proxy reply restrictions can now be managed, from a re-designed access control page.
* Logged Webmin actions can now have a comment attached explaining why they were done.
* All cluster modules now have an option to show hosts in a table.
* Big contributed Italian and Catalan translation updates.
* View the [detailed change log][22].

**Version 1.380 (7 November 2007)**

* Added support for LDAP and MySQL maps to the Postfix module. If the right Perl modules are installed, these can be edited like regular maps. Also added a popup map-chooser window for connecting Postfix to an LDAP or MySQL database.
* Added MySQL and LDAP support to the SpamAssassin module, so that directives in those databases can be viewed and edited. Also added a page for configuring SpamAssassin to use them.
* A new logo in the right-hand frame and browser icon.
* Added directory creation options to the MySQL and PostgreSQL module backup pages.
* The format for most displayed dates can be configured for Webmin and Usermin.
* Bacula backup schedules can now have a level and pool specified.
* When a Webmin user inherits modules from a group, those modules can no longer be removed or have their ACLs changed.
* View the [detailed change log][23].

**Version 1.370 (20 September 2007)**

* Updated the Webmin Users module to allow password quality restrictions to be defined, such as minimum length and checks for dictionary words (thanks to GE Medical Systems).
* Added a maximum password age for Webmin users, and a page for forcing users to enter a new password when theirs expires. Also added limits on the number of old passwords that can be re-used.
* The BIND module can now add a record to multiple DNS domains at once.
* Added a page to the Postfix module for SMTP authentication And encryption options.
* Installed Apache modules are now always automatically detected in the Apache module, removing the need for manual configuration.
* Updated the Bacula module to support packages like Mandrake's that don't have an /etc/bacula/bacula command.
* Dovecot module updates to support new directives in latest version.
* Support for RAID 10 and MDADM monitoring in the Linux RAID module.
* Better support for comments and long zone names in the Shorewall module (thanks to Paul Gear)
* Fixed a Windows-only security hole that allows any Webmin user to run any command (thanks to Keigo Yamazaki)
* View the [detailed change log][24].

**Version 1.360 (2 August 2007)**

* Added the Bacula Backup module, contributed by Oceans Mind Corp.
* Simplified the process of selecting Apache modules on Debian and Ubuntu systems, to make use of the /etc/apache/mods-enabled directory.
* Sped up UID and GID allocation in the LDAP Users and Groups module, by probing the LDAP server.
* Added support for Gentoo 2006 in the Network Configuration module.
* Updated the Webmin and Usermin modules to allow blocking failed logins by username, and to show blocks currently in force.
* View the [detailed change log][25].

**Version 1.350 (1 June 2007)**

* Fixed an XSS security bug in pam\_login.cgi.
* Added plain-text mode and head section preservation to the File Manager HTML editor, and a field to select which user uploaded files are owned as.
* Added Postfix module configuration options for the start, stop and restart commands.
* Use the HTML output mode from the pgsql command in the PostgreSQL module, for more reliable data editing when DBI is not available.
* The Running Processes module now shows real and virtual memory on Solaris.
* Added Redhat Enterprise 5 support, and fixed SuSE 10 and Solaris-specific bugs.
* View the [detailed change log][26].

**Version 1.340 (8 April 2007)**

* Change the default Blue Framed theme to match the style of www.webmin.com, and generally look nicer.
* User interface cleanups in various modules (Apache, Backup Config, Webmin Configuration and others), adding tabs to reduce the size of pages and converting code to use ui-lib.pl.
* The Perl Modules module can now fetch RPM or Deb packaged modules from YUM or APT, where available.
* Added easy fields for sending SMS messages in the System and Server Status module (for US carriers that have email to SMS gateways).
* Replace the old HTMLarea widget for HTML editing in the File Manager and Read User Mail modules with Xinha.
* Linux quotas are now set with the setquota command, which shows up nicely in the actions log.
* Optimizations to speed up getting the hostname and Postfix config settings.
* Improved YUM and Redhat Network support in the Software Packages module.
* View the [detailed change log][27].

**Version 1.330 (27 February 2007)**

* If the underlying OS is upgraded after Webmin is installed, a message is displayed on the main page prompting you to fix it.
* Added a feature in the BIND module for updating an IP address in multiple zones at once.
* The File Manager now automatic detects HTML files and launches the correct editor.
* Improved the LDAP module's support for large databases.
* When there are too many tables or databases to display in the MySQL and PostgreSQL modules, a menu for selecting a specific table is shown instead.
* Added functions to ui-lib.pl for tabs and hidden table sections.
* Added support for comments to the Shorewall module, and improved logging
* The Webmin Actions Log module can now rollback selected files changed by an action, rather than all of them.
* View the [detailed change log][28].

**Version 1.320 (21 January 2007)**

* Added the PHP Configuration module for managing php.ini.
* Changed the default theme for new installs to the Blue Framed theme.
* Improved handling of large file uploads so that they are no longer read into memory by Webmin webserver. Also added a progress bar window for tracking uploads.
* Added checkboxes for deleting multiple objects at once in several modules.
* Changed all rows of links (like Select all / Invert selection / Add something) to put | characters between them, to improve readability.
* Big improvements in Windows support in various modules and the Webmin core.
* Enhanced the System and Server Status module to allow monitoring of all hosts in a Webmin server group.
* View the [detailed change log][29].

**Version 1.310 (28 November 2006)**

* Big improvements in Ubuntu support, including the Bootup and Shutdown module, mounting filesystems specified with the UUID syntax, and various default module config changes.
* Re-designed the Simple Blue theme to use frames.
* Added support for IPv6 addresses in modules where the underlying servers allow them.
* Supported HFS and FATX filesystems under Linux.
* MySQL backups can now be compressed with gzip or bzip2.
* Added file locking and logging to the Postfix module, and improved access control features.
* Added checkboxes and buttons for mass deletion in the Cron and DHCP modules.
* Added access control options for the Info window to the File Manager module, and a feature to allow extraction of ZIP files on the server.
* View the [detailed change log][30].

**Version 1.300 (15 September 2006)**

* Fixed security holes that allow the source of Webmin programs to be viewed, and allow cross-site-scripting attacks.
* XML-RPC clients can now call Webmin API functions.
* On systems with no root password, users with sudo access can login to Webmin as root.
* Improved support for latest Debian and Fedora releases, including the new IPtables config system in Debian 3.1.
* The file manager can now extract tar.bz2 files, store a history of entered paths, and show the total size of a directory.
* The Filesystem Backup module can backup and restore TAR and dump files over FTP.
* MySQL server variables and connections can be viewed and changes.
* Table data can be sorted by clicking on headers in the MySQL and PostgreSQL modules.
* Improved support for PostgreSQL 8, including editing tables with no OID field.
* Sendmail and Postfix aliases and maps can have a comment associated with each entry.
* Squid 2.6 is now supported.
* View the [detailed change log][31].

**Version 1.290 (29 June 2006)**

* Fixed a security hole that would allow a remote attacker to view any file on the system.
* Added the LDAP Client module, for setting up a Linux system to get users and groups from an LDAP server.
* Added support for sending email when a group is over quota to the Disk Quotas module.
* Several other small fixes for bugs found since 1.280.
* View the [detailed change log][32].

**Version 1.280 (16 June 2006)**

* Added the Simple Blue theme, a less graphics-heavy design which may eventually become the default. This theme takes advantage of changes in many modules to use highlighting on table rows.
* Updated the Apache module to support version 2.2.0.
* Updated the various operating-specific NFS server modules to support mass deletion of exports, and to internationalize those that were using hard-coded text strings.
* Updated various modules to allow deletion of multiple objects (such as table fields, Samba shares, PostgreSQL grants, Squid ACLs and so on) at once.
* Added configuration options to the Read User Mail module for the date format, pager arrow locations, timezone and separate message window mode.
* Updated the MySQL module to support views in MySQL version 5.
* Enhanced the System and Server Status module to allow the selection of multiple hosts for each monitor, added a monitor type for testing an SQL server, and updated the Network Traffic monitor to support FreeBSD.
* Fixed a security hole that allows remote viewing of any file on the system when Webmin is run on a Windows server.
* View the [detailed change log][33].

**Version 1.270 (4 Apr 2006)**

* Added the Syslog-NG module, for configuring this syslog replacement that is now standard on SuSE Linux.
* Added the MIME Type Programs module, for editing the /etc/mailcap file.
* In the BIND module, added support for large zone files (thanks to Walgreens), mass automatic reverse record deletion, and several cluster slave improvemnets.
* Added support for FreeBSD rc.d scripts to the Bootup and Shutdown module.
* Implemented support for managing indexes in the MySQL module.
* Implemented support for managing indexes, views and sequences in the PostgreSQL module.
* Added the ability to update multiple user and group quotas at once.
* Updated the System Logs module to allow viewing of logs from other modules, such as the MySQL error log and Squid cache log.
* View the [detailed change log][34].

**Version 1.260 (30 Jan 2006)**

* Multiple Webmin users and groups can be deleted at once.
* The Apache module now has a Module Config option to suport Debian's /etc/apache/sites-enabled directory.
* Added manual config file editing to the BIND, Dovecot, Postfix, Samba and SSH Server modules.
* All the mail server modules have Module Config options to show aliases and other tables in one column instead of two.
* Multiple Perl modules can be deleted or upgraded at once.
* Multiple Cron jobs can be enabled or disabled at once.
* The File Manager module can show small previews of GIF, JPEG, PNG, TIFF, PDF and Postscript images, scaled down on the server side.
* The Bootup and Shutdown module uses the chkconfig command to enabled and disable actions, where installed.
* The MySQL module can edit server settings in the my.cnf module.
* View the [detailed change log][35].

**Version 1.250 (30 Nov 2005)**

* Fixed a possible remotely exploitable security hole caused by a bug Webmin's use of the Perl syslog function.
* Multiple DNS records and Cron jobs can now be deleted at once in their respective modules.
* Apache define variables are automatically detected on Redhat, SuSE and Mandrake Linux.
* The Dovecot module now supports the config format used by version 1.0.
* The File Manager module can search for files by their content, and preview images.
* Added options to the Sendmail module for controlling the order in which the mail queue is processes and flushed.
* The Webmin Servers Index module can automatically scan for new servers on the local network on a regular schedule. Thanks to OC for this one.
* View the [detailed change log][36].

**Version 1.240 (18 Oct 2005)**

* Added a module for configuring the popular Dovecot IMAP/POP3 server.
* Enhanced the Custom Commands module to support running commands on multiple Webmin servers at once.
* Added a CSV import feature to the PostgreSQL module, and enhanced the CSV export feature to allow selection of columns to include.
* The Sendmail, Postfix and Qmail modules now all prompt for confirmation before deleting messages from the mail queue.
* The idle automatic logout time can be configured on a per-user basis in the Webmin Users and Usermin Configuration modules.
* View the [detailed change log][37].

**Version 1.230 (20 Sep 2005)**

* Fixed a security hole that allows a remote attack if the 'Support full PAM conversations?' option is enabled in the Webmin Configuration module. Thanks to JPCERT for finding this bug.
* Worked around a problem that could cause the loss of the /etc/webmin directory when upgrading from a Webmin RPM from another vendor.
* Added basic support for installing on Windows systems, using the new setup.pl script. This should be considered **alpha-quality** code at the moment.
* The Backup Configuration Files module can now backup the Webmin config file associated with a module, and a list of other arbitary files.
* The Cron module allows a start and end date to be specified for jobs.
* Added support for SQL queries and updates to the Custom Commands module.
* The Protected Web Directories module now support digest format password files, which are more secure.
* The MySQL and PostgreSQL modules support deleting multiple databases, tables, users, groups and permissions at once. They also handle large numbers of tables and databases better by displaying a search form instead of a huge list or table of icons.
* Added cross-monitor dependencies and support for deleting multiple monitors at once to the System and Server Status module.
* View the [detailed change log][38].

**Version 1.220 (15 Jul 2005)**

* Increased the speed of Webmin configuration reloads done by the Webmin Users and Webmin Configuration module. This also prevents any down-time while the config is being re-read.
* Improved the timeout detection in HTTP requests, to reduce the ability of incorrect or malicious clients to tie up the Webmin webserver process.
* Enhanced the Unix User Authentication feature to allow different users and group members to be treated as different Webmin users.
* Added a page to automatically setup RNDC in the BIND module, and improved the page for configuring allowed RNDC connections.
* Added access control to the LDAP module, and the ability to delete multiple users and groups at once.
* Added the ability to lock or un-lock multiple users and groups at once in the LDAP and system Users and Groups modules.
* Added buttons in the MySQL and PostgreSQL modules to drop multiple tables and databases at once.
* The Disk Quotas module now shows quotas with selectable units, instead of always using kilobytes.
* View the [detailed change log][39].

**Version 1.210 (2 Jun 2005)**

* Improved the way the OS is detected at install time, so that new versions will be automatically supported.
* Added the Solaris Zones module, for creating and managing virtual systems on Solaris 10 hosts.
* Added the RBAC and Projects module, for advanced user access control configuration on Solaris systems. Webmin's own access control system how also has an option to load restrictions from RBAC, so that allowed modules and ACLs can be distributed across multiple servers.
* Several major changes in the BIND module, including support for multiple remote slave servers, batch zone creation, easier deletion of multiple zones, and caching to speed up systems with a large number of domains.
* The IPfilter and BSD Firewall modules now support distribution of firewall rules to multiple hosts, using Webmin clustering. The IPfilter module can now also manage NAT rules.
* Different SSL certificates for virtual IP interfaces can be specified in the Webmin and Usermin modules, for sites doing SSL virtual hosting.
* The Fetchmail module now supports checking of all users' mail by a single scheduled job.
* View the [detailed change log][40].

**Version 1.200 (12 Apr 2005)**

* Fixed a nasty bug that could cause configuration file permissions and ownership to be changed when they are modified.
* Updated the Bandwidth Monitoring module to support Shorewall, IPFW and IPfilter firewalls.
* The various Cluster modules can now use groups to select which hosts to refresh or synchronize on.
* An option has been added in the Webmin Configuration module to enable full PAM conversations when logging in. This is necessary for systems on which PAM asks for more than just a username and password.
* View the [detailed change log][41].

**Version 1.190 (24 Mar 2005)**

* Added the new SMF (Service Management Framework) module for Solaris 10, developed by Alan Maguire at Sun Microsystems.
* Added the IPFilter Firewall module for Solaris and other operating systems that use ipf.
* Added the idmapd and Kerberos5 Configuration modules for use with NFS version 4, developed by Frederic Jolly.
* All modules now use a new API for writing to configuration files, which ensures that the file does not get written to or truncated if the system is out of disk space.
* Multiple firewall rules can now be deleted at once in the IPtables and IPFW modules.
* Samba groups can now be edited in the LDAP module, and IMAP users can have multiple object classes.
* The Read User Mail module supports VPopMail and Qmail+LDAP as mail systems.
* Improved support for tables in schemas in the PostgreSQL module.
* Added a button to the Webmin Actions Log module for rolling back configuration files to before an action was taken.
* View the [detailed change log][42].

**Version 1.180 (24 Jan 2005)**

* Password timeouts are now enabled by default, to prevent brute-force password guessing attacks.
* Added the SMART Drive Status module for detecting hard disk problems.
* Added support for TARing multiple directories and chaining backups in the Filesystem Backup module.
* Numerous improvements in the LDAP Users and Groups module, including pre- and post- change scripts, a batch support, separate UID/GID ranges from the Users and Groups module and more configurable defaults.
* Improved Solaris 10 support, such as in the Printer Administration and Software Packages modules.
* Added support for sending problem reports using SNMP traps to the System and Server Status module.
* Support for tracing process system calls in real time on Linux and Solaris in the Running Processes module.
* View the [detailed change log][43].

**Version 1.170 (13 Nov 2004)**

* Added the new Bandwidth Monitoring module, for generating simple reports of network traffic by port, time and host on Linux systems.
* Added the Cluster Copy module, for coping files to multiple servers either on schedule or manually.
* Added the Backup Configuration Files module, for backing up and restoring config files known to Webmin.
* Several improvements to the Linux firewall module, including pre- and post commands, cluster support and the ability to reset the firewall configuration.
* Support for selecting specific MySQL and PostgreSQL tables to back up, and improved searching in the MySQL module.
* Automatic email notification for users approaching their disk quotas.
* The timezone can now be set in the System Time module on Linux, Solaris and FreeBSD.
* Added support for Solaris 10 (thanks to Sun), SuSE 9.2, Mandrake 10.1, FreeBSD 5.3 and several Darwin versions.
* View the [detailed change log][44].

**Version 1.160 (5 Sep 2004)**

* Added the new Sarg Squid access reporting module. Thanks to Omar Armas for sponsoring its development.
* Updated all core modules to no longer output &lt;hr&gt; lines at the top and bottom of every page. These are now generated by the selected theme, and not used by the default MSC theme.
* Added support for NFSv4 to the Disk and Network Filesystems module.
* In the MySQL and PostgreSQL modules, all databases can now be backed up at once, either manually or on a configured schedule.
* Added the ability to delete multiple users at once to the Users and Groups module.
* Added support for MD5 encryption for Webmin passwords, to avoid the 8-character effective password length limit.
* The BIND module can now create and edit delegation-only zones.
* Fixed a security problem that can occur at installation time only, if the /tmp/.webmin directory has already been created by a malicious user.
* When PAM is used for Unix authentication, expired passwords are now detected and the user is prompted to select a new password (if this feature is enabled on the Webmin Configuration module).
* View the [detailed change log][45].

**Version 1.150 (3 Jun 2004)**

* Added the BSD Firewall module, for configuring IPFW on FreeBSD and OSX systems. Thanks to Mï¿½re og Romsdal fylke and Olav Berge for sponsoring this module.
* Added the Frox FTP Proxy module, for setting up a transparent FTP caching proxy. Thanks to Joe Cooper for sponsoring this one.
* Added support for doing multi-tape backups to the Filesystem Backup module, including automatic notification via email when a tape needs to be changed. Also adding support for using tar to backup when no suitable dump command is available. Thanks to Martin Mewes for sponsoring these features.
* Modified the Linux RAID module to work with the MDADM commands as well as the standard inux RAID tools. The user interface remains the same, but the underlying operations are performed differently.
* Removed mail reading support from the Sendmail, Postfix and Qmail modules, as these features have now been consolidated into the Read User Mail module.
* View the [detailed change log][46].

**Version 1.140 (5 Apr 2004)**

* Added the Read User Mail module, which separates the mail reading functionality from the Sendmail, Qmail and Postfix mail server modules, and provides additional functionality.
* Added the Cluster Change Passwords module, for updating Unix passwords on multiple systems at once.
* Improved the BIND module to allow editing of user-defined record types.
* Added an option to the Perl Modules module to have dependencies automatically downloaded and installed from CPAN.
* Added suport for SMB filesystems on FreeBSD and CIFS on Linux to the Disk and Network Filesystems module.
* The File Manager module can now download an entire directory as a ZIP, or tar.gz archive, and extract multiple files from an uploaded archive.
* View the [detailed change log][47].

**Version 1.130 (26 Jan 2004)**

* Added the Log File Rotation module, for configuring logrotate.<br />
* Added ability to compress MySQL and PostgreSQL backups.<br />
* Included the begginings of a new ui-lib.pl library for generating common Webmin UI elements.<br />
* The Disk Quotas module can now display in kilobytes instead of blocks, on systems when the block size is known.<br />
* Better MD5 encryption handling in the Users and Groups module, including support for FreeBSD.<br />
* The Users and Groups module now works out UIDs and GIDs at creation time, rather than when the new user or group for is displayed.<br />

**Version 1.121 (9 Nov 2003)**

* Added the SpamAssassin Mail Filter module.<br />
* Added the Protected Web Directories module, for creating .htaccess and htpasswd files.<br />
* Included support in the MySQL and PostgreSQL modules for scheduled backups.<br />
* The Cluster Webmin Servers module can now be used to synchronize Webmin users and groups across multiple servers.<br />
* The same module can also upgrade Webmin on multiple servers, if installed from an RPM or tar.gz file.<br />
* Added the ability to listen on multiple IP addresses and ports.<br />
* Added buttons in the Bootup and Shutdown module for enabling or disabling multiple actions at boot time.<br />

**Version 1.110 (12 Sep 2003)**

* Added the Change Language and Theme module that makes it easier for the current user to switch his Webmin theme and language.<br />
* Added the Cluster Cron Jobs and Cluster Shell Commands module for running commands on multiple servers concurrently from a single interface.<br />
* Ported Webmin to Trustix 2.0, and improved SuSE 8.2 support.<br />
* Added support for new features in Squid version 3.<br />
* Fixed a bug that caused form submission on IE to fail.<br />
* Added a feature to the Webmin Users module for automatically hiding modules not appropriate to your system.<br />
* Updated the Samba module to use the pdbedit command for editing users if Samba 3 is installed, and the smbgroupedit or net commands for editing groups.<br />
* Added an option to force password expiry in the Users and Groups and Change Password modules.<br />
* Added support for special Vixie Cron time periods like @daily and @reboot to the Scheduled Cron Jobs module.<br />

**Version 1.100 (4 Jul 2003)**

* Added the new LDAP Users and Groups module for managing Unix users in an LDAP database. Thanks for [Sanitaetsbetrieb Brixen][48] and [Azienda Sanitaria di Bressanone][49] for sponsoring the development of this module.<br />
* Added the new IPsec VPN Configuration module for setting up FreeSWAN. Thanks to Joe Cooper for this one.<br />
* Ported the Network Configuration and Disk Quotas modules to MacOSX X.<br />
* Improved the File Manager and SSH/Telnet modules to be usable from browsers on OS X.<br />
* Added group sychronization to the Disk Quotas module, so that quotas can be defined for new groups.<br />
* Added an option to the MySQL module that allows large BLOBs to be uploaded and download instead of being edited directly.<br />
* Improved the setup.sh script to take a directory parameter, to which all Webmin files will be copied at install time, such as /usr/local/webmin. This allows the original webmin-1.100 directory to be deleted after setup.sh is complete.<br />

**Version 1.090 (11 May 2003)**

* Added the new PPP Dialup Client module for dialing up to an ISP with WvDial.<br />
* Added the new PPTP VPN Client and PPTP VPN Server modules for connecting to a VPN server and for setting up a Linux system as a VPN server, respectively. Thanks to Joe Cooper for sponsoring the development of these three modules.<br />
* Updated the Postfix module to support Postfix version 2.<br />
* Updated the Samba module to support editing of Samba 3 groups, and added group synchronization support to the Users and Groups module.<br />
* Improved the Sendmail, Qmail and Postfix modules to support moving email between user mailboxes, and to prompt for confirmation before deleting mail.<br />
* Added Bulgarian language support for some modules, and updated the Catalan language translation.<br />

**Version 1.080 (5 Apr 2003)**

* Added the new ADSL Client module for configuring RP-PPPoE. Thanks to Joe Cooper for sponsoring its development.<br />
* Added the new Upload and Download module for uploading multiple files to a directory, or downloading multiple URLs immediately or in the background.<br />
* Included improved Chinese translation updates, contributed by Stephanie Li of ThizLinux.<br />
* Added support for Redhat 9, SuSE 8.2, FreeBSD 4.8 and Slackware 9.0.<br />
* Improved the Network Configuration module to support Redhat-style per-interface gateway specifications, and to allow the applying of the current configuration.<br />
* Added support for external ACL types in the Squid module.<br />
* Added an option on the Webmin Modules page for easily selecting and installing a standard module from www.webmin.com. This is most useful if you have installed the new minimal version of Webmin, which comes with only a few modules.<br />
* All modules that can download URLs (such as Software Packages and Perl Modules) now support https:// URLs.<br />

**Version 1.070 (20 Feb 2003)**

* **Fixed a serious security problem that allows unauthenticated remote access to Webmin**.<br />
* Added find and replace and goto line support to the File Manager module's editor.<br />
* Init scripts created by Webmin on Linux now start in runlevels 2, 3 and 5, instead of just the current runlevel.<br />
* Fixed a bug that caused problems when logging in on OSX, and stopped Java applets from working under IE.<br />
* Added an ACL option in the Sendmail module to control which domains can be seen in the mail queue.<br />
* Added a mode in the Webmin Servers Index to prompt for a logging when connecting to a server.<br />

**Version 1.060 (5 Feb 2003)**

* Added a new module for configuring Shorewall (the Shoreline Firewall).<br />
* Updated the PostgreSQL module to support configuration file format changes in version 7.3.<br />
* Updated the MySQL module to new permissions in version 4.<br />
* Updated the Postfix module to allow viewing and deletion of messages in the mail queue.<br />
* Added backup and restore functions to the PostgreSQL module, for versions 7.2 and above.<br />
* Added a configuration option to the Linux Firewall for editing rules directly, instead of using a save file.<br />
* Numerous other small bug fixes and improvements.<br />

**Version 1.050 (16 Dec 2002)**

* Fixed a bug that could cause a Javascript error on every page!.<br />
* A couple of other minor bugfixes.<br />

**Version 1.040 (13 Dec 2002)**

* Added width and height tags to all images in the MSC theme, so that it appears better in Mozilla and Netscape.<br />
* Updated the CD Burner module to support copying a CD with only a single drive.<br />
* Added support for specifying an existing Webalizer config file for use when processing a logfile.<br />
* Added module access control options for the Usermin module.<br />
* Added SRV record type support to the BIND module.<br />
* Fixed the GRUB module to correctly identify BIOS drive numbers from Linux device files.<br />
* The Webmin RPM is now PGP signed, and a signature is available for the tar.gz version. See the [download page][50] for details.<br />
* Many more small bug fixes and improvements.<br />

**Version 1.030 (2 Nov 2002)**

* Fixed several bugs related to SSL key generation, such as a short expiry time and the possibility of two keys with the same attributes being generated on different systems.<br />
* Added the new Webalizer Logfile Analysis module for generating HTTP, FTP and proxy reports.<br />
* Added support for new Squid 2.5 directives, and Squid delay pools.<br />
* The File Manager now supports sorting of the right-hand file list by clicking on column headings.<br />
* Several other minor bugfixes and features.<br />

**Version 1.020 (8 Oct 2002)**

* Webmin now generates an SSL key at install time, instead of using a built-in key. Anyone using it in SSL mode **must** generate their own key, as the built-in one is insecure because everyone has access to it! This can be done within Webmin on the SSL Encryption page of the Webmin Configuration module.<br />
* The Webmin RPM uses SSL mode by default if you have openssl and Net::SSLeay installed.<br />
* Fixed bugs that could cause the miniserv.pl process to use up all available CPU time.<br />
* Added the OpenSLP Server module, which was previously separate.<br />
* Ported Webmin to Redhat 8.0 and SuSE 8.1.<br />

**Version 1.000 (12 Sep 2002)**

* Added the Linux Firewall module for configuring iptables.<br />
* Renamed the old PPP Usernames and Passwords module to PPP Dialin Server and added support for configuring mgetty and setting PPP options.<br />
* Added the Voicemail Server module for configuring vgetty.<br />
* Improved Irix support for NFS, Disks and Filesystems, Quotas and File Manager.<br />
* Added ports to Redhat 7.4 and UnitedLinux 1.0.<br />
* Added support for JFS filesystems.<br />
* Lots of other minor bugfixes and features.<br />

**Version 0.990 (1 Jul 2002)**

* Added the Cluster Webmin Servers module for managing modules and users across multiple servers.<br />
* Added the Procmail Mail Filter module for editing the global procmail config file.<br />
* Added support for Gentoo Linux.<br />
* Anonymous access can now be granted to certain modules.<br />
* Better support for driver-specific options when using CUPS for printing, and sped up the listing of printer drivers.<br />
* The Configuration Engine module can now use the same configuration across a Webmin cluster.<br />

**Version 0.980 (4 Jun 2002)**

* Added the Configuration Engine module for managing CFengine.<br />
* Added the CVS Server module.<br />
* Labelled XFS filesystems are now supported in all relevant modules.<br />
* Updated the list of printers supported by each Ghostscript driver to include many new models.<br />
* Copied links that appear at the bottom of tables (like Add user) to the top as well.<br />
* Added OSX support for several modules, including Users and Groups.<br />
* Changed the way installed Perl modules are detected.<br />

**Version 0.970 (7 May 2002)**

* Fixed a serious security hole that allows a remote attacker to login to Webmin as any user!.<br />
* Added new Security Sentries module for configuring portsentry, hostsentry and logcheck.<br />
* Added support for editing EXT2/3 file attributes to the File Manager.<br />
* The Cluster Software Packages module can now transfer large packages much faster to remote servers also running Webmin 0.970.<br />
* The Network Configuration module now supports SuSE 8.0.<br />

**Version 0.960 (15 Apr 2002)**

* Added the new Logical Volume Management module for configuring LVM on Linux.<br />
* Updated the Apache Webserver module to support Apache 2.0.<br />
* Improved the speed of foreign calls between modules by removing unnecessary directory changes on each function call.<br />
* Sped up the Partitions on Local Disks module.<br />
* Added the ability to install and remove Usermin modules and themes, and control which users are allowed to login to Usermin.<br />
* Added blanking support to the CD Burner module.<br />
* Many other small feature enhancements.<br />

**Version 0.950 (27 Mar 2002)**

* Actually fixed the bug effecting the Disk Quotas, Partitions on Local Disks and other modules that was supposed to be fixed on 0.94.<br />
* Fixed a bug that caused errors in IE when editing table data in the MySQL module.<br />
* Added the new Filesystem Backup module for controlling the dump and restore family of commands.<br />
* Added audio CD burning support to the CD Burner module.<br />

**Version 0.94 (22 Mar 2002)**

* Fixed up several bugs in the Disk Quotas, Partitions on Local Disks and other modules.<br />
* Added a feature to the Sendmail Configuration module for editing the M4 file from when sendmail.cf is build, so that new features can be enabled.<br />
* Added support for XFS file attributes to the File Manager module.<br />
* Added AIX support to the Software Packages module.<br />

**Version 0.93 (6 Mar 2002)**

* Added new CD Burning module.<br />
* Added new Usermin Configuration module.<br />
* Added new SSL Tunnels (stunnel) module.<br />
* Fixed a security problem related to viewing untrusted HTML in webmin.<br />
* Fixed another security problem relating to permissions on /var/webmin when installing from an RPM.<br />
* Added POSIX ACL support to the file manager for UFS on Solaris and XFS on Linux filesystems.<br />
* As usual, lots of other bugfixes and small feature enhancements.<br />

**Version 0.92 (21 Jan 2002)**

* Added new default theme, contributed by MSC.Linux.<br />
* Added module for the MON service monitor.<br />
* Added module for Jabber instant messaging server.<br />
* Support for XFS filesystem creation and mounting.<br />
* Per-user theme support.<br />
* Other bugfixes and features, including several security fixes.<br />

**Version 0.91 (29 Nov 2001)**

* Added QMail Server module.<br />
* Added Cluster Users and Groups module.<br />
* Fixed authentication problems effecting some Redhat versions (hopefully for good this time).<br />
* Various other minor bugfixes.<br />

**Version 0.90 (1 Nov 2001)**

* Fixed authentication problem that prevented logins on FreeBSD and OpenBSD.<br />
* Added Heartbeat module for managing cluster failover.<br />
* Added Cluster Software Packages module.<br />
* Fixed bug in the Sendmail module that caused an entire mailbox to be emptied if the delete button for a message was clicked twice.

**Version 0.89 (27 Oct 2001)**

* Added SSH server module.<br />
* Supported Redhat 7.2 and SuSE 7.3.<br />
* Added support for new BIND 9 view directives.<br />
* Optional fast RPC support.<br />
* Fixed security problem in custom commands that may allow local users to execute arbitary commands as the user a custom command runs as.<br />
* Other small features and bugfixes.<br />

**Version 0.88 (11 Sep 2001)**

* Added Scheduled Commands module for create at jobs.<br />
* Added ProFTPD module.<br />
* Added support for Slackare 8.0.<br />
* Added a feature in the Webmin Configuration module for the automatic update of Webmin modules.<br />
* Numerous other bugfixes and minor feature additions.<br />

**Version 0.87 (26 Jun 2001)**

* Added MSC Linux support.<br />
* Added working SuSE 7.2 support.<br />
* A few other minor fixes and upates.<br />

**Version 0.86 (6 Jun 2001)**

* Added Fetchmail Mail Retrieval module.<br />
* Added Change Passwords module.<br />
* Fixed bug in miniserv.pl that leaked the Webmin password to servers started by Webmin like Apache.<br />
* Added Japanese and Korean language support, contributed by Caldera.<br />
* Hopefully fixed an upload bug people were having with IE.<br />
* Added better Redhat 7.1 printer configuration support.<br />
* Heaps of other bugfixes and additional features.<br />

**Version 0.85 (27 Mar 2001)**

* Added NIS Client and Server module.<br />
* Added Shell Commands module.<br />
* Ported Webmin to SuSE 7.1, Redhat 7.1 and MacOS X 1.3 (Darwin).<br />
* Added support for installing software packages from APT and the Redhat Network, if available.<br />
* Added group support to Webmin Users module.<br />
* Added more languages and translations.<br />
* Many other assorted minor feature additions and bugfixes.<br />

**Version 0.84 (23 Jan 2001)**

* Added the PAM Authentication module.<br />
* Fixed an insecure /tmp file creation bug.<br />
* Added group support to the ACL module.<br />
* Updated the System Documentation module to support searching of HOWTOs, package documentation, KDE docs and kernel docs.<br />
* Included contributed DHCPd module changes.<br />
* Numerous other minor bugfixes and features in many modules.<br />

**Version 0.83 (23 Nov 2000)**

* Added System and Server Status module.<br />
* Added Perl Modules module.<br />
* Added support in the DHCPD module for option-nnn directives, DDNS, and hosts inside subnets.<br />
* Numerous bugfixes, particularly in the BIND DNS Server module.<br />

**Version 0.82 (16 Oct 2000)**

* Added support for new features in Redhat 7, such as LABEL= mounts in fstab and xinetd.<br />
* Added a module for the PostgreSQL database server.<br />
* Added a module for Xinetd.<br />
* Added support for authenticating Webmin users via PAM.<br />
* Fixed a security hole exploitable by NULL bytes in URLs.<br />
* Fixed up several minor bugs.<br />

**Version 0.81 (11 Sep 2000)**

* Added support for logging all actions by Webmin users and the files effected by each action.<br />
* Added file locking.<br />
* Added better Solaris 8 and SuSE 7 support.<br />
* Added user management for Squid version 2.<br />
* File Manager module can now setup NFS and Samba file sharing.<br />
* Added optional cookie-based authentication that supports inactivity timeout and proper logout.<br />
* Heaps of minor bug fixes and additional features.<br />

**Version 0.80 (17 Jun 2000)**

* Added contributed Postfix module.<br />
* Fixed problems on perl 5.6.<br />
* Added simplified and traditional chinese languages.<br />
* Added per-user IP access control.<br />
* Ability to edit sendmail tables manually.<br />
* Improved automatic group creation for new users.<br />
* Disk Partitions now works on Solaris x86.<br />
* File manager can rename when pasting, and force download of files.<br />
* Added ability to directly edit data in MySQL tables.<br />
* Numerous bug fixes and minor features.<br />

**Version 0.79 (5 Apr 2000)**

* CGIs are now executed in-process by the miniserv web server.<br />
* Added support for a few Sendmail 8.10 features, and an autoreply alias feature.<br />
* Better LPRNG support.<br />
* Chroot BIND 8 support.<br />
* Added mail searching and Bcc and Priority header support to mail reader.<br />
* Added support for FreeBSD 4.0 and Redhat 6.2, and fixed keyboard problems with Corel Linux.<br />
* Mount and fdisk modules now support Mylex RAID cards.<br />
* Bootup and Shutdown module now displays action descriptions.<br />
* BIND 8 zones can be created from a template and IP address.<br />
* Large MySQL tables can be browsed a page at a time.<br />
* Users and Groups module supports renaming of users.<br />
* Many more minor changes and bugfixes.<br />

**Version 0.78 (27 Feb 2000)**

* Added System Logs module for configuring syslog.<br />
* Added MySQL module for configuring the MySQL database server.<br />
* Added Manual Pages module for viewing man pages.<br />
* Added Linux RAID module.<br />
* Included contributed SysV Init module.<br />
* Added support for syncing apache auth file with Unix users.<br />
* Fixed problems with adding many users at once.<br />
* Many other minor bugfixes and changes.<br />

**Version 0.77 (31 Jan 2000)**

* Added FTP Server module for configuring WU-FTPd.<br />
* Added Webmin Help module for searching help pages.<br />
* Changed the main page layout to display modules in categories.<br />
* Added contributed French language support.<br />
* Fixed serious bugs in the BIND 4 module.<br />
* Update Apache module to support 1.3.11 and Squid module to support 2.3.<br />
* Numerous other minor bugfixes and changes.<br />

**Version 0.76 (5 Jan 2000)**

* Added contributed Spanish and German language support.<br />
* Fixed display bugs in the Sendmail and BIND 4 modules.<br />
* Added Uniprint driver support to the Printer Administration module.<br />
* Changed the Sendmail module mail reader to use indexing for large mail files.<br />
* Added per-user language selection and support for translating module names, config options and help.<br />
* Several other minor changes.<br />

**Version 0.75 (14 Dec 1999)**

* Updated Printer Administration module to generate 'native' drivers for Redhat and Caldera.<br />
* Re-designed BIND 8 module interface and add support for configuring global options.<br />
* Re-wrote Partitions on Local Disks module to display disk models, and updated Filesystems module to allow the selection of a partition from a list.<br />
* Added support for FreeBSD, Slackware and Debian packages to the Software module.<br />
* Internationalised several modules, and included a Russian translation of some modules contributed by Eugene Borodin.<br />
* Added support to Sendmail module for reading mail in mailboxes and the mail queue.<br />
* Added ports to FreeBSD 3.3 and Slackware 7.<br />
* Several other minor bug fixes and additional features.<br />

**Version 0.74 (10 Oct 1999)**

* Added support for Caldera OpenLinux 2.3, SCO UnixWare and OpenServer, and MacOS X.<br />
* Fixed Samba 2.0.5 bug along with numerous others.<br />
* Added several small new features and ACL options.<br />
* Added a 'Switch User' link to the main page.<br />

**Version 0.73 (13 Jul 1999)**

* Added the Linux Boot Loader module.<br />
* Added the Telnet Login module.<br />
* Fixed problem with the fdisk module on Redhat 6 and SuSE 6.<br />
* Added support for MD5-encrypted passwords in /etc/passwd on Linux.<br />
* Added support for /etc/gshadow file on Linux.<br />
* Multiple clones of the same module can now exist, with different configurations.<br />
* Support for IfModule and IfDefine directives in Apache.<br />
* Added interface to SWAT in samba module.<br />
* Fixed formatting bug in crontab module, problems with squid cachemgr.cgi, incorrect units on request\_size parameter in squid and many more.<br />

**Version 0.72 (28 May 1999)**

* Added the Custom Commands module.<br />
* Added support for features in Redhat Linux 6.0, such as RPM 3.0 and the new smbmount command.<br />
* Added Squid 2.2 support.<br />
* Added Samba 2 user file format support.<br />
* Added mod\_ssl configuration support to Apache module.<br />
* Changed setup.sh to ask for the exact OS version, and added a feature to change the version later.<br />
* Changed the way UIDs for new users are chosen.<br />
* Changed the way module-specific ACLs are programmed, and added several new restrictions.<br />
* Fixed lots of minor bugs.<br />

**Version 0.71 (12 Apr 1999)**

* Added feature-specific access control options for Apache, BIND, Crontab, FDisk, File manager, Bootup/shutdown, Majordomo, Processes, Quota, Sendmail and Users/Groups modules. For more details, see [http://www.webmin.com/webmin/acl.html][51].<br />
* Added forward zone support for BIND 8.<br />
* Added subscribe/unsubscribe options to majordomo.<br />
* Fixed bug identifying DHCP version.<br />
* Fixed timezone bug under Linux.<br />

**Version 0.70 (5 Mar 1999)**

* Added Majordomo list manager module.<br />
* Added ISC DHCP server module.<br />
* Added network configuration module for Solaris and Redhat.<br />
* Added option in setup.sh to have Webmin start at boot time.<br />
* Software module now supports HPUX.<br />
* Improved file manager error handling.<br />
* Added FreeBSD 3.0 support.<br />
* Added limited support for IRIX 6.2 and OSF/1 4.0.<br />
* Major ACL checking improvements for Webmin users.<br />
* Added new functions to web-lib.pl for cross-module function calls, and updated some core modules to use them. See the [modules documentation][52] for more details.<br />
* Fixed problems with hostname() function, SCSI disks under Linux, quotas for users with long names, Apache 1.3.4 and other bugs.<br />

**Version 0.65 (7 Jan 1999)**

* Added Solaris 7 support.<br />
* Better support for Redhat 5.2.<br />
* Squid NOVM and 2.1 support.<br />
* FreeBSD group quotas support.<br />
* Apache module bugfixes and support for dynamic modules.<br />
* BIND module bugfixes.<br />

**Version 0.64 (14 Oct 1998)**

* Fixed BIND 8 module bug that prevented any zones from being displayed!<br />
* Slackware and FreeBSD users can now reboot and shutdown.<br />

**Version 0.63 (11 Oct 1998)**

* Added File Manager module.<br />
* Added HPUX NFS exports module.<br />
* Quotas module now supports FreeBSD.<br />
* Squid module now supports squid 2.0.<br />
* Fdisk module now supports latest fdisk version, as found in SuSE 5.3.<br />
* Context-senstive help developed for some modules and added to [module documentation][53].<br />
* Support in sendmail module for version 8.9 spam control features.<br />
* Added support for new Samba directives like netbios name and valid users.<br />
* All user/group inputs replaced with pop-up windows that can handle larger numbers of users.<br />

**Version 0.62 (30 Aug 1998)**

* Added Squid caching proxy server module.<br />
* Added FreeBSD NFS exports module.<br />
* Disk and Network Filesystems module now supports FreeBSD and HPUX.<br />
* Fixed BIND8 module bug.<br />
* Changed modules API. Old custom modules may no longer work.<br />
* [Modules documentation][54] is now available.<br />

**Version 0.61 (2 Aug 1998)**

* Fixed bug in sendmail module that mis-identified version 8.9.<br />
* Fixed problems with BIND modules, and added option to manually edit BIND records file.<br />
* Enabled HPUX printer support.<br />
* Added option to edit colour scheme.<br />

**Version 0.60 (23 Jul 1998)**

* Added sendmail module supporting aliases, masquerading, virtusers, generics and mailertables.<br />
* Working FreeBSD support for several modules.<br />
* Fixed problem on FreeBSD systems using MD5 crypt.<br />
* Updated BIND 4 module to use the same interface as BIND 8.<br />
* Improved HPUX support (printer and quota modules).<br />
* /etc/skel can now contain directories.<br />

**Version 0.54 (2 Jul 1998)**

* Buggy FreeBSD support for some modules.<br />
* Now works with the latest versions of Net\_SSL and SSLeay (see above).<br />
* Bug fixes in the users and groups module.<br />

**Version 0.53 (13 Jun 1998)**

* Fixed BIND 8 module bugs that caused infinite loops and mis-identification of BIND version.<br />
* Added support for Apache 1.3 release version.<br />
* Fixed some other minor bugs.<br />

**Version 0.52 (8 Jun 1998)**

* Added the BIND 8 DNS server module.<br />
* Added the printer module, with support for Solaris and Linux.<br />
* Fixed bugs in the Apache module to do with virtual hosts.<br />
* Added support for the new NFS mount options in Solaris 2.6.<br />
* Experimental HPUX 10.10 support.<br />

**Version 0.51 (2 May 1998)**

* Fixed some bugs that only appeared under IE. One notable probelm was with editing and creating actions in the SYSV-init module.<br />

**Version 0.5 (1 May 1998)**

* Fixed a serious security problem, and added timeouts to prevent brute-force password guessing attacks.<br />
* Added the first beta version of the Apache module.<br />
* Improved the Samba module layout and icons.<br />
* Added HTTP and FTP proxy server support for modules that download files.<br />
* Fixed the share mode bug in the Samba module.<br />
* Fixed a bug in setup.sh to do with @, % and $ characters in the initial username or password.<br />

**Version 0.42 (31 Mar 1998)**

* Added support for multiple users and passwords, with each user limited to selected modules.<br />
* Automatic quota setup, Samba and PPP account synchronisation with the Unix users list.<br />
* Added support for generation of CLF logfiles by Webmin.<br />
* Other minor bug fixes.<br />

**Version 0.41 (21 Jan 1998)**

* Added PPP accounts module for Linux.<br />
* Password in config file is now encrypted.<br />
* Fixed problems with SUSE Linux.<br />
* Fixed bug preventing install of new packages when not using SSL!<br />
* Fixed infinite loop in software module if an RPM package has no group (as in SUSE Linux).<br />
* Fixed mount module bug for SCSI disks under Linux.<br />
* Added support for 'read only' Samba option.<br />
* Hopefully fixed problem some people had with the process module.<br />

**Version 0.4 (9 Jan 1998)**

* Added SSL support (if the user has SSLeay installed).<br />
* Added browsing for NFS and SMB servers.<br />
* Linux kernel automounter filesystems are now supported.<br />
* Support for Redhat Linux 5.<br />
* Support for SUSE Linux.<br />
* Untested support for AIX.<br />
* Added shutdown and reboot buttons to SYSV-init module.<br />
* Various minor bug fixes.<br />

**Version 0.31 (31 Dec 1997)**

* Fixed bug in Samba user list program.<br />
* Fixed some spelling errors.<br />

**Version 0.3 (26 Dec 1997)**

* Added software packages module for Solaris and Redhat Linux.<br />
* Added disk quota module.<br />
* Added Webmin configuration module.<br />
* Fixed the cron module so /etc/crontab is read for vixie-cron.<br />
* Allowed editing on cron environment variables for vixie-cron.<br />
* Improved the mount module so options for a busy mount can be saved.<br />
* Added Solaris loopback-fs support.<br />
* Added searching to the process module.<br />
* Improved the performance for the webmin server.<br />

**Version 0.22 (21 Nov 1997)**

* Fixed numerous bugs, particularly under Slackware.<br />
* Added last logins function to user module.<br />

**Version 0.21 (19 Nov 1997)**

* Fixed the password problem for sure this time!<br />

**Version 0.2 (14 Nov 1997)**

* Added Solaris partition manager module.<br />
* Added Linux partition module.<br />
* Totally revamped the user interface look and the main menu layout.<br />
* Fixed several bugs (including some password problems).<br />
* Added Debian support.<br />
* Started work on the help pages.<br />
* Improved the SYSV init and inetd modules.<br />

**Version 0.1 (5 Oct 1997)**

* The first release. Contains the cron, BIND, NFS exports, inetd, SYSV init, Disk/NFS mounts, Samba and Unix users modules.<br />

  [1]: security.html
  [2]: security.html
  [3]: security.html
  [4]: http://doxfer.webmin.com/Webmin/EnhancedAuthentication
  [5]: https://github.com/webmin/webmin/commits/master
  [6]: https://github.com/webmin/webmin/commits/master
  [7]: changes-1.560.html
  [8]: changes-1.540.html
  [9]: changes-1.530.html
  [10]: changes-1.520.html
  [11]: changes-1.510.html
  [12]: changes-1.500.html
  [13]: changes-1.490.html
  [14]: changes-1.480.html
  [15]: changes-1.460.html
  [16]: changes-1.450.html
  [17]: changes-1.440.html
  [18]: changes-1.430.html
  [19]: changes-1.420.html
  [20]: changes-1.410.html
  [21]: changes-1.400.html
  [22]: changes-1.390.html
  [23]: changes-1.380.html
  [24]: changes-1.370.html
  [25]: changes-1.360.html
  [26]: changes-1.350.html
  [27]: changes-1.340.html
  [28]: changes-1.330.html
  [29]: changes-1.320.html
  [30]: changes-1.310.html
  [31]: changes-1.300.html
  [32]: changes-1.290.html
  [33]: changes-1.280.html
  [34]: changes-1.270.html
  [35]: changes-1.260.html
  [36]: changes-1.250.html
  [37]: changes-1.240.html
  [38]: changes-1.230.html
  [39]: changes-1.220.html
  [40]: changes-1.210.html
  [41]: changes-1.200.html
  [42]: changes-1.190.html
  [43]: changes-1.180.html
  [44]: changes-1.170.html
  [45]: changes-1.160.html
  [46]: changes-1.150.html
  [47]: changes-1.140.html
  [48]: http://www.sb-brixen.it/
  [49]: http://www.as-bressanone.it/
  [50]: download.html
  [51]: acl.html
  [52]: modules.html
  [53]: modules.html
  [54]: modules.html
