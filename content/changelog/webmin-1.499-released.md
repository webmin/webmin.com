---
title: "Webmin 1.499 released"
date: 2009-11-12
tags: ["changelog", "webmin-changelog"]
---

This new version contains everything that will be in Webmin 1.500, for those who are interested in trying it out.

{{< details-start post-content-indent-details "<i class='wm wm-fw wm-newspaper'></i>" open >}}
- Scheduled Commands

    - Added action logging for scheduled commands created and deleted using this module.

- Backup Configuration Files

    - Added an option on the restore form to just show the contents of a backup.

- Bacula Backup System

    - Fixed fileset exlude list and 'Run at times' display, thanks to a patch by Joe Zhou.
    - Added support for automatic volume labelling and max volume size, thanks to Caspar Smit.

- BIND DNS Server

    - Root zone records files are now included in Webmin backups.

- Linux Firewall

    - Removed invalid "Above" options for packet flow rate.

- LDAP Users and Groups

    - Improve the user and group rename code to not move the DN to be under the global base if not needed.
    - Modifying a user now correctly changes the sn attribute too.

- MySQL Database Server

    - The `information_schema` database is no longer included when backing up all databases, as it really just contains metadata.

- Software Package Updates

    - First version of this module.

- Change Passwords

    - Fixed restrictions based on secondary group membership.

- Postfix Mail Server

    - Added support for the Postfix 2.3 `smtpd_tls_security_level` option.

- Linux RAID

    - Added a button to remove a detached partition, thanks to Caspar Smit.

- Squid Report Generator

    - SARG reports that use daily subdirectories can now be viewed from within Webmin, even if they are missing an index.html file.

- Sendmail Mail Server

    - If multiple alias files are defined, one can be selected when adding a new alias.

- SMART Drive Status

    - Fixed the collapsible section showing raw SMART status output.

- System and Server Status

    - Added a new monitor type for detecting large directories.

- System Logs

    - Added support for rsyslog `IncludeConfig` directives, which are used to split the config into multiple files, as seen on Ubuntu 9.

- System Status

    - First version of this module, for collecting system information using a background Cron job.

- Upload and Download

    - Added support for extracting LHArc format files when uploading.

- Webmin Configuration

    - Added a field to the Debugging Log File page to select modules to debug for.
{{< details-end >}}
