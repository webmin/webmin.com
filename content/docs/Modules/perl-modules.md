---
title: "Perl Modules"
date: 2023-09-07
weight: 575
---

### About

This page explains how to install new Perl modules onto your system using Webmin, and how to view or delete modules that are already installed. 

### Intro
The Perl programming language has many of its functions in separate modules, which are be loaded by Perl scripts only when they need them. The standard distribution of Perl includes many modules, but there are far more available that can be installed separately. Modules exist for a wide variety of purposes, such as connecting to databases, creating images, using network protocols and parsing data formats. 

All Perl modules have short names like `GD` or `Net::Telnet`. All those that have multi-part names separated by double-colons are part of a family of related modules, which are often packaged together. Modules are distributed in tar.gz files which need to be extracted and compiled before they can be installed. Often, a single distribution file will contain multiple modules that must all be installed together. 

The best source of Perl modules is **CPAN** (the **Comprehensive Perl Archive Network**), located at [cpan.org](http://www.cpan.org/). It has a vast database of almost every third-party module available, and is easily searchable. Webmin can install a Perl module for you directly from CPAN if you know the name of the module that you want.

Because Webmin is itself written in Perl, it can make use of some optional modules. For example, to run Webmin in SSL mode, it is necessary to install the `Net::SSLeay` module. To reliably connect to and manage [MySQL Database](/docs/modules/mysql-database-server) and [PostgreSQL Database](/docs/modules/postgresql-database-server) servers, you need to install the `DBD::mysq`l and `DBD:Pg` modules respectively. 

### The module
Under the Tools category in Webmin is a module called **Perl Modules**, that can be used to view, install and remove Perl modules from your system. When you enter it, the main page lists all modules that are currently installed as shown in the image below. For each, the module name, a short description, installation date and number of sub-modules is shown. Sub-modules in Webmin refer to Perl modules that come bundled with a primary module in the distribution `tar.gz` file.

Because Perl behaves the same on all versions of Unix, this Webmin module has the same user interface and functionality on all operating systems. The only problem that you may encounter on non-Linux systems is the lack of a _C_ compiler, which is often needed when installing Perl modules. All versions of Linux include the `gcc` compiler as standard, but many commercial Unix variants do not come with a free _C_ compiler.

[![](/images/docs/screenshots/modules/light/perl-modules.png "Perl Modules Screenshot")](/images/docs/screenshots/modules/light/perl-modules.png)

### Installing a Perl module
If you need to install a new Perl module for use by Webmin or for developing your own scripts, it can be done easily using this Webmin module. The steps to follow are: 
 1. At the bottom of the module's main page is the installation form. It offers four options for types of source to install a module in tar.gz distribution file format from, but the most common and useful is **From CPAN**. Just select it and enter the name of the module (su`ch` as `Net::Telnet`) into the adjacent text field. If the module file is already on your system, you can choose the **From local file** option and enter the path to the `tar.gz` file into the field next to it. Or if you have the file on the system that you are running your browser on, select **From uploaded file and select it using the Browse** button.  The final source that a module can be install from is an URL on another server. To have Webmin download it for you, select the **From ftp or http URL** option and enter the URL into the field next to it. 
 2. If the **From CPAN** option was chosen and this not the first module that you have installed from that source, the **Refresh module list from CPAN** checkbox next to the module name field will be visible. If checked, Webmin will re-download the complete list of modules and the URLs that they can be found at from the CPAN website. Otherwise it will use a local cache of the list from the previous download. The module list should be re-downloaded periodically to ensure that the local copy remains up to date. For this reason, the box will be checked by default every 30 days, or whatever period you have set in the Webmin module's configuration. 
 3. When you have selected the source, click the **Install** button.  This will take you to a page showing the progress of the downloaded CPAN module list and the module file itself, if necessary.  If the Perl module cannot be found on CPAN or the select tar.gz file does not appear to be in the correct format, an appropriate error message will be displayed. However, if the module file was downloaded and successfully verified, an installation options form like the one in the image below will be displayed. 
 4. The **Install action** field determines which steps of the module installation process will be carried out by Webmin.  The available options are:
  
    - **Make only** &mdash; The file will be extracted, its `Makefile` generated with the command `perl Makefile.PL` and then the make command run to build the modules it contains.  No actual installation will take place.
    - **Make and test** &mdash; Like the **Make only** mode, but compiled module will be tested with the `make test` command as well. Almost all Perl modules include test code to verify that they have been compiled properly. 
    - **Make and install** &mdash; The module file will be extracted, the modules it contains built, and then the make install command will be run to copy the compiled files to the appropriate Perl directories on your system. Once they have been installed, the modules will be usable by other Perl scripts and programs (like Webmin).
    - **Make, test and install** &mdash; Like the **Make and install** mode, but the `make test` command will be run on the compiled modules before they are installed to verify that they were built correctly. This is the default mode, but for some modules it may not be appropriate if the testing phase is prone to failing incorrectly. 
 5. For some Perl modules, additional parameters may need to be passed to the `perl Makefile.PL` command for them to be built correctly. If so, you can enter them into the **Makefile.PL arguments** field. The `Net::SSLeay` module for example requires the path to the OpenSSL directory to be given as a parameter, if it has not been installed in the standard directory. Generally though, you will not need to fill in this field. 
 6. Some Perl modules need certain environment variables to be set before `perl Makefile.PL` is run. If that is the case with the module you are trying to install, fill in the **Makefile.PL environment variables** table with the names and values of those that need to be set. The average module does not require any special variables though. 
 7. To have Webmin carry out the compile and installation steps chosen in step 4 above, click the **Continue with install** button at the bottom of the form. This will take you to page showing each command run to build the module, and any output or error messages that it produces. Only if everything is successful will a message like `Make, test and install of Net::SSLeay successful` appear at the bottom of the page. If something goes wrong, check the error messages for clues. Many Perl modules provide an interface to some _C_ library, and so require that the include files for that library be installed. On many Linux distributions these are in a different package to the library itself. For example, `Net::SSLeay` uses the OpenSSL _C_ library, whose include files are often in a separate `openssl-devel` package. See [Software Packages](/docs/modules/software-packages) for instructions on how to install packages on your system. 
 8. Assuming everything worked and you chose to install the module, you can now return to the main page. The new module should be listed there and will be usable in Perl scripts and programs.

Some Linux distributions include various Perl modules in RPM format. They must be installed using the [Software Packages](/docs/modules/software-packages) module, not this one. Be warned that if you have upgraded Perl from the version included with your distribution, these RPMs will not work. For this reason, it is almost always better to install Perl modules using this Webmin module.

### Removing a Perl module
The main page of this Webmin module displays all non-core Perl modules installed on your system for which a `.packlist` file can be found. Unfortunately, some modules do not create a `.packlist` file. Modules like this will still be usable in Perl scripts, but cannot be viewed or uninstalled by Webmin.

Most Perl modules include documentation on their API for programmers who want to make use of them in scripts. To view a module's documentation, the steps to follow are:
 1. On the main page, click on the module name under the table's **Module** column. This will bring you to a page showing its complete documentation, as generated by the `perldoc` command.  Not all modules have documentation though, so in some cases none will be displayed.  
 2. If the module has sub-modules, they will be listed as well.  Each may have additional documentation that you can view by clicking on its name. 

Webmin can also be used to delete Perl modules from your system, as long as they have properly formatted `.packlist` files. 

[![](/images/docs/screenshots/modules/light/perl-modules-existing.png "Existing Perl Modules Screenshot")](/images/docs/screenshots/modules/light/perl-modules-existing.png)

The process to remove a module is:
 1. On the main page, click on the module's name to go to the documentation page. 
 2. If the **Uninstall module and submodules** button exists, click on it. If the button is not displayed, then Webmin cannot remove this Perl module. 
 3. Once you click on the button, a page listing all the files that will be deleted is displayed. To go ahead with the uninstall, click the **Uninstall now** button at the bottom of the confirmation page. All the module's files will be removed, and you will be returned to the main page. 

In recent versions of Webmin, Perl modules installed from RPM or DEB packages can also be deleted using this same process. The correct RPM or DEB package will be removed, rather than Webmin deleting the Perl module files itself.

### Configuring the module
This Webmin module has one configurable option that you might want to change and two others that should only be modified if using a different repository for Perl modules than the normal CPAN website.
