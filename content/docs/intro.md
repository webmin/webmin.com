---
title: "Introduction"
date: 2023-10-01
weight: 15
---

What **Webmin** is, why it was written and what you can expect from this documentation.

### What is Webmin?
Webmin is a program that simplifies the process of managing a Linux or Unix system. Normally you need to manually edit configuration files and run commands to create accounts, set up a web server and manage email forwarding. Webmin lets you perform these tasks and many more through an easy to use web interface and automatically updates all required configuration files for you. This makes the job of administering your system much easier.

[![](/images/docs/screenshots/modules/light/intro-dashboard.png "Dashboard Screenshot")](/images/docs/screenshots/modules/light/intro-dashboard.png)

Some of the things you can do with Webmin are:
 - Create, edit and delete Unix [accounts](/docs/modules/users-and-groups) on your system.
 - [Export Files and Directories](/docs/modules/nfs-exports) to other systems with the NFS protocol.
 - Set up [Disk Quotas](/docs/modules/disk-quotas) to control the amount of space available to users for their files.
 - Install, view and remove [Software Packages](/docs/modules/software-packages) in RPM and other formats.
 - Change your system's IP address, [DNS Server](/docs/modules/bind-dns-server) settings and routing configuration. 
 - Set up a [Linux Firewall](/docs/modules/firewalld) to protect your computer or give hosts on an internal LAN access to the Internet.
 - Create and configure virtual web servers for the [Apache Webserver](/docs/modules/apache-webserver).
 - Manage databases, tables and fields in a [MySQL](/docs/modules/mysql-database-server) or [PostgreSQL](/docs/modules/postgresql-database-server) database Servers.
 - Share files with Windows systems by configuring [Samba Windows File Sharing](/docs/modules/samba-windows-file-sharing).

These are just a few of the available functions. Webmin provides a simple web interface that lets you configure almost all common services and popular servers on Unix systems. It protects you from the syntax errors and other mistakes often made when editing configuration files directly and warns you before potentially dangerous actions.

Because Webmin is accessed though a web browser, you can log in from any system connected to your network. There is no difference between running it locally and running it remotely, and it is much easier to use over the network than other graphical configuration programs.

Webmin has a modular design. Each function is contained in a module that generally can be installed or removed independently from the rest of the program. Each module manages some service or server, such as Unix users, the [Apache Webserver](/docs/modules/apache-webserver) or [Software Packages](/docs/modules/software-packages).

If you have manually configured your system, Webmin will recognize all existing settings. Webmin reads the standard configuration files on your system and updates them directly rather than use its own database. This means you can freely mix Webmin, manual configuration and other programs or scripts that work in the same way.

While Webmin was developed for Linux users, Webmin can be used with many other flavors of Unix, such as Solaris, FreeBSD and HP/UX. Webmin understands the differences between all these operating systems and can adjust its user interface and behavior to fit your OS. This means it often can hide the underlying differences between Unix variants and present a similar or identical interface no matter which OS you use.

Webmin is a configuration tool, and so you must have programs installed for it to configure. For example, the Apache module requires that the actual Apache webserver be installed. Fortunately, all services and servers that Apache manages are either included with most standard Linux distributions or can be downloaded and installed freely.

### Who should use Webmin?
Webmin was written for people with some Linux experience who might be unfamiliar with the intricacies of system administration. Even though it makes the process of creating Unix users or managing the [Squid Proxy Server](/docs/modules/squid-proxy-server) easy, you first must have some idea of what a Unix account is and what Squid does. The average user probably runs Webmin on a Linux system at home or on a company network.

The program assumes you are familiar with basic [TCP/IP](/docs/modules/network-configuration) networking concepts, such as IP addresses, DNS servers and hostnames. It also assumes the user understands the layout of the [Unix filesystem](/docs/modules/file-manager), what users and groups are and where user files are located. If you use Webmin to manage some server like Apache or Sendmail, you should have some idea of what they can do and what kind of configuration you want.

Webmin runs with full root privileges, which means it can edit any file and run any command on your system. This means it is quite possible to delete all files on your system or make it un-bootable, if you make a mistake when using the program, especially if you configure something you don't understand. Even though Webmin usually warns you before performing some potentially dangerous action, plenty of scope for causing damage remains.

Even though it can be used on a system with no Internet connection, Webmin benefits if your system is on a network. It can download new software packages, Perl modules or even new versions of Webmin for you, if connected.

Because Webmin runs with root privileges, you must be able to log in to your system as root to install and start it. This means Webmin cannot be used on a system on which you have only a normal account, such as a virtual web server that is shared with other people. You might be able to get your system administrator to install and configure it for you, though.

If you are an experienced system administrator, Webmin may not seem to be a good tool for you because using it generally is slower than directly editing configuration files and running commands. However, even experts can benefit from Webmin's automatic syntax checking and actions it performs automatically. You also can give different people different levels of access to Webmin so an experienced administrator safely can delegate responsibility to less-skilled subordinates. For example, you might want someone to be able to manage the BIND DNS server but nothing else, while giving yourself full access to the system and all of Webmin's functions.

### How and why was it developed?
Webmin was written by Jamie Cameron, author of _Managing Linux Systems with Webmin: System Administration and Module Development_. He released the first version of Webmin (version 0.1) in October 1997. Since then, its user interface, features and appearance have changed dramatically, and almost all of the code has been re-written. However, the basic concept of a web-based administration tool has been the same since that very first release.

Jamie started writing Webmin when he was the administrator for a system running a [DNS Server](/docs/modules/bind-dns-server) and had to spend a lot of time updating the server's configuration files to add new host records requested by users. Giving them the _root_ password was not an option because they did not have the experience to properly edit the zone files and re-start the server. The solution was a simple web interface that would display existing DNS records and allow them to be edited, created and deleted. Users were given access to this interface to make the changes they needed safely.

DNS management was just the start, though. Once Jamie saw the possibilities for simplifying the configuration of a Unix system though a web interface, he started to add other features to the program and put them into modules. Next came modules for Unix users, Samba, mounting filesystems, NFS and Cron jobs. He thought up the name Webmin, made it available for anyone to download and announced it on a few mailing lists. The initial feedback was good, so he kept writing.

Over the years, the program went through multiple user interfaces and dozens of modules, added support for non-English languages, advanced access control, supported a lot more operating systems and incorporated many other features. The Linux distribution companies Caldera and MSC.Linux have supported the project financially, and many users have made contributions of code patches, modules, translations and suggestions. Besides the standard modules, more than 100 others have been written by other users and can be added to Webmin on your system.

### What is this wiki about?
This wiki includes information that explains how to install Webmin, how to use almost all of its modules and how to write your own. For example:

- [Webmin Modules](/docs/modules/backup-configuration-files)

   These pages cover the modules Webmin uses to configure itself.
- [System Modules](/docs/modules/bootup-and-shutdown)

   These pages cover modules that configure system services, such as filesystems, users, groups and printing.
- [Server Modules](/docs/modules/apache-webserver)

   These pages cover the configuration of servers that run on a Unix system, such as Apache, Sendmail and Squid.
- [Tools Modules](/docs/modules/command-shell)

   These pages cover modules that perform some useful function, such as running commands, listing and editing files.
- [Networking](/docs/modules/network-configuration)

   These pages cover modules that configure networking, such as IP addresses, routing and DNS.
- [Hardware](/docs/modules/linux-raid)

   These pages cover modules that configure hardware, such as disks, printers and RAID arrays.
- [Cluster](/docs/modules/cluster-change-passwords)

   These pages cover Webmin modules that can be used to configure multiple systems from a single master server.
- [Developer's Guide](/docs/module-development)

   These pages explain how to write your own modules and themes.

### Conventions
The following special text styles are used in this wiki: 

- **Bold**

  Used for text that appears in Webmin itself, such as error messages, icon names, buttons and field labels. 

- `Fixed width` 

  This style is used for the names of shell commands, Unix users, directories and files. Also used for text in configuration files, program code and API functions.

- _Italics_ 

  Used to indicate example input entered by the user into Webmin or example commands, directories and function parameters. 

### Thanks to
The book "Managing Linux Systems with Webmin: System Administration and Module Development", which serves as the foundation of this wiki, could not have been written without the support of Jill Harry and the others at Prentice Hall; Bob Kern for suggesting the idea; Jamie's wife, Foong Ching, for her constant support; and all the members of the Webmin mailing list for their ideas and suggestions over the years.
