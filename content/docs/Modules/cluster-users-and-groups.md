---
title: "Cluster Users and Groups"
date: 2023-09-30
weight: 925
---

### About
In this page the Webmin module for managing users and groups across multiple systems is explained. 

### The module
Before reading this chapter you should be familiar with Webmin's cluster management capabilities, explained in the introduction to [Cluster Software Packages](/docs/modules/cluster-software-packages). All of the cluster-related modules (this one, [Cluster Software Packages](/docs/modules/cluster-software-packages) and [Cluster Webmin Configuration](/docs/modules/cluster-webmin-configuration)) make use of the [Webmin Servers Index](/docs/modules/webmin-servers-index) module and RPC to control other systems. You should also read a chapter which covers the [Users and Groups](/docs/modules/users-and-groups) module, as many of the forms and pages in this module are similar to that one. 

This module allows you to manage Unix users and groups on multiple systems from a single interface. If you have a large number of hosts on your network and want people to be able to login to all of them, some mechanism is needed for creating Unix accounts on each system. Using this module is far easier than manually creating an account on each system. 

There is a widely available and more commonly used method of managing users, groups and other services across multiple machines though NIS, covered in [NIS Client and Server](/docs/modules/nis-client-and-server). NIS client systems query a master server for information as well as reading their `/etc/passwd` and `/etc/group` files, which makes the accounts available on all clients. NIS works well and is easily configured from within Webmin, but has some down sides. If the master server goes or network goes down, client systems will be unable to look up user information, causing logins and many programs to hang. And because clients must frequently query the server, it does not work as well over a slow network. 

This Webmin module on the other hand updates the files on each client system so that users and groups remain synchronized. The client operating system does not need to do anything special to make use of centrally managed users - to it, they appear just like other users. However, this means that a loss of synchronization can occur if a user is modified directly on a client system instead of through the master server. 

Another useful feature of this module that NIS lacks is its ability to create home directories on managed servers. This can be useful if your systems do not share common home directories via NFS, which can be impractical on a wide-area network. The module can also set up users in the Samba password file or a proxy authentication file on managed servers, just like the normal [Users and Groups](/docs/modules/users-and-groups) module can locally. This is very handy if your organization has multiple Samba servers each with its own password list (although Samba can be configured to query a central server for passwords instead). 

The Cluster [Users and Groups](/docs/modules/users-and-groups) module requires that all managed systems have the same user file formats. Unfortunately some Unix variants use just an `/etc/passwd` file, some use an `/etc/shadow` file as well, and some BSD systems use the `/etc/master.passwd` file for storing users. Each of these different formats stores different information about users, which the module cannot handle. The result is that a cluster cannot contain both Linux and FreeBSD systems, or both Solaris and AIX boxes as they use different formats. However, a network of Linux and Solaris hosts could be managed centrally because both operating systems use the `/etc/passwd` and `/etc/shadow` files, which is the most common format. 

Like the [Cluster Software Packages](/docs/modules/cluster-software-packages) module, this one stores lists of users and groups on each managed host on the master system. This speeds up searching and editing, but introduces the possibility that the master's information may get out of sync with the real lists of users and groups on managed hosts. This can happen if a user is added, deleted or modified directly on one of the hosts instead of through this module. Fortunately it is easy to re-synchronize if this happens (using the **Refresh user and group lists**) button. Refreshing also happens automatically every time a user is added, deleted or updated on a managed server. 

The module can be found in Webmin under the Cluster category. When you click on its icon a page like the one shown in the screenshot below will be displayed. At the top are icons for all of the managed servers, and below them fields and buttons for finding and adding users and groups. These fields will only appear if at least one server has been registered though. 

[![](/images/docs/screenshots/modules/light/cluster-users-and-groups.png "Cluster Users and Groups Screenshot")](/images/docs/screenshots/modules/light/cluster-users-and-groups.png)


### Registering a server
Before this module can be used to manage users and groups, that system must be added to its list of servers. To do this, follow these steps:
- Use the [Webmin Servers Index](/docs/modules/webmin-servers-index) module to add the remote system, and make sure you provide a username and password. This does not have to be done if you want to manage the master server itself though. 
- In this module select the system from the menu next to the **Add server** button and then click it. The menu will usually include the special entry **this server**, which is the master system. It will never include any servers that have already been added though. Alternately you can select an entire group of servers from the menu next to **Add servers in group**. Groups can be defined in the [Webmin Servers Index](/docs/modules/webmin-servers-index) module as well. 
- A page showing all of the hosts added and the number of users and groups on each will be displayed. If a host cannot be contacted or the RPC login fails, an error message explaining what went wrong for that host will appear instead. 
- Return to the module's main page, on which a new icon for each host should now be listed.

### Creating a new user
The form for adding a Unix user to multiple systems is almost identical to the one in the [Users and Groups](/docs/modules/users-and-groups) module for adding a user locally. If you are familiar with that module, using this one should be a breeze. Just follow the steps below: 
- On the module's main page, click on the **Add User** button in   the bottom half of the page.  
- Fill in the user creation form that appears just as you would   when creating a local user. The **User ID** will be set by default to an ID that is not in use on any system, and so should not need to be changed.  
- The only field to be careful of is **Primary group**, as the group ID for the entered group name will be looked up on the master system. The same group with the same ID should exist on all of the managed hosts as well.  
- The **Secondary group** list includes groups from all systems. If you select one that only exists on some hosts, the user will only be added to that group for the hosts that it exists on.  
- Near the end is a field labeled **Do above file operations on**   which determines if home directory creation and file copying is done on just one host in the cluster or all of them. If your   managed systems share home directories via NFS you should select **One server** so that it is only created once. Otherwise choose **All servers** so that the user's directory is created on each of them. 
- If **Create user in other modules** is set to **Yes**, the user   will be added to the Samba password file, Squid user list and so on for each system.  
- Hit the **Create** button to go to a page showing what was done on each managed host, as long as there were no errors in the form. If for reason a host cannot be contacted or logged into, an error message will appear for that host instead - but all the rest will be updated.  

This process cannot be used to add a user that already exists on some of the hosts, as an error message to that effect will be displayed when you hit **Create**. Instead you should use the module's synchronization 
feature, covered in the **Synchronizing users and groups** section, which can copy user details from one host to others.

### Editing an existing user
Editing a user on multiple servers is slightly more complex than adding one, as you can control exactly which of the user's attributes will be changed. This is necessary because the user may not have the same details on each of the managed systems, and you may want to set some attribute (such as the real name) while leaving another that differs on various systems (such as the shell) intact. 

For this reason, the user editing form, is similar to the form in the [Users and Groups](/docs/modules/users-and-groups) module, but has an additional **Don't change** option for each field. The current value of that attribute from the host shown at the top of the page is displayed so that you have some idea of what it is set to, at least on one system. 

With this in mind, you can edit a user by following these steps: 
- Scroll down to the **Find users whose** form on the main page, which is used to search for users to edit. 
- If you know the name of the user, just select **Username** from the first menu, **equals** from the second and enter the name into the third text box. Hitting **Find** will bring up the user's editing form, assuming that he exists. If not, the form can be used to find users matching some criteria. Select the attribute to search on from the first menu, the type of search to perform from the second and enter some text or Perl-style regular expression into the text field. Hitting **Find** will take you to a page listing all users that match, and clicking on one will bring up its editing form. 
- Once you make it to the editing page, choose the **Set to** option for each of the fields that you want to change and enter or select this will cause the user to be re-named on all managed servers. 
- Because the user may be a member of different secondary groups on different systems, the **Secondary groups** field for choosing which he belongs to is more complex than in the [Users and Groups](/docs/modules/users-and-groups) module. To leave his secondary membership unchanged, select **Don't change**. To add him to one or more groups on systems that have them, select **Add to groups** and fill in the text field next to it. To remove him from groups on systems that he is a member, select **Remove from groups** and enter the names of those groups into its text field. 
- In the **Upon save** section the **Do above file operations** on field determines if any home directory renaming or file UID changes are done on just one host in the cluster or all of them. You should select **One server** if your systems use NFS to share home directories, or **All servers** if they do not. 
- If **Modify user in other modules** is set to **Yes**, the user will be updated in the Samba password file, Squid user list and so on for each managed system. This is not necessary and wastes time if the user was never added to other modules when created in the first place. 
- To go ahead the with modifications to the user that you have selected, click the **Save** button at the bottom of the form. A page listing all hosts that the user exists on and the actions taken will be displayed. Any errors encountered connecting to a particular host will be shown as well, along with any problems encountered updating the user (such as it no longer existing on the host). A failure updating one host will have no effect    on the others though. 

At the bottom of the user editing form is a list icons, one for each of the systems that the user exists on. You can click on one of them to bring up the server page covered in the "Listing and removing a server" section. 

### Deleting a user
Deleting a user from multiple systems is comparatively easy. As with the [Users and Groups](/docs/modules/users-and-groups) module you must be careful when removing a user, as his home directory and everything that it contains will be deleted as well. The steps to delete a user are: 
- First bring up the editing form for the user that you want to get rid of, as explained in the **Editing an existing user** section. 
- Click on the **Delete** button in the bottom-right corner of the page to go to a confirmation page. 
- If NFS is being used to share home directories between all your systems, select **One server** for the **Delete home directory if exists on** field. Otherwise choose **All servers** to force the remove of the directory on each system. 
- To have the user removed from the Samba password file, his mail file deleted, his Cron jobs removed and so on for each server, select **Yes** in the **Delete user in other modules** field. 
- If you want to preserve the user's home directory, click on **Delete User**. To remove it along with the account, click on **Delete User and Home Directory** instead. Either way a page listing each server that the user exists on, the tasks performed on each and any errors encountered will be displayed. 

### Creating a new group
The process for adding a group to all of your managed servers is identical that for adding a group locally in the [Users and Groups](/docs/modules/users-and-groups) module. Just follow these simple steps:
- On the module's main page, click on the **Add Group** button. 
- Fill in the creation form that appears just as you would in the [Users and Groups](/docs/modules/users-and-groups) module. The only differences is that the **Members** field can contain users from any of the managed systems. The **Group ID** will be set automatically to an ID not in use on any system. 
- Hit the **Create** button to add the group. A page showing the module's progress as it updates each managed server and any problems encountered will be displayed. Failure adding the group to some system will not effect the rest. 

Once the group has been created you can create or edit users to make them primary members of it. This should only be done for groups that are identical on all managed systems, such as those created by following the steps above. 

### Editing an existing group
Editing a group is similar to editing a user, in that you can choose which of the group's attributes to change. The group editing form is similar to the one in the [Users and Groups](/docs/modules/users-and-groups) module, but has extra **Don't change** and **Set to** options for each field. The screenshot below shows an example. 

The steps to follow to change the details of a group are: 
- If you know the exact group name, just enter in into the text field in the **Find groups whose** form on the module's main page and hit the **Find** button. If not, a group can found by selecting an attribute to search on and a match type in that same form, just as you can when searching for users. The **Editing an existing group** section earlier in the chapter explains more. 
- On the editing page for the group, select **Set to** for any fields that you want to change. Next to the **Don't change** option for each will be the current value, taken from the system shown at the top of the page. 
- The **Members** field is different to the one on the group editing form in the [Users and Groups](/docs/modules/users-and-groups) module, because a group's members may differ on different systems in your cluster. You can either select **Don't change** to leave membership alone, **Add users** to add the users entered in the adjacent text field (if they exist on each system), or **Remove users** to remove the specified users (if they are members on each system). 
- As when editing a user, the **Do above file operations on** field determines if any necessary group ID changes on files are done just on one managed system or all of them. If your hosts all have separate home directories that are not shared with NFS, or if All files was chosen for the **Change group ID on files?** field, you should choose **All servers**. Otherwise stick with **One server**. Of course, the choice is irrelevant if the group ID is not being changed. 
- Hit the **Save** button to begin the process of updating the group. A page showing the tasks performed on each system that the group exists on will be displayed. If an error of some kind occurs it will be shown under the effected system's name, but will not prevent the group from being updated on other hosts. 

At the bottom of the group editing page is a list of icons for the systems that this group exists on, just like on the user editing page. Clicking on one will take you to the host form covered in the **Listing and removing a server** section. 

### Deleting a group
Removing a group is must safer than removing a user, as not files are deleted. The module will even stop you from deleting a group if it has any primary members on any systems, just like the normal [Users and Groups](/docs/modules/users-and-groups) module does for your local system. The steps to remove a group are:
- Use the **Find groups whose** form on the module's main page to get to the group editing page, as explained in the **Editing an existing group** section. 
- Click on the **Delete** button below the form. As long as no primary members exist, a confirmation page will be displayed asking if you really want to delete the group. 
- Hit the **Delete Group** button to go ahead. As usual, the progress of the deletion and any errors encountered on each host that the group exists on will be displayed. 

### Refreshing user and group lists
If users or groups are added or changed in any way on one of the managed servers without using this module, its cached lists will no longer be accurate. This may cause the module to attempt the modification or deletion of users that no longer exist, or to create a user on a system that it already exists on. Fortunately the caches can be re-synchronized as follows: 

- Click on the **Refresh user and group lists** button at the bottom of the module's main page. 
- A page listing all of the systems managed by the module will be displayed, along with the number of users and groups added or deleted from each that are not in the local cache. If for some reason a host cannot be 
contacted, an error message will be displayed - but this will not effect the refreshing of the other systems. 

### Synchronizing users and groups
Synchronization is possibly the module's most powerful feature, but also one of the trickiest to use. It can be used to create users or groups that exist on only one system on all of the other systems in your cluster. This is handy if certain users were created outside of this module on only one host and you want to now make them available on all hosts. It is also useful if a new host is added to the cluster and you want to give it all of the users and groups that the other systems have. 

However, synchronization can have unexpected and possibly harmful effects if you use it incorrectly. For example, simply synchronizing all users on all hosts would be a bad idea, as it could trigger the creation of system users like uucp and squid on hosts that do not have them. For this reason, you should make use of the **Only show what would be done?** field to see what the module will do with your synchronization selections before 
applying them for real. 

The synchronization feature will only create new users and groups, not update the details of those that already exist. Neither will it delete users or groups - instead, it assumes that a mismatch between the users that exist on one system and those that exist on another indicates that users need to be created. However, the module's other features for editing and deleting users can be used to update users on some systems to match another, or delete users that only exist on some systems. 

To create users that only exist on some of your systems, follow these steps: 
- Click on the **Synchronize** button in the lower-right corner of the module's main page. This will take you to the form shown in the image below. 
- The **Servers to synchronize** field determines which systems are checked as part of the process. You can either choose **All servers** to synchronize every managed system, or choose **Selected** and select some of the systems in the list below. In the latter case, specified users that exist on any system may be added to those chosen. 
- The **Users to create** section lets you specify which users to synchronize. The available options are:

    - **All missing users**
    
      This mode should never be used unless all your systems are running the exact same operating system, as it will synchronize all users, including system users like `squid` and `uucp`.

    - **No users**

      This option tells the module not to synchronize any users, and thus does nothing.

    - **Only users** 

      When this option is chosen, only the users whose names are entered in the adjacent text field will be considered for synchronization. If you know exactly which users need creation, this is the option to use.

    - **All except users**

      This option should be used with care (like **All missing users**), because it synchronizes all users except those listed in the adjacent text field.

    - **Users with UID in range**
    
      This option tells the module to only synchronize users whose UIDs are within the range entered in the adjacent text fields. *Users with primary group *When this option is chosen the module will only consider for synchronization users whose primary group matches the group name entered in the field next to it. 
- Leave **Groups to create** set to **No groups**. 
- Change the **Only show what would be done?** field to **Yes**, so that you can do a test run first. 
- If your systems share home directories with NFS, the *Create home directories?* and **Copy files to home directories?** fields can be set to **No**, because the users' directories  should already exist. However, if each system has its own filesystems you should choose **Yes** instead to force the creation of a new empty directory for each added user. 
- To have the new users added to the Samba password file, Squid  user list and so on for each system they are created on, change the **Create user in other modules?** field to **Yes**. Unfortunately, because users' unencrypted passwords are not available when synchronizing, Samba users will not be created properly. 
- Hit the **Create Users and Groups** button. A page listing all of the selected systems and the actions that need to be performed on each (if any) will be displayed. Check to make sure that only what you expect will be done. If a host already has all of the specified users the message *Users and groups are in sync* will be displayed.  Use you browser's back button to return to the synchronization form and change the **Only show what would be done?** field to **No**. 
- Click on **Create Users and Groups** again to create the users for real. A page listing the selected systems and the actions that are actually being performed will be displayed, along with any errors that occur. As usual, a failure on one host will not effect the rest. 

Missing groups can be created in almost exactly the same way. The only difference is that you should leave **the Users to create** field set to **No users**, but specify the groups to synchronize in the **Groups to create** section. 

### Listing and removing a server
This section explains how to view information about and the users and groups on a managed server, or remove it from the list of systems controlled by the module. The steps to follow are: 
- On the module's main page or a user or group editing form, click on the icon for the system that you want to view. This will take you to a page showing its operating system, and listing the names of all known users and groups on the server. 
- To view the details of or edit a user, click on its name in the list. This will bring up the usual user editing form, but the current attributes displayed next to the **Don't change** options taken from this server. You can also view and edit a group by clicking on its name on the server's page. 
- To remove the system from this module's control, click on the **Remove from managed list** button. No confirmation will be requested and you will be immediately returned to the module's main page. No data is lost though, as you can re-add the system at any time.
