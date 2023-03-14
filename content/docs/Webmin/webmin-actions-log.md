---
title: "Webmin Actions Log"
date: 2023-03-14
weight: 15
---

{{< alert secondary question "What this page about?" "This page explains how and what **Webmin logs**, and how those logs can be searched and viewed." >}}

### Logging
When logging is enabled, Webmin will record every action taken using it that has some effect on your system, such as the creation of a user or the changing of an Apache setting. Pages that do not actually change anything on your system, such as those that just display icons, list users or show the current settings for some object will not write anything to the action log. In this way it is different to the separate CLF log file that Webmin writes to `/var/webmin/miniserv.log`, which records every single page visited and image loaded.

Most actions performed in Webmin change configuration files, run commands or execute SQL statements. When the recording of these file changes is enabled the details of each will be included in the actions log so that you can see exactly what Webmin did when you told it to create a Unix user or delete a DNS zone. This can be helpful for understanding what is really going on behind the scenes if you are new to system administration or want to see how actions are implemented. Not all modules perform action logging though, particularly those that are old or have been written by third-party developers. 

As the Logging section of [Webmin Configuration](/docs/webmin/webmin-configuration) explains, logging can be turned on in the Webmin Configuration module. Basic action logging is enabled by default, but the recording of file changes is not. To gain the most benefit from the Webmin Actions Log modules, file changes should be logged as well. This will slow down the program slightly though, and consume more disk space for recording the changes. 

Some types of action will never have any associated file changes logged, even if this feature is enabled. Such actions might perform all their work with network connections, or modify a file so large that generating the differences between the old and new contents is impractical. Or file change logging may not have been implemented in the module at all. 

The actual file in which actions are recorded is called `/var/webmin/webmin.log`. Its format is unique to Webmin, but records the details of each action on a separate line in a simple text format. If the logging of file changes is enabled the directory `/var/webmin/diffs` is used to store files containing the details of changes and commands used. Each file in this directory is named to match the ID of an action, and contains in diff format the changes made to one file. 

If you are looking for the files in `/var/webmin` on your system and cannot find them, check in `/var/log/webmin` instead. Some packaged versions of the software created by other Linux distribution vendors use this alternate directory instead, to better fit in with the normal Linux log file layout. 

### About
This simple module exists solely for viewing action logs created by Webmin. It can be useful for finding out what a particular user is up to, or who has been doing what in some module. On a system with multiple administrators, tracking down who broke a particular module makes it relatively easy. 

The module can be found under the Webmin category on the main menu, and clicking on its icon will bring up the search page shown in the image below. Before you can view the details of a particular action, it must be found using the search form.

[![](/images/docs/screenshots/light/webmin/webmin-actions-log.png "Webmin Actions Log Screenshot")](/images/docs/screenshots/light/webmin/webmin-actions-log.png)

### Usage
The form on the module's main page lets you find actions using three different search criteria. Only actions that match all three will be displayed, rather than those that match any one of the criteria. You can find actions by the Webmin user that performed them, the module they were carried out in and the date and time that they occurred. 

The steps to follow are : 
- In the first section of the form, select **By user** and if you want to display only actions by a particular user, and choose it from the adjacent menu. To instead exclude some user's actions from your search, use the **By any user except** option instead. To include all users in the search choose *By any user*. 
- In the second section, to limit the search to actions performed in some module choose **In module** and select it from the menu.  Only modules that are currently installed will be listed.  To search all modules' actions select **In any module** instead. 
- The final section determines which date range an action must fall into to be included in the results. If **Between** is chosen you can select or enter one or two dates using the fields next to it. If the first date is omitted, all actions up to the second date will be included. Similarly if the second date is missing, all actions from the first date onwards will match. If *For today only* is selected, only actions that have occurred during the current local time day will be included in the result.  If **At any time** is chosen, the date on which an action occurred will be ignored. 
- Hit the **Search** button to display a page of actions that match the chosen criteria. This may take a few seconds to display if your Webmin log is large. If any were found, the resulting page will provide a short description for each action (such as **Created user fred**), the module it comes from, the Webmin user responsible, the client system he was connected from and the date and time it occurred. 
- Click on the description in the **Action** column to go to a page showing more details about the action. If logging of file changes was enabled at the time it occurred, the changes made to any files by the action will be shown as well, along with any commands executed or SQL statements run. Only actions from the MySQL and PostgreSQL modules will include SQL statements, used to do things like creating a table or modifying a column. 
- When Webmin is in session authentication mode, a *Session ID* field will be shown in this form. Clicking on the ID will bring up a list of all actions performed by the user in a single browser instance from the time he logged in till the time he logged out. 

It is possible to display every single action logged on your system by leaving the options on the search form set to their defaults. However, this is likely to take quite a while to generate and produce a lengthy HTML page.
