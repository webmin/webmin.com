---
title: "Uupdates"
date: 2017-10-02
categories: []
aliases: []
toc: false
draft: false
---
# Webmin Updates

Listed below are updates to Usermin for problems that have been discovered since the release. Most are in the form of modules, which can be installed in the Usermin Configuration module of Webmin under Usermin Modules.

To have updates installed automatically using Webmin, go to the Usermin Configuration module, click on Upgrade Usermin and use the form in the Update Modules section.

<table>
<tr>
<td>**Module**</td>
<td>**Version**</td>
<th>**Problem**</th>
<td>**Solution**</td>
</tr>
<tr>
<td>**Updates to Usermin 1.823**</td>
</tr>
<tr>
<td>**Updates to Usermin 1.380**</td>
</tr>
<tr>
<td>Disk Quotas</td>
<td>1\.380</td>
<td>When opened, the first page displays the error 'Undefined subroutine &amp;main::print\_limit'</td>
<td>[New module][1]</td>
</tr>
<tr>
<td>**Updates to Usermin 1.370**</td>
</tr>
<tr>
<td>Blue Framed Theme</td>
<td>1\.370</td>
<td>Left menu categories do not expand properly on IE, and the login form is too wide</td>
<td>[New module][2]</td>
</tr>
<tr>
<td>**Updates to Usermin 1.350**</td>
</tr>
<tr>
<td>SpamAssassin Mail Filter</td>
<td>1\.350</td>
<td>The auto-whitelist page always displays the error message 'The user does not exist'</td>
<td>[New module][3]</td>
</tr>
<tr>
<td>**Updates to Usermin 1.330**</td>
</tr>
<tr>
<td>File Manager</td>
<td>1\.330</td>
<td>File downloads fail when unknown referers are not trusted</td>
<td>[New module][4]</td>
</tr>
<tr>
<td>**Updates to Usermin 1.320**</td>
</tr>
<tr>
<td>MySQL Database</td>
<td>1\.320</td>
<td>If the 'mysql' database is not accessible, the user may be incorrectly told that his login or password is invalid</td>
<td>[New module][5]</td>
</tr>
<tr>
<td>**Updates to Usermin 1.310**</td>
</tr>
<tr>
<td>SpamAssassin Mail Filter</td>
<td>1\.310</td>
<td>Current spamassassin settings are not displayed in Usermin!</td>
<td>[New module][6]</td>
</tr>
<tr>
<td>GnuPG Encryption</td>
<td>1\.310</td>
<td>The module's main page displays an error about the main::foriegn\_check function</td>
<td>[New module][7]</td>
</tr>
<tr>
<td>**Updates to Usermin 1.260**</td>
</tr>
<tr>
<td>Read Mail</td>
<td>1\.260</td>
<td>Subject lines containing HTML special characters are corrupted when replying</td>
<td>[New module][8]</td>
</tr>
<tr>
<td>Filter Mail</td>
<td>1\.260</td>
<td>When selecting to deliver to a new folder, the trailing / needed for Maildir format is not specified in .procmailrc</td>
<td>[New module][9]</td>
</tr>
<tr>
<td>**Updates to Usermin 1.220**</td>
</tr>
<tr>
<td>Read Mail</td>
<td>1\.220</td>
<td>When selecting multiple email messages to mark as read, the error 'No mail selected to mark' is always displayed.</td>
<td>[New module][10]</td>
</tr>
<tr>
<td>**Updates to Usermin 1.210**</td>
</tr>
<tr>
<td>Caldera Theme</td>
<td>1\.210</td>
<td>The category links in the top frame don't actually change categories.</td>
<td>[New module][11]</td>
</tr>
<tr>
<td>**Updates to Usermin 1.200**</td>
</tr>
<tr>
<td>File Manager</td>
<td>1\.200</td>
<td>When saving large files in DOS text format, the File Manager may hang.</td>
<td>[New module][12]</td>
</tr>
<tr>
<td>**Updates to Usermin 1.190**</td>
</tr>
<tr>
<td>Mail Forwarding and Replies</td>
<td>1\.190</td>
<td>Autoresponders setup using this module under Usermin 1.190 do not send a reply properly.</td>
<td>[New module][13]</td>
</tr>
<tr>
<td>Scheduled Emails</td>
<td>1\.190</td>
<td>Attachments selected for scheduled email are not actually properly attached.</td>
<td>[New module][14]</td>
</tr>
<tr>
<td>**Updates to Usermin 1.180**</td>
</tr>
<tr>
<td>Mount Filesystems</td>
<td>1\.180</td>
<td>Un-mounting a filesystem always fail with an error from the umount program</td>
<td>[New module][15]</td>
</tr>
<tr>
<td>**Updates to Usermin 1.170**</td>
</tr>
<tr>
<td>Fetchmail Mail Retrieval</td>
<td>1\.170</td>
<td>When you click on the Scheduled Checking button, the error message 'You are not allowed to configure scheduled checking' always appears.</td>
<td>[New module][16]</td>
</tr>
<tr>
<td>**Updates to Usermin 1.160**</td>
</tr>
<tr>
<td>Mail Forwarding and Replies</td>
<td>1\.160</td>
<td>When enabling the autoreply option, on some systems the reply will fail with the error message 'Failed to open autoreply file autoreply.txt'</td>
<td>[New module][17]</td>
</tr>
<tr>
<td>**Updates to Usermin 1.110**</td>
</tr>
<tr>
<td>Disk Quotas</td>
<td>1\.110</td>
<td>The message 'Error - Perl execution failed' appears when opening the Disk Quotas module.</td>
<td>[New module][18]</td>
</tr>
<tr>
<td>**Updates to Usermin 1.100**</td>
</tr>
<tr>
<td>Fetchmail Mail Retrieval</td>
<td>1\.100</td>
<td>When setting up scheduled checking, the script specified in the created cron job does not exist.</td>
<td>[New module][19]</td>
</tr>
<tr>
<td>**Updates to Usermin 1.090**</td>
</tr>
<tr>
<td>PostgreSQL Database</td>
<td>1\.090</td>
<td>On versions of PstgreSQL that don't support schemas, the error message 'Attribute schemaname not found' will appear when a database icon is clicked on.</td>
<td>[New module][20]</td>
</tr>
<tr>
<td>SSH/Telnet Login</td>
<td>1\.090</td>
<td>If your system runs an SSH server but not a telnet server, the module will always report that not SSH server is running.</td>
<td>[New module][21]</td>
</tr>
<tr>
<td>MSC.Linux Theme</td>
<td>1\.090</td>
<td>If a non-core module which does not make use of ui-lib.pl tries to display an error message, the error 'Undefined subroutine &amp;main::ui\_print\_header' will appear instead.</td>
<td>[New module][22]</td>
</tr>
<tr>
<td>File Manager</td>
<td>1\.090</td>
<td>When deleting a directory, it does not actually get removed. When searching for files from / , no results are ever found.</td>
<td>[New module][23]</td>
</tr>
<tr>
<td>Apache Options Files</td>
<td>1\.090</td>
<td>When Apache has mod\_apachessl enabled, the error 'Undefined subroutine &amp;main::mod\_apachessl\_directives' appears when accessing this module.</td>
<td>[New module][24]</td>
</tr>
<tr>
<td>**Updates to Usermin 1.080**</td>
</tr>
<tr>
<td>Disk Quotas</td>
<td>1\.080</td>
<td>On Linux systems, the error 'module mount does not exist' appears when entering the module.</td>
<td>[New module][25]</td>
</tr>
<tr>
<td>**Updates to Usermin 1.070**</td>
</tr>
<tr>
<td>Change Password</td>
<td>1\.070</td>
<td>When attempting to change your password, the error 'syntax error at (eval 12) line 4, near @INC(' can occur.</td>
<td>[New module][26]</td>
</tr>
<tr>
<td>Read Mail</td>
<td>1\.070</td>
<td>When sending mail via SMTP to a Qmail server, the error 'SMTP command . failed : 451 See http://pobox.com/~djb/docs/smtplf.html' may occur.</td>
<td>[New module][27]</td>
</tr>
<tr>
<td>**Updates to Usermin 1.060**</td>
</tr>
<tr>
<td>Protected Web Directories</td>
<td>1\.060</td>
<td>When searching for existing protected directories, .htaccess files are found instead of the directories containing them.</td>
<td>[New module][28]</td>
</tr>
<tr>
<td>**Updates to Usermin 1.050**</td>
</tr>
<tr>
<td>SpamAssassin Mail Filter</td>
<td>1\.050</td>
<td>When editing body tests, the test name appears as a number instead of the correct name.</td>
<td>[New module][29]</td>
</tr>
<tr>
<td>Running Processes</td>
<td>1\.050</td>
<td>The Change Passwords and GnuPG Encryption modules may fail to operate properly, due to a bug in this module.</td>
<td>[New module][30]</td>
</tr>
<tr>
<td>**Updates to Usermin 1.030**</td>
</tr>
<tr>
<td>MySQL Database</td>
<td>1\.030</td>
<td>Various problems occur when editing or adding to the data in a table.</td>
<td>[New module][31]</td>
</tr>
<tr>
<td>**Updates to Usermin 1.020**</td>
</tr>
<tr>
<td>Disk Quotas</td>
<td>1\.020</td>
<td>Adds support for NetBSD.</td>
<td>[New module][32]</td>
</tr>
<tr>
<td>Read Mail</td>
<td>1\.020</td>
<td>When using some older versions of Perl, the error 'Not enough arguments for mkdir' can appear when you enter the module.</td>
<td>[New module][33]</td>
</tr>
<tr>
<td>**Updates to Usermin 1.010**</td>
</tr>
<tr>
<td>Read Mail</td>
<td>1\.010</td>
<td>External mail folders with spaces in their filenames do not appear in the folders list, and cannot be read.</td>
<td>[New module][34]</td>
</tr>
<tr>
<td>File Manager</td>
<td>1\.010</td>
<td>Additional configured directories to which users should be allowed access are not actually accessible.</td>
<td>[New module][35]</td>
</tr>
<tr>
<td>**Updates to Usermin 1.000**</td>
</tr>
<tr>
<td>Fetchmail Mail Retrieval</td>
<td>1\.000</td>
<td>Manually created entries in .fetchmailrc with quotes are not preserved properly.</td>
<td>[New module][36]</td>
</tr>
<tr>
<td>**Updates to Usermin 0.990**</td>
</tr>
<tr>
<td>Read Mail</td>
<td>0\.980</td>
<td>When deleting a folder, the message 'Missing or invalid number of messages per page' appears.</td>
<td>[New module][37]</td>
</tr>
<tr>
<td>**Updates to Usermin 0.980**</td>
</tr>
<tr>
<td>Running Processes</td>
<td>0\.980</td>
<td>On OSX, some modules report the error message 'Undefined subroutine proc::get\_new\_pty' due to a missing function in the Running Processes module.</td>
<td>[New module][38]</td>
</tr>
<tr>
<td>MySQL Database</td>
<td>0\.980</td>
<td>Enum or set fields with commas in their options cannot be edited - all the values are shown as 'enun' or 'set'.</td>
<td>[New module][39]</td>
</tr>
<tr>
<td>Fetchmail Mail Retrieval</td>
<td>0\.980</td>
<td>The error 'You are not allowed to start fetchmail' occurs when the Start button is clicked.</td>
<td>[New module][40]</td>
</tr>
<tr>
<td>**Updates to Usermin 0.970**</td>
</tr>
<tr>
<td>MySQL Database</td>
<td>0\.970</td>
<td>Attempting to do almost anything in the module causes an error message about the quotestr function.</td>
<td>[New module][41]</td>
</tr>
<tr>
<td>**Updates to Usermin 0.950**</td>
</tr>
<tr>
<td>Read Mail</td>
<td>0\.950</td>
<td>Sent mail and drafts are not saved, and mail moved to another mbox format folder is lost.</td>
<td>[New module][42]</td>
</tr>
<tr>
<td>Procmail Mail Filter</td>
<td>0\.950</td>
<td>Complex procmail recipe files (such as the one used by SpamAssassin) cannot be parsed by Usermin, resulting in an 'Unknown line' error message. This update also turns off the diaplay of receipes in include files by default.</td>
<td>[New module][43]</td>
</tr>
<tr>
<td>**Updates to Usermin 0.940**</td>
</tr>
<tr>
<td>Procmail Mail Filter</td>
<td>0\.940</td>
<td>Procmail recipes that evaluate the output of a command cannot be created or edited properly.</td>
<td>[New module][44]</td>
</tr>
<tr>
<td>**Updates to Usermin 0.930**</td>
</tr>
<tr>
<td>Mail Forwarding</td>
<td>0\.930</td>
<td>When creating a new forwarding rule to an email address, the user's home directory is incorrectly prepended to the address when it is saved.</td>
<td>[New module][45]</td>
</tr>
</table>
[Updates data file][46]

  [1]: uupdates/quota-1.380-1.wbm.gz
  [2]: uupdates/blue-theme-1.370-1.wbt.gz
  [3]: uupdates/spam-1.350-1.wbm.gz
  [4]: uupdates/file-1.330-2.wbm.gz
  [5]: uupdates/mysql-1.320-3.wbm.gz
  [6]: updates/spam-1.310-2.wbm.gz
  [7]: updates/gnupg-1.310-1.wbm.gz
  [8]: uupdates/mailbox-1.260-1.wbm.gz
  [9]: uupdates/filter-1.260-1.wbm.gz
  [10]: uupdates/mailbox-1.220-1.wbm.gz
  [11]: uupdates/caldera-1.210-1.wbt.gz
  [12]: uupdates/file-1.200-4.wbm.gz
  [13]: uupdates/forward-1.190-1.wbm.gz
  [14]: uupdates/schedule-1.190-1.wbm.gz
  [15]: uupdates/usermount-1.180-1.wbm.gz
  [16]: uupdates/fetchmail-1.170-2.wbm.gz
  [17]: uupdates/forward-1.160-1.wbm.gz
  [18]: uupdates/quota-1.110-1.wbm.gz
  [19]: uupdates/fetchmail-1.100-1.wbm.gz
  [20]: uupdates/postgresql-1.090-1.wbm.gz
  [21]: uupdates/telnet-1.090-1.wbm.gz
  [22]: uupdates/mscstyle3-1.090-1.wbt.gz
  [23]: uupdates/file-1.090-2.wbm.gz
  [24]: uupdates/htaccess-1.090-1.wbm.gz
  [25]: uupdates/quota-1.080-1.wbm.gz
  [26]: uupdates/changepass-1.070-2.wbm.gz
  [27]: uupdates/mailbox-1.070-1.wbm.gz
  [28]: uupdates/htaccess-htpasswd-1.060-1.wbm.gz
  [29]: uupdates/spam-1.050-2.wbm.gz
  [30]: uupdates/proc-1.050-1.wbm.gz
  [31]: uupdates/mysql-1.030-2.wbm.gz
  [32]: uupdates/quota-1.020-1.wbm.gz
  [33]: uupdates/mailbox-1.020-1.wbm.gz
  [34]: uupdates/mailbox-1.010-1.wbm.gz
  [35]: uupdates/file-1.010-1.wbm.gz
  [36]: uupdates/fetchmail-1.000-1.wbm.gz
  [37]: uupdates/mailbox-0.980-1.wbm.gz
  [38]: uupdates/proc-0.980-2.wbm.gz
  [39]: uupdates/mysql-0.980-2.wbm.gz
  [40]: uupdates/fetchmail-0.980-2.wbm.gz
  [41]: uupdates/mysql-0.970-1.wbm.gz
  [42]: uupdates/mailbox-0.950-1.wbm.gz
  [43]: uupdates/procmail-0.950-1.wbm.gz
  [44]: uupdates/procmail-0.940-7.wbm.gz
  [45]: uupdates/forward-0.930-2.wbm.gz
  [46]: updates/uupdates.txt
