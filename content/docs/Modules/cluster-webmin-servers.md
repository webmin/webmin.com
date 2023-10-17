---
title: "Cluster Webmin Servers"
date: 2023-09-30
weight: 935
---

### About
This module allows you to manage modules, themes, users and groups across multiple Webmin servers from one interface. It combines functions from the [Webmin Configuration](/docs/modules/webmin-configuration) and [Webmin Users](/docs/modules/webmin-users) modules with the ability to carry out actions (such as installing a theme or creating a user) on multiple servers at once.

The top part of the main page under the Managed Servers heading lists other Webmin servers whose modules and users are being managed by this module. To add a server to this list, you must first add it to the Webmin Servers module, with a username and password specified to login to Webmin on that server. You can then select the server from the list next to the Add Server button.

When a server is added, it will be checked to make sure it is running a supported version of Webmin (0.985 or later) and that it has the necessary modules installed. Lists of all modules, themes, users and groups from the server will then be downloaded and cached locally.

Once there is at least once icon under Managed Servers, you can use the buttons under Webmin Users and Groups to edit, create or set ACLs on users and groups on any server. Users and groups that you create will be created on all managed servers, but those that already exist that are edited or deleted will only be changed on the servers they already exist on.

At the bottom of the page under Modules and Themes are buttons for editing modules and themes installed on any managed server, and a form for installing a new module or theme on all servers. 


### The module
Before reading this page you should be familiar with Webmin's cluster management capabilities, explained in the introduction. All the modules in the Cluster category make use of the [Webmin Servers Index](/docs/modules/webmin-servers-index) module and RPC to control other systems. You should already read  [Webmin Configuration](/docs/modules/webmin-configuration) and [Webmin Users](/docs/modules/webmin-users) modules respectively, as this one can be used to perform many of the same tasks across multiple systems. 

The [Cluster Webmin Configuration](/docs/modules/cluster-webmin-configuration) module really has two purposes - the management of Webmin users and groups across on multiple systems, and the installation and removal of modules and themes. If your network has multiple Webmin servers this module can be very useful for keeping their user lists and user access control settings synchronized. And it provides an easy way to roll out a new module to a large number of servers at once. 

Like the other cluster modules, this one keeps lists of modules, themes, users and groups from each managed server on the master system. This speeds up searching, but creates the potential for inconsistencies between how the master things the other systems are configured and how they really are. For example, if you install a module on or upgrade a managed host the master system will not know about it until it is annually refreshed, as explained in the **Refreshing user and module lists** section. 

When you click on the module's icon under Cluster category on Webmin's main menu, the main page shown below will be displayed. At the top is a table of icons, one for each of the managed servers. Under each icon is the version of Webmin that it is currently running, determined when it was added to the module or last refreshed. Assuming that you have some servers listed, below them are forms for editing and adding users and groups, followed by more forms for installing and finding modules and themes. 

### Registering a server
Before this module can be used to manage another host running Webmin, it must be added to its list of servers. To do this, follow these steps: 
 - Use the [Webmin Servers Index](/docs/modules/webmin-servers-index) module to add the remote system, and make sure you provide a username and password. This does not have to be done if you want to manage the master server itself though. 
 - In this module select the system from the menu next to the **Add server** button and then click it. The menu will usually include the special entry **this server**, which is the master system itself. It will never include any servers that have already been added though. Alternately you can select an entire group of servers from the menu next to **Add servers in group**. Groups can be defined in the [Webmin Servers Index](/docs/modules/webmin-servers-index) module as well. 
 - A page showing all of the hosts added and the numbers of modules, themes, Webmin users and groups on each will be displayed.  If a host cannot be contacted or the RPC login fails, an error message explaining what went wrong for that host will appear instead. 
 - Return to the module's main page, on which a new icon for each host should now be listed.

### Creating a new Webmin user
If you are familiar with using the [Webmin Users](/docs/modules/webmin-users) module to create a new local user, creating one on multiple systems with this module should be easy. The form uses has a slightly different layout, but all of the fields it contains have the same meanings. The rarely used ''Categorize modules?'' field does not exist though, nor does the ''SSL certificate name'' field which it does not make sense to set across multiple servers. 

To create a user on all managed systems, follow these steps : 
 - Click on the **Add User** button the module's main page to bring up the creation form. 
 - Fill in most of the fields just as you would in the [Webmin Users](/docs/modules/webmin-users) module. The fields to be careful of are explained in the steps below. 
 - The **Member of group** menu includes groups from all managed systems, and thus some may not exist on some servers. If the user added to a system that does not have the chosen group, it will be as though **None** was selected for that system. 
 - Similarly, the **Personal theme** menu includes themes that may not exist on some systems. If the user is added to a system that does not have the chosen them it will be as though **Server default** was selected. 
 - The **Modules** section lists all available modules from all servers. You can either select modules individually by control-clicking or shift-clicking on the lists, or use the **Select all**, **Select none** and **Invert selection** links below them. As with the theme, it is possible to select modules that only exist or are supported on some managed systems. 
 - When you are done filling in the form, hit the **Create** button at the bottom. This will bring up a page showing the success or failure of the module's attempt to add the user to each managed server. Once the process is complete, people will be able to login with the new account on any of your systems.

### Editing or deleting a Webmin user
Like in the Cluster Users and Groups module, when editing a user you can choose exactly which of its attributes to change. This is useful because the user may have been created independently on multiple systems without the benefit of this module, and thus may not have the same settings on all of them. For example, you can change a user's language on all systems without touching his personal theme, which may be different depending on how fast 
each server is. 

The steps to follow to edit a Webmin user are : 
 - On the main page, select the user's name from the menu next to the **Edit user** button. Hitting the button will then take you to an editing form.
 - In each of the fields that you want to edit, select **Set to** and enter a new value in the text box or menu next to it. The **Leave unchanged** option has the attribute's current value displayed next to it, taken from the server shown in the form's header.  The only exception is the **Username** field, which is just a text box that you can edit if you want to rename this user on systems that it exists on. 
 - The **Modules** section works slightly differently, as it allows you to add or remove selected modules from the user on all systems. This is useful if he has different modules available on different hosts, and you want to grant access to another one without disturbing those already assigned.  The available options in this section are available on different hosts, and you want to grant access to another one without disturbing those already assigned. The available options in this section ars available on different hosts, and you want to grant access to another one without disturbing those already assigned. The available options in this section are:
 
   - **Leave unchanged**
   
     The user's assigned modules will not be touched on any managed hosts.
   
   - **Only selected modules**
   
     The modules selected below will be granted to the user, overriding any that he currently has on all systems. Be careful with this option though, as the list will not have currently assigned modules selected by default.
   
   - **Add selected modules**
   
     Modules selected from the list below will be added to those that the user already has on all systems.
   
   - **Remove selected modules**
   
     Selected modules will be taken away from those assigned on all systems, if the user actually has access to them. As on the user creation form you can either choose modules from the list by clicking on them, or use the links below it to select a large number at once. 
 - Hit the **Save** button to start the process of updating the user. A page listing all hosts that he exists on will be displayed, along with the success or failure of the attempt to update on each. Generally a user modification should only fail if one of the managed servers is down, or if the user has been deleted.

Deleting a Webmin user is even simpler, although you should be careful not to remove the root or admin user on a managed system that the master server logs in as. Unlike the [Webmin Users](/docs/modules/webmin-users) module, this one will not stop you from doing things that can mess up your Webmin server, such as deleting the user you are currently logged in as. So be careful! 

The steps to remove a user are: 
 - Use the **Edit user** button on the main page to bring up the user's editing form. 
 - Hit the **Delete** button down near the bottom-right corner.  The user will be immediately removed from all systems that he exists on with no confirmation, and a page showing the results from each will be displayed.

### Creating a new Webmin group
Creating a group on multiple servers in this module is just like creating one locally in the [Webmin Users](/docs/modules/webmin-users) module, except that the module selection part of the form is slightly different.
To add a group, follow these instructions : 
 - Click on the **Add Group** button on the module's main page to bring up the group creation form. 
 - Enter name not used by any other user or group on any system into the **Group name** field. 
 - If this group should inherit modules and access control settings from some other, select it from the **Member of group** menu. All groups from all systems are listed, so it is possible that during the creation process the group will be added to a system on which its parent does not exist. If this happens, it will be as though **None** was selected. 
 - From the **Modules** lists select the modules that will be eventually assigned to members of this group, either by clicking on them or using the links below. 
 - Hit the **Create** button to begin creating the group. A page showing whether it succeeded or failed on each managed system will be displayed. A failure to create on one (because it is down or the RPC login is incorrect) will not effect the rest though. 
 - Once the group has been added you can assign users or other groups to it using this module. So that user details remain in sync across all servers, it is best to only use groups created like this that exist and are the same on all managed systems.

### Editing or deleting a Webmin group
As with users, when editing a group you can choose exactly which of its attributes to change in case the group differs between your managed systems. The steps to follow are : 
 - Select the group from the menu next to the **Edit group** button on the main page. Then click the button to bring up the group's editing form. 
 - To change the group's name, edit the **Group name** field. 
 - The **Members on server** field cannot be edited, but shows who belongs to this group on the system shown in the form's title. Membership may be different on other systems if you have created users outside of this module. 
 - To leave the parent group alone, select **Leave unchanged** for the **Parent group** field. Otherwise select **Set to** and choose a group from the menu next to it, or **None** if you don't want it to have any parent. This menu includes all groups from all systems, and so it is possible to choose one that does not exist on some managed hosts. If so, it will be as though **<None>** was selected. 
 - As when editing a user, the options and lists in the **Modules for members** field can be used to add, remove or set the modules for this group. See the **Editing or deleting a Webmin user** section for more detail. 
 - Hit the **Save** button at the bottom of the page to update the group on all servers that it exists on. A page listing all of the servers and the results of the update on each will be displayed. 

Deleting a group is just like deleting a user - instead of using the **Save** button on the group's editing form, click on **Delete** instead. However, the module will not let you delete a group that has any member users or groups on any servers.

### Editing the user or group ACL for a module
Webmin users and groups can be further restricted in what they can do with a particular module. This allows you to create a user who can edit only a single Apache virtual host or DNS domain for example, but not use the rest of the features of the [Apache Webserver](/docs/modules/apache-webserver) or [BIND DNS Server](/docs/modules/bind-dns-server) module. The actual access control options available different depending on the module that you want to restrict, and are covered in detail in the page for that module. 

The Cluster Webmin Servers module can also be used to configure access control for some user and module, but on multiple hosts at once instead of just one. Before doing this you should be familiar with the process of restricting access on a single system with the [Webmin Users](/docs/modules/webmin-users) module, as a very similar form is used. 

For module access control to work across multiple systems, each must have a very similar or identical configuration for the server that the restricted module manages. For example, it makes no sense to give someone access to a particular BIND zone if it does not exist on all servers. Unfortunately, some modules (such as [Custom Commands](/docs/modules/custom-commands)) use command IDs that are unique to a particular server, and so trying to give a user access to a particular command on multiple systems will not work, even if that command button has been created independently on each system.

To edit access control settings for a user or group to some module, follow these steps: 
 - On this module's main page, select the user and module from the menus next to the **Edit ACL for** button. The top button is for users, the bottom for groups. When you hit the button, an access control form that differs depending on the module chosen will be displayed. 
 - Follow the instructions in the appropriate page of the documentation to fill in the form. Many forms include lists of configuration objects (such as virtual servers, DNS domains or Samba shares) to select, which will always be taken from the master server, even if the user or module does not exist. This can cause problems if for example a DNS zone exists only on some other hosts, and it is not appearing in the menu of zones to allow access to because the list is being taken from the master. Unfortunately there is no way to avoid this at present. 
 - To update the configuration for this module and user on all managed systems, click on the **Save on all hosts** button. Alternately, you can change the settings just for the host shown in the title with the **Save only on this server** button. Either way the change will be immediately applied to the user or members of the group. 

Sometimes it is necessary to edit the access control settings on just a single system instead of all of them. You can do this by: 
 - Open the user's or group's editing page, using the **Edit user** or **Edit group** button on the main page. 
 - At the bottom of the form is a button labeled **Edit ACL for** with a menu next to it listing all of the modules that this user has access to and hosts that he exists on. Select the entry for the combination of module and host that you want to edit access control settings for and hit the button. 
 - Fill in the access control form that appears as you usually would. Unfortunately, any lists of Apache virtual servers, custom commands or DNS zones on the form will be taken from the master system, not the chosen host. 
 - Hit the **Save only on this server** button to update just the settings on the chosen system.

### Installing a module or theme
Probably this module's most useful feature is its ability to install a Webmin module or theme on multiple systems at once. Before you read on, make sure you have read the previous sections that explain what themes and modules are and how they can be installed on a single system. The process of installing on multiple hosts is very similar, and the form used is almost identical. 
These steps can be used to install a single `.wbm` or `.wbt` file containing one or more modules and themes. Unlike in the Webmin Configuration module, there are no separate pages for each. 
 - On the module's main page, find the right-hand form in the **Modules and Themes** section. 
 - If the file exists on the master server, select **From local file** and enter its full path into the adjacent text field. 
 - If the file is on the PC that your web browser runs on, select **From uploaded file** and use the **Browse** button to open a file dialog to choose the file. If this file is shared via NFS will some or all managed servers at the same location, the module will not bother to transfer it to each such host. 
 - If the file is on a web or FTP site somewhere, select **From ftp or http URL** and enter the complete URL into its text box. Normally only the master server will download the file and then use RPC to transfer it to each managed system, but if **Each server should re-download module** is selected then the managed hosts will re-download it themselves. This may be faster if the URL refers to a web server on your local network. 
 - Normally, Webmin will stop a module from being installed if any other modules that it depends on are not available, or if it is written for a later Webmin release. To prevent this, check the **Ignore module dependencies when installing** box. However, this may allow the installation of a module that will not work. It will not allow you to add modules that do not support the server's operating system though.
 - To control who this new module will be granted to, select the **Grant access only to users and groups** option and enter a list of Webmin user and group names into the adjacent text box. Alternately you can give it to every user on all systems by choosing **Grant access to all Webmin users**. 
 - Click on **Install Now** to go ahead with the installation. A page showing the progress of the module's download will be displayed (if necessary), followed by a list of error or success messages from each managed host. The installation will be done concurrently on all systems to speed up the process. The failure of one will not effect any of the others.

### Viewing and deleting a module or theme
You can bring up a page showing the details of an installed module or theme by selecting it from the menu next to the **Edit module** or **Edit theme** button on the main page and then clicking the button. The page that appears shows the module's name and directory, supported operating systems and modules that this one makes use of and is made use of by. The **Edit ACL for** button can be used to change the access control settings for the module for a particular user and system, as explained in the **Editing the user or group ACL for a module** section earlier in on the page. 

To actually remove the module or theme, follow these steps: 
 - Open the page showing its details, as explained above. 
 - The menu next to the **Uninstall module from** button determines which manages hosts it will be removed from. You can either select **All servers** to delete from every host, or a specific system. 
 - Click the button to display a confirmation page showing the module or theme to delete and size of the files that will be removed. However, if some other module on some system depends upon this one an error message will be shown instead explaining why you cannot remove it. 
 - To have access to the module taken away from all users and all access control settings returned to their defaults, check the **Remove from users and reset access control settings?** box. This can be useful if you plan to re-install the module in future and don't want it to be available to the same people that could use it before. 
 - Hit the **Delete** button to go ahead with the module or theme's removal. As with installation, the process will be done concurrently on all hosts and a page showing the results from each will be displayed.

### Refreshing user and module lists
If modules, themes, users or groups have been changed in any way on managed hosts without using this module, its cached information about the configuration of other systems will not longer be correct. This will not cause any serious problems, as the module can detect if a user that it thinks exists really does not when updating or removing that user for example. However, it is best to refresh the cached lists when necessary, which you can do by following these steps: 
 - On the module's main page, click on the **Refresh servers** button. 
 - A page listing each of the managed servers and showing the changes in the user, group, module and theme lists for each will be displayed. If for some reason a system cannot be contacted an error message explaining what went wrong will be shown next to that system's name instead.

### Listing and removing a server
This section explains how to view information about and the users, groups, modules and themes on a managed server, or remove it from the list of systems controlled by the module. The steps to follow are: 
 - Click on the icon for the server on the main page, or on a module or user details form. 
 - On the page that appears the details of the server itself are shown at the top, followed by lists of modules and themes, and then lists of users and groups. 
 - The entries in all of these lists can be clicked on to either bring up a module or theme details page, or a user or group editing form. In all cases the information about the chosen object is taken from this server. 
 - To remove the host from this module's control, click on the **Remove from managed list** button. The deletion will happen without confirmation, and you will be returned to the module's main page.
