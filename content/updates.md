---
title: "Webmin Updates"
date: 2017-10-02
categories: []
aliases: []
toc: false
draft: false
---
Listed below are updates to Webmin for problems that have been discovered since the each release. Most are in the form of modules, which can be installed under Webmin Configuration -> Webmin Modules.

To have updates installed automatically, go to the Webmin Configuration module, click on Upgrade Webmin and use the form in the Update Modules section.

**Module**

**Version**

**Problem**

**Solution**

**Updates to Webmin 1.830**

**Updates to Webmin 1.810**

BIND DNS Server

1.810

Fixed the error : Can't use an undefined value as a symbol reference

[New module](updates/bind8-1.810-3.wbm.gz)

**Updates to Webmin 1.801**

Samba Windows File Sharing

1.800

Fix error about foriegn\_require function

[New module](updates/samba-1.800-3.wbm.gz)

**Updates to Webmin 1.780**

Authentic Theme

1.780

Fixed editor in Filemin saving content incorrectly, when multiple files were opened at once

[New module](updates/authentic-theme-1.780-3.wbt.gz)

**Updates to Webmin 1.730**

MySQL Database Server

1.730

MySQL backups run as a non-root user fail if the user has a .my.cnf file

[New module](updates/mysql-1.730-3.wbm.gz)

Disk and Network Filesystems

1.730

Fixes the error Undefined subroutine &mount::getpwgid

[New module](updates/mount-1.730-1.wbm.gz)

**Updates to Webmin 1.670**

Webmin Users

1.670

Fix Perl error calling webmin::show\_twofactor\_form\_auth when enabling two-factor authentication

[New module](updates/acl-1.670-2.wbm.gz)

**Updates to Webmin 1.650**

Linux Firewall

1.650

When editing a SNAT rule, the source IP cannot be entered

[New module](updates/firewall-1.650-2.wbm.gz)

**Updates to Webmin 1.640**

Apache Webserver

1.640

Apache is shown as not running on Debian 7 systems, even when it really is

[New module](updates/apache-1.640-3.wbm.gz)

Software Packages

1.640

Fixes the error 'The FreeBSD Package Manager package system requires the pkg info command'

[New module](updates/software-1.640-2.wbm.gz)

Apache Webserver

1.640

Fixes the error 'Undefined subroutine &apache::autoindex\_directives'

[New module](updates/apache-1.640-2.wbm.gz)

**Updates to Webmin 1.630**

Running Processes

1.630

Fixes total and free memory display on OpenVZ systems

[New module](updates/proc-1.630-2.wbm.gz)

**Updates to Webmin 1.600**

Change Passwords

1.600

Fix for potential XSS attack via real name field

[New module](updates/passwd-1.600-5.wbm.gz)

**Updates to Webmin 1.590**

File Manager

1.590

Fixes two XSS security issues

[New module](updates/file-1.590-3.wbm.gz)

System and Server Status

1.590

Fixes the error Cant use global $\_ in "my" at edit\_mon.cgi line 316

[New module](updates/status-1.590-1.wbm.gz)

**Updates to Webmin 1.560**

Backup Configuration Files

1.560

Fixes the error 'Backup failed : No modules provided any existing files to backup' when making an immediate backup

[New module](updates/backup-config-1.560-2.wbm.gz)

Bootup and Shutdown

1.560

Fixes a problem on Debian and Ubuntu systems in the Webmin Configuration module that prevents Webmin from being started at boot time

[New module](updates/init-1.560-2.wbm.gz)

**Updates to Webmin 1.540**

Users and Groups

1.540

Fixes an XSS attack that can be exploited if un-trusted users are allowed to change their own real names

[New module](updates/useradmin-1.540-2.wbm.gz)

**Updates to Webmin 1.530**

System and Server Status

1.530

Fix error Bad arg length for Socket::pack\_sockaddr\_in in Remote Ping monitor

[New module](updates/status-1.530-1.wbm.gz)

**Updates to Webmin 1.480**

MySQL Database Server

1.480

Fixed bugs with importing CSV and executing SQL from files

[New module](updates/mysql-1.480-1.wbm.gz)

LDAP Users and Groups

1.480

When a group is renamed in LDAP, the CN is not properly updated

[New module](updates/ldap-useradmin-1.480-1.wbm.gz)

**Updates to Webmin 1.470**

Software Packages

1.470

Use new CWS package installer on Solaris

[New module](updates/software-1.470-2.wbm.gz)

File Manager

1.470

Uploading a file that overwrites an existing file causes it to be truncated to zero length

[New module](updates/file-1.470-2.wbm.gz)

**Updates to Webmin 1.460**

System and Server Status

1.460

All Remote TCP Service monitors report that the service is not installed

[New module](updates/status-1.460-1.wbm.gz)

File Manager

1.460

Opening the file manager module fails with an error about un-trusted referers

[New module](updates/file-1.460-1.wbm.gz)

**Updates to Webmin 1.450**

Webmin Configuration

1.450

Upgrading from www.webmin.com failed with the error message 'Failed to write to :'

[New module](updates/webmin-1.450-1.wbm.gz)

BIND DNS Server

1.450

If any views exist, Webmin falsely warnings that 'the following zones are not in any view', even though they are

[New module](updates/bind8-1.450-1.wbm.gz)

Postfix Mail Server

1.450

Alias management fails with an error about the missing rebuild\_map\_cmd function

[New module](updates/postfix-1.450-1.wbm.gz)

**Updates to Webmin 1.440**

Blue Framed Theme

1.440

Left menu categories do not expand properly on IE, and the login form is too wide

[New module](updates/blue-theme-1.440-1.wbt.gz)

LDAP Users and Groups

1.440

When there are too many LDAP users to display, the link to add a new one does not appear

[New module](updates/ldap-useradmin-1.440-1.wbm.gz)

**Updates to Webmin 1.420**

Running Processes

1.420

Memory display on FreeBSD is shown in GB instead of MB

[New module](updates/proc-1.420-2.wbm.gz)

**Updates to Webmin 1.400**

Users and Groups

1.400

When saving a group, the member list may be incorrectly cleared

[New module](updates/useradmin-1.400-5.wbm.gz)

File Manager

1.400

File downloads fail when unknown referers are not trusted

[New module](updates/file-1.400-2.wbm.gz)

**Updates to Webmin 1.390**

MySQL Database Server

1.390

When trying to login as a user without access to the 'mysql' database, the login can be reported by Webmin as invalid even though the username and password are actually correct

[New module](updates/mysql-1.390-3.wbm.gz)

Apache Webserver

1.390

Deleting Apache virtual hosts that do not have their own files does not work

[New module](updates/apache-1.390-2.wbm.gz)

Disk Quotas

1.390

When only user quotas are active on Linux, both user and group quotas are incorrectly shown to be enabled

[New module](updates/quota-1.390-1.wbm.gz)

Users and Groups

1.390

The access control restriction on the allowed home directory can be defeated by entering a path with .. in it

[New module](updates/useradmin-1.390-1.wbm.gz)

**Updates to Webmin 1.380**

BIND DNS Server

1.380

Deleting zones within views from the main page can cause incorrect directives to be removed

[New module](updates/bind8-1.380-2.wbm.gz)

Postfix Mail Server

1.380

Added back missing support for comments, manual map editing and PCRE maps

[New module](updates/postfix-1.380-1.wbm.gz)

**Updates to Webmin 1.370**

Webmin Users

1.370

Allowed and denied IP addresses for individual Webmin users cannot be set properly

[New module](updates/acl-1.370-1.wbm.gz)

**Updates to Webmin 1.360**

LDAP Users and Groups

1.360

When creating users from a batch file, the error 'Cant call method search without a package or object reference' appears

[New module](updates/ldap-useradmin-1.360-3.wbm.gz)

LDAP Users and Groups

1.360

When an LDAP user or group is created, the in-memory cache is not properly updated. This can lead to problems when Virtualmin adds users or groups to LDAP

[New module](updates/ldap-useradmin-1.360-1.wbm.gz)

Disk and Network Filesystems

1.360

On systems with ReiserFS filesystems, Webmin cron jobs can output the spurious warning 'Reiserfstune is not allowed to be run on mounted filesystem'

[New module](updates/mount-1.360-1.wbm.gz)

Network Configuration

1.360

Boot-time network interfaces are not shown properly on Slackware 11

[New module](updates/net-1.360-1.wbm.gz)

DHCP Server

1.360

Deleting multiple hosts, groups or subnets at once does not work

[New module](updates/dhcpd-1.360-1.wbm.gz)

**Updates to Webmin 1.340**

BIND DNS Server

1.340

When deleting multiple DNS records, the wrong ones can sometimes be removed

[New module](updates/bind8-1.340-6.wbm.gz)

Apache Webserver

1.340

Radio button fields in many forms have the wrong name, causing virtual host creation to fail and possible incorrect changes to the Apache config

[New module](updates/apache-1.340-5.wbm.gz)

**Updates to Webmin 1.320**

Read User Mail

1.320

When a non-master admin user (such as a Virtualmin domain owner) tries to send email, the error message 'Missing from address' appears.

[New module](updates/mailboxes-1.320-4.wbm.gz)

System and Server Status

1.320

If no remote Webmin servers are defined, attempting to add a monitor always fails with the error message 'No hosts or groups to run on selected'

[New module](updates/status-1.320-4.wbm.gz)

BIND DNS Server

1.320

When there are too many zones to list on the system, the links for adding new zones do not appear.

[New module](updates/bind8-1.320-3.wbm.gz)

**Updates to Webmin 1.310**

File Manager

1.310

When opening the access control page for the File Manager module, the error 'Undefined subroutine file::ui\_radio' appears

[New module](updates/file-1.310-1.wbm.gz)

BIND DNS Server

1.310

The button to convert a slave zone to master does not appear when running under a chroot directory

[New module](updates/bind8-1.310-1.wbm.gz)

**Updates to Webmin 1.300**

Postfix Configuration

1.300

Aliases that have been commented out (disabled) are not shown, and comments are shown as empty aliases.

[New module](updates/postfix-1.300-3.wbm.gz)

Apache Webserver

1.300

When manually editing the directives in a virtual server, the entire httpd.conf file is shown.

[New module](updates/apache-1.300-1.wbm.gz)

Postfix Configuration

1.300

Aliases that have been commented out (disabled) are not shown.

[New module](updates/postfix-1.300-2.wbm.gz)

Postfix Configuration

1.300

Aliases that have been commented out (disabled) are not shown.

[New module](updates/postfix-1.300-1.wbm.gz)

Sendmail Configuration

1.300

Aliases that have been commented out (disabled) are not shown.

[New module](updates/sendmail-1.300-1.wbm.gz)

DHCP Server

1.300

The List Leases page can fail with a division by zero error, and checkboxes on the main page for deleting multiple subnets do not work.

[New module](updates/dhcpd-1.300-1.wbm.gz)

**Updates to Webmin 1.290**

Read User Mail

1.290

When a user is restricted to only a subset of mailboxes and the system has more than 200 users, no users appear on the module's main page.

[New module](updates/mailboxes-1.290-3.wbm.gz)

MySQL Database Server

1.290

When attempting to backup a MySQL database as a non-root user, the following error appears : Access denied for user 'username'@'localhost' to database 'mysql'

[New module](updates/mysql-1.290-2.wbm.gz)

**Updates to Webmin 1.280**

Caldera Theme

1.280

The category links in the top frame don't actually change categories.

[New module](updates/caldera-1.280-2.wbt.gz)

Read User Mail

1.280

Next / previous mail page links do not appear for users with non-alphanumeric characters in their names

[New module](updates/mailboxes-1.280-1.wbm.gz)

System and Server Status

1.280

Monitors that check remote Webmin servers fail if they have been upgraded to 1.280

[New module](updates/status-1.280-1.wbm.gz)

System Time

1.280

Scheduled syncing with a time server times out or does not work.

[New module](updates/time-1.280-1.wbm.gz)

**Updates to Webmin 1.270**

File Manager

1.270

When saving large files in DOS text format, the File Manager may hang.

[New module](updates/file-1.270-4.wbm.gz)

LDAP Users and Groups

1.270

When setting a password for a user, an error about the check\_password\_restrictions function is displayed.

[New module](updates/ldap-useradmin-1.270-1.wbm.gz)

**Updates to Webmin 1.260**

Bootup and Shutdown

1.260

On some Redhat-derived systems, enabling an action at boot does not take effect.

[New module](updates/init-1.260-2.wbm.gz)

Disk and Network Filesystems

1.260

Opening this module on NetBSD 3 triggers an error about compiling the netbsd-mounts.c program.

[New module](updates/mount-1.260-3.wbm.gz)

**Updates to Webmin 1.250**

Network Configuration

1.250

Virtual network interfaces cannot be created properly on SuSE Linux 9.1 and greater

[New module](updates/net-1.250-4.wbm.gz)

Network Configuration

1.250

The Apply Configuration button does not appear on SuSE Linux 10.0, and other functions may not operate properly either.

[New module](updates/net-1.250-2.wbm.gz)

Webmin Users

1.250

When a new Webmin user is added automatically at the same time as a Unix user, his ACL settings are not properly copied from the group.

[New module](updates/acl-1.250-2.wbm.gz)

**Updates to Webmin 1.240**

MySQL Database Server

1.240

When using MySQL version 4.1 or above, Webmin always reports that attempts to login to the database server have failed.

[New module](updates/mysql-1.240-9.wbm.gz)

Upload and Download

1.240

A Webmin user with non-root access to this module can still use it to view any file as root, such as /etc/shadow.

[New module](updates/updown-1.240-8.wbm.gz)

**Updates to Webmin 1.230**

Disk Quotas

1.230

On some Linux systems, changes to quotas sometimes do not take effect.

[New module](updates/quota-1.230-1.wbm.gz)

Perl Modules

1.230

Installing modules from CPAN files with an 'invalid URL' error message.

[New module](updates/cpan-1.230-1.wbm.gz)

**Updates to Webmin 1.220**

Disk and Network Filesystems

1.220

When mounting an NFS filesystem on Solaris or OSF1, the error message 'Undefined subroutine &main::unlink\_dir called' appears.

[New module](updates/mount-1.220-2.wbm.gz)

MySQL Database Server

1.220

When executing a backup that has a command to run before or after, an error message like '/bin/sh: line 1: ((: /path/to/script.sh: syntax error' appears

[New module](updates/mysql-1.220-2.wbm.gz)

PostgreSQL Database Server

1.220

When executing a backup that has a command to run before or after, an error message like '/bin/sh: line 1: ((: /path/to/script.sh: syntax error' appears

[New module](updates/postgresql-1.220-2.wbm.gz)

System Time

1.220

On FreeBSD systems, the module always displays the error message 'Unrecognized hwclock output format' on the main page.

[New module](updates/time-1.220-1.wbm.gz)

Postfix Configuration

1.220

When deleting mail file from queue, the error message 'Undefined subroutine &main::translate\_file' always appears.

[New module](updates/postfix-1.220-1.wbm.gz)

ProFTPD Server

1.220

Webmin always reports that it cannot get the ProFTPd version number, even though it is being reported correctly.

[New module](updates/proftpd-1.220-1.wbm.gz)

**Updates to Webmin 1.210**

BIND DNS Server

1.210

When clicking on a zone in a view from the main menu, its records are not displayed properly.

[New module](updates/bind8-1.210-3.wbm.gz)

MySQL Database Server

1.210

When executing SQL commands in a file, Webmin always reports that they have failed, even when successful.

[New module](updates/mysql-1.210-2.wbm.gz)

Users and Groups

1.210

On OSX, the Users and Groups module always reports that no users or groups exist.

[New module](updates/useradmin-1.210-2.wbm.gz)

MSC.Linux Theme

1.210

Some third-party modules report the error 'Cant locate Webmin/Textbox.pm' when this default theme is in use.

[New module](updates/mscstyle3-1.210-1.wbt.gz)

**Updates to Webmin 1.200**

BIND DNS Server

1.200

When the 'Add new zones to file' option is set on the Module Config page, new zones and views are added to the wrong place in that file.

[New module](updates/bind8-1.200-1.wbm.gz)

**Updates to Webmin 1.190**

BSD Firewall

1.190

When the Apply button is clicked, the rule editing page is displayed instead of the configuration being applied.

[New module](updates/ipfw-1.190-3.wbm.gz)

PostgreSQL Database Server

1.190

When using version 7.1 of PostgreSQL, the error message ' ERROR: Relation pg\_namespace does not exist' appears when opening a database.

[New module](updates/postgresql-1.190-1.wbm.gz)

System and Server Status

1.190

When the module is configured to send one email per down service, it sends an additional blank email every time a problem is detected.

[New module](updates/status-1.190-1.wbm.gz)

Usermin Configuration

1.190

When saving the Usermin update schedule, the error message 'Missing or invalid number of days' always appears.

[New module](updates/usermin-1.190-1.wbm.gz)

DHCP Server

1.190

When adding a host or subnet, the error message 'Unsupported file or mode >' appears.

[New module](updates/dhcpd-1.190-1.wbm.gz)

BIND DNS Server

1.190

When creating a master or slave zone, an error message appears and the zone is not created.

[New module](updates/bind8-1.190-1.wbm.gz)

**Updates to Webmin 1.180**

BIND DNS Server

1.180

On OpenBSD systems, opening the BIND module causes a Webmin process to go into an infinite loop and use up all available memory.

[New module](updates/bind8-1.180-3.wbm.gz)

LDAP Users and Groups

1.180

The default warning and inactive days are not taken from the module configuration. For Samba users the account flags are overwritten when editing a user.

[New module](updates/ldap-useradmin-1.180-1.wbm.gz)

**Updates to Webmin 1.170**

NFS Exports

1.170

The error message 'Undefined subroutine &main::ui\_print\_header' appears when opening the module.

[New module](updates/hpuxexports-1.170-5.wbm.gz)

SSH Server

1.170

The Apply Changes button does not actually restart SSHd or apply the configuration.

[New module](updates/sshd-1.170-2.wbm.gz)

Extended Internet Services

1.170

When applying the xinet configuration, an error message about sending a HUP signal is always incorrectly displayed.

[New module](updates/xinetd-1.170-2.wbm.gz)

Sendmail Configuration

1.170

When the 'Everything' option is selected for a Spam Control rule, it is incorrected created with the prefix 'selected:'

[New module](updates/sendmail-1.170-1.wbm.gz)

Disk Quotas

1.170

When editing quotas for a user or group, changes do not get saved on systems running the 2.6 kernel

[New module](updates/quota-1.170-1.wbm.gz)

Bandwidth Monitoring

1.170

After setting up bandwidth monitoring, the error message 'Unknown IPtables save file line' appears.

[New module](updates/bandwidth-1.170-1.wbm.gz)

SSH Server

1.170

The SSH server is always shown as not running, making it impossible to apply configuration changes.

[New module](updates/sshd-1.170-1.wbm.gz)

System and Server Status

1.170

The file existance and change monitors do not work.

[New module](updates/status-1.170-1.wbm.gz)

**Updates to Webmin 1.160**

File Manager

1.160

A restricted user who has access to a directory with root privileges can delete its parent directory.

[New module](updates/file-1.160-5.wbm.gz)

BIND DNS Server

1.160

When applying changes on a slave nameserver, the error message 'Failed to signal process 1234 : Bad file descriptor' is displayed.

[New module](updates/bind8-1.160-4.wbm.gz)

Usermin Configuration

1.160

Updates to a Usermin theme are continually re-downloaded, due to the installation of the update not being detected.

[New module](updates/usermin-1.160-2.wbm.gz)

Scheduled Cron Jobs

1.160

On systems that use Fcron, listing and creating Cron jobs does not work properly.

[New module](updates/cron-1.160-1.wbm.gz)

Cluster Webmin Servers

1.160

The field to select which servers to upgrade Webmin on does not appear, forcing the update to be attempted on all servers.

[New module](updates/cluster-webmin-1.160-1.wbm.gz)

PostgreSQL Database Server

1.160

On versions of PostgreSQL that don't support schemas, the error message 'Attribute schemaname not found' will appear when a database icon is clicked on.

[New module](updates/postgresql-1.160-1.wbm.gz)

MSC.Linux Theme

1.160

If a non-core module which does not make use of ui-lib.pl tries to display an error message, the error 'Undefined subroutine &main::ui\_print\_header' will appear instead.

[New module](updates/mscstyle3-1.160-1.wbt.gz)

File Manager

1.160

When deleting a directory, it does not actually get removed. When searching for files from / , no results are ever found.

[New module](updates/file-1.160-2.wbm.gz)

BIND DNS Server

1.160

If the module uses a command to re-start BIND, attempting to apply changes will always fail.

[New module](updates/bind8-1.160-1.wbm.gz)

**Updates to Webmin 1.150**

Linux Firewall

1.150

On Fedora systems, the firewall module can fail with an error about the /etc/init.d/iptables status command.

[New module](updates/firewall-1.150-8.wbm.gz)

Disk Quotas

1.150

On Fedora 2 and other 2.6 kernel-based distributions, using this module can cause the system to hang.

[New module](updates/quota-1.150-4.wbm.gz)

Filesystem Backup

1.150

Splitting a dump format backup across multiple files fails with the error message 'Tape changing is only supported when backups are run as background processes'.

[New module](updates/fsdump-1.150-1.wbm.gz)

**Updates to Webmin 1.140**

File Manager

1.140

On OSX, if the /File Transfer Folder directory exists, the module applet will fail to load.

[New module](updates/file-1.140-2.wbm.gz)

Network Configuration

1.140

On Slackware Linux 9.1, the module does not update the correct /etc/rc.d/rc.inet1.conf file when editing the primary network interface.

[New module](updates/net-1.140-1.wbm.gz)

Users and Groups

1.140

In the module's access control page, the option 'Can export batch file?' cannot be disabled.

[New module](updates/useradmin-1.140-1.wbm.gz)

Samba Windows File Sharing

1.140

When creating a new Samba user, an error message like 'could not create account to add new user -s' can appear if running Samba 3.0.

[New module](updates/samba-1.140-1.wbm.gz)

Apache Webserver

1.140

When the 'Show Apache directive names' option is enabled on the Module Config page, the forms showing Apache options do not appear properly.

[New module](updates/apache-1.140-1.wbm.gz)

Perl Modules

1.140

The installation of new Perl modules will fail, due to the path to Perl not being found correctly in the module.

[New module](updates/cpan-1.140-1.wbm.gz)

**Updates to Webmin 1.130**

PostgreSQL Database Server

1.130

When using versions of PostgreSQL above 7.4, non-existant tables starting with 'sql\_' can appear in a database. These also prevent database from being deleted.

[New module](updates/postgresql-1.130-8.wbm.gz)

Log File Rotation

1.130

When adding a new log file, any options specified for it will be incorrectly added to the global configuration as well.

[New module](updates/logrotate-1.130-6.wbm.gz)

Disk Quotas

1.130

When deleting a Unix group on a system that does not support group quotas, an error message about the 'group\_filesystems' subroutine can appear.

[New module](updates/quota-1.130-5.wbm.gz)

Postfix Configuration

1.130

The main page of the module can incorrectly display an error message about the Postfix configuration, or complain about the /dev/ptmx file not existing.

[New module](updates/postfix-1.130-3.wbm.gz)

DHCP Server

1.130

When deleting a DHCP lease, Webmin exits and must be manually re-started.

[New module](updates/dhcpd-1.130-3.wbm.gz)

Log File Rotation

1.130

Logrotate configuration entries for multiple files are not supported, and the 'Maximum size before rotating' field does not display the current setting properly.

[New module](updates/logrotate-1.130-3.wbm.gz)

Partitions on Local Disks

1.130

On systems with newer versions of the fdisk command, partition creation, modification or deleting can hang.

[New module](updates/fdisk-1.130-2.wbm.gz)

Apache Webserver

1.130

When searching for a virtual server, incorrect results may be displayed.

[New module](updates/apache-1.130-1.wbm.gz)

Shorewall Firewall

1.130

When editing a rule, the Firewall and Any options are not available in the zone menus.

[New module](updates/shorewall-1.130-1.wbm.gz)

Disk Quotas

1.130

On Linux filesystems with block sizes other than 1024, the conversion from blocks to kilobytes is incorrect - and the option to turn it off on the Module Config page does not work.

[New module](updates/quota-1.130-1.wbm.gz)

Protected Web Directories

1.130

When searching for existing protected directories, .htaccess files are found instead of the directories containing them.

[New module](updates/htaccess-htpasswd-1.130-1.wbm.gz)

Linux Firewall

1.130

On Trustix Linux 2.0, the module falsely reports an error getting the IPtables status.

[New module](updates/firewall-1.130-1.wbm.gz)

Log File Rotation

1.130

Post-rotation scripts that end with 'endrotate' are not parsed properly, potentially causing configuration file corruption.

[New module](updates/logrotate-1.130-1.wbm.gz)

**Updates to Webmin 1.120**

Linux Firewall

1.120

When editing a firewall rule, any existing comment it not shown properly.

[New module](updates/firewall-1.120-8.wbm.gz)

PostgreSQL Database Server

1.120

The error messsage 'SQL select version() failed : postgres" does not exist' appears when the module is opened, or when a database is created. Also fixes a problem with new versions of DBD::Pg, in which the module's main page appears empty.

[New module](updates/postgresql-1.120-6.wbm.gz)

Filesystem Backup

1.120

The error message 'Undefined subroutine main::strftime' can appear when making a backup when date substitutions in filenames is enabled.

[New module](updates/fsdump-1.120-4.wbm.gz)

Printer Administration

1.120

On systems using CUPS, the list of available print drivers does not appear properly.

[New module](updates/lpadmin-1.120-4.wbm.gz)

Sendmail Configuration

1.120

On some browsers, the 'Flush Mail Queue' button does not work, and shows a search results page instead.

[New module](updates/sendmail-1.120-4.wbm.gz)

Postfix Configuration

1.120

When deleting a large number of virtual\_map entries (such as when Virtualmin deletes a domain), the wrong ones will be removed. This update also fixes a problem with removing attachments from user mail files in Maildir format.

[New module](updates/postfix-1.120-3.wbm.gz)

Sendmail Configuration

1.120

When deleting a large number of virtuser entries (such as when Virtualmin deletes a domain), the wrong ones will be removed.

[New module](updates/sendmail-1.120-3.wbm.gz)

SpamAssassin Mail Filter

1.120

When the Apply Changes button is clicked, an error is always reported even though changes were properly applied.

[New module](updates/spam-1.120-3.wbm.gz)

SpamAssassin Mail Filter

1.120

When editing body tests, the test name appears as a number instead of the correct name.

[New module](updates/spam-1.120-1.wbm.gz)

ProFTPD Server

1.120

The module can incorrectly identify the ProFTPD server, even though the version number is something like 'ProFTPD 1.2.9'

[New module](updates/proftpd-1.120-1.wbm.gz)

**Updates to Webmin 1.110**

MySQL Database Server

1.110

When attempting to list the tables in a database or MySQL users, the error message 'Cant use an undefined value as a HASH reference' appears.

[New module](updates/mysql-1.110-5.wbm.gz)

Filesystem Backup

1.110

When the 'Run on selected schedule' option is chosen on the Edit Backup page, it is impossible to properly save the backup settings.

[New module](updates/fsdump-1.110-2.wbm.gz)

Webalizer Logfile Analysis

1.110

When the 'Run on selected schedule' option is chosen on the Edit Log File page, it is impossible to properly save the log.

[New module](updates/webalizer-1.110-2.wbm.gz)

DHCP Server

1.110

New client options are not always added to the DHCP server configuration file properly.

[New module](updates/dhcpd-1.110-1.wbm.gz)

LDAP Users and Groups

1.110

An error message about the lmPassword or sambaLMPassword attributes can occur when modifying a Samba LDAP user, and mail attributes like aliases are not updated when modifying a user.

[New module](updates/ldap-useradmin-1.110-3.wbm.gz)

Filesystem Backup

1.110

When the 'Remote restore command' is set to 'Default', backups cannot be restore due to an incorrect error message.

[New module](updates/fsdump-1.110-1.wbm.gz)

Printer Administration

1.110

On some systems using CUPS (such as Redhat 9), each printer driver is listed multiple times.

[New module](updates/lpadmin-1.110-1.wbm.gz)

Upload and Download

1.110

The buttons for selecting a user, group and directory in the upload form do not always work.

[New module](updates/updown-1.110-1.wbm.gz)

SSL Tunnels

1.110

Stunnel version 4 (found on Redhat 9 and others) is not supported, as it uses different command-line arguments.

[New module](updates/stunnel-1.110-1.wbm.gz)

**Updates to Webmin 1.100**

Upload and Download

1.100

When downloading multiple URLs and one fails, the error message is not shown and it is impossible to clear the download from the module's main page.

[New module](updates/updown-1.100-4.wbm.gz)

Printer Administration

1.100

Print jobs from a printer with a - in its name cannot be viewed or deleted on Solaris.

[New module](updates/lpadmin-1.100-1.wbm.gz)

QMail Configuration

1.100

When the mail queue is sorted by From or To address, the error message 'Undefined subroutine &main::address\_parts' is appears.

[New module](updates/qmailadmin-1.100-1.wbm.gz)

Apache Webserver

1.100

When applying changes, an error message like 'Cannot load /etc/httpd/modules/mod\_roaming.so into server' is displayed. This only seems to happen on Redhat versions 7.0 to 7.3. Unlike the last update to fix this problem, this one really works!

[New module](updates/apache-1.100-3.wbm.gz)

LDAP Users and Groups

1.100

When trying to create a group with no members, an error message about a missing attribute is incorrectly displayed.

[New module](updates/ldap-useradmin-1.100-1.wbm.gz)

File Manager

1.100

Users who are only supposed to be able to access a particular directory can still delete or change permissions on parent directories.

[New module](updates/file-1.100-2.wbm.gz)

MySQL Database Server

1.100

When updating multiple rows at once, an SQL error about 'bind variables' occurs.

[New module](updates/mysql-1.100-1.wbm.gz)

DHCP Server

1.100

Directives added to hosts, subnets, groups or shared networks with description comments are put at the wrong place in the config file.

[New module](updates/dhcpd-1.100-1.wbm.gz)

**Updates to Webmin 1.090**

MySQL Database Server

1.090

When editing a user in MySQL 4, it is impossible to set all of the permissions.

[New module](updates/mysql-1.090-6.wbm.gz)

Disk Quotas

1.090

Adds support for NetBSD.

[New module](updates/quota-1.090-2.wbm.gz)

Disk and Network Filesystems

1.090

Adds support for non-Intel BSD systems, and support for NetBSD on all architectures.

[New module](updates/mount-1.090-2.wbm.gz)

Network Configuration

1.090

On SuSE Linux 8.0 this module is missing several functions called by other modules, which can cause the PPTP VPN Client module to fail with the error 'Undefined subroutine net::list\_routes'

[New module](updates/net-1.090-1.wbm.gz)

QMail Configuration

1.090

When using some older versions of Perl, the error 'Not enough arguments for mkdir' can appear when reading users' email or viewing the mail queue.

[New module](updates/qmailadmin-1.090-1.wbm.gz)

Postfix Configuration

1.090

When using some older versions of Perl, the error 'Not enough arguments for mkdir' can appear when reading users' email or viewing the mail queue.

[New module](updates/postfix-1.090-1.wbm.gz)

Sendmail Configuration

1.090

When using some older versions of Perl, the error 'Not enough arguments for mkdir' can appear when reading users' email or viewing the mail queue.

[New module](updates/sendmail-1.090-1.wbm.gz)

**Updates to Webmin 1.080**

Network Configuration

1.080

On Debian Linux, virtual interfaces can be occasionally deleted when performing other operations.

[New module](updates/net-1.080-5.wbm.gz)

MySQL Database Server

1.080

On some early 4.x versions of MySQL, an error occurs when trying to edit user, database or other permissions.

[New module](updates/mysql-1.080-6.wbm.gz)

Apache Webserver

1.080

When adding a virtual server with the 'Listen on address' option selected, an un-needed Listen directive can be created that causes Apache to fail to start with an error message like 'could not bind to address'

[New module](updates/apache-1.080-1.wbm.gz)

Users and Groups

1.080

When editing a user that is locked, the 'No password required' option is incorrectly selected.

[New module](updates/useradmin-1.080-2.wbm.gz)

Users and Groups

1.080

New users do not get created in other modules, such as the Samba password list.

[New module](updates/useradmin-1.080-1.wbm.gz)

Software Packages

1.080

The module does not appear on FreeBSD 4.8 systems.

[New module](updates/software-1.080-1.wbm.gz)

Upload and Download

1.080

Scheduled or background downloads to a directory are not actually saved!

[New module](updates/updown-1.080-1.wbm.gz)

Network Configuration

1.080

On Redhat versions 8.0 and above, the default gateway can sometimes be set incorrectly when editing an interface.

[New module](updates/net-1.080-1.wbm.gz)

**Updates to Webmin 1.070**

Disk and Network Filesystems

1.070

On FreeBSD 5, all filesystems are shown as not currently mounted. This prevents quotas from being enabled on them as well.

[New module](updates/mount-1.070-6.wbm.gz)

Webmin Users

1.070

When creating a Webmin user who is a member of a group, access control setting for that group in the Webmin Users module are not set for the user.

[New module](updates/acl-1.070-5.wbm.gz)

Printer Administration

1.070

On Solaris, remote Unix printers with the same local and remote names are not displayed properly.

[New module](updates/lpadmin-1.070-4.wbm.gz)

Custom Commands

1.070

Commands to run before or after saving a file are not displayed properly if they contain single quotes.

[New module](updates/custom-1.070-4.wbm.gz)

Squid Proxy Server

1.070

When using the 'Webmin default' authentication program, incorrect permissions cause it not to run properly and thus all authentication attempts to fail. After installing this update, you will need to re-save the 'Authentication Programs' page to have the correct permissions set.

[New module](updates/squid-1.070-2.wbm.gz)

Fetchmail Mail Retrieval

1.070

Manually created entries in .fetchmailrc with quotes are not preserved properly.

[New module](updates/fetchmail-1.070-1.wbm.gz)

Sendmail Configuration

1.070

The status of all messages in the mail queue appears as 'Sending', even when this is not really the case.

[New module](updates/sendmail-1.070-1.wbm.gz)

Command Shell

1.070

When you enter a directory with the 'cd' command, the error 'No such file or directory' is incorrectly reported.

[New module](updates/shell-1.070-1.wbm.gz)

MSC.Linux Theme

1.070

The misuse of a global variable in this theme causes the Edit Field Permissions page of the MySQL module to not be completely displayed.

[New module](updates/mscstyle3-1.070-1.wbt.gz)

Bootup and Shutdown

1.070

When actions are sorted by start order and you select several to start or stop, the wrong ones are actually executed.

[New module](updates/init-1.070-1.wbm.gz)

**Updates to Webmin 1.060**

Printer Administration

1.060

On most operating systems the 'Print banner?' option cannot be set.

[New module](updates/lpadmin-1.060-3.wbm.gz)

PostgreSQL Database Server

1.060

Editing, creating or deleting users with special characters in their names is impossible.

[New module](updates/postgresql-1.060-2.wbm.gz)

BIND DNS Server

1.060

After adding a zone the browser returns to the module's main page instead of the zone details form as it used to in older releases.

[New module](updates/bind8-1.060-2.wbm.gz)

Running Processes

1.060

On OSX, clicking on a process from the list will always display the 'init' process.

[New module](updates/proc-1.060-1.wbm.gz)

Postfix Configuration

1.060

When displaying the mail queue, the error message 'Modification of non-creatable array value attempted' can appear.

[New module](updates/postfix-1.060-1.wbm.gz)

**Updates to Webmin 1.050**

Network Configuration

1.050

On Redhat 8, static routes created using Webmin are not actually used at boot time.

[New module](updates/net-1.050-8.wbm.gz)

Running Processes

1.050

On OSX, some modules report the error message 'Undefined subroutine proc::get\_new\_pty' due to a missing function in the Running Processes module.

[New module](updates/proc-1.050-7.wbm.gz)

MySQL Database Server

1.050

Enum or set fields with commas in their options cannot be edited - all the values are shown as 'enun' or 'set'.

[New module](updates/mysql-1.050-7.wbm.gz)

Filesystem Backup

1.050

Restoring a backup from a remote host does not work due to an incorrect -f parameter being passed to the restore command.

[New module](updates/fsdump-1.050-4.wbm.gz)

PostgreSQL Database Server

1.050

An error message like 'Database 'limit 25 offset 0' does not exist in the system catalog' can appear when viewing table data.

[New module](updates/postgresql-1.050-6.wbm.gz)

PostgreSQL Database Server

1.050

Rows containing the character $ in a field cannot be properly edited, as the $ is treated as the start of a variable name.

[New module](updates/postgresql-1.050-5.wbm.gz)

PostgreSQL Database Server

1.050

Editing a record with a % in a field can cause it's current value to not appear properly.

[New module](updates/postgresql-1.050-4.wbm.gz)

MySQL Database Server

1.050

Editing a record with a % in a field can cause it's current value to not appear properly.

[New module](updates/mysql-1.050-4.wbm.gz)

Custom Commands

1.050

When using 'Links to commands' mode, menu parameters do not appear

[New module](updates/custom-1.050-3.wbm.gz)

SSH Server

1.050

The AllowUsers and related directives are not set properly on versions of SSH and OpenSSH above 3.2. With OpenSSH commas are used when they should not be, and with SSH the reverse happens.

[New module](updates/sshd-1.050-3.wbm.gz)

BIND DNS Server

1.050

New logging categories in BIND 9 cannot be selected, and will be erased by the module if manually entered.

[New module](updates/bind8-1.050-3.wbm.gz)

Apache Webserver

1.050

Virtual servers whose document root directory contains a space cannot be created or edited.

[New module](updates/apache-1.050-3.wbm.gz)

Disk Quotas

1.050

Quotas cannot be edited on recent FreeBSD releases.

[New module](updates/quota-1.050-1.wbm.gz)

Custom Commands

1.050

Commands that have the 'Run in directory' option set cannot be edited properly.

[New module](updates/custom-1.050-1.wbm.gz)

**Updates to Webmin 1.040**

Partitions on Local Disks

1.040

When some new versions of the fdisk command are installed, the module does not display any disks or partitions.

[New module](updates/fdisk-1.040-1.wbm.gz)

System and Server Status

1.040

The Remote Ping monitor spawns ping processes that never die. This update implements the ping protocol in Perl, thus avoiding the problem.

[New module](updates/status-1.040-1.wbm.gz)

**Updates to Webmin 1.030**

Linux Firewall

1.030

It is impossible to create a rule that matches all ICMP traffic, as Webmin incorrectly adds \-m icmp to the rule which causes iptables to only match a single ICMP type.

[New module](updates/firewall-1.030-3.wbm.gz)

System and Server Status

1.030

Remote TCP service monitors always report that the service is up, even when it is actually down.

[New module](updates/status-1.030-1.wbm.gz)

SSH/Telnet Login

1.030

With some new versions of Perl, the error message Bad arg length for Socket::pack\_sockaddr\_in can appear if Webmin cannot lookup the IP address for your server.

[New module](updates/telnet-1.030-1.wbm.gz)

Squid Proxy Server

1.030

When editing delay pools, sometimes the delay\_pools directive is not added to the Squid configuration file properly. Also, when adding a delay pool directives can be saved incorrectly.

[New module](updates/squid-1.030-1.wbm.gz)

BIND DNS Server

1.030

On systems with a large number of zones, Webmin displays a search form on the module's main page for finding zones. However, it will not find zones that are in views.

[New module](updates/bind8-1.030-1.wbm.gz)

SSH Server

1.030

The UsePrivilegeSeparation directive is set for OpenSSH 3.1, which is should only be set for versions 3.2 and above.

[New module](updates/sshd-1.030-1.wbm.gz)

**Updates to Webmin 1.020**

Printer Administration

1.020

On FreeBSD and OpenBSD, printing a test page fails with the error Undefined subroutine main::quotameta called.

[New module](updates/lpadmin-1.020-6.wbm.gz)

Network Configuration

1.020

On FreeBSD systems, editing, creating or deleting a virtual address for a network interface causes any routes on the real interface to be lost.

[New module](updates/net-1.020-5.wbm.gz)

Usermin Configuration

1.020

On systems running Perl version 5.8, the list of modules on the Available Modules page is not displayed properly.

[New module](updates/usermin-1.020-4.wbm.gz)

Disk Quotas

1.020

On some Linux systems, the list of all quotas for a user or group is not displayed properly.

[New module](updates/quota-1.020-3.wbm.gz)

MySQL Database Server

1.020

Records containing \\ characters cannot be edited or created properly.

[New module](updates/mysql-1.020-2.wbm.gz)

Majordomo List Manager

1.020

When creating a mailing list with archiving enabled, an error can occur in the create\_list.cgi script.

[New module](updates/majordomo-1.020-2.wbm.gz)

File Manager

1.020

When the 'Always follow symlinks' ACL option is enabled, links to directories are not shown correctly.

[New module](updates/file-1.020-2.wbm.gz)

Usermin Configuration

1.020

When editing the configuration for Usermin modules, the existing settings are not shown. This can cause them to be set incorrectly.

[New module](updates/usermin-1.020-2.wbm.gz)

Printer Administration

1.020

Printing a test page does not work on many operating systems.

[New module](updates/lpadmin-1.020-2.wbm.gz)

MySQL Database Server

1.020

On older versions of mysql that do not support field or table name quoting, an SQL error is reported as soon as you try to view a table.

[New module](updates/mysql-1.020-1.wbm.gz)

Webmin Servers Index

1.020

When logging into another server running on port 80 or 443, redirects issued by the server can sometimes cause your browser to attempt to connect to it directly.

[New module](updates/servers-1.020-1.wbm.gz)

**Updates to Webmin 1.000**

MySQL Database Server

1.000

When editing or deleting records in a table found using a search, the wrong records may be changed or removed.

[New module](updates/mysql-1.000-6.wbm.gz)

Printer Administration

1.000

On operating systems like Solaris, HP/UX and FreeBSD that use Webmin's print drivers, it is impossible to properly set a driver for a printer.

[New module](updates/lpadmin-1.000-5.wbm.gz)

BIND DNS Server

1.000

When creating a reverse slave zone, the error message 'Failed to create /var/named' appears.

[New module](updates/bind8-1.000-4.wbm.gz)

Scheduled Commands

1.000

If multiple commands to execute are entered on separate lines, some may fail due to extra newline characters being added to the at job.

[New module](updates/at-1.000-4.wbm.gz)

Linux Firewall

1.000

Sometimes rules cannot be moved up or down in a chain.

[New module](updates/firewall-1.000-2.wbm.gz)

File Manager

1.000

If the .. directory is selected in the right-hand pane and a button on the top toolbar is clicked, a Java applet error is thrown which prevents the button from working and causes it to appear 'stuck' down.

[New module](updates/file-1.000-2.wbm.gz)

Linux Firewall

1.000

If a rule is created with the action set to 'Do nothing', attempting to apply the firewall configuration can produce the error message 'Unknown arg -j'

[New module](updates/firewall-1.000-1.wbm.gz)

Printer Administration

1.000

When printing a test page on FreeBSD or CUPS systems, the error 'Undefined subroutine main::quotemeta called' appears.

[New module](updates/lpadmin-1.000-1.wbm.gz)

MySQL Database Server

1.000

When editing fields that contain HTML escapes (such as &amp;), they are incorrectly converted to the actual character (such as &)

[New module](updates/mysql-1.000-1.wbm.gz)

Samba Windows File Sharing

1.000

Temporary files in /tmp/.webmin containing passwords are created but not deleted as they should be

[New module](updates/samba-1.000-1.wbm.gz)

Procmail Mail Filter

1.000

Complex procmail recipe files (such as the one used by SpamAssassin) cannot be parsed by Webmin, resulting in an 'Unknown line' error message. This update also turns off the diaplay of receipes in include files by default.

[New module](updates/procmail-1.000-1.wbm.gz)

File Manager

1.000

When the 'Always follow symlinks' access control option is enabled, the File Manager applet fails to load.

[New module](updates/file-1.000-1.wbm.gz)

ProFTP Server

1.000

The DirFakeUser and DirFakeGroup directives are not handled properly. Webmin does not allow you to edit the name of the user or group to fake as.

[New module](updates/proftpd-1.000-1.wbm.gz)

**Updates to Webmin 0.990**

Procmail Mail Filter

0.990

Procmail recipes that evaluate the output of a command cannot be created or edited properly.

[New module](updates/procmail-0.990-8.wbm.gz)

Users and Groups

0.990

When modifying and deleting multiple users from a batch file, it is possible for the wrong user to be modified or deleted. This bug also prevents the deletion of a 'personal' group when deleting a user.

[New module](updates/useradmin-0.990-7.wbm.gz)

Majordomo List Manager

0.990

The error message 'The $homedir variable in your majordomo config file is set to /usr/test/majordomo, which does not exist' can appear, even though that directory does not really need to exist.

[New module](updates/majordomo-0.990-6.wbm.gz)

PostgreSQL Database Server

0.990

When editing PostgreSQL users, the 'Can create databases?' and 'Can create users' options always show No, and cannot be set to Yes.

[New module](updates/postgresql-0.990-6.wbm.gz)

Printer Administration

0.990

If a webmin user is able to view print jobs, he can execute any command as root by including shell characters in the printer name in the URL.

[New module](updates/lpadmin-0.990-5.wbm.gz)

Webmin Users

0.990

When a user is created in the Webmin Users or Cluster Webmin Servers module with his theme set to 'Default Webmin theme', the error Can't locate ./webmin-lib.pl can appear when logging in.

[New module](updates/acl-0.990-2.wbm.gz)

Scheduled Cron Jobs

0.990

Multiple named days or months in crontab files are not supported, and cron jobs containing them are ignored.

[New module](updates/cron-0.990-2.wbm.gz)

PostgreSQL Database Server

0.990

The Granted Privileges page does not work on PostgreSQL versions 7.1 and above, and does not support new privileges like DELETE, REFERENCES and TRIGGER.

[New module](updates/postgresql-0.990-3.wbm.gz)

Apache Webserver

0.990

The Usermin Apache Options Files module always complains that Apache version and module information was not found, even though the Webmin Apache module has been set up correctly. Installing this Webmin module will fix the problem.

[New module](updates/apache-0.990-2.wbm.gz)

**Updates to Webmin 0.980**

Filesystem Backup

0.980

After creating a backup for a remote host, the error Can't use an undefined value as a HASH reference appears.

[New module](updates/fsdump-0.980-8.wbm.gz)

File Manager

0.980

Files whose size is greater than 2 Gb are sometimes not shown properly.

[New module](updates/file-0.980-6.wbm.gz)

CVS Server

0.980

CVS users who are not Unix users cannot be entered in the User Access Control page.

[New module](updates/pserver-0.980-6.wbm.gz)

Sendmail Configuration

0.980

On some operating systems, when user mail files are in their home directory the page that is supposed to list all mailboxes goes into an infinite loop and never appears.

[New module](updates/sendmail-0.980-6.wbm.gz)

PostgreSQL Database Server

0.980

Trying to view granted privileges or an inactive database can cause the error Can't call method 'prepare' on unblessed reference to appear.

[New module](updates/postgresql-0.980-6.wbm.gz)

Samba Windows File Sharing

0.980

On the Security and Access Control page, group names with spaces in them are not handled properly.

[New module](updates/samba-0.980-5.wbm.gz)

Printer Administration

0.980

Compressed CUPS PPD files and CUPS printer options are not supported.

[New module](updates/lpadmin-0.980-2.wbm.gz)

PostgreSQL Database Server

0.980

Trying to create a database can fail with the error CREATE DATABASE: may not be called in a transaction block

[New module](updates/postgresql-0.980-1.wbm.gz)

Perl Modules

0.980

On Redhat 7.3, installed Perl modules are not listed.

[New module](updates/cpan-0.980-1.wbm.gz)

Change Passwords

0.980

When using an external command to change passwords, no ACL checking is done to see if the current Webmin user is allowed to do the change.

[New module](updates/passwd-0.980-1.wbm.gz)

**Updates to Webmin 0.970**

Cluster Users and Groups

0.970

When creating a user on servers that do not NFS-share home directories, the error Failed to save user : couldn't create home directory : No such file or directory may appear.

[New module](updates/cluster-useradmin-0.970-7.wbm.gz)

Cluster Users and Groups

0.970

When creating a user with the 'Create user in other modules?' option turned on, password information is not passed to the remote servers, causing the new user's Samba password not to be set properly.

[New module](updates/cluster-useradmin-0.970-6.wbm.gz)

BIND DNS Server

0.970

When using zones within views, the access control page for the module does not show any zones to limit a user to editing.

[New module](updates/bind8-0.970-5.wbm.gz)

System and Server Status

0.970

The error message Undefined subroutine &main::get\_\_status sometimes appears in email from Cron when scheduled monitoring is enabled. This fix really works this time!

[New module](updates/status-0.970-4.wbm.gz)

Perl Modules

0.970

On Redhat Linux 7.3, the list of installed Perl modules is not shown due to Redhat's perl install putting them in the file /perllocal.pod.

[New module](updates/cpan-0.970-3.wbm.gz)

Apache Webserver

0.970

When editing the IndexOrderDefault directive in non-english language mode, options are added to the config file in the foreign language.

[New module](updates/apache-0.970-3.wbm.gz)

Webmin Users

0.970

When setting a Webmin user to 'Unix authentication' mode, an error message about the Authen::PAM perl module being missing can appear, even though it is no longer necessary.

[New module](updates/acl-0.970-3.wbm.gz)

BIND DNS Server

0.970

When trying to move a zone to another view, the error Not an ARRAY reference appears.

[New module](updates/bind8-0.970-2.wbm.gz)

File Manager

0.970

With some older versions of the lsattr command, EXT file attributes are shown incorrectly.

[New module](updates/file-0.970-1.wbm.gz)

**Updates to Webmin 0.960**

WU-FTP Server

0.966

WU-FTPd version 2.6.2-5 is not recognized by the module, resulting in an error like 'The FTP server /usr/sbin/in.ftpd does not appear to be WU-FTPd'.

[New module](updates/wuftpd-0.966-7.wbm.gz)

MySQL Database Server

0.966

With synchronization between Unix and MySQL users enabled, creating a with a pre-encrypted password generates an SQL error. Also, renaming or deleting a user does not update database, table or field permissions related to that user.

[New module](updates/mysql-0.966-7.wbm.gz)

File Manager

0.960

In IE, when attempting to download a file by shift-double-clicking the file is displayed instead. This update adds a new Save button to the File Manager that can be used instead, and is more obvious.

[New module](updates/file-0.960-5.wbm.gz)

SSL Tunnels

0.960

When SSL tunnels are started from Xinetd, the Apply Changes button does not work.

[New module](updates/stunnel-0.960-5.wbm.gz)

PostgreSQL Database Server

0.960

On some systems, when trying to enter the PostgreSQL module a blank page appears, or the browser reports 'Document contains no data'.

[New module](updates/postgresql-0.960-4.wbm.gz)

Disk and Network Filesystems

0.960

On OpenBSD 3.0, no filesystems are shown as currently mounted. This also causes problems in the Disk Quotas module.

[New module](updates/mount-0.960-6.wbm.gz)

Network Configuration

0.960

On Debian Linux 3.0 systems, network interfaces cannot be set to activate at boot time properly.

[New module](updates/net-0.960-4.wbm.gz)

Apache Webserver

0.960

The Apache module does not recognize HP's version of Apache 2.0.

[New module](updates/apache-0.960-3.wbm.gz)

System and Server Status

0.960

When run from schedule, the status monitor will sometimes fail with the error Undefined subroutine main::get\_\_status.

[New module](updates/status-0.960-3.wbm.gz)

Disk and Network Filesystems

0.960

An error in this module causes filesystems that can support quotas not to be displayed on FreeBSD. This same bug also caused problems with other modules that display a list of filesystems, such as Running Processes and System and Server Status.

[New module](updates/mount-0.960-4.wbm.gz)

ProFTP Server

0.960

The AllowGroup, DenyGroup, AllowUser and DenyUser directives are not created correctly for multiple users and groups.

[New module](updates/proftpd-0.960-3.wbm.gz)

MON Service Monitor

0.960

The period in mon.cf directive is not supported, and causes an error if it is used.

[New module](updates/mon-0.960-1.wbm.gz)

Disk and Network Filesystems

0.960

On MSC Linux, LVM logical volumes are not available to select from when mounting.

[New module](updates/mount-0.960-1.wbm.gz)

Webmin Users

0.960

When editing an existing group, modules that the group currently has are not selected.

[New module](updates/acl-0.960-1.wbm.gz)

**Updates to Webmin 0.950**

Samba Windows File Sharing

0.950

Usernames with spaces in them are not handled properly when editing the allowed and denied user lists for share access control.

[New module](updates/samba-0.950-6.wbm.gz)

MySQL Database Server

0.950

On some system, the mysql module always reports that the version you are running is not supported even though it is. This is due to a problem with LD\_LIBRARY\_PATH that this update works around.

[New module](updates/mysql-0.950-5.wbm.gz)

Postfix Configuration

0.950

Some pages (such as editing aliases and editing mappings) do not appear completely when using the new Webmin theme.

[New module](updates/postfix-0.950-1.wbm.gz)

Cluster Software Packages

0.950

Installing or deleting a package or refreshing the package list fails.

[New module](updates/cluster-software-0.950-1.wbm.gz)

Sendmail Configuration

0.950

If a non-root user sends an email with a server-side attachment, the mail is sent but no result page is displayed saying that it was send successfully.

[New module](updates/sendmail-0.950-1.wbm.gz)

System and Server Status

0.950

If your have a ping status monitor, the main page of the module or the monitor page does not display completely.

[New module](updates/status-0.950-1.wbm.gz)

**Updates to Webmin 0.94**

Sendmail Configuration

0.94

When removing the attachments from an email message, the body appears to be removed as well due to an error in the resulting MIME headers.

[New module](updates/sendmail-0.94-1.wbm.gz)

Network Configuration

0.94

Module does not appear on Debian Linux 3.0 systems, when it really should.

[New module](updates/net-0.94-1.wbm.gz)

Software Packages

0.94

Module does not appear on Debian Linux 3.0 systems, when it really should.

[New module](updates/software-0.94-1.wbm.gz)

**Updates to Webmin 0.93**

Disk Quotas

0.93

On Linux systems in which english is not the default language, the Disk Quotas module does not allow quotas to be enabled, and may disable quotas when the main page of the module is viewed.

[New module](updates/quota-0.93-3.wbm.gz)

BIND DNS Server

0.93

Paths in named.conf with // in them are not parsed properly, causing some zones to be un-editable.

[New module](updates/bind8-0.93-1.wbm.gz)

File Manager

0.93

On FreeBSD, the file manager applet fails to start due to a NullPointerException.

[New module](updates/file-0.93-2.wbm.gz)

Custom Commands

0.93

When the module is set to 'Links to commands' mode, the HTML description of a command is shown with the tags visible.

[New module](updates/custom-0.93-1.wbm.gz)

File Manager

0.93

On some browsers, when saving a file after editing all the newline characters get stripped from the file!

[New module](updates/file-0.93-1.wbm.gz)

Sendmail Configuration

0.93

When reading mail, attachments that themselves contain additional attachments are not being hidden.

[New module](updates/sendmail-0.93-1.wbm.gz)

Samba Windows File Sharing

0.93

Converting Unix users to Samba users does not work properly, due to a perl error.

[New module](updates/samba-0.93-1.wbm.gz)

**Updates to Webmin 0.92**

BIND DNS Server

0.92

Options on slave and stub zones can be edited, even though the user has the 'Can edit zone parameters?' ACL option set to No.

[New module](updates/bind8-0.92-2.wbm.gz)

Internet Services and Protocols

0.92

Saving a service with a number in its name displays an error message.

[New module](updates/inetd-0.92-1.wbm.gz)

Jabber IM Server

0.92

The General Options page of the Jabber module displays a Perl error when you go into it.

[New module](updates/jabber-0.92-2.wbm.gz)

ProFTP Server

0.92

The 'Client connection message' option creates an incorrect config file entry if you enter a message with spaces in it.

[New module](updates/proftpd-0.92-1.wbm.gz)

MSC.Linux Theme

0.92

Sometimes when you are inside a module, a cateogry icon (like Servers) cannot be clicked on.

[New module](updates/mscstyle3-0.92-2.wbt.gz)

MySQL Database Server

0.92

When using the MySQL module, the annoying (but harmless) error message 'Database handle destroyed without explicit disconnect' can appear on the console.

[New module](updates/mysql-0.92-1.wbm.gz)

PostgreSQL Database Server

0.92

The main page of this module may appear empty if webmin has been started at boot time on some operating systems.

[New module](updates/postgresql-0.92-1.wbm.gz)

BIND DNS Server

0.92

Editing of stub zones introduced a syntax error into the named.conf file in the masters section f the zone.

[New module](updates/bind8-0.92-1.wbm.gz)

Users and Groups

0.92

Attempting to add users using the batch form produces the error 'You cannot use the batch file form'

[New module](updates/useradmin-0.92-1.wbm.gz)

Custom Commands

0.92

Custom command options like 'User users environment' and 'Ordering on main page' are not being saved properly

[New module](updates/custom-0.92-1.wbm.gz)

Jabber IM Server

0.92

When missing the XML::Parser or XML::Generator perl modules, Webmin displays a cryptic perl error instead of telling the user which modules are needed

[New module](updates/jabber-0.92-1.wbm.gz)

**Updates to Webmin 0.91**

System Documentation

0.91

Any Webmin user with access to this module can execute commands as root using the view\_man.cgi script.

[New module](updates/man-0.91-2.wbm.gz)

File Manager

0.91

When Webmin is running in SSL mode, editing and saving files in the file manager does not work properly in Netscape 6.

[New module](updates/file-0.91-1.wbm.gz)

Sendmail Configuration

0.91

Users with the ability to view the mail queue can view any file on the system, including /etc/shadow .

[New module](updates/sendmail-0.91-2.wbm.gz)

BIND DNS Server

0.91

Lines in named.conf with // style comments are not handled properly, possibly causing webmin to missing some zones.

[New module](updates/bind8-0.91-1.wbm.gz)

Disk Quotas

0.91

The list of user quotas on a filesystem is not shown correctly under Linux if a user has a grace time set.

[New module](updates/quota-0.91-1.wbm.gz)

System Documentation

0.91

Searching for MAN pages doesn't return any results on some systems.

[New module](updates/man-0.91-1.wbm.gz)

Sendmail Configuration

0.91

If mail is selected from a mailbox and the Delete button clicked, the Compose Email screen appears instead of the mail being deleted.

[New module](updates/sendmail-0.91-1.wbm.gz)

**Updates to Webmin 0.90**

Webmin Users

0.90

If a webmin user is granted the rights to edit users who are members of some group, he can edit the members of any group.

[New module](updates/acl-0.90-1.wbm.gz)

BIND 4 DNS Server

0.90

Records cannot be edited or created due to the Address input not appearing.

[New module](updates/dnsadmin-0.90-1.wbm.gz)

ProFTP Server

0.90

Network addresses like 1.2.3.0/24 are not accepted in access control.

[New module](updates/proftpd-0.90-1.wbm.gz)

Squid Proxy Server

0.90

Saving a new squid user causes a perl error to be displayed

[New module](updates/squid-0.90-1.wbm.gz)

Disk Quotas

0.90

Limiting access to users by UID does not work properly

[New module](updates/quota-0.90-1.wbm.gz)

Webmin Servers Index

0.90

When editing a server in a group, the group field has both the Existing group and New group options selected

[New module](updates/servers-0.90-1.wbm.gz)

**Updates to Webmin 0.89**

Users and Groups

0.89

Office, home and work phone fields are not validated to prevent illegal characters like :

[New module](updates/useradmin-0.89-1.wbm.gz)

**Updates to Webmin 0.88**

Custom Commands

0.88

Commands with the _Use user's environment?_ option set allow a local user to execute commands as root if the right file is modified when the command is executed.

[New module](updates/custom-0.88-1.wbm.gz)

Partitions on Local Disks

0.88

Partitions are not displayed properly on Redhat 7.1 systems, due to a bug in the Running Processes module.

[New module](updates/proc-0.88-1.wbm.gz)

Samba Windows File Sharing

0.88

Existing user mapping files are not displayed and edited properly.

[New module](updates/samba-0.88-1.wbm.gz)

System and Server Status

0.88

The load average monitor does not work on FreeBSD, and the averages are shown as 5, 10 and 15 minutes instead of 1, 5 and 15 minutes.

[New module](updates/status-0.88-1.wbm.gz)

Users and Groups

0.88

New AIX-specific options are not displayed properly.

[New module](updates/useradmin-0.88-1.wbm.gz)

ProFTPD Server

0.88

Viewing network options for a virtual server can fail with a perl execution error.

[New module](updates/proftpd-0.88-1.wbm.gz)

Majordomo List Manager

0.88

When deleting a list with a . in it's name, aliases and files for other lists may be deleted as well.

[New module](updates/majordomo-0.88-1.wbm.gz)

**Updates to Webmin 0.87**

Webmin Users

0.87

When changing the ACL on a module for a group, the changes do not get applied to members of the group in some circumstances.

[New module](updates/acl-0.87-1.wbm.gz)

BIND DNS Server

0.87

When selecting which zones a user can edit, the selection is not saved properly.

[New module](updates/bind8-0.87-2.wbm.gz)

Caldera Theme

0.87

When in normal authentication mode, the Switch User link is not visible anywhere when using this theme.

[updated theme](updates/caldera-0.87-1.wbt.gz)

BIND DNS Server

0.87

Relative PID file paths in the named.conf file are not handled properly.  
Note - this fix also adds a feature for specifying which include file new zones are added to.

[New module](updates/bind8-0.87-1.wbm.gz)

Network Configuration

0.87

The module does not appear correctly on FreeBSD 4.1, 4.2, 4.3 and 4.4 systems.

[New module](updates/net-0.87-1.wbm.gz)

Software Packages

0.87

The module does not appear correctly on FreeBSD 4.1, 4.2, 4.3 and 4.4 systems.

[New module](updates/software-0.87-1.wbm.gz)

**Updates to Webmin 0.86**

Users and Groups

0.86

When the /etc/skel directory contains a symlink, it does not get copied correctly to the new user's home directory.

[New module](updates/useradmin-0.86-3.wbm.gz)

File Manager

0.86

A user who is granted only access to files in his home directory can actually see all files on the server. Also, any user can configure file sharing, not just users with root file permissions.

[New module](updates/file-0.86-2.wbm.gz)

Printer Administration

0.86

On Redhat Linux 7.1, new printers with drivers are not created properly - the driver always ends up as /usr/share/printconf/mf\_wrapper.

[New module](updates/lpadmin-0.86-1.wbm.gz)

Users and Groups

0.86

On HPUX, the Edit User and Create User pages come up blank due to a bug in Perl with the endpwent() function.

[New module](updates/useradmin-0.86-2.wbm.gz)

File Manager

0.86

In German language mode, some of the buttons at the top of the file manager disappear due to their labels being too large.

[New module](updates/file-0.86-1.wbm.gz)

Scheduled Cron Jobs

0.86

When running a cron job manually, some programs (like PHP scripts) don't work the same way that they would if they were run by cron itself on schedule. This is due to environment variables being set by Webmin that would not be set by cron.  
This update also fixes problems with the cron module on AIX systems.

[New module](updates/cron-0.86-1.wbm.gz)

Users and Groups

0.86

When selecting users in the Create Group page, the error Can't modify reference constructor in local is displayed.

[New module](updates/useradmin-0.86-1.wbm.gz)

**Updates to Webmin 0.85**

Webmin Webserver (miniserv.pl)

0.85

Servers started by Webmin (like Apache) get passed environment variables containing password information. This may then become available to untrusted users, for example if the Apache webserver runs user CGI programs.

Download the updated [miniserv.pl](updates/miniserv.pl) and replace the one in your webmin directory. You may need to edit the first line to use the correct perl path. Then run /etc/webmin/stop ; /etc/webmin/start as root.

System Documentation

0.85

A search that returns only one match will display a Location: line instead of going directly to the result.

[New module](updates/man-0.85-1.wbm.gz)

Command Shell

0.85

On Solaris, the path is not set correctly for commands entered, causing those outside /usr/sbin:/usr/sbin not to be found.

[New module](updates/shell-0.85-1.wbm.gz)

MySQL Database Server

0.85

Clicking on a user, host, database, table or column privilege to edit it brings up the wrong record.

[New module](updates/mysql-0.85-1.wbm.gz)

PostgreSQL Database Server

0.85

The module reports the error The PostgreSQL database on your system is version , but Webmin only supports versions 6.5 and above. This is often caused by the shared libraries needed by Postgres not being in Webmin's shared library path.

[New module](updates/postgresql-0.85-1.wbm.gz)

Apache Webserver

0.85

If Webmin is used in non-english language mode, <Directory> sections created using this module may be wrongly written out as something like <Directorio>!  
Note - this update includes the duplicate virtual servers update below.

[New module](updates/apache-0.85-2.wbm.gz)

Squid Proxy Server

0.85

The cache\_dir directive is not properly supported in squid 2.4.

[New module](updates/squid-0.85-1.wbm.gz)

Users and Groups

0.85

Passwords for users created or modified from a batch file are not set correctly.

[New module](updates/useradmin-0.85-1.wbm.gz)

BIND DNS Server

0.85

Reverse address records are not updated properly if the reverse zone has a . at the end of its name in named.conf . Also, logging of some record additions is not done properly.

[New module](updates/bind8-0.85-1.wbm.gz)

Disk Quotas

0.85

On systems using the latest Linux quotas package (typically those with the 2.4 kernel), quotas cannot be edited or enabled for the first time.

[New module](updates/quota-0.85-1.wbm.gz)

Network Configuration

0.85

On Debian Linux 2.2, the auto and mapping network config file entries cause an error message to be displayed by Webmin.  
On SuSE Linux, changes to the DNS client settings are not properly saved and thus do not take effect.

[New module](updates/net-0.85-1.wbm.gz)

Apache Webserver

0.85

Two virtual servers can be created with the same name and port. On systems that restrict which Webmin users can edit which virtual servers, this could be used to get around the restriction.

[New module](updates/apache-0.85-1.wbm.gz)

Network Configuration

0.85

Virtual network interfaces could not be setup properly on Solaris 8.

[New module](updates/net-0.85-1.wbm.gz)

[Updates data file](updates/updates.txt)