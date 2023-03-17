---
title: "Webmin Users"
date: 2023-03-14
weight: 155
---

### About
A standard, out-of-the-box Webmin installation has only one user called `root` or `admin`, who can use every feature of every module. On a home or office system used by just one person, that is all you need. Even if your system has multiple users, there may be only one who needed to perform system administration tasks. 

[![](/images/docs/screenshots/modules/light/webmin-users.png "Webmin Users Screenshot")](/images/docs/screenshots/modules/light/webmin-users.png)

However, there are many situations in which the administrator may want to give some people access to a subset of Webmin's features. For example, you may have a person in your organization whose job is to create and edit DNS zones and records. On a normal Unix system, this person would have to be given `root` access so that he can edit the zone files and re-start the DNS server when necessary. Unfortunately, once someone is able to login as _root_ he has full control of the system and can do whatever he wants. 

Webmin solves this kind of problem by allowing you to create additional users who can login, but only access a few modules. You can further restrict what the user can do within each module, so that he cannot abuse its features to perform actions that he is not supposed to. Because Webmin still runs with full _root_ privileges even when used by a restricted user, it still has access to all the configuration files and commands that it needs. 

Some examples of the kind of access control restrictions that you can set up are : 
* Creating a user with the right to edit directives in only a given [Apache Webserver](/docs/modules/apache-webserver) that he owns. Global settings or directives in other virtual hosts cannot be edited.
* Giving a user the rights to edit and create Unix users with _UIDs_ within a certain range and with home directories under a restricted directory. Important system users such as `root` or `bin` cannot be edited or even viewed.
* Allowing a user access to only one [MySQL Database Server](/docs/modules/mysql-database-server), but not to other databases or user permissions. Similar access control can be set up for [PostgreSQL](/docs/modules/postgresql-database-server).
* Giving a user access to the [Squid](/docs/modules/squid-proxy-server) access control list, but not to other functions. The user could be allowed to apply his configuration changes, but not to start or stop the proxy server. 
* Creating custom commands and then giving a user the rights to run only some of them, but not create or edit any.
* Allowing a user to view and cancel print jobs in the [Printer Administration](/docs/modules/printer-administration) module, but not edit or create actual printers. 

Many of these rights would be impossible to grant using command-line tools without giving _root_ access to the entire system. Even programs like `sudo` are limited when it comes to allowing a user to edit only part of a file, or run a command with only certain arguments. 

You must be very careful when granting access to un-trusted Webmin users though, as even a small mistake in the access control configuration may allow the user to edit arbitrary files on your system or run commands as _root_. All it takes is a small hole for an attacker to sneak through and take total control of your system. Webmin's access control capabilities give you the power to lock down users, but only if used properly. 

Even though it is possible to create a user with access to only his own email, home directory and password, Webmin is not always the best way to provide this kind of single-user web interface. A superior program is Usermin, which was developed by the same author and shares much of the Webmin code and user interface. It is designed to give each Unix user access to only those things that he would be able to access at the command line, such as his email, home directory files and GNUPG configuration. Usermin runs most of its code with the permissions of the logged-in user, so there is far less chance of a user doing things that he is not supposed to, or even gaining _root_ access. See [Usermin Configuration](/docs/modules/usermin-configuration) for more details on how you can manage Usermin from within Webmin. 

### The Webmin Users module
If you want to create, edit or grant permissions to a Webmin user or group, it must be done in this module. When you enter it from the Webmin category, the main page displays all users and groups on your system and the modules that they have access to, as shown in the image below. If a user is a member of a group, his membership and only those modules that did not come from the group will be shown. 

On a normal Webmin system, only the `root` or `admin` user that you login as will appear, which access to all modules that are supported on your operating system.

### Creating a new Webmin user
If you want to create a new user who can login to Webmin, possibly with limited privileges, it must be created in this module. The steps to do this are: 
- On the module's main page, click on the *Create a new Webmin user* link above or below the list of existing users. This will bring up the creation form shown below.

[![](/images/docs/screenshots/modules/light/webmin-users-create.png "Create a new Webmin User Screenshot")](/images/docs/screenshots/modules/light/webmin-users-create.png)


- Enter a login name into the **Username** field. The name cannot be already in use by any other user or group. 
- To make the user a part of a group, select it from the *Member of group* field. Any modules that the group has will be granted to the user in addition to modules that you select on this page, and any access control restrictions that apply to the group in those modules will apply to the user as well. See the *[Creating and editing Webmin groups](#creating-and-editing-webmin-groups)* section for more information on how to add new groups to the list. 
- To give the user a normal password, select **Set to** from the menu in the **Password** field and enter it into the adjacent field. If the new user has the same name as a Unix user, you can select **Unix authentication** instead to have Webmin use PAM or read the /etc/shadow file to validate the user. To prevent the user from logging in at all, select **No password accepted**.  This might be a good idea when creating a user who will have limited privileges, so that he cannot login until you have finished restricting his access. 
- To have Webmin use a different language for the user than the global default, select one from the **Language** field menu. 
- To have Webmin use a different locale for the user than the global default, select one from the **Locale** field menu. 
- In most themes, module icons on Webmin's main page are displayed under categories. If this new user is going to be granted access to only a few modules, this is not really necessary and so you can change the **Categorize modules?** field to **No**. 
- To have the Webmin user interface displayed using a different theme for the user, set it in the **Personal theme** field. 
- To limit the addresses from which the new user can login to Webmin, change the **IP access control** field to *Only allow listed addresses*. Then fill in the text box next to it with hostnames, IP addresses, network/netmask pairs or wildcard hostnames (like _*.foo.com_). Note that these restrictions are checked only after any global IP access control set in the Webmin Configuration module have been passed. 
- Select all the modules that you want the user to have access to in the **Modules** section. 
- When done, click the **Save** button to have the new user created.  You will be returned to the module's main page, and he will be able to login immediately. 

To further restrict what the new user can do in each module that you have granted him access to, see the *[Editing module access control](#editing-module-access-control)* section below. 

You can speed up the process of creating a new user who has the same attributes and access permissions as an existing user by using the module's cloning feature. To clone a user, the steps to follow are: 
- Click on the username of the existing user that you want to clone on the module's main page. 
- Click on the **Clone** button at the bottom of the editing form. This will take you to the creation form shown in the screenshot above, but with most fields already filled in with the attributes of the original user. 
- Fill in the **Username** field and set the **Password**, as they do not get copied from the cloned user. You can also adjust the values in any of the other fields. 
- When done, click the **Create** button. The new user will receive a copy of all module access control settings from the original user, but they will not be updated if the original user is changed in future. 

If you want to create many users with access to the same modules and the same access control settings, it is better to create a group and assign the users to it. That way you can change the settings for all members at once by just editing the group. 

### Editing a Webmin user
You can change the username, password, language or any other attribute of a Webmin user (including the one you are logged in as) using this module. To edit a user, the steps to follow are: 
- Click on his username on the module's main page. This will bring you to an editing form, similar to the one shown in the image above.
- By default, the password will be left unchanged. To edit it, select **Set to *from the *Password** field menu and enter a new password into the field next to it. 
- Change any of the other fields on the form, as explained in the **Creating a new Webmin user** section. You can even move the user to another group, which will cause him to lose access to all modules in the original group and gain access to those in the new group. If you are editing yourself, Webmin will not allow you to take away access to the Webmin Users module.  This is to protect you from locking yourself out of the module and not being able to grant yourself access back again. 
- When you are done, click the **Save** button to have the changes applied immediately. If the username or password was changed and the user is currently logged in and Webmin is not in session authentication mode, he will have to login again. 

You can delete a user by clicking the **Delete** button at the bottom of the editing form, which will also take effect immediately. Webmin will not allow you to delete yourself though.

### Editing module access control
Many Webmin modules allow you to further restrict the actions that each user can perform using them. The actual access control options are different for each module, and are documented in detail in the **Module access control** section of the page that covers it. This section only describes the common process that you need to follow to configure what a user (or group) can do with a particular module: 
- On the Webmin Users main page, find the user or group that you want to restrict and click on the name of the module next to his name that you want to edit the restrictions for. This will bring up the access control editing form, an example of which is shown in the image below. That screenshot is from the Users and Groups module, so if you select a different module the available options will not be the same. 
- To stop the user from changing the module's configuration, set the **Can edit module configuration?** field to **No**. This should always be done, as in most modules the configuration settings could be changed to allow the user to gain **root** access or otherwise escape the access control restrictions that you have set up. 
- Change other options on the form to restrict the user in whatever way you wish. Each module covered in this book has a section in its chapter that explains exactly what the fields mean, and gives examples of how to set up common types of access control. 
- Click the **Save** button to make your changes immediately active and return to the module's main page. 

Not all modules allow you to limit what a user can do, as it would not make any sense. For example, the [[Software Packages]] module does not allow access control restrictions to be configured. Its primary purpose is the installation of new packages, and any user with the rights to install a package could build and install his own that gives him root access. In modules like these, only the **Can edit module configuration?** option appears on the access control form. For modules that have no options other than this, there is no **Module access control** section in their chapter of the book. 

At the start of the list of modules next to every user is an entry called **Global ACL**. If you click on this, it will take you to an 
access control form that allows the editing of restrictions that apply in all modules. The fields and their meanings are: 
* **Root directory for file chooser** There are many fields in Webmin for entering a file or directory name, and next to most of them is a button that pops up a simple fill chooser window. Users will not be able to use this file chooser to list directories outside whatever path you enter into this field. By default, it is set to / so that the entire filesystem can be browsed. This option only controls which directories can be browsed using the file chooser. A user can still enter ANY path into a filename field manually, unless the module has its own access control restrictions. 
* **Users visible in user chooser** In most Webmin modules when a username field is displayed, next to it is a button that pops up a window for selecting either a single or multiple users. This option allows you to control which users appear in that pop-up window, so that a particular Webmin user cannot see all of the Unix users on your system. This access control option does nothing to stop the user from manually entering any username that he chooses - it just limits that list the appears in the pop-up window.
* **Groups visible in group chooser** This option works in exactly the same way as the one above, but applies to the pop-up group selection window instead.
* **Can send feedback email?** When using the Webmin theme that is enabled by default, a Feedback button appears on every page in the upper-right corner. Changing this option to **No** will remove the button, while changing it to **Yes, but not with config** files will prevent the user from sending feedback with the **Include module configuration in email** option selected. Because all feedback goes to the author of Webmin by default, disabling it makes sense for users other than the master administrator. 
* **Can accept RPC calls?** Webmin has its own RPC (remote procedure call) mechanism that is used by the cluster modules, System and Server Status and others modules. Any client program that makes an RPC call to a Webmin server must first login as a normal user using a web browser client would. However, an RPC client can access all of the features of Webmin, edit arbitrary files and execute commands as root - regardless of any access control settings.  For this reason, users without full access to Webmin should have this option set to **No**. The default is **Only for root or admin**, which means that only if the user is called root or admin can it be used to login for RPC. Because the root and admin users typically have full access to Webmin anyway, this is not a security problem.  However, if you create a new user with one of these two names and grant him only limited Webmin access, make sure this option is set to **No**. 

For almost all Webmin users, even those that are granted only limited access to some modules, the default Global ACL options will work fine and do not need to be changed.

### Creating and editing Webmin groups
If you want to create a large number of users who will all have access to the same modules with the same access control options, the best solution is to create a Webmin group. Like users, groups have access to a subset of the available Webmin modules and have access control permissions in those modules. If you change the available modules or permissions for a group, those of all member users will change as well. 

A group can itself be a member of another group, which it will inherit all allowed modules and access control settings from. If parent group is changed in any way, those changes will flow through to all member groups and their member users. There is no limit to the number of levels of group nesting that you can create. 

To create a new group, the steps to follow are: 
- On the Webmin Users module main page, click on the *Create a new Webmin group* link near the bottom of the page under the **Webmin Groups** section. This will take you to the group creation form.

- Fill in the **Group name** field with a unique name that is not used by any other existing user or group. 
- To make this new group a member of an existing one, select it from the **Member of group** menu. 
- Select all the modules that you want members of this group to have access to from the **Members' modules** list. Those from any parent group will be automatically included. 
- Click the **Save** button to have the new group created, and your browser returned to the module's main page. 
- Configure access control settings for members of the group by clicking on module names next to the group name on the main page, as described in the **Editing module access control** section above. 
- You can now create new Webmin users or edit existing ones to become members of the new group. 

Once a group has been created, it can be edited by clicking on its name from the table under **Webmin Groups** on the module's main page. This will take you to the group editing form on which you can change any of its attributes, before applying them with the **Save** button. Or you can delete the group altogether with the **Delete** button, as long as it does not have any member users or groups.

### Viewing and disconnecting login sessions
When Webmin is in session authentication mode (as it is by default), it keeps track of all currently logged-in users. You can view this information and cancel sessions that seem to be invalid by following these steps: 
- Click on the **View Login Sessions** icon at the bottom of the Webmin Users module main page. 
- On the page that appears, the _ID_, login name and connection time of each active session will be listed, with the newest shown first. It is quite possible for several sessions to exist for the same user, as many people do not bother to properly logout of Webmin. However, old sessions will be automatically removed after 1 week. 
- To view the actions performed in some session, click on the **View logs** link in the last column. This will take you to a list of actions in the [Webmin Actions Log](/docs/modules/webmin-actions-log). 
- To cancel a session, click on its _ID_. This will immediately log the user out, but will not kill any CGI programs that Webmin is currently running for him.

### Module access control
Interestingly, the Webmin Users module has its own set of access control options that can be used to determine which other users a particular Webmin user can edit. This is typically used to give a sub-administrator user the rights to create and edit only a subset of Webmin users, and to grant them access to only a few modules. To set up this kind of access, the steps to follow are: 
- In the Webmin Users module, click on a user you want to edit, and then inside of _Available Webmin modules_ accordion click on _Webmin Users_ next to the name of the sub-administrator you want to restrict. 
- Change **Can edit module configuration?** to **No**. 
- Set the **Users who can be edited** option to **Selected users**, and choose those accounts that you want the sub-administrator to be able to edit. 
- Change the **Can grant access to** field to either _Selected modules_, and choose from the list below the modules that the administrator is allowed to grant to new or edited users.  There is not much point choosing modules that the sub-admin cannot already access. 
- Change **Can rename users?**, **Can edit module access control?**, **Can request certificate?**, **Can configure user synchronization?**, **Can configure unix authentication?**, _Can view and cancel login sessions?_ And **Can edit groups?** To **No**. All the other yes/no fields can be set to **Yes**. 
- Change the **Newly created users get** field to *Same module access control as creator*. Because the sub-administrator is not allowed to edit the access control settings of modules that he grants to other users, they will always get the same settings that he does. 
- To force all new and edited users to be a member of a single group, change the **Can assign users to groups** field to **Selected** and choose the group from the list below. Or to prevent the sub-admin from choosing any group, select the **&lt;None&gt;** option.  It may make sense for you to allow the creation of users who must be members of a group which has been set up with the appropriate restricted modules and permissions. If so, in step 4 you should not select any modules at all from the list so that only those from the group are available to created users. 
- Click the **Save** button to return to the module's main page. 
- If you are not forcing all new users to be a member of a particular group, make sure that the access control settings in other modules for the sub-administrator have been set correctly.  They will be inherited by any new users that he creates. 

The Webmin Users access control settings can also be configured to allow a user to change some of his own settings, but not edit other users or grant himself additional privileges. To set this up, the steps to follow are: 
- Click on Webmin Users next to the name of the user or group to whom you want to grant the rights to edit himself. Naturally, the user must have already been granted access to the module. 
- Change **Can edit module configuration?** to **No**. 
- Set the **Users who can be edited** option to **This user**. 
- Set the **Can grant access to** field to **Selected modules**, but do not select any from the list below. This will prevent the user from giving himself any additional module access. 
- Change **Can request certificate?**, **Can change language?**, **Can change categorization?** and **Can change personal theme?** to **Yes**, and all of the other yes/no fields to **No**. 
- Change **Can edit groups?** to **No**, and set *Can assign users to groups?* to **Selected** but do not select any from the list. 
- Finally, click **Save**. The Webmin user will now be able to use the module to change only his own password, language, theme and categorization mode, and request a client-side SSL certificate.

### Configuring the Webmin Users module
This module has several options that can be configured by clicking on the **Module Config** link on the main page.
