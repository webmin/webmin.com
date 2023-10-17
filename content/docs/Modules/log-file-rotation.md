---
title: "Log File Rotation"
date: 2023-03-28
weight: 245
---

### About

_Log file rotation_ refers to the automatic truncation, compression and deletion of log files so that they do not consume too much disk space. Most Unix servers (such as [Apache](/docs/modules/apache-webserver), [Squid](/docs/modules/squid-proxy-server) and [Sendmail](/docs/modules/sendmail-mail-server)) generate log files, and various system daemons also create logs through _syslog_. This module can be used to configure the logrotate program to manage all those logs.

[![](/images/docs/screenshots/modules/light/log-file-rotation.png "Log File Rotation")](/images/docs/screenshots/modules/light/log-file-rotation.png)

Typically, a log file will be rotated once every day, week or month. The file is usually moved to a new filename and compressed, and a new empty file created in its place. Several generations of these old log files can be kept, so that you can search or generate reports from them even after rotation. Once the number of old logs exceeds a configured limit, the oldest will be deleted.

Each log file being rotated is listed on the module's main page. Each log has its own set of options to control how often it is rotated, how many old copies are kept and so on. You can edit the options for a log by clicking on its filename, or add a new log file using the link at the bottom or top of the table.

Many Linux distributions include logrotate as standard, and come with configurations for rotating the logs of included servers like [Apache](/docs/modules/apache-webserver) and [Squid](/docs/modules/squid-proxy-server). So even if you have never used this module before, many log files may already be listed on the main page. Near the bottom of the page is a button for editing the global configuration, which applies to all log files unless overridden. Below it is a button for setting the schedule on which logrotate is run by cron, which is necessary for it to actually rotate logs. On most operating systems that include the program as standard, a cron job will have been already created as part of the installation process.

### See also

 - [System Logs](/docs/modules/system-logs)
 - [System Logs NG](/docs/modules/system-logs-ng)