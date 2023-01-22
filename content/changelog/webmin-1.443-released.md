---
title: "Webmin 1.443 released"
date: 2008-11-13
tags: ["changelog", "webmin-changelog"]
---

This new development version has numerous changes and bugfixes, but the most interesting in support for DNSSEC zone signing and verification in the BIND module. 

{{< details-start post-content-indent-details "<i class='wm wm-fw wm-newspaper'></i>" open >}}
- Webmin Core

    - Russian translation updates, thanks to Anton Statutov.

- Bacula Backup System

    - Added a missing program so that mass deletion of storage devices works.

- BIND DNS Server

    - Moved the apply, stop and start buttons to the top-right corner of every page, so that you don't have to return all the way to the module's main page to apply configuration changes.
    - Zones can now be signed with DNSSEC, using one or two keys. This can be done automatically at master zone creation time, or later for existing zones. Signatures can also be removed or re-generated at any time. Zones with a key-signing and zone key can have their zone key automatically regenated on a regular interval.
    - Added the DNSSEC Verification page for configuring BIND to validate signatures on other zones, and to use DLV until the root zone is signed.

- Scheduled Cron Jobs

    - The search form for jobs is always visible, even when there are not too many jobs to show.

- File Manager

    - Added a button to the compressed file extraction dialog to show the contents of a ZIP or tar file, instead of extracting it.

- Linux Firewall

    - DNS queries are now allowed when the firewall is setup for web hosting.
    - Rule coments using --comment containing spaces or     - are now properly parsed.

- Filesystem Backup

    - Fixed a bug that prevented backups of directories with spaces in their names from working properly on Linux.

- LDAP Client

    - Changed the LDAP client connection code to handle both pure-SSL and TLS modes, thanks to a patch from Paul R. Ganci.

- LDAP Server

    - The protocols served by the LDAP server, such as SSL and non-encrypted, can now be set on the OpenLDAP Server Configuration page. This is only possible on Redhat and Debian-derived systems though, as the protocols are configured in the init script.
    - Fixed a bug that prevented browsing of the LDAP database in SSL mode, thanks to Paul R. Ganci.

- LDAP Users and Groups

    - Added a Module Config option to allow / as an IMAP folder separator, thanks to Bas van den Heuvel.
    - Added a check on the module's main page to ensure that the LDAP schema is accessible.
    - Fixed support for SSL and TLS when connecting to the LDAP server, thanks to Paul R. Ganci.

- Printer Administration

    - Show the date and time a job was submitted on systems using CUPS.

- Logical Volume Management

    - Filesystem space used is show on the logical volume list, and the field for a new volume's size is more user-friendly.

- Read User Mail

    - HTML messages now have a converted plain-text attachment automatically added, for mail clients that only support text.

- Disk and Network Filesystems

    - Improved support for filesystems on partitions identified by volume ID when the `vol_id` command is missing.
Show the used disk space for each filesystem on the main page.

- Postfix Mail Server

    - Added a module config option to control if the user is prompted for confirmation before deleting queued messages.

- Sendmail Mail Server

    - Added a Module Config option to control if the user is prompted for confirmation before deleting queued messages.
    - A custom command to rebuild all maps can be specified on the Module Config page, to be used instead of makemap or newaliases.

- SMART Drive Status

    - SCSI drives are visible in the System and Server Status module.

- SpamAssassin Mail Filter

    - Corrected the columns on the auto-whitelist page, to show the message count and score.

- SSH Server

    - Added a field to allow or deny SSH 2 public key authentication.

- SSH/Telnet Login

    - Updated the Java SSH applet to the latest version.

- Users and Groups

    - Added a non-editable list of users who have this group as their primary to the Edit Group page.

- Webmin Configuration

    - Added an advanced option to have Webmin turn off the immutable bit on files before writing to them, and turn it back on when done.
{{< details-end >}}
