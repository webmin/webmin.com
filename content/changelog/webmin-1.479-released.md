---
title: "Webmin 1.479 released"
date: 2009-05-14
tags: ["changelog", "webmin-changelog"]
---

This version contains all the features that will be in the upcoming 1.480 version, such as Catalan, French, Dutch and Russian translation updates, BIND config parsing fixes, LVM LV relative size creation, 3ware and FreeBSD support in the SMART module, ability to use the CSW pkgutil command on Solaris, and much more.

{{< details-start post-content-indent-details "<i class='wm wm-fw wm-newspaper'></i>" open >}}
- Webmin Core

    - Catalan translation updates by Jaume Badiella.
    - Added an UTF-8 encoding of the Russian translation, thanks to shavlukov@gmail.com.
    - French translation updates by ButterflyOfFire.
    - Dutch translation updates by Gandyman.

- Apache Webserver

    - Fixed bug that preventing saving of virtual hosts with multiple addresses, one of which is IPv6.
    - Full Bulgarian translation, thanks to King.

- BIND DNS Server

    - Added mass record change and creation buttons to the zone search results page.
    - Made the manual config file editor textboxes full-width.
    - Fixed a bug that cause blocks like sortlist not be parsed properly, and possible cause Webmin to corrupt other parts of the named.conf file.
    - Redirect and explanation modifiers can be viewed and edited in SPF records.
    - Added a Module Config option for additional master IP addresses for remote slave zones.

- Cluster Copy Files

    - Fixed check to prevent over-writing a file when copying to this host.

- DHCP Server

    - Added a Module Config option to specify an alternate file to add new top-level objects (like subnets) to. This must be referenced by an include directive in the main dhcpd.conf though.
    - String custom options are now always quoted.

- File Manager

    - Fixed a bug that prevented setuid and setgid permissions from being changed.

- Linux Firewall

    - Disallow rules on virtual interfaces, as they don't work.

- Logical Volume Management

    - When creating a logical volume, size can now be specified as a fraction of the volume group size, free space, or free space on some physical volume.

- Read User Mail

    - When replying to a message, the original character set is used. Also, a bug that prevented the character set from being displayed when viewing a message is fixed.
    - Messages with alternate HTML and text bodies are now send with the multipart/alternative content type, which fixes the problem of Gmail showing the body twice.
    - The original sender's email address is now included in the 'wrote' line when replying to or forwarding a message.

- MySQL Database Server

    - Added code to detect a password in `/root/.my.cnf` which overrides the `MYSQL_PWD` variable, and thus causes login failures.

- SMART Drive Status

    - Added support for systems with both old and new 3ware cards.
    - Added support for FreeBSD and OSX systems, if they have the smartctl package installed.

- Software Packages

    - On Solaris, added support for the pkgutil command from Blastwave for installing packages, which replaces the old pkg-get.
    - On Solaris, package versions are now shown in the package list and tree.

- Users and Groups

    - Fixed a bug that caused an empty shell to appear in the shells list for new users.
    - Fixed the hashing format for Blowfish passwords, to put `$2a$` at the start instead of `$2$`.
    - On Linux systems with SELinux enabled, the context `user_u:object_r:user_home_dir_t` is set on new home directories by default.

- Usermin Configuration

    - Added a field to the Operating System and Environment page for additional Perl module directories.

- Webmin Configuration

    - Added a field to the Operating System and Environment page for additional Perl module directories.
{{< details-end >}}
