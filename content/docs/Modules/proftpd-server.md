---
title: "ProFTPD Server"
date: 2023-05-26
weight: 445
---

This page explains the FTP protocol, and then describes how to set up the ProFTPD server and how to configure it for various purposes. 

{{Note|As modern FTP-clients support SSH, consider to use an [[SSH Server]] instead of an FTP Server, for (much) more security than any FTP server can promise}}

=== Introduction to FTP and ProFTPD ===
FTP stands for file transfer protocol, and along with telnet and SMTP is one of the oldest protocols still in common use on the Internet. FTP is designed to allow client programs to read, write and delete files on a remote server, regardless of the operating system that the server is running. Essentially, it is a file sharing protocol, but unlike the more common NFS and SMB protocols, it is better suited to use over a slow or high latency network. 

Typically, FTP is used to transfer files from one system to another. Sometimes those files are Linux distribution CD images or RPM packages, downloaded by various clients hosts on the Internet from a large server system that hosts them for everyone to access. Other times the files are pages for a web site, uploaded by an FTP client run by the sites owner to a system that runs both the web server and an FTP server. 

Even though the FTP protocol has been mostly replaced by HTTP as a method of downloading files, it still has many advantages. The biggest is the ability of clients to upload files to the server, assuming that is has been configured to allow them. Another is a semi-standard directory listing format, which clients can use to fetch a list of files in a directory from the server. 

When an FTP client connects to a server, it must first authenticate itself before any file transfers can take place. Often clients will login as the special anonymous user, which requires no password and is usually configured to be only able to download files. On Unix systems, most FTP servers allow any local user to login with the same username and password that he would use for telnet or SSH, and give his client access to the same files with the same permissions. 

Another unique feature of the FTP protocol is its support for translating files between the data format used on the client and that used on the server. The most common use of this is the conversion of text files between the Unix, Windows and MacOS formats, each of which uses different characters to represent the end of a line. This feature can be disabled for the transfer of binary files such as images, executables and ISOs, as it corrupts non-text data. 

Many different FTP client programs exist, from the basic Unix ftp command to browsers like IE and Mozilla. Every modern operating system has at least one, and almost all include a client of some kind as standard. FTP servers are also plentiful, but this chapter focuses on only one - ProFTPD, which in my opinion is the most flexible server available for Unix operating systems. 

Even though all varieties of Unix ship with an FTP server as standard, the supplied server is usually either very basic and lacking in features, or the more powerful WU-FTPd. Although the latter has many configurable options, but is not as capable as ProFTPD when it comes to virtual hosting, directory restrictions and locking users into their home directories.

ProFTPD generally uses a single configuration file, found at /etc/proftpd.conf. This file is made up of directives, each of which usually occupies a single line and has a name and value. Each directive sets a single configurable option, such as the name of a hidden file or the path to a welcome message. There are also special container directives for grouping other directives that apply only to a single virtual server or directory, which span multiple lines. 

=== The ProFTPD Server Module ===
The ProFTPD Server module icon can be found in Webmin under the Servers tab on the main menu. When you click on it, the module's main page as shown in the image below will appear, assuming that you actually have the server installed. 

<img src=http://www.webmin.com/screenshots/chapter40/figure1.gif><br>
The ProFTPD Server module

If the main page instead displays an error message like *The ProFTPD server /usr/sbin/proftpd could not be found on your system*, then the server is probably not installed and thus the module cannot be used. Most Linux distributions include a ProFTPD package on their CD or website, so use the Software Packages module (covered in chapter 12) to install it. If no package exists, download the source code from www.proftpd.org, compile and install it. 

If you already have some other FTP server installed, it should be removed first so that they do not clash. 

Another error that the main page might display is *The program /usr/sbin/ftpd does not appear to be the ProFTPD server*. This will occur if Webmin detects that some other FTP server is installed instead - if so, you will need to remove it and install ProFTPD. 

ProFTPD can be run in two different modes - either as a stand-alone daemon process that listens for FTP connections, or from a super-server like inetd or xinetd. The former accepts connections faster, but at the cost of more memory being used up by a process that is running all the time. The latter is better for systems that do not expect to receive a lot of FTP traffic, as the ProFTPD program only gets run when it is needed. 

Because the stand-alone mode is easier to setup and because memory is plentiful on most systems, this chapter assumes that you will be running it in that mode. To start the ProFTPD server process, follow these steps : 
# In the Internet Services and Protocols module (covered on [[Internet Services]]), make sure that any existing service named ftp has '''Program disabled''' or '''No program assigned''' selected.  This ensures that no FTP service will be run by inetd. If you disable a service, make sure to hit the '''Apply Changes''' button on that module's main page to activate your changes. 
# In the Extended Internet Services module, make sure that any services with ftp in their names (such as wu-ftpd, proftpd, or vsftpd) have their '''Service enabled?''' field set to '''No'''.  Again, you will need to hit the modules '''Apply Changes''' to activate any changes. 
# Back in the ProFTPD Server module, click on the Networking Options icon. 
# Select '''Stand-alone daemon''' from the '''Server type''' menu. 
# Click the '''Save''' button at the bottom of the page. 
# Back on the module's main page, a button labeled '''Start Server''' should appear at the bottom. Hit it to start the ProFTPD daemon. 
# If you want the daemon to be re-started at boot time, use the Bootup and Shutdown module to create an action called proftpd that runs the command /usr/sbin/proftpd at boot time. The actual path may be /usr/local/sbin/proftpd or /usr/sbin/in.proftpd depending on which Linux distribution you are running or if you compiled and installed the program yourself instead of using a package. Also, some ProFTPD packages may include a bootup script like this already, which you may just have to enable. 

Once ProFTPD has been started, you can test it by using the command-line Unix FTP client to connect to your own system. Just run ftp localhost, and make sure that you can login as some user other than root. You can verify that the server really is ProFTPD by checking the version displayed by the ftp command just before it prompts for a username, unless it has been configured by default not to display version information.

=== Running ProFTPD from inetd or xinetd ===
Setting up ProFTPD to run from a super-server isn't too hard either, and may be a good idea if your system is low on memory or hardly ever receives FTP connections. Before you can do this, you must kill any existing proftpd server process (easily done with Running Processes module), and disable or delete any action that starts it at boot time. 

If your system uses the superior xinetd, follow these instructions to set up the FTP service. Because many packages include an /etc/xinetd.d configuration file for the server, some of the fields explained below may be already filled in correctly. 
# Go to Webmin's Networking category and click on the *Extended Internet Services* icon. If it does not exist, xinetd is not installed and you will need to set up the server using inetd instead. 
# On the module's main page, check for an existing service named ftp or proftp. If one exists, click on it - otherwise, follow the '''Create a new internet service''' link above or below the table. 
# In the '''Service name''' field, enter ''ftp'' (unless it has already been filled in). 
# Make sure the '''Yes''' option is selected in the '''Service enabled?''' field. 
# Leave the '''Bind to address''' field set to '''All''', and the *Port number* to '''Standard''' or ''21''. 
# Select '''Stream''' from the '''Socket type''' menu, and '''Default''' or '''TCP''' from the '''Protocol''' list. 
# In the '''Service handled by''' field, select the '''Server program''' option and enter the path to the proftpd executable (such as ''/usr/sbin/proftpd'') into the adjacent text box. The path depends on whether you installed the program from a package or compiled it from the source code. 
# In the '''Run as user''' field, enter ''root''. 
# Select '''No''' for the '''Wait until complete?''' field. 
# Leave all the other fields set to their defaults, and hit the '''Save''' or '''Create''' button at the bottom of the form. 
# Back on the module's main page, click the '''Apply Changes''' button below the list of services. 

Alternately, to set up an inetd service for ProFTPD using the Internet Services and Protocols module, follow these steps: 
# Go to Webmin's Networking category and click on the *Internet Services and Protocols* icon. If it does not exist, your system is probably using xinetd instead - see the steps in the previous paragraph for instructions on how to configure it. 
# On the module's main page, click on '''ftp''' in the *Internet Services* table. If it is not visible, enter ftp into the *Edit service* field and hit the button. Either way, the same page for editing the FTP protocol service will be displayed. 
# In the '''Server Program''' section, select '''Program enabled'''. 
# In the '''Program field''', select the '''Command''' option and enter the full path to the ProFTPD server executable into the field next to it, such as ''/usr/sbin/proftpd''. In the '''Args''' field, enter just ''proftpd''. The path depends on whether you installed the program from a package or compiled it from the source code. 
# Set the '''Wait mode''' to '''Don't wait''', and enter ''root'' in the '''Execute as User''' field. All others can be left unchanged. 
# Click the '''Save''' button, and then back on the module's main page hit '''Apply Changes'''. 

Once ProFTPD has been setup to run from inetd or xinetd, you can test it by using the command-line Unix FTP client to connect to your own system. Just run ftp localhost, and make sure that you can login as some user other than root. If your test connection fails with an error like '''Service not available''', the most likely cause is that ProFTPD is configured to run as a stand-alone server. This can be easily fixed by following these steps : 
# Go to the ProFTPD Server module and click on the *Networking Options* icon on the main page. 
# From the '''Server type''' menu in the form that appears, select '''Run from Inetd'''. 
# Hit the '''Save''' button at the bottom of the page. 

The instructions in the rest of this chapter will work fine no matter which mode ProFTPD is running in. The only difference is that the '''Apply Changes''' button will not appear on the main page, as there is no need to re-start a server process for any configuration changes to take effect. Instead, changes will apply to the next FTP session that is started. 

=== Using the ProFTPD Server module ===
ProFTPD uses a very similar configuration file format to Apache, and so the user interface for this module is the same in many ways as the Apache Configuration module. At the highest level in the configuration are global settings that effect the entire server. Below them are virtual servers, and then anonymous FTP options, per-directory options and options that apply only to certain FTP commands.

The options that apply to each connection or FTP command are determined by the virtual server connected to, the type of login, the directory the requested file is in and the specific FTP command used. Options set by objects lower in the hierarchy override those at upper levels, so that you can prevent uploading to a server, but allow it for a directory. Similarly, options for a more specific directory (like /usr/local/upload) override those for its parents (such as /usr/local). 

A special case is the default server, which defines settings for clients that do not connect to any specific virtual server. Unlike Apache, options set in the default server do not effect virtual servers. Instead if you want to specify some setting that effects all of them it must be in the special global section of the ProFTPD configuration. This applies to directory and FTP command specific options as well. 

The module has a page for editing options for each object in the tree, which contains icons linking to objects further down. For example, on the virtual server options page are icons for the various categories of options that apply to that server (such as logging, and user and group), along with icons for any directories or FTP commands that have their own options within the virtual server. There is also an icon for options specific to anonymous FTP connections. 

On each page in the hierarchy are forms for adding objects (such as a directory or group of FTP commands) under it, and a '''Configure''' icon for changing or deleting the current object. Every page also contains an '''Edit Directives''' icon allowing you to view and manually change the ProFTPD directives for the directory, virtual server or whatever it is that the page represents. The exception is the default server page, which has no such icons because it cannot be changed or deleted and because its directives cannot be separated from the rest of the configuration file. 

At first glance, some of the forms in the module may appear daunting as they display fields for almost all of the available ProFTPD options in some category related to an object. However, many of these options are extremely specialized and can be ignore most of the time. The steps in the various sections of this chapter explain which ones your need to modify to achieve some result - the others can be left alone, as their defaults are usually adequate. 

Because each new version of ProFTPD that is released supports new directives, this module can detect the version that you are running and adjust its user interface to display only those fields that are valid for your version. This means that the forms may not look exactly the same on all systems, and that some parts of the instructions in this chapter may not be valid for your FTP server if your are running an older release. 

=== Creating virtual servers ===
Probably ProFTPD's most useful feature is its support for virtual FTP servers. This allows you to define a totally different set of options that apply to clients connecting to a particular IP address. In most ways, they are similar to Apache's IP-based virtual servers, which most website administrators should be familiar with. 

Virtual servers are only really useful if your system has multiple IP addresses. Typically, this is done by adding additional virtual IP addresses to your Internet-connected network interface, as explained on the [[Network Configuration]] page. As usual, any extra IP addresses must be properly routed to your system - if you are connected to an ISP and assigned only a single static address, you cannot just add additional virtual interfaces and expect them to work. Unlike Apache, ProFTPD does not support name-based virtual servers because there is no provision in the FTP protocol for them. Clients never tell the server the hostname that they are connecting to, so the FTP server can only use the IP address that a connection was received on to determine which virtual server the client wants. 

When your system receives an FTP connection, ProFTPD will compare the connected address with those of all configured virtual servers. The first one to match defines the options that apply to the connection. If no match is found, the default server is used instead. 

To add a new virtual FTP server to your system, the steps to follow are: 
# In the Network Configuration module, add a new virtual IP address to the external network interface on your system.  Make sure that it will be activated at boot time and is active now. 
# Back in the ProFTPD Server module, scroll down to the *Create virtual server* form at the bottom of the main page. 
# In the '''Address''' field, enter the IP address that you just assigned. It should not be used by any other virtual server already defined. 
# Leave the '''Port''' field set to '''Default'''. 
# In the '''Server name''' field, select the second radio button and enter a name for this server that will be displayed to connecting clients. For example, you could enter _Example Corporation's FTP server_. If '''Default''' is selected, clients will see a message like ProFTPD 1.2.2rc2 Server instead. 
# Hit the '''Create''' button to add the server. Once it has been created, you will be taken to the new server's options page. 
# Return to the module's main page and click the '''Apply Changes''' button to make it active. 

Once a virtual server has been created, you can set options that apply to it by clicking on its icon on the main page, then on one of the category icons. Some of these are explained in more detail later in the chapter. It is also possible to change the attributes of a virtual server by clicking on the '''Configure Virtual Server''' icon, editing the fields on the form (which have the same meanings as those on the creation form) and clicking '''Save'''. Or you can remove it altogether by hitting the '''Delete virtual server''' button on the configuration form. 

=== Setting up anonymous FTP ===
In its default configuration, ProFTPD will generally allow all Unix users to login with their normal passwords and access all files on the system with the same permissions that they would have if logged in via telnet or SSH. Some packages also have anonymous FTP enabled for the default server as well, so that anyone can connect as the anonymous user and view files in a specific directory. To set up anonymous FTP for a new virtual server, configure what clients can do and which directories they can access, follow these steps : 
# On the module's main page, click on the icon for the default or virtual server that you want to configure anonymous FTP for. 
# On the virtual server options page, click on the *Anonymous FTP* icon. If this is the first time that it has been setup for this server, a small form will appear for entering anonymous FTP settings. 
# In the '''Limit to directory''' field, enter the directory that anonymous clients should be restricted to, such as ''/home/example.com/anonftp''. 
# In the '''Access files as user''' option, select the second radio button and enter the name of an unprivileged Unix user such as ''ftp'' or ''nobody''. Clients will not only be restricted to the chosen directory, but will also be only able to access files with the permissions of that Unix user. Naturally, you should make sure that it can actually read and list the directory and files that it contains. This user must not be in ProFTPD's denied list, or have an invalid shell. See the '''Limiting who can login''' section later in the chapter for more information on editing this list and allowing users with any shell. 
# If you are happy for clients to use the group permissions of the user set in the previous field, leave the *Access files as group* field set to '''Default'''. Otherwise, select the second radio button and enter a group name into its field. 
# Hit the '''Create''' button to set up the initial anonymous FTP configuration. Assuming it is successful, the browser will be re-directed to the anonymous FTP options page on which are icons for the various categories of configurable options that relate to anonymous FTP connections. 
# Click on '''Authentication''' and in the Username aliases table enter ''anonymous'' under '''Login username''', and the name of the user that you chose in step 4 under '''Real username'''. This tells ProFTPD that clients logging in as anonymous should be given the permissions of that user. 
# Click the '''Save''' button to return to the anonymous FTP options page. 
# In the '''FTP commands''' field, enter ''WRITE'' and hit the '''Create''' button to start the process of defining options that apply to FTP commands that modify data on the server. You will be taken to the per-command options page. 
# Click on the '''Access Control''' icon, and select '''Deny all clients''' in the '''Access control''' policy field. This tells ProFTPD to block attempts by anonymous clients to upload, delete or rename files. 
# Click the '''Save''' button. 
# Return to the module's main page, and hit '''Apply Changes'''.  To make sure that everything is working, try logging into the virtual server as the anonymous user and downloading some files. 

If you are using your system to host multiple web and FTP sites for different customers, each can be given his own virtual anonymous server to make files available to people via FTP. Browsers assume that ftp:// URLs require an anonymous login and most don't deal well with FTP servers that require authentication. 

=== Restricting users to their home directories ===
By default, clients that login to ProFTPD as a valid Unix user (not anonymous) can browser your system's entire filesystem, just as they could if the user logged in via SSH or telnet. However, this is not always desirable on a system that has multiple un-trusted users whom you want to prevent seeing each others files. Even though Unix permissions can be used to stop users listing each others' directories, they cause problems if you are also running a webserver and need its httpd user to have access to everyone's files. 

Fortunately, ProFTPD makes it easy to restrict users to their home directories or to some other directory. Because this only applies to FTP connections, it is pretty useless if those same users can telnet or SSH in. However, it is easy to allow a user to connect only via FTP by giving him a shell like /bin/false. On a virtual hosting server, users only really need to upload files for their websites and do not need Unix shell access at all. Just make sure that /bin/false or whatever non-functional shell that you choose is included in the /etc/shells file so that ProFTPD does not deny the users access. 

To restrict the directories that FTP clients can access, follow these steps : 
# If you want to restriction to apply to only a single virtual server, click on its icon on the module's main page and then on the '''Files and Directories''' icon on the virtual server options page. However, this is not advisable as it may allow users to avoid the restriction by connecting to another virtual server. Instead, you should just hit the '''Files and Directories''' icon in the '''Global Configuration''' section on the main page - any restrictions defined on it will apply to all servers.  Either way, the page for configuring how the server lists directories and which ones are available (shown in the screenshot below) will appear. 
# The '''Limit users to directories''' field is actually a table that allows you to enter one directory limitation at a time.  It will always have one blank row, and if this is the first such restriction you have created that is all it will contain.  In the '''Directory''' column, select '''Home directory''' to if that is where you want users to be restricted to. Alternately, you can select the third radio button and enter a path like ''/home'' or ''/var/www'' to confine users to that directory.  It is also possible to enter a path relative to the users' home directories, such as ''~/public_html''. In the '''Unix groups''' column, either select '''Everyone''' to have the restriction apply to all users, or select the second radio button and enter a group name to have it apply only to the members of that group.  Multiple groups can be entered by separating their names with commas, like ''users,staff''. 
# Click the '''Save''' button to return to the virtual server options page. If you want to add another restriction (such as for a different group and directory), click on '''Files and Directories''' again and fill in the new blank row in the table. 
# When done, return to the module's main page and hit the *Apply Changes* button to make the restrictions active. 

<img src=http://www.webmin.com/screenshots/chapter40/figure3.gif><br>
The files and directories form

From now on when restricted users connect, they will be unable to see files outside the specified directory or even work out which directory they have been limited to. Unlike some other FTP servers that support this kind of restriction, there is no need to copy any files or libraries like /bin/ls into the directory, as ProFTPD does not depend on any external programs. 

=== Limiting who can login ===
ProFTPD does not allow every Unix user to login, even if they have valid usernames and passwords. The separate /etc/ftpusers file lists users who are not allowed to authenticate, which typically include system accounts such as bin, daemon and uucp. In addition, there is a separate configuration option that controls whether the root user is allowed to login or not. By default it is not, because passwords sent by the FTP protocol are not encrypted and thus allowing root to authenticate could be a major security risk. 

ProFTPD also by default prevents users without a valid shell from logging in. A valid shell is one listed in the /etc/shells file. This feature can be useful for preventing a large group of users from logging in, such as those that are supposed to be only able to connected to a POP3 server to download their email. However, it can be turned off if necessary. 

To edit the list of denied users and other login restrictions, follow these steps : 
# On the module's main page, click on the '''Denied FTP Users''' icon. In the form that appears is a text box listing all blocked Unix users. Edit it to add or remove any that shouldn't or should be allowed to login, and hit the '''Save''' button. 
# To allow the root user to connect, click on the '''Authentication''' icon and change the '''Allow login by root?''' field to '''Yes'''. 
# To allow users with unlisted shells to login, change the *Only allow login by users with valid shell?* field to '''Yes''' as well. 
# Hit the '''Save''' button to return to the main page, then click '''Apply Changes''' to make the new restrictions active. 

The options for allowing the root user and users with invalid shells to login can also be set on a per-virtual server basis as well, under the '''Authentication''' icon on the virtual server options page. However, it is not generally useful from a security point of view to allow clients of just a single server to login, as users can choose any server to connect to. 

=== Setting directory listing options ===
Normally, when an FTP client requests a directory listing ProFTPD will return a complete accurate list in the format produced by the ls -l command. Sometimes though this gives away too much information about your system, such as the names of users and groups or symbolic link destinations. Often it can be useful to hide certain files that are not relevant to clients by must be kept in an FTP accessible directory for other reasons. This kind of information hiding is best applied to anonymous FTP users, as they should not be able to discover anything about your system that they do not need to know. 

To change the format of directory listings, follow these steps: 
# On the module's main page, click on the icon for the default or virtual server that you want to change directory listings for to bring up its options page. 
# Assuming that you want to only change the listed information for anonymous clients, click on the '''Anonymous FTP''' icon to go to the anonymous FTP options page. Otherwise normal Unix users will be effected as well. 
# Click on the '''Files and Directories''' icon to bring up a form similar to the one in Figure 40-3 for setting the various listing options. 
# To hide files with certain group owners, enter one or more group names separated by spaces into the *Hide files owned by groups* field. Be aware that files hidden in this way can still be downloaded, renamed or deleted unless Unix permissions or the server's configuration prevents it. 
# Similarly, to hide files with certain user ownership, fill in the '''Hide files owned by users''' field with a list of Unix usernames. 
# To hide files that the anonymous FTP user would not be able to read, change the '''Hide files that cannot be accessed?''' field to '''Yes'''. 
# To have ProFTPD convert symbolic links in listings to their target file permissions and size, change the *Show symbolic links?* field to '''Yes'''. Normally both the link and target name are shown, and the displayed permissions and ownership are those of the link. However, even with this feature enabled the link target must still be within the anonymous FTP directory. 
# Normally, directory listings include the real user and group owners of files. To change this, set the *Fake group in directory listings?* field to '''Yes, as group'''. Then from the box below select either '''ftp''' to force the group owner to be always shown as ftp, or the third radio button to have it shown as whatever group you entered into the adjacent text box. The *Connected group* option only really makes sense for non-anonymous clients, as it makes files appear to be owned by the primary group of the connected user. 
# Similarly, you can change the Unix user owner of files with the '''Fake user in directory listings?''' field. If *Connected user* is chosen, files will appear to be owned by the user currently logged into the FTP server. 
# By default, ProFTPD will show real Unix file permissions in listings. To force the display of fakes instead, select the second option in the '''Fake permissions in directory listings''' field and enter an octal number like ''0644'' of the kind used by the chmod command. This has no effect on the actual permissions that apply if a client tries to download or upload a file of course. 
# To hide dot files like .login and .profile in listings (as the ls command usually does), set the *Show files starting with . in listings?* field to '''Yes'''. 
# Finally, hit the '''Save''' button at the bottom of the page to update the ProFTPD configuration file. 
# Return to the module's main page and press the '''Apply Changes''' button to make the settings active. 

As well as hiding certain files (as explained in steps 4 and 5), you can also prevent clients from reading or writing those files altogether. This can be done using the '''Make hidden files inaccessible?''' field, explained in the '''Restricting access to FTP commands'''section later in the chapter. 

=== Message and readme files ===
ProFTPD can be configured to display messages to clients when they login or enter certain directories. This can be useful for notifying users of possible mirror sites, the locations of various common files on the server, and the details of the contents of a directory. 

To set the messages that are displayed to clients, follow these steps : 
# If you want the messages to be used by all virtual servers, click on the '''Authentication''' icon on the module's main page.  To set messages for a specific virtual server, click on its icon and then on '''Authentication''' on the server options page.  Either way, the same form will be displayed. It is also possible to set most of the message file options below for only anonymous clients by clicking on the '''Anonymous FTP''' icon on the virtual server page and then on '''Authentication'''. Naturally, you cannot set the pre-login message because the server does not know if a client is anonymous or not at that stage. 
# In the '''Pre-login message file''' field, enter the full path to a file whose contents should be sent to clients as soon as they connect. If you don't want any message file to be used at all, select '''None''' instead. 
# In the '''Post-login message''' file field, enter the path to a text file whose contents will be sent to clients after they have been properly authenticated. If the client is limited to a directory (because it logged in anonymously or has a home directory restriction in force), the file must be within and relative to that directory. If the filename is relative (like ''welcome.txt''), it will be searched for in the directory that the client is initially placed in. 
# To set a message sent to clients when they request to disconnect, fill in the '''Logout message file''' field. Again, this must be relative to and under any directory that the client is restricted to. 
# If you have a restriction on the maximum number of simultaneous logins in force, you can set the message sent to clients blocked by it by filling in the '''Too many connections message file''' field. You should enter a full path, which can be anywhere on your system. See the '''Limiting concurrent logins''' section for more details.# Hit the '''Save''' button at the bottom of the page to go back to the global, virtual server or anonymous FTP options page. 
# Click on the '''Files and Directories''' icon on the same page. 
# In the '''Directory README filename''' field, enter a relative name like readme.txt that will be searched for in each directory that a client enters. If this is the first time the client has entered the directory in this session (or if the file has changed since the last time), its contents will be sent to the FTP client. 
# To have the server send a message to clients suggesting that a particular file should be read, fill in the *Notify user of readme files matching* field. If files in the directory matching the specified regular expression (like ''README.*'') exist, a short message containing their names and modification times will be sent. 
# Click the '''Save''' button on this form, then return to the module's main page. Finally click the '''Apply Changes''' button to activate the new message file settings. 

The files sent to the client by the options covered above can contain certain special cookies that start with a %, which are replaced by ProFTPD with text determined at the time of sending. According to the ProFTPD documentation, the currently supported cookies are : 

Not all may make sense in all situations though - for example, %U will not be set in the pre-login message file. 

=== Setting per-directory options ===
The ProFTPD module allows you to set options that apply only to a specific directory, rather than globally or to an entire virtual server. This allows you to do things like hide a directory from clients, allow uploads by anonymous clients in just one location, or set the user and group ownership of files added to a directory. 

To create a new set of per-directory options, follow these steps: 
# If you want the options to apply to all virtual servers, enter the directory into the '''Directory path''' field in the *Add per-directory options for* form on the module's main page and hit the '''Create''' button. Alternately, you can limit them to a particular virtual server by clicking on its icon and using the same form on the virtual server options page. Or you can define options that only apply to anonymous clients by hitting the '''Anonymous FTP''' icon for a virtual server and using its directory options creation form. In all cases, the directory should be entered as an absolute path like ''/usr/local''.  It is also possible to specify a path relative to the connecting user's home directory, like ''~/public_html''. You can even enter a path in a particular user's home directory, like ''~jcameron/www''.  Normally, the options will apply to the directory and all its contents and subdirectories. To have them apply to only the contents and not the directory itself, add /* to the end of the path that you enter, like ''/usr/local/*''. 
# After hitting '''Create''', you will be taken to a page of option category icons for the directory as shown in Figure 40-4.  As usual, clicking on these icons will take you to forms for configuring various settings that apply only to requests for and listings of that directory. 
# To totally deny access to clients, click on '''Access Control''' and change the '''Access control policy''' field to '''Deny all''' clients, then click '''Save'''. 
# Normally, files uploaded by clients will end up owned by the Unix user that the client logged in as. To change this, click on the '''User and Group''' icon and enter a username for the *Owner of uploaded files* field. Uploaded files' group will be the primary group of the specified user, unless you fill in the '''Group owner of uploaded files''' field as well. Again, click '''Save''' after making any changes to return to the per-directory options page. 
# To limit only the uploading or downloading of files in this directory, you will need to create a set of per-command options under it. The '''Restricting access to FTP commands''' section explains how. 
# To activate your changes for this directory, return to the module's main page and hit the '''Apply Changes''' button. 

<img src=http://www.webmin.com/screenshots/chapter40/figure4.gif><br>
The per-directory options page

You can also remove a directory options object from the ProFTPD configuration entirely by clicking on '''Configure Directory''' and then hitting the '''Delete directory config''' button. All settings and per-command options for the directory will be immediately and permanently deleted from the FTP server's configuration. 

If you define options for both a directory and one of its children (such as ''/usr/local'' and ''/usr/local/bin''), ProFTPD will always give precedence to the most specific directory when deciding which options to apply to a particular client request. This means that a setting made for /usr/local will apply to a download of /usr/local/bin/foo, unless it is overridden by a setting for /usr/local/bin. 

=== Restricting access to FTP commands ===
When a client wants to download or upload a file, list a directory or perform any other operation it sends a command to the server. ProFTPD can be configured to restrict which commands a client can use for a particular virtual server or directory, or when logged in anonymously. However, before you can do this you need to have a basic understanding of which FTP commands exist and what they do. The table below lists the ones that are relevant for access control purposes : 

ProFTPD allows you to define options that only apply to particular client commands or groups of commands. Typically, this is used to deny access to certain operations, such as uploading by anonymous FTP users. It is also possible to allow or deny only certain Unix users, or only clients connecting from certain addresses. 

To create a new set of per-command options, follow these steps: 
# First decide if the options should apply to commands only in a particular directory, only to clients of a virtual server, only to anonymous clients or to all users of your FTP server.  On the per-directory, virtual server, anonymous FTP and main pages is a form titled '''Add per-command options for'''.  In the '''FTP commands''' field, enter one or more commands from the list above, separated by spaces. When you hit the '''Create''' button, your browser will be taken to the page shown in Figure 40-5. 
# Click on the '''Access Control''' icon to bring up a form for restricting who can use these commands. 
# To completely deny access to everyone, change the *Access control policy* field to '''Deny all clients'''. Conversely, to allow access select '''Allow all clients''' instead. This is most useful if you are editing options for commands within a directory and there is a set of options for the same commands at a higher level (such as for the virtual server or anonymous FTP) that denies access. For example, typically anonymous clients cannot use the WRITE commands, but you may want to allow it for a particular directory. 
# To only allow certain Unix users or members of certain group access to the commands, fill in the '''Only allow users''' and '''Only allow group''' fields. Multiple user or group names must be entered separated by spaces. 
# Similarly, to deny certain users and groups while allowing everyone else access to the FTP commands, fill in the *Deny users* and '''Deny groups''' fields. 
# The '''Restrict access''' table can be used to block clients from certain IP addresses by entering a series of rules. The three radio buttons at the top control the order in which entries in the table are evaluated. If '''Deny then allow''' is selected, any client that matches a Deny row or which does not match an Allow row will be blocked. Conversely, if '''Allow then deny''' is chosen only clients that match a Deny row and do not match an Allow will be prevented from using the commands. This mode is also the default. The table will always have one empty row for adding a new rule, and because this is a new set of per-commands options that is all it will contain. In the empty row select either '''Allow''' or '''Deny''' from the '''Action''' menu. Then from the '''Condition''' menu choose one of the following to determine which clients match and thus are allowed or denied. *All *All clients match, no matter where they are from. *None *No clients match the rule. *IP address *Only clients from the IP address entered in the adjacent text field match. *Network *Only clients from the IP network entered match. The network address must be a partial IP with a trailing dot, like ''192.168.1.''.  *Hostname *Only clients whose IP address reverse-resolves to the entered name match. You can specify an entire domain by putting a dot at the front, like ''.example.com''. If you want to add more than one rule, you will need to re-enter this page after saving so that a new blank row appears. To delete a rule, select the blank option from the '''Action''' menu. 
# When you are done choosing who can use the FTP commands, hit the '''Save''' button. Then return to the module's main page and click '''Apply Changes''' to make the restrictions active. 

<img src=http://www.webmin.com/screenshots/chapter40/figure5.gif><br>
The per-command options page

=== Configuring logging ===
By default, ProFTPD logs all transfers to the file /var/log/xferlog in the standard FTP logging format (unless a different path has been selected at compile time). However, you can configure the server to log transfers to and from each virtual server differently, and anonymous FTP traffic as well. This is most useful in a virtual hosting environment, in which your system hosts FTP sites for many different customers. 

It is also possible to define additional log files that use different formats, and optionally include only a subset of FTP commands. This can be useful if you only care about uploads, and don't want your log files clogged up with useless information. 

To configure where and how logs are written globally or for an individual virtual server, the steps to follow are : 
# If you want to change the location of the global log file that is used for all transfers (unless overridden by a virtual server), click on the '''Logging''' icon on the main page. Alternately, if you want to configure a specific virtual server to use a different log file, click on its icon and then on '''Logging''' on the virtual server options page. To change the logging settings for anonymous clients only, click on a virtual server icon, then on '''Anonymous FTP''' and finally on the '''Logging''' icon on the anonymous FTP options page. 
# On the resulting logging options form, the *FTP transfers logfile* field controls where logs are written to. To specify a file, select the last option and enter a full path like ''/var/log/example.com.xfers'' into the adjacent text field. To turn off logging altogether, select '''Logging disabled'''. To use the global default, select the '''Default''' option (if you are editing the global logging settings, ProFTPD will use the compiled-in default log file /var/log/xferlog). 
# The '''Custom logfiles''' table can be used to define additional logs for specific commands and with arbitrary formats. As usual, it will always have one empty row for adding a new custom log file. To add one, fill in the fields under these headings : *Logfile *The full path to the log file, such as ''/home/example.com/ftplog''.  '''For FTP commands *If *All''' is selected, all FTP commands will be logged. However, if you choose the second option only those command classes in the adjacent text box will be included.  Recognized classes are NONE (no commands), ALL (all commands), INFO (information requests), DIRS (directory navigation), READ (file download), WRITE (file upload and directory creation), SITE (non-standard commands like CHMOD) and MISC (other miscellaneous commands). Multiple classes must be separated by commas, like ''READ,WRITE''. You cannot use the names documented in the '''Restricting access to FTP commands''' section. *Log format '''If *Default''' is selected, the standard FTP log format will be used. But if the second option is chosen, you must enter a recognized log format name into the text box. The next paragraph explains how to set up named log formats. Because only one empty row appears in the table, you can only add one custom log at a time. To add more, click on the '''Logging''' icon again after saving and fill in the new blank row. To delete a custom log, just clear out its field in the '''Logfile''' column. 
# Hit the '''Save''' button to save the new settings, and then *Apply Changes* on the main page to activate them. 

If you want to use your own custom formats for log files, they must first be defined globally. The steps to create a format are : 
# On the module's main page, click on the '''Logging''' icon to bring up the global log file options page. 
# The '''Custom log formats''' table is for defining your own formats.  In the first blank field under '''Format name''', enter a short name for your new format such as ''filesonly''. In the field next to it under '''Format string''', enter text containing the log codes recognized by ProFTPD, like ''Downloaded %f at %t''.  The special codes in the string starting with % are replaced by the server with information about the command, as explained in the table below. As usual, you can add more than one custom format by re-entering the page after saving so that a new blank row appears. A format can be deleted by just clearing out its '''Format name''' field. 
# Click the '''Save''' button to return to the main page, and then click '''Apply Changes'''. The new format can now be used in custom log files. 

=== Limiting concurrent logins ===
If your system is configured to allow anonymous FTP logins and you expect to receive a lot of traffic, it makes sense to limit the number of connections that can be open to the FTP server at any one time. This puts a ceiling on the network and CPU load that FTP transfers can generate, which is important if the system is being used for some other purpose (such as running a web server). 

This limit can be set globally, on a per-virtual server basis or just for anonymous clients. This means that you can set a limit that applies to all servers, and then increase or decrease it for a particular virtual host. Or you can set a lower limit for anonymous clients versus those that have valid logins. 

ProFTPD can also be configured to limit the number of concurrent connections that a single client host can have. This is useful if you want to stop people downloading more than one file at a time from your server, and thus taking more than their fair share of bandwidth. 

To set a connection limit for your server, follow these steps: 
# If you want to set a global limit, click on the *Networking Options* icon on the module's main page. To set a limit for a single virtual server, click on its icon and then on *Networking Options*. To define a limit that applies only to anonymous clients, click on the icon for a virtual server, then on *Anonymous FTP* and finally on the '''Networking Options''' icon on the anonymous FTP options page. 
# On the form that appears, find the '''Maximum concurrent logins''' field. To set a limit, select the third radio button and enter a number in the text box next to it. Alternately, you can select '''Unlimited''' to turn off any restriction that applies to this virtual server that has been set globally. 
# To define an error message sent to clients that try to connect when the limit has been reached, enter it into the *Login error message* box in the '''Maximum concurrent logins''' field. If the message contains the special code %m it will be replaced with the maximum allowed number. 
# To set the per-client host limit, fill in the *Maximum concurrent logins per host* field in the same way. It also has a *Login error message* box that can be used to set a message sent to FTP clients that exceed the limit. 
# If you are editing the global networking options, you can also set a limit on the total number of ProFTPD sub-processes that can be active at any one time. This is useful for protecting your system from denial-of-service using hundreds of useless connections. Just select the second option for the *Maximum concurrent sessions* field and enter a number into its adjacent text box. If '''Default''' is selected, no limit will be enforced.  If you are running the server from a super-server like inetd or xinetd, this limit will have no effect. Fortunately, both those servers have configuration options that can be used to achieve the same result. 
# When you are done editing client restrictions, hit the *Save *button at the bottom of the form to update the ProFTPD configuration, and then the '''Apply Changes''' button back on the main page. 

=== Restricting clients by IP address ===
By default, ProFTPD will allow clients to connect from any IP address. However, like everything else this is configurable so that you can restrict access to systems on your own network, either globally or for particular virtual servers. This comes in handy if you are setting up an FTP server that is for internal use only, even though the system it is running on is accessible from the Internet. 

To restrict clients by address, follow these steps: 
# To create a global restriction that will apply to all virtual servers, enter ''LOGIN'' into the '''FTP commands''' field of the '''Add per-command options for''' form on the module's main page, then click '''Create'''. If you only want to limit who can connect to a particular virtual server, click on its icon before entering ''LOGIN'' into the same form on the virtual server options page. 
# Regardless of what level the restriction is being defined at, you will be taken to the per-command options page shown above. Click on the '''Access Control''' icon to go to the aptly-named access control form. 
# The '''Restrict access''' table can be used to block clients from certain IP addresses by entering a series of rules. The three radio buttons at the top control the order in which entries in the table are evaluated. If '''Deny then allow''' is selected, any client that matches a Deny row or which does not match an Allow row will be blocked. Conversely, if '''Allow then deny''' is chosen only clients that match a Deny row and do not match an Allow will be prevented from logging in. This mode is also the default. The table will always have one empty row for adding a new rule, and because this is a new set of per-commands options that is all it will initially contain. In the empty row select either '''Allow''' or '''Deny''' from the '''Action''' menu. Then from the '''Condition''' menu choose one of the following to determine which clients match and thus are allowed or denied.
*;All: All clients match, no matter where they are from. *None *No clients match the rule.
*;IP address: Only clients from the IP address entered in the adjacent text field match.
*;Network: Only clients from the IP network entered match. The network address must be a partial IP with a trailing dot, like ''192.168.1.''. 
*;Hostname: Only clients whose IP address reverse-resolves to the entered name match. You can specify an entire domain by putting a dot at the front, like ''.example.com''.  If you want to add more than one rule, you will need to re-enter this page after saving so that a new blank row appears. To delete a rule, select the blank option from the '''Action''' menu. 
# When you are finished entering client restrictions, hit the '''Save''' button at the bottom of the form. Then return to the main page and click '''Save and Apply''' to activate them. 

Commonly, you will want to give only clients on a single network access. To do this, select the '''Deny then allow''' option, choose '''Allow''' from the '''Action menu''', '''Network''' from the '''Condition''' menu and enter the network address with a trailing dot (like 10.254.1.) into the condition text box. 

=== Limiting uploads ===
If clients are allowed to upload files to your server, they will be able to choose any name that they wish for uploaded files. Sometimes this is not desirable though - you may want to allow the storing of only image files whose names end with .gif or .jpg, or prevent the uploading of Windows executables with filenames ending in .exe or .com. Fortunately, ProFTPD has configuration options that allow you to set this up. 

There are also several other settings that apply to uploads, which control whether clients are allowed to overwrite files and if partially transferred files are visible. All can be set globally, for a single virtual server or for anonymous clients only. The steps to set these options are : 
# If you want to the settings to be global, click on the *Files and Directories* icon on the module's main page. To have them apply to just a single virtual server, click on its icon and then on '''Files and Directories'''. Or to effect just clients that login anonymously, click on a virtual server icon, then on '''Anonymous FTP''' and finally on '''Files and Directories''' icon on the virtual server options page. No matter which configuration object you chose, the files and directories form that appears will be almost identical. 
# To hide files that are in the process of being uploaded, change the '''Hide files during upload?''' field to '''Yes'''. This tells ProFTPD to use a temporary file whose name starts with .in.  for transferred data, which is only renamed to the real filename when the upload is complete. This prevents incomplete partial uploads, and stops files being downloaded or accessed while they are still being sent. 
# To have ProFTPD delete uploaded files that are not fully transferred, select '''Yes''' for the '''Delete aborted uploads?''' field. Again, this prevents corrupt partially uploaded files from being created on your system. 
# To allow users to only create files whose relative names match a certain pattern, fill in the *Allowed uploaded filename regex* field with a Perl regular expression. For example, to only allow GIF files you might enter ''^.*\.gif$''. Because clients are normally allowed to rename files, this option alone is not enough to stop the creation of invalid filenames.  You will also need to block access to the RNFR command, as explained in the '''Restricting access to FTP commands''' section. 
# Alternately, you can block the use of certain filenames by filling in the '''Denied uploaded filename regex''' field with a regular expression like ''^.*\.exe$''. If both this and the previous field are set, only files that match the allow expression but not this deny expression will be permitted. Another common use of this option is blocking the upload of .ftpaccess or .htaccess files, which set per-directory ProFTPD and Apache options. 
# Hit the '''Save''' button at the bottom of the page. 
# If you want to stop clients overwriting files with new uploads, click on the Access Control icon and change the *Allow overwriting of files?* field to '''No'''. This can be useful on an server that allows anonymous users to upload to a particular directory, perhaps for incoming files of some kind. Don't forget to click '''Save''' if you make this change. 
# Return to the module's main page and hit the '''Apply Changes''' button to activate your new filename restrictions. 

=== Manually editing directives ===
If you prefer to manually edit your ProFTPD configuration file in some cases or just want to see which directives an action in Webmin has set, you can do so using this module. Except for the default server, every object's options page (virtual server, per-directory and per-command) has an icon labeled '''Edit Directives'''. When clicked on it will take you to a form containing a large text box showing the lines from the configuration file in the section related to the object. You can edit them to your heart's content, then click the '''Save''' button to update the actual file. Be aware though that no validation of your input is done. Also, you will need to use the '''Apply Changes''' button on the module's main page to activate any changes, as usual. 

To view and edit the entire ProFTPD configuration, use the *Edit Config Files* icon on the module's main page. This will bring up a similar form, but showing and allowing the editing of a complete configuration file at once. Because ProFTPD can read multiple configuration files (though the use of Include directives), at the top of the form is a button labeled '''Edit Directives in File''' with a menu of filenames next to it. To switch the view to a different file, just select the one you want and hit the button. Normally though only a single proftpd.conf file will be used.

[[Category:Servers]]
