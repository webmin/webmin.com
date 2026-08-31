---
title: "Virtualmin 8.2.0 released"
date: 2026-08-31
tags: ["changelog", "virtualmin-changelog"]
author: "Ilia Ross"
---

* Add new [Virtualmin Podman](https://www.virtualmin.com/docs/plugins/podman/) plugin for Virtualmin Pro users, bringing per-domain container and pod management to both the UI and CLI, along with a large catalog of easy-to-deploy application recipes
* Add Btrfs subvolume and hierarchical qgroup quota support for virtual servers and mailbox users
* Add ability for domain owners to use permitted Virtualmin remote API commands, with auditing and domain-scoped access checks
* Add Auktiva, Fish Auctions and Pixelfed web app installers for Virtualmin Pro users
* Add Django web app installer with isolated Python environments, Gunicorn services managed by systemd, production-safe settings and automatic database driver setup
* Add support for Ubuntu 26.04
* Add HTTP/3 support for Nginx websites, including per-domain and server-template controls on supported systems
* Add full lifecycle support for IPv6-only virtual servers, including creation, modification, cloning, backup, restore, DNS, web, mail and SSL handling
* Add ability to add or remove an IPv4 address from an existing virtual server
* Add support for requesting ACME SSL certificates containing IP address identifiers
* Add support for FTPS backup destinations
* Add automatic inclusion of MySQL/MariaDB binary log coordinates in database backups for point-in-time recovery when binary logging is enabled on the server
* Add point-in-time recovery on restore, optionally replaying MySQL/MariaDB binary log transactions from the coordinates recorded in the backup up to a given time
* Add support for chaining differential backups to a selected full backup, with safer state tracking, log filtering and deletion checks
* Add alias domain redirect configuration and improve website redirects for sub-paths, filenames and query strings
* Add resource limits configuration to virtual server templates
* Add support for domain owners to manage their own systemd user units
* Add milter-greylist support for greylisting on RHEL 10 and derivatives
* Add ability to configure the TLS security level for Postfix services managed by Virtualmin
* Add a dedicated mail options section and group other related module configuration settings into appropriate sections
* Add TLSA records for Postfix SMTPS services
* Add support for primary DNS zones and CLI flags to exclude named DNS records
* Add transactional Cloudflare DNS record updates using the batch API to prevent partial migrations [#1267](https://github.com/virtualmin/virtualmin-gpl/issues/1267)
* Add ability to show disk usage on the virtual server summary page
* Add support for using any DynDNS-compatible dynamic DNS service, like No-IP or Dynu, by making the update server configurable
* Fix cross-stack restores to preserve target system features, disable unavailable domain features and handle PHP modes correctly
* Fix unsupported CGI modes in standard templates after cross-stack restores
* Fix mail client autoconfiguration to enable a supported CGI mode when needed
* Fix to restore preflight checks and error reporting to catch clashes earlier and show SSL failures
* Fix post-installation wizard setup for PostgreSQL, SpamAssassin and ClamAV
* Fix configuration write races in long-running operations that could cause recent Virtualmin settings to be lost
* Fix to enforce mailbox and domain disk quota on mail delivery even when spam filtering is disabled, so full mailboxes no longer lock out webmail and IMAP access
* Fix domain registration expiry checks taking too long when a WHOIS server does not respond
* Fix PHP-FPM version repair running during package updates
* Fix ZIP restores to validate untrusted archives and extract them as the virtual server owner
* Fix chroot jail cleanup to safely unmount nested bind mounts before removing files
* Fix to prevent virtual server owners from downloading files from non-public URLs
* Fix SSL certificate parsing, CA chain handling, service syncing and repeated ACME request retries
* Fix several Dovecot SNI and per-IP certificate issues, including nested and alias domains
* Fix Postfix per-IP certificate updates and TLSA refresh after ACME renewal
* Fix several DNS record and zone issues, including apex shorthand, parent record locking, DS handling, sub-server zones and proxied cloud DNS checks
* Fix to prevent deleting credentials used by an active cloud DNS provider
* Fix MariaDB/MySQL user recreation to preserve authentication plugins and restore extra database users correctly
* Fix several website SSL, alias and HTTPS proxy redirect regressions
* Fix SFTP purging of backups stored in date-based directories
* Fix phpMyAdmin and Usermin automatic login issues
* Fix web app installers to avoid URL paths owned by plugins
* Fix Webmin API credential handling and hide passwords from FTP command errors
* Fix Apache proxy backends to receive the original HTTP or HTTPS scheme through X-Forwarded-Proto
* Fix config check to advise disabling the default IPv6 address when no externally visible IPv6 address can be detected
* Fix dynamic IP updates to use SSL when connecting to DynDNS
* Drop the obsolete per-domain ProFTPD virtual FTP feature while preserving service controls and backup compatibility
* Rename the Git-based config history CLI commands to `list-config-revisions` and `restore-config-revision`
* Replace the legacy website preview flow with sandboxed proxying
* Change to move domain-owner Webmin module access from "Server Templates" to "Manage Virtual Server ⇾ Edit Owner Limits", preserving existing access on upgrade and applying template defaults only to new servers; module access can also be updated for multiple servers from "List Virtual Servers" in Pro, or through `modify-limits` CLI in all editions [#1039](https://github.com/virtualmin/virtualmin-gpl/issues/1039#issuecomment-5253028294)
