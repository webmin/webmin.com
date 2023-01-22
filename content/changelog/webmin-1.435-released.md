---
title: "Webmin 1.435 released"
date: 2008-10-07
tags: ["changelog", "webmin-changelog"]
---

This includes UI improvements in the BIND and Users and Groups module, much nicer CSS and layout in the default theme, many bugfixes, a bunch of BIND module improvements, and more.

{{< details-start post-content-indent-details "<i class='wm wm-fw wm-newspaper'></i>" open >}}
- Apache Webserver

  - When a virtual host's base directory is changed, all <directory> blocks under it are updated too.

- BIND DNS Server

  - Don't pass the `-g` flag to BIND version 9 when starting without an init script.
  - Converted all forms to use the Webmin UI library, for a more consistent look and easier theming.
  - Moved buttons for deleting, moving and converting zones up to the page shown when you click on a zone name.
  - Switched to the new root zone file available from Internic.
  - Restrictions that apply to all zones in a view (such as allowed IPs for transfers and queries) can now be set on the Edit Client View page.
  - Made the Find Free IPs page visible, for finding addresses in a master zone that are not currently used.
  - Added a field to limit concurrent outgoing zone transfers and incoming transfers per nameserver to the Forwarding and Transfers page.
  - Ignore tailing dots in zone names in named.conf.

- Change Language and Theme

  - Converted the UI to use the new Webmin user interface functions, for a more consistent look.

- Cluster Copy Files

  - Added a Module Config setting to control the default sort order.

- Dovecot IMAP/POP3 Server

  - Added fields to the SSL page for an optional CA certificate file and private key password.

- File Manager

  - POSIX ACLs can now be edited on FreeBSD, if the setfacl and getfacl commands are installed.

- LDAP Users and Groups

  - The order of the first name and surname in the real name can be changed by a new Module Config setting.

- Read User Mail

  - Added support for Exim, thanks to Emmanuel Florac.
  - Re-wrote the entire user interface to use the new Webmin UI library, and to bring it into sync with the Usermin module for reading mail.

- MySQL Database Server

  - Improved the input for setting the default value for new fields, and added support for `CURRENT_TIMESTAMP`.

- Network Configuration

  - Converted all pages to use the Webmin user interface library, for a more consistent look and better theming.

- Postfix Mail Server

  - Converted all pages to use the new Webmin UI library, for a more consistent and themable look.
  - Autoreply messages containing non-ASCII characters are now properly quoted-printable encoded.

- Disk Quotas

  - Email to users who are over quota on some filesystem can also be Cc'd to another address, such as the system administrator.

- Samba Windows File Sharing

  - The `Password never expires` flag can be set for user accounts, thanks to a patch from Juan Miguel Corral.
  - Allow the server description to be set to explicitly nothing.

- Sendmail Mail Server

  - Autoreply messages containing non-ASCII characters are now properly quoted-printable encoded.

- SpamAssassin Mail Filter

  - Added buttons to the auto-whitelist page for permanently allowing or denying selected addresses.

- SSH Server

  - Added a button on the module's main page for viewing the public side of the host keys, thanks to Sean Cox.

- System Logs

  - Added support for rsyslogd, as seen by default on Debian 5.0.

- Users and Groups

  - Added tabs to the module's page page, to switching between user and group lists easier.
  - Cleaned up the user interface to be more consistent with the rest of Webmin.
{{< details-end >}}

