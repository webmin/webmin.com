---
title: "Cluster Software Packages"
date: 2023-09-30
weight: 905
---

### About
This page introduces Webmin's clustering system, and explains how to use the module for installing software packages on multiple systems concurrently. 

### Intro
Webmin has several modules that make it easy to perform tasks on several machines at once, known as a cluster. A large organization might have tens or hundreds of servers that need some software package installed, Unix user created or Webmin module added. The cluster modules make this easy. Each corresponds to one of the single-machine modules, but allows the same tasks to be performed on more than one system at a time. 

For a system to be part of a cluster it must have Webmin installed, even if you never actually login to it directly. One of the cluster modules on a single host contacts all of the others using Webmin's RPC (Remote Procedure Call) protocol and instructs them to carry out certain tasks. This master host might be part of the cluster and thus instruct itself to perform the same tasks, or it may be totally independent. 

On the master system the [Webmin Servers Index](/docs/modules/webmin-servers-index) module must first be used to register all of the other managed servers. For each managed server the root or admin username and password must be specified, so that the master knows how to login. Once this is done, each of the cluster modules can be set up to manage some or all of the registered systems. 

Because Webmin's RPC mechanism allows any file to be accessed or command run on a server, by default only the users _root_ and _admin_ on a managed system are allowed to receive RPC calls. This means that entering some other user in the Webmin Servers Index module for a managed server will not work, unless that user has been specifically configured to be able to accept RPC logins. The **Editing module access control** section of [Webmin Users](/docs/modules/webmin-users) explains how to set this up. 

The RPC protocol that the master system uses to control managed hosts is unique to Webmin, and is not based on any other similar protocol such as Sun's RPC, SOAP or RMI. It has two different modes - the old mode only in which only HTTP requests are used to send commands, and a newer mode in which a permanent TCP connection is used. The latter method is faster and more reliable, but may fail if a firewall is blocking traffic between the master and managed hosts. It uses ports 10001 and above by default, whereas the old protocol just uses the port Webmin accepts normal connections on (usually 10000). [Webmin Servers Index](/docs/modules/webmin-servers-index) explains how to select a mode for a server in more detail.

### The module
This module allows you to install, view and delete packages on multiple systems at once. If you need to roll out some program to a large number of systems, this module can be used to perform the installation with a single action. The alternative is to install manually on each host, or to use NFS to share program files from a single server to multiple clients. 

Before reading on you should have a complete understanding of how the regular Software Packages module works, what packages are and what they can do. The [Software Packages](/docs/modules/software-packages) page covers all of these in detail, so read it now. The user interfaces of the two modules are very similar, and the instructions in this chapter assume that you are familiar with the regular module. 

One limitation of the Cluster Software Packages module is that the master system and all managed systems must use the same package system, such as RPM, DPKG or the Solaris package format. This makes sense when you think about it, because there is no way that a single package file of some type can be installed on multiple systems if some of them do not support that packaging format. If the hosts on your network use different package formats you will need to set this module up once for each format is use, on different hosts. 

Only on operating systems that have a supported package system will the module appear. At the time of writing only RPM, Debian's package format, the Gentoo package format and the Solaris and SCO OpenServer package systems are supported. Even though a few more formats are supported by the Software Packages module, they are not currently usable with this one. 

The module itself can be found along with the other cluster-related modules in Webmin's Cluster category. At the top is a list of icons representing managed servers registered in the module, and below them are forms for searching for and installing packages. The latter forms will only appear if some systems have been registered though, which will not be the case the first time you use the module. 

To speed up searching the module keeps a list of all the packages installed on the systems that it manages. This means that any packages installed or removed directly on one of those systems without using this module will not be detected until the lists are refreshed. This may cause the module to incorrectly report that a package exists when it really does not, or vice versa. To avoid this problem, always use the Cluster Software Packages module to add or delete packages from managed hosts. Or use the **Refresh package lists** button (explained later) to update the lists after making direct changes. 

### Registering a server
Before this module can be used to manage another system's software, that system must be added to its list of servers. To do this, follow these steps:
- Use the [Webmin Servers Index](/docs/modules/webmin-servers-index) module to add the remote system, and make sure you provide a username and password. This does not have to be done if you want to manage the master server though. 
- In this module select the system from the menu next to the **Add server** button and then click it. The menu will usually include the special entry **this server**, which is the master system.  It will never include any servers that have already been added though. Alternately you can select an entire group of servers from the menu next to **Add servers in group**. Groups can be defined in the [Webmin Servers Index](/docs/modules/webmin-servers-index) module as well. 
- A page showing all of the hosts added and the number of packages on each will be displayed. If a host cannot be contacted or the RPC login fails, an error message explaining what went wrong for that host will appear instead. 
- Return to the module's main page, on which a new icon for each host should now be listed. 

The most common cause of problems when adding a server is an incorrect username or password entered for that host in the Webmin Servers Index module. You must provide the _root_ or _admin_ login, not that of some other user. Adding can also fail if a firewall is blocking connections between the two hosts, or if the master Webmin server is configured to use an HTTP proxy that is disallowing the RPC HTTP request.

### Installing a package
Packages can be installed on multiple hosts using this module in a similar way to how they are installed on a single host in the Software Packages module. You should read the **Installing a new package** section of [Software Packages](/docs/modules/software-packages) first, which explains the differences between the various package systems when it comes to installation. 

The steps to follow are:
- On the main page, scroll down to the **Install a New Package** form. 
- If the package file is already on the master system, select **From local file** and enter its full path into the adjacent text field. If some of the managed systems use NFS to share files with the master and if the package file exists in the same directory, this option is the most efficient as it avoids the need to transfer the file to each managed host using RPC. Instead, the remote Webmin server will just read it directly from the NFS-mounted filesystem. 
- If the package file is on the computer your browser is running on, choose **From upload files** and click the **Browse** button to select it. 
- If the file is on some web or FTP site, select **From ftp or http URL** and enter the full URL into the text field. Normally the master server will download the file and then transfer it with RPC to each managed host. If the **Each server should re-download  package** box is checked, each host will perform the download instead, which is more efficient if the URL refers to a web server on your local network. 
- Click the **Install** button to go to a page showing the progress of the package file's download (if necessary), the package name and a form for choosing installation options. These options depend on the package system in use, and are documented in more detail in [Software Packages](/docs/modules/software-packages). 
- By default the package will be installed on all managed systems. However, you can limit it to just one or the members of a group by making a selection from the **Server(s) to install on** menu. This can be useful if the package is only appropriate for certain systems. You can also select **hosts that don't have it** to tell the module to skip installation attempts on systems that already have any version of this package. This will prevent upgrades from being attempted as well though. 
- Click on **Install** again to go ahead. This will bring up a page showing the results from each managed host. It is quite possible for installation to succeed on one system but fail on another due to dependency problems or because the package is already installed. Installations will be done simultaneously on all managed systems so that you don't have to wait for them to complete one by one. 

### Searching for packages
This module can be used to quickly search for packages across all managed hosts, as it keeps its own local host of installed packages on each system. Follow these instructions to search for and display the details of packages:
- On the module's main page, enter a search term (such as _nano_) into the field next to the **Search for package** button. When clicked a page listing all matching packages will appear, or containing an error message if none were found. If exactly one package matches you will be taken directly to its editing page. 
- If multiple packages match, click on the name of the one that you want to view in the list. This will bring up an editing page showing its complete details and icons for each of the hosts it is installed on. The details are fetched from the first system that has it installed, or the master server if possible. 
- To see the files that the package contains, select a host from the menu next to the **List files on** button. Clicking on it will open a page showing the details of files in the package from that host, just like the similar list in the Software Packages module. 
- To view the details of one of the hosts on which the package is installed, click on its icon on the package editing form. This will take you to the page covered in the **Exploring and removing a server** section. 

It is quite possible for many different versions of the same package to be installed on different systems in your network. This can make the package details form a little confusing, as it might show the details of version _1.0_ of some package when most of your systems are really running version _2.0_. The lists of files in a package can also vary significantly between versions and between different packages of the same program from various Linux distribution vendors. 

### Deleting a package
If it is no longer needed, an installed package can be removed from one or all hosts using this module. This can be done as follows:- Find the package that you want to remove by following the instructions in the **Searching for packages** section. 
- To delete from just one host, select it from the menu next to the **Uninstall from** button. To remove from all, leave **\<all hosts\>** selected. Only hosts that the module knows the package  is on will be included in the menu. 
- Click the button to bring up a confirmation page showing the number of files and bytes that will be removed. Depending on the package system this page may contain fields for setting un-installation options, such as whether dependency checking is done or not. 
- Hit the **Delete** button to go ahead with the removal. The deletion will be done simultaneously on all chosen systems to speed up the process. A page showing the results from each system that it is being deleted from will be displayed, indicating if it succeeded or why it failed. Those most common cause of failure is a dependency on this package by some other. If **\<all hosts\>** was selected the module will only attempt to remove it from systems that it thinks the package is installed on. 

### Exploring and removing a server
Using this module you can view the details of a managed system and the packages that it specifically has installed, which can be useful if your systems have different package sets. If you no longer want to control software on the system, it can be deleted from this module as well. 

To view the details of and packages on a managed server, do the following:
- Click on its icon on the module's main page. This will bring up a page showing the operating system the host is running, and a tree of package categories. Just like in the Software Packages module you can click on category names in this tree to open them up and view the sub-categories and packages that they contain. 
- To view the details of some package, click on its icon in the tree. Each icon links to the package editing form explained in the **Searching for packages** section, from which you can delete it from one or all hosts. The details displayed will not necessarily come from this managed system though. 
- To remove this system from the module's control, click on the **Remove from managed list** above the package tree. This will only delete the master system's copy of the installed package lists, so the removal will happen without asking for confirmation. 

### Refreshing the package list
If packages are installed or removed from a managed system not through this module, its lists of packages will no longer be correct. This is fine as long as the lists are refreshed afterwards, which you can do by following these steps:
- Click on the **Refresh package lists** button on the main page. 
- A page showing the results from each managed system will be displayed, listing any new packages found or old ones that no longer exist, or an error message if it cannot be contacted for some reason. As with installs and deletions the refresh will be done in parallel to speed up the process if you have a large number of managed servers.
