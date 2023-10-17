---
title: "Software Packages"
date: 2023-04-01
weight: 305
---

This chapter covers the installation and management of **software** on your system using **packages**. It also covers the differences between the various Unix package formats, such as RPM, DPKG and Solaris. 

### Introduction to packages
All Linux systems use some kind of software packaging system to simplify the process of installing and removing programs. A package is a collection of commands, configuration files, man pages, shared libraries and other files that are associated with a single program like [Apache Webserver](/docs/modules/apache-webserver) or [Postfix Mail Server](/docs/modules/postfix-mail-server), combined into a single package file. When it is installed, the package system extracts all the component files and places them in the correct locations on your system. Because the system knows which package every file came from, when you want to remove a package it knows exactly which files to delete. 

On almost all versions of Linux, packages generally contain compiled programs that will only work on the CPU architecture that they were compiled for. Because Linux supports many different CPU types (x86, Alpha and IA64 to name a few), some programs have packages compiled for several different CPUs. A package can only be installed on a system with the right CPU architecture - unless it is architecture-independent, in which case it will install on any system type. Programs written in languages like Perl (such as Webmin) or packages that contain only documentation are usually CPU-independent. 

When a Linux distribution is installed, almost every file that is placed on the hard disk is a member of one of the distribution's packages. This makes it easy to remove unwanted software that was installed by default, or add additional software from the distribution CD or website. 

Because some programs depend on other programs to operate, packages can have dependencies as well. Certain packages may fail to install unless you have installed another package first, and some packages may not be removable if others depend upon them. This system of dependencies protects the user from installing software that will not work due to a missing shared library or command. 

Because the package systems knows exactly which files are in each package, it can use that information to validate the files after installation. All package systems also keep track of the checksum for each file, so that any manual modifications to files in a package can be detected. This can be very useful for detecting unauthorized modifications, such as by an attacker who has cracked your system and replaced important commands like `ls` and find with modified versions. 

Unfortunately, on Linux there is more than one package system. The most common is RPM, which stands for Red Hat Package Manager. It is used by Red Hat, Oracle Linux, openSUSE, Mandrake, Caldera, MSC and a few other Linux distributions. It works well, and there is more software available in RPM format than any other package system. Installation, querying and deletion of RPM packages is done using the rpm shell command.

The biggest contender to RPM is Debian's DPKG package format. It is technically superior in many ways, particularly when it comes to dependencies - however, only Debian and a few other distributions use it. The `dpkg` and deselect commands are used at the shell prompt to manage Debian packages.

Another packaging system is Gentoo's Emerge, which is only available on Gentoo Linux. The biggest difference between Emerge and other package systems is that almost all packages contain source code, which is compiled when the package is installed. All Gentoo package installation and management is done using the `emerge` command. 

Even though these package systems are internally different and use incompatible file formats, they all offer basically the same features. All allow multiple files related to the same program to be combined into one package file for easy installation and removal and all support dependencies. Unfortunately, once you have chosen your Linux distribution it is very difficult to change to another packaging system, so you are stuck with what the distribution uses. 

On most distributions that use RPM, packages are either installed from distribution CD or downloaded from various sites on the Internet. Debian Linux however includes a command called `apt-get` that can automatically download and install packages from a repository run by the distribution maintainers. If the package depends on others that are not yet installed on your system, they will be automatically downloaded and installed as well. Because all packages in the repository are created and maintained by the same people, incompatibilities between them are reduced and dependencies easily resolved. The repository also contains a package for almost every free-software program that you might want to install, so there is no need to search the Internet for the package that you want. 

The Debian repository can also be used to update all the packages on your system to the latest version. Because new versions of packages come out frequently (especially when using the unstable or testing Debian releases), an update is an easy way of ensuring that you are running the latest version of everything. This can take a long time if you do not have a fast connection to the Internet though, as many new packages may be downloaded for each update. 

Gentoo Linux's Emerge system also has a repository from which packages can be automatically downloaded and installed using the `emerge` command. Like Debian's `apt-get`, it automatically downloads and installs packages needed to fulfill dependencies when needed. 

Red Hat systems also have access to a package repository as part of the Red Hat Network. This allows updated packages to be selected on the Red Hat website and installed automatically or on request on multiple systems. Unlike the Debian and Gentoo repositories, it is not generally used for installing new packages. 

### The Software Packages module
The Software Packages module provides a consistent interface for installing, searching and removing packages, independent of the actual packaging system being used. Its link can be found under the System category, and clicking on it will take you to the main page shown below.

[![](/images/docs/screenshots/modules/light/software-packages.png "Software Packages Screenshot")](/images/docs/screenshots/modules/light/software-packages.png)

Depending on your Linux distribution, the page may look slightly different - additional buttons and fields for installing from a repository may be visible. However, the top section for finding packages, the middle section for installing a package and the lower section for identifying a file will always be there.

### Installing a new package
Before you can install a new program using this module, you first have to locate a package file for it that is in the correct format. For RPM-based distributions like Red Hat, the best places to look are the distribution CDs or the [rpmfind.net](https://rpmfind.net) website. If you are using Debian Linux, it is best to try installing from the APT repository as it contains almost all available packages. Either way, the steps for installing a package are similar: 
- On the main page of the module, scroll down to the *Install a New Package* form which will be used to select the package and start the install process. 
- If the package file is on the system running Webmin, select the **From local file** option and enter the full path to the package file. If your system uses RPM packages, you can enter a directory containing multiple `.rpm` files or a wildcard like `/tmp/*.rpm` as well. This can be used to install several packages at once. If the package is on the computer your browser is running on, select the **From uploaded file** option and click on the **Browse** button to select the package file. If you are running your browser at the console of your Webmin system, there is no difference between this option and the previous one. If the package is on a website somewhere, select the **From ftp or http URL** option and enter or paste the URL into the text field next to it. Webmin will do the download for you before starting to install. If your system uses RPM packages and you have the `rpmfind` command installed, the **Search rpmfind.net** button next to the URL field can be clicked to pop up a window for searching the RPM database at [rpmfind.net](https://rpmfind.net).  If running Debian Linux, you can select the *Package from APT* option and enter the package name into the text field next to it. Click the **Search APT** button to find the package name if you don't know exactly what it is called. If running Red Hat Linux, the **Package from Red Hat Network** option can be used to install one of the packages that you have available for downloading. The **Search RHN** button can be used to display all those that are available. If you are running Gentoo Linux, the **From Portage repository** option and **Search** buttons can be used to install from the repository. In fact, very few Gentoo packages can be found outside the repository. 
- Once the package source has been entered, click the **Install** button. If you chose to install from a repository (such as APT, Red Hat Network or Portage), the download and installation process will start immediately. Webmin will display output from the install command, and if successful a list of packages that were installed. No other steps are necessary to complete the install process. If any other install source was chosen, the package will be downloaded if necessary and the installation options form displayed. 
- The installation options available differ depending on your package system, but the defaults will work fine for upgrading or installing a package with no dependency problems. RPM-based systems have several options, the most useful of which are:
  - _Ignore dependencies?_  - if a package is failing to install due to dependency errors that you know are incorrect, set this option to **Yes**. It can also be useful if you are going to install packages to solve the dependency problems later. 
  - _Replace new version with old?_ - If you want to downgrade a package to an older version, this option must be set to **Yes**.
  - _Overwrite files?_ - If a package cannot be installed due to conflicts with files from another package, enable this option. 
- When you are done selecting install options, click the **Install** button. If everything goes well, a page showing the details of the new package and all the files that it contains will be displayed. However, if the install fails an error message explaining why will be displayed. In that case, you can use the browser's back button to return to the install options form and try again with different choices. 

### Finding and removing a package
A typical Linux system has hundreds of installed packages, most of which were installed as part of the distribution install process.

Because there are so many, it is difficult to simple browse through them to find one that you want to remove or view the details of. To find a package or packages, follow these steps: 
- On the main page of the module, enter a search keyword into the **Search For Package** field. This will be matched against the names and descriptions of all packages, so you can enter something like _apache_ to find all that are related to Apache. 
- Click the **Search For Package** button, which will either display a list of all matching packages, take you to the details of the package if exactly one is found, or show an error message if none were found. If a list appears, click on one of the package names to see its full details. 
- The package details page (shown below) will display all available information, including a full description.  If you want to see all the files that it contains, click the **List Files** button. This will take you to a page showing the path, type, owner and group and validation status for each file. The status is particularly useful, as it allows you to see if a file has been changed manually since the package was installed. 

[![](/images/docs/screenshots/modules/light/software-packages-edit.png "Edit Software Packages Screenshot")](/images/docs/screenshots/modules/light/software-packages-edit.png)


Packages can also be browsed manually by clicking on the *Package Tree* button on the main page. On most operating systems, each package is a member of a class such as _Development_ or _Administration/Networking_. The package tree page uses this class information to display all installed packages in a hierarchy, much like a directory tree. 

[![](/images/docs/screenshots/modules/light/software-packages-tree.png "Software Packages Tree Screenshot")](/images/docs/screenshots/modules/light/software-packages-tree.png)

You can open classes by clicking on their folder icons until you get to the package level. Clicking on a package icon will take you to the same details page as described in the steps above. 

If you know the name of a command or file and want to find the package that it belongs to, the **Identify a File** form on the main page can be used. Enter either a full path like `/etc/httpd` or a command like `apachectl` into the **Search For** field, and hit the button. If the file or command is known to the package system, information on it will be displayed along with a list of packages that it belongs to. Clicking on one of the package names will take you to the information page described above. 

Once a package has been found by searching or browsing the tree, you can delete it from your system by following these steps: 
- On the package details page, click the **Uninstall** button.  This will take you to a confirmation page showing the number of files in the package and the amount of disk space that they occupy. 
- If using the RPM packaging system, the **Ignore dependencies?** option can be set to **Yes** to force an uninstall even if some other packages depend upon this one being removed. 
- Click the **Delete** button to remove the package. If something goes wrong, an error message will be displayed. If successful, the browser will return to the module's main page or to the package search results list if you found the package using a search. 

### Updating on Debian Linux
If you are running Debian Linux, at the bottom of the main page of the module there will be a form headed **Upgrade All Packages**. This form has three options, which are: 
- Resynchronize package list
   
   If this option is set to **Yes**, the Debian package repository will be queried to retrieve the latest list of packages available for download. This should be done before any upgrade so that your system knows which URLs to download from when installing packages from the APT repository.  The actual command used to synchronized the package list is apt-get update. 
- Perform distribution upgrade
   
   When this option is set to **Yes**, your Debian system will be upgraded to the latest distribution release when the form is submitted. With the default **No** selection, it will simple be updated so that all packages installed are the latest version. Unless you have a fast network connection and really want to upgrade, it is advisable to leave this option set to **No**. When **Yes** is selected, the command apt-get upgrade-dist will be run. For **No**, apt-get upgrade will be used instead.
- Only show which packages would be upgraded
   
   If set to **Yes**, nothing will actually be installed when the form is submitted - instead, a list of packages that would be updated or install will be displayed. This can be useful if you want to see exactly what would happen when doing an update before going ahead for real. 

After you have made your choices, click the **Upgrade Now** button. Webmin will run the appropriate apt-get commands and display their output, so that you can see which packages are downloaded and updated. 

### Updating on Red Hat Linux
Red Hat offers a service to users of its Linux distribution, called the Red Hat Network. One of its features allows you to have updated RPM packages automatically installed on your system, to fix bugs or security holes are found in the packages supplied with the distribution. If you are running Red Hat Linux, there will be a form at the bottom of the main page under the heading _Red Hat Network Options_ that you can use to configure the automatic installation of updated packages. Before it can be used, you must have signed up with the Red Hat Network and registered the system you are running Webmin on. 

The form actually serves two purposes - changing the settings for the update daemon that periodically checks for new packages, and forcing an immediate update. The fields on the form are: 
- Automatically check for updates?
  
  If this option is set to **Yes**, the `rhnsd` daemon that checks for updates will be configured to start at boot time, and started when the form is submitted if necessary.  Setting it to **No** will stop the daemon and prevent it from being started at boot time. 
- Checking interval
  
  When the automatic update daemon is enabled, the number of minutes between checks for new packages is determined by this option.
- Proxy server URL for downloading
  
  If your system cannot connect directly to the Red Hat website, you will need to set this option to the URL of a web proxy server. It must be formatted like `https://proxy.example.com:8000`.
- Skip packages matching
  
  This option is for entering list of patterns for package names that you do not want automatically updated. By default it prevents kernel updates from being automatically installed. 

The **Save and Apply** button will save your settings and start or stop the `rhnsd` daemon as necessary. The **Save and Check Now** button will do the same thing, but will also run the `up2date` command to immediately check for and download new packages. All output from the command will be displayed so that you can see which packages are being updated.

### Other operating systems
Linux is not the only version of Unix that uses packages to simplify the process of installing and removing software. The operating systems listed below can also use the Software Packages module, with an almost identical user interface. However, each has its own packaging format that is incompatible with Linux or any other variety of Unix. The differences between each Unix's package system and RPM are explained below:

#### Sun Solaris, SCO OpenServer and SCO UnixWare
All of these operating systems use the same basic System V package format, but packages from one cannot be installed on any of the others. 

Package files are usually named `something.pkg` or `something.pkg.gz`.  If a package file is compressed, Webmin will uncompress it automatically. 

Files can contain multiple packages, all of which will be installed when using Webmin. - No package repository or search service exists for System V packages. - Directories like /usr/bin are often shared between multiple system packages. 

#### FreeBSD, NetBSD and OpenBSD
Package files have names like `something.tgz`, and are actually just specially formatted  tar files.

Webmin does not support any repository for BSD packages.

#### HP/UX
HP/UX uses its own unique Depot package format Package files are usually named like `something.depot` or `something.depot.gz`. If a package is compressed, Webmin will automatically uncompress if for you.

Webmin does not support any repository for HP/UX packages.
