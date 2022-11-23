---
title: "Webmin Updates"
date: 2017-10-02
categories: []
aliases: []
toc: false
draft: false
---
<div id="main">
		



<p>
Listed below are updates to Webmin for problems that have been
discovered since the each release. Most are in the form of modules, which
can be installed under Webmin Configuration -&gt; Webmin Modules. </p>

<p>To have updates installed automatically, go to the Webmin Configuration
module, click on Upgrade Webmin and use the form in the Update Modules section.
</p>

<table width="100%">
<tr class="maintitle"> <td><b>Module</b></td> <td><b>Version</b></td> <td width="70%"><b>Problem</b></td> <td><b>Solution</b></td> </tr>

<tr class="maintitle"> <td colspan="4"><b>Updates to Webmin 1.830</b></td> </tr>
<!-- new update here -->

<tr class="maintitle"> <td colspan="4"><b>Updates to Webmin 1.810</b></td> </tr>
<tr class="mainbody"> <td>BIND DNS Server</td> <td>1.810</td> <td>Fixed the error : Can&#39;t use an undefined value as a symbol reference</td> <td nowrap><a href="updates/bind8-1.810-3.wbm.gz">New module</a></td> </tr>

<tr class="maintitle"> <td colspan="4"><b>Updates to Webmin 1.801</b></td> </tr>
<tr class="mainbody"> <td>Samba Windows File Sharing</td> <td>1.800</td> <td>Fix error about foriegn_require function</td> <td nowrap><a href="updates/samba-1.800-3.wbm.gz">New module</a></td> </tr>


<tr class="maintitle"> <td colspan="4"><b>Updates to Webmin 1.780</b></td> </tr>
<tr class="mainbody"> <td>Authentic Theme</td> <td>1.780</td> <td>Fixed editor in Filemin saving content incorrectly, when multiple files were opened at once</td> <td nowrap><a href="updates/authentic-theme-1.780-3.wbt.gz">New module</a></td> </tr>

<tr class="maintitle"> <td colspan="4"><b>Updates to Webmin 1.730</b></td> </tr>
<tr class="mainbody"> <td>MySQL Database Server</td> <td>1.730</td> <td>MySQL backups run as a non-root user fail if the user has a .my.cnf file</td> <td nowrap><a href="updates/mysql-1.730-3.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>Disk and Network Filesystems</td> <td>1.730</td> <td>Fixes the error Undefined subroutine &amp;mount::getpwgid</td> <td nowrap><a href="updates/mount-1.730-1.wbm.gz">New module</a></td> </tr>


<tr class="maintitle"> <td colspan="4"><b>Updates to Webmin 1.670</b></td> </tr>
<tr class="mainbody"> <td>Webmin Users</td> <td>1.670</td> <td>Fix Perl error calling webmin::show_twofactor_form_auth when enabling two-factor authentication</td> <td nowrap><a href="updates/acl-1.670-2.wbm.gz">New module</a></td> </tr>


<tr class="maintitle"> <td colspan="4"><b>Updates to Webmin 1.650</b></td> </tr>
<tr class="mainbody"> <td>Linux Firewall</td> <td>1.650</td> <td>When editing a SNAT rule, the source IP cannot be entered</td> <td nowrap><a href="updates/firewall-1.650-2.wbm.gz">New module</a></td> </tr>

<tr class="maintitle"> <td colspan="4"><b>Updates to Webmin 1.640</b></td> </tr>
<tr class="mainbody"> <td>Apache Webserver</td> <td>1.640</td> <td>Apache is shown as not running on Debian 7 systems, even when it really is</td> <td nowrap><a href="updates/apache-1.640-3.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>Software Packages</td> <td>1.640</td> <td>Fixes the error &#39;The FreeBSD Package Manager package system requires the pkg info command&#39;</td> <td nowrap><a href="updates/software-1.640-2.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>Apache Webserver</td> <td>1.640</td> <td>Fixes the error &#39;Undefined subroutine &amp;apache::autoindex_directives&#39;</td> <td nowrap><a href="updates/apache-1.640-2.wbm.gz">New module</a></td> </tr>


<tr class="maintitle"> <td colspan="4"><b>Updates to Webmin 1.630</b></td> </tr>
<tr class="mainbody"> <td>Running Processes</td> <td>1.630</td> <td>Fixes total and free memory display on OpenVZ systems</td> <td nowrap><a href="updates/proc-1.630-2.wbm.gz">New module</a></td> </tr>

<tr class="maintitle"> <td colspan="4"><b>Updates to Webmin 1.600</b></td> </tr>
<tr class="mainbody"> <td>Change Passwords</td> <td>1.600</td> <td>Fix for potential XSS attack via real name field</td> <td nowrap><a href="updates/passwd-1.600-5.wbm.gz">New module</a></td> </tr>

<tr class="maintitle"> <td colspan="4"><b>Updates to Webmin 1.590</b></td> </tr>
<tr class="mainbody"> <td>File Manager</td> <td>1.590</td> <td>Fixes two XSS security issues</td> <td nowrap><a href="updates/file-1.590-3.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>System and Server Status</td> <td>1.590</td> <td>Fixes the error Cant use global $_ in &quot;my&quot; at edit_mon.cgi line 316</td> <td nowrap><a href="updates/status-1.590-1.wbm.gz">New module</a></td> </tr>


<tr class="maintitle"> <td colspan="4"><b>Updates to Webmin 1.560</b></td> </tr>
<tr class="mainbody"> <td>Backup Configuration Files</td> <td>1.560</td> <td>Fixes the error &#39;Backup failed : No modules provided any existing files to backup&#39; when making an immediate backup</td> <td nowrap><a href="updates/backup-config-1.560-2.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>Bootup and Shutdown</td> <td>1.560</td> <td>Fixes a problem on Debian and Ubuntu systems in the Webmin Configuration module that prevents Webmin from being started at boot time</td> <td nowrap><a href="updates/init-1.560-2.wbm.gz">New module</a></td> </tr>


<tr class="maintitle"> <td colspan="4"><b>Updates to Webmin 1.540</b></td> </tr>
<tr class="mainbody"> <td>Users and Groups</td> <td>1.540</td> <td>Fixes an XSS attack that can be exploited if un-trusted users are allowed to change their own real names</td> <td nowrap><a href="updates/useradmin-1.540-2.wbm.gz">New module</a></td> </tr>

<tr class="maintitle"> <td colspan="4"><b>Updates to Webmin 1.530</b></td> </tr>
<tr class="mainbody"> <td>System and Server Status</td> <td>1.530</td> <td>Fix error Bad arg length for Socket::pack_sockaddr_in in Remote Ping monitor</td> <td nowrap><a href="updates/status-1.530-1.wbm.gz">New module</a></td> </tr>

<tr class="maintitle"> <td colspan="4"><b>Updates to Webmin 1.480</b></td> </tr>
<tr class="mainbody"> <td>MySQL Database Server</td> <td>1.480</td> <td>Fixed bugs with importing CSV and executing SQL from files</td> <td nowrap><a href="updates/mysql-1.480-1.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>LDAP Users and Groups</td> <td>1.480</td> <td>When a group is renamed in LDAP, the CN is not properly updated</td> <td nowrap><a href="updates/ldap-useradmin-1.480-1.wbm.gz">New module</a></td> </tr>


<tr class="maintitle"> <td colspan="4"><b>Updates to Webmin 1.470</b></td> </tr>
<tr class="mainbody"> <td>Software Packages</td> <td>1.470</td> <td>Use new CWS package installer on Solaris</td> <td nowrap><a href="updates/software-1.470-2.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>File Manager</td> <td>1.470</td> <td>Uploading a file that overwrites an existing file causes it to be truncated to zero length</td> <td nowrap><a href="updates/file-1.470-2.wbm.gz">New module</a></td> </tr>


<tr class="maintitle"> <td colspan="4"><b>Updates to Webmin 1.460</b></td> </tr>
<tr class="mainbody"> <td>System and Server Status</td> <td>1.460</td> <td>All Remote TCP Service monitors report that the service is not installed</td> <td nowrap><a href="updates/status-1.460-1.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>File Manager</td> <td>1.460</td> <td>Opening the file manager module fails with an error about un-trusted referers</td> <td nowrap><a href="updates/file-1.460-1.wbm.gz">New module</a></td> </tr>


<tr class="maintitle"> <td colspan="4"><b>Updates to Webmin 1.450</b></td> </tr>
<tr class="mainbody"> <td>Webmin Configuration</td> <td>1.450</td> <td>Upgrading from www.webmin.com failed with the error message &#39;Failed to write to :&#39;</td> <td nowrap><a href="updates/webmin-1.450-1.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>BIND DNS Server</td> <td>1.450</td> <td>If any views exist, Webmin falsely warnings that &#39;the following zones are not in any view&#39;, even though they are</td> <td nowrap><a href="updates/bind8-1.450-1.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>Postfix Mail Server</td> <td>1.450</td> <td>Alias management fails with an error about the missing rebuild_map_cmd function</td> <td nowrap><a href="updates/postfix-1.450-1.wbm.gz">New module</a></td> </tr>


<tr class="maintitle"> <td colspan="4"><b>Updates to Webmin 1.440</b></td> </tr>
<tr class="mainbody"> <td>Blue Framed Theme</td> <td>1.440</td> <td>Left menu categories do not expand properly on IE, and the login form is too wide</td> <td nowrap><a href="updates/blue-theme-1.440-1.wbt.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>LDAP Users and Groups</td> <td>1.440</td> <td>When there are too many LDAP users to display, the link to add a new one does not appear</td> <td nowrap><a href="updates/ldap-useradmin-1.440-1.wbm.gz">New module</a></td> </tr>

<tr class="maintitle"> <td colspan="4"><b>Updates to Webmin 1.420</b></td> </tr>
<tr class="mainbody"> <td>Running Processes</td> <td>1.420</td> <td>Memory display on FreeBSD is shown in GB instead of MB</td> <td nowrap><a href="updates/proc-1.420-2.wbm.gz">New module</a></td> </tr>

<tr class="maintitle"> <td colspan="4"><b>Updates to Webmin 1.400</b></td> </tr>
<tr class="mainbody"> <td>Users and Groups</td> <td>1.400</td> <td>When saving a group, the member list may be incorrectly cleared</td> <td nowrap><a href="updates/useradmin-1.400-5.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>File Manager</td> <td>1.400</td> <td>File downloads fail when unknown referers are not trusted</td> <td nowrap><a href="updates/file-1.400-2.wbm.gz">New module</a></td> </tr>


<tr class="maintitle"> <td colspan="4"><b>Updates to Webmin 1.390</b></td> </tr>
<tr class="mainbody"> <td>MySQL Database Server</td> <td>1.390</td> <td>When trying to login as a user without access to the &#39;mysql&#39; database, the login can be reported by Webmin as invalid even though the username and password are actually correct</td> <td nowrap><a href="updates/mysql-1.390-3.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>Apache Webserver</td> <td>1.390</td> <td>Deleting Apache virtual hosts that do not have their own files does not work</td> <td nowrap><a href="updates/apache-1.390-2.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>Disk Quotas</td> <td>1.390</td> <td>When only user quotas are active on Linux, both user and group quotas are incorrectly shown to be enabled</td> <td nowrap><a href="updates/quota-1.390-1.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>Users and Groups</td> <td>1.390</td> <td>The access control restriction on the allowed home directory can be defeated by entering a path with .. in it</td> <td nowrap><a href="updates/useradmin-1.390-1.wbm.gz">New module</a></td> </tr>


<tr class="maintitle"> <td colspan="4"><b>Updates to Webmin 1.380</b></td> </tr>
<tr class="mainbody"> <td>BIND DNS Server</td> <td>1.380</td> <td>Deleting zones within views from the main page can cause incorrect directives to be removed</td> <td nowrap><a href="updates/bind8-1.380-2.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>Postfix Mail Server</td> <td>1.380</td> <td>Added back missing support for comments, manual map editing and PCRE maps</td> <td nowrap><a href="updates/postfix-1.380-1.wbm.gz">New module</a></td> </tr>


<tr class="maintitle"> <td colspan="4"><b>Updates to Webmin 1.370</b></td> </tr>
<tr class="mainbody"> <td>Webmin Users</td> <td>1.370</td> <td>Allowed and denied IP addresses for individual Webmin users cannot be set properly</td> <td nowrap><a href="updates/acl-1.370-1.wbm.gz">New module</a></td> </tr>

<tr class="maintitle"> <td colspan="4"><b>Updates to Webmin 1.360</b></td> </tr>
<tr class="mainbody"> <td>LDAP Users and Groups</td> <td>1.360</td> <td>When creating users from a batch file, the error &#39;Cant call method search without a package or object reference&#39; appears</td> <td nowrap><a href="updates/ldap-useradmin-1.360-3.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>LDAP Users and Groups</td> <td>1.360</td> <td>When an LDAP user or group is created, the in-memory cache is not properly updated. This can lead to problems when Virtualmin adds users or groups to LDAP</td> <td nowrap><a href="updates/ldap-useradmin-1.360-1.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>Disk and Network Filesystems</td> <td>1.360</td> <td>On systems with ReiserFS filesystems, Webmin cron jobs can output the spurious warning &#39;Reiserfstune is not allowed to be run on mounted filesystem&#39;</td> <td nowrap><a href="updates/mount-1.360-1.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>Network Configuration</td> <td>1.360</td> <td>Boot-time network interfaces are not shown properly on Slackware 11</td> <td nowrap><a href="updates/net-1.360-1.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>DHCP Server</td> <td>1.360</td> <td>Deleting multiple hosts, groups or subnets at once does not work</td> <td nowrap><a href="updates/dhcpd-1.360-1.wbm.gz">New module</a></td> </tr>


<tr class="maintitle"> <td colspan="4"><b>Updates to Webmin 1.340</b></td> </tr>
<tr class="mainbody"> <td>BIND DNS Server</td> <td>1.340</td> <td>When deleting multiple DNS records, the wrong ones can sometimes be removed</td> <td nowrap><a href="updates/bind8-1.340-6.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>Apache Webserver</td> <td>1.340</td> <td>Radio button fields in many forms have the wrong name, causing virtual host creation to fail and possible incorrect changes to the Apache config</td> <td nowrap><a href="updates/apache-1.340-5.wbm.gz">New module</a></td> </tr>


<tr class="maintitle"> <td colspan="4"><b>Updates to Webmin 1.320</b></td> </tr>
<tr class="mainbody"> <td>Read User Mail</td> <td>1.320</td> <td>When a non-master admin user (such as a Virtualmin domain owner) tries to send email, the error message &#39;Missing from address&#39; appears.</td> <td nowrap><a href="updates/mailboxes-1.320-4.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>System and Server Status</td> <td>1.320</td> <td>If no remote Webmin servers are defined, attempting to add a monitor always fails with the error message &#39;No hosts or groups to run on selected&#39;</td> <td nowrap><a href="updates/status-1.320-4.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>BIND DNS Server</td> <td>1.320</td> <td>When there are too many zones to list on the system, the links for adding new zones do not appear.</td> <td nowrap><a href="updates/bind8-1.320-3.wbm.gz">New module</a></td> </tr>


<tr class="maintitle"> <td colspan="4"><b>Updates to Webmin 1.310</b></td> </tr>
<tr class="mainbody"> <td>File Manager</td> <td>1.310</td> <td>When opening the access control page for the File Manager module, the error &#39;Undefined subroutine file::ui_radio&#39; appears</td> <td nowrap><a href="updates/file-1.310-1.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>BIND DNS Server</td> <td>1.310</td> <td>The button to convert a slave zone to master does not appear when running under a chroot directory</td> <td nowrap><a href="updates/bind8-1.310-1.wbm.gz">New module</a></td> </tr>


<tr class="maintitle"> <td colspan="4"><b>Updates to Webmin 1.300</b></td> </tr>
<tr class="mainbody"> <td>Postfix Configuration</td> <td>1.300</td> <td>Aliases that have been commented out (disabled) are not shown, and comments are shown as empty aliases.</td> <td nowrap><a href="updates/postfix-1.300-3.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>Apache Webserver</td> <td>1.300</td> <td>When manually editing the directives in a virtual server, the entire httpd.conf file is shown.</td> <td nowrap><a href="updates/apache-1.300-1.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>Postfix Configuration</td> <td>1.300</td> <td>Aliases that have been commented out (disabled) are not shown.</td> <td nowrap><a href="updates/postfix-1.300-2.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>Postfix Configuration</td> <td>1.300</td> <td>Aliases that have been commented out (disabled) are not shown.</td> <td nowrap><a href="updates/postfix-1.300-1.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>Sendmail Configuration</td> <td>1.300</td> <td>Aliases that have been commented out (disabled) are not shown.</td> <td nowrap><a href="updates/sendmail-1.300-1.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>DHCP Server</td> <td>1.300</td> <td>The List Leases page can fail with a division by zero error, and checkboxes on the main page for deleting multiple subnets do not work.</td> <td nowrap><a href="updates/dhcpd-1.300-1.wbm.gz">New module</a></td> </tr>


<tr class="maintitle"> <td colspan="4"><b>Updates to Webmin 1.290</b></td> </tr>
<tr class="mainbody"> <td>Read User Mail</td> <td>1.290</td> <td>When a user is restricted to only a subset of mailboxes and the system has more than 200 users, no users appear on the module&#39;s main page.</td> <td nowrap><a href="updates/mailboxes-1.290-3.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>MySQL Database Server</td> <td>1.290</td> <td>When attempting to backup a MySQL database as a non-root user, the following error appears : Access denied for user &#39;username&#39;@&#39;localhost&#39; to database &#39;mysql&#39;</td> <td nowrap><a href="updates/mysql-1.290-2.wbm.gz">New module</a></td> </tr>


<tr class="maintitle"> <td colspan="4"><b>Updates to Webmin 1.280</b></td> </tr>
<tr class="mainbody"> <td>Caldera Theme</td> <td>1.280</td> <td>The category links in the top frame don&#39;t actually change categories.</td> <td nowrap><a href="updates/caldera-1.280-2.wbt.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>Read User Mail</td> <td>1.280</td> <td>Next / previous mail page links do not appear for users with non-alphanumeric characters in their names</td> <td nowrap><a href="updates/mailboxes-1.280-1.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>System and Server Status</td> <td>1.280</td> <td>Monitors that check remote Webmin servers fail if they have been upgraded to 1.280</td> <td nowrap><a href="updates/status-1.280-1.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>System Time</td> <td>1.280</td> <td>Scheduled syncing with a time server times out or does not work.</td> <td nowrap><a href="updates/time-1.280-1.wbm.gz">New module</a></td> </tr>


<tr class="maintitle"> <td colspan="4"><b>Updates to Webmin 1.270</b></td> </tr>
<tr class="mainbody"> <td>File Manager</td> <td>1.270</td> <td>When saving large files in DOS text format, the File Manager may hang.</td> <td nowrap><a href="updates/file-1.270-4.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>LDAP Users and Groups</td> <td>1.270</td> <td>When setting a password for a user, an error about the check_password_restrictions function is displayed.</td> <td nowrap><a href="updates/ldap-useradmin-1.270-1.wbm.gz">New module</a></td> </tr>


<tr class="maintitle"> <td colspan="4"><b>Updates to Webmin 1.260</b></td> </tr>
<tr class="mainbody"> <td>Bootup and Shutdown</td> <td>1.260</td> <td>On some Redhat-derived systems, enabling an action at boot does not take effect.</td> <td nowrap><a href="updates/init-1.260-2.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>Disk and Network Filesystems</td> <td>1.260</td> <td>Opening this module on NetBSD 3 triggers an error about compiling the netbsd-mounts.c program.</td> <td nowrap><a href="updates/mount-1.260-3.wbm.gz">New module</a></td> </tr>


<tr class="maintitle"> <td colspan="4"><b>Updates to Webmin 1.250</b></td> </tr>
<tr class="mainbody"> <td>Network Configuration</td> <td>1.250</td> <td>Virtual network interfaces cannot be created properly on SuSE Linux 9.1 and greater</td> <td nowrap><a href="updates/net-1.250-4.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>Network Configuration</td> <td>1.250</td> <td>The Apply Configuration button does not appear on SuSE Linux 10.0, and other functions may not operate properly either.</td> <td nowrap><a href="updates/net-1.250-2.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>Webmin Users</td> <td>1.250</td> <td>When a new Webmin user is added automatically at the same time as a Unix user, his ACL settings are not properly copied from the group.</td> <td nowrap><a href="updates/acl-1.250-2.wbm.gz">New module</a></td> </tr>


<tr class="maintitle"> <td colspan="4"><b>Updates to Webmin 1.240</b></td> </tr>
<tr class="mainbody"> <td>MySQL Database Server</td> <td>1.240</td> <td>When using MySQL version 4.1 or above, Webmin always reports that attempts to login to the database server have failed.</td> <td nowrap><a href="updates/mysql-1.240-9.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>Upload and Download</td> <td>1.240</td> <td>A Webmin user with non-root access to this module can still use it to view any file as root, such as /etc/shadow.</td> <td nowrap><a href="updates/updown-1.240-8.wbm.gz">New module</a></td> </tr>


<tr class="maintitle"> <td colspan="4"><b>Updates to Webmin 1.230</b></td> </tr>
<tr class="mainbody"> <td>Disk Quotas</td> <td>1.230</td> <td>On some Linux systems, changes to quotas sometimes do not take effect.</td> <td nowrap><a href="updates/quota-1.230-1.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>Perl Modules</td> <td>1.230</td> <td>Installing modules from CPAN files with an &#39;invalid URL&#39; error message.</td> <td nowrap><a href="updates/cpan-1.230-1.wbm.gz">New module</a></td> </tr>


<tr class="maintitle"> <td colspan="4"><b>Updates to Webmin 1.220</b></td> </tr>
<tr class="mainbody"> <td>Disk and Network Filesystems</td> <td>1.220</td> <td>When mounting an NFS filesystem on Solaris or OSF1, the error message &#39;Undefined subroutine &amp;main::unlink_dir called&#39; appears.</td> <td nowrap><a href="updates/mount-1.220-2.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>MySQL Database Server</td> <td>1.220</td> <td>When executing a backup that has a command to run before or after, an error message like &#39;/bin/sh: line 1: ((: /path/to/script.sh: syntax error&#39; appears</td> <td nowrap><a href="updates/mysql-1.220-2.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>PostgreSQL Database Server</td> <td>1.220</td> <td>When executing a backup that has a command to run before or after, an error message like &#39;/bin/sh: line 1: ((: /path/to/script.sh: syntax error&#39; appears</td> <td nowrap><a href="updates/postgresql-1.220-2.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>System Time</td> <td>1.220</td> <td>On FreeBSD systems, the module always displays the error message &#39;Unrecognized hwclock output format&#39; on the main page.</td> <td nowrap><a href="updates/time-1.220-1.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>Postfix Configuration</td> <td>1.220</td> <td>When deleting mail file from queue, the error message &#39;Undefined subroutine &amp;main::translate_file&#39; always appears.</td> <td nowrap><a href="updates/postfix-1.220-1.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>ProFTPD Server</td> <td>1.220</td> <td>Webmin always reports that it cannot get the ProFTPd version number, even though it is being reported correctly.</td> <td nowrap><a href="updates/proftpd-1.220-1.wbm.gz">New module</a></td> </tr>


<tr class="maintitle"> <td colspan="4"><b>Updates to Webmin 1.210</b></td> </tr>
<tr class="mainbody"> <td>BIND DNS Server</td> <td>1.210</td> <td>When clicking on a zone in a view from the main menu, its records are not displayed properly.</td> <td nowrap><a href="updates/bind8-1.210-3.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>MySQL Database Server</td> <td>1.210</td> <td>When executing SQL commands in a file, Webmin always reports that they have failed, even when successful.</td> <td nowrap><a href="updates/mysql-1.210-2.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>Users and Groups</td> <td>1.210</td> <td>On OSX, the Users and Groups module always reports that no users or groups exist.</td> <td nowrap><a href="updates/useradmin-1.210-2.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>MSC.Linux Theme</td> <td>1.210</td> <td>Some third-party modules report the error &#39;Cant locate Webmin/Textbox.pm&#39; when this default theme is in use.</td> <td nowrap><a href="updates/mscstyle3-1.210-1.wbt.gz">New module</a></td> </tr>


<tr class="maintitle"> <td colspan="4"><b>Updates to Webmin 1.200</b></td> </tr>
<tr class="mainbody"> <td>BIND DNS Server</td> <td>1.200</td> <td>When the &#39;Add new zones to file&#39; option is set on the Module Config page, new zones and views are added to the wrong place in that file.</td> <td nowrap><a href="updates/bind8-1.200-1.wbm.gz">New module</a></td> </tr>

<tr class="maintitle"> <td colspan="4"><b>Updates to Webmin 1.190</b></td> </tr>
<tr class="mainbody"> <td>BSD Firewall</td> <td>1.190</td> <td>When the Apply button is clicked, the rule editing page is displayed instead of the configuration being applied.</td> <td nowrap><a href="updates/ipfw-1.190-3.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>PostgreSQL Database Server</td> <td>1.190</td> <td>When using version 7.1 of PostgreSQL, the error message &#39; ERROR: Relation pg_namespace does not exist&#39; appears when opening a database.</td> <td nowrap><a href="updates/postgresql-1.190-1.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>System and Server Status</td> <td>1.190</td> <td>When the module is configured to send one email per down service, it sends an additional blank email every time a problem is detected.</td> <td nowrap><a href="updates/status-1.190-1.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>Usermin Configuration</td> <td>1.190</td> <td>When saving the Usermin update schedule, the error message &#39;Missing or invalid number of days&#39; always appears.</td> <td nowrap><a href="updates/usermin-1.190-1.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>DHCP Server</td> <td>1.190</td> <td>When adding a host or subnet, the error message &#39;Unsupported file or mode &gt;&#39; appears.</td> <td nowrap><a href="updates/dhcpd-1.190-1.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>BIND DNS Server</td> <td>1.190</td> <td>When creating a master or slave zone, an error message appears and the zone is not created.</td> <td nowrap><a href="updates/bind8-1.190-1.wbm.gz">New module</a></td> </tr>


<tr class="maintitle"> <td colspan="4"><b>Updates to Webmin 1.180</b></td> </tr>
<tr class="mainbody"> <td>BIND DNS Server</td> <td>1.180</td> <td>On OpenBSD systems, opening the BIND module causes a Webmin process to go into an infinite loop and use up all available memory.</td> <td nowrap><a href="updates/bind8-1.180-3.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>LDAP Users and Groups</td> <td>1.180</td> <td>The default warning and inactive days are not taken from the module configuration. For Samba users the account flags are overwritten when editing a user.</td> <td nowrap><a href="updates/ldap-useradmin-1.180-1.wbm.gz">New module</a></td> </tr>


<tr class="maintitle"> <td colspan="4"><b>Updates to Webmin 1.170</b></td> </tr>
<tr class="mainbody"> <td>NFS Exports</td> <td>1.170</td> <td>The error message &#39;Undefined subroutine &amp;main::ui_print_header&#39; appears when opening the module.</td> <td nowrap><a href="updates/hpuxexports-1.170-5.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>SSH Server</td> <td>1.170</td> <td>The Apply Changes button does not actually restart SSHd or apply the configuration.</td> <td nowrap><a href="updates/sshd-1.170-2.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>Extended Internet Services</td> <td>1.170</td> <td>When applying the xinet configuration, an error message about sending a HUP signal is always incorrectly displayed.</td> <td nowrap><a href="updates/xinetd-1.170-2.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>Sendmail Configuration</td> <td>1.170</td> <td>When the &#39;Everything&#39; option is selected for a Spam Control rule, it is incorrected created with the prefix &#39;selected:&#39;</td> <td nowrap><a href="updates/sendmail-1.170-1.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>Disk Quotas</td> <td>1.170</td> <td>When editing quotas for a user or group, changes do not get saved on systems running the 2.6 kernel</td> <td nowrap><a href="updates/quota-1.170-1.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>Bandwidth Monitoring</td> <td>1.170</td> <td>After setting up bandwidth monitoring, the error message &#39;Unknown IPtables save file line&#39; appears.</td> <td nowrap><a href="updates/bandwidth-1.170-1.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>SSH Server</td> <td>1.170</td> <td>The SSH server is always shown as not running, making it impossible to apply configuration changes.</td> <td nowrap><a href="updates/sshd-1.170-1.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>System and Server Status</td> <td>1.170</td> <td>The file existance and change monitors do not work.</td> <td nowrap><a href="updates/status-1.170-1.wbm.gz">New module</a></td> </tr>


<tr class="maintitle"> <td colspan="4"><b>Updates to Webmin 1.160</b></td> </tr>
<tr class="mainbody"> <td>File Manager</td> <td>1.160</td> <td>A restricted user who has access to a directory with root privileges can delete its parent directory.</td> <td nowrap><a href="updates/file-1.160-5.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>BIND DNS Server</td> <td>1.160</td> <td>When applying changes on a slave nameserver, the error message &#39;Failed to signal process 1234 : Bad file descriptor&#39; is displayed.</td> <td nowrap><a href="updates/bind8-1.160-4.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>Usermin Configuration</td> <td>1.160</td> <td>Updates to a Usermin theme are continually re-downloaded, due to the installation of the update not being detected.</td> <td nowrap><a href="updates/usermin-1.160-2.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>Scheduled Cron Jobs</td> <td>1.160</td> <td>On systems that use Fcron, listing and creating Cron jobs does not work properly.</td> <td nowrap><a href="updates/cron-1.160-1.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>Cluster Webmin Servers</td> <td>1.160</td> <td>The field to select which servers to upgrade Webmin on does not appear, forcing the update to be attempted on all servers.</td> <td nowrap><a href="updates/cluster-webmin-1.160-1.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>PostgreSQL Database Server</td> <td>1.160</td> <td>On versions of PostgreSQL that don&#39;t support schemas, the error message &#39;Attribute schemaname not found&#39; will appear when a database icon is clicked on.</td> <td nowrap><a href="updates/postgresql-1.160-1.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>MSC.Linux Theme</td> <td>1.160</td> <td>If a non-core module which does not make use of ui-lib.pl tries to display an error message, the error &#39;Undefined subroutine &amp;main::ui_print_header&#39; will appear instead.</td> <td nowrap><a href="updates/mscstyle3-1.160-1.wbt.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>File Manager</td> <td>1.160</td> <td>When deleting a directory, it does not actually get removed. When searching for files from / , no results are ever found.</td> <td nowrap><a href="updates/file-1.160-2.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>BIND DNS Server</td> <td>1.160</td> <td>If the module uses a command to re-start BIND, attempting to apply changes will always fail.</td> <td nowrap><a href="updates/bind8-1.160-1.wbm.gz">New module</a></td> </tr>

<tr class="maintitle"> <td colspan="4"><b>Updates to Webmin 1.150</b></td> </tr>
<tr class="mainbody"> <td>Linux Firewall</td> <td>1.150</td> <td>On Fedora systems, the firewall module can fail with an error about the /etc/init.d/iptables status command.</td> <td nowrap><a href="updates/firewall-1.150-8.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>Disk Quotas</td> <td>1.150</td> <td>On Fedora 2 and other 2.6 kernel-based distributions, using this module can cause the system to hang.</td> <td nowrap><a href="updates/quota-1.150-4.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>Filesystem Backup</td> <td>1.150</td> <td>Splitting a dump format backup across multiple files fails with the error message &#39;Tape changing is only supported when backups are run as background processes&#39;.</td> <td nowrap><a href="updates/fsdump-1.150-1.wbm.gz">New module</a></td> </tr>


<tr class="maintitle"> <td colspan="4"><b>Updates to Webmin 1.140</b></td> </tr>
<tr class="mainbody"> <td>File Manager</td> <td>1.140</td> <td>On OSX, if the /File Transfer Folder directory exists, the module applet will fail to load.</td> <td nowrap><a href="updates/file-1.140-2.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>Network Configuration</td> <td>1.140</td> <td>On Slackware Linux 9.1, the module does not update the correct /etc/rc.d/rc.inet1.conf file when editing the primary network interface.</td> <td nowrap><a href="updates/net-1.140-1.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>Users and Groups</td> <td>1.140</td> <td>In the module&#39;s access control page, the option &#39;Can export batch file?&#39; cannot be disabled.</td> <td nowrap><a href="updates/useradmin-1.140-1.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>Samba Windows File Sharing</td> <td>1.140</td> <td>When creating a new Samba user, an error message like &#39;could not create account to add new user -s&#39; can appear if running Samba 3.0.</td> <td nowrap><a href="updates/samba-1.140-1.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>Apache Webserver</td> <td>1.140</td> <td>When the &#39;Show Apache directive names&#39; option is enabled on the Module Config page, the forms showing Apache options do not appear properly.</td> <td nowrap><a href="updates/apache-1.140-1.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>Perl Modules</td> <td>1.140</td> <td>The installation of new Perl modules will fail, due to the path to Perl not being found correctly in the module.</td> <td nowrap><a href="updates/cpan-1.140-1.wbm.gz">New module</a></td> </tr>


<tr class="maintitle"> <td colspan="4"><b>Updates to Webmin 1.130</b></td> </tr>
<tr class="mainbody"> <td>PostgreSQL Database Server</td> <td>1.130</td> <td>When using versions of PostgreSQL above 7.4, non-existant tables starting with &#39;sql_&#39; can appear in a database. These also prevent database from being deleted.</td> <td nowrap><a href="updates/postgresql-1.130-8.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>Log File Rotation</td> <td>1.130</td> <td>When adding a new log file, any options specified for it will be incorrectly added to the global configuration as well.</td> <td nowrap><a href="updates/logrotate-1.130-6.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>Disk Quotas</td> <td>1.130</td> <td>When deleting a Unix group on a system that does not support group quotas, an error message about the &#39;group_filesystems&#39; subroutine can appear.</td> <td nowrap><a href="updates/quota-1.130-5.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>Postfix Configuration</td> <td>1.130</td> <td>The main page of the module can incorrectly display an error message about the Postfix configuration, or complain about the /dev/ptmx file not existing.</td> <td nowrap><a href="updates/postfix-1.130-3.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>DHCP Server</td> <td>1.130</td> <td>When deleting a DHCP lease, Webmin exits and must be manually re-started.</td> <td nowrap><a href="updates/dhcpd-1.130-3.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>Log File Rotation</td> <td>1.130</td> <td>Logrotate configuration entries for multiple files are not supported, and the &#39;Maximum size before rotating&#39; field does not display the current setting properly.</td> <td nowrap><a href="updates/logrotate-1.130-3.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>Partitions on Local Disks</td> <td>1.130</td> <td>On systems with newer versions of the fdisk command, partition creation, modification or deleting can hang.</td> <td nowrap><a href="updates/fdisk-1.130-2.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>Apache Webserver</td> <td>1.130</td> <td>When searching for a virtual server, incorrect results may be displayed.</td> <td nowrap><a href="updates/apache-1.130-1.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>Shorewall Firewall</td> <td>1.130</td> <td>When editing a rule, the Firewall and Any options are not available in the zone menus.</td> <td nowrap><a href="updates/shorewall-1.130-1.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>Disk Quotas</td> <td>1.130</td> <td>On Linux filesystems with block sizes other than 1024, the conversion from blocks to kilobytes is incorrect - and the option to turn it off on the Module Config page does not work.</td> <td nowrap><a href="updates/quota-1.130-1.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>Protected Web Directories</td> <td>1.130</td> <td>When searching for existing protected directories, .htaccess files are found instead of the directories containing them.</td> <td nowrap><a href="updates/htaccess-htpasswd-1.130-1.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>Linux Firewall</td> <td>1.130</td> <td>On Trustix Linux 2.0, the module falsely reports an error getting the IPtables status.</td> <td nowrap><a href="updates/firewall-1.130-1.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>Log File Rotation</td> <td>1.130</td> <td>Post-rotation scripts that end with &#39;endrotate&#39; are not parsed properly, potentially causing configuration file corruption.</td> <td nowrap><a href="updates/logrotate-1.130-1.wbm.gz">New module</a></td> </tr>

<tr class="maintitle"> <td colspan="4"><b>Updates to Webmin 1.120</b></td> </tr>
<tr class="mainbody"> <td>Linux Firewall</td> <td>1.120</td> <td>When editing a firewall rule, any existing comment it not shown properly.</td> <td nowrap><a href="updates/firewall-1.120-8.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>PostgreSQL Database Server</td> <td>1.120</td> <td>The error messsage &#39;SQL select version() failed : postgres&quot; does not exist&#39; appears when the module is opened, or when a database is created. Also fixes a problem with new versions of DBD::Pg, in which the module&#39;s main page appears empty.</td> <td nowrap><a href="updates/postgresql-1.120-6.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>Filesystem Backup</td> <td>1.120</td> <td>The error message &#39;Undefined subroutine main::strftime&#39; can appear when making a backup when date substitutions in filenames is enabled.</td> <td nowrap><a href="updates/fsdump-1.120-4.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>Printer Administration</td> <td>1.120</td> <td>On systems using CUPS, the list of available print drivers does not appear properly.</td> <td nowrap><a href="updates/lpadmin-1.120-4.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>Sendmail Configuration</td> <td>1.120</td> <td>On some browsers, the &#39;Flush Mail Queue&#39; button does not work, and shows a search results page instead.</td> <td nowrap><a href="updates/sendmail-1.120-4.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>Postfix Configuration</td> <td>1.120</td> <td>When deleting a large number of virtual_map entries (such as when Virtualmin deletes a domain), the wrong ones will be removed. This update also fixes a problem with removing attachments from user mail files in Maildir format.</td> <td nowrap><a href="updates/postfix-1.120-3.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>Sendmail Configuration</td> <td>1.120</td> <td>When deleting a large number of virtuser entries (such as when Virtualmin deletes a domain), the wrong ones will be removed.</td> <td nowrap><a href="updates/sendmail-1.120-3.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>SpamAssassin Mail Filter</td> <td>1.120</td> <td>When the Apply Changes button is clicked, an error is always reported even though changes were properly applied.</td> <td nowrap><a href="updates/spam-1.120-3.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>SpamAssassin Mail Filter</td> <td>1.120</td> <td>When editing body tests, the test name appears as a number instead of the correct name.</td> <td nowrap><a href="updates/spam-1.120-1.wbm.gz">New module</a></td> </tr>


<tr class="mainbody"> <td>ProFTPD Server</td> <td>1.120</td> <td>The module can incorrectly identify the ProFTPD server, even though the version number is something like &#39;ProFTPD 1.2.9&#39;</td> <td nowrap><a href="updates/proftpd-1.120-1.wbm.gz">New module</a></td> </tr>


<tr class="maintitle"> <td colspan="4"><b>Updates to Webmin 1.110</b></td> </tr>
<tr class="mainbody"> <td>MySQL Database Server</td> <td>1.110</td> <td>When attempting to list the tables in a database or MySQL users, the error message &#39;Cant use an undefined value as a HASH reference&#39; appears.</td> <td nowrap><a href="updates/mysql-1.110-5.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>Filesystem Backup</td> <td>1.110</td> <td>When the &#39;Run on selected schedule&#39; option is chosen on the Edit Backup page, it is impossible to properly save the backup settings.</td> <td nowrap><a href="updates/fsdump-1.110-2.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>Webalizer Logfile Analysis</td> <td>1.110</td> <td>When the &#39;Run on selected schedule&#39; option is chosen on the Edit Log File page, it is impossible to properly save the log.</td> <td nowrap><a href="updates/webalizer-1.110-2.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>DHCP Server</td> <td>1.110</td> <td>New client options are not always added to the DHCP server configuration file properly.</td> <td nowrap><a href="updates/dhcpd-1.110-1.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>LDAP Users and Groups</td> <td>1.110</td> <td>An error message about the lmPassword or sambaLMPassword attributes can occur when modifying a Samba LDAP user, and mail attributes like aliases are not updated when modifying a user.</td> <td nowrap><a href="updates/ldap-useradmin-1.110-3.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>Filesystem Backup</td> <td>1.110</td> <td>When the &#39;Remote restore command&#39; is set to &#39;Default&#39;, backups cannot be restore due to an incorrect error message.</td> <td nowrap><a href="updates/fsdump-1.110-1.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>Printer Administration</td> <td>1.110</td> <td>On some systems using CUPS (such as Redhat 9), each printer driver is listed multiple times.</td> <td nowrap><a href="updates/lpadmin-1.110-1.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>Upload and Download</td> <td>1.110</td> <td>The buttons for selecting a user, group and directory in the upload form do not always work.</td> <td nowrap><a href="updates/updown-1.110-1.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>SSL Tunnels</td> <td>1.110</td> <td>Stunnel version 4 (found on Redhat 9 and others) is not supported, as it uses different command-line arguments.</td> <td nowrap><a href="updates/stunnel-1.110-1.wbm.gz">New module</a></td> </tr>


<tr class="maintitle"> <td colspan="4"><b>Updates to Webmin 1.100</b></td> </tr>
<tr class="mainbody"> <td>Upload and Download</td> <td>1.100</td> <td>When downloading multiple URLs and one fails, the error message is not shown and it is impossible to clear the download from the module&#39;s main page.</td> <td nowrap><a href="updates/updown-1.100-4.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>Printer Administration</td> <td>1.100</td> <td>Print jobs from a printer with a - in its name cannot be viewed or deleted on Solaris.</td> <td nowrap><a href="updates/lpadmin-1.100-1.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>QMail Configuration</td> <td>1.100</td> <td>When the mail queue is sorted by From or To address, the error message &#39;Undefined subroutine &amp;main::address_parts&#39; is appears.</td> <td nowrap><a href="updates/qmailadmin-1.100-1.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>Apache Webserver</td> <td>1.100</td> <td>When applying changes, an error message like &#39;Cannot load /etc/httpd/modules/mod_roaming.so into server&#39; is displayed. This only seems to happen on Redhat versions 7.0 to 7.3. Unlike the last update to fix this problem, this one really works!</td> <td nowrap><a href="updates/apache-1.100-3.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>LDAP Users and Groups</td> <td>1.100</td> <td>When trying to create a group with no members, an error message about a missing attribute is incorrectly displayed.</td> <td nowrap><a href="updates/ldap-useradmin-1.100-1.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>File Manager</td> <td>1.100</td> <td>Users who are only supposed to be able to access a particular directory can still delete or change permissions on parent directories.</td> <td nowrap><a href="updates/file-1.100-2.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>MySQL Database Server</td> <td>1.100</td> <td>When updating multiple rows at once, an SQL error about &#39;bind variables&#39; occurs.</td> <td nowrap><a href="updates/mysql-1.100-1.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>DHCP Server</td> <td>1.100</td> <td>Directives added to hosts, subnets, groups or shared networks with description comments are put at the wrong place in the config file.</td> <td nowrap><a href="updates/dhcpd-1.100-1.wbm.gz">New module</a></td> </tr>

<tr class="maintitle"> <td colspan="4"><b>Updates to Webmin 1.090</b></td> </tr>
<tr class="mainbody"> <td>MySQL Database Server</td> <td>1.090</td> <td>When editing a user in MySQL 4, it is impossible to set all of the permissions.</td> <td nowrap><a href="updates/mysql-1.090-6.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>Disk Quotas</td> <td>1.090</td> <td>Adds support for NetBSD.</td> <td nowrap><a href="updates/quota-1.090-2.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>Disk and Network Filesystems</td> <td>1.090</td> <td>Adds support for non-Intel BSD systems, and support for NetBSD on all architectures.</td> <td nowrap><a href="updates/mount-1.090-2.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>Network Configuration</td> <td>1.090</td> <td>On SuSE Linux 8.0 this module is missing several functions called by other modules, which can cause the PPTP VPN Client module to fail with the error &#39;Undefined subroutine net::list_routes&#39;</td> <td nowrap><a href="updates/net-1.090-1.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>QMail Configuration</td> <td>1.090</td> <td>When using some older versions of Perl, the error &#39;Not enough arguments for mkdir&#39; can appear when reading users&#39; email or viewing the mail queue.</td> <td nowrap><a href="updates/qmailadmin-1.090-1.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>Postfix Configuration</td> <td>1.090</td> <td>When using some older versions of Perl, the error &#39;Not enough arguments for mkdir&#39; can appear when reading users&#39; email or viewing the mail queue.</td> <td nowrap><a href="updates/postfix-1.090-1.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>Sendmail Configuration</td> <td>1.090</td> <td>When using some older versions of Perl, the error &#39;Not enough arguments for mkdir&#39; can appear when reading users&#39; email or viewing the mail queue.</td> <td nowrap><a href="updates/sendmail-1.090-1.wbm.gz">New module</a></td> </tr>


<tr class="maintitle"> <td colspan="4"><b>Updates to Webmin 1.080</b></td> </tr>
<tr class="mainbody"> <td>Network Configuration</td> <td>1.080</td> <td>On Debian Linux, virtual interfaces can be occasionally deleted when performing other operations.</td> <td nowrap><a href="updates/net-1.080-5.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>MySQL Database Server</td> <td>1.080</td> <td>On some early 4.x versions of MySQL, an error occurs when trying to edit user, database or other permissions.</td> <td nowrap><a href="updates/mysql-1.080-6.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>Apache Webserver</td> <td>1.080</td> <td>When adding a virtual server with the &#39;Listen on address&#39; option selected, an un-needed Listen directive can be created that causes Apache to fail to start with an error message like &#39;could not bind to address&#39;</td> <td nowrap><a href="updates/apache-1.080-1.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>Users and Groups</td> <td>1.080</td> <td>When editing a user that is locked, the &#39;No password required&#39; option is incorrectly selected.</td> <td nowrap><a href="updates/useradmin-1.080-2.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>Users and Groups</td> <td>1.080</td> <td>New users do not get created in other modules, such as the Samba password list.</td> <td nowrap><a href="updates/useradmin-1.080-1.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>Software Packages</td> <td>1.080</td> <td>The module does not appear on FreeBSD 4.8 systems.</td> <td nowrap><a href="updates/software-1.080-1.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>Upload and Download</td> <td>1.080</td> <td>Scheduled or background downloads to a directory are not actually saved!</td> <td nowrap><a href="updates/updown-1.080-1.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>Network Configuration</td> <td>1.080</td> <td>On Redhat versions 8.0 and above, the default gateway can sometimes be set incorrectly when editing an interface.</td> <td nowrap><a href="updates/net-1.080-1.wbm.gz">New module</a></td> </tr>


<tr class="maintitle"> <td colspan="4"><b>Updates to Webmin 1.070</b></td> </tr>
<tr class="mainbody"> <td>Disk and Network Filesystems</td> <td>1.070</td> <td>On FreeBSD 5, all filesystems are shown as not currently mounted. This prevents quotas from being enabled on them as well.</td> <td nowrap><a href="updates/mount-1.070-6.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>Webmin Users</td> <td>1.070</td> <td>When creating a Webmin user who is a member of a group, access control setting for that group in the Webmin Users module are not set for the user.</td> <td nowrap><a href="updates/acl-1.070-5.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>Printer Administration</td> <td>1.070</td> <td>On Solaris, remote Unix printers with the same local and remote names are not displayed properly.</td> <td nowrap><a href="updates/lpadmin-1.070-4.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>Custom Commands</td> <td>1.070</td> <td>Commands to run before or after saving a file are not displayed properly if they contain single quotes.</td> <td nowrap><a href="updates/custom-1.070-4.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>Squid Proxy Server</td> <td>1.070</td> <td>When using the &#39;Webmin default&#39; authentication program, incorrect permissions cause it not to run properly and thus all authentication attempts to fail. After installing this update, you will need to re-save the &#39;Authentication Programs&#39; page to have the correct permissions set.</td> <td nowrap><a href="updates/squid-1.070-2.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>Fetchmail Mail Retrieval</td> <td>1.070</td> <td>Manually created entries in .fetchmailrc with quotes are not preserved properly.</td> <td nowrap><a href="updates/fetchmail-1.070-1.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>Sendmail Configuration</td> <td>1.070</td> <td>The status of all messages in the mail queue appears as &#39;Sending&#39;, even when this is not really the case.</td> <td nowrap><a href="updates/sendmail-1.070-1.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>Command Shell</td> <td>1.070</td> <td>When you enter a directory with the &#39;cd&#39; command, the error &#39;No such file or directory&#39; is incorrectly reported.</td> <td nowrap><a href="updates/shell-1.070-1.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>MSC.Linux Theme</td> <td>1.070</td> <td>The misuse of a global variable in this theme causes the Edit Field Permissions page of the MySQL module to not be completely displayed.</td> <td nowrap><a href="updates/mscstyle3-1.070-1.wbt.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>Bootup and Shutdown</td> <td>1.070</td> <td>When actions are sorted by start order and you select several to start or stop, the wrong ones are actually executed.</td> <td nowrap><a href="updates/init-1.070-1.wbm.gz">New module</a></td> </tr>


<tr class="maintitle"> <td colspan="4"><b>Updates to Webmin 1.060</b></td> </tr>
<tr class="mainbody"> <td>Printer Administration</td> <td>1.060</td> <td>On most operating systems the &#39;Print banner?&#39; option cannot be set.</td> <td nowrap><a href="updates/lpadmin-1.060-3.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>PostgreSQL Database Server</td> <td>1.060</td> <td>Editing, creating or deleting users with special characters in their names is impossible.</td> <td nowrap><a href="updates/postgresql-1.060-2.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>BIND DNS Server</td> <td>1.060</td> <td>After adding a zone the browser returns to the module&#39;s main page instead of the zone details form as it used to in older releases.</td> <td nowrap><a href="updates/bind8-1.060-2.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>Running Processes</td> <td>1.060</td> <td>On OSX, clicking on a process from the list will always display the &#39;init&#39; process.</td> <td nowrap><a href="updates/proc-1.060-1.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>Postfix Configuration</td> <td>1.060</td> <td>When displaying the mail queue, the error message &#39;Modification of non-creatable array value attempted&#39; can appear.</td> <td nowrap><a href="updates/postfix-1.060-1.wbm.gz">New module</a></td> </tr>


<tr class="maintitle"> <td colspan="4"><b>Updates to Webmin 1.050</b></td> </tr>
<tr class="mainbody"> <td>Network Configuration</td> <td>1.050</td> <td>On Redhat 8, static routes created using Webmin are not actually used at boot time.</td> <td nowrap><a href="updates/net-1.050-8.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>Running Processes</td> <td>1.050</td> <td>On OSX, some modules report the error message &#39;Undefined subroutine proc::get_new_pty&#39; due to a missing function in the Running Processes module.</td> <td nowrap><a href="updates/proc-1.050-7.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>MySQL Database Server</td> <td>1.050</td> <td>Enum or set fields with commas in their options cannot be edited - all the values are shown as &#39;enun&#39; or &#39;set&#39;.</td> <td nowrap><a href="updates/mysql-1.050-7.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>Filesystem Backup</td> <td>1.050</td> <td>Restoring a backup from a remote host does not work due to an incorrect -f parameter being passed to the restore command.</td> <td nowrap><a href="updates/fsdump-1.050-4.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>PostgreSQL Database Server</td> <td>1.050</td> <td>An error message like &#39;Database &#39;limit 25 offset 0&#39; does not exist in the system catalog&#39; can appear when viewing table data.</td> <td nowrap><a href="updates/postgresql-1.050-6.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>PostgreSQL Database Server</td> <td>1.050</td> <td>Rows containing the character $ in a field cannot be properly edited, as the $ is treated as the start of a variable name.</td> <td nowrap><a href="updates/postgresql-1.050-5.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>PostgreSQL Database Server</td> <td>1.050</td> <td>Editing a record with a % in a field can cause it&#39;s current value to not appear properly.</td> <td nowrap><a href="updates/postgresql-1.050-4.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>MySQL Database Server</td> <td>1.050</td> <td>Editing a record with a % in a field can cause it&#39;s current value to not appear properly.</td> <td nowrap><a href="updates/mysql-1.050-4.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>Custom Commands</td> <td>1.050</td> <td>When using &#39;Links to commands&#39; mode, menu parameters do not appear</td> <td nowrap><a href="updates/custom-1.050-3.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>SSH Server</td> <td>1.050</td> <td>The AllowUsers and related directives are not set properly on versions of SSH and OpenSSH above 3.2. With OpenSSH commas are used when they should not be, and with SSH the reverse happens.</td> <td nowrap><a href="updates/sshd-1.050-3.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>BIND DNS Server</td> <td>1.050</td> <td>New logging categories in BIND 9 cannot be selected, and will be erased by the module if manually entered.</td> <td nowrap><a href="updates/bind8-1.050-3.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>Apache Webserver</td> <td>1.050</td> <td>Virtual servers whose document root directory contains a space cannot be created or edited.</td> <td nowrap><a href="updates/apache-1.050-3.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>Disk Quotas</td> <td>1.050</td> <td>Quotas cannot be edited on recent FreeBSD releases.</td> <td nowrap><a href="updates/quota-1.050-1.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>Custom Commands</td> <td>1.050</td> <td>Commands that have the &#39;Run in directory&#39; option set cannot be edited properly.</td> <td nowrap><a href="updates/custom-1.050-1.wbm.gz">New module</a></td> </tr>


<tr class="maintitle"> <td colspan="4"><b>Updates to Webmin 1.040</b></td> </tr>
<tr class="mainbody"> <td>Partitions on Local Disks</td> <td>1.040</td> <td>When some new versions of the fdisk command are installed, the module does not display any disks or partitions.</td> <td nowrap><a href="updates/fdisk-1.040-1.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>System and Server Status</td> <td>1.040</td> <td>The Remote Ping monitor spawns ping processes that never die. This update implements the ping protocol in Perl, thus avoiding the problem.</td> <td nowrap><a href="updates/status-1.040-1.wbm.gz">New module</a></td> </tr>

<tr class="maintitle"> <td colspan="4"><b>Updates to Webmin 1.030</b></td> </tr>
<tr class="mainbody"> <td>Linux Firewall</td> <td>1.030</td> <td>It is impossible to create a rule that matches all ICMP traffic, as Webmin incorrectly adds <tt>-m icmp</tt> to the rule which causes iptables to only match a single ICMP type.</td> <td nowrap><a href="updates/firewall-1.030-3.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>System and Server Status</td> <td>1.030</td> <td>Remote TCP service monitors always report that the service is up, even when it is actually down.</td> <td nowrap><a href="updates/status-1.030-1.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>SSH/Telnet Login</td> <td>1.030</td> <td>With some new versions of Perl, the error message <tt>Bad arg length for Socket::pack_sockaddr_in</tt> can appear if Webmin cannot lookup the IP address for your server.</td> <td nowrap><a href="updates/telnet-1.030-1.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>Squid Proxy Server</td> <td>1.030</td> <td>When editing delay pools, sometimes the delay_pools directive is not added to the Squid configuration file properly. Also, when adding a delay pool directives can be saved incorrectly.</td> <td nowrap><a href="updates/squid-1.030-1.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>BIND DNS Server</td> <td>1.030</td> <td>On systems with a large number of zones, Webmin displays a search form on the module&#39;s main page for finding zones. However, it will not find zones that are in views.</td> <td nowrap><a href="updates/bind8-1.030-1.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>SSH Server</td> <td>1.030</td> <td>The UsePrivilegeSeparation directive is set for OpenSSH 3.1, which is should only be set for versions 3.2 and above.</td> <td nowrap><a href="updates/sshd-1.030-1.wbm.gz">New module</a></td> </tr>


<tr class="maintitle"> <td colspan="4"><b>Updates to Webmin 1.020</b></td> </tr>
<tr class="mainbody"> <td>Printer Administration</td> <td>1.020</td> <td>On FreeBSD and OpenBSD, printing a test page fails with the error <tt>Undefined subroutine main::quotameta called</tt>.</td> <td nowrap><a href="updates/lpadmin-1.020-6.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>Network Configuration</td> <td>1.020</td> <td>On FreeBSD systems, editing, creating or deleting a virtual address for a network interface causes any routes on the real interface to be lost.</td> <td nowrap><a href="updates/net-1.020-5.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>Usermin Configuration</td> <td>1.020</td> <td>On systems running Perl version 5.8, the list of modules on the Available Modules page is not displayed properly.</td> <td nowrap><a href="updates/usermin-1.020-4.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>Disk Quotas</td> <td>1.020</td> <td>On some Linux systems, the list of all quotas for a user or group is not displayed properly.</td> <td nowrap><a href="updates/quota-1.020-3.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>MySQL Database Server</td> <td>1.020</td> <td>Records containing \ characters cannot be edited or created properly.</td> <td nowrap><a href="updates/mysql-1.020-2.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>Majordomo List Manager</td> <td>1.020</td> <td>When creating a mailing list with archiving enabled, an error can occur in the create_list.cgi script.</td> <td nowrap><a href="updates/majordomo-1.020-2.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>File Manager</td> <td>1.020</td> <td>When the &#39;Always follow symlinks&#39; ACL option is enabled, links to directories are not shown correctly.</td> <td nowrap><a href="updates/file-1.020-2.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>Usermin Configuration</td> <td>1.020</td> <td>When editing the configuration for Usermin modules, the existing settings are not shown. This can cause them to be set incorrectly.</td> <td nowrap><a href="updates/usermin-1.020-2.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>Printer Administration</td> <td>1.020</td> <td>Printing a test page does not work on many operating systems.</td> <td nowrap><a href="updates/lpadmin-1.020-2.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>MySQL Database Server</td> <td>1.020</td> <td>On older versions of mysql that do not support field or table name quoting, an SQL error is reported as soon as you try to view a table.</td> <td nowrap><a href="updates/mysql-1.020-1.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>Webmin Servers Index</td> <td>1.020</td> <td>When logging into another server running on port 80 or 443, redirects issued by the server can sometimes cause your browser to attempt to connect to it directly.</td> <td nowrap><a href="updates/servers-1.020-1.wbm.gz">New module</a></td> </tr>


<tr class="maintitle"> <td colspan="4"><b>Updates to Webmin 1.000</b></td> </tr>
<tr class="mainbody"> <td>MySQL Database Server</td> <td>1.000</td> <td>When editing or deleting records in a table found using a search, the wrong records may be changed or removed.</td> <td nowrap><a href="updates/mysql-1.000-6.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>Printer Administration</td> <td>1.000</td> <td>On operating systems like Solaris, HP/UX and FreeBSD that use Webmin&#39;s print drivers, it is impossible to properly set a driver for a printer.</td> <td nowrap><a href="updates/lpadmin-1.000-5.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>BIND DNS Server</td> <td>1.000</td> <td>When creating a reverse slave zone, the error message &#39;Failed to create /var/named&#39; appears.</td> <td nowrap><a href="updates/bind8-1.000-4.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>Scheduled Commands</td> <td>1.000</td> <td>If multiple commands to execute are entered on separate lines, some may fail due to extra newline characters being added to the at job.</td> <td nowrap><a href="updates/at-1.000-4.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>Linux Firewall</td> <td>1.000</td> <td>Sometimes rules cannot be moved up or down in a chain.</td> <td nowrap><a href="updates/firewall-1.000-2.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>File Manager</td> <td>1.000</td> <td>If the .. directory is selected in the right-hand pane and a button on the top toolbar is clicked, a Java applet error is thrown which prevents the button from working and causes it to appear &#39;stuck&#39; down.</td> <td nowrap><a href="updates/file-1.000-2.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>Linux Firewall</td> <td>1.000</td> <td>If a rule is created with the action set to &#39;Do nothing&#39;, attempting to apply the firewall configuration can produce the error message &#39;Unknown arg -j&#39;</td> <td nowrap><a href="updates/firewall-1.000-1.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>Printer Administration</td> <td>1.000</td> <td>When printing a test page on FreeBSD or CUPS systems, the error &#39;Undefined subroutine main::quotemeta called&#39; appears.</td> <td nowrap><a href="updates/lpadmin-1.000-1.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>MySQL Database Server</td> <td>1.000</td> <td>When editing fields that contain HTML escapes (such as &amp;amp;), they are incorrectly converted to the actual character (such as &amp;)</td> <td nowrap><a href="updates/mysql-1.000-1.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>Samba Windows File Sharing</td> <td>1.000</td> <td>Temporary files in /tmp/.webmin containing passwords are created but not deleted as they should be</td> <td nowrap><a href="updates/samba-1.000-1.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>Procmail Mail Filter</td> <td>1.000</td> <td>Complex procmail recipe files (such as the one used by SpamAssassin) cannot be parsed by Webmin, resulting in an &#39;Unknown line&#39; error message. This update also turns off the diaplay of receipes in include files by default.</td> <td nowrap><a href="updates/procmail-1.000-1.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>File Manager</td> <td>1.000</td> <td>When the &#39;Always follow symlinks&#39; access control option is enabled, the File Manager applet fails to load.</td> <td nowrap><a href="updates/file-1.000-1.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>ProFTP Server</td> <td>1.000</td> <td>The DirFakeUser and DirFakeGroup directives are not handled properly. Webmin does not allow you to edit the name of the user or group to fake as.</td> <td nowrap><a href="updates/proftpd-1.000-1.wbm.gz">New module</a></td> </tr>


<tr class="maintitle"> <td colspan="4"><b>Updates to Webmin 0.990</b></td> </tr>
<tr class="mainbody"> <td>Procmail Mail Filter</td> <td>0.990</td> <td>Procmail recipes that evaluate the output of a command cannot be created or edited properly.</td> <td nowrap><a href="updates/procmail-0.990-8.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>Users and Groups</td> <td>0.990</td> <td>When modifying and deleting multiple users from a batch file, it is possible for the wrong user to be modified or deleted. This bug also prevents the deletion of a &#39;personal&#39; group when deleting a user.</td> <td nowrap><a href="updates/useradmin-0.990-7.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>Majordomo List Manager</td> <td>0.990</td> <td>The error message &#39;The $homedir variable in your majordomo config file is set to /usr/test/majordomo, which does not exist&#39; can appear, even though that directory does not really need to exist.</td> <td nowrap><a href="updates/majordomo-0.990-6.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>PostgreSQL Database Server</td> <td>0.990</td> <td>When editing PostgreSQL users, the &#39;Can create databases?&#39; and &#39;Can create users&#39; options always show No, and cannot be set to Yes.</td> <td nowrap><a href="updates/postgresql-0.990-6.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>Printer Administration</td> <td>0.990</td> <td>If a webmin user is able to view print jobs, he can execute any command as root by including shell characters in the printer name in the URL.</td> <td nowrap><a href="updates/lpadmin-0.990-5.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>Webmin Users</td> <td>0.990</td> <td>When a user is created in the Webmin Users or Cluster Webmin Servers module with his theme set to &#39;Default Webmin theme&#39;, the error <tt>Can&#39;t locate ./webmin-lib.pl</tt> can appear when logging in.</td> <td nowrap><a href="updates/acl-0.990-2.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>Scheduled Cron Jobs</td> <td>0.990</td> <td>Multiple named days or months in crontab files are not supported, and cron jobs containing them are ignored.</td> <td nowrap><a href="updates/cron-0.990-2.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>PostgreSQL Database Server</td> <td>0.990</td> <td>The Granted Privileges page does not work on PostgreSQL versions 7.1 and above, and does not support new privileges like DELETE, REFERENCES and TRIGGER.</td> <td nowrap><a href="updates/postgresql-0.990-3.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>Apache Webserver</td> <td>0.990</td> <td>The Usermin Apache Options Files module always complains that <tt>Apache version and module information was not found</tt>, even though the Webmin Apache module has been set up correctly. Installing this Webmin module will fix the problem.</td> <td nowrap><a href="updates/apache-0.990-2.wbm.gz">New module</a></td> </tr>

<tr class="maintitle"> <td colspan="4"><b>Updates to Webmin 0.980</b></td> </tr>
<tr class="mainbody"> <td>Filesystem Backup</td> <td>0.980</td> <td>After creating a backup for a remote host, the error <tt>Can&#39;t use an undefined value as a HASH reference</tt> appears.</td> <td nowrap><a href="updates/fsdump-0.980-8.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>File Manager</td> <td>0.980</td> <td>Files whose size is greater than 2 Gb are sometimes not shown properly.</td> <td nowrap><a href="updates/file-0.980-6.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>CVS Server</td> <td>0.980</td> <td>CVS users who are not Unix users cannot be entered in the <tt>User Access Control</tt> page.</td> <td nowrap><a href="updates/pserver-0.980-6.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>Sendmail Configuration</td> <td>0.980</td> <td>On some operating systems, when user mail files are in their home directory the page that is supposed to list all mailboxes goes into an infinite loop and never appears.</td> <td nowrap><a href="updates/sendmail-0.980-6.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>PostgreSQL Database Server</td> <td>0.980</td> <td>Trying to view granted privileges or an inactive database can cause the error <tt>Can&#39;t call method &#39;prepare&#39; on unblessed reference</tt> to appear.</td> <td nowrap><a href="updates/postgresql-0.980-6.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>Samba Windows File Sharing</td> <td>0.980</td> <td>On the Security and Access Control page, group names with spaces in them are not handled properly.</td> <td nowrap><a href="updates/samba-0.980-5.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>Printer Administration</td> <td>0.980</td> <td>Compressed CUPS PPD files and CUPS printer options are not supported.</td> <td nowrap><a href="updates/lpadmin-0.980-2.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>PostgreSQL Database Server</td> <td>0.980</td> <td>Trying to create a database can fail with the error <tt>CREATE DATABASE: may not be called in a transaction block</tt></td> <td nowrap><a href="updates/postgresql-0.980-1.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>Perl Modules</td> <td>0.980</td> <td>On Redhat 7.3, installed Perl modules are not listed.</td> <td nowrap><a href="updates/cpan-0.980-1.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>Change Passwords</td> <td>0.980</td> <td>When using an external command to change passwords, no ACL checking is done to see if the current Webmin user is allowed to do the change.</td> <td nowrap><a href="updates/passwd-0.980-1.wbm.gz">New module</a></td> </tr>


<tr class="maintitle"> <td colspan="4"><b>Updates to Webmin 0.970</b></td> </tr>
<tr class="mainbody"> <td>Cluster Users and Groups</td> <td>0.970</td> <td>When creating a user on servers that do not NFS-share home directories, the error <tt>Failed to save user : couldn&#39;t create home directory : No such file or directory</tt> may appear.</td> <td nowrap><a href="updates/cluster-useradmin-0.970-7.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>Cluster Users and Groups</td> <td>0.970</td> <td>When creating a user with the &#39;Create user in other modules?&#39; option turned on, password information is not passed to the remote servers, causing the new user&#39;s Samba password not to be set properly.</td> <td nowrap><a href="updates/cluster-useradmin-0.970-6.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>BIND DNS Server</td> <td>0.970</td> <td>When using zones within views, the access control page for the module does not show any zones to limit a user to editing.</td> <td nowrap><a href="updates/bind8-0.970-5.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>System and Server Status</td> <td>0.970</td> <td>The error message <tt>Undefined subroutine &amp;main::get__status</tt> sometimes appears in email from Cron when scheduled monitoring is enabled. This fix really works this time!</td> <td nowrap><a href="updates/status-0.970-4.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>Perl Modules</td> <td>0.970</td> <td>On Redhat Linux 7.3, the list of installed Perl modules is not shown due to Redhat&#39;s perl install putting them in the file <tt>/perllocal.pod</tt>.</td> <td nowrap><a href="updates/cpan-0.970-3.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>Apache Webserver</td> <td>0.970</td> <td>When editing the IndexOrderDefault directive in non-english language mode, options are added to the config file in the foreign language.</td> <td nowrap><a href="updates/apache-0.970-3.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>Webmin Users</td> <td>0.970</td> <td>When setting a Webmin user to &#39;Unix authentication&#39; mode, an error message about the Authen::PAM perl module being missing can appear, even though it is no longer necessary.</td> <td nowrap><a href="updates/acl-0.970-3.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>BIND DNS Server</td> <td>0.970</td> <td>When trying to move a zone to another view, the error <tt>Not an ARRAY reference</tt> appears.</td> <td nowrap><a href="updates/bind8-0.970-2.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>File Manager</td> <td>0.970</td> <td>With some older versions of the lsattr command, EXT file attributes are shown incorrectly.</td> <td nowrap><a href="updates/file-0.970-1.wbm.gz">New module</a></td> </tr>


<tr class="maintitle"> <td colspan="4"><b>Updates to Webmin 0.960</b></td> </tr>
<tr class="mainbody"> <td>WU-FTP Server</td> <td>0.966</td> <td>WU-FTPd version 2.6.2-5 is not recognized by the module, resulting in an error like &#39;The FTP server /usr/sbin/in.ftpd does not appear to be WU-FTPd&#39;.</td> <td nowrap><a href="updates/wuftpd-0.966-7.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>MySQL Database Server</td> <td>0.966</td> <td>With synchronization between Unix and MySQL users enabled, creating a with a pre-encrypted password generates an SQL error. Also, renaming or deleting a user does not update database, table or field permissions related to that user.</td> <td nowrap><a href="updates/mysql-0.966-7.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>File Manager</td> <td>0.960</td> <td>In IE, when attempting to download a file by shift-double-clicking the file is displayed instead. This update adds a new Save button to the File Manager that can be used instead, and is more obvious.</td> <td nowrap><a href="updates/file-0.960-5.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>SSL Tunnels</td> <td>0.960</td> <td>When SSL tunnels are started from Xinetd, the Apply Changes button does not work.</td> <td nowrap><a href="updates/stunnel-0.960-5.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>PostgreSQL Database Server</td> <td>0.960</td> <td>On some systems, when trying to enter the PostgreSQL module a blank page appears, or the browser reports &#39;Document contains no data&#39;.</td> <td nowrap><a href="updates/postgresql-0.960-4.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>Disk and Network Filesystems</td> <td>0.960</td> <td>On OpenBSD 3.0, no filesystems are shown as currently mounted. This also causes problems in the Disk Quotas module.</td> <td nowrap><a href="updates/mount-0.960-6.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>Network Configuration</td> <td>0.960</td> <td>On Debian Linux 3.0 systems, network interfaces cannot be set to activate at boot time properly.</td> <td nowrap><a href="updates/net-0.960-4.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>Apache Webserver</td> <td>0.960</td> <td>The Apache module does not recognize HP&#39;s version of Apache 2.0.</td> <td nowrap><a href="updates/apache-0.960-3.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>System and Server Status</td> <td>0.960</td> <td>When run from schedule, the status monitor will sometimes fail with the error <tt>Undefined subroutine main::get__status</tt>.</td> <td nowrap><a href="updates/status-0.960-3.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>Disk and Network Filesystems</td> <td>0.960</td> <td>An error in this module causes filesystems that can support quotas not to be displayed on FreeBSD. This same bug also caused problems with other modules that display a list of filesystems, such as Running Processes and System and Server Status.</td> <td nowrap><a href="updates/mount-0.960-4.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>ProFTP Server</td> <td>0.960</td> <td>The AllowGroup, DenyGroup, AllowUser and DenyUser directives are not created correctly for multiple users and groups.</td> <td nowrap><a href="updates/proftpd-0.960-3.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>MON Service Monitor</td> <td>0.960</td> <td>The period in mon.cf directive is not supported, and causes an error if it is used.</td> <td nowrap><a href="updates/mon-0.960-1.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>Disk and Network Filesystems</td> <td>0.960</td> <td>On MSC Linux, LVM logical volumes are not available to select from when mounting.</td> <td nowrap><a href="updates/mount-0.960-1.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>Webmin Users</td> <td>0.960</td> <td>When editing an existing group, modules that the group currently has are not selected.</td> <td nowrap><a href="updates/acl-0.960-1.wbm.gz">New module</a></td> </tr>


<tr class="maintitle"> <td colspan="4"><b>Updates to Webmin 0.950</b></td> </tr>
<tr class="mainbody"> <td>Samba Windows File Sharing</td> <td>0.950</td> <td>Usernames with spaces in them are not handled properly when editing the allowed and denied user lists for share access control.</td> <td nowrap><a href="updates/samba-0.950-6.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>MySQL Database Server</td> <td>0.950</td> <td>On some system, the mysql module always reports that the version you are running is not supported even though it is. This is due to a problem with LD_LIBRARY_PATH that this update works around.</td> <td nowrap><a href="updates/mysql-0.950-5.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>Postfix Configuration</td> <td>0.950</td> <td>Some pages (such as editing aliases and editing mappings) do not appear completely when using the new Webmin theme.</td> <td nowrap><a href="updates/postfix-0.950-1.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>Cluster Software Packages</td> <td>0.950</td> <td>Installing or deleting a package or refreshing the package list fails.</td> <td nowrap><a href="updates/cluster-software-0.950-1.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>Sendmail Configuration</td> <td>0.950</td> <td>If a non-root user sends an email with a server-side attachment, the mail is sent but no result page is displayed saying that it was send successfully.</td> <td nowrap><a href="updates/sendmail-0.950-1.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>System and Server Status</td> <td>0.950</td> <td>If your have a ping status monitor, the main page of the module or the monitor page does not display completely.</td> <td nowrap><a href="updates/status-0.950-1.wbm.gz">New module</a></td> </tr>


<tr class="maintitle"> <td colspan="4"><b>Updates to Webmin 0.94</b></td> </tr>
<tr class="mainbody"> <td>Sendmail Configuration</td> <td>0.94</td> <td>When removing the attachments from an email message, the body appears to be removed as well due to an error in the resulting MIME headers.</td> <td nowrap><a href="updates/sendmail-0.94-1.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>Network Configuration</td> <td>0.94</td> <td>Module does not appear on Debian Linux 3.0 systems, when it really should.</td> <td nowrap><a href="updates/net-0.94-1.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>Software Packages</td> <td>0.94</td> <td>Module does not appear on Debian Linux 3.0 systems, when it really should.</td> <td nowrap><a href="updates/software-0.94-1.wbm.gz">New module</a></td> </tr>


<tr class="maintitle"> <td colspan="4"><b>Updates to Webmin 0.93</b></td> </tr>
<tr class="mainbody"> <td>Disk Quotas</td> <td>0.93</td> <td>On Linux systems in which english is not the default language, the Disk Quotas module does not allow quotas to be enabled, and may disable quotas when the main page of the module is viewed.</td> <td nowrap><a href="updates/quota-0.93-3.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>BIND DNS Server</td> <td>0.93</td> <td>Paths in named.conf with // in them are not parsed properly, causing some zones to be un-editable.</td> <td nowrap><a href="updates/bind8-0.93-1.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>File Manager</td> <td>0.93</td> <td>On FreeBSD, the file manager applet fails to start due to a NullPointerException.</td> <td nowrap><a href="updates/file-0.93-2.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>Custom Commands</td> <td>0.93</td> <td>When the module is set to &#39;Links to commands&#39; mode, the HTML description of a command is shown with the tags visible.</td> <td nowrap><a href="updates/custom-0.93-1.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>File Manager</td> <td>0.93</td> <td>On some browsers, when saving a file after editing all the newline characters get stripped from the file!</td> <td nowrap><a href="updates/file-0.93-1.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>Sendmail Configuration</td> <td>0.93</td> <td>When reading mail, attachments that themselves contain additional attachments are not being hidden.</td> <td nowrap><a href="updates/sendmail-0.93-1.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>Samba Windows File Sharing</td> <td>0.93</td> <td>Converting Unix users to Samba users does not work properly, due to a perl error.</td> <td nowrap><a href="updates/samba-0.93-1.wbm.gz">New module</a></td> </tr>


<tr class="maintitle"> <td colspan="4"><b>Updates to Webmin 0.92</b></td> </tr>

<tr class="mainbody"> <td>BIND DNS Server</td> <td>0.92</td> <td>Options on slave and stub zones can be edited, even though the user has the &#39;Can edit zone parameters?&#39; ACL option set to No.</td> <td nowrap><a href="updates/bind8-0.92-2.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>Internet Services and Protocols</td> <td>0.92</td> <td>Saving a service with a number in its name displays an error message.</td> <td nowrap><a href="updates/inetd-0.92-1.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>Jabber IM Server</td> <td>0.92</td> <td>The General Options page of the Jabber module displays a Perl error when you go into it.</td> <td nowrap><a href="updates/jabber-0.92-2.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>ProFTP Server</td> <td>0.92</td> <td>The &#39;Client connection message&#39; option creates an incorrect config file entry if you enter a message with spaces in it.</td> <td nowrap><a href="updates/proftpd-0.92-1.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>MSC.Linux Theme</td> <td>0.92</td> <td>Sometimes when you are inside a module, a cateogry icon (like Servers) cannot be clicked on.</td> <td nowrap><a href="updates/mscstyle3-0.92-2.wbt.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>MySQL Database Server</td> <td>0.92</td> <td>When using the MySQL module, the annoying (but harmless) error message &#39;Database handle destroyed without explicit disconnect&#39; can appear on the console.</td> <td nowrap><a href="updates/mysql-0.92-1.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>PostgreSQL Database Server</td> <td>0.92</td> <td>The main page of this module may appear empty if webmin has been started at boot time on some operating systems.</td> <td nowrap><a href="updates/postgresql-0.92-1.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>BIND DNS Server</td> <td>0.92</td> <td>Editing of stub zones introduced a syntax error into the named.conf file in the masters section f the zone.</td> <td nowrap><a href="updates/bind8-0.92-1.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>Users and Groups</td> <td>0.92</td> <td>Attempting to add users using the batch form produces the error &#39;You cannot use the batch file form&#39;</td> <td nowrap><a href="updates/useradmin-0.92-1.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>Custom Commands</td> <td>0.92</td> <td>Custom command options like &#39;User users environment&#39; and &#39;Ordering on main page&#39; are not being saved properly</td> <td nowrap><a href="updates/custom-0.92-1.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>Jabber IM Server</td> <td>0.92</td> <td>When missing the XML::Parser or XML::Generator perl modules, Webmin displays a cryptic perl error instead of telling the user which modules are needed</td> <td nowrap><a href="updates/jabber-0.92-1.wbm.gz">New module</a></td> </tr>

<tr class="maintitle"> <td colspan="4"><b>Updates to Webmin 0.91</b></td> </tr>

<tr class="mainbody"> <td>System Documentation</td> <td>0.91</td> <td>Any Webmin user with access to this module can execute commands as root using the view_man.cgi script.</td> <td nowrap><a href="updates/man-0.91-2.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>File Manager</td> <td>0.91</td> <td>When Webmin is running in SSL mode, editing and saving files in the file manager does not work properly in Netscape 6.</td> <td nowrap><a href="updates/file-0.91-1.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>Sendmail Configuration</td> <td>0.91</td> <td>Users with the ability to view the mail queue can view any file on the system, including /etc/shadow .</td> <td nowrap><a href="updates/sendmail-0.91-2.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>BIND DNS Server</td> <td>0.91</td> <td>Lines in named.conf with // style comments are not handled properly, possibly causing webmin to missing some zones.</td> <td nowrap><a href="updates/bind8-0.91-1.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>Disk Quotas</td> <td>0.91</td> <td>The list of user quotas on a filesystem is not shown correctly under Linux if a user has a grace time set.</td> <td nowrap><a href="updates/quota-0.91-1.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>System Documentation</td> <td>0.91</td> <td>Searching for MAN pages doesn&#39;t return any results on some systems.</td> <td nowrap><a href="updates/man-0.91-1.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>Sendmail Configuration</td> <td>0.91</td> <td>If mail is selected from a mailbox and the Delete button clicked, the Compose Email screen appears instead of the mail being deleted.</td> <td nowrap><a href="updates/sendmail-0.91-1.wbm.gz">New module</a></td> </tr>

<tr class="maintitle"> <td colspan="4"><b>Updates to Webmin 0.90</b></td> </tr>

<tr class="mainbody"> <td>Webmin Users</td> <td>0.90</td> <td>If a webmin user is granted the rights to edit users who are members of some group, he can edit the members of any group.</td> <td nowrap><a href="updates/acl-0.90-1.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>BIND 4 DNS Server</td> <td>0.90</td> <td>Records cannot be edited or created due to the Address input not appearing.</td> <td nowrap><a href="updates/dnsadmin-0.90-1.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>ProFTP Server</td> <td>0.90</td> <td>Network addresses like 1.2.3.0/24 are not accepted in access control.</td> <td nowrap><a href="updates/proftpd-0.90-1.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>Squid Proxy Server</td> <td>0.90</td> <td>Saving a new squid user causes a perl error to be displayed</td> <td nowrap><a href="updates/squid-0.90-1.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>Disk Quotas</td> <td>0.90</td> <td>Limiting access to users by UID does not work properly</td> <td nowrap><a href="updates/quota-0.90-1.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>Webmin Servers Index</td> <td>0.90</td> <td>When editing a server in a group, the group field has both the Existing group and New group options selected</td> <td nowrap><a href="updates/servers-0.90-1.wbm.gz">New module</a></td> </tr>

<tr class="maintitle"> <td colspan="4"><b>Updates to Webmin 0.89</b></td> </tr>

<tr class="mainbody"> <td>Users and Groups</td> <td>0.89</td> <td>Office, home
and work phone fields are not validated to prevent illegal characters like
:</td> <td nowrap><a href="updates/useradmin-0.89-1.wbm.gz">New module</a></td> </tr>

<tr class="maintitle"> <td colspan="4"><b>Updates to Webmin 0.88</b></td> </tr>

<tr class="mainbody"> <td>Custom Commands</td> <td>0.88</td> <td>Commands with the <i>Use user&#39;s environment?</i> option set allow a local user to execute commands as root if the right file is modified when the command is executed.</td> <td nowrap><a href="updates/custom-0.88-1.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>Partitions on Local Disks</td> <td>0.88</td> <td>Partitions are not displayed properly on Redhat 7.1 systems, due to a bug in the Running Processes module.</td> <td nowrap><a href="updates/proc-0.88-1.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>Samba Windows File Sharing</td> <td>0.88</td> <td>Existing user mapping files are not displayed and edited properly.</td> <td nowrap><a href="updates/samba-0.88-1.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>System and Server Status</td> <td>0.88</td> <td>The load average monitor does not work on FreeBSD, and the averages are shown as 5, 10 and 15 minutes instead of 1, 5 and 15 minutes.</td> <td nowrap><a href="updates/status-0.88-1.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>Users and Groups</td> <td>0.88</td> <td>New AIX-specific options are not displayed properly.</td> <td nowrap><a href="updates/useradmin-0.88-1.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>ProFTPD Server</td> <td>0.88</td> <td>Viewing network options for a virtual server can fail with a perl execution error.</td> <td nowrap><a href="updates/proftpd-0.88-1.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>Majordomo List Manager</td> <td>0.88</td> <td>When deleting a list with a . in it&#39;s name, aliases and files for other lists may be deleted as well.</td> <td nowrap><a href="updates/majordomo-0.88-1.wbm.gz">New module</a></td> </tr>

<tr class="maintitle"> <td colspan="4"><b>Updates to Webmin 0.87</b></td> </tr>

<tr class="mainbody"> <td>Webmin Users</td> <td>0.87</td> <td>When changing the ACL on a module for a group, the changes do not get applied to members of the group in some circumstances.</td> <td nowrap><a href="updates/acl-0.87-1.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>BIND DNS Server</td> <td>0.87</td> <td>When selecting which zones a user can edit, the selection is not saved properly.</td> <td nowrap><a href="updates/bind8-0.87-2.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>Caldera Theme</td> <td>0.87</td> <td>When in normal authentication mode, the Switch User link is not visible anywhere when using this theme.</td> <td nowrap><a href="updates/caldera-0.87-1.wbt.gz">updated theme</a></td> </tr>

<tr class="mainbody"> <td>BIND DNS Server</td> <td>0.87</td> <td>Relative PID file paths in the named.conf file are not handled properly.<br>Note - this fix also adds a feature for specifying which include file new zones are added to.</td> <td nowrap><a href="updates/bind8-0.87-1.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>Network Configuration</td> <td>0.87</td> <td>The module does not appear correctly on FreeBSD 4.1, 4.2, 4.3 and 4.4 systems.</td> <td nowrap><a href="updates/net-0.87-1.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>Software Packages</td> <td>0.87</td> <td>The module does not appear correctly on FreeBSD 4.1, 4.2, 4.3 and 4.4 systems.</td> <td nowrap><a href="updates/software-0.87-1.wbm.gz">New module</a></td> </tr>

<tr class="maintitle"> <td colspan="4"><b>Updates to Webmin 0.86</b></td> </tr>

<tr class="mainbody"> <td>Users and Groups</td> <td>0.86</td> <td>When the <tt>/etc/skel</tt> directory contains a symlink, it does not get copied correctly to the new user&#39;s home directory.</td> <td nowrap><a href="updates/useradmin-0.86-3.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>File Manager</td> <td>0.86</td> <td>A user who is granted only access to files in his home directory can actually see all files on the server. Also, any user can configure file sharing, not just users with <tt>root</tt> file permissions.</td> <td nowrap><a href="updates/file-0.86-2.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>Printer Administration</td> <td>0.86</td> <td>On Redhat Linux 7.1, new printers with drivers are not created properly - the driver always ends up as <tt>/usr/share/printconf/mf_wrapper</tt>.</td> <td nowrap><a href="updates/lpadmin-0.86-1.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>Users and Groups</td> <td>0.86</td> <td>On HPUX, the Edit User and Create User pages come up blank due to a bug in Perl with the <tt>endpwent()</tt> function.</td> <td nowrap><a href="updates/useradmin-0.86-2.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>File Manager</td> <td>0.86</td> <td>In German language mode, some of the buttons at the top of the file manager disappear due to their labels being too large.</td> <td nowrap><a href="updates/file-0.86-1.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>Scheduled Cron Jobs</td> <td>0.86</td> <td>When running a cron job manually, some programs (like PHP scripts) don&#39;t work the same way that they would if they were run by cron itself on schedule. This is due to environment variables being set by Webmin that would not be set by cron.<br>This update also fixes problems with the cron module on AIX systems.</td> <td nowrap><a href="updates/cron-0.86-1.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>Users and Groups</td> <td>0.86</td> <td>When selecting users in the Create Group page, the error <tt>Can&#39;t modify reference constructor in local</tt> is displayed.</td> <td nowrap><a href="updates/useradmin-0.86-1.wbm.gz">New module</a></td> </tr>

<tr class="maintitle"> <td colspan="4"><b>Updates to Webmin 0.85</b></td> </tr>

<tr class="mainbody"> <td>Webmin Webserver (miniserv.pl)</td> <td>0.85</td> <td>Servers started by Webmin (like Apache) get passed environment variables containing password information. This may then become available to untrusted users, for example if the Apache webserver runs user CGI programs.</td> <td>Download the updated <a href="updates/miniserv.pl">miniserv.pl</a> and replace the one in your webmin directory. You may need to edit the first line to use the correct perl path. Then run <tt>/etc/webmin/stop ; /etc/webmin/start</tt> as root.</td> </tr>

<tr class="mainbody"> <td>System Documentation</td> <td>0.85</td> <td>A search that returns only one match will display a Location: line instead of going directly to the result.</td> <td nowrap><a href="updates/man-0.85-1.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>Command Shell</td> <td>0.85</td> <td>On Solaris, the path is not set correctly for commands entered, causing those outside /usr/sbin:/usr/sbin not to be found.</td> <td nowrap><a href="updates/shell-0.85-1.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>MySQL Database Server</td> <td>0.85</td> <td>Clicking on a user, host, database, table or column privilege to edit it brings up the wrong record.</td> <td nowrap><a href="updates/mysql-0.85-1.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>PostgreSQL Database Server</td> <td>0.85</td> <td>The module reports the error <tt>The PostgreSQL database on your system is version , but Webmin only supports versions 6.5 and above</tt>. This is often caused by the shared libraries needed by Postgres not being in Webmin&#39;s shared library path.</td> <td nowrap><a href="updates/postgresql-0.85-1.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>Apache Webserver</td> <td>0.85</td> <td>If Webmin is used in non-english language mode, <tt>&lt;Directory&gt;</tt> sections created using this module may be wrongly written out as something like <tt>&lt;Directorio&gt;</tt>!<br>Note - this update includes the duplicate virtual servers update below.</td> <td nowrap><a href="updates/apache-0.85-2.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>Squid Proxy Server</td> <td>0.85</td> <td>The <tt>cache_dir</tt> directive is not properly supported in squid 2.4.</td> <td nowrap><a href="updates/squid-0.85-1.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>Users and Groups</td> <td>0.85</td> <td>Passwords for users created or modified from a batch file are not set correctly.</td> <td nowrap><a href="updates/useradmin-0.85-1.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>BIND DNS Server</td> <td>0.85</td> <td>Reverse address records are not updated properly if the reverse zone has a . at the end of its name in named.conf . Also, logging of some record additions is not done properly.</td> <td nowrap><a href="updates/bind8-0.85-1.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>Disk Quotas</td> <td>0.85</td> <td>On systems using the latest Linux quotas package (typically those with the 2.4 kernel), quotas cannot be edited or enabled for the first time.</td> <td nowrap><a href="updates/quota-0.85-1.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>Network Configuration</td> <td>0.85</td> <td>On Debian Linux 2.2, the <tt>auto</tt> and <tt>mapping</tt> network config file entries cause an error message to be displayed by Webmin.<br>On SuSE Linux, changes to the DNS client settings are not properly saved and thus do not take effect.</td> <td nowrap><a href="updates/net-0.85-1.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>Apache Webserver</td> <td>0.85</td> <td>Two virtual servers can be created with the same name and port. On systems that restrict which Webmin users can edit which virtual servers, this could be used to get around the restriction.</td> <td nowrap><a href="updates/apache-0.85-1.wbm.gz">New module</a></td> </tr>

<tr class="mainbody"> <td>Network Configuration</td> <td>0.85</td> <td>Virtual network interfaces could not be setup properly on Solaris 8.</td> <td nowrap><a href="updates/net-0.85-1.wbm.gz">New module</a></td> </tr>

</table><p>

<a href="updates/updates.txt">Updates data file</a> </p><p>

			</p></div>
