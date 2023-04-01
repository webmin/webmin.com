---
title: "Bootup and Shutdown"
subSection: "System"
date: 2023-03-17
weight: 165
---

### About
This page explains methods via which servers and services are started at boot time, and tells you how to use Webmin to have your own commands run at startup. 

### Introduction to the Linux boot process
The very first thing to happen when a PC starts up is the loading of the BIOS from ROM. The BIOS (Basic Input/Output System) performs memory and other hardware checks, then loads a tiny piece of code from the first part of one of the system's hard disks, known as the master boot record or MBR. This piece of code is called a _boot loader_, and is responsible for displaying a menu of operating systems to the user and loading one of them. There are several boot loaders available for Linux such as LILO and GRUB, but they all do basically the same thing. 

Once the kernel has been loaded, it mounts the _root_ filesystem runs the init program, which is responsible for managing the rest of the boot process. It reads the `/etc/inittab` file and executes the commands it specifies, the most important of which begins execution of bootup scripts. Each of these scripts is responsible for a single task, such as initializing [Network Configuration](/docs/modules/network-configuration), starting a webserver or mounting [Disk and Network Filesystems](/docs/modules/disk-and-network-filesystems). The scripts have a fixed order that they must execute in, as some of the later scripts are dependant on earlier ones - for example, network filesystems cannot be mounted until network interfaces have been enabled. 

At shutdown time, a series of scripts is also run to shut down servers and un-mount filesystems. These scripts also have a fixed order, so that the de-activation of networking and other basic services happens last. If requested and supported by the hardware, the last step in the shutdown process will be the powering off of the system by the kernel. 

When a Linux system starts up, different scripts are executed depending on which _runlevel_ it is starting in. The commonly used _runlevels_ are:

- **5 - Graphical mode** &nbsp;&mdash;&nbsp; All servers and services will be started, and X started to display a graphical login prompt on the console. 

- **3 - Multi-user mode** &nbsp;&mdash;&nbsp; All servers and services are started, but only the normal text login is available on the console.

- **2 - Multi-user mode without NFS** &nbsp;&mdash;&nbsp; Almost all servers and services are started, but NFS filesystems are not mounted.
- **1 - Single user mode** &nbsp;&mdash;&nbsp; Only the most basic system initialization is done, and a root shell opened on the console. This runlevel is useful if some bootup script is failing and making your system un-bootable. 

Not all Linux distributions use the same init system but, if you are using Webmin you don't have to worry about the locations of any of these directories as it always knows where they are.

### The Bootup and Shutdown module
This module allows you to create and edit the scripts that are run at bootup and shutdown time, called actions by the module. It can be found under the System category in Webmin, and when you enter it the main page will display a list of all available actions, whether they are started at boot, and a short description for each. See the screenshot below for an example.

[![](/images/docs/screenshots/modules/light/bootup-and-shutdown.png "Bootup and Shutdown Screenshot")](/images/docs/screenshots/modules/light/bootup-and-shutdown.png)

Each Linux distribution has its own set of standard action scripts, so on one system the script `httpd` may start the [Apache Webserver](/docs/modules/apache-webserver), but on another in may be called `apache2`. You should be able to get a good idea of what each script does from its description though. 

### Configuring an action to start at bootup
If some server on your system such as [Apache Webserver](/docs/modules/apache-webserver) or [Squid Proxy Server](/docs/modules/squid-proxy-server) is not currently being started at boot time, you can use this module to change that. On most Linux distributions, every server that comes with the distribution will have its own bootup action script, but not all will be enabled by default. To configure an action to start at boot time, the steps to follow are: 
- On the main page of the module, click on the tick-mark of the item to be changed.
- Use the appropriate button to Start/Stop/Restart/Enable/Disable the selected action.

[![](/images/docs/screenshots/modules/light/bootup-and-shutdown-edit.png "Edit Systemd Service Screenshot")](/images/docs/screenshots/modules/light/bootup-and-shutdown-edit.png)

### Starting and stopping actions
Even though action scripts are normally started at boot time and stopped at shutdown time, you can start or stop them at any time using Webmin. Many action scripts can also perform additional functions, such as showing the status of a server or reloading its configuration. To start or stop an action, do the following: 
- On the main page of the module, click on the name of the action.  This will take you to the action editing form shown in the image below.
- At the bottom of the page in the middle will be a row of buttons, each for running the action script to perform some function.  Depending on the script there may be different buttons available, but some of the most common are : 
   - _Start Now_: Immediately starts the server or service. On some versions of Linux, this will do nothing if the action has already been started and the server is already running. 
   - _Stop Now_: Stops the server or service.  On some Linux versions, this will do nothing unless the action has already been started. 
   - _Restart Now_: Stops and restarts the server. In many cases, this will do nothing if the action has not been started yet. 
   - _Reload Now Where available_: This function tells the server started by the action to re-read its configuration files. 
   - _Show Status_: Just displays a message telling you if the server is running or not, and if so what its PID is. 
- After you click the button for the function that you want to perform, a page showing the output from the action script will appear. This should indicate whether the action was performed successfully or not. 

### Adding a new action
If you have a command that you want run at boot time, creating a new action script is the best way to set it up. Servers like [Apache Webserver](/docs/modules/apache-webserver) or [Postfix Mail Server](/docs/modules/postfix-mail-server) that have been compiled and installed manually do not have actions, so you will need to create one that runs whatever command is necessary to start the server. 

To create your own action, follow these steps: 
- On the main page of the module, click the _Create a new bootup action_ link above or below the list of existing actions.
- In the **Name** field, enter a short name for the action like _qmail_. Every action must have a unique name. 
- In the **Description** field, enter a few lines of text to describe your action - maybe something like _Start the Qmail mail server_.  This will show up on the main page of the module under the **Description** column. 
- The **Bootup commands** field must be filled in with the shell commands that you want run when your action is started at boot time. For example, if you wanted to start Qmail you might enter `/var/qmail/rc`. 
- The **Shutdown commands** field should be filled in with commands that you want run when your action is stopped. For example, to stop Qmail you might enter `killall -9 qmail-send`. 
- Assuming you want your action run at boot time, set *the Start at boot time?* option to **Yes**. 
- Finally, click the **Create** button to save the new action.  Webmin will create a script combining the commands you entered with a standard wrapper to make a valid action script.

Any of the existing action scripts can be edited using Webmin, not just your own creations. Be careful editing them, as they may have a format totally different to the scripts created by Webmin.

### Rebooting or shutting down your system
Linux systems should always be rebooted or shut down using the appropriate commands, rather than simply turning off the power or hitting the reset button. If not, you may lose data on your local hard drives and will certainly have to wait through a lengthy filesystem check with `fsck` at boot time if using a non-journaling filesystem. 

To reboot, simply do the following : 
- At the bottom of the main page of the Bootup and Shutdown module, click the **Reboot System** button. This will take you to a page confirming if you really want to reboot. 
- Click the **Reboot System** button on the confirmation page.  The reboot process will start immediately, and if you are logged in at the console your session will be logged out. After all the shutdown scripts have been run, the system will bootup again as explained in the introduction. 

The process for shutting down is almost identical, just use the 
**Shutdown System** button at the bottom of the page instead. 

### Configuring the Bootup and Shutdown module
Like most modules, Bootup and Shutdown can be configured by clicking on the **Module Config** link on the main page. This will take you to the standard configuration editing page, however almost none of the options on the configuration page should be changed, as they are set automatically by Webmin based on your operating system type. 

### Other operating systems
The system of bootup scripts used by Linux is used by many other Unix operating systems, but not all of them. Even those that do use it have some slight differences in their implementation, and almost all use different directories for storing the actual scripts and links. 
 - **Sun Solaris**, **HP/UX**, **SCO UnixWare**, **SCO OpenServer**, **Compaq Tru64/OSF1** and **SGI Irix**&nbsp;&nbsp;&mdash;&nbsp; All these operating systems use action scripts that are very similar to Linux, but are stored in different directories. Because those that come with the system do not have descriptions the main page of the module will just display action names by default.
 - **FreeBSD**, **NetBSD** and **OpenBSD** &nbsp;&mdash;&nbsp; The BSD family of operating systems does not use action scripts at all, instead relying on a fixed set of scripts that are run at boot time. One of the these scripts `/etc/rc.local` is for system administrators to add their own commands to be run at boot time. On any of these operating systems, the main page of the module will just display a form for editing the `rc.local` file. To add any commands that you want run at boot time, just enter them into the text box and click the **Save** button.
 - **IBM AIX** &nbsp;&mdash;&nbsp; AIX is very similar to the BSD operating systems in that it does not have action scripts. Instead, the file /etc/rc can be edited to add additional commands to be run at boot time, using the form on the main page of the module. </blockquote>
 - **Apple MacOS X**&nbsp;&mdash;&nbsp;Apple's version of Unix uses a totally different set of files for storing actions to be run at boot time than any other supported operating system. Separate action scripts still exist, but the user interface in this module for viewing and editing them is quite different. 

If your operating system is not on the list above then most probably it is not supported by the Bootup and Shutdown module at all, so the module icon will not appear in Webmin.
