---
title: "Virtualmin 7.40.0 released"
date: 2025-09-07
tags: ["changelog", "virtualmin-changelog"]
author: "Ilia Ross"
---

* Add built-in password recovery support for the login page
* Add advanced search for backup logs with fielded queries and multi-field terms
* Add a new CLI API to manage config file backups with `list-config-backups` and `restore-config-backups` commands
* Add full MTA-STS support
* Add a template option to ignore specified names during ACME certificate requests
* Add support for record sets in Amazon Route 53
* Add support for adding NS records to parent domain with Route 53 DNS
* Add a default timeout to allow waiting for scheduled backups to finish instead of failing immediately
* Add BIND and Apache configs validation during config check
* Add ability to configure DNS resolvers
* Add support for IPv6 per-IP certificates for Webmin and Usermin
* Add support for fully-qualified extra admin usernames
* Add support for plugin-driven scheduled backups, restore, and backup logs used by upcoming WP Workbench
* Add support for domain restore with a clashing IDs
* Improve the navigation menu by using a new layout that prioritizes the "Create Virtual Server" button
* Improve local and remote host handling in MySQL/MariaDB, update grant and access logic when moving and restoring a domain
* Improve relying on the proper API to interact with the Apache config
* Improve API categorization for Virtualmin CLI
* Improve ZIP backups to handle feature files inside the archive, use maximum compression, and skip compressing the internal files
* Improve the "SSL Certificate" page to display SANs in a more concise and user-friendly way
* Improve the complex schedule field to display consistently regardless of the schedule
* Replaced `IDNA::Punycode` with the actively maintained `Net::LibIDN2` for full IDNA2008 support
* Change Let's Encrypt renewal default to 21 days before expiry
* Change to use relative dates for last login and days until renewal when applicable
* Drop legacy S3 Perl modules and now always require using AWS-CLI
* Drop supporting outdated panels for migration backups, except for cPanel, Plesk, and DirectAdmin
* Fix Jailkit support for sub-servers [#1082](https://github.com/virtualmin/virtualmin-gpl/issues/1082)
* Fix Rackspace endpoint for London
* Fix alias domains to allow DKIM to be enabled
* Fix config check to support Postfix configured as a relay
* Fix displaying chosen values correctly for a multi-server selection field
* Fix it to correctly use `*` as the default in an Apache virtual host on new systems
* Fix it to stop showing details of the installed web app if the plugin provides it, like with WP Workbench
* Fix missing `RewriteEngine` directive when creating a proxy path
* Fix not update `max_spare_servers` when saving PHP options if children don't change
* Fix renaming a domain with Route 53 DNS enabled, to delete records from the old domain
* Fix to remove NS records when deleting a sub-domain from Route 53 DNS
* Fix reseller updates on all available Webmin modules, since saving the template affects their permissions
* Fix support for Backblaze API keys may start with plus
* Fix support for new local IMAP authentication with the Dovecot command in Usermin
* Fix the Dropbox bugs that occurred when listing backups
* Fix the automatic renewal of SSL certificates with other ACME providers to work
* Fix the incorrect FQDN check when creating an SSL certificate for the hostname
* Fix to allow resellers with a Unix login to access the Terminal module
* Fix to correctly display DNS-related errors with the original error message
* Fix to correctly sort and place alias domain next to the parent when listing domains
* Fix to limit lifetime of sessions to one hour by default when using CLI to create a login link
* Fix to set `-all` as the default in DNS SPF records
* Fix to make sure that in PHP disabled mode, PHP files are not processed
* Fix the sporadic PHP-FPM service going down unexpectedly on EL systems
* Fix to not force re-generation of MySQL/MariaDB username when just listing using CLI
* Fix to prevent mail users from setting up email notifications
* Fix to roll config back when the DNS move fails, by setting it up again on the old host or locally
* Fix to run pre and post commands when backing up a domain
* Fix to use a consistent timestamp throughout the backup
* Fix up paths in autoreply files when renaming users
* Fix various IPv6 related bugs
