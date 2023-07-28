---
title: "Webalizer Logfile Analysis"
date: 2023-07-28
weight: 525
---

### About
This chapter explains how to create reports from your web or proxy server log files using the **Webalizer** package. 

### The Webalizer Logfile Analysis module
Webalizer is a freely available program for analyzing and generating reports from [Apache Webserver](/docs/modules/apache-webserver) and Squid and ProFTPD log files. If you are running a website and want to see which pages are visited the most, at what times the most traffic comes or which countries it comes from, Webalizer is the tool to use. If you manage a [Squid Proxy Server](/docs/modules/squid-proxy-server) and want to see which sites clients most commonly access and when the proxy is most heavily used, it can generate reports showing that information as well. 

Unlike many of the other servers that Webmin can configure, Webalizer is relatively simple. When the webalizer command is run, it reads in a log file and generates HTML pages and images based on the records in that log. It can also read statistics gathered in previous runs which from a history file, so that the report can include data that is no longer in the log file. The same history file is then updated with information from the latest report, for use in subsequent processing. This allows the system administrator to safely delete the original log file once it has been summarized. 

Webalizer by default uses the global configuration file `/etc/webalizer.conf`, which specifies the kinds of tables and graphs to generate and titles to use. On a system that hosts multiple virtual servers, several configuration files usually exist so that different reporting options can be set for different sites. Unfortunately, there is no way to combine both options from both the global and per-log configuration files – only one can be used when generating a report. 

Because log files are always having new requests appended to them, Webalizer is usually run on schedule by a program like Cron. It does not have its own server process or daemon, and so depends upon a scheduler to invoke it every day or two to re-process each log file and re-generate each report.

Due to its relative simplicity, Webalizer behaves identically on all varieties of Unix. This means that the functionality and layout of the Webmin module is identical as well, although the [Scheduled Cron Jobs](/docs/modules/scheduled-cron-jobs) module must be installed and working for the scheduled reporting feature to work. 

Webmin's Webalizer module icon can be found in the Servers category. When you first click on it, a page listing all the log files that Apache or Squid have been configured to use on your system will be displayed. By analyzing the configurations of those servers, the module can generally work out where all of the logs on your system that can be analyzed are located – however, you can easily add extra log files to the module for reporting as well. 

[![](/images/docs/screenshots/modules/light/webalizer-logfile-analysis.png "Webalizer Logfile Analysis Screenshot")](/images/docs/screenshots/modules/light/webalizer-logfile-analysis.png)

If the module detects that Webalizer is not actually installed on your system, the main page will display an error message instead. If this happens, you will need to install it from your Linux distribution. Many versions of Linux include a Webalizer package as standard, which you can install using the [Software Packages](/docs/modules/software-packages) module.

If you plan to use the module to analyze multiple log files, it is important to make sure that the global Webalizer configuration is set up correctly to support this. The version that comes with some Linux distributions (like Redhat) incorrectly uses absolute paths for the history and cache files that store information about previous processing runs. To fix this, follow these steps before setting the options for any log files: 
  1. On the module's main page, click on the **Edit Global Options**  button at the bottom. This will take you to a form for editing options that apply to all log files. 
  2. In the **Webalizer history** file field, make sure that the second radio button is selected and webalizer.hist appears in the text box. If some absolute path like `/var/stats/webalizer.hist`  is displayed, change it. 
  3. Similar, make sure that the **Webalizer incremental file** field is set to webalizer.current and not some full path. 
  4. The **Webalizer DNS cache file** can be left set to an absolute path if you like, so that DNS information is shared between different reports. 
  5. Click the **Save** button at the bottom of the page to record the new settings. 

### Editing report options
Before you can generate a report from a log file, you must set certain options such as the output directory, Unix user to run the report as and report layout settings. Assuming the log has been automatically identified by the module and is displayed on the main page, the steps to follow are: 
  1. On the module's main page, click on the name of the webserver log file that you want to generate a report for.
  2. The **All log files in report** field shows exactly which files will be used in a any report created by Webmin and Webalizer.  Because many systems are configured to move, truncate, compress and eventually delete the Apache and Squid log files on a regular basis (often using a program like logrotate), the module will include all files in the same directory that start with the same name as the primary log file. So if for example you    are reporting on `/var/log/httpd/access_log`, the files  `access_log.0.gz`, `access_log.1.gz` and so on in the `/var/log/httpd` will be displayed in this field as well. 
  3. In the **Write report to directory** field, enter the directory that the HTML pages for the report should be created in. This must already exist, and should generally be under the website's document root – for example, `/home/example.com/stats`.  It must be owned or writable by the user specified in the next field. Make sure that the directory is not used for anything else, as Webalizer will create an index.html file and other HTML pages that may overwrite anything that it already contains. 
  4. Enter the name of the Unix user that the generated report files should be owned by as into the **Run webalizer as user** field. This should be the user who owns the website's HTML files, so that he can edit or move them if necessary. Or you can just enter _root_ if the reports are only for your own use. Because of the way the module runs Webalizer, the user you specify does not have to have read access to the log file – however,  he must be able to write to the report directory! 
  5. Leave the **Always re-process log files?** field set to *No**, so that Webalizer can make use of cached information from previous report runs. Setting it to **Yes** will cause all caches and previous statistics to be thrown away before each run, so that the entire log file is re-processed. This means that any data that is no longer in the log files will not be included in the report. Selecting **Yes** is most useful if you want to    bypass Webalizer's caching of old statistics, which may be incorrect if the log file has completely changed since the last run. 
  6. In the **Report options** field, select **Custom options** to have the module copy the global Webalizer configuration file for this log, so that you can later define options that apply only to this report. If you have only one website on your system or don't care about customizing reports for different virtual servers, you can select the **Use global options** radio button instead. If so, steps 9 to 19 can be ignored. The final option for this field, **Other config file**, allows you to specify an existing Webalizer configuration file to be used when generating the report. This can be useful if you have used the program before on this log file and have already customized settings for it. 
  7. Leave **Scheduled report generation** set to **Disabled** for now. The “Reporting on schedule” section explains how to enable it. 
  8. Click the **Save** button at the bottom of the page. As long as there were no errors in your input, you will be returned to the module's main page. 
  9. If **Custom options** was chosen in step 6, click on the log filename again and then on the **Edit Options** button at the bottom of the page.
  10. In the **Website hostname** field, select the second radio button and enter your website's name from the URL into the text field, such as _www.example.com_. 
  11. To customize the kinds of files that Webalizer considers  to be pages, edit the extensions in the **File types to report on** field. Other types (such as images or audio files) are not counted for most reporting purposes. 
  12. If your site uses other directory index HTML files other than those starting with index. (such as _home.html_) enter their filenames into the **Directory index pages** field. Normally, this field can be left empty. 
  13. Normally, Webalizer converts times in log files into your system's local time zone. To force the use of GMT instead, change the **Report times in GMT?** field to **Yes**. Unless the report is being viewed by people in different time zones, you should leave it set to **No** though. 
  14. If the log file might contain records that are dated after the records that they appear before, set the **Handle out-of-order log entries?** field to **Yes**. This will slow down report generation slightly, but if **No** is chosen and the log does contain out of order records, Webalizer will not process it completely. Some web servers like Netscape's are guilt of generating log files like this. 
  15. The **Webalizer history file**, **Webalizer incremental file** and **Webalizer DNS cache** fields can be generally left unchanged, as long as they are set to relative paths. The introduction explains in more detail why this is necessary. 
  16. In the **Graphs and tables to display** section, de-select those that you don't want included in the report. 
  17. In the **Table rows and visibility** section you can change the size of each table that appears, or remove it altogether by selecting **None**. 
  18. To turn on the creation of extra pages in the report listing all clients that access your site, URLs accessed and so on, select the appropriate checkboxes in the **Generate pages listing all section**. Otherwise only tables showing the top 20 will be include in the report. 
  19. Finally, click the **Save** button at the bottom of the page. Reports generated from now on will use these options. 
 
 

Although the instructions above are written with Apache log files in mind, they apply to Squid logs as well. The only difference is that Squid has no document root directory, so you will have to create a new directory for the report. This could be under the root directory of your webserver, so that the report can be viewed by anyone. If so, the name of the Unix user who owns the webserver's HTML files should be entered in the **Run webalizer as user** field. 

### Generating and viewing a report
Once you have set the options for a report, actually generating it is simple. Just follow these steps: 
  - On the main page, click on the name of the log file for which the report is being generated. 
  - Hit the **Generate Report** button at the bottom of the form.  A page showing the output from Webalizer as it is run on each of the log files will be displayed, so that you can see any errors that occur. This can take a long time (perhaps hours) the first time a large log file is processed, as a reverse lookup must be done for every client IP address in the file. Fortunately, the actual CPU and network load generated is minimal. 
  - If all goes well, the report's HTML pages will be created in the destination directory. To view it, click on the **View completed report** link below the output. 
  - The report's first page shows a graph of hits received by the web site by month, with links below to pages containing details for each individual month. Each of the month pages shows tables and graphs of hits by day, by hour, by client, by page and by country for the site, and may also show hits by user, browser and referrer as well if that information is included in your log files. 
  - The same report can be viewed directly from the module's main page by clicking on the **View** link in the **Report** column for the log file, or by hitting the **View Report** button on the log file options form. 

### Reporting on schedule
Instead of generating a report from a log file manually, you can use this module to set up a Cron job that runs Webalizer on a regular basis. Generally, a report should be refreshed every one or two days, depending on the size of the log file. Because some large logs take a long time to process, refreshing too frequently (such as once per hour) could cause multiple Webalizer processes to be run on the same log file at the same time, which will corrupt the resulting report. 

It is generally a good idea to generate a report for the log file from within Webmin at least once before setting up scheduled reporting, so that you can see if it is really working or not. Once you have done that, follow these steps: 
  - On the module's main page, click on the log file's name.
  - Change the **Scheduled report** generation field to *Enabled, at times chosen below*. 
  - Select the times and days on which the log file should be re-processed from the **Minutes**, **Hours**, **Days**, **Months** and **Weekdays** lists below. For each, you can either choose **All** to have the report generated every minute, hour or whatever – or you can choose **Selected** to have Webalizer run only at the times or dates selected from the list. To select multiple entries, hold down control or shift while clicking. You can also control-click to de-select entries that have already been chosen. By default, the log will be processed at midnight every day. If you have multiple reports that are being generated on schedule, try   to stagger them so that they are not all run at the same time. For example, in your second report select _1_ as the hour instead of *0* and so on. 
  - Click the **Save** button to have Webmin create a Cron job for the report. You will be able to see it in the [Scheduled Cron Jobs](/docs/modules/scheduled-cron-jobs) module, but you should only edit the dates and times here. 

To turn off regular report generation for a log file, select **Disabled** for the **Scheduled report generation** field instead. The Cron job will be deleted, but the times and dates that it was set to run at will be remembered so that you can easily enable it again. 

### Adding another log file
Even though the module attempts to automatically identify all the log files on your system, by reading the Apache and Squid configuration files, there may be some that it misses. This can happen the [Apache Webserver](/docs/modules/apache-webserver) or [Squid](/docs/modules/squid-proxy-server) modules have not been set up properly, if you have more than one copy of Apache installed on your system, or if the webserver has been configured to log to a filter program rather 
than to a normal file. 

If you want to generate a report from an FTP server log file, you will definitely need to add the file to the module as it does not detect ProFTPD logs automatically. You can also add logs from other web servers such as Zeus, TUX, Netscape or NSCA, assuming they use the standard CLF format that Apache does. It is even possible to create a report on the logs created by Webmin and Usermin, found at `/var/webmin/miniserv.log` and `/var/usermin/miniserv.log` respectively. 

The steps to manually add a log file for reporting on are: 
  - On the module's main page, click on the **Add a new log file for analysis** link above or below the table of existing logs. 
  - In the **Base logfile path** field, enter the full path to the log file such as `/usr/local/apache/var/foo.com.log`. If any other log files exist in the same directory whose names start with _foo.com.log_, they will be included in the report as well. 
  - From the **Log file type** menu, select the either **Apache** for CLF format files generated by a webserver, **Squid** for logs from the [Squid Proxy Server](/docs/modules/squid-proxy-server), or **FTP** for transfer logs from ProFTPD. 
  - The rest of the form can be completed in exactly the same way as you would for an existing log file.

One difference between manually added log files and those detected by the module automatically is the presence of a **Delete** button at the bottom of the log file options page. Clicking it will delete the log from the list on the main page, but will leave any reports and the log file itself untouched. 

### Editing global options
Webalizer has a master configuration file named `/etc/webalizer.conf` that is used by the module if the **Report options** field is set to **Use global options**. It is also copied when you select **Custom options** to provide the initial settings for the per-log file configuration – however, changing the global options afterwards will have no effect on any logs that are already using their own configuration file. 

If you only have one log file on your system that needs analysis, it makes more sense to use only the global `webalizer.conf` file instead of having one created just for the report on that log. And if you plan to set up reporting on multiple log files, you should edit the global Webalizer configuration first to provide a template from which the per-log configurations are copied. To edit it, the steps to follow are: 
  - On the module's main page, click on the **Edit Global Options** icon.
  - Follow steps 11 onwards in the [Editing report options](#editing-report-options) section earlier in the chapter to configure the appearance of all reports. The fields on this form have exactly the same meanings as those on the per-report options page. 
  - Click the **Save** button to update the configuration file with your changes. 

If you are generating more than one report, it makes much more sense to set options for each individually. That way you can set a different web server hostname for each, so that the title and links to pages on each report are correct.

### Module access control
You can create a Webmin user or group who has access to only a limited subset of the features of most modules. In the case the Webalizer module, you can grant a user the rights to edit options for and generate reports from only some of the logs on your system. This can be useful if your system hosts multiple Apache virtual servers, each owned by a different person. As long as each server has its own separate log file, you can give a Webmin user the rights to manage both a virtual server and its log report. 

Once a user has been given access to the module, the steps to follow to limit him to only some of the log files on your system are: 
  - In the Webmin Users module, click on Webalizer Logfile Analysis next to the name of the user. This will bring up the standard module access control form. 
  - Change the **Can edit module configuration?** field to **No**, so that he cannot modify the paths to Webalizer or its global configuration file. 
  - Leave **Can only view existing reports?** set to **No**, so that the user can edit the options for reports on log files that he owns. 
  - Set **Can edit global webalizer options?** to **No** to prevent the user editing options that may apply to other people's logs. 
  - In the **Run Webalizer as user field**, select the last radio button and enter the name of the Unix user that this Webmin user normally logs in as. This will stop him setting up reports that are generated as root, which could be a serious security risk as it would allow system files and those belonging to other people to be overwritten. 
  - In the **Only allow viewing and editing of reports for logs under** field, enter either the full path to a log file (like `/var/log/httpd/example.com.log`) or a directory that has log files under it (such as `/home/example.com/logs`). The module will hide any automatically discovered logs outside that directory, so that the user cannot set up reports for other people's websites. 
  - Hit the **Save** button to activate the new restrictions. 

Once a user has been restricted in this way, he will be able to use the module to set up reporting for only those log files in the allow directory. Reports will only be generated as the Unix user specified in step 5, which stops the Webmin user overwriting files that he would not normally be able to at a shell prompt. This makes the module quite safe for un-trusted people to use, although a malicious user could set up a reporting Cron job that runs extremely frequently and uses up an excessive amount of CPU time. 

### Module Configuration
You can set the paths that the module uses for the Webalizer program and its global configuration file by using the module configuration form, reachable through the standard **Module Config** link on the main page.
