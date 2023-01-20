---
title: "Virtualmin 7.0 released"
date: 2022-03-23
tags: ["changelog", "virtualmin-changelog"]

---

* Add `fcgiwrap` to execute CGI scripts on systems without `suexec`
* Add the reset-feature API command and a tab on the **Validate Virtual Servers** page
* Add a configuration option and flag to `create-domain` to allow SSL linkage across domain owners
* Add to enable HTTP2 for Apache or Nginx if supported
* Add support for outgoing SMTP providers like **Amazon SES**, so that systems with dynamic IPs can reliably send email
* Add ability to restrict reseller access to rename domains, manage extra admins, configure proxies, create, delete and edit virtual servers
* Add ability to download backups in the browser via a link displaying the progress
* Add ability to configure location of SSL certificate and key files at the template level
* Fix _zip_ format backups to use _zip_ for archive files inside the backup as well
* Removed Apache `mod_php` support and is no longer recommended for running PHP
* Removed the mostly useless configuration check for _127.0.0.1_ in `/etc/resolv.conf`