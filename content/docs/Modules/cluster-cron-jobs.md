---
title: "Cron Jobs"
date: 2023-09-29
weight: 885
---

### About
The **Cluster Cron Jobs** module is almost identical to the [Scheduled Cron Jobs](/docs/modules/scheduled-cron-jobs) module, but allows scheduled commands to be run on multiple servers at once. This is useful if your network contains many systems and you want to have the same command run on some or all of them on a regular schedule.

Its user interface is almost identical to the standard Cron module, but with the addition of a **Run** on servers field on the job editing form. This allows you to select one or more servers or groups that have been created in the [Webmin Servers Index](/docs/modules/webmin-servers-index) module with a login and password. 
