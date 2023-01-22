---
title: "Webmin 1.429 released"
date: 2008-07-23
tags: ["changelog", "webmin-changelog"]
---

This beta version includes all the features that will be in the 1.430 release, such as a new TCP-wrappers module, Greek, Catalan and Dutch translation updates, OSX Leopard user and group support, many BIND improvements and much more.

{{< details-start post-content-indent-details "<i class='wm wm-fw wm-newspaper'></i>" open >}}

- Webmin Core

  - Many Greek translation updates, thanks to Vagelis Koutsomitros.  
  - Catalan translation updates by Jaume Badiella.

- BIND DNS Server

  - The default TTL for multiple zones can now be changed on the Update Records in Zones page.  
  - When adding a cluster slave server, multiple views can be entered to have slave zones created in all of them.  
  - Record names or values entered like ns.foo.com in the domain foo.com automatically have a . added to make them absolute as the user presumably expected, rather than being coverted to ns.foo.com.foo.com.  
  - Update serial number (by default) when editing records manually.  
  - Try downloading root zone files from the IP for rs.internic.net if the hostname cannot be resolved, to avoid catch-22 problem.  
  - Access control lists are now automatically re-ordered to handle dependencies.

- Scheduled Cron Jobs

  - Disable time and day lists when 'All' is selected, to indicate that they are un-usable.

- DHCP Server

  - Support the new configuration file format for custom options, as used in DHCPd version 3.

- Disk and Network Filesystems

  - SMBFS authentication credentials can be stored in a separate file, thanks to a patch by Rob Shinn.

- MySQL Database Server

  - Display the number of tables and records created when executing SQL for a restore.

- Postfix Mail Server

  - Properly handle multiple `reject_rbl_client` DNS domains on the SMTP Client Restrictions page.

- Running Processes

  - Corrected physical memory display on FreeBSD.  
  - On Linux systems with the ionice command, the IO scheduling class and priority of running processes can be edited.

- Webmin Servers Index

  - Allow the Backup Configuration Files module to save and restore Webmin server details.

- Squid Proxy Server

  - Fixed the Calamaris page for newer versions.

- System and Server Status

  - Allow saving of remote Webmin monitors when the remote host is down.  
Added a new monitor type for checking the expiry and validity of SSL certificates in a local file or on any SSL website.

- TCP Wrappers

  - First version of this module, for configuring IP access control for a range of servers.

- System Time

  - The default NTP sync time is now set randomly instead of at midnight, and any existing automatic sync done at midnight is changed to a random time. This reduces load on public NTP servers.

- Users and Groups

  - The option to force a password change at the next login is available for new users, if a default 'Maximum days' is set on the Module Config page or if running Linux.

- Webmin Configuration

  - On Linux systems, the IO scheduling class and priority for Webmin Cron jobs can be set on the Advanced Options page.
{{< details-end >}}
