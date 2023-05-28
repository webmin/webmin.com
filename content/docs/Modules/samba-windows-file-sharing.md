---
title: "Samba Windows File Sharing"
date: 2023-05-28
weight: 475
---

### About
The **Samba Windows File Sharing** page explains the SMB protocol via which Windows systems share files, and explains how to set up the **Samba** program to make files on your Unix server available to Windows clients. 

### Intro
**SMB** (**Server Message Block**) is the protocol used by Windows systems to share files and printers across a network, just like the NFS and LPR protocols are used by Unix systems. Any time you use the Network Neighborhood, My Network Places, or map network drive features of Windows, the SMB protocol is being used. Because it is the standard method of file sharing on Windows systems, it has become the most commonly used method of sharing files on local networks. 

Even though SMB is thought of as a Windows protocol, it was originally developed by DEC and has been implemented by many different companies and in many products. These days it is often referred to as **CIFS** (the **Common Internet File System**), even though the protocol itself has not changed. In fact, many ancient clients will still be able to access modern SMB servers like Samba. 

An SMB server is a system that has files or printers that it wants to allow other hosts access to. An SMB client is a system that wants to read or write files on a server, or print to a server's printer. A single system can be both a client and a server, and all releases of Windows from 95 onwards include software for these purposes. However, on a typical organization's network there is a single large server system and many smaller clients that access files on it. 

Every host that uses the SMB protocol has a hostname, which is typically the same as its DNS name. A server host can have multiple shares, each of which has a unique name and corresponds to a directory or local printer on the server system. Shares are referred to using the `\\hostname\sharename` notation, such as `\\corpserver\documents`. On Windows clients, file shares are normally mapped to drive letters such as ``S:`` so that they can be more easily referred to. All Windows applications can read and write files on a server in exactly the same way that they would for local files. 

Shared printers accessed by a client are not assigned a drive letter, but may be connected to a fake printer port such as ``lpt2:``. Clients can send jobs to the printer, view those that are currently waiting to be printed and cancel jobs submitted by the same user. Unlike the Unix LPR protocol, clients using a remote printer must have the appropriate driver installed, and must send data to the server in the format that the printer actually accepts. 

Fortunately, it is possible for Linux and Unix systems to participate in SMB file and printer sharing as well, or this would be a very short chapter. The [Disk and Network Filesystems](/docs/modules/disk-and-network-filesystems) module (covered in chapter 5) allows your Linux system to mount shares from SMB servers, so that the files they contain can be accessed like any others. The Printer Administration module (from chapter 22) can be used to set up printers on your system that send jobs to Windows printer shares. 

Those two chapters explain how your system can act as an SMB client, while this one covers setting up a server so that Windows (and Linux) clients can access its files and print to its printers. The software that makes this all possible is called Samba, a completely free re-implementation of the SMB protocol for Unix systems. Samba has been available and under development for many years, ever since the SMB protocol first started to be used on DOS systems. It allows a Unix system to do as good a job of serving Windows clients as a real Windows server would - in fact, some would say that it is even better. 

Samba uses two daemon processes, named `smbd` and `nmbd`. The first handles actual file or printer share requests from clients, while the second responds to SMB name lookup requests. Both daemons use the `smb.conf` configuration file, which is usually found in the `/etc` directory. Any change made to this file (either manually or by using Webmin) will be immediately detected by both daemons, and will take effect at once. Unlike most other Unix server processes, they do not need to be signaled to re-read the configuration file if it changes. 

Unfortunately, there are some complexities that arise when sharing files between Unix and Windows systems. The SMB protocol has no support for concepts such as file ownership or permissions, at least not in the form that they exist on Unix systems. NTFS filesystem access control lists (used on Windows NT, 2000, XP and Vista) are supported instead, which are incompatible with normal Unix permissions. Samba does have some support for them, but setting it up is complex and not covered in this page. 

The SMB protocol supports authentication, so that clients can be forced to provide a valid username and password to the server before they can access a share. The Samba server uses the standard Unix user database to validate clients, although **actual Unix passwords cannot be used** (for reasons explained later). When a client logs in to a Samba server, it accesses files with the permissions of the Unix user that it authenticated as - just as an FTP client would. This means that all the normal file permission and ownership rules apply. 

Samba can be compiled on every version of Unix supported by Webmin, and has the same features on all of them. This means that the module's user interface is the same as well, although differences in the default configuration may cause some features to be initially inaccessible.

### The module
The **Samba Windows File Sharing**  module allows you to specify directories and printers to be shared to Windows clients using the SMB protocol (Server Message Blocks). It can be found in the Servers category, and when its link is clicked the main page as shown in the screenshot below will be displayed. All existing shares are listed, along with their paths and the users that they are available to. Below them are icons for setting various global options that apply to all shares, links for managing Samba users and a button for starting or re-starting the server processes. 

Over the years, Samba has gained a vast array of configurable options. This module does not allow you to configure all of them though, only the ones that are useful for a small server on a simple network. For example, settings related to login scripts, NT domains and SSL cannot be edited. However, if you add them to your `smb.conf` file manually the module will not modify them. 

Like all other modules that configure some server, this one can only be used if the Samba server is actually installed. If the module cannot find it, an error message like **The Samba server executable /usr/sbin/smbd was not found** will appear on the main page instead. If you do have Samba installed but in a different location to what the module expects, see the **Configuring the Samba Windows File Sharing** module section later in this chapter for instructions on how to re-configure it to use the correct paths. Otherwise, you will need to install it. 

Most Linux distributions and several other operating systems include a Samba package or packages, which can be easily installed using the [Software Packages](/docs/modules/software-packages) module (covered in chapter 12). If not, you will need to download the source code from [samba.org](https://www.samba.org) and then compile and install it manually. The module expects you to use the package if one is available or the source code otherwise, so if you did not and an error message is still being displayed on the main page the module's configuration will need to be adjusted to use the correct paths. 

No matter how Samba is installed, its default configuration file will include at least two shares (the special homes and printers), as well as several global settings. This means that even if you have never used this module before or configured Samba manually, the list on the main page will not be empty. Of course, if you have been adding shares by directly editing the configuration file then they will be displayed as well. 

If Webmin detects that Samba is already running, a button labeled *Restart Samba Servers* will be displayed at the bottom of the page. Predictably, clicking it will kill all running server processes and re-start them, forcing the current configuration to be reloaded. This is usually unnecessary though, as Samba will re-read the configuration files as soon as it detects that they have been changed. 

If the module finds that both of the Samba server processes are not running it will display the *Start Servers* buttons instead, which when clicked will start both smbd and nmbd. No PID file is checked to determine if they are running or not - instead, the module searches for running processes with those names.

[[Image:Samba-Windows-File-Sharing.png|frame|none|Samba Windows File Sharing]]

### Managing Samba users
As mentioned in the [[Introduction to Samba|introduction]], the SMB protocol uses a password encryption format that is incompatible with the standard Unix format. At one time this was not a problem, as old versions of Windows (95 and earlier) sent passwords to SMB servers unencrypted. This allowed Samba to encrypt and verify them against the Unix password list, just like the FTP or telnet servers do. Unfortunately, recent Windows releases will only send passwords in the new NTLM encrypted format unless a particular obscure registry key is changed. This means that Samba must maintain a separate list of passwords to validate modern clients. 

Unless your server is only going to be accessed by old Windows hosts or Linux systems, you will need to enable this separate encrypted password list. The steps to do this are : 
- On the module's main page, click on the **Authentication** icon. 
- On the form that appears, change the *Use encrypted passwords?* field to *Yes*. 
- Click **Save** at the bottom of the form to return to activate the new setting and return to the module's main page. If it did not appear before, the **Encrypted Passwords** section containing three links should now be visible. 

Now that Samba's separate password list is enabled, you will need to add some of your existing Unix users to it. This can be done easily using Webmin by following the steps below: 
- On the main page of the Samba module, click on the **Convert Unix users to Samba users** link in the **Encrypted Passwords** section to bring up the conversion form. 
- The **Don't convert or remove these users** field lists users that will be excluded from conversion, and by default contains all system accounts. You may want to add others - however, there is no harm in converting accounts that will never be used. 
- If you have used this form before, the *Update existing Samba users from their Unix details* option can be checked to have existing Samba users updated to match the corresponding Unix users. 
- Similarly, the *Delete Samba users who do not exist under Unix* can be checked to have Samba users who no longer have a corresponding Unix user deleted. 
- The **For newly created users, set the password to** field determines the password that will be assigned, as there is no way to convert the users' existing passwords. The best choice is *Account locked*, which prevents the converted users from being used until a password is set later. You can also choose **No password** to leave new accounts password-less (a bad idea security-wise), or **Use this password** to specify a password for all converted users. 
- Click on the **Convert Users** button to begin the process.  A page listing each user converted, skipped or updated will be displayed. 

After conversion you will probably need to set passwords for the new Samba users. This must be done one by one, by following these instructions for each user: 
- On the module's main page click on the **Edit Samba users and passwords** link to bring up a list of existing users. 
- Click on the name of the user whose password you want to set. 
- In the *Password* field, select the *New password* option and fill in the text box next to it. You can also choose *No access* to block all Samba logins by this user, *No password* to allow logins without a password or *Current password* to leave the password unchanged. 
- None of the other fields on the form should be changed - just click the **Save** button to return to the user list. 
- You should now be able to login to your Samba server as this user with the chosen password and access files in some share.  Assuming that the special *homes* share exists, every user will have access to the share with the same name as their username. 

Because converting and setting the password for each new user is a tiresome waste of effort, you can configure the module to automatically create a Samba user for each Unix user created in Webmin. It is also possible to have a Samba users renamed, deleted or their passwords changed when their corresponding Unix user account is changed in the Users and Groups module. The steps to follow to set up this synchronization are : 
- On the Samba module's main page, click on the **Configure automatic Unix and Samba user synchronization** link in the **Encrypted Passwords** section. 
- On the synchronization form, check the *Add a Samba user when a Unix user is added* to have a Samba user created with the right UID and password for each new Unix user. 
- To have the corresponding Samba user renamed or their password changed when a Unix user is modified, check the *Change the Samba user when a Unix user is changed* box. 
- To have Webmin remove the matching Samba user when a Unix user is removed, check the *Delete the Samba user when a Unix user is deleted*. 
- Click the **Apply** button to save your settings. Any actions performed in the Users and Groups module (when the *in other modules* options are used) will modify the Samba user list as well. 

{{< alert primary exclamation "Note" "Unfortunately, this synchronization only applies to the **Users and Groups**, **Change Passwords** and **Cluster Users and Groups** modules in Webmin. If you add a user with the `adduser` shell command or change a password with the `passwd` shell command, no Samba user will be added or updated" >}}

### Adding a new file share
In its usual default configuration, Samba will allow any Unix user to login and access files in their home directory. The special **homes** share provides this feature, which in many cases is all that you need for users to store their own files on the server. However, it is often useful to share a directory that everyone has access to, so that documents of interest to the entire organization can be made available. A share like this can be set up to allow guest access (meaning that no login is required to access it), or to require a valid login to the server. 

To create a file share, the steps to follow are : 
- First, decide on the directory that you wish to share and create it if it does not already exist. It must be given the appropriate Unix permissions so that users can read and/or write to it. 
- On the module's main page, click on the **Create a new file share** link above or below the table. This will take you to the share creation form shown in the screenshot below. 
- In the **Share name** field, make sure the first button is selected and enter a unique alphanumeric name for your share into the text box, like *documents*. If you enter the name of a Unix user, his automatic home directory share will be overridden. 
- In the **Directory to share** field, enter or select with the little button the full path to the directory chosen in step 1 
- To disable this share so that it cannot be used, change the **Available?** field to **No**. This can be useful if you want to take it offline until all the options have been set properly. 
- To hide this share from the list of shares that appears when the server is browsed, change the **Browseable?** field to **No**. It will still be directly accessible using a `\\servername\sharename` path though. 
- In the **Share comment** field, enter a short description for this file share, like *Corporate documents*. 
- Click the **Create** button to add it to the Samba configuration.  Your browser will be returned to the module's main page, on which the new share will be listed. 
- Click on the new share name to bring up its editing page. 
- Click on the **Security and Access Control** icon to display the share's security form. 
- If the files in this share should be read-only, set the **Writable?** field to **No** - otherwise, make sure **Yes** is selected. 
- The **Guest access?** field determines if clients are allowed to access this share without logging in to the server. The available options are : **None** Only authenticated users will be granted access. **Yes** Anyone will be allowed to access the share, but unauthenticated clients will be treated as guests. Clients that have logged in will have their normal file access rights. **Guest only** All clients, authenticated or not, will be treated as guests. 
- To set the Unix user that guests read and write files as, change the **Guest unix user** field. This should normally be an account with read-only access. 
- Click the **Save** button at the bottom of the form. The share is now ready for clients to use, and should show up when your server is browsed. 

:[[File:Samba-Create-File-Share.png|frame|none|Create File Share]]

A share can be edited after creation by clicking on its name in the list on the module's main page to bring up its editing form, changing details like the path or description and hitting the **Save** button. Or it can be deleted entirely by clicking **Delete** on the same form. You can also edit additional parameters by clicking on the icons at the bottom of the editing page - later sections in this chapter explain what they do in more detail. 

The homes share can be edited as well, although it does not usually have a path (or if it does, it will contain the special %U code which is replaced by the connecting user's home directory). 

[[File:Samba-Edit-File-Share.png|frame|none|Edit File Share]]

### Adding a new printer share
The default Samba configuration usually contains the special **printers** share, which indicates that all printers on your system are available to SMB clients. However, a specific printer can be explicitly shared instead. This may be better than having them all shared automatically, as it allows you to set different options for each printer or exclude some from being shared altogether. 

Before printing and the browsing of printers in Samba will work properly, it must be configured to use the right print system for your Unix box. See the **Configuring printers** section later in the chapter for details of how to set this. If it is set incorrectly the server will use the wrong commands for listing printers and submitting jobs, which may cause the automatically generated list of printers to be empty, or print requests to fail. 

To make a printer available to SMB clients, the steps to follow are : 
- On the module's main page, click on the **Create a new printer share** link above or below the table. This will take you to the print share creation form shown below. 
- In the **Share name** field, make sure the first button is selected and enter a unique alphanumeric name for your share into the text box, like *hplaser*. This should be the same as the name of the Unix printer you select in the next step to avoid confusion.  If an automatically created printer share with the same name already exists, this new one will override it. 
- From the **Unix printer** menu, select the printer to make available to SMB clients. This list is taken from the Printer Administration module (covered in chapter 22). If **Default** is chosen the print system's default printer will be used. 
- To disable this printer so that it cannot be used, change the **Available?** field to **No**. 
- To hide this printer from the list that appears when the server is browsed, change the **Browseable?** field to **No**. It will still be directly accessible using a `\\servername\printername` path though. 
- In the **Spool directory** field you can enter the name of a directory in which temporary files for printing are stored. Leave it empty to use Samba's default, which will usually work fine. 
- In the **Share comment** field, enter a short description for this printer, such as *Office HP Laserjet 5*. 
- Click the **Create** button to add the share to the Samba configuration.  Your browser will be returned to the module's main page which will now include the new printer in the table. 
- Click on the new share name to bring up its editing page. 
- Click on the **Security and Access Control** icon to display the share's security form. 
- The **Guest access?** field determines if clients are allowed to print to this printer without logging in to the server.  The available options are : **None** Only authenticated users will be granted access. **Yes** Anyone will be allowed to access the share, but unauthenticated clients will be treated as guests. Clients that have logged in will have print jobs submitted under their login names. **Guest only** All clients, authenticated or not, will be treated as guests. 
- To set the Unix user that guests submit print jobs as, change the **Guest unix user** field. This doesn't matter much, unless your printer system is configured to block certain users. 
- Click the **Save** button at the bottom of the form to return to the printer's editing page. 
- Click on the **Printer Options** icon. 
- If this printer is to be used by Windows clients and does not have a Unix driver installed, enter its complete make and model into the **Printer driver** field. This must match exactly the name that Windows refers to the printer as, so that clients know which driver to install. If **None** is selected, users adding this printer to their Windows systems will be asked to choose the printer model from a list instead. If the Unix printer selected in step 3 is already set up with a driver, then clients must submit jobs in Postscript format instead of the native data format that the printer uses (because the driver will do the conversion). In this case, you can enter the name of a printer that uses Postscript natively, such as *Apple LaserJet II*. 
- Finally, click the **Save** button on this form. The printer share is now ready for use by Windows clients. 

[[File:Samba-Create-File-Share.png|frame|none|Create File Share]]

Just as with file shares, printers can be edited and deleted by clicking on their names in the table on the module's main page. The special **printers** share can be modified as well - however, many options do not make sense to set for it, such as the **Unix printer** or **Printer driver**. 

### Viewing and disconnecting clients
Every client that is accessing a file or printer share on your system has a connection to the Samba server, and those connections can be viewed using this module. Clients may also lock files that they have open for editing, which prevents others from opening them. One of the server's tasks is the maintenance of these locks, which are associated with sessions and which you can also view. If a client crashes without properly disconnecting, any locks that it holds will remain until the TCP connection times out, which can take a while. For this reason, the module allows you to kill client sessions and thus release their locks. 

To view and delete client sessions, follow these steps : 
- On the module's main page, click on the **View all connections** link above or below the table of shares to bring up a list of all connections to the server. Alternately, you can click on a printer or file share and then on the **View Connections** button on its editing page to display a list of only connections to that particular share. 
- Either way, the page that appears will list the shares currently in use and for each show the name of the connected user, the host they connected from, the time of connection and any locked files. In the left-most column is the ID of the Samba server sub-process that is handling this connection. Generally, multiple connections from the same client system to different shares will be handled by one process. 
- To kill a process and thus break all the connections that it is handling, click on its process ID in the first column. Any locks held by the client will be released, freeing the files for use by others. You should only kill the connections of clients that have really crashed - killing the session for an active client may cause any files that it has open to be corrupted.  However, it is generally safe to kill a connection to a Windows client with no files open, as it will be immediately and transparently re-established by the client when a file on the share is next opened. 

### Editing share security options
Once a printer or file share has been created, you can edit various security-related options that control who has access to it and which hosts they can connect from. This can be useful if some shares contain files that only certain people should have access to, or if your Samba server is for use by clients only on your internal network. 

To edit share security options, the steps to follow are : 
- On the module's main page, click on the name of the share in the table to bring up its editing form, then on the *Security and Access Control* icon. 
- As explained in the **Adding a new file share** section, the **Writable?** and **Guest access?** fields determine if the share can be written to, and if authentication is needed.  The **Guest Unix user** field sets the user that files are read and written as by guest clients. Change them again here if you wish. 
- To only allow certain hosts access to this share, select the second radio button in the **Hosts to allow** field and enter a list of hostnames and IP addresses into the adjacent text box. Partial IPs like *192.168.1.* or network addresses like 192.168.1.0/255.255.255.0 can be use to allow an entire network. If your system is a NIS client, you can enter a netgroup name preceded by an *@_ (like _@servers*) to allow all of the group's members. If **All** is selected, all hosts will be granted access, unless you fill in the next field. No matter what you enter, connections from the local host (127.0.0.1) are always allowed unless it is specifically listed in the *Hosts to deny* field. 
- To block specific hosts from accessing this share, fill in the **Hosts to deny** field with a similar list of hostnames, IP addresses, networks or netgroups. If both fields are filled in, **Hosts to allow** takes precedence. If **None** is selected, all hosts will be permitted. 
- To allow only certain users to access this share, fill in the **Valid users** field with a space separated list of usernames.  You can also fill in the **Valid groups** field with a list of groups whose primary and secondary members will be granted access. Only if both lists are empty will all users be allowed. 
- Alternately, to deny specific users and members of groups, fill in the **Invalid users** and **Invalid groups** fields.  If a user appears in both the valid and invalid lists then they will be denied access. 
- To restrict some users to read-only access for this share, enter a list of usernames into the **Read only users** field.  You can also enter a list of Unix groups in the **Read only groups** to restrict their primary members. Everyone else will have full read/write access, assuming that the share is actually writeable and that the **Read/write** fields have not been filled in. 
- To give only certain users permission to write to the share and restrict everyone else to read only access, enter a list of usernames into the **Read/write users** field. As usual, the **Read/write groups** field can be used to enter a list of groups whose primary members will be allowed to write as well.  Naturally, normal Unix file permissions that may be prevent writing to files or directories still apply to all users.  If a user appears in both the **Read only** and **Read/write** lists, he will be allowed to write. The fields in this and the previous step have no effect on printer shares. Instead, all allowed users will be able to print. 
- When you are done editing file security options, click the **Save** button at the bottom of the page to activate the new settings. 

As well as setting security options for a single share, you can set defaults for all shares that will apply unless overridden in individual shares. To do this, click on the **File Share Defaults** icon on the module's main page instead of the name of a share, and then on **Security and Access Control**. Some settings like the lists of hosts to allow or deny really should be set globally, as you probably want to limit access to your entire server to just a trusted network. See the **Editing share defaults** section later in the chapter for more information on how defaults work.

[[File:Samba-Edit-Security-Share.png|frame|none|Edit Security Share]]

### Editing file permission settings
File shares have several settings related to the Unix permissions and ownership of files within them that can be set globally or on a per-share basis. Because Windows clients and the SMB protocol have no concept of permissions, it is useful to have a way to set the defaults for new files and directories on a per-share basis. The steps to do this are : 
- On the module's main page, click on the name of the share that you want to set permissions for, then on the **File Permissions** icon on its editing page. 
- In the **New Unix file mode** field, enter the octal permissions (as used by the chmod command) that should be assigned to newly created files. For example, mode *600* would allow reading and writing by the owner but completely deny access to anyone else. 
- In the **New Unix directory mode** field, enter the octal permissions for newly created directories. For example, *755* would allow listing and reading by everyone, but only allow the owner to create files in the directory. 
- To make some directories always appear empty to SMB clients, enter a comma-separated list of full paths into the *Directories not to list* field. For example, you might enter */proc,/dev* to hide the contents of those two directories, which are generally useless to Windows clients. 
- To force all clients to access files as a specific Unix user (instead of the user they logged in as), fill in the *Force Unix user* field. This can be very useful for a share in which different people edit each other's documents, as it avoids the Unix permission problems that can occur if files are actually owned by their creators. By default, the group that files are accessed as will be the primary group of the specified user. To change this, fill in the **Force Unix group** field as well. 
- Because Windows SMB clients have no support for Unix symbolic links, Samba will always read or write the linked-to file when a client tries to read or write a link. Unfortunately, this presents a potential security risk, as a symlink could be created that points to a normally inaccessible file outside the shared directory. To prevent this, change the *Allow symlinks outside of share?* field to **No**. 
- On Unix filesystems, files that are read-only to a user can still be deleted if the directory is writeable. This is not the case on normal Windows filesystems though, which is why Samba prevents it from happening. To change this and let Unix filesystem semantics apply, change the *Can delete readonly files?* field to **Yes**. 
- Click the **Save** button at the bottom of the page to activate the new file security options. 

As the **Editing share defaults** section explains in more detail, you can edit file permission settings for all shares by clicking on the **File Share Defaults** icon on the main page, followed by **File Permissions**. These will apply unless overridden for a share by the instructions above. 

[[File:Samba-Edit-File-Permissions.png|frame|none|Edit File Permissions]]

### Editing file naming options
Samba has several options that control how Unix filenames are converted to names suitable for Windows systems. These days, most of them are no longer needed, as Windows versions 95 and above have been able to support long filenames properly. Only Windows 3.1 and DOS were stuck with the old 8.3 filename format, and they are hardly used anymore. 

To edit the naming options for a share that are relevant to modern clients, follow these steps : 
- Click on the name of the share on the module's main page, then on the **File Naming** icon. 
- When the **Case sensitive?** field is set to **No**, the server will ignore case when opening files requested by clients.  This is the way Windows filesystems work and so this is the default behavior for Samba as well. However, it does consume more CPU time and IO bandwidth due to the need to scan directories, as all Unix filesystems are case sensitive. For this reason, you may want to select **Yes** instead if all your clients are Linux systems that expect normal the Unix case rule to apply. 
- Normally, Samba will create files with the exact case specified by clients. To change this and force the use of upper or lower case instead, change the **Preserve case?** field to **No** and select one of the options in the **Default case?** field. This can be useful if Windows clients are creating lots of upper-case files when you prefer to follow the normal Unix lower-case standard. 
- On Windows filesystems, each file has a hidden attribute that determines if it is normally visible to programs or not.  No such attribute exists on Unix systems - instead, files whose names start with a dot are hidden by ls and other commands.  For this reason, Samba sets the hidden attribute on dot files when the **Hide dot files?** field is set to **Yes**, as it is by default. The alternative is to use the world execution bit of the Unix file permissions as the hidden flag, as execute permissions are not otherwise used by Samba. To enable this behavior, change the **Save DOS hidden flag?** field to **Yes**.  Because this will mess up permissions for Unix programs accessing files in the share, it should only be used if the shared directory is only being accessed by SMB clients. 
- Windows files have two more attributes - the archive flag which indicates that a file has been backed up, and the system flag which marks a normally untouchable system file. Samba can be configured to store these attributes in the user-execute and group-execute bits of files if the **Save DOS archive flag?** and **Save DOS system flag?** fields are set to **Yes** respectively.  If your Windows clients have no need for this information or if you find that permissions on Unix executables and scripts are being messed up, set them both to **No** instead. 
- To activate the new file naming settings, hit the **Save** button at the bottom of the page. 

Again, these options can be set for all shares by clicking on the **File Share Defaults** icon on the main page, followed by *File Naming*. 

[[File:Samba-Edit-File-Naming.png|frame|none|Edit File Naming]]

### Editing other file share options
There are a few more file share options related to locking and automatically run commands that you can set using this module as well. Those used for locking control the behavior of Samba when a Windows client tries to lock a file to gain exclusive access, so that it can cache data in the file without having to contact the server for every read or write. By default, locking is fully enabled and implemented in exactly the same way as it is on Windows servers, so there is generally no need to change these settings. 

Samba can also be configured to run shell commands when a client connects or disconnects, either as root or as the connecting Unix user. This can be useful if you want to move newly added files to some other directory or perform some kind of processing on them. 

To edit the module's other file sharing options, follow these steps : 
- Click on the name of the share to edit on the main page, and then on the **Miscellaneous Options** icon on the share editing page that appears. 
- If this share is exclusively for read-only use (for example if you are sharing some kind of read-only media like a CD), then the **Fake oplocks?** field can be safely changed to **Yes** to boost performance. This tells Samba to simply grant all lock requests by clients and not to bother actually keeping track of who has locked what, which can boost performance.  None of the other locking fields should be touched unless you really know what you are doing, as the defaults will work fine and any other settings may lead to data corruption if multiple clients try to access the same files. 
- To limit the number of clients that can be connected to this share at any one time, select the second radio button in the **Max connections** field and enter a number into the adjacent text box. This can be useful if you want to limit the load on your system. If **Unlimited** is selected, no maximum will be placed on the number of concurrent connections. 
- The fields **Command to run on connect** and *Command to run on disconnect* allow you to enter shell commands that will be run by Samba as the authenticated user at connection and disconnection time. They will always be run in the share directory, and special % codes like %U for the connecting user or %S for the server name can be used in the command. 
- Similarly, the **Command to run on connect as root** and *Command to run on disconnect as root* fields can be used to enter shell commands that will always be run as the Unix root user. However, they will be run in root's home directory instead. 
- Hit the **Save** button to activate the new locking and command settings. 

One thing to remember about locking and Samba is that locks taken out by SMB clients will not generally effect or be detectable by Unix programs or NFS clients. This means that data corruption can still happen if Unix and Windows programs open the same file, or if the same NFS exported directory is shared by two different Samba servers. 
:[[File:Samba-Edit-File-Misc.png|frame|none|Samba - Miscelleanous File Defaults]]

### Editing printer share options
Once a printer share has been created, there are several options that you can set for it. Most of them relate to the commands that Samba will run to print a new job, list the queue or cancel a job. By default, appropriate commands for the print system in use (explained in the **Configuring printers** section) will be used - however, there are times that you will want to specify additional parameters or even use a completely different command. 

To edit printer options for a share, follow these instructions : 
- On the module's main page, click on the name in the table of the printer share that you want to edit. On the form that appears, hit the **Printer Options** icon at the bottom of the page. 
- To prevent clients using up all the disk space in the printer's spool directory with large jobs, change the *Minimum free space* field. You must enter a number of kilobytes that will always be left free on the filesystem. 
- To change the command that Samba will run to print a submitted file, edit the **Print command** field. The special codes %f (for the temporary file to print) and %p (for the printer name) can and should be used in the command, so that you can enter for example something like *lpr -P%p %f ; rm %f*. Your command must always delete the temporary file (as the example does), as the server will not do this for you. All the usual shell meta-characters like ;, & and > can be used, which allows you to enter quite complex series of commands. Whatever command you enter will always be run as the Unix user connected to the printer share. 
- To edit the command that Samba uses to list jobs waiting to be printed on some printer, select the second radio button in the **Display queue command** field and fill in its text box.  Whatever you enter must produce output in the format generated by the standard BSD lpr command so that Samba can parse. If the special code %p appears in the command, it will be replaced with the name of the printer. 
- Similarly, you can change the commands that Samba runs to delete, pause and un-pause a print job by editing the *Delete job command*, **Pause job command** and **Unresume job command** fields respectively. All can and should use the codes %p for the printer name, and %j for the job ID. For most print systems, there are no defaults for the pause and un-pause commands as those features are not supported. Generally you will not need to change these fields. 
- As the **Adding a new printer share** section explains, the **Printer driver** field can be used to enter the model of the attached printer (as recognized by Windows) so that clients can automatically select the right driver. 
- When you are done with this page, hit the **Save** button to update the Samba configuration file and thus activate the new settings. 

You can also edit these settings for all shares by clicking on the **Printer Share Defaults** icon on the module's main page and then on **Printer Options**. In fact, all of the command options make much more sense to edit globally as the same commands are likely to be needed for all printers. 

### Editing share defaults
As the previous few sections in this chapter have mentioned, the Samba configuration allows you to define defaults that apply to all shares unless specifically overridden. This can be done by clicking on either the **File Share Defaults** or **Printer Share Defaults** icon on the main page, editing the contents of the form that appears and hitting **Save**. However, most of the options in this form are not particularly useful to set globally, except maybe **Available?** and **Browseable?**. 

More usefully, you can click on one of the icons on the defaults page and change settings that will apply to all file or printer shares. In the case of the **Security and Access Control** icon (which appears on both pages), and global defaults that you set will apply to both file and printer shares, as Samba does not differentiate between them. 

Any option that is set globally will appear as the default on per-share forms. For example, if you fill in the **Delete job command** field under **Printer Options** on the **Printer Share Defaults** page and then went to the same page for a specific printer, the same value would appear. Even though the command does not actually appear in the configuration file for the printer, Webmin still displays it because as the default it will be used. Of course, if you enter a different command for the share, it will override the global setting and thus be used and display instead. This behavior may be a little confusing, as it is not the way that other Webmin modules usually work. 

### Configuring networking
This module can be used to set various Samba options that control how the entire server appears to and behaves for Windows clients. You can change the workgroup (under which the system is listed in the network neighborhood display), the server's name and any aliases, and the description that appears next to the name. Options related to the file sharing protocol and authentication method used can also be edited, in order to support old clients. 
:[[File:Samba-Windows-Networking-options.png|frame|none|Windows Networking options]]

It is even possible to set up your system as a WINS server or client, a protocol that some Windows clients use to find IP addresses for SMB server names if DNS is not available. The biggest difference between WINS and DNS is that clients can register their own names and IP addresses with a WINS server, rather than having it done by an administrator. It is most useful on small file-sharing networks that do not have a DNS server. 

To edit these windows networking options, the instructions to follow are : 
- On the module's main page, click on the **Windows Networking** icon in the **Global Configuration** section to bring up the form shown in the screenshot below. 
- To set a workgroup for your server, select the second radio button in the **Workgroup** field and enter a short name into the text box next to it. If your network already has a few SMB servers that are members of a workgroup, this server should be made a member too. 
- If your network already has a WINS protocol server, select **Use server** in the **WINS mode** field and enter its IP address.  If not, you should choose **Be WINS server** so that Windows clients can use your system to lookup IP addresses for SMB server names. More recent versions of Windows (and Linux clients) do not need to use WINS, as they can look up server names in the DNS - assuming your network has a DNS server that has entries for all your hosts. 
- To set a description for your system, fill in the **Server description** field with something like *Corporate file server*. 
- Normally, Samba will use the first part of your system's DNS name as the SMB server name. To change this, enter something else in the **Server name** field. Clients will be able to refer to this server by whatever name you specify. 
- To define alternate names that clients can use to refer to your server, fill in the **Server aliases** field with a space-separate list of names. 
- If you want your system to be the master browser for a network (the server that maintains lists of other SMB servers and clients on the network, as seen in Window's network neighborhood), change the **Master browser?** field to **Yes**. If you are running multiple Samba servers on the same subnet, this option should be set for only one. If there are other Windows or Samba servers on the network that want to be master browsers, the one with the highest operating system level will win the 'election' that decides who gets the job. You can increase your system's change of winning by increasing the **Master browser priority** field - the default of 20 will win against Windows 95 systems, but you would need to enter 65 to beat Windows NT servers. 
- To have your Samba server contact another SMB server to validate passwords instead of checking its own user list, select *Password server* from the **Security** menu and enter the other server's hostname or IP address in the **Password server** field. Otherwise, leave the field set to **Default** or **User level**. **Share level** security is rarely used anymore with modern clients, and **Domain** security is too advanced to cover in this chapter. 
- Normally, an SMB server broadcasts information about itself to other servers on the network so that it can be included in browse lists. However, if your network spans multiple subnets then broadcasts from one system may not reach others. To get around this problem, the **Remote announce** to table can be used to specify the addresses of browser master servers to which this server's IP address and workgroup should be sent.  To configure remote announcements on this page, first select the **From list** option above the table. Then in the **IP address** field of each row enter the hostname or IP address of a server to announce to, and in the **As workgroup** field the name of the workgroup that your server should appear under. If the second field is left empty, the servers real workgroup (set in step 2) will be used. To enter more than two remote servers you will need to save and re-open this page so that more empty rows appear in the table. 
- Finally, click the **Save** button to activate the new networking settings. 

:[[File:Samba-Unix-Networking-Options.png|frame|none|Unix Networking options]]
Samba also has numerous global options related to networking that control such things as the IP address to listen on, whether to send keep-alive packets and how long clients can be idle for before they are disconnected. These can be used to tune your server's performance, or limit access to only clients on a local network. To edit them, follow these steps : 
- Click on the **Unix Networking** icon on the module's main page. 
- To have Samba disconnect clients that have been inactive for too long and do not have any files open, select the second radio button in the **Idle time before disconnect** field and enter a number of minutes into the adjacent text box. If **Never** is selected instead, clients will never be automatically cut off. Because Samba starts one server sub-process per client, this feature is useful for cutting down the amount of memory that they use up. And Windows clients will automatically re-connect if disconnected, so there is no down side to using it. 
- To have Samba send packets to detect if clients have crashed without properly disconnect, select the **Send every** option in the **Keepalive packets** field and enter the number of seconds (such as 60) that a packet should be sent. Because clients can hold locks on files, a dead client may end up locking a file that other people need access to, even though it is clearly not using it. The same thing can be achieved by selecting the **SO_KEEPALIVE** checkbox in the **Socket options** field.  This tells the operating system kernel to do basically the same thing, and so should be used in preference. The only problem is that you cannot specify the keep-alive packet interval. 
- To restrict Samba to listening for connections on a single one of your system's IP addresses, fill in the **Listen on address** field. On a machine with one interface connected to an internal network and one connected to the Internet, this feature can be used to prevent outsiders connecting to your Samba server. 
- Hit the **Save** button at the bottom of the page to activate the new network settings. 

As you will see when you look at the actual form, there are many more fields on it than those documented above. However, the rest have extremely specialized uses and thus do not need to be touched by the average administrator.

### Configuring authentication
:[[File:Samba-Password-Options.png|frame|none|Authentication]]
The SMB protocol allows users to change their passwords for a server from a client system. For a Samba server, this causes the encrypted passwords file to be updated, assuming one is in use (as is usually the case). You can also configure the server to change the user's Unix password as well, which makes sense if they are being kept synchronized. 

Another authentication-related feature supported by Webmin is username mapping. This allows you to map fake client login names to real Unix usernames, and can be useful if users prefer to use their full names to login (like *Jamie Cameron* instead of *jcameron*) or if you have a client that is regularly moved between two different networks, each of which has different SMB accounts. 

To set these global authentication options using this module, the steps to follow are : 
- On the module's main page, click on the **Authentication** icon. 
- As explained in the **Managing Samba users** section, the *Use encrypted passwords?* field determines if Samba uses its own separate password file or the standard Unix user database.  Because all recent versions of Windows use a password encryption format that is incompatible with the Unix format, this field should generally be set to **Yes**. 
- To allow logins by users who have no password set, select **Yes** for the **Allow null passwords?** field. 
- The **Password program** field sets the program that Samba will use to change a user's Unix password if synchronization is enabled. If **Default** is selected /bin/passwd will be used, which is correct for most Unix systems. You can enter a different command by selecting the second radio button and fill in the text box with something like _/usr/bin/yppasswd %u_. The %u code is replaced with the name of the user whose password is being changed, and is required because the command is run as root. 
- To have same change a user's Unix password when his SMB password is changed over the network, set the *Change Unix password as well?* field to **Yes**. Synchronization in the other direction is unaffected though - see the **Managing Samba users** section for more details on how that works. 
- To define 'fake' SMB accounts, select **Listed below** in the **Username mapping** field. In the table below it, each row specifies a mapping - the first field must contain a valid Unix username, and the second an SMB login name of your choice.  Clients logging in with one of these made-up account names must of course provide the correct password for the associated Unix user. 
- Hit the **Save** button at the bottom of the page to activate your new authentication settings.

### Configuring printers
If you are sharing printers from your server, you will probably need to adjust the global printing options. These determine the print system commands that Samba will use to submit, list and delete jobs, the file it gets the list of printers from, and other related settings. To edit them, the steps to follow are : 
- Click on the **Windows To Unix Printing** icon on the module's main page to bring up the printer options form. 
- From the **Unix print style** menu select the type of print system in use on your box. Unfortunately, practically every different flavor of Unix has its own set of programs and configuration files for handling printers and print drivers, each of which must be treated differently by Samba. The options that you may want to select from are :
#* <b>BSD</b> The traditional Unix print software, found on FreeBSD, NetBSD and older Linux distributions. 
#* <b>SYSV</b> The print system used on Solaris, UnixWare and a few other versions of Unix.
#* <b>HPUX</b> The print system shipped with HP/UX.
#* <b>AIX</b> The print software that comes with AIX, IBM's version of Unix.
#* <b>CUPS</b> The superior Common Unix Print System, which is included with many new Linux distributions.
#* <b>LPRNG</b> An improved version of the old BSD print system, used on all Linux systems that do not run CUPS. Most packages of Samba will have this option set correctly in the default configuration file.  The [[PrinterAdministration|PrinterAdministration]] page explains in more detail what the differences between the various print systems are, and how to select the right one for your operating system. 
- Normally, Samba will find all the printers on your system and make them visible to clients when the special printers share exists. To disable this, change the **Show all printers?** field to **No** instead. The printers will still be accessible using an explicit `\\servername\printername` path though. 

- When the **Printcap file** field is set to **Default**, Samba will get the list of printers available on your system from the standard `/etc/printcap` file. This is fine if you want them to all show up, but sometimes you want to hide some printers from users. To do this, create a fake printers file that looks like:
  
  ```
  printer1|Description for printer 1:
  printer2|Description of second printer:
  ```
  
  Set this field to the path to this file.  Only the printers listed in it will be available automatically when a printers share exists. 
- Samba caches the output from whatever command is used to list waiting print jobs (such as lpq) in order to reduce the frequency with which it is run. By default this cache time is 10 seconds, but you can increase or decrease it using the *Printer status cache time* field. If your lpq command is very slow you may want to increase it. 
- Hit the **Save** button to activate your new printing settings.


### Module access control
As [Webmin Users](/docs/modules/webmin-users) explains, once a Webmin user has been granted access to a module he can be further restricted to only a subset of its functions. For the Samba module, you can allow a user to edit only certain types of settings in certain shares while denying him the ability to create new shares or edit global options. This can be useful if you want to let someone edit the settings that apply to the sharing of only his own directory, while protecting the rest of the Samba server's configuration. 

I would advise against granting even limited access to this module to un-trusted users though, as it has many features that could be used by a malicious to gain root access to your system. For example, someone could allow guest access to a share with root permissions, allowing the remote modification of any file. Or they could set the command run as root at client connection time to something that changes the root password. 

Instead, these access control features are should only be used to limit the changes that an in-experienced but still trusted user can make. To restrict such a user to only editing a few shares, the steps to follow are : 
- In the [Webmin Users](/docs/modules/webmin-users) module, create a user with access to the module, or modify an existing user to give him access. 
- Click on Samba Windows File Sharing next to the name of the user to bring up the module access control form. 
- Change the **Can edit module configuration?** field to **No**. 
- Set all the fields from *Can apply changes? *down to *Can maintain auto UNIX to SAMBA users sync?* to **No** as well, as they control access to global settings that the user should not touch. 
- To hide shares that he cannot access from the user, change the **Hide inaccessible objects?** field to **Yes**. Leaving it set to **No** lets him see other shares, but if he tries to click on any of them an error message will appear. 
- In the **Access file shares** field, de-select **create** but leave **read** and **write** selected. Do the same for the *Access print shares* field. This does not mean that he can edit all shares - later fields control exactly which ones he can configure. 
- Change the **Enable per-file_share acls?** and *Enable per-print-share acls?* fields to **Yes**, so that the options set in the next step are used. 
- In the **Per-share ACLs** table, select **n/a** under *Access share* and **Connections** for all the shares that he should not be allowed to configure. You should definitely do this for the **global** share as well, as it sets the defaults for all others. For the shares that you do want the user to manage, select **read write** in the **Access share** column. To allow the user to kill clients connected to this share, select **kill** in the **Connections** column - or to let him only see connected clients, choose **view** instead. The former option is not a good idea security-wise though, as it allows the user to terminate any process on your system. The radio buttons in the **security**, **permissions**, **file naming** and *miscellaneous or printer* columns control which of the sub-icons on the share editing form the user has access to. For each you can choose either **edit** to allow editing, **view** to only let him look at the settings or **n/a** to deny access altogether. 
- Hit the **Save** button at the bottom of the page to activate the new access control settings. 

### Configuring the Samba Windows File Sharing module
The module assumes that you have installed the Samba package available for your operating system or Linux distribution, or have compiled Samba from source code if no such package is available. If this is not the case (for example if you have compiled the latest version instead of using a package), the paths that it uses for the Samba programs and configuration files will be wrong. This will cause the module's main page to incorrectly display an error message about Samba not being installed. 

Fortunately, these paths can be easily changed by clicking on the standard **Module Config** link in the top-left corner of the main page. On the form that appears if you follow this link are fields that control the module's user interface (under *Configurable options*) as well as the fields for configuration file and program paths (under **System configuration**). The first group of settings can be safely changed at any time, but those that set paths do not generally need to be adjusted as the defaults are usually correct.

### Edit Config File
The samba configuration file can be manually edited as well:
[[File:Samba-Edit-Config-File.png|frame|none|Samba - Edit Config File]]

### Accessing SWAT from Webmin
{{Note|Samba 4 does not contain SWAT anymore.}}
SWAT (which stands for Samba Web Administration Tool) is a program similar to Webmin's Samba module, but included as standard with Samba itself. It provides a web-based administration interface to the configuration file that allows you to create and edit shares and global settings. SWAT is usually run from a super-server like inetd or xinetd, which makes it appear as a web server, usually on **port 901**. Most Samba packages for Linux include the program and an xinetd service for it, but have it disabled by default. 

You can also access SWAT through this Webmin module, instead of needing to set it up to be run from inetd or xinetd. Unfortunately, this will not work if Samba has been configured to only allow connections from some IP addresses (using the **Hosts to allow** field) on the global **Security and Access Control** page. Because SWAT also uses Samba's configuration files, any IP restrictions that apply globally will apply to it as well. When it is run from Webmin, SWAT is unable to determine the connecting IP address and fails if any IP restrictions are in force. 

Assuming that this is not the case on your system, you can use it by following these steps : 
- On the module's main page, click on the **SWAT** icon. If this is the first time you have done so, the **SWAT Login** form will appear. 
- If you do get the login form, enter *root* in the **Username** field and the root user's password in the **Password** field.  Because it can be used to totally re-configure your Samba server, SWAT requires users to authenticate first. Webmin will remember the login and password that you enter so that the login form will be bypassed in future. 
- After you have logged in the SWAT main menu will appear. Along the top are icons for various parts of the Samba configuration, which when clicked on bring up forms for editing settings.  Some things that can be configured in Webmin cannot be in SWAT, and vice versa - so you may find it superior to the Webmin interface for some tasks. 
- To return to the module's main page, click on the **Return to share list** link at the bottom of any page. To have Webmin forget your SWAT password so that you can login again, hit the *Logout of SWAT* link in the bottom-right corner. 

Be aware that when you login to SWAT through this module, the username and password that you enter are stored un-encrypted in the file /etc/webmin/samba/swat which is readable only by root. If this bothers you for security reasons, either do not use this feature of the module, or remember to click the **Logout of SWAT** link after you are done using it so that the window of exposure is limited.
