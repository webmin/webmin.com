---
title: "Vchanges"
date: 2017-10-02
categories: []
aliases: []
toc: false
draft: false
---
# Virtualmin Change Log

**Version 7.3 (28th October 2022)**

* Add support to force-refresh domains expiration status
* Fix to allow resellers virtual servers change PHP mode too
* Add a feature to display DNS text records in a column by @iliajie in #468
* Fix mutliline port output
* Add help for --letsencrypt and --letsencrypt-always by @xxorax in #470
* Added support for the upcoming websockets Terminal module
* Fixed support for OAuth app enrollment for Google Cloud Storage and DNS
* DKIM records are now shown in suggested list

**Version 6.17 (9th September 2021)**

* Added a field to the virtual server creation page to use an existing SSH key for logins, or generate a new key.
* If needed, Virtualmin will configure the exact PHP version required to run scripts when installed.
* Two-factor authentication for Usermin is setup for domain owners at the same time as Virtualmin.
* Added the create-login-link API command to login as a domain owner without a password.
* Massively simplified the SSL Certificate page for services certificates.
* Added a field for entering an SSH private key file for use in backups, instead of a password.

**Version 6.16 (28th March 2021)**

* Mainly bugfixes for issues found in 6.14.
* The order of features on the virtual server creation and edit pages is now more consistent and stable.
* Let's Encrypt auto-renewal has been simplified and is on by default.
* Added an option to rename the HTML directory if changed.

**Version 6.15 (7th March 2021)**

* Consolidated all PHP options into a single page, and moved website options to it's own page in the UI.
* SSL certicates can now be generated and managed for virtual servers even when they don't have the SSL feature enabled.
* Added the Cloud DNS Providers page, for configuring Virtualmin to use Route53 to host DNS rather than doing it locally.

**Version 6.14 (2nd December 2020)**

* Bugfixes in PHP FPM support
* Email is now sent using the correct character set

**Version 6.13 (19th October 2020)**

* Added support for backing up to BackBlaze.
* Added a cron job to clean up old PHP session files.
* Fixes to creation and update of per-domain Dovecot SSL certs.
* Improved the template page for website options when Nginx is in use.
* Better handle PHP FPM package upgrades done after domains are created.
* Massively improved support for MySQL / MariaDB user and password management.
* Improved and preserved indentation for Apache configs.
* Fixes for IPv6 addresses in SPF and default DNS records.
* Fixed bugs caused by removing domain features in the wrong order.
* Improved locking for domain database files to prevent overwriting.

**Version 6.12 (22nd August 2020)**

* Mostly small bugfixes for problems found since 6.10.

**Version 6.10 (5th July 2020)**

* Added the set-dkim API command to enable and disable DKIM.
* The compression format can now be selected on a per-backup basis.
* Scheduled backups can have a descriptive comment for recording their purpose, which is also displayed in backup logs.
* Per-domain SSL certifcates can not be setup in Postfix, if running version 3.4 or later.
* Updated the SSL Certificate page to allow more control over per-domain certs for Webmin, Usermin, Postfix and Dovecot.

**Version 6.09 (19th February 2020)**

* Support for systems without SuExec, like CentOS 8.
* Simpler UI for turning on redirect to SSL.
* API command to sync TLSA records.
* A bunch of other small bugfixes and features.

**Version 6.08 (16th October 2019)**

* Fixes for several security issues that could be exploited by domain owners. Thanks to RACK911 Labs for finding and reporting these!
* Much improved MariaDB 10.x support.
* Virtual servers to backup can now be selected by reseller.
* Fixes for Dropbox backup problems.
* Fixes for FPM port collision problem.

**Version 6.07 (15th July 2019)**

* Virtual servers to backup can now be selected by reseller.
* DMARC ordering, RUF and RUA parameter fixes.
* Fixes for encrypted backups and key generation.
* Backup and restore fixes for quotas, Dropbox, and alias domains.

**Version 6.06 (10th February 2019)**

* If multiple versions of the PHP-FPM packages are installed, a different version can be selected for each domain in Virtualmin.
* Remote backups can now be made using Webmin's RPC protocol, along with SSH. This allows backups to systems that only allow sudo logins.
* Added support for MySQL 8 systems that use a different password hashing method.
* Existing GPG keys owned by the root user can now be imported as backup encrytion keys.

**Version 6.05 (30th November 2018)**

* Scheduled backups create by root can now be designated as allowing restore by virtual server owners, so that they don't have to maintain their own backups.
* When used with Webmin 1.900 or above, Let's Encrypt SSL certificates can be requested for wildcard domains.
* The domain name used in links to a server's website can now be customized to use one of it's aliases instead.

**Version 6.04 (10th October 2018)**

* Dovecot and Postfix per-IP SSL certificate setup can now be configured on a per-template basis.
* Redirects for / created using the UI are automatically adjusted to exclude Let's Encrypt validation paths.

**Version 6.03 (23rd April 2018)**

* Removed support for PHP 4, and added 7.2.
* Before a DNS zone is updated, BIND will be told to freeze it and thaw afterwards. This ensures that dynamic updates are preserved.
* Numerous script installer updates and bugfixes.

**Version 6.02 (3rd December 2017)**

* When adding an alias to a domain with a Let's Encrypt SSL certificate, the cert is automatically updated to include the alias domain.
* Backups from cPanel, Plesk and other control panels can now be migrated even when Nginx is used as a webserver.

**Version 6.01 (3rd October 2017)**

* Multiple remote MySQL servers can now be defined, and selected on a per-domain basis at virtual server creation time. This allows some or all domains to easily use different MySQL hosts.
* Support for rating scripts and viewing existing ratings has been removed, as this was a confusing and rarely-used feature.
* Installable scripts can now be in multiple categories, and the UI has been updated to reflect this.
* Numerous script installer updates.

**Version 6.00 (9th August 2017)**

* Numerous script installer updates.
* Removed support for Qmail+LDAP as a mail server.
* Unexpected server processes running as domain users are now detected and included in the validation report, and can optionally be automatically terminated.
* Added support for using clamdscan for remote virus scanning, so that clamd-stream-client doesn't need to be installed.

**Version 5.99 (18th May 2017)**

* Updates the Node.JS installer to version 7.7.4, DokuWiki to 2017-02-19b, Roundcube to 1.2.4, Mantis to 2.2.0, Moodle to 3.2.2 and 2.7.19, Rainloop to 1.11.0.203, Mantis to 2.2.1 and 1.3.7, Drupal to 8.2.7, phpBB to 3.2, and Wordpress to 4.7.3.
* The SSL certificate for all virtual servers will now be configured for use in the Virtualmin UI on port 10000, so that URLs like https://admin.domain.com:10000/ work without cert errors.
* Chroot jails for virtual server domain owners can now be setup at domain creation time or afterwards. This limits the files visible to SSH sessions and PHP apps run via FPM to the jail directory.
* SSL certificates can now be copied to Dovecot even for virtual servers that don't have their own private IP address.
* SSL certificates that are expired or close to it are displayed on the System Information page.

**Version 5.07 (8th March 2017)**

* Fixed bugs with Let's Encrypt and PHP-FPM support.

**Version 5.06 (14th February 2017)**

* Updated many script installers to their latest versions.
* Added support for FPM as a PHP execution mode, on systems that have a system package which runs an FPM pool server.
* Resellers and domain owners can be granted the ability to migrate backups from other control panels, like cPanel and Plesk.
* Added a button to the Manage SSL Certifcate page and a flag to the modify-web API command to break shared certificate linkage.
* Added the start-stop-script API command to manage the servers behind Ruby and Node.JS scripts.
* Virtualmin will now also generate SSHFP DNS records (for SSH host keys) when it creates TLSA records.

**Version 5.05 (22nd November 2016)**

* Updated several script installers to their latest versions.
* When using DNSSEC, the DS records that need to be created at your registrar are now displayed on the DNS Options page. If the parent domain is hosted by Virtualmin, the DS records will be added automatically.
* Virtualmin can now generate TLSA DNS records for DANE SSL certificate verification, which (when combined with DNSSEC) provide additional assurance to clients that they are connecting to the correct webserver.
* When a Let's Encrypt certificate is automatically renewed, the new cert will be copied to servers like Postfix, Dovecot and Webmin that were using the old version.
* Added configuration options to allow domain owners to see overall system statistics, and run validation on their domains.
* Improved handling of PHP version upgrades on existing systems.

**Version 5.04 (29th July 2016)**

* Updated the phpMyAdmin script installer to versions 4.6.2 and 4.4.15.6.
* SSL versions 2 and 3 and TLS versions 1.0 and 1.0 are disabled by default in the Apache configuration for new domains.
* In the post-installation wizard, if Virtualmin does not know the current MySQL pasword the admin will be prompted to enter it.
* Added a config option to redirect HTTP requests to HTTPS for new domains (if they have an SSL website enabled).
* Backups can now be deleted either from the Backup Logs page, or using the delete-backup API command.

**Version 5.03 (15th May 2016)**

* More bugfixes for Ubuntu 16 and PHP 7 support.

**Version 5.02 (April 2016)**

* Added a new script installer for Rainloop version 1.9.4.415.
* Added the generate-letsencrypt-cert API command, to request and install a cert from Let's Encrypt.
* Fixed support for mail server settings autodiscovery for Outlook clients.
* Added a Virtualmin Configuration setting to request a Let's Encrypt certificate at virtual server creation time.
* Improved support for Ubuntu 16 and MySQL 5.7.

**Version 5.01 (3rd March 2016)**

* Many many script installer updates.
* Fixes for MySQL 5.7 support.
* Let's Encrypt certificates can now match multiple hostnames (when used with Webmin 1.790 and above).

**Version 5.0 (5th January 2016)**

* Many many script installer updates.
* Removed support for Apache versions older than 2.0.
* Backup logs are now associated with the scheduled backup that created them, and are linked in the UI.
* The Excluded Directories page can now also be used to enter MySQL and PostgreSQL databases and tables to exclude from backups.
* The paths to additional PHP versions can now be entered on the Virtualmin Configuration page, under PHP Options. This also makes it possible to run PHP version 7.
* Added a tab to the Manage SSL Certificate page to request a certificate from the free Let's Encrypt service.

**Version 4.18 (14th July 2015)**

* Updated the phpMyAdmin script installer to version 4.4.11 (and many more scripts in the Pro version).
* Added an option for scheduled backups to terminate an existing backup to the same destination, rather than being blocked by it.
* Under Webmin versions 1.780 and above, use /var/webmin for logs and data files instead of /etc/webmin.
* Fixed a bug in the DKIM setup process on CentOS 7 that could cause messages to be sent with invalid signatures.

**Version 4.16 (29th March 2015)**

* Updated the phpMyAdmin script installer to version 4.3.12 and 4.0.10.9 in the GPL version, and many others in the Pro version.
* Fixed a few backup-related bugs triggered when a user is out of quota.
* Added the ability to force re-setup of a cloud backup provider login.
* If the aws command is installed, Virtualmin will call it to perform S3 operations rather than using it's own code. Because this command is developed by Amazon, it can be expected to be reliable in the face of S3 API changes.
* Copying a domain certificate to servers like Dovecot now takes changes in the CA cert into account.
* Fixed creation and display of IDN-encoded domains when using a UTF-8 language.
* Fixed a bug that prevented restores from uploaded files for non-root users.
* Fixed bugs setting up OpenDKIM on CentOS 7 systems.

**Version 4.15 (1st March 2015)**

* Updated the phpMyAdmin script installer to version 4.3.10 in the GPL version, and many others in the Pro version.
* Added the Running Backups page for viewing scheduled and manually started backups that are currently executing.
* The password recovery email address can now be edited for mailbox users via the Edit User page and the modify-user API command. The password reset process can also be triggered from within Virtualmin, as well as using the password recovery plugin.
* Switched from the old dkim-milter package to OpenDKIM on CentOS 7 systems.
* Added support for backing up to Dropbox in the Pro version.

**Version 4.14 (31st January 2015)**

* Fixes bugs that prevent virtual server backups from working correctly in some cases, particularly when dumping MySQL databases.
* Adds support for DMARC DNS record generation.
* In the GPL version, fixes integration with the new theming APIs.

**Version 4.132 (10th January 2015)**

* Fixes bugs in MySQL backups of virtual servers that can cause them to fail with permissions errors.

**Version 4.13 (5th January 2015)**

* Updated a bunch of script installers to new versions.
* A default shell can now be selected for reseller Unix accounts, independent of the domain owner default shell.
* Added a Change Language link the on left menu for easily switching the UI language.
* For new installs, a single logrotate configuration block will now be shared by all virtual servers. For existing systems, whether to use a shared or separate blocks can be set on the Server Templates page.
* The hash format (SHA1 or SHA2) for new certificates can now be selected at creation time, and the default set on the Virtualmin Configuration page.
* Added a Virtualmin Configuration page option to control whether a \* or an IP is used in Apache VirtualHost blocks.
* All operations performed by Virtualmin on files in a domain's home directory are now done with the user's permissions, to prevent attacks involving a malicious symbolic or hard link.
* Added the Disassociate Features page for adding and removing features from a virtual server without actually changing the underlying configuration files.
* Added APIs that allow Virtualmin to define the preferred left and right frame contents for a theme, rather than requiring theme authors to write code for this.

**Version 4.12 (1st November 2014)**

* On systems running Apache 2.4 and above, VirtualHost blocks are now created with an IP address instead of \*.
* Moved all S3 and Rackspace Cloud Files settings from the Virtualmin Configuration page to the new Cloud Storage Providers page.
* In the Pro version, added support for backups to Google Cloud Storage, once an account is added on the new Cloud Storage Providers page.
* Numerous script installer updates in the Pro version.

**Version 4.11 (20th September 2014)**

* Improved support for CentOS 7 and it's ClamAV packages.
* IPv6 addresses in Virtualmin are now supported on all operation systems that Webmin supports them for, rather than just Linux.
* Automatic cleanup of messages in all mailboxes and folders can now be setup in Virtualmin, to enforce an email retention policy or save on disk space.
* If Postfix and Dovecot are setup to use SSL, they will be configured to use the certificate belonging to virtual servers with their own private IP address for connections to that IP.
* Numerous script installer updates in the Pro version.

**Version 4.10 (30th August 2014)**

* Yet more script installer updates.
* Fixes to better support CentOS 7, including an option in the install wizard to enable XFS quotas.
* Ensim migration now includes alias domains and sub-domains.

**Version 4.09 (12th July 2014)**

* Even more script installer updates.
* Added a warning message on the password change forms if a domain's MySQL or PostgreSQL logins would also be effected.
* Added Virtualmin configuration options for commands to run before and after a reseller is created, modified or deleted (pro only).
* Custom fields can now have tooltips.
* A bunch of small bugfixes and feature improvements

**Version 4.08 (12th May 2014)**

* Numerous script installer updates.
* Reseller accounts can now be granted the ability to edit and create other resellers (in Virtualmin Pro).
* DKIM keys can now be set on a domain by domain basis, rather than all virtual servers using the same key.
* Fixed support for the Options directive in Apache 2.4.

**Version 4.07 (7th April 2014)**

* Updated the phpMyAdmin script installer to version 4.1.12.
* Added Norwegian translation updates, thanks to Stein-Aksel Basma.
* Aliases and redirects can now be separately enabled for the SSL and non-SSL websites of a virtual server.
* The Change IP Addresses page can now be used to update the external DNS address of multiple virtual servers, as well as the actual address.
* Alias servers can now be re-pointed to a different target, using the Move Virtual Server page or the move-domain API command.

**Version 4.06 (20th February 2014)**

* Fixed a security hole that allowed any user to re-run the post-install wizard.
* Fixed a bug that excluded mail user home directories from backups.
* Updated the phpMyAdmin script installer to version 4.1.7.
* Added an option to the restore process to delete files in an existing destination domain that were not included in the backup.
* The port used in URLs can now be set independently of the actual port, so that URLs are correct when a reverse proxy is in use.

**Version 4.05 (29th January 2014)**

* Added the fix-domain-permissions API command, for resetting home directory ownership.
* Updated the phpMyAdmin script installer to version 4.1.5.
* Added SRV record support to the DNS Records page.
* Added the Transfer Virtual Server page and transfer-domain API command for copying or moving a domain to another system running Virtualmin.

**Version 4.04 (28th November 2013)**

* Added the Mail Rate Limiting page for restricting the rate at which messages will be accepted by the system, either for local delivery or relaying. This can be useful to prevent spammers from using a hijacked account or website to rapidly send large amounts of email.
* All incoming email to a domain can now be silently BCCd to another address, similar to the existing option for BCCing outgoing messages.
* Added support for migrating domains from DirectAdmin control panel backups.
* Errors that would prevent a virtual server from being restored (such as a missing reseller or parent) are now detected before the long restore process starts.

**Version 4.03 (9th October 2013)**

* Updated the Roundcube script installer to version 0.9.4, and phpMyAdmin to 4.0.6.
* Mail client auto-configuration now supports Outlook as well as Thunderbird.
* Backups from other control panels can now be migrated from their un-compressed or extract directories.
* Multiple virtual servers can now share a single IPv6 address, just as can be done for IPv4. Each domain can either not use IPv6 at all, use one of several shared addresses, or have its own private address.
* When migrating a virtual server from cPanel, Plesk or some other control panel, you can now select if it will be assigned an IPv6 address by Virtualmin.
* The Dallas or Chicago datacenters can now be explictly selected when using Rackspace cloud files.

**Version 4.02 (10th August 2013)**

* German translation updates, thanks to Raymond Vetter.
* Updated the Roundcube script installer to version 0.9.2, and phpMyAdmin to 4.0.5.
* On Apache version 2.4 and above, Virtualmin no longer adds the NameVirtualHost directive as it is deprecated.
* The Change IP Address page can now be used to switch a domain with a private IP to another address.

**Version 4.01 (13th June 2013)**

* Updated the phpMyAdmin script installer to version 4.0.1, and Roundcube to 0.9.1.
* German translation updates, thanks to Raymond Vetter.
* Added the Amazon S3 Buckets page, for setting bucket ACLs, scheduled deletion and Glacier move rules.
* Added an option when restoring virtual servers to have them deleted and re-created before restoring files.
* For domains whose DNS is not hosted by the Virtualmin system, a sensible default set of records is shown on the Suggested DNS Records page.
* When changing the IP address of multiple domains, an option to update the master IP of slave DNS zones is now available.

**Version 4.00 (25th April 2013)**

* Updated the RoundCube script installer to version 0.8.6.
* If Webmin's BIND module is configured to use the SPF type for Sender Permitted From records, Virtualmin will create both SPF and TXT records for domains.
* Added a field to the DKIM page for entering domains to exclude from signing and DNS record creation.
* Added buttons to the Scheduled Backups page to enable or disable backups, and a button on the Edit Scheduled Backup page to clone a backup configuration.

**Version 3.99 (26th February 2013)**

* Updated the Roundcube script installer to version 0.8.5, and phpMyAdmin to 3.5.6.
* Added the ability to enable or disable server-side includes for a specific file extension for virtual servers with a website.
* If PHP 5.3 or higher is installed via a separate package, Virtualmin will now detect it and allow it to be selected on a per-domain or per-directory basis. This is useful for systems whose default PHP package is version 5.2 or older.
* Added a template section to configure the mail client auto-configuration XML, for example if some domains use custom mail servers.
* The key size is now configurable when setting up DKIM or generating a new key.
* Plugin modules available to domain owners can now be configured at the template level, in the Administrator's Webmin modules section.
* When the contact email address for a domain is changed, default mail aliases like postmaster will be updated to the new address.
* When DNS records are modified in a virtual server, all records are synchronized into any alias domains.
* Changed the default email folder names to Junk, Trash, Drafts, Sent and Virus.
* Added an option to the Spam and Virus Scanning page to control what happens when email is sent to a mailbox that is over quota (bouncing or queueing for later).

**Version 3.98 (19th January 2013)**

* Updated the phpMyAdmin script installer to version 3.5.5.
* When disabling a top-level virtual server, an option is now available to also disable all sub-servers at the same time.
* Added the Mail Client Configuration page, for setting up a Thunderbird-style client autoconfiguration URL for all virtual servers.
* Moved all background cron jobs (except existing backups) to Webmin's built-in scheduler, to save memory and reduce the CPU load of launching cron jobs.

**Version 3.97 (6th December 2012)**

* If running Virtualmin in SSL mode with a certificate of less than 2048 bits, a warning is now displayed on the system information page prompting the admin to generate or request a new cert.
* Virtualmin will now prompt the root user after logging in if any virtual servers with unsafe symlink or mod\_php settings are found. Previous versions applied fixes for these security issues automatically, which broke some domains.
* Backups can now be prevented from updating the incremental state, so that ad-hoc backups can be run without interfering with scheduled incremental backups.

**Version 3.96 (22nd November 2012)**

* Added an option to delete old mail in users' trash folder to the Spam and Virus Delivery page, similar to the existing option for deleting spam.
* The spamtrap and hamtrap email aliases now only accept mail from authenticated senders or the local system, to prevent poisoning of the spamassassin rules engine by attackers.
* For virtual servers using CGI or fcgid mode for executing PHP, mod\_php mode is now forcibly disabled to prevent potential security issues. This is also done for all domains at installation time.
* All existing virtual servers using the FollowSymLinks option will be converted to SymLinksifOwnerMatch, to protect against malicious links into other domain's directories.

**Version 3.95 (18th October 2012)**

* When running a scheduled backup from within the Virtualmin UI, pre and post backup commands are now run, and old backups purged if configured.
* Added the fix-domain-quota API command, to bring Unix quotas into sync with what Virtualmin expects.

**Version 3.94 (23rd August 2012)**

* Alias virtual servers that have their own mailboxes and aliases can now be created, rather than always forwarding mail to the destination domain.
* When installing Ruby scripts, dependencies like gcc and libfcgi-devel are now installed automatically if possible.
* The outgoing IP address for email sent from a domain can now be configured to match the domain's IP, when using Postfix 2.7 or above.
* If the system's primary IP address has changed, display a warning message and prompt to update all virtual servers on the old IP.
* Virtual servers can now be backed up to the Rackspace Cloud Files service, in a similar way to Virtualmin's S3 backup support.

**Version 3.93 (13th July 2012)**

* Updated the phpMyAdmin script installer to version 3.5.1, and WordPress to 3.4.1.
* Added new API commands list list-s3-buckets and upload-s3-file for manipulating files on Amazon's S3 service.
* Backups of more than 2GB to Amazon's S3 service now use the mulitpart protocol, which is needed to support large backups.
* The contact email address for a domain can now contain multiple addresses with real names.
* The DKIM feature in Virtualmin now supports OpenDKIM, as seen in Ubuntu 12.04.
* Backups to Amazon S3 can now be to a sub-directory under a bucket, rather than being at the top level.
* The disable-feature and enable-feature API commands now have flags to disassocaite and re-associate features with a domain, without actually updating the underlying configuration files or databases.
* Virtual server owners can now be granted permission to create domains on a single IP address.
* Added an option to the restore form and a flag to restore-domain to ignore virtual servers that have failed.
* The default shell for new virtual servers on Linux systems is now bash, if installed.
* When the SSL certificate for a domain is changed, any domains which shared the old cert but cannot use the new one will be switched to a copy of the old cert file.

**Version 3.92 (3rd May 2012)**

* Updated the phpMyAdmin script installer to version 3.5.0.
* Added a button to the Edit User page to re-send the signup email.
* Numerous bugfixes, including one for high CPU load by lookup-domain-daemon.

**Version 3.91 (31st March 2012)**

* System statistics graphs now include the number of email messages received, bounced and greylisted. Statistic are also categorized by type, and when multiple stats are plotted at once the same axis is used for stats of the same type.
* The S3 backup support has been ported from Virtualmin Pro, allowing GPL users to backup domains to Amazon's paid storage service. Also, added a Virtualmin Configuration option to use an alternate S3-compatible backup service instead of Amazon's.
* Updated the phpMyAdmin script installer to 3.4.10.1, and phpPgAdmin to 5.0.4.
* When cloning a virtual server with a private IP, a new address for the clone can be entered instead of relying on automatic IP allocation.
* When calling the remote API with the json, perl or xml format flags, multiline mode is automatically enabled so that the output from commands can be correctly parsed. API errors are also returned using the selected format.

**Version 3.90 (27th January 2012)**

* Updated the phpMyAdmin script installer to version 3.4.9, WHMCS to 5.0.3, and RoundCube to 0.7.
* The script installer update process can now detect new installer releases that don't change the application version.
* Added the modify-proxy API command, to update an existing proxy balancer.
* The warning when multiple SSL sites share the same IP can now be disabled if your webserver supports SNI, via a new option on the Virtualmin Configuration page.
* Backups now create a .dom file in the same directory as the tar.gz file, which contains information about the domains included and is used to speed up the restore process.
* A new option on the Virtualmin Configuration page allows domain owners to restore backups made by root for their own domains. Because root backups are considered secure, the domain owner can restore all settings, including the Apache and DNS configuration.
* Scheduled backups now have a separate deletion policy for each destination, instead of the same policy being applied to all destinations. For example, you could delete local backups after 5 days and remote backups after 10.

**Version 3.89 (1st December 2011)**

* Updated the phpMyAdmin script installer to version 3.4.7, and phpPgAdmin to 5.0.3.
* When creating or restoring a virtual server with a database that already exists, you now have the option to simply associate that database with the server rather than causing the server creation to fail.
* The list of sub-servers under a top-level server has been moved from the Edit Virtual Server page to the List Sub-Servers link on the left menu.
* Added the --skip-warnings flag to the modify-domain API command, to ignore warnings related to new features from a plan change.
* MySQL connection limits for domain owners and mailboxes can now be set at the template level, and will be applied to new virtual servers and mail users with database access.
* When the email feature is disabled for a domain, all mail aliases are now removed and saved by Virtualmin. If email is later re-enabled, aliases will be restored.
* Expanded the Virtualmin plugin API to allow a plugin to replace the core Apache website feature, for example with Nginx.
* Backups now include the Dovecot control files of users when they are stored outside the home directory, so that message UIDs are preserved when the domain is restored on another system.
* The post-installation wizard now prompts for you to select a MySQL configuration size appropriate for the available memory on your system, and applies it to /etc/my.cnf.

**Version 3.88 (10th September 2011)**

* Updated the phpMyAdmin script installer to version 3.4.3.2.
* When a virtual server is disabled, any cron jobs run by its owner or mailbox users are also disabled.
* An IPv6 address that is already active can now be used when creating a virtual server.
* Checking for new script updates is now enabled by default on new installs and upgrades, unless explicitly disabled by root. Added a tab to the Validate Virtual Servers page for fixing file ownership and permissions problems.
* Storage of plaintext passwords for virtual servers and mailboxes can now be disabled on a per-template basis. Virtualmin will instead store only hashed passwords in multiple formats, which prevents passwords from being compromised if the system is hacked.

**Version 3.87 (9th July 2011)**

* Updated the Roundcube script installer to version 0.5.3, WHMCS to 4.5.2, and phpMyAdmin to 3.4.2.
* Added the new API command set-global-feature to turn features and plugins on and off from the command line.
* The last IMAP, POP3 and SMTP logins for mailbox users are now tracked by Virtualmin, and can be viewed on the Edit Mailbox page and in the output from the list-users API command.
* When an alias domain with a website is disabled, it is now removed from the parent domain's Apache virtualhost.
* Added the list-backup-logs API command to report on previous backups run from the web UI, API or on schedule.
* Added the --plan-features flag to the modify-domain command, to enable features based those selected for the plan.
* The virtualmin configuration check now ensures that the system has at least 256 MB of real (non-burstable) memory, and displays a warning if total memory is too low.
* Updated the modify-php-ini API command to set variables in the Apache configuration as well.

**Version 3.86 (2nd June 2011)**

* Fixed SSH backup, mass script upgrade and password XSS bugs.
* Added a field for pasting in the text of a domain's CA certificate.
* The default DNS TTL for one or more domains can now be changed via the --ttl flag to the modify-dns API command.

**Version 3.85 (4th May 2011)**

* Added a script installer for WHMCS 4.4.2. This is a commerical product, so you will need to purchase a licence for it before using the installer though.
* Comments are now shown and can be edited on the DNS Records page.
* Added support for spam and virus filtering offloading to the Cloudmin Services page.
* Records can now be manually edited by the master admin on the DNS Records page, in BIND record format.
* Added a checkbox to the Custom Fields page to control if each field appears on the List Virtual Servers page.
* Unix UIDs and GIDs for domain owners and mailboxes are now tracked when deleted to prevent re-use.
* The HTTP and HTTPS ports for a virtual server can now be changed using the --port and --ssh-port flags to the modify-web API command.
* As part of the post-install wizard process, the primary DNS server hostname is now prompted for and validated. This ensures that DNS zones created by Virtualmin have usable NS records.

**Version 3.84 (5th March 2011)**

* Email to users that are with 100 kB of their quota is now bounced back to the sender, to prevent the mailbox from completely filling up and breaking Dovecot's avility to delete messages.
* When adding an IPv6 address to a virtual server, an reverse DNS entry for the IP is also created if the IPv6 reverse zone is hosted on the Virtualmin system.
* The create-domain API command now lets you set a custom group name for a new virtual server with the C&lt;--group&gt; flag. If a custom username is set, the group name defaults to matching it.
* Removed the 'Domain \*' directive from the DKIM configuration, which was breaking signing for domains other than those hosted by Virtualmin (such as email from cron).
* Added the scheduled validation tab to the Validate Virtual Servers page, for setting up automatic email notification when Virtualmin detects problems with the configuration of any server, or the global configuration.
* Added the get-command API operation to fetch the parameters of another API command, for use by authors of higher-level APIs. Also updated the list-commands operation to make its output more parsable.
* Removed the restriction on database names that start with a number, for MySQL.
* Added $WEBMIN\_PORT, $WEBMIN\_PROTO, $USERMIN\_PORT and $USERMIN\_PROTO template variables.
* Added the Clone Virtual Server page to duplicate an existing domain, and the clone-domain API command.
* Ported the script installers feature from Virtualmin Pro, but with support for only phpMyAdmin, phpPgAdmin, Roundcube and Squirrelmail.

**Version 3.83 (11th January 2011)**

* Added a link to the Mail Aliases page to also show normally hidden internal aliases, such as those for Mailman and spam traps.
* Improved support for backing up to and restoring from IPv6 SSH and FTP servers.
* When a virtual server's plan is changed on the Edit Virtual Server page, quotas are also updated to match those from the plan.
* German translation updates, thanks to Thomas Suess.
* MySQL logins and databases and DNS zones can now be created on a central Cloudmin provisioning server, instead of on the Virtualmin system. This allows Virtualmin to be run on a system with less RAM, disk and CPU, while still providing the same functionality.

**Version 3.82 (2nd November 2010)**

* Added a template option to specify file types to not perform variable substitution on when copying from the /etc/skel directory.
* Virtual server backups can now be to multiple destinations, both local and remote. The time-consuming process of compressing each domain is done only once, and the resulting file then transferred to each destination.
* The maximum message size to check for spam can now be set even when regular spamassassin is used, as well as when using spamc.
* When Webalizer is enabled for a domain, allowed users for the /stats URL path can now be edited on the Protected Web Directories page.
* Fixed DKIM support to handle large numbers of domains.
* Added byte quota sizes to the list-domains, list-users and list-resellers API calls, which are easier for code to parse.

**Version 3.81 (9th October 2010)**

* Parallel bzip2 can now be used for backups if the pbzip2 command is installed, via a new option on the Virtualmin Configuration page.
* Moved all IP-address related options from the Edit Virtual Server page to the Change IP Address page, where they fit in better and are easier to understand.
* Ported the Re-send Signup Email feature from the Pro version of Virtualmin.
* Added a server template option to not change the MySQL username when a domain's administration username is changed, and fixed bugs with a similar option for the MySQL password.
* The database username and password for a domain can now be changed using the new API commands modify-database-user and modify-database-pass.
* When Virtualmin sends a backup to an SSH or FTP destination, it now also creates a .info file that contains meta-infomation about each backup. When restoring only this file needs to be downloaded to list the contents of a backup, which avoids the need to download the complete backup twice.
* Added links to the Manage SSL Certificate page to download the key in PEM or PKCS12 format.
* DKIM signing of outgoing email can now be enabled on the new DomainKeys Identified Mail page. This also configures verification of signatures on incoming email.
* Added an Italian translation, thanks to Andrea Di Mario.

**Version 3.80 (11th August 2010)**

* Alias domain DNS records are now copied from the target domain at creation time, rather than being created from the selected template.
* Internationalized domain names are no longer converted to UTF-8 for output from API commands, to avoid the perl "wide character in print" warning.
* The interval between bandwidth monitoring cron job runs can now be configured.
* Lots of small bugfixes.

**Version 3.79 (4th June 2010)**

* Added options to the Module Config page for defining a link to additional documentation on the System Information page.
* The website documents directory for a virtual server can be changed from public\_html on the Website Options page, and using the modify-web API command.
* Numerous small bugfixes.

**Version 3.78 (13th April 2010)**

* FTP backup transfers are now re-tried up to 3 times, configurable on the Module Config page.
* Added a plan and domain-owner level restriction to prevent creation of virtual servers under other user's domains.
* Added the --simple-multiline flag to the list-domains API command, for outputting most of the information about virtual servers significantly faster.
* Backups can now be restored from uploaded file, using a new source option on the restore form.
* PHP scripts can now be run with domain owner permissions, via the new Website Options page. This feature was ported from the Pro version.
* Added fields to the Website Options page for changing the Apache log file locations, and added flags to the modify-web API command to do the same thing.
* Domain owners can now be prevented from using the Website Redirects page via a new edit capability restriction.
* Added user%domain as an option Unix username format.
* Quotas are now disabled before importing a migrated database and re-enabled afterwards, to prevent quota issues from breaking the import process.
* Added the New Feature Log page, for showing all major changes in previous Virtualmin versions.
* The modify-dns API command can now add and remove slave DNS servers for virtual servers.

**Version 3.77 (3rd February 2010)**

* Fixed the backup and restore for alias websites, which were previously not always restored correctly.
* Added --autoreply-start, --autoreply-end and --autoreply-period flags to the modify-user API command, for changing other autoresponder settings.
* Added a Module Config option under Defaults for new domains to set the characters which random passwords are made up of.
* The MySQL default collation order for new databases can now be set on the database creation form, and in the MySQL section of a server template.
* Added the Website Redirects page, for easily creating aliases from URL paths to directories, and redirects from URL paths to other websites.
* Added a 'status' section to the 'info' API command, to get the collected status of servers like Apache and BIND.
* When lowering a virtual server's disk quota below the current usage a warning is displayed asking the user if he really wants to do that.
* Added a field to the backup form as the backup-domain API command to exclude some files from each domain's backup.
* Separated the creation of a CSR from a self-signed certificate on the Manage SSL Certificate page.

**Version 3.76 (26th December 2009)**

* Added the --passfile flag to all domain, user, reseller and extra admin creation and modification commands, for reading the password from a file so it doesn't show up in ps output.
* Added a DNS template option to control if an NS record is added for the Virtualmin system.
* Disk quota monitoring now has an option to send email to mailboxes who are over quota.
* Backups and restores made by domain owners are now included in their bandwidth usage.
* Added Module Config options to limit the number of concurrent backups, which defaults to 3. This prevents system owners from overloading the machine with their scheduled backups.
* If Apache supports SNI, make the warning about clashing certs less dramatic.
* When a mailbox user is created, make his spam, virus and trash directories under Maildir so that they show up in the IMAP folder list by default.

**Version 3.75 (12th November 2009)**

* Added a domain owner level capability restriction to prevent editing of external IP addresses.
* When a sub-server is converted to a top-level server, files from /etc/skel are copied into its home directory.
* When a virtual server is disabled, all extra admin logins are disabled too.
* When a mailbox user is delete, his Dovecot index and control files are removed too in order to avoid clashes with future users with the same name.
* Added a Module Config setting to make collection of all available packages optional.
* Added a logrotate template-level option for additional files to rotate for new domains.
* Added the import-database API command, for associating an existing un-owned database with a domain.
* The Manage SSL Certificate page can now be used to copy a domain's cert and key to Dovecot or Postfix.
* Concurrent backups to the same destination are now no longer allowed, due to the potential for corruption and odd partial failures.
* Added a Module Config option to always show output from pre and post virtual server creation commands.

**Version 3.74 (10th October 2009)**

* If Postfix relay domains are stored in a hash, update it instead of adding to relay\_domains in /etc/postfix/main.cf.
* Additional allowed MySQL client hosts are now included in backups.
* Added a warning to the configuration check for systems behind a NAT gateway with an incorrectly configured DNS IP address.
* Added options to the Module Config page for selecting which columns appear on the List Virtual Servers page, including new ones like the reseller, email address and extra admins.
* The contents of mailboxes from Windows Plesk backups are now properly migrated.
* Updated the French translation, thanks to Houssin Regis.
* Added validation to prevent SSL from being enabled on a virtual server with an invalid certificate or key.
* Extra administrators can now change their own passwords, via a new link on the left menu.
* Added a DNS template option to control which A records are added to new domains.
* Removed the 'Bring up virtual interfaces?' module configuration option, as use of an existing interface can now be done on a per-domain basis.

**Version 3.73 (23rd August 2009)**

* Fixed a bug that can cause over-counting of bandwidth use when clients use POP3.
* On Sendmail systems with outgoing address mapping enabled, the generic domains file is now correctly updated.
* Added a domain-owner leven restriction to prevent changing of a virtual server's password.

**Version 3.72 (12th August 2009)**

* Added support for JSON, XML and Perl output to the remote API, enabled with the json=1, xml=1 or perl=1 URL parameters.
* Deprecated the feature to write logs via a program, as logging to /var/log/virtualmin is now the default.
* Added validation for incorrect SuExec Apache directives.
* If a single database backup for a virtual server fails, others will still be backed up.
* Added a bandwidth monitoring option to include relayed email, thanks to Collin from Bisnet.
* Added Plesk 9 migration support, which was accidentally left out of previous releases.

**Version 3.71 (26th July 2009)**

* Fixed several bugs related to the switch to running more commands as the domain owner, including several related to backups.
* Added an option to the backup form for selecting virtual servers by plan. Also added the --plan flag to the backup-domains command.
* Corrected a mis-feature that prevented alias virtual servers with no home directory from being backed up in the new format.
* When a virtual server is restored from a backup, the pre and post-change commands are called with $VIRTUALSERVER\_ACTION set to RESTORE\_DOMAIN.

**Version 3.70 (4th July 2009)**

* Bandwidth usage by date or month can now be graphed for sub-servers.
* Partially completed backups (where only some domains failed) are now shown in the backup logs.
* Added the Convert Alias Server page to change an existing alias virtual server into a sub-server.
* Moved the settings for which Webmin modules are available to virtual server owners from the Module Config page to a new section in server templates, so that it can be adjusted on a per-template basis.
* Email to domain owners on virtual server creation can now include variables like $PLAN\_NAME, $RESELLER\_NAME and $PARENT\_DOM.
* When a virtual server is disabled for exceeding its bandwidth limits, all sub-servers will be too. Similarly, they will be re-enabled if the server falls below its limit.
* Added support for migrating cPanel addon domains properly.
* Added a template option to disable addition of also-notify and allow-transfer blocks to new DNS domains.
* LXadmin backups can now be migrated into Virtualmin servers, preserving web content, databases, mailboxes and mail aliases.
* Updated all code that reads or writes to files in a virtual server's home directory to operate with the user's permissions, which prevents use of malicious links to access root-owned files.

**Version 3.69 (14th May 2009)**

* Added buttons to the Manage SSL Certificate page to copy a domain's cert and key to Webmin or Usermin.
* SpamAssassin's server filter spamd can now be activated from within Virtualmin, using a new button on the Spam and Virus Scanning page. You can also turn it on with the --enable-spamd flag to the set-spam API script.
* After Virtualmin is installed and the master administrator logs in for the first time, a wizard allowing basic configuration of memory and speed tradeoffs will be displayed. This allows the system to be tuned for web, mail or database hosting, depending on how the admin intends it to be used.
* ClamAV's server scanner clamd can now be enabled on FreeBSD from within Virtualmin.
* Netmasks can now be optionally specified for IP allocation ranges, rather than being always inherited from the primary interface's netmask.
* All backups made manually, on schedule or from the command line are now logged, and can be viewed using the new Backup Logs page.
* Moved the option for a secondary group for domain owners to the template level.
* Greylisting using Postgrey can now be setup using Virtualmin, via the new Email Greylisting page. In addition, whitelists for SMTP servers and email recipents can be managed. This feature was ported from the Pro version.

**Version 3.68 (17th April 2009)**

* Added the SSH server status to the System Information page, including the ability to stop and start it.
* Added a Module Config option to control if default features come from plan or Features and Plugins page.
* Added the --no-alias flag to list-domains.pl, to show non-alias domains.
* Made the Website Options page available to domain owners, although only with limited fields available.
* When creating a sub-server that is a sub-domain of it's parent, DNS records for the new domain will be added to the parent's zone.
* Parent virtual server details are now available in sub-server post-creation scripts in the $PARENT\_VIRTUALSERVER\_ environment variables.
* Virtual servers can now have IPv6 addresses in addition to v4, on Debian, Ubuntu, Redhat, CentOS and Fedora systems. Virtualmin will configure BIND to add IPv6 address records, and Apache to accept connections to the IPv6 address. All pages that API commands that deal with addresses have new fields and options for an optional IPv6 address.
* Added the --purge and --strftime flags to backup-domain.pl, to allow automatic deletion of old backups and date-based backup destinations.

**Version 3.67 (24th March 2009)**

* The bandwidth limit and using variables in all email templates (BW\_LIMIT and BW\_USAGE) are now formatted in MB or GB, instead of just being a number of bytes.
* Added a Module Config option for an alternate command to use when moving a virtual server's home directory, instead of mv.
* Added Module Config options for commands to be run before and after creating, deleting or modifying an email alias.
* Mail files are now always included in backups and restores, even when under /var/mail.
* If a plan specifies features to be granted to domain owners, those features will be enabled on the Create Virtual Server page when the plan is selected. Otherwise, defaults set on the Features and Plugins page will be used.
* Added --email-only flags to the list-users.pl and list-domains.pl API scripts.
* Added a button to the Edit Account Plan page to create a new plan cloned from an existing one.
* Added a Module Config option for additional gzip command-line parameters, like --best or --rsyncable.
* Converted libraries to use Webmin's new WebminCore module, where available. This leads to a signficant improvement in memory use and speed.
* Added support for migrating Plesk 9 backups, which have a different format to Plesk 7 and 8.
* Added option to not add MX records for secondary mail servers.
* Added the --random-pass flag to create-user.pl, to generate a password randomly.
* Added a Module Config option to disallow switching to Usermin as a mailbox user by domain owners.

**Version 3.66 (14th February 2009)**

* Added the info.pl command line script, for dumping general information about Virtualmin.
* Links to per-domain SpamAssassin configurations now include the domain's config file, which allows each domain's settings to be separately managed.
* Automatic spam and virus folder clearing now respects custom folder names.
* When a domain is restore on a system with a different Apache log file location, its virtualhost is updated to use the target system's paths.
* Ported all API scripts for functions supported by Virtualmin GPL to the Pro version, to allow almost any action that can be performed via the web UI to be done on the command line or via an HTTP request.
* Add parameters to the modify-dns.pl command-line API to add and remove DNS records for multiple domains at once.
* Added the get-dns.pl command-line script to dump DNS records for a virtual server.
* Moved the field for setting the external IP address (typically for use in DNS records) from the DNS Options page to Edit Virtual Server.
* Moved the --dns-ip and --no-dns-ip options from the modify-dns.pl API script to modify-domain.pl and create-domain.pl.
* The default TTL for DNS domains (set using the $ttl line in the zone file) can now be configured in server templates.
* Added commands to be run before and after scheduled backups, settable on the Edit Scheduled Backup page.
* Added a Module Config field under Advanced options for specifying the path to an alternate tar command.
* Extracted all settings related to default quotas and limits from templates, and moved them into the new Account Plan objects. These can be created by both the master admin and resellers, and selected for new or existing virtual servers. Also added a command-line API for plan management.

**Version 3.65 (20th January 2009)**

* Mail files are now included by default in backups made and restored using backup-domain.pl and restore-domain.pl. This can be disabled with the --no-mailfiles parameter.
* Added validation to the configuration check to detect MySQL or disk quota synchronization that conflicts with Virtualmin.
* Dynamic IP, quota and backup emails now contain a link to Virtualmin, using a URL configurable on the Module Config page.
* When alias virtual servers are created, files from /etc/skel are no longer copied into their home directories as they are not needed.
* When a virtual server with a self-signed SSL certificate is renamed, the certificate is re-generated to match the new domain name.
* Domain owners can now be granted permissions to edit the remote MySQL client hosts for the databases they manage.
* Added an option on the Spam and Virus Delivery page to enable spamtrap and hamtrap aliases on a per-domain level, to which spam and non-spam can be forwarded by users for addition to SpamAssassin's learning engine. These can also be enabled for new domains in server templates, and changed using the modify-spam command-line API.
* The delete-domain.pl command-line script now accepts multiple --domain parameters, and can also delete virtual servers by username with the --user parameter.
* For new Virtualmin installs, Apache logs are now stored under /var/log/virtualmin and just linked from the ~/logs directory. This avoids problems with Apache crashing when the logs directory is deleted.
* Added the 'View website via Webmin' link on the left menu, for viewing a domain's website before it has been registered in DNS.
* Added a Module Config option to have down services automatically restarted by the regular status collection job.
* Directories containing initial files for virtual servers (like /etc/skel) are now included in Virtualmin template backups.

**Version 3.64 (8th December 2008)**

* On systems running Postfix with spam filtering enabled, the ownership and permissions on the procmail wrapper command are validated as part of the configuration check to ensure that it is setuid and setgid to root.
* When a virtual server with slave DNS zones is disabled, then will be removed from slave servers to properly prevent DNS resolution of the domain. When it is re-enabled, the slave zones will be re-created.
* Optimized the spam and virus deletion screen to deal better with large folders, by processing only 100 messages at a time.
* Added a check to ensure that the Webalizer template configuration file actually exists.
* Multiple virtual servers with SSL enabled can now share the same IP address. However, Virtualmin will display a warning message if a new domain does not match the hostname in the certificate for an existing domain.
* UCC certificates and CSRs can now be created and displayed on the Manage SSL Certificate page.
* Domain owners can now restore from files under their virtualmin-backup directory, subject to regular Unix permissions.
* If the post-modification or creation script for a domain fails, its output is now displayed as an error message.
* Validation now checks that each domain's Unix user and group quotas match what Virtualmin expects.
* Added a DNS template option to have a DNSSEC key generated for new domains, and records automatically signed. Requires Webmin version 1.443 or later though.
* Virtual server backups can now be in ZIP format, by changing the 'Backup compression format' option on the Module Config page. TAR format is still recommended though, as it better preserves Unix filesystem attributes.
* When submitting a new SSL certificate and key, they are checked to ensure a modulus match, ensuring that they were generated and can be used together.

**Version 3.63 (16th October 2008)**

* Ported the Change IP Addresses page from Virtualmin Pro, to allow updating multiple domains at the same time.
* Plugins can now define additional inputs to appear on the Create Virtual Server page and accepted by create-domain.pl, for options specific to the plugin's feature.
* When the user or group for a domain is changed, references to the old user or group in lgorotate.conf are updated to the new values.
* When setting up clamd, the provided example init script is copied instead of bring modified, so that it can be safely replaced by RPM upgrades.
* Changed the meaning of the 'Can choose database names?' server owner restriction to just prevent modification of the domain's default database, instead of blocking all database management.
* Mail aliases that forward to all users in a domain can now be created, using the Edit Mail Aliases page.
* SSL keys with passphrases can now be installed on the Manage SSL Certificate page, and trying to use a key that needs a passphrase without one being entered will display an error.
* The clamd-stream-client virus scanner can be selected to offload the actual scanning process to clamd on a remote system, if you have it installed.

**Version 3.62 (17th September 2008)**

* Added a new sort mode (used by default for new installs) to order virtual servers by domain name, but with sub-servers indented under them.
* Included domains for SPF for new virtual servers can now be set in server templates.
* Added a button to the Edit Mailbox page for logging into Usermin as a user without having to enter their password. Requires Webmin 1.440 or later though.
* On FreeBSD, the Gnu tar command gtar is used in preference to regular tar when installed. This allows incremental backups to be performed.
* When MySQL is on a remote system, the 'show table status' command is used to get an approximate size for each database.
* Added the list-domains.pl API script from Virtualmin Pro.
* Added a Module Config option to have only one spamassassin process run at a time.

**Version 3.61 (22nd August 2008)**

* When the virtualmin --help command is run, it now outputs a list of all available API commands with short descriptions, broken down into categories.
* Extra administrators can now have contact email addresses, which can be used when sending email to all domain owners. These can be set via the web interface, or the command-line API.
* Added a Module Config option in the advanced section to change the path for the API helper command, and improved automatic selection of a path if the default directory /usr/sbin is not writable.
* Ported across all help files from the Pro version, so that all pages and most links now have help.
* Custom links can be limited to virtual servers with a specific template if you have any custom templates defined, for more control over when each link is displayed.
* Backups now include any custom template used to create virtual servers, which allow domains to be restored even on systems that do not yet have the original templates.
* When a virtual server's IP address is changed, the addresses of all alias domains are updated to match.
* The Website Options page now has a field to enable matching all sub-domains for the virtual server's website, via a \*.domain.com DNS entry and Apache server alias directive.
* If a backup is taken on a system that uses ~/mail for user folders and restored on one using ~/Maildir, they will be properly converted during the restore (and vice-versa).
* Preserve encrypted passwords when backing up domains, in case they don't match the plaintext password stored by Virtualmin. Also, have validation report an error in the case of a mismatch.
* Updated Dutch and German translations, thanks to Gandyman and Martin Mewes respectively.

**Version 3.60 (23rd July 2008)**

* Added a Module Config field for a custom command to get memory and swap information.
* Included domains can now be specified when editing SPF information, and IP networks can be entered.
* Added the check-config.pl command line script, for validating the configuration.
* Added Module Config options for a hosting provider logo and link.
* Added an option on the Module Config page for an alternate GPL to Pro upgrade URL.
* The default limit on the number of non-alias domains can now be set in server templates.
* DNS aliases named 'webmail' and 'admin' are now created in all new virtual servers by default, and Apache is configured to redirect requests for them to Usermin and Webmin by default.
* Added the Global Variables page under the System Customization category, for creating variables that can be used in all templates.

**Version 3.59 (1st July 2008)**

* Plesk 7 backups can now be migrated as Virtualmin domains, using a new backup file type on the migration page.
* Allow the default shell to be set on a per-template basis.
* Added a complete Spanish translation, contributed by Ignacio.
* The bandwidth usage graphs can be restricted to showing just servers that are over their limits, using a new mode link.
* Added a Module Config option to have MySQL users and permissions added to multiple servers, for use with replication or NDBCluster.
* Allow the default shell to be set on a per-template basis.
* Move some rarely-used options to the Advanced section of the Module Config page.
* Additional manually configured nameservers can now be more easily entered in server templates, in the BIND DNS domain section.
* Converted all command-line API scripts to use POD format documentation.
* Added the Virtualmin API helper command /usr/sbin/virtualmin, which lets you more easily call API scripts with a command like "virtualmin list-domains --multiline". Help on commands can also be displayed with like "virtualmin help list-domains".
* Purging of old backups made to FTP or SSH servers is now supported, for FTP servers that use Unix directory listings and SSH servers that allow commands to be run.

**Version 3.58 (9th June 2008)**

* Mailbox users' passwords are now shown in a separate popup window, rather than on the Edit Mailbox page where anyone can see them.
* Added links from the Status section of the System Information page to the Webmin modules for their particular servers, and additional stats where available.
* If a migrated domain needs features that are not supported by the system, a warning message is displayed.
* All new SSL certificate and key files how have 700 permissions, so that only the domain owner and Apache (which starts as root) can read them.
* All Virtualmin command-line and remote API programs now participate in Webmin logging, so their invocation and changes can be viewed in the Webmin Actions Log module.
* Plesk sub-domains are now imported as Virtualmin sub-servers.
* The $DNS\_SERIAL variable can be used in templates, as an initial serial for new domains.
* Improved the migration of Plesk mailbox aliases and forwarding, and protected directories.
* Fixed support for international domain names using non-european character sets (like Chinese and Cyrillic) in newer versions of Perl.
* Completely re-designed the Virtualmin backup UI, to support multiple backup schedules and allow domain owners and resellers to schedule their own backups (subject to limits configured by the master administrator). Domain owners can now also restore backups of their home directories and databases. Backups can either be full or incremental, to speed up the process of backing up large but infrequently-changing sites.
* By default, new DNS zones only allow localhost, hosts on the local network and known slaves to transfer records.
* All text in the Virtualmin user interface is now available in Dutch, thanks to Gandyman.
* The remote hosts from which connections to MySQL are allowed can be easily edited on a per-domain basis on the Edit Databases page, in the new 'Remote hosts' tab. These apply to the domain owner and any mailboxes with database access.
* Old local file backups created using date-based filenames can now be automatically deleted if older than a selected number of days, configurable on the Scheduled Backups page.

**Version 3.57 (13th May 2008)**

* Post-change scripts have access to the settings of a virtual server before it was changed in the VIRTUALSERVER\_OLDSERVER\_\* environment variables.
* If MySQL or PostgreSQL have no root password set, display a warning during the configuration check.
* When scheduled backups are sent to their domain owners as well, each owner only receives the backup messages related to the domains they own.

**Version 3.56 (21st April 2008)**

* Added links to the Custom Fields feature from the Pro version, which lets you add additional information to virtual servers.
* The alias to bounce all mail to unknown addresses in a domain is no longer created when using Postfix, as it does not appear to be necessary.
* Reduced the memory needed to migrated Plesk backups, by not reading the whole source file into RAM for parsing.
* When creating a sub-server whose prefix is in use by another domain, a non-clashing prefix for users is automatically selected.
* International domain names are now automatically converted to the IDN xn-- format when creating, and converted back for display.
* The Virtualmin master administrator can now control which domains and users are limited to their home directories when logging in via FTP, using the new FTP Directory Restrictions page.

**Version 3.55 (8th April 2008)**

* Ported the migrate-domain.pl script from Virtualmin Pro, which allows migration from cPanel, Plesk and Ensim at the command line.
* When migrating a domain from other control panel like Plesk, you can now select to have to downloaded directly from a remote FTP or SSH server. The migrate-domain.pl command-line script also allows use of ftp:// or ssh:// URLs for backup sources.
* If the skeleton directory contains a public\_html sub-directory, it is copied to a sub-domain's web pages directory when the domain is created.
* For alias domains whose virtusers are always copied from the target, no home directory is created (as it isn't needed).
* The path to the public\_html and cgi-bin directories is now stored in each new domain's data file, so that they are correctly preserved when the path is changed in the template, or the domain is moved to another system with a different directory name.
* Basic Exim support, thanks to Bill Moyers and John Gray.
* When migrating a cPanel, Plesk or Ensim backup, the original domain name can now be worked out automatically, as long as the backup contains just one.
* For new installs, new features in older versions are not shown on the System Information page.
* Fixed the modification of Webalizer and Logrotate config files when a domain's Apache logs are outside it's home directory.
* Apache logs outside a domain's home directory are now included in backups and restores.
* Ported the delete-user.pl command-line script from the Pro version.
* Added the --delete-existing flag to migrate-domain.pl, to remove any existing virtual server with the same name before re-migrating.
* The background collectinfo.pl cron job can be run less frequently or disabled using a new Module Config page option.
* Ported the Move Virtual Server feature from the Pro version, which allows domains to be moved under different parents or converted from sub-servers to top-level.
* Ported the Module Config option to preload Virtualmin libraries from the Pro version, which can speed up the web-based UI. This is not enabled by default on regular manual installs though.

**Version 3.54 (17th March 2008)**

* Fixed bugs in Plesk migration, and added automatic detection of alias domains in the original backup. SSL certificates and keys from the backup are also migrated. Also added initial support for Windows Plesk backups.
* A domain's private IP and external IP for DNS are now also included in SPF records.
* Added a check for Sendmail not accepting email on the external interface, which is the default in some distributions.
* When a sub-domain is created with the same name as a record in the parent domain, the record is not removed whem the domain is deleted.
* When using Qmail, domains with the same name as the system's primary hostname (typically from the control/me file) are not longer allowed, as they break Virtualmin's use of the virtualdomains file.
* When email is disabled for a domain, only MX and mail records pointing to the Virtualmin system or known secondaries are removed.

**Version 3.53 (26th February 2008)**

* Apache log files outside a domain's home directory are renamed and deleted when appropriate.
* Hitting Stop in the browser during the creation of a virtual server or some other action will no longer cancel it, which prevents domains from being half created.
* When the Apache virtual host \*.domain exists and a new virtual host for something.domain is created, it is placed before \*.domain in the Apache config file to give it precedence.
* SSL can now be enabled for domains without a private IP address, for a single virtual server on each shared address. This means that on a typical single-IP system, you can have one SSL website.
* The logrotate configuration is now validated by Virtualmin, to detect duplicate entries that can cause rotation to stop working.
* Vpopmail systems with so many domains that letter-suffix directories under /home/vpopmail/domains are needed are now handed by Virtualmin.
* When a DNS domain is disabled, all records in it that use the domain name are renamed too, to keep BIND happy.

**Version 3.52 (7th February 2008)**

* When restoring a virtual server that uses features not supported on the system, a warning will be displayed listing the missing or disabled features.
* When editing a virtual server without a private IP address, one can be added that is associated with an existing interface on the system.
* Website FTP access users can be created, who have the same permissions as a domain owner but are limited to FTP access for editing web pages. This feature was ported from the Pro version.
* When a domain is restored to a system with a new IP address, the IP in the SPF record is updated. Also, any NS records are updated to match the new system.
* When a virtual server is moved under a new owner, the Apache directives that control which user CGI scripts run as are properly updated.
* Re-wrote all code that locks configuration files managed by Virtualmin. This improves the coverage of Webmin logging, and makes it much safer to perform multiple operations on the same or different domains at once.
* Outgoing email relayed via the Virtualmin system is now counted towards the sender's domain's bandwidth limit, unless disabled on the Bandwidth Monitoring page.
* New features in this version of Virtualmin and any plugins are shown on the System Information page, if using the Virtualmin theme.

**Version 3.51 (15th January 2008)**

* Include the total backup time in the scheduled backup email.
* Added back the old one-file-per-domain backup format, which is more friendly to rsyncing the home directory separately.
* Moved the default quota for mailboxes to the 'Mail for domain' section of templates.
* Shell special characters like ; and &amp; are no longer allowed in mailbox usernames.
* Ported the Change IP Address page from Virtualmin Pro.
* When using Postfix with the sender\_bcc\_maps directive, a new option on the Module Config page can be used to allow BCCing all sent email in some or all domains to a separate address. This can be set on the Email Settings page, or by default for new domains in Server Templates.
* Fixed a bug that prevented mail for users with @ in their names and mbox-format mail files from being properly displayed on systems using Postfix.
* When an alias domain is created, the primary domain can now update its configuration as needed. This allows AWstats to work when accessed via the alias domain.

**Version 3.50 (19th December 2007)**

* Advanced autoreply options are hidden by default, to make the alias form less confusing.
* Added a Module Config option to make the Unix group name for a new domain always follow the username, and made group name selection more consistent across creation methods.
* Moved the Administration username field into the first (visible) section of the Create Virtual Server page.
* Cron jobs created by Virtualmin will still be recognized even if manually modified to redirect output or add other pre- and post-commands.
* Alias mail domains can now be implemented by copying virtusers into the alias rather than using a catchall. Under Postfix this allows email to invalid addresses in the alias domain to be rejected at the SMTP level. The default for this can be changed on the Server Templates page under Mail for domain, and it can be changed for existing domains on the Edit Virtual Server page.
* Shells for mailboxes and domain owners are now configured on the new Custom Shells page, linked under System Customization on the left menu. This allows you to define as many different shells as you like, for access levels like email only, FTP and SCP only. When editing mailboxes or domain owner limits, you can then select one of the defined shells.
* Backported the Extra Administrators feature from Virtualmin Pro, which allows domnain owners to create additional restricted administration logins.

**Version 3.49 (21st November 2007)**

* Added a warning about NSCD to the configuration check page.
* When a domain is renamed, generics or sender canonical maps are properly updated too.
* MySQL and LDAP sources for aliases and virtual addresses for Postfix can now be used by Virtualmin, when Webmin 1.390 or newer is installed and when they are setup properly in the Postfix module. This allows Virtualmin to effectively configure a remote mail server, assuming that domain Unix users and groups are also stored in LDAP.
* Errors when extracting cPanel, Plesk and Ensim backup files are reported in more detail.
* Sub-domains in cPanel backups can now be properly imported.
* Added a checkbox to the backup form to include sub-servers of those selected too. A similar option is also available to virtual server owners when backing up a single domain, to include all sub-servers with the same owner.
* Added the --user option to disable-feature.pl and enable-feature.pl to turn features off and on in all domains owned by some user, and the list-domains.pl to fnd domains by user.

**Version 3.48 (18th October 2007)**

* When re-creating a domain as part of a restore, the external DNS IP address is set to match the target system, rather than being copied from the source.
* Added the CA Certificate tab to the Manage SSL Certificate page, for uploading a chained cert from your CA.
* If the create of the Unix user or group for a virtual server fails, both are rolled back to avoid leaving half-created users in /etc/passwd or LDAP.
* Numerous small bugfixes and improved features.

**Version 3.47 (1st October 2007)**

* Added support for migrating domains from Plesk 8 backups.
* The migration function will use the username and password from the original domain where possible, removing the need to specify them manually when on the migration form or as parameters to migrate-domain.pl. For Plesk backups the original username and password can be retrieved, while for Ensim and cPanel only the username can be found automatically.
* When editing mail and FTP users, the simple alias editing for from Virtualmin Pro is now available.
* Added an option to the Create alias websites by setting in server templates to use RedirectMatch instead of Redirect, which is more Google-friendly for parked domains.
* Ported the feature to change a domain's MySQL password separately from the administration password from Virtualmin GPL.
* Plugin modules can now define additional sections to appear on the right-hand side of the framed theme, and new global options to appear in the System Settings categories on the left.
* The default number of alias servers that new virtual server owners can create can now be set on the Server Templates page.
* Removed the Plugin Modules page and the section for enabled features from the Module Config page, and merged them into a single Features and Plugins page where you can select which are enabled.
* Backported the virtual server validation feature from Virtualmin Pro to GPL.

**Version 3.46 (8th September 2007)**

* Added a setting to control if virtual server owners can see mailboxes, on the Module Config page under Server administrator permissions.
* In the Quota commands section of the Module Config page, added two new commands to get the quotas for a single user and group respectively. If defined, Virtualmin will use these when listing users in a domain or editing a single user, on the assumption that they are faster than the command which outputs quotas for all users.
* Enhanced the Virtualmin GPL -&gt; Pro upgrader to support systems installed using the GPL install script.
* Creation of domains that match certain regular expressions can be denied using a new Module Config option in the Defaults for new domains section.
* Added the --only-features parameter to restore-domain.pl, which tells Virtualmin to only enable features selected for restore when creating a new domain as part of the process.
* Added a similar option to the restore form in the Virtualmin web interface.
* Usage for previous months can be shown on the Bandwidth Monitoring page, using a month selector menu at the bottom of the table of domains or dates.
* Added options on the Edit Server Template page to make some non-default template the one that is initially selected when adding new virtual servers, migrating them or creating from a batch file.

**Version 3.44 (27 August 2007)**

* AWstats statistics are now included in cPanel migrations.
* The real name of a virtual server's Unix user is updated when the server's description is changed.
* Backported the simpler alias editing form from Virtualmin Pro, which makes it quicker to setup autoreponders and forwarders. Also includes easier to use fields for advanced autoresponder options, like the reply period and date ranges.
* Added a link from the Mail Aliases page to manually edit aliases in a domain using a text box. This makes bulk changes and copies simpler.
* Migrated cPanel users with forwarding have email also delivered to their inbox, to maintain consistency with cPanel.
* Added the Excluded Directories page for entering directories not to include in backups for a virtual server.
* Updated the modify-domain.pl script to allow excluded directories to be managed with the --add-exclude and --remove-exclude parameters. Also updated list-domains.pl to show exclusions.
* When enabling or disabling proxying for a domain, existing Apache directives are no longer re-generated from the template.
* Added an option to the form for backing up a single virtual server to download the resulting file in the browser, rather than saving it to a file or sending to an SSH or FTP server.
* The button to stop or restart ProFTPd is always displayed in the right frame, even if private IP-based FTP is not enabled.

**Version 3.44 (25 July 2007)**

* Webalizer statistics are now included in cPanel migrations.
* Added a restriction to the Edit Owner Limits page to prevent the creation of catchall email aliases.
* Added a Module Config option to delete aliases when email is disabled for a domain.

**Version 3.43 (29 June 2007)**

* The Change Domain Name page can be used to modify the administrative username and home directory for a virtual server, without changing the domain name.
* Added an option to the DNS section of server templates for specifying the hostname to use in the primary NS record for new DNS domains, rather than the system's hostname.
* Password changes to mail / FTP users from the Users and Groups modules now correctly update all the various passwords maintained by Virtualmin, such as MySQL and SVN - if the option to update in other modules is checked.
* Added the status of the Dovecot IMAP/POP3 server to the server status section of the right frame.
* Added a Module Config option to have MySQL users and permissions added to multiple servers, for use with replication or NDBCluster.

**Version 3.42 (19 June 2007)**

* In the server templates pages under Default domain owner limits, added a section for specifying the features that can be used by the server owner. Previously, these were always automatically determined based on the features initially enabled when the domain was created.
* Changed the layout of the Plugin Modules page to make it easier to see what is selected, and added a checkbox to have plugins available but not active by default.

**Version 3.41 (22 May 2007)**

* When a virtual server with a website and private IP address is deleted, any Listen directives added for its IP are removed from the Apache configuration.
* Added a Module Config option to change the default SSL key size, and increased the default to 1024 bits.
* Added Module Config options for choosing different locations for servers' SSL certificate and key files.
* Added an option to the Edit Virtual Server page to turn off disabling when the bandwidth limit is reached, or a per-domain basis. Also added corresponding --bw-disable and --bw-no-disable options to the modify-domain.pl command-line script.
* If the system has a bonded interface but no ethernet, it will be detected as the primary interface.
* The configuration check process now ensures that the system is setup to use itself as a DNS server, so that newly created domains will resolve.
* Added an option to the scheduled backup page to only send an email report when the backup fails, and an option to send email to domain owners as well.
* When a virtual server with anonymous FTP is created, the ProFTPd user (typically ftp) is added to the domain's Unix group. This allows anonymous FTP to work even when the domain's home directory is not world-readable.

**Version 3.40 (2 May 2007)**

* If a domain with the same TLD already exists as one you are creating, the automatically generated group name will be the new full domain name, to avoid clashes.
* The stats web directory is now password-protected by default.
* Backported the server template setting for disabled website HTML from the Pro version of Virtualmin.
* The number of days to keep old bandwidth data can now be configured on the Bandwidth Monitoring page.
* Added the list-features.pl script, for finding available features for new virtual servers.
* Added Module Config options for external quota commands to use, instead of the standard Unix commands. This allows a different quota system (such as ZFS or on an NFS server) to be used instead.
* When creating a virtual server inside a Solaris zone, existing virtual IPs in the zone can be selected for domains that need a private IP.
* When editing server templates, fields that are not used because they are inheriting from the Default Settings are now greyed out.
* Added a link for copying the default settings template, rather than creating an empty template which inherits from it.
* The old one file per directory backup format is no longer available, unless already selected.

**Version 3.39 (8 April 2007)**

* Added the --template option to modify-domain.pl.
* Fixed the Change Password link.
* Added the Upgrade to Virtualmin Pro link on the left menu under System Settings for easily upgrading to the Pro version.
* Re-factored all code for displaying quota fields, so that the text box is greyed out when 'Unlimited' is selected.
* Added Prev/Next buttons to template form, for easily navigating through sections.
* Added the ability to migrate cPanel and Ensim backups as Virtualmin domains. This feature was originally in the Pro version only, but has now been backported to the GPL release.
* Change the Module Config option for new domain passwords to add an option to require the password to be entered twice.
* Added a Module Config option for a Unix group to add all domain owners to.

**Version 3.38 (26 March 2007)**

* When configuring email notification for new mailboxes and domains, you can now enter a Bcc address as well as a Cc address.
* Moved options for sending email to new and updated mailboxes from the Module Config page to the form for editing the actual messages.
* Domain owners who cannot login via SSH are automatically added to the deniedssh group, which the SSH server is configured to deny even before checking their shell.

**Version 3.37 (10 March 2007)**

* Change the Module Config option for the Upload and Download module to limit to uploads only.
* Broke the Bandwidth Monitoring page down into collapsible sections.
* Added a new page for regularly updating a dynamic IP address, for systems where the primary IP is not static.
* Updated the 'Show system information on main page?' Module Config option to allow display for resellers too.
* Plugin modules can now have help links on the virtual server creation and editing pages.
* Added caching to make lookups of domains by parent and user faster.

**Version 3.36 (28 February 2007)**

* Added the --primary-ip option to create-domain.pl, to create an SSL domain on the primary IP.
* Added the Shared IP Addresses page under System Configuration for defining additional shared addresses that can be selected when creating servers without a private IP. Also updated the server creation page to allow selection of one of these shared IPs, and the create-domain.pl program to use one with the --shared-ip parameter.
* Fixed bug that broke renaming of virtual servers when using debian-style sites-enabled directory for the Apache config.

**Version 3.35 (10 February 2007)**

* Fixed bug with calls to missing get\_domain\_php\_mode function.

**Version 3.34 (8 February 2007)**

* When a mailbox or domain owner is deleted, all of his Cron jobs will be removed too. Similarly, the owner of any Cron jobs will be correctly updated when a useris renamed.
* Added a link from the Edit Virtual Server page to show a server's current password.
* When a mailbox user's password is changed in other modules, it is also updated in Virtualmin's plain-text password file.

**Version 3.33 (26 January 2007)**

* Ported the remote API from Virtualmin Pro to the GPL version, which allows command-line scripts to be run via HTTP.
* Ported all domain creation, management and deletion scripts .pl from the Pro version.
* Added an option to the Edit Owner Limits page for controlling if a domain owner can login via FTP, SSH or neither. Also added a corresponding option to the mass server change form, and the modify-limits.pl command-line script.
* After saving a virtual server, a page showing a confirmation message and common links is displayed, rather than the (slow) Edit Virtual Server screen.
* Changed the mail / FTP user page to hide infrequently used options in collapsed sections.
* Changed all rows of links to put a | between them, increasing readability.
* Cleaned up Edit Virtual Server and Virtual Server Details pages to use collapsible sections and more consitent layout.
* Fixed bug that prevented the email for new sub-servers from being disabled, and added an option to inherit it from the parent template.

**Version 3.32 (7 January 2007)**

* When changing the home directory of a virtual server, all references to the old home in its Webalizer configuration files are updated to the new location. Similarly, when restoring a backup from a server that uses a different home base, the Weblizer configuration is updated to use the new home.
* Updated the Default domain owner limits section of the Server Templates page to add defaults for the 'Can choose database names' and 'Can rename domains' options.
* Fixed a bug that prevents backups from a system using /var/mail for email storage being fully restored on a system that uses ~/Maildir.
* Owners of domains that have virtual FTP enabled are now able to view their FTP server logs.
* Fixed bug that prevents custom ports from being entered for FTP and SSH backups.
* Changed most instances of the word 'Unix' to 'Administrator' in user interface.
* Changed the 'Add Apache user to Unix group for new servers?' option in the server template to add a working No option.
* Virtual server owners using the Apache module are now limited to their home directory for alias targets and other Apache directives that specifiy directories.

**Version 3.31 (11 December 2006)**

* Password quality restrictions set in the Users and Groups module are not properly enforced.
* Re-designed the Edit User page to use a clearer sectional layout.
* Backups of mail / FTP users now include their Cron jobs, such as scheduled emails and automatic mail folder clearing.
* Added install-time checks to ensure that the Apache mod\_suexec and mod\_actions modules are enabled.
* Database backups and restores are done by calling functions in the Webmin 1.310 MySQL and PostgreSQL modules, rather than using duplicate built-in code. This prevents the PostgreSQL login prompt from appearing when doing a command-line restore.
* Email is now also sent when a new alias virtual server is created.
* Added a field to the DNS section of server templates for specifying BIND directives to be added to the named.conf entry for new domains.

**Version 3.30 (25 November 2006)**

* When renaming a virtual server, an option is available to rename any mailboxes in the domain that contain the old server name.
* Added checkboxes and a button on the Server Templates page to delete several at once.
* Several small bugfixes and improvements.

**Version 3.29 (14 November 2006)**

* When adding a MySQL database, the default character set can be selected.
* In the virtual server list, servers that are using proxy or frame web forwarding have (P) or (F) next to their names.
* An SPF record can be added to and configured in an existing virtual server using the DNS Options button on the domain editing page.
* The DNS IP address for an existing virtual server can also be set using the DNS Options page.

**Version 3.28 (10 October 2006)**

* Creating virtual servers on existing private IPs that are already used by another domain is no longer allowed.
* Added an option in the server templates in the Webmin login section to specify a Webmin group to which the domain owner is added. This can add new modules and override ACLs on existing ones.
* Domain owners can now view their apache access and error logs, via links on the left menu (if using Webmin 1.306 or newer).
* Added a new page for checking user and group disk quotas.
* Password quality restrictions set in the Users and Groups module now apply to mailboxes.
* Database name restrictions now apply when creating virtual servers too.

**Version 3.26 (16 October 2006)**

* Fixed a bug that caused all server templates to disappear.

**Version 3.25 (16 October 2006)**

* Added upload fields on the SSL certificate form, for using an existing certificate in a file.
* Added a Module Config option to control categorization for domain owner's Webmin modules.
* The creation date and creator (if available) is shown when editing a virtual server.
* MySQL backups are now compressed with gzip, to save on disk space from the original SQL format.
* When log rotation is set to always enabled, it will follow the virtual website setting.
* Changed default Apache log format to combined.

**Version 3.23 (1 October 2006)**

* Outgoing address mapping (generics) entries are added for new domain owners.
* User mail directory sizes are now displayed correctly.
* Displayed disk usage for virtual servers is now taken from the group quota (when enabled), to ensure consistency.

**Version 3.21 (31 August 2006)**

* Quota in email messages to domain owners and mailboxes (using the $QUOTA variable) now use nicer units, like 300 MB.
* Domain owners can now perform backups to the virtualmin-backup directory under their home (which does not get included in future backups).
* When adding a DNS zone inside a view that uses an include statement, the included file will be used if specified in the BIND module configuration.
* Added a Module Config option to compress backups using the bzip2 format, which is more efficient.

**Version 3.201 (16 August 2006)**

* Fixed a bug on the aliases list page in 3.20.

**Version 3.20 (14 August 2006)**

* When email is set to a new or modified mailbox, the From: address is that of the domain owner.
* Fixed a bug that prevented DNS zones from being added to a file other than named.conf, even if specified in the BIND module.
* Sub-domains with DNS enabled are now added by default as records in the parent DNS zone, rather than as a completely new zone.
* The server template editing page is now broken down into sections, selectable using a menu. This reduces the size of the form, and makes it easier to find settings that you are interested in.
* Removed un-needed code to support versions of Webmin below 1.290.
* Added missing view\_domain.cgi script.
* Improved support for running within a Solaris zone (thanks to Textdrive).
* Added an option on the Backup Virtual Servers page to have each server's backup file transfered by SCP or FTP after it is created, rather than doing them all at the end of the backup. This saves on temporary local disk space on the server running Virtualmin.
* Added the delete-domain.pl script (ported from the Pro version).
* Virtusers associated with mailboxes are not un-necessarily removed and re-added when no email related changes are made.
* View the [detailed change log][1].

**Version 3.190 (25 July 2006)**

* Merged entire codebase with Virtualmin Pro, which removes a bunch of bugs and adds new features.
* Added built-in support for granting mail/FTP users access to MySQL databases.
* Virtual domains without mail enabled can still have FTP users.
* Private IP addresses can be removed from existing virtual servers.
* Proxying and frame forwarding can be enabled and edited for a virtual server at any time.
* Multiple aliases and mailboxes can be deleted at once.
* Added a new backup format that doesn't create files in /tmp when not needed.
* Imported virtual servers can be placed under the ownership of an existing server, and can have their Apache SSL virtual servers included.
* Many more options for limiting virtual server owners have been added, such as restrictions on real and alias domains, and available capabilities in owned virtual servers.
* Plugins can define domain owner limits, template options and new database types.
* Mailbox restores can be limited to a single user.
* Quotas and limits for a new virtual server are now by default taken from the template, rather than being set on the server creation form.
* When restoring a backup, the home directory of any virtual servers created is re-allocated to use the directory and rules defined on the destination system.
* Plain text passwords are stored for all new and modified mailbox/FTP users, which allows MySQL, DAV and SVN access to be enabled for users without their passwords needing to be reset.
* When email is enabled or disabled for an existing virtual server, MX records are added to or removed from the DNS domain.
* Added an option when creating a virtual server with a private IP address to enter an IP that is already active on the system.
* Optimized the bandwidth accounting code for email to only scan the maillog once for all domains, which should speed up the bw.pl process on systems with large mail logs.
* View the [detailed change log][2].

**Version 2.611 (18 Apr 2006)**

* Users in user@domain format are renamed when their domain is.
* Added support for the Debian sites-enabled Apache directory.
* Added a Module Config option to control the sorting of virtual servers on the main page.
* Webmin users created by Virtualmin are marked as non-editable, and so cannot be manually modified in the Webmin Users module (when using Webmin 1.257 or above).
* Virtual server owners are no longer allowed to change the Apache server name or aliases for their websites, as this can confuse Virtualmin.
* The Running Processes extra modules config option now allows you to choose if a domain admin can see other users' processes.
* MySQL database names containing the \_ or % characters are now properly escaped in the db table, to prevent their owners from accessing or creating other databases.

**Version 2.610 (19 Dec 2005)**

* When using Qmail+LDAP, the maximum mail files quota can now be edited for mailbox users.
* Fixed a bug that stopped the SuexecUserGroup directive being updated with the new correct UID and GID when restoring.

**Version 2.609 (16 Nov 2005)**

* Extra Webmin modules can be specified for server owners on the Edit Owner Limits page.
* Several small bug fixes and minor feature enhancements.

**Version 2.604 (2 Oct 2005)**

* Plugins can now define new database types, which can then be added to virtual servers.
* Several small bug fixes.

**Version 2.604 (2 Oct 2005)**

* Added a Module Config option for entering secondary groups to which mailbox users can be assigned.
* Network interfaces are now identified by address rather than name, to avoid problems with interface numbers changing on operating systems like Gentoo and FreeBSD.
* Improved support for users with home directories outside the server root.
* After upgrading, a configuration re-check is no longer needed.
* Several small bug-fixes.

**Version 2.60 (27 Apr 2005)**

* FTP and mail server logs can now be used for bandwidth monitoring. Graphs show usage broken down by type, and can display usage by day and month. Thanks to Olimont.com for sponsoring this feature.
* The servers for which bandwidth monitoring is done can be restricted.
* The Webalizer statistics directory can now be password protected, via an option on the templates page.
* Default quotas and other limits for a new domain can now be specified in templates.
* Apache logs can be written via a program, to prevent Apache from failing to start if a server owner deletes his ~/logs directory.
* Added support for VPOPMail autoresponders, and removed the need for a Unix group for a mail-only server using VPOPMail.
* View the [detailed change log][3].

**Version 2.50 (10 Mar 2005)**

* Added support for two new mail systems - Qmail+LDAP and VPopMail. Both of these support the creation of mailboxes which are not Unix users. Thanks to Linulex and Omar Amas for sponsoring these.
* A virtual server can now have more than one MySQL or PostgreSQL database. Thanks to Olimont.com for sponsoring this feature, and the backup changes.
* Added several new limits for domain owners, related to re-naming, domain names and databases.
* The backup/restore feature can now be used to transfer a domain from another server with a different IP, and can exclude the logs directory.
* Numerous bugfixes and other small improvements.
* View the [detailed change log][4].

**Version 2.40 (17 Dec 2004)**

* Added support for using LDAP to store mail and domain users and groups, rather than local files. Thanks to Omar Armas for sponsoring this feature.
* When creating a virtual server, if a feature fails for some reason the rest of the server creation will still go ahead. This avoids the problem of a server being partially created and unknown to Virtualmin.
* A database name can be specified when creating a server, rather than the default which is computed from the domain name.
* Added form on plugins page for editing the configuration of plugins that have a config.info file.
* Created several command-line scripts for enabling and disabling features and server owner limits.
* Added a page for defining custom fields to be stored with each virtual server, for entering site-specific information like billing plans, customer addresses and so on. Thanks to textdrive.com for sponsoring this one.
* Bandwidth graphs are now available to server owners, as well as the master administrator.
* View the [detailed change log][5].

**Version 2.31 (12 Oct 2004)**

* Fixed several bugs that effected version 2.30.
* Moved bandwidth graphs to separate page, and added mode to show sub-domain usage.
* Added the command-line backup-domain.pl script.
* View the [detailed change log][6].

**Version 2.30 (5 Oct 2004)**

* Aliases for virtual servers can be created, to add an additional domain name to an existing server.
* Support for web bandwidth monitoring has been added. Limits can be defined for each server, which when exceeded can cause an email to be sent to the owner, and/or the server disabled.
* A new feature has been added - Logrotate, for periodically rotating virtual server logs.
* The Qmail mail server can now be used, along with Sendmail and Postfix. Only the basic Qmail functionality is needed, not vpopmail.
* All global configuration settings used when creating servers, such as Apache directives, DNS records and skeleton files are now defined in server templates. When creating a new virtual host, you can select which template to use, allowing multiple standard configurations to be defined.
* A virtual server can now be created without a Unix user or without a home directory, if it is used for aliasing or DNS hosting only.
* Support has been added for third-party plugins, which can define additional features available to virtual servers and mailboxes.
* Thanks to Olimont.com, TextDrive, Linulex and Omar Armas for sponsoring some of these features!
* View the [detailed change log][7].

**Version 2.10 (21 Jul 2004)**

* A virtual server Unix user can now own multiple domains, and can be given the ability to create domains himself up to some limit. All domains are stored under the user's home directory, and share the same disk quota. However, each can have its own website, DNS domain, databases and so on. Thanks to TextDrive for sponsoring this feature.
* A proper SSL certificate can be more easily generated for a virtual server using the Manage SSL Certificate button on the server editing page. A CSR can be generated for sending to a certificate authority, and the retured signed certificate can be installed.
* A range to allocate IP addresses from can be defined on the Module Config page, from which an address will be automatically chosen when creating a virtual server with its own non-shared IP.
* The domain name, Unix user and home directory of a virtual server can be changed using the new Change Domain Name page.
* When restoring a backup, if the restored server does not exist, it will be created with all the original features.
* View the [detailed change log][8].

**Version 2.00 (6 Jun 2004)**

* Domains with their own IP addresses can make use of a new feature - a ProFTPd virtual server. This allows each server to have it's own anonymous FTP directory, located by default at ~/ftp.
* The backup and restore feature can now use SSH to transfer files to another server, as well as FTP.
* Added module configuration options to prevent domain owners from being given access to feature-related modules like Apache Webserver, BIND DNS Server and so on.
* Several improvements to the mail alias support, including improved clash checking and support for domain to domain catchall forwarding.
* View the [detailed change log][9].

**Version 1.91 (23 Apr 2004)**

* Virtual servers can now be backed up and restored, either to local files or to an FTP server. Backups can be done immediately, or on a schedule. Thanks to Olimont for supporting the development of this feature.
* The Sendmail genericstable or Postfix canonical mappings file can now be updated by the module to contain correct entries for mailboxes.
* Server owners can be granted access to the Read User Mail module, to read only their users' mail.
* The directory for webalizer statistics and the port numbers for normal and SSL websites are now editable.
* Virtualmin now participates in Webmin action logging, so you can see what actions were taken and which files they changed.
* View the [detailed change log][10].

**Version 1.81 (22 Feb 2004)**

* Fixes a bug that prevents extra modules (like the File Manager) being assigned to Webmin users.
* Fixed various other small bugs.

**Version 1.80 (19 Feb 2004)**

* A new SSL feature is available for virtual servers, which when enabled triggers the creation of a separate Apache virtual host on port 443. This feature is disabled by default, and must be enabled on the Module Config page.
* The options that determine in a server gets a private IP address or not have been simplified, and it is possible to add a private IP to a server after creation.
* The system's configuration is only checked when a change to the Module Config page is made, instead of each time the Virtualmin module is entered. This speeds up the display of the main page, and allows the checking to be more comprehensive.
* A confirmation page is now shown when turning off a feature for a virtual server.
* Quotas are displayed in kilobytes instead of blocks, where possible.
* Substantial code clean-ups, including moving all features into their own separate files, and putting duplicated code into common functions.
* The ability to set mailbox quotas or enable FTP can be turned off for virtual server owners.
* Various other minor enhancements and bug fixes.

**Version 1.71 (8 Jan 2004)**

* A confirmation page is displayed before deleting a mailbox user.<br />
* Fixes a problem with the ProxyPass directives proxy-only domains.<br />
* Includes an updated Users and Groups module to solve the problem of mailbox users not being deleted properly when a virtual server is removed.<br />

**Version 1.7 (28 Dec 2003)**

* Hard and/or soft quotas can now be set for virtual servers and email users, depending on the module's configuration.<br />
* If group quotas are enabled for the /home filesystem, they will be set to match the virtual server quotas. Otherwise the server owner and mailbox users have separate quotas, meaning that no real limit can be placed on the disk space used by a server.<br />
* A virtual server or email user can be given an unlimited quota. Any users created before quotas are enabled will initially be unlimited until changed.<br />
* The number of mailboxes in a domain can be limited (thanks to Steve Yates for this patch).<br />
* When the BIND DNS Server module has been configured to create a slave zone on another server matching a new master zone, Virtualmin will do the same thing for new domains.<br />

**Version 1.62 (24 Nov 2003)**

* Fixed up a bug in the creation of catchall aliases that forward to multiple addresses.<br />
* Added updated Sendmail and Postfix modules to package, which contain a required bug fix.<br />

**Version 1.6 (18 Nov 2003)**

* Update the mailbox page to allow aliases to be defined for a mailbox, to re-direct email elsewhere or setup an autoresponder. The home directory for a mailbox user can also be edited.<br />
* Added the ability to edit autoreply, include and filter files in aliases.<br />
* The mailbox for a virtual server owner can now be edited, just like any other mailbox.<br />
* Added icons on the module's main page for editing the templates used when creating Apache virtual hosts, DNS domains and emails sent to new users. The DNS records for a new domain are no longer fixed.<br />
* Ported the module to Solaris.<br />

**Version 1.5 (30 Sep 2003)**

* Added a text box to the mailbox user creation page for easily specifying extra email addresses.<br />
* Fixed a bug that prevented Webalizer from being properly enabled when a domain is created.<br />
* Added checks to prevent critical buttons like **Delete** and **Save Server** from being clicked twice.<br />

**Version 1.4 (17 Sep 2003)**

* Added the ability to enable and disable domains.<br />
* Improved the mail aliases feature to allow the creation of aliases that forward to multiple addresses, files or programs.<br />
* Make the template for Apache directives for new domains editing on the Module Config page.<br />
* Added options for sending email when a domain or mail user is created, based on a template file.<br />
* Added options for specifying commands to be run before and after a domain is added, removed or changed.<br />
* Numerous small bugfixes and other improvements.<br />

**Version 1.3 (7 Aug 2003)**

* Fixed several bugs in the initial version.<br />
* Added support for importing existing domains.<br />
* Added PostgreSQL database support.<br />

**Version 1.0**

* Initial relase of Virtualmin.<br />

  [1]: vchanges-3.20.gpl.html
  [2]: vchanges-3.190.gpl.html
  [3]: vchanges-2.60.html
  [4]: vchanges-2.50.html
  [5]: vchanges-2.40.html
  [6]: vchanges-2.31.html
  [7]: vchanges-2.30.html
  [8]: vchanges-2.10.html
  [9]: vchanges-2.00.html
  [10]: vchanges-1.91.html
