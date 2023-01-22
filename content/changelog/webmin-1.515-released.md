---
title: "Webmin 1.515 released"
date: 2010-06-02
tags: ["changelog", "webmin-changelog"]
---

This new testing version moves Webmin's cron jobs for collecting system information and time synchronization into a new internal cron-like service, which uses no additional RAM when run. It also fixes numerous small bugs, adds online LVM resizing and much more.

{{< details-start post-content-indent-details "<i class='wm wm-fw wm-newspaper'></i>" open >}}
- Webmin Core

    - Dutch translation updates, thanks to Gandyman.
    - Polish translation updates, thanks to Dariusz DÃªbowski.

- Backup Configuration Files

    - Added fields to the scheduled backup page for pre and post backup commands.

- BIND DNS Server

    - On Linux systems, /dev/urandom is used for generating entropy for DNSSEC.

- Custom Commands

    - Fixed a bug that broke remote command execution with parameters.

- DHCP Server

    - Added support for multi-value options, thanks to a patch from Luke Suchocki.
    - Also added support for multi-value options within a bracketed expression.

- File Manager

    - Bug fixes to allow the File Manager module to be used via Webmin Servers Index or Cloudmin.

- Filesystem Backup

    - Fixed verification when a dump is to a date-based destination and takes more than one day.

- LDAP Users and Groups

    - The list of groups now includes descriptions, if any are set.

- Printer Administration

    - Changed the default PPD driver directory on Debian to include `/usr/share/ppd` as well.

- Logical Volume Management

    - Mounted ext3+, reiser, xfs and jfs logical volumes can now have their filesystem size increased, without needing an un-mount. Thanks to Caspar Smit for the suggestions and patches to implement this.
    - When editing a logical volume that is already in `/etc/fstab`, don't allow the filesystem to format it as to be changed, to prevent a mismatch.

- MySQL Database Server

    - Added greater than/less than selectors to the table data search form.

- Postfix Mail Server

    - Added support for CIDR maps and multiple SMTP client restriction maps.

- PostgreSQL Database Server

    - Added greater than/less than selectors to the table data search form.

- Linux RAID

    - Conversion from RAID 5 to 6 and vice versa is now possible, thanks to Caspar Smit.
    - When a RAID array is being rebuilt, show the speed and time remaining, thanks to Farid Benamrouche.

- Sendmail Mail Server

    - Added validation when manually editing the aliases and other map files.

- System and Server Status

    - The Check File or Directory monitor can now use a pattern like `/tmp/\*` to check sizes for all files in a directory.
    - Added a monitor-level option to run a command if the monitor times out.

- TCP Wrappers

    - Added a Module Config option to control if possible services are taken from inetd/xinetd, or always manually entered.

- System Time

    - Switched background time syncing to use the new Webmin Cron service.

- Webmin Configuration

    - Strong PCI-compliant ciphers can now be selected on the SSL Encryption page.
{{< details-end >}}
