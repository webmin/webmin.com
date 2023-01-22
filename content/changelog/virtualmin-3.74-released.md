---
title: "Virtualmin 3.74 released"
date: 2009-09-17
tags: ["changelog", "virtualmin-changelog"]
---

This new version adds numerous small features, including control over DNS records in the template, a link for extra admins to change their passwords, SSL key validation, French translation updates by Houssin Regis, control over the columns that appear in the virtual server list, and much more.


{{< details-start post-content-indent-details "<i class='wm wm-fw wm-newspaper'></i>" open >}}
- If Postfix relay domains are stored in a hash, update it instead of adding to `relay_domains` in `/etc/postfix/main.cf`.
- Additional allowed MySQL client hosts are now included in backups.
- Added a warning to the configuration check for systems behind a NAT gateway with an incorrectly configured DNS IP address.
- Added options to the Module Config page for selecting which columns appear on the List Virtual Servers page, including new ones like the reseller, email address and extra admins.
- The contents of mailboxes from Windows Plesk backups are now properly migrated.
- Updated the French translation, thanks to Houssin Regis.
- Added validation to prevent SSL from being enabled on a virtual server with an invalid certificate or key.
- Extra administrators can now change their own passwords, via a new link on the left menu.
- Added a DNS template option to control which A records are added to new domains.
- Removed the _Bring up virtual interfaces?_ module configuration option, as use of an existing interface can now be done on a per-domain basis.
{{< details-end >}}
