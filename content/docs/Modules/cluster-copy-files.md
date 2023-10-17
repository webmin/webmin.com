---
title: "Cluster Copy Files"
date: 2023-09-29
weight: 875
---

### About
The **Cluster Copy Files** module allows you to set up scheduled transfers of files from a master server to other servers in a Webmin cluster. This can be useful for distributing files like `/etc/hosts`, `httpd.conf` and others for which no networking protocol like NIS or LDAP is available.

The module's main page lists all defined scheduled copies, and has a link for creating a new one. For each copy you can define the source files, destination directory, target servers, and times to run at. The targets must have first been created in the [Webmin Servers Index](/docs/modules/webmin-servers-index) module with a login and password.
