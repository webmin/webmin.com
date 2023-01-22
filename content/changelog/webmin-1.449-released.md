---
title: "Webmin 1.449 released"
date: 2008-12-08
tags: ["changelog", "webmin-changelog"]
---

This new version contains all the features that will be in Webmin 1.450, so if you want to try it out and find some last-minute bugs before the official release, please go ahead!

{{< details-start post-content-indent-details "<i class='wm wm-fw wm-newspaper'></i>" open >}}
- Webmin Core

    - Russian translation updates, thanks to Anton Statutov.
    - Webmin's serialization functions can now handle objects, which allows them to be passed as parameters to remote function calls. Both caller and recipient must have the object's class installed though.
    - Converted commands in the core web-lib-funcs.pl API file to POD format, and added more details about each function.

- Webmin Users

    - Removed the Hide Unused button and associated functionality, as un-available modules are already automatically hidden in the Un-used Modules category.
    - Moved the 'global ACL' fields to the Edit User and Edit Group pages, so that restrictions applying to all modules can be more easily found and edited.
    - Added a per-user option to not grant that user new module permissions when Webmin is upgraded.
    - If any theme overlays are installed, users' overlays can be selected on the Edit User page.
    - Converted commands in the module's API file to POD format, and added more details about each function.

- Backup Configuration Files

    - Converted commands in the module's API file to POD format, and added more details about each function.

- Bacula Backup System

    - Added a missing program so that mass deletion of storage devices works.

- BIND DNS Server

    - Moved the apply, stop and start buttons to the top-right corner of every page, so that you don't have to return all the way to the module's main page to apply configuration changes.
    - Zones can now be signed with DNSSEC, using one or two keys. This can be done automatically at master zone creation time, or later for existing zones. Signatures can also be removed or re-generated at any time. Zones with a key-signing and zone key can have their zone key automatically regenated on a regular interval.
    - Added the DNSSEC Verification page for configuring BIND to validate signatures on other zones, and to use DLV until the root zone is signed.
    - SPF records can now be added to or updated in multiple zones at once.
    - Added an icon to the main page for checking the whole BIND configuration including zone files, with the named-checkconf command.

- Change Language and Theme

    - If any theme overlays are installed, one can be selected in this module to modify the appearance of the underlying theme.
    - Converted commands in the module's API file to POD format, and added more details about each function.

- Perl Modules

    - Sped up the fetching of Perl modules installed from RPM and Debian packages.
    - Switched the install and current modules tabs.

- Scheduled Cron Jobs

    - The search form for jobs is always visible, even when there are not too many jobs to show.
    - Converted commands in the module's API file to POD format, and added more details about each function.

- File Manager

    - Added a button to the compressed file extraction dialog to show the contents of a ZIP or tar file, instead of extracting it.

- Linux Firewall

    - DNS queries are now allowed when the firewall is setup for web hosting.
    - Rule coments using --comment containing spaces or     - are now properly parsed.
    - When initializing the firewall, the actual ports for Webmin, Usermin and SSHd are used instead of the standard ports.
    - Added an option for the UNTRACKED state in rules.

- Filesystem Backup

    - Fixed a bug that prevented backups of directories with spaces in their names from working properly on Linux.

- Bootup and Shutdown

    - Converted commands in the module's API file to POD format, and added more details about each function.

- LDAP Client

    - Changed the LDAP client connection code to handle both pure-SSL and TLS modes, thanks to a patch from Paul R. Ganci.

- LDAP Server

    - The protocols served by the LDAP server, such as SSL and non-encrypted, can now be set on the OpenLDAP Server Configuration page. This is only possible on Redhat and Debian-derived systems though, as the protocols are configured in the init script.
    - Fixed a bug that prevented browsing of the LDAP database in SSL mode, thanks to Paul R. Ganci.

- LDAP Users and Groups

    - Added a Module Config option to allow / as an IMAP folder separator, thanks to Bas van den Heuvel.
    - Added a check on the module's main page to ensure that the LDAP schema is accessible.
    - Fixed support for SSL and TLS when connecting to the LDAP server, thanks to Paul R. Ganci.
    - Added a Module Config option to use a text box for entering secondary group members, rather than the left/right user chooser.

- Printer Administration

    - Show the date and time a job was submitted on systems using CUPS.

- Logical Volume Management

    - Filesystem space used is show on the logical volume list, and the field for a new volume's size is more user-friendly.

- Read User Mail

    - HTML messages now have a converted plain-text attachment automatically added, for mail clients that only support text.

- Disk and Network Filesystems

    - Improved support for filesystems on partitions identified by volume ID when the `vol_id` command is missing.
    - Show the used disk space for each filesystem on the main page.

- MySQL Database Server

    - The correct character set is ready from my.cnf when connecting using DBI mode, thanks to jianxia.
    - The password is passed to all MySQL commands using the `MYSQL_PWD` environment variables on systems running MySQL 4.1 and later, version 5.1 in older Webmin releases.

- Change Passwords

    - Converted commands in the module's API file to POD format, and added more details about each function.

- Postfix Mail Server

    - Added a module config option to control if the user is prompted for confirmation before deleting queued messages.

- PostgreSQL Database Server

    - Re-wrote the entire user interface to use Webmin's new UI library, for a more consistent and themable look.
    - Added a history of previous commands to the Execute SQL page.

- Disk Quotas

    - Converted all pages to use the new Webmin UI library, for a more consistent look. Also split the Filesystem Quotas page into tabs.
    - Converted commands in the module's API file to POD format, and added more details about each function.

- Sendmail Mail Server

    - Added a Module Config option to control if the user is prompted for confirmation before deleting queued messages.
    - A custom command to rebuild all maps can be specified on the Module Config page, to be used instead of makemap or newaliases.

- Webmin Servers Index

    - Converted commands in the module's API file to POD format, and added more details about each function.

- SMART Drive Status

    - SCSI drives are visible in the System and Server Status module.
    - The SMART status monitor now has an option to only alert if the error count on a drive has increased.

- Software Packages

    - Added a Module Config option to not use any update system, even if YUM or APT are installed.
    - Added the function `package_files` for other modules to call, when only a list of files in some package is needed.

- SpamAssassin Mail Filter

    - Corrected the columns on the auto-whitelist page, to show the message count and score.

- SSH Server

    - Added a field to allow or deny SSH 2 public key authentication.

- System and Server Status

    - Added an option to the FTP status monitor to make a TLS encrypted connection. Requires the `Net::FTPSSL` Perl module though.

- SSH/Telnet Login

    - Updated the Java SSH applet to the latest version.

- Users and Groups

    - Added a non-editable list of users who have this group as their primary to the Edit Group page.
    - Added a Module Config option to use a text box for entering secondary group members, rather than the left/right user chooser.
    - Created a page for exporting groups to a batch file, for importing on other systems.
    - Added support for creating, deleting and modifying groups from a batch file. This is similar to the long-standing batch user management functionality.
    - Added support for Blowfish password hashing, which can be enabled on the Module Config page. On Solaris systems, it will be used if enabled in `/etc/security/policy.conf`. Requires the `Crypt::Eksblowfish::Bcrypt` Perl module though.
    - Converted commands in the module's API file to POD format, and added more details about each function.

- Usermin Configuration

    - Converted commands in the module's API file to POD format, and added more details about each function.

- Webmin Configuration

    - Added an advanced option to have Webmin turn off the immutable bit on files before writing to them, and turn it back on when done.
    - Re-designed the Webmin Themes page to use tabs.
    - Added support for overlay themes, which can be selected in addition to a regular theme. An overlay typically just modifies the CSS or images in the real theme, making simple design changes easier.
    - Converted commands in the module's API file to POD format, and added more details about each function.

- Webmin Actions Log

    - Added the `list_webmin_log` function, for other modules wanting to search the Webmin log.
    - Converted commands in the module's API file to POD format, and added more details about each function.
{{< details-end >}}
