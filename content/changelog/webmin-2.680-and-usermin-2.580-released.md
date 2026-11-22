---
title: "Webmin 2.680 and Usermin 2.580 released"
date: 2026-11-21
tags: ["changelog", "webmin-changelog", "usermin-changelog"]
---

* Add TLS to fast RPC calls and file transfers on SSL servers, requiring remote peers to be upgraded first and rejecting unsupported peers or HTTPS-to-HTTP proxies without falling back to regular RPC
* Add an SQLite database browser and editor with schema inspection, table management, row editing and direct SQL execution [forum.virtualmin.com/t/137508](https://forum.virtualmin.com/t/sqlite-database-browser-and-editor/137508/)
* Add color schemes to the Terminal module
* Add per-user Terminal preferences for color scheme, font size, screen reader mode and terminal dimensions
* Add NTFS3 mount support and fix missing dashboard disk-space warnings for NTFS3 filesystems [#2928](https://github.com/webmin/webmin/issues/2928)
* Add protection against infinite loops resolving recursive symlinks (thanks to Carl Zuzart, Zedden I.T.)
* Add a Cloudmin virtualization host profile to the nftables module
* Add drop-down menu, dialog, breadcrumb and page link widgets to the UI library, built on native `details` and `dialog` elements
* Add confirmation dialogs for buttons and links carrying `data-ui-confirm`, replacing the browser's own prompt
* Update the Framed Theme with many visual and usability improvements
* Update module and interface icons to SVG images in one consistent style, shared between modules
* Update File Manager to use the new UI widgets in the standard theme, dropping legacy templates
* Fix automatic fast RPC detection to honor SSL certificate checks before sending login credentials
* Fix RPM extraction in File Manager to use `bsdtar` for better compatibility and security
* Fix missing and stale Kea DHCP leases after lease file cleanup [#2930](https://github.com/webmin/webmin/issues/2930)
* Fix sorting and message lookup in large mailboxes, and speed up unread counts and bulk flag changes in Maildir folders [#2902](https://github.com/webmin/webmin/pull/2902)
* Fix standard theme sortable tables dropping controls from table headings, such as the select-all checkbox in File Manager
* Fix zero DNS TTLs being displayed as defaults, lost when editing records, or skipped during bulk updates in the BIND DNS Server module [#2925](https://github.com/webmin/webmin/issues/2925)
* Fix package installation with DNF running `update` instead of `install` when one of several requested packages is already installed, leaving the others uninstalled
* Fix two-factor authentication validation to use the Webmin configuration and data directories passed by the caller
* Fix HTML escaping of module, script and session fields on the Webmin Actions Log details page
* Fix mailbox attachment option injection
* Fix archive extraction bypassing Upload and Download directory restrictions when uploads can run as another Unix user
* Fix path traversal and command injection in parameterized Custom Commands file editors
* Fix MySQL/MariaDB manual editor ACL bypass
* Fix MySQL/MariaDB database backups allowing restricted users to write files or save root-run settings outside their access limits
* Fix PostgreSQL backups and CSV exports to enforce directory and Unix user restrictions, and prevent restricted users from saving shared backup settings or scheduling backups as root
* Fix Postfix map settings pages allowing restricted users to change settings from other pages
* Fix Postfix map, mapping and mail queue pages bypassing module permissions
* Fix Postfix allowed map directory bypass through extra maps, parameter references and relative paths
* Fix Postfix map source settings being corrupted when several are saved at once
* Fix Postfix and Sendmail alias file editors allowing users without alias permissions to read and overwrite files
* Fix local MySQL/MariaDB imports to use server-accessible temporary files with restricted permissions, including when systemd isolates temporary directories
* Fix the logged in users list in Users and Groups module showing nobody when `who` prints ISO dates under a non-C locale or `sshd pts/N` lines from the logind backend [forum.virtualmin.com/t/138162](https://forum.virtualmin.com/t/138162)
* Fix missing SSH logins in the Users and Groups module on Ubuntu 26.04 by using systemd-logind when `utmp` is absent
* Fix mail date parsing of ISO dates like `2026-10-15 02:33` returning the wrong minutes
* Fix the default for new users in the Webmin Users module to allow URL downloads only from public IP addresses (thanks to 0xpack)
* Remove built-in WebDAV file access from MiniServ and its Usermin configuration pages
* Add optional address-family selection to HTTP downloads and socket connections, preserved across redirects [#1300](https://github.com/virtualmin/virtualmin-gpl/issues/1300)
* Update the Authentic theme to the latest version with various improvements:
  - Add support for Terminal module color preferences
  - Add support for the new Cloudmin 10 beta navigation, graphical console and live virtual machine controls
  - Add support for styling the new status monitors panel in the dashboard and side slider
  - Fix spacing and borders in widgets, tables and tab panes
  - Fix zip download dropping symlinks and failing on dangling ones in File Manager module [webmin#1918](https://github.com/webmin/webmin/issues/1918)
  - Fix archive downloads to report the real archiving error in File Manager module

---

#### Assets

| File                       | Size | File                       | Size |
| -------------------------- | -----| -------------------------- | ---- |
| **Webmin**                 |      | **Usermin**                |      |
| [webmin-2.680-1.noarch.rpm](https://github.com/webmin/webmin/releases/download/2.680/webmin-2.680-1.noarch.rpm) | 26.1 MB | [usermin-2.580-1.noarch.rpm](https://github.com/webmin/usermin/releases/download/2.580/usermin-2.580-1.noarch.rpm) | 7.3 MB |
| [webmin_2.680_all.deb](https://github.com/webmin/webmin/releases/download/2.680/webmin_2.680_all.deb) | 25.0 MB | [usermin-2.580_all.deb](https://github.com/webmin/usermin/releases/download/2.580/usermin_2.580_all.deb) | 7.6 MB |
| [webmin-2.680.pkg.gz](https://github.com/webmin/webmin/releases/download/2.680/webmin-2.680.pkg.gz) | 36.3 MB | [usermin-2.580.tar.gz](https://github.com/webmin/usermin/releases/download/2.580/usermin-2.580.tar.gz) | 11.4 MB |
| [webmin-2.680.tar.gz](https://github.com/webmin/webmin/releases/download/2.680/webmin-2.680.tar.gz) | 33.2 MB | |
| [webmin-2.680-minimal.tar.gz](https://github.com/webmin/webmin/releases/download/2.680/webmin-2.680-minimal.tar.gz) | 3.7 MB   |
