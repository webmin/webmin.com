---
title: "Fetchmail Mail Retrieval"
date: 2023-05-19
weight: 395
---

### About
This page explains how to configure the **Fetchmail Mail Retrieval** program to download email from another server and deliver it to addresses on your system. 

### Intro
Fetchmail is a relatively simple program that downloads email from another server using the POP3 or IMAP protocol and delivers it to a mailbox on your system. It is most useful if you want to run your own mail server, but for some reason cannot have mail delivered directly. The solution is to have Fetchmail download email periodically using a protocol like POP3, and then connect to the SMTP server on your system to have it delivered as if it were sent directly. 

If your system as a dial-up connection to the Internet that is only occasionally active, it is not usually possible to have mail delivered directly. The same applies if you do not have a fixed IP address. In situations like this, it is still possible to run your own email domain and server by having mail for your domain sent to a mailbox at your ISP, and then using Fetchmail to periodically transfer it to your system. 

Even if you do not have your own Internet domain, Fetchmail can still be used to download email from an email account in your ISP's domain. Many mail clients like pine, elm and Usermin read the Unix mail file in /var/mail directly, instead of downloading messages via the POP3 or IMAP protocol. To use one of these programs, email must be downloaded to your system and delivered to a local user. 

Fetchmail can download email from multiple mailboxes on different servers, and deliver it to different addresses on your system. If email to all addresses in a domain has been combined into a single mailbox, Fetchmail can usually separate it for delivery to the correct users on your system. This is possibly its most useful feature, but unfortunately it is not 100% reliable. 

The Fetchmail program can retrieve mail using the POP2, POP3 and IMAP protocols, one of which will be supported by almost all mail servers. It can also use the ETRN mode of the SMTP protocol to force a mail server to deliver all queued messages that are awaiting delivery to your system. Unfortunately it does not support the retrieval of mail from proprietary email systems like Exchange or Lotus Notes, or from web-based email services like Hotmail - unless they support one of the standard protocols as well. 

To perform periodic checks, Fetchmail is usually run as a background daemon process that connects to all mail servers at regular intervals. Alternately, it can be run from a Cron job at times and dates of your choosing, or even started manually from the command line or some other script. 

Fetchmail is often run by individual users rather than the system administrator, each with their own separate `.fetchmailrc` configuration file in their home directory. Because it does not require root privileges to run, on a multi-user Unix system each user can safely configure Fetchmail to download mail from their own remote mailboxes. This means that each user may have his own separate Fetchmail daemon process running that uses his own configuration. 

Alternately, a single configuration file can be used, and Fetchmail can be run as root to download email for all users on your system. This option makes more sense if you are the only user of your Linux box, or if you are downloading email for an entire domain to be re-distributed to local users. Typically, `/etc/fetchmailrc` is used as the global configuration file. 

In fact, it is possible for Fetchmail to be run on both individual users' configuration files and a global file at once. However, the Webmin module for configuring it expects you to use one mode or the other. 

### The Fetchmail Mail Retrieval module
Webmin's module for managing Fetchmail can be found under the Servers category. When you click on its icon for the first time, the main page will display the Fetchmail configurations of all users on your system. For each user who has a `.fetchmailrc` in his home directory, the user's name and all servers from his file are displayed along with the protocol used to connect to each and the users to login as. 

If Webmin cannot find the fetchmail program, then the main page will display an error message instead. This may be because it is not installed, or because the module is looking in the wrong place. Most Linux distributions come with a package for Fetchmail - check the CD or website, and use the [Software Packages](/docs/modules/software-packages) module to install it. 

If you want to manage just a single Fetchmail configuration file on your system, then now is the time to switch the module to that mode. Unless you want to manage the configurations of all the users on your system, this is the best choice. It allows you to set up a daemon process to periodically check for and download email to local mailboxes, which is what most administrators use Fetchmail for. 

To change the module to use a single file, follow these steps : 
- Click on the **Module Config** link in the top-left corner of the main page. 
- In the **Fetchmail config file to edit** field, select the second radio button and enter the a configuration file path into the field next to it. If you already have a Fetchmail configuration file, then naturally you should enter its path - otherwise, `/etc/fetchmailrc` will do fine. 
- Click the **Save** button at the bottom of the form to update the module configuration and return to the main page. 

When in single configuration file mode, only servers from that file will be displayed on the main page under the file's name. Below them is a form for starting the Fetchmail daemon to regularly check the listed servers and accounts, as explained in more detail later in the chapter. 

Because the module does not support the starting of the Fetchmail daemon for individual users, if you are using it to manage multiple individual configuration files you will need to create a Cron job or start a daemon for each users' configuration. The easiest method is to use the [Scheduled Cron Jobs](/docs/modules/scheduled-cron-jobs) module to create a job for each user that runs the `fetchmail` command on a schedule of your choice. Once every 30 minutes or half an hour is usually good enough, depending on how much email you get. The fetchmail program will by default use the `~/.fetchmailrc` file in the home directory of the user that runs it. 

Another package that can be used by users to manage their own Fetchmail configurations and even start their own daemons in Usermin, which is closely related to Webmin. 

Because Fetchmail is available for and works mostly the same on all varieties of Unix, this module behaves the same as well. The only difference is **Check condition** field for turning off checking if a particular network interface is down will not work on operating systems other that Linux and FreeBSD, at least with the current version of Fetchmail. Even though the field always appears, it should not be used on other versions of Unix. 

### Adding a new mail server to check
Before Fetchmail will download email from a mail server for you, an entry for it must be added to its configuration. The steps to do this are: 
- On the module's main page, click on the **Add a new server** link below the table of existing servers. If you are managing multiple users' configurations, you must use the link in the section for the user whose list you want to add the server to. Alternately, the **Add Fetchmail server for user** button can be used to add a server to the user entered into the adjacent field. This method must be used if the user does not have any servers defined yet. 
- No matter which link or button you use, the form shown in the screenshot below will be displayed for entering the new server's details. 
- In the **Server name** field, enter a unique name for this mail server entry. Typically this will be its actual hostname, such as _mail.yourisp.com_. 
- If you want this server to be checked on schedule, make sure the **Polling enabled?** field is set to **Yes**. Otherwise it will only be checked if manually run from Webmin or at the command link. 
- The **Mail server to contact** field is useful if you need to connect to more than one port or protocol on the same host.  Because the **Server name** must be unique, you can only create two entries for the same actual mail server by entering different values for the Server name (such as _mail.yourisp.com-1_ and _mail.yourisp.com-2_) and entering the actual hostname for the server into this field. However, this situation is fairly rare, so you can usually just leave this field set to **Same as server name**. 
- From the **Protocol** menu, select the mail retrieval protocol to use for this server. The most common are POP3 and IMAP. Your ISP or mail server administrator will be able to tell you which one to use. 
- If the mail server is using a non-standard port for the chosen protocol, then the Default option will not work for the *Server port* field. Instead you must enter the correct port number, such as _1110_. 
- The **Check condition** field can be used to prevent periodic checking of this server if a network interface is down. This is useful if you have a dial-up connection to the Internet that is only active occasionally, and want to avoid useless attempts to connect to the mail server when it is not active.  If **Always check** is chosen, Fetchmail will always try to connect. However, if **Only if interface is up** is selected no connection will be made if the network interface entered into the field next to it is down. Your primary PPP interface for dial-up is normally named ppp0. See the [Network Configuration](/docs/modules/network-configuration) module for a list of active interfaces.  As well as an interface name, you must enter a network and netmask to specify a range of valid local addresses for the interface for checking to be performed. This can be useful if you dial up to several different ISPs, but only want Fetchmail to check for mail when connected to a particular one. Most ISPs assign addresses within a certain class C or B network to all customers, such as _203.51.0.0/255.255.0.0_. To allow Fetchmail to check as long as the interface is up, no matter what IP address it has, just enter _0.0.0.0_ into both the network and netmask fields. This covers all possible addresses. 
- In the **Mail server user details** section, enter the login name to connect to the mail server as into the **Remote user** field. 
- Enter the correct password for the user into the **Remote password** field. 
- The **Local user(s)** field is for entering the email address to send retrieved messages to. Typically this is a local username like _jcameron_, but it can also be an address on another server like _jcameron@example.com_. It is also possible to enter several usernames, in which case Fetchmail will attempt to work out which of those names each downloaded message is for. This is useful if you have email for several addresses forwarded to the same mailbox on your ISPs mail server, and want to split up the retrieved messages for delivery to the correct local mailboxes. If Fetchmail encounters a message whose recipient is not in the list, it will be bounced back to the sender. The final alternative is to just enter _*_ in the **Local user(s)** field, which tells Fetchmail to deliver each message to the local user on your system whose name is same is username part of the message's destination address. 
- If you want Fetchmail to delete messages from the mail server after downloading then, set the **Leave messages on server?** field to **No**. Unless another mail client is being used to access the mailbox, this is the best option as it prevents an additional copy of every message being stored on your ISP's server, which may have a limit on mail file sizes. Selecting **Yes** causes Fetchmail to keep track of received messages and only download those in the mailbox that are new. In effect, it is synchronizing the remote mailbox to a local one, except that messages deleted on the server will not be deleted locally. 
- If you are keeping messages on the remote server, the *Always fetch all messages?* field should be set to **No**. Otherwise, set it to **Yes** to guarantee that all messages in the mailbox are downloaded. 
- The **Command to run before connecting** field can be used to enter a shell command that will be executed by Fetchmail just before connecting to the mail server. One of the most common uses of this feature is running a command to set up an SSH tunnel to allow access to a server that you cannot connect to directly.  This can be quite complex though, and so is not covered here.  Typically, this field can be left empty. 
- Similarly, the **Command to run after disconnecting** field is for entering a shell command to be executed after Fetchmail logs off from the remote mail server. It is often used for killing the SSH process started by the 'before' command. 
- Finally, click the **Create** button to save the new server.  It will be used from now on whenever Fetchmail is run on when it makes a periodic check. 

Once you have created a new server entry, it will be listed on the module's main page. To edit it, just click on the server name in the **Server to poll** column, which will bring up the editing form in your browser. Change any of the fields and click **Save** to update the Fetchmail configuration file. 

Servers can be deleted by hitting the **Delete** button on the editing form. However, it is usually better to change the **Polling enabled?** field to **No**, which effectively disables the server. Fetchmail will not connect to it unless you explicitly tell it to check that server, as explained in the **Downloading email section** below. 

It is possible to have Fetchmail check more than one mailbox on the same server, and deliver mail from additional mailboxes to different users. This could be done by creating multiple configuration entries for the same server, but there is a simpler and better method:
- On the module's main page, click on the name of the server that you want to add an additional mailbox to check to. 
- Click on the **Add another user** button. The editing form will be re-displayed, but with an additional empty **Mail server user details** section at the bottom. 
- Fill in the empty **Remote user**, **Remote password**, **Local user(s)** and other fields in the new section, as explained in the steps above. 
- Hit the **Save** button. You will be returned to the module's main page, and the new remote and local usernames will be displayed next to the server. 

Even though its ability to extract mail for multiple users from a single mailbox is one of Fetchmail's most useful features, it is not 100% reliable. There is no way that the program can accurately determine what address an email was sent to in all cases. Normally, the To: or Cc: header will contain the destination address, but for messages received from mailing lists this is not the case - instead, the To: header contains the list's address. There are other mail headers that Fetchmail attempts to check to find the real destination address of a message, but they are not always available. 

When an email message is delivered directly to a server via the SMTP protocol, the source system informs the destination server of the message's real destination address. Unfortunately, the address does not have to be in the actual message at all - instead, it is specified as part of the SMTP conversation between the servers. When the email is delivered to a mailbox, this information is lost and cannot be accurate recovered. 

Only when Fetchmail is downloading email from a mailbox and delivering it to a single recipient is it guaranteed to do the right thing. In this case, it never has to check the destination address of each message, because they are all being sent to a single local mailbox. 

### Downloading email
Once you have created at least one server entry, you can use this module to have Fetchmail connect to the server and download messages. The module can be used to retrieve email from all servers in a configuration file, or just a single server. 
To check them all, the steps to follow are:
- On the module's main page, click on the **Check all servers** link below the table of servers. If you are managing the configurations of multiple users, this link will appear under the table for each user. 
- A page showing the output of the `fetchmail` command will be displayed, so that you can see the POP3 or IMAP protocol exchange between your system and the remote mail servers as Fetchmail downloads messages. If an error occurs (such as a failure to connect or an incorrect password), you will be able to see it in the output. 
- Downloaded messages will be delivered it to the local addresses specified in the server configuration entry. By default, mail will be sent by making an SMTP connection to the mail server on your system. The actual SMTP protocol commands used to deliver the mail will be shown on the output page, so that you can see if any errors occur. Delivery can fail if there is no mail server running on your system, or if it does not access email for the specified local address. If this happens, Fetchmail will attempt send a bounce message back to the sender. 

It is also possible to check for mail on a single server, even one that has the **Polling enabled?** field set to **No**. The process to do this is:
- On the module's man page, click on the name of the server to bring up its editing form. 
- Click on the **Check this server** button at the bottom of the page. 
- A page showing output from Fetchmail as it downloads and delivers messages will be shown, as described above. 

### Running the Fetchmail daemon
If you are using the module to manage a single Fetchmail configuration file, it is possible to start a background process to regularly check the servers and mailboxes in that file. The steps to do this are:
- At the bottom of the main page is a button labelled **Start Fetchmail Daemon**. In the description next to it is a text field for entering the number of seconds that the daemon should wait between checks. A short period (such as 60 seconds) means that you will receive email sooner, but at the cost of more bandwidth and CPU time being used up by frequent checking. 
- After entering a checking period, hit the **Start Fetchmail Daemon** button to start the background fetchmail process.  The page will be re-displayed, but with the button now labelled **Stop Fetchmail Daemon**. 

As the name suggests, you can click on the new **Stop** button at any time to kill the running daemon process. When the module detects that it is no longer running, the **Start** button will appear again. 

If your system is re-booted, the Fetchmail daemon will, of course, be stopped. For it to be started again automatically at boot time, you will need to create a bootup action as explained in [Bootup and Shutdown](/docs/modules/bootup-and-shutdown).This action must run the command `fetchmail -d interval -f configfile`, with _interval_ replaced by the checking period and _configfile_ with the full path to the configuration file. 

### Editing global settings
The Fetchmail module can also be used to edit options that apply to all servers in a configuration file. This can be useful for stopping any from being contacted if a network interface is down, or defining a default protocol. To edit these global options, the steps to follow are:
- On the module's main page, click on the **Edit default settings** link below the table of servers. If the module is being used to manage the Fetchmail configurations of multiple users, this link will appear under the table for of each user who has any servers defined. Either way, your browser will display a page for editing global options. 
- To set a default protocol for all servers, select one from the **Protocol** menu. The most common are POP3 and IMAP, with the former being used if the **Default** option is selected.  When the **Protocol** field on the server editing or creation form is set to **Default**, then the protocol selected here will be used. 
- To define a default port for Fetchmail to connect to, fill in the **Server port** field. It is usually best to leave this set to **Default** though, in which case the program will use the appropriate port for the protocol selected for each server.  Only when the **Server port** field on the server form is set to **Default** will the value entered here be used - otherwise, it will be overridden for that server with whatever you enter. 
- The **Check condition** field can be used to prevent Fetchmail connecting to any servers if a particular interface is down or does not have the correct IP address. The instructions in the **Adding a new mail server to check** section above explain how this field works and what to enter. Setting the check conditional globally makes more sense than setting it repeatedly for individual servers, as the servers that Fetchmail is checking are all likely to be accessible over the same network connection. 
- Click the **Save** button to make the new global settings active.  

When you are using the module to manage multiple users' Fetchmail configurations, there is no way to define options that apply to all users - just the global settings for a single user at a time. 

### Module access control
As [Webmin Users](/docs/modules/webmin-users) explains, it is possible to restrict what a Webmin user can do with a module to which he has been granted access. For the Fetchmail module, you can limit the Unix users that he can edit Fetchmail configurations for. Once a user has been created, the steps to further restrict access are:
- In the Webmin Users module, click on Fetchmail Mail Retrieval next to the name of the user. This will bring up the module access control form. 
- Change the **Can edit module configuration field?** to **No**, to stop the Webmin user switching the module to single-file mode or changing the path to the Fetchmail program. 
- The **Can edit fetchmail config for** field determines which Unix users this Webmin user can edit Fetchmail servers for.  The available options and their meanings are: **All users** The configuration of any user can be edited. This is the default. **Current Webmin user** Only the Unix user whose username is the same as the Webmin user can be edited. This option can be useful for allowing people to edit their own Fetchmail settings, although the Usermin program is a better alternative. **Only users** Only the configurations of users entered into the text field next to this option can be edited. **All except users** The Fetchmail settings for all users except those entering into the adjacent text field can be edited. 
- Click the **Save** button to make the new module restrictions active. 

This kind of access control is only useful if the module has been configured to allow the editing of individual `.fetchmailrc` files. In single configuration file mode, no restrictions apply.

