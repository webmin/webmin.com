---
title: "Virtualmin 6.02 released"
date: 2017-12-17
tags: ["changelog", "virtualmin-changelog"]
---

- When adding an alias to a domain with a Let's Encrypt SSL certificate, the cert is automatically updated to include the alias domain.
- Backups from cPanel, Plesk and other control panels can now be migrated even when Nginx is used as a webserver.
- Many Install Script updates
- Conversion of WordPress to use WP-CLI when available for many operations
- Minor Dropbox backups support bug fixes
- Support per-domain SSL certificates in most services not previously covered (when domain has a dedicated IP address)
- Numerous other bugfixes and minor enhancements
- Updates for OwnCloud, Node.js, SuiteCRM, IonCube, Joomla, Mantis, Piwik, LimeSurvey, Drupal, and MediaWiki
- Fixes for some forms under the new theme version (most importantly Website Options)
- Minor bugfixes in migrations, backups and validation
- Remove PHP4 support (this seems more than minor, and is actually a pretty big bunch of code changed/removed, but no one should be running PHP4 at this point, as it has been end-of-lifed by the PHP folks for years and is not supported on any distribution we currently support).