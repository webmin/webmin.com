---
title: "Users and Groups"
date: 2023-04-01
weight: 345
---

### About 

This page is devoted to the Users and Groups module, which allows you to create and manage Unix user accounts and Unix groups. 

### Introduction to Unix users and groups
On Linux and other Unix operating systems, a user is an account who can login to the system via [SSH](/docs/modules/ssh-server), [FTP](/docs/modules/proftpd-server) or at the console. 
Users can also receive email and own files on the server's local filesystems. Each user has a login name, a password, and a home directory in which all its files are stored. Users also have several additional attributes such as a real name, shell (the program that is run when the user logs in) and expiry date. 

Each user is a member of at least one group, called their primary group. In addition, a user can be a member of an unlimited number of secondary groups. Group membership can be used to control which files a user can read and edit. For example, if two users were working on the same project you might put them in the same group, so that they could both edit a particular file which other users could not. 

Every system will have several standard user accounts like _root_ and _nobody_ that are created when the system is installed, although most of these (except for _root_) cannot be used to login. If your server is to be used by more than one person, you will need to create an additional user account for each person so that they can keep their files and email separate. Even if you are the only person who uses your machine, it is a good idea to create a user account for yourself that you use to login with, instead of using the root account. 

Depending on your operating system, user and group information will be stored in different files in the `/etc` directory. On modern versions of Linux, `/etc/passwd` and `/etc/shadow` are used to store user details, and `/etc/group` for group details. The Users and Groups module works by directly editing those files, not by calling any external programs or functions. This means that if you are using [NIS](/docs/modules/nis-client-and-server) or storing users in an [LDAP server](/docs/modules/ldap-server), this module is not for you. 

### The Users and Groups module
The Webmin module Users and Groups which is found under the System category can be used to create, edit and delete all the Unix users and groups on your system. You should always be careful when using this module to edit existing system users like _root_ and _daemon_, as changing or deleting them could stop your system from working. Some users have their home directory set to `/` (the root directory), so deleting such as user would cause 
all the files on your system to be deleted! 

In addition to managing the Unix user accounts on your system, this module can also effect user settings in other modules. For example, Samba has its own list of users and passwords that should be kept in sync with the Unix password list. Webmin can handle this for you automatically using the **Modify user in other modules** option that appears on the user creation, editing and deletion forms. However, you must enable this in each other module that you want 
automatically updated. 

Once you enter the module, the main page lists all the users that currently exist on your system in one table, and all the groups in another, both shown below. If there are too many users or groups to sensibly display in a table, then a small form allowing you to search for a user or group will be displayed instead. 

[![](/images/docs/screenshots/modules/light/users-and-groups.png "Users and Groups Screenshot")](/images/docs/screenshots/modules/light/users-and-groups.png)

### Creating a new user
To create a new Unix user, complete the following steps : 
- Click on the **Create a new user link** above or below the table of existing users. A form for entering the details of the new user will appear, as shown in the screenshot below. 
- The **User ID** field should generally be left unchanged, as it is worked out for you by Webmin. If you set it to the same user ID as some other user, they will be able to access each other's files. This is generally not a good idea. 
- In the **Real name** field, you should enter the user's full name, like _Jamie Cameron_. 
- Every user has a home directory, in which he stores his personal documents and preference files. In the **Home directory** field, you should enter a directory that does not exist yet, like `/home/jcameron`. When the user is created, this directory will be created and its ownership granted to the new user.  If Webmin on your system offers an **Automatic** option for the home directory, it is generally best to stick with that. 
- The user's shell is a program that is run when he makes a text mode login of some kind (such as via SSH), or opens a shell prompt after logging in graphically at the console. The shell is responsible for running the commands that you type (such as ls and cat), running scripts on login and logout and providing an interface for command editing. Shells like `bash` and `tcsh` are easier for users to use, because they allow the up and down arrows to be used to scroll through previous commands, and the tab key to auto-complete commands and filenames. In some cases, you might not want a user to be able to make a shell login at all, for example, if the user is only meant to be able to read and send email. In that case, his shell should be set to `/bin/false` , which is a program that does nothing and exits immediately.  You should select whatever shell you want the user to have from the list in the **Shell** field, or if your choice is not on the list, select the **Other** option and enter the path to the shell in the field below. 
- For the **Password** field, you have four choices: 
  - **No password required** - The user can login without needing to enter any password.
  - **No login allowed** - The user can never login.
  - **Normal password** - You get to enter the user's password.
  - **Pre-encrypted password** - You must enter a password that is already encrypted, such as one taken from the `/etc/shadow` file on another system.
  
  Generally you will want to use the **Normal password** option.  Note that on many operating systems, only the first 8 characters of the password are actually used. 
- On most systems, a set of inputs under the heading **Password options** will be available. The first of these is the **Expiry date** -- if you want the user to be unable to login after a particular date, fill in this field. 
- The **Minimum days** field is the number of days since the user was created or the password last changed that the user must wait before changing it again. Leave it blank to allow changing as soon as the user wants. 
- The **Maximum days** field is the number of days after the user was created or the password last changed that the password expires and must be changed. Effectively, a user with this option set will be forced to change his password periodically, which is good for system security. Leave it blank to prevent the password from ever expiring. 
- The **Warning days** field is the number of days before the password expiry date that the user will be warned at login that his password is about to expire. If left blank, the user will not know that his account has expired until he tried to login and is forced to choose a new password. 
- The **Inactive days** is the number of days after the password expires that the entire account will be disabled, if the user has not chosen a new password. If left empty, the account will never expire. 
- For the **Primary group**, either select an existing group or enter the name of a new one, which Webmin will create for you. 
- If you want the user to be a member of more than one group, select some of the groups from the **Secondary group** list. 
- If you want the user's home directory to be created, select the **Create home directory?** option. If the directory does not already exist, you should select this as well as **Copy files to home directory?** so that the user gets a basic set of preference files like .profile and Desktop. 
- To have the user created in other modules that you have configured to do so, select **Create user in other modules?** It is possible to set up the Samba module to automatically create a user in its user list, and the MySQL module to create a new database user, among others. 
- To create the user, click the **Create** button. After a short delay, you will be returned to the list of existing users, which should include your newly created user. 

Once the **Create** button has been clicked, the new user will be able to login via SSH, telnet and whatever other services you have set up 

### Editing an existing user
You can change any of the details of any user that already exists on your system by following these steps : 
- Click on the user you want to edit from the list of existing users. A form containing all the details of the user will appear, as showing in. 
- Change any of the details that you want to modify, including the username. The fields have the same meanings as described in **Creating a new user** above. 
- If you have modified the User ID or changed the Primary group, files owned by the user may need to be updated to use the new IDs. The options at the bottom of the page labeled *Change user ID on files?* and **Change group ID on files?** control which directories will be searched for files with the old IDs. 
- If you have changed the user's home directory, you can have Webmin rename it to the new path. However, this may not always be what you want if the new home directory already exists.  The **Move home directory if changed?** option determines if is moved or not. 
- To have the user updated in other modules where this has been set up, select **Modify user in other modules?** This will also rename the user's Sendmail mail file and Cron jobs if you are changing the username. 
- Click the **Save** button to have Webmin update the user. Once it is complete, you will be returned to the lists of users and groups. 

### Deleting a user
You should always be careful when deleting a user, as important files in the user's home directory may be lost. It is generally never a good idea to delete any of the users that are created when your system is first installed - especially `root`! Even normal users that you have created can be disabled by editing the user and setting the password option to **No login allowed**. If you still want to go ahead and delete a user, follow these steps : 
- Click on the user you want to edit from the list of existing users. A form containing all the details of the user will appear, as shown above.
- Click the **Delete** button at the bottom of the page. This will bring up a form asking you to confirm the deletion, with buttons to delete just the user or his home directory as well. The amount of disk space used by the user's home directory will be shown.
- Select the **Delete user in other modules?** option if you want the user to be deleted from other modules in which deletion has been set up. Any Cron jobs belonging to the user will be deleted, as will his Sendmail mail file.
- Click either the **Delete User** or **Delete User and Home Directory** button to delete the user. A page showing the progress of the deletion will be displayed while it is taking place.

### Creating a new group
A new Unix group can be added by following these steps: 
- Click on the **Create a new group** link at the top or bottom of the list of existing groups. A form for entering the details of the group will appear, as shown below.
- Choose a name for the new group, and enter it into the **Group name** field. The name must not be used by any other group, and should be short and contain no spaces. 
- The **Group ID** field should be left alone, as it is automatically determined by Webmin. If you change it, make sure that it is not the same as any existing group's ID. 
- The **Password** field can be ignored, as group passwords are never used. 
- In the members field, enter the names of any existing users that you want to be members of this group. You can use the button to the left of the field to pop up a window that allows you to select from a list of all existing users. 
- Click the **Create** button to have Webmin create the new group.  Once it is complete, you will be returned to the lists of users and groups. 

Once the new group has been created, you can edit users to make it their primary group or one of their secondary groups. 

### Editing an existing group
You do not often need to edit an existing group, as users can be added to or removed from it by editing them directly. However, if you do want to edit a group, follow these steps: 
- Click on the name of the group that you want to edit from the list of existing groups. This will bring up the group editing form as shown in the image below.
- Change any of the details, such as the group ID or member list.  It is not possible to change the name of an existing group. 
- If you are changing the group ID, files owned by the group may need to be updated to use the new ID. Use the **Change group ID on files?** option to control which directories will be searched for files that need updating. 
- Click on the **Save** button to make the changes active. Once they are complete, you will be returned to the lists of users and groups. 

<img src=http://www.webmin.com/screenshots/chapter4/figure7.gif><br>
The group editing form

### Deleting a group
You can safely delete a group at any time, but Webmin will only let you do so if there are no users who have it as their primary group. To delete, follow these steps: 
- Click on the name of the group you want to delete from the list of existing groups. This will bring up the group editing form as shown in the screenshot above. 
- Click the **Delete** button at the bottom of the page. A page asking if you really want to delete the group will appear. 
- Click the **Delete Group** button to confirm the deletion.  A page showing the progress of the deletion will be displayed. 

### Viewing recent and current logins
All Unix systems keep track of recent logins by users made using SSH, telnet or at the console. Some also track FTP logins as well. You can display recent logins by users that include the date, time and source address by following these steps: 
- Below the lists of users and groups, enter the username of the user you want to track into the **Display logins by** field, and click the button. Of, if you want to see logins by all users just leave the field blank. 
- A page listing recent logins by the user or users will be displayed.  The list may not cover all logins since your system was first installed, as many operating systems automatically truncate the log file periodically in order to save disk space. 

It is also possible to display a list of users who are logged in right now by clicking the **Logged In Users** below the lists of users and groups. If a user is logged in graphically at the console, he may be listed multiple times -- once for each shell window he has open. 

### Reading users' email
When editing a user, you can view mail in the user's mailbox by clicking on the **Read Email** button at the bottom of the page. This will take you directly to the mailbox viewing page of either the Sendmail or Qmail module, depending on what you have chosen for the **Display user email from** option in the module configuration. For more documentation on using the mail interface, see chapter 37. 

### Creating users from batch files
Sometimes you want to create a large number of users at once, without having to go through the process of filling out the user creation form over and over again. Often you will have the details of these users in a text file of some kind, containing their usernames, passwords and real names. Fortunately, Webmin has a feature that automates this task for you. 

If you click on the **Create, modify and delete users from batch file** link above or below the list of existing users, a form will appear that allows you to upload a file containing the details of users to create, as shown in the screenshot below. Your file must contain one line of text for each user that you want to create, and the format of each line must match the format shown on the batch file page. 

[![](/images/docs/screenshots/modules/light/users-and-groups-batch.png "Batch Create Form Screenshot")](/images/docs/screenshots/modules/light/users-and-groups-batch.png)

The exact file format depends on what information your system stores about each user, but on most systems each line must follow the format: 

```text
create:username:passwd:uid:gid:realname:homedir:shell:min:max:warn:inactive:expire
```

An example line to create a user with the user ID automatically assigned by Webmin would be : 

```text
:create:jcameron:mysecret::3001:Jamie Cameron:/home/jcameron:/bin/bash:::::
```

As you can see, the line is made up of a series of fields, each separated by a colon. 
When creating a user, the first field must be the text create. The meanings of the other fields are:

|||
|--- |--- |
|**`username`**|The users login name.  This cannot be left blank.|
|**`passwd`**|The users password.  If this field is left blank, then no password will be needed for the user. If it contains just the letter x , then the user will be locked and no login allowed.|
|**`uid`**|User ID for the new user.  This should generally be left blank, so that Webmin can assign one automatically.|
|**`gid`**|ID of the users primary group.  This cannot be a group name, and cannot be left blank. If more than one GID is entered, the user will be added as a secondary member to all of those after the first as well.|
|**`realname`**|The users real name. Should not be left blank, but not actually mandatory.|
|**`homedir`**|A directory that will be created and its ownership assigned to the user. You can leave this blank if the module has been configured to assign home directories automatically.|
|**`shell`**|The users login shell. This field cannot be left blank.|
|**`min`**|The number of days since the user was created or the password last changed that the user must wait before changing it again. Can be left blank to allow changing as soon as the user likes.|
|**`max`**|The number of days after the user was created or the password last changed that the password expires and must be changed. If left blank, the password will never expire.|
|**`warn`**|The number of days before the password expiry date that the user will be warned at login that his password is about to expire. If left blank, the user will not know that his password has expired until it happens.|
|**`inactive`**|The number of days after the password expires that the entire account will be disabled, if the user has not chosen a new password. If left empty, the account will never expire.|
|**`expire`**|The date on which this account will expire. Unfortunately, you must enter this as a number of days since the 1st of January 1970!|

Once you have created a file containing the details of users to create, select it using either the **Upload batch file** or **Local batch file** fields, and click the **Execute batch** button. A page displaying each user created and any errors encountered will be displayed. The most common error is a missing field in one of the lines - each must have exactly the right number of fields, and even if a field is blank the colon separator next to it must still be included.

### Configuring the Users and Groups module
Like other Webmin modules, Users and Groups has several options that can be configured by clicking on the **Module Config** link above the lists of users and groups, as shown in the screenshot below.

[![](/images/docs/screenshots/modules/light/users-and-groups-config.png "Users and Groups Configuration Screenshot")](/images/docs/screenshots/modules/light/users-and-groups-config.png)


The options that you can safely change and their meanings are:
|||
|:----|:----|
|**Command to run before making changes**|Whatever shell command you enter into this field will be run just before any action is performed, such as adding, deleting or modifying a user or group. It can be useful for doing things like making a backup copy of the `/etc/passwd` file before Webmin makes any changes. The command can determine exactly what Webmin is about to do by checking environment variables, as explained in the "Before and after commands" section.|
|**Command to run after making changes**|Like the option above, but this command is run after any action is performed. It can be very useful if you want to have some command run after a user is created, in order to setup additional files for that user.|
|**Permissions on new home directories**|The octal file permissions on newly created home directories, in the same format as used by the chmod command.|
|**Copy files into new home directories from**|Directories or files to copy into the home directory of newly created users, assuming the Copy files to home directory? option is turned on. If any of the paths you enter is a directory, all files and subdirectories in that directory will be copied. This option is usually set to `/etc/skel` by default, which is a system directory containing files like .cshrc and .profile.|
|**Automatic home directory base**|The directory under which users home directories are usually created. If this option is set, an Automatic option will appear for the Home directory field in the user creation form. If chosen, the home directory will be determined by this option and the **Automatic home directory style** below.|
|**Automatic home directory style**|This option controls the path to a new users home directory under the base. The most common default option of home/username will make it just a subdirectory under the base, with the same name as the username. So if you were creating a user called jcameron and the home directory base was set to `/home` , then the resulting home directory would be `/home/jcameron`. Other options will create subdirectories using the first one or two letters of the username. They can be useful if you have a very large number of users on your system, and want to avoid having thousands of entries in `/home`.|
|**Lowest UID for new users**|When Webmin automatically chooses a user ID for a new user, it will never pick one that is lower than specified in this option. On most systems, normal users have user IDs above 500, and system users have IDs below that.|
|**Lowest GID for new groups**|Like the option above, but for group IDs.|
|**Create new group for new users?**|If this option is set to Yes, when creating a new user the default action will be to create a group of the same name and make it the user's primary group.|
|**Assign same ID to new user and group?**|This option only does anything if the previous one is enabled. If set to Yes, when a new group is created for new user, Webmin will make sure that their UID and GID are the same. This doesn't actually make any difference, but some administrators like it.|
|**Don't use MD5 passwords if missing perl MD5 module?**|This option should only be changed to Yes if you run into an error when creating a new user caused by a missing MD5 Perl module.|
|**Check for sendmail alias clashes?**|If set to Yes, when creating or renaming a user Webmin will check if there is a Sendmail alias of the same name. This can be useful to prevent the creation of users who would be unable to receive mail due to an alias redirecting it all to some other address.|
|**Only delete files owned by user?**|If set to Yes, when deleting a user files in the users home directory that do not belong to him will not be deleted.|
|**Maximum user and group name length**|The maximum allowed length for a user or group name. If this is set by default, it is not a good idea to adjust it because your operating system will not recognize longer usernames.|
|**Default group for new users**|The default primary group on the new user creation form.|
|**Default secondary groups for new users**|A space separated list of secondary groups that will be selected by default on the new user creation form.|
|**Default shell for new users**|The default shell on the new user creation form.|
|**Default minimum days for new users**|The default number of days before which password changing is not allowed.|
|**Default maximum days for new users**|The default number of days after which the password must be changed.|
|**Default warning days for new users**|The default number of days before password expiry that the user is warned.|
|**Default inactive days for new users**|The default number of days after password expiry that the user is disabled.|
|**Maximum number of users to display**|If the number of users or groups on the modules main page exceeds this number, the table of users or groups will be replaced by a search form. You may want to adjust this if the number of users on your system is just over the default limit.|
|**Sort users and groups by**|This option controls the ordering of users and groups on the modules main page.|
|**Number of previous logins to display**|This option limits the number of recorded logins to display, so that the table does not become too large on systems that keep an unlimited login history.|
|**Display users and groups by**|By default, users and groups are shown on the modules main page in a tables with one row per user or group. However, if you change this option to Name only then only the username of each will appear, saving a lot of screen space if you have a large number of users. Changing to Primary group categorized will also display users by username only, but categorized by their primary group.|
|**Conceal plain-text password?**|If set to Yes, when editing or creating a user the Normal password field will show only stars instead of the actual password that you enter. Useful if you are worried about people looking over your shoulder when creating users.|
|**Get user and group info from**|Even though the module reads and edits system user, group and password files directly, in some cases there will be users and groups on your system that come from another source, such as NIS. When displaying a users primary group or the users who are members of a group, Webmin will use the getpw family of system calls by default to get a list of users and groups, instead of reading the user and group files directly. This is normally the right thing to do, but in some cases it will not work properly or will be very slow. You should only change this option to Files if you are sure that you want the module to never use the getpw functions.|
|**Generate password for new users?**|If this option is set to Yes, when creating a new user Webmin will generate a random password for you by default.|
|**Show office and phone details?**|Normally, a users Real name field only contains his name. However, it can also contain additional information such as his office location, home phone and work phone. These extra fields are displayed by the finger command, and are stored by the system in the real name field of the `/etc/passwd` file separated by commas. If you want to be able to edit this additional information separately, set this option to Yes. However, it will not work well if username on your system contain commas in them, like Cameron, Jamie.|
|**Display user email from**|This option controls which module is used when the Read Email button is clicked on the user editing page. You should make sure it is set appropriately depending on the mail system you are using, because Sendmail and Qmail use different locations and file formats for user mailboxes.|
|**Minimum password length**|If set, you will not be able to create or edit users whose plain-text passwords are shorter than this length. This option and the three below also effect the Change Passwords and Cluster Users and Groups modules. They can be useful if you want to delegate user management to someone else, and don't trust the quality of his passwords.|
|**Prevent dictionary word passwords?**|If this option is set, passwords that exactly match any word from the dictionary will not be allowed.|
|**Perl regexp to check password against**|If set, passwords must match this Perl regular expression. For example, to force all passwords to contain at least one digit you could enter _[0-9]_ for this option.|
|**Prevent passwords containing username?**|When this option is set to Yes, passwords that exactly match or contain the users username will not be allowed.|

The other options on the page under the **System configuration** heading control which files Webmin reads and writes user and group information from. Because they are set automatically based on your operating system type, they should not be changed unless you know what you are doing.

### Before and after commands
As explained earlier, you can specify shell commands to be run before and after any action is taken in the module. Because these commands are called for every addition, modification or deletion of a user or group, they need some way of telling exactly what action is being performed. They can do this using environment variables which are set before the command is run. The available environment variables are:
|||
|:----|:----|
| **`USERADMIN_USER`**|The username of the user being created, modified, or deleted.|
| **`USERADMIN_ACTION`**|Indicates which action is being taken. Possible values are: `CREATE_USER`, `MODIFY_USER`, `DELETE_USER`, `CREATE_GROUP`, `MODIFY_GROUP`, `DELETE_GROUP`, `USERADMIN_USER`. The username of the user being created, modified or deleted. Not set when a group action is being performed.|
| **`USERADMIN_UID`**|The user ID of the user being created, modified or deleted.|
| **`USERADMIN_GID`**|The group ID of the user.|
| **`USERADMIN_REAL`**|The real name of the user, including any office and phone information.|
| **`USERADMIN_SHELL`**|The shell of the user.|
| **`USERADMIN_HOME`**|The home directory of the user.|
| **`USERADMIN_PASS`**|The plain text password of the user, if available.|
| **`USERADMIN_SECONDARY`**|A comma-separated list of any secondary groups that the user belongs to.|
| **`USERADMIN_GROUP`**|The name of the group being added, modified or deleted. Not set when a user action is being performed.|


So for example, if you wanted to send out email when a user is created, you could set the **Command to run after making changes** option to:
```text
[ "$USERADMIN_ACTION" = "CREATE_USER" ] && echo "Added user
   $USERADMIN_USER ($USERADMIN_REAL)" || mail -s "Added new user" you@yourdomain.com
```
### Module access control
It is possible to grant a Webmin user or group access to only a subset of features in the Users and Groups module. This is most commonly used to allow a sub-administrator the right to edit only selected users and groups on the system, and to change their attributes in only limited ways. For example, in a virtual hosting environment you may want to give a Webmin user the ability to create and edit up to 10 users with UIDs in a limited range, and home directories under a fixed directory. These privileges give the user no way to gain _root_ access to effect users that do not belong to him: 

- In the Webmin Users module, click on Users and Groups next to the name of the user that you want to edit. This will take you to the access control form covered in [Webmin Users](/docs/modules/webmin-users). 
- Change the **Can edit module configuration?** field to **No**. 
- The **Unix users who can be edited** field controls which users can be changed by this Webmin user. Typically, you would set it to **Users with UIDs in range** and enter maximum and minimum UIDs into the fields next to it, such as _5000_ and _5010_. 
- To allow the addition of new Unix users, set the *Can create new users?* field to **Yes**. 
- Set the **Can view batch file form?** option to **No**. This will prevent the Webmin user from creating and editing users from a batch script, which is not normally necessary. Allowing it does not grant the user any additional privileges and is not a security risk though. 
- For the **UIDs for new and modified users** fields, enter the same UIDs as in step 4. 
- De-select the **More than one user can have the same UID** option, but leave **UIDs of existing users can be changed** selected.  An un-trusted sub-administrator should not normally be allowed to create multiple users with the same UID due to the problems that this can cause. When UID clashes are prevented, the Webmin user will not be able to create any more Unix users than fit in his allowed UID range. 
- In the **Allowed groups for new or modified users** field, you would typically select the **Only groups** option and enter the names of any groups that new users can be primary or secondary members of. Normally you would just enter a single group like _users_. Leaving this field set to **All groups** is a very bad idea, because it would allow the creation of users who are members of the root or bin groups, and who can thus edit important system files and executables. The **Groups with GIDs in range** option can be useful if this Webmin user is allowed to create multiple groups of his own within the same GID range. 
- To restrict the shells that a new user can be assigned, set the **Allowed shells for new or modifed users** to **Listed** and enter their paths into the text box below. This can be useful to allow the creation of only mail-only users who always have the shell `/bin/false`. 
- Set the **Home directories must be under** field to a directory that will only be used for accounts created by this Webmin user. Setting it to `/home` is a bad idea, because this would allow the sub-administrator to rename or delete directories belonging to other users that are under `/home`. Instead, enter something like `/home/subadmin`. To force every user's home directory to be based on his username, such as `/home/subadmin/username`, check the **Home directory is always same as username** box. 
- To stop the Webmin user de-selecting some of the options at the bottom of the user creation, editing and deletion forms, de-select the matching **Allowed on save options**. Any that are not chosen will be effectively always turned on. 
- Assuming you just want the Webmin user to create and edit Unix users, set the U*nix groups who can be edited* field to *No groups*. 
- If you want to restrict the user from viewing recent logins, change the **Can display logins by** field. Any user who can login with telnet or SSH can run the last command anyway to display logins, so setting this option to **No users** does not usually make your system any more secure. 
- Finally, click **Save**. You will be returned to the module's main page and the new access control restrictions will be immediately applied to the Webmin user. 

Be careful when granting a Webmin user access to certain Unix users, as a mistake may allow him to edit the `root` user or create a new user who is equivalent to _root_. There are also many other users like bin, uucp and httpd that own important system files or are used for running server and daemon processes. Someone who can edit or login as one of these users could gain root privileges on your system or access files that he is not supposed to. 

Often the access control in the [Disk Quotas](/docs/modules/disk-quotas) and [Scheduled Cron Jobs](/docs/modules/scheduled-cron-jobs) module is set up to allow editing of the quotas and Cron jobs of the same Unix users as those that can be edited and created in this module. All modules support the UID range and primary group access control options, which can be set in the same way. 

It is also possible to use the Uses and Groups access control form to allow a user to edit or create selected Unix groups, though this is not generally as useful. Granting an un-trusted user the rights to edit all groups on the system is a bad idea, as he would make himself a member of the root or bin group and so be able to read or write critical files. 

### Other operating systems
Different operating systems store different information about users than Linux does. This is due to the different files and file formats used for storing user information. Some for example do not have an `/etc/shadow` file, meaning that information about password change and expiry times does not exist. This section explains the major differences between other supported operating 
systems and Linux : 

* **FreeBSD, OpenBSD and NetBSD** --- All these operating systems use the `/etc/master.passwd` file for storing user information, which combines `/etc/passwd` with some fields from `/etc/shadow`. When editing or creating a user, you can enter a **Password change time** which is the date and time after which the password must be next changed, and an **Account expiry time** after which account can no longer be used. Each user can also have a **Login class**, which is used in conjunction with the `/etc/login`.conf file to determine memory, CPU and other limits. 
* **Sun Solaris and SCO UnixWare** --- Both these operating systems use the same files and formats as Linux, and so have all the same options.
* **HP/UX, SGI Irix and Compaq Tru64/OSF1** --- Because none of these systems use an `/etc/shadow` file by default, none of the options related to password and account expiration are available when editing or creating a user.
* **Apple MacOS X** --- OSX does not store user and group information in files at all - instead, it uses a network database called NetInfo which Webmin manipulates using the `nidump` and `niutil` commands.  However, this database stores the same information as the BSD master.passwd file, so when editing or creating a user the same fields are available as for FreeBSD.
* **IBM AIX** --- AIX uses the files `/etc/passwd` and `/etc/security/passwd` for storing user information, and so when editing or creating users on AIX there are some options that do not existing on other operating systems. The **Expiry date** field can be used to set the date and time after which the account cannot be used. The *Minimum weeks* and **Maximum weeks** fields are very similar to the *Maximum days* and **Minimum days** fields on Linux, but are in weeks instead of days. The **Warning days** field is has exactly the same meaning as on Linux, and is in days not weeks. The unique **Account flags** field sets special options, whose meanings are explained on the form.  
* **SCO OpenServer** --- OpenServer uses `/etc/passwd` and `/etc/shadow` files, but the shadow file stores slightly different information than on Linux. This means that when editing a user, the **Expiry date** field is replaced with an option to control whether the user is prompted for a password at their next login, and the **Warning days** and **Inactive days** fields are not available. 

Those few operating systems that are not listed above cannot use the Users and Groups module, as their file formats are not currently known to Webmin.
