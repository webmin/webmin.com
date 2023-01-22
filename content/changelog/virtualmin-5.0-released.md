---
title: "Virtualmin 5.0 released"
date: 2016-01-08
tags: ["changelog", "virtualmin-changelog"]
---

This is a major new release (thus the 5.0 designator). This release will coincide with changes in the install script happening tonight, to make Authentic Theme the default theme and Filemin the default file manager.

There will be some additional announcements about changes in the Virtualmin system as a whole (including instructions for updating your installations to the new defaults, should you want to do so), but, this announcement just covers the virtual-server module itself (which also has major new features and updates).

  - MX records for a domain can be pointed to a cloud mail filtering provider on the Email Options page, or using the modify-mail API command.
  - Added the rename-domain API command, to allow changing the domain name, username or home directory of a virtual server from the command line.
  - Removed support for Apache versions older than 2.0.
  - Backup logs are now associated with the scheduled backup that created them, and are linked in the UI.
  - The Excluded Directories page can now also be used to enter MySQL and PostgreSQL databases and tables to exclude from backups.
  - The paths to additional PHP versions can now be entered on the Virtualmin Configuration page, under PHP Options. This also makes it possible to run PHP version 7.
  - Added a tab to the Manage SSL Certificate page to request a certificate from the free Let's Encrypt service.
  - Updated multiple script installers

The big changes are PHP 7 and much more flexible support for many PHP versions, as well as better detection of SCL-installed PHP versions, and support for Let's Encrypt! Let's Encrypt provides free domain-validated SSL/TLS certificates in an automated fashion, making it easier and cheaper to secure all of your websites (without the certificate warnings that come from self-signed certificates). Webmin has gotten support for Let's Encrypt, as well, in its latest release.
