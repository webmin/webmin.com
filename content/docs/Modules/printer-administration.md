---
title: "Printer Administration"
date: 2023-09-14
weight: 835
---

### About
This page tells you how to use Webmin to set up printers and printer drivers on your system. It covers the many different print systems in use, such as CUPS, LPRng and the Solaris print server. 

### Intro
Like other operating systems, Linux can print to directly attached printers or to printers connected to another system on a network. Any program that wishes to print runs a command like `lpr` to submit a job to the print server daemon, which adds the job to a queue for the specified printer. When the printer is ready, the daemon opens the appropriate parallel port or USB device file and sends it the print job data. Or if the printer is attached to another system on the network, the daemon connects using the appropriate protocol and sends it the job for queuing and printing. 

Almost all Linux programs submit print jobs in one of two formats - plain text, or PostScript. Because most consumer-grade printers do not support postscript, the print server daemon must convert the submitted postscript to a format that the printer does recognize. This done using a driver program or script, most of which are based around the freely available `ghostscript` PostScript rendering program. 

Almost every different printer manufacturer (and even different models by the same manufacturer) has its own data format that it accepts print jobs in. All manufacturers supply driver software for Windows with their printers, but very few include drivers for Linux. This means that the job of writing drivers has to be done by free software enthusiasts, who cannot always keep up with the rate at which new printers with new data formats are released. Some newer printer models may not be supported on Linux until a while after their release, and some models for which driver information is not available may never be supported. 

Several different print system packages exist for Linux, such as LPR, LPRng and CUPS. All perform basically the same task, but have different capabilities and are configured in different ways. Most modern Linux distributions include either LPRng or CUPS, but some older versions may just include LPR. 

There are also several different packages of printer drivers, many of which were created by Linux distribution vendors. All have the same purpose of converting postscript into the data format accepted by a printer, but have different configuration files and capabilities. The best are the CUPS drivers, because they have been designed for and well integrated with the CUPS print server. 

### The module
No matter which kind of print server is installed on your system, it can be configured using Webmin's Printer Administration module. The module attempts to provide a similar user interface regardless of the print system and drivers being used, while still allowing you to use all of their capabilities. By default, the module assumes that you are using the driver and printer daemon packages that are installed as standard by your Linux distribution. If you have installed a different print server (such as the superior CUPS), then you will need to tell Webmin which print system you are using. See the section on **Configuring the Printer Administration module** for details. 

All of the instructions in this page are written with the CUPS print system and drivers in mind. This is because I believe it to be the best print system available for Linux, and because it is used by default on many modern Linux distributions. 

When you enter the module from the Hardware category, the main page will list all printers installed on your system. On Redhat Linux versions 7.0 and above, only printers that have been created using Webmin will be shown. Those added by other programs (such as Redhat's `printconf` tool) will not be listed, as they cannot be edited using this module. 

When the print server daemon is running, at the bottom of the main page will be a button labeled **Stop Scheduler**. If clicked, the daemon will be stopped, causing all printing to cease. To start it again, click the **Start Scheduler** button that will appear in its place. 

If Webmin detects that the currently configured print system is not installed, an error message will appear on the main page instead. This indicates that either print software has not yet been installed on your server, or that the wrong system was chosen on the module configuration page. 

### Adding a new printer
If you have just connected a printer to your system or want to access one connected to another system on a local network, you must add it to the printer daemon's configuration before any program on your Linux system can print to it. To do this, the steps to follow are:
- Click on the **Add a new printer link** on the module's main page.  This will take you to the printer creation form.
- Enter a unique name for the new printer (such as _epson_ or _hp_laser_) into the **Name** field. This will be the name that the printer is specified by when using the `lpr` command or printing from other programs. 
- Enter a short description into the **Description** field, such as _Office Epson Stylus 740_. 
- If you want every print job to be preceded by a banner page containing the name of the file being printed and the user who printed it, set the **Print banner?** field to **Yes**. This is usually a waste of paper unless the printer is being used by a large number of people in a large organization. 
- To make this the default printer that will be used if no printer name is specified in the `lpr` command line, set the **Default printer?** option to **Yes**. This option is not available for all print systems. 
- When using some print systems, you can control the maximum size of a job that can be submitted to the printer using **Max print job size** field. For a printer on your own personal machine this should be set to **Unlimited**, but on a network with many users it may make sense to enter a lower number of 1 KB blocks. 
- If your system is using the Linux or LPRng print systems, you can enter multiple space-separated aliases for the printer into the **Alternate printer names** field. To make the printer the default, enter _lp_ as one of the aliases. 
- If the printer is connected directly to your system, in the **Print Destination** section select the **Local device** option and select the parallel or USB port that it is on from the menu next to it. If the device is not on the list, select **Local file** instead and enter the device path into its field, such as `/dev/ttyS5`.  You could also enter a filename to print to, as long as it already exists and is writable by the print server daemon. 
- If the printer is attached to another system on a network (or is directly connected to the network itself), you must choose a protocol to print to it. For a printer attached to a Unix system, select **Remote Unix server** and enter the hostname of the server and the name of the printer on that server into the fields next to it. For most Unix systems, the **Type** can be set to BSD, but if the remote server is running CUPS you can select IPP instead. For a printer on a Windows system, select **Remote Windows server** and enter the hostname and printer name into the appropriate fields next to it. If the server requires clients to login before printing, fill in the **User** and **Password** fields with a valid login for the Windows system. If you have multiple workgroups on your network, you may need to fill in the **Workgroup** field as well. For some printers that can be plugged directly into the network, you must select the **Direct TCP connection** option and enter a hostname and port number into the fields next to it. If the `hpnp` command is installed on your system, the option **Remote HPNP server** will be available so that you can print to HP network printers that use that protocol.  If selected, you must enter a hostname and port number into the fields next to it. 
- To have Webmin check if the remote printer can actually be reached using the chosen protocol, tick the **Check if remote server is up?** box. 
- If the printer supports PostScript, select the **None** option in the **Printer Driver** section. You should also select this option when printing to a remote Unix server, as conversion from PostScript to the correct data format will be done on the server. For printers that do not support PostScript and are connected directly to your system or accessed over the network using the **Direct TCP connection** or **Remote Windows server** options, you must select a printer driver as explained in the next step. 
- If your printer does not use PostScript needs a driver, select the **CUPS driver** option. When using another print system, this option may be labeled **Webmin driver** or **Redhat driver** or **COAS driver** instead. Either way, next to it will be a list of printer models from which you can select the make and model of your printer. If it does not appear in the list, try selecting the entry with the same manufacturer and closest model number that you can find. For example, if you have a _FooTronic 810_ and only _FooTronic_ models _800_ and _1000_ appear, select the model _800_. 
- With print systems, other options such as DPI and paper size may be available under the printer model list. Select those that are appropriate for your printer. 
- Finally, click the **Create** button. If anything goes wrong (such as an inability to contact the remote print server or a failure to create the printer), an error message will be displayed. Otherwise, you will be returned to the module's main page which will now list your new printer. 
- If you are using the CUPS print system and have set a driver for the printer, click on the name of your new printer on the list to go to the printer editing form. At the bottom below the printer model list will be an additional set of fields for configuring things like the paper size, print quality and paper type. Because the fields are dependant on the type of printer chosen, they are not displayed on the printer creation form. Set the paper size, DPI and so on to whatever is appropriate for your system. The defaults will usually produce fast low-quality output, so if you want to use your printer's photo-quality mode on glossy paper you will need to change them. When you are done changing the printer-specific options, click the **Save** button at the bottom of the page. 
- The newly created printer can now be printed to using the `lpr` command or any program that supports printing. 

### Editing an existing printer
Any printer created using Webmin or any other tool can be edited using the Printer Administration module. You can also temporarily disable a printer so that it no longer accepts jobs, or no longer sends them to the printer. To do this, the steps to follow are:
- Click on the name of the printer on the module's main page.  This will take you to an editing form.
- To prevent users from submitting new jobs to the printer, set the **Accepting requests?** field to **No**. You can enter a reason why the printer is unavailable into the **Why not** field, which will be displayed to users who try to use the `lpr` command. This field may not be available with some print systems though. 
- To stop the printer from printing or sending jobs to a remote server, set the **Printing enabled?** field to **No**. This can be useful if the printer is going to be taken offline for maintenance, as the queue will still accept jobs to be printed when the field is set back to **Yes** again. You can also enter a reason into the **Why not** field, which will be displayed when the print queue is displayed with the lpq command. 
- All other fields on the page can be changed, as explained in the **Added a new printer** section above. The only exception is the printer name, which cannot be modified after the printer is created. 
- When you are done changing the printer's details, click the **Save** button. The changes will be made effective immediately and you will be returned to the module's main page. 

Existing printers can also be deleted by clicking the **Delete** button on the editing form. Any jobs in the printer's queue will be deleted as well. 

### Managing print jobs
When a job is submitted to a printer, it is placed in the printer's queue. It is removed only when it has been successfully printed, or sent to a remote server. On a system with many users or a slow printer, the queue can grow quite large if jobs are being submitted faster than they can be printed. 

You can use this Webmin module to list jobs in the queue for a printer, view their contents or delete them. The steps to do these things are:
- On the module's main page, click on the **list** link under the **Jobs** column for the printer whose queue you want to manage.  This will take you to a page listing all jobs currently being or waiting to be printed. 
- To view the contents of a print job, click on its size. Because most jobs are submitted in PostScript format, your browser must have a plug-in or helper application that can handle the format. This is not possible for remote printers, or on some print systems. 
- To delete a print job, click on its ID in the first column. Or to remove all the jobs in the queue, click on the **Cancel all print jobs** button. 

The print jobs page can also be used to submit a test page to the printer, so you can verify from within Webmin that it is working. The steps to do this are:
- On the module's main page, click on the **list** link under the **Jobs** column for the printer that you want to print a test page on. 
- Click on the **Print Test Page** button. 
- Select either the **Black and white Postscript page**, **Colour Postscript page** or **Plain ASCII text** option to use one of Webmin's built-in test pages. Or select **Any uploaded file** and use the field next to it to choose a file on your system for printing. 
- Click the **Print page** button to submit the chosen page to the printer. A web page showing the output from the `lpr` command will be displayed so that you can see if any immediate errors occurred. 

### Module access control
It is often useful to give a user the rights to view print queues and delete jobs, but not create or edit printers. This can be done using the Webmin users module, one your have created a user with access to _this_ module or edited an existing user to provide access.

Once a user with access to the module exists, you can limit which printers he can manage and what he can do to them by following these steps:
- In the [[Webmin Users]] module, click on Printer Administration next to the name of the user or group. 
- Set the field **Can edit module configuration?** to **No**, so that the user cannot change the print system or paths to configuration files. 
- You can limit the printers that a user can edit the destination, driver and other attributes for by changing the **Printers this user can configure** field to **Selected** and choosing them from the list below. This will not stop him managing jobs on those printers though - the option in step 4 controls that.  To prevent the user managing any printers, choose **Selected** but do not select any printers from the list below. Be aware that a user who can edit or create a printer can gain root access by specifying his own driver program (which is typically run as root), or having the printer write to a system file such as `/etc/passswd`.
- To limit the printers on which the user can manage print jobs, change the **Can cancel print jobs?** field to **Only on selected printers** and choose them from the list below. Or select **No** to stop him canceling or viewing the contents of jobs on any printer. 
- It is also possible to further restrict the jobs that can be managed using the **Manage print jobs owned by** field. By default, jobs submitted by any user on allowed printers can be cancelled - however, if the last option in this field is selected and a username entered into the field next to it, only jobs owned by that user can be managed. You can also select the **Current Webmin user** option, which will limit the user to jobs submitted by the Unix user with the same name as the Webmin user. 
- To prevent the Webmin user creating new printers, set the **Can add new printers?** option to **No**. This should be done if he is not allowed to edit existing printers. 
- Because there is no reason why the user should need to stop or re-start the print scheduled process, change the **Can stop or start scheduler?** field to **No**. 
- To hide printers on the main page that the user is not allowed to edit or manage print jobs on, set the **Show non-configurable printers?** option to **No**. 
- To stop the user printing pages through Webmin, change the **Can print test pages?** option to **No**. 
- Finally, click the Save button to have your new restrictions activated. 

### Other operating systems
In addition to Linux, the Printer Configuration module is also available on several other Unix operating systems. Because each has its own unique print system, the module's user interface is slightly different - just as there are differences between the Linux print systems such as CUPS and LPRng. 

The supported operating systems and their differences are:

 - **Sun Solaris and SCO UnixWare**
 
   Solaris and Unixware have a very similar print systems to CUPS, and so the Printer Configuration  module has an almost identical user interface. One difference  is the addition of a **Driver accepts** field on the printer creation form, which the tells the print system what format data the driver program can handle. In most cases you should just select **postscript**  - or if you want all data to be passed directly through to the printer without filtering, select **other** and enter _binary_ into the field next to it. Another unique feature is the ability to control which users can use each printer, using the **Access control**  field on the creation form. The biggest omission on these Unix variants is the **Direct TCP connection** destination type. 

 - **HP/UX and SGI Irix**
 
    The print systems on these operating systems lack many options available on Linux, such as the **Description** field and **Banner** options. Once a printer has been created, it is impossible to change its destination or driver. Printing with via a direct TCP connection is not supported either.

 - **FreeBSD, NetBSD OpenBSD and Apple MacOS X**
 
   The print system on these operating systems is very similar to LPRng on Linux. Thus, you cannot designate a printer as the default or enter a reason why a printer is unavailable or offline. However, it is possible to specify a maximum print job size and enter alternative  names for a printer. 

Because none of the above operating systems include printer drivers, Webmin has to create its own using the `ghostscript` package. If the module detects that the `gs` command is not installed, you will not be able to choose a driver when creating or editing a printer. Similarly, to be able to print to Windows servers the Samba `smbclient` program must be installed and its path set in the module configuration page. 

For all of the above operating systems, the module will by default their standard print systems. Therefore, if you have installed a different package such as CUPS or LPRng, the module configuration will need to be changed so that Webmin can configure it correctly.
