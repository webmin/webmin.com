---
title: "SSH Server"
date: 2023-07-25
weight: 515
---

### About
**Secure Shell** or **SSH** is a protocol for securely logging in to and transferring files between computers over a network. All SSH traffic is encrypted so that anyone listening in on the network cannot capture passwords, which is a vast improvement over the insecure telnet and FTP protocols. In a way, SSH can be thought of as a secure replacement for those protocols, although in fact it can be used for much more. 

An SSH server is a daemon process that runs on a Unix system waiting for connections. An SSH client is a program run by a user (or from a script) that connects to a server to start a remote login session or transfer some files. Both the client and server authenticate themselves to each other, so that each can be sure that of the others identity. Client authentication is done either with a username and password or a username and private key, while server authentication always uses a key. 

There are many different SSH clients and servers available, but the two most common client/server packages on Unix systems are the freely available open-source OpenSSH and the original commercial SSH. In addition there are two different versions of the protocol that are not compatible, versions 1 and 2. Fortunately the latest releases of both packages support both versions. 

The directory `/etc/ssh` contains all the configuration files used by both SSH servers, and even though the filenames are the same their formats are slightly different. The primary file is called `sshd_config`, and consists of a series of directives, one per line. As is usual with Unix server configuration files, each sets some option such as the list of denied users or the IP address to listen on. The same directory also contains the file `ssh_config`, which sets options that apply to the SSH client programs (such as `ssh` and `scp`) run on your system. Both files are directly edited by the Webmin module covered in this chapter. 

### The module
This chapter deals with the configuration of the commercial SSH and OpenSSH servers, and assumes that you have a basic knowledge of the client programs as a user. The Webmin module that can be used to carry out this configuration is named SSH Server can be found under the Servers category. Clicking on its icon will take you to the main page shown in the image below, assuming that the SSH package is installed. 

[![](/images/docs/screenshots/modules/light/ssh-server.png "SSH Server Screenshot")](/images/docs/screenshots/modules/light/ssh-server.png)

If an error message like **The SSH server config file `/etc/ssh/sshd_config` was not found on your system** appears instead, there is probably no SSH server is installed on your system. Most modern Linux distributions 
come with an OpenSSH package. Often there will be several, such as openssh, openssh-client and openssh-server, all of which should be installed. You may also need to install the OpenSSL library as well, which should also be available in a package form. Use the [Software Packages](/docs/modules/software-packages) module check for and install everything that is needed. 

If no SSH package exists for your operating system, you will need to download, compile and install the OpenSSH or commercial SSH source code. As you might expect, OpenSSH can be found at [openssh.com](http://openssh.com), while the original SSH can be downloaded from [ssh.com](http://www.ssh.com/). Installing should be easy on any Unix operating system, assuming you have a compiler installed. The only dependency is an SSL library like OpenSSL, which can be downloaded from [openssl.org](http://www.openssl.org/).

After installation, you should make sure that the SSH server will be started at boot time. This can be done by using the [Bootup and Shutdown](/docs/modules/bootup-and-shutdown) module to create an action that runs the `sshd` command when started. If there is already an action named `sshd` or `ssh-server`, all you will need to do is make sure that it is enabled. 

No matter how you install the SSH server, it should allow clients to login and transfer files immediately using the default configuration, once the server process is started. In fact, on a typical system very little configuration is needed at all as the defaults are suitable for the average server. 

The two different SSH implementations and their many versions all have slightly different configuration file formats, which the module needs to adapt itself to. This means that the forms and fields that make up its user interface are not always the same, depending on the version and type of server that you have installed. The instructions and screenshots in this chapter have been written with OpenSSH version 2.5 in mind, but any differences or extra features that other SSH versions have will be mentioned as well. 

The main page will always display eight icons though, under each of which is a form containing fields for setting options related to some category, such as authentication or networking. At the top the implementation and version of SSH installed is displayed, so that you can see which of the instructions in this chapter apply to your system. At the bottom is a button labeled **Apply Changes** which when clicked signals the SSH server to re-read its configuration file. No changes made in the module will take effect until you hit this button. 

### Authentication
All SSH implementations have options related to how clients authenticate and the messages displayed to them after login.

[![](/images/docs/screenshots/modules/light/ssh-server-authentication.png "SSH Server Authentication Screenshot")](/images/docs/screenshots/modules/light/ssh-server-authentication.png)

Specifically, you can permit or deny authentication by username and password or username and certificate, stop the root user logging in, and control if rlogin-style `.rhosts` files are trusted. The exact options differ quite a lot between SSH versions though, so what is possible with OpenSSH may not be if you are running the commercial SSH server. 

To edit authentication settings, the steps to follow are: 
 - Click on the **Authentication** icon on the module's main page to bring up a form like the one shown below. 
 - To have users informed if there is new mail in their mail files when they login, select **Yes** for the **Notify user of new mail?** field. This only works if you are using the standard mail file location on your system though, and not if delivery is done to Mailbox or Maildir in users' home directories. 
 - To prevent users logging in with a password, change the **Allow authentication by password?** field to **No**. This means that only certificate authenticate will be accepted, which is not too useful for users who have never logged in before and thus cannot create a private key. It is only useful if your system uses NFS mounted home directories, or if some other mechanism exists for users to set their public keys. This field is not available if you are running commercial SSH version - or above. 
 - To allow or deny logins with an empty password (assuming this is actually correct for a user), change the **Permit logins with empty passwords?** field. You may want to block this until users have set their passwords by some other method. 
 - Even though a root login via SSH is much more secure that one via telnet (which is unencrypted), you may still want to prevent it. To do this, select **No** from the **Allow login by root?** menu. You can also choose **Only with RSA auth** to force root logins to use a certificate for authentication, or **Only for commands** to only permit the execution of a single command instead of allowing a full interactive login. That final option is only available if your system runs OpenSSH version  - or above though. 
 - To stop users from using certificates to authenticate (and thus forcing the user of passwords instead), select **No** from the **Allow RSA authentication?** field. You might want to do this to force people to enter a password every time, instead of relying on a possibly unencrypted private key to do the authentication for them. 
 - To stop the server strictly checking permissions on users' files in their `~/ssh` directory, select **No** in the **Check permissions on key files?** field. Even though turning of these checks is a bad idea from a security point of view, they can be annoying for users who have set the wrong permissions and cannot figure out why they cannot be authenticated with a certificate. 
 - To have the server display the contents of the message-of-the-day file to users after logging in, select **Yes** for he **Display `/etc/motd` at login?** field. This file usually contains information about your system or notices to users. 
 - If you want to have a message sent to clients before they login, select the second option in the **Pre-login message file field** and enter the full path to a file containing the text you want sent into the adjacent text box. This often contains a warning about unauthorized use of the system. This field is only available if you are running OpenSSH 2.3 or commercial SSH version 2 or above. 
 - The rest of the options on the page relate to rlogin-style authentication using `.rhosts` and `/etc/hosts.equiv` files. Because they trust the client host to have already authenticated the connecting user, they are rather insecure due to the easy with which a source IP address can be faked. For this reason I recommend against enabling this kind of authentication. 
 - To save and activate your new authentication settings, hit the **Save** button at the bottom of the form followed by **Apply Changes** on the main page.

### Access Control
By default, any Unix user will be allowed to remotely login to the SSH server on your system, or use it to upload and download files. On a mail server system or one that hosts websites this may not be appropriate though - you might want to allow most users to only login to your POP3, FTP or Usermin servers instead. Although it is possible to achieve this by giving them a shell like `/bin/false`, this could cause other problems with [Scheduled Cron Jobs](/docs/modules/scheduled-cron-jobs).

Fortunately, the SSH server can be configured to restrict who can login. Just follow these steps: 
 - On the module's main page, click on the **Access Control** icon to bring up a form listing allowed and denied users. 
 - To block everyone except a few users, enter a list of usernames separated by spaces into the **Only allow users** field. The _*_ and _?_ wildcard characters can be used, so you could enter _foo*_ to allow any user whose name starts with _foo_. Similarly, to deny SSH access for everyone except the members of some groups, fill in the **Only allow members of groups** field.  Users who are secondary members of any matching groups will be allowed as well. If both fields are filled in, users specified in either will be allowed. 
 - Alternately, you can block only a few specific users or groups using the **Deny users** and **Deny members of groups** fields.  Again, wildcards may be used, and if both fields are filled in users from either will be denied. 
 - If you are running commercial SSH, the fields **Only allow client hosts** and **Deny client hosts** will appear on the form as well. The former if filled in tells the SSH server to reject any connections except those from the IP addresses or hostnames entered, while the latter tells it to deny only the hosts and addresses listed in the adjacent field. Both fields accept the _*_ and _?_ wildcard characters. If your system has OpenSSH installed you can use the TCP-wrappers configuration files `/etc/hosts.allow` and `/etc/hosts.deny` to block un-trusted clients instead. Unfortunately, there is not yet a standard Webmin module for editing these files. 
 - Click the **Save** button at the bottom of the page to update the SSH server configuration file and return to the main page. 
 - Hit the **Apply Changes** button to activate the new restrictions.

### Networking
The SSH server has several options that allow you to configure the IP address it listens on, the port it uses and various protocol-related settings.

[![](/images/docs/screenshots/modules/light/ssh-server-networking.png "SSH Server Networking Screenshot")](/images/docs/screenshots/modules/light/ssh-server-networking.png)

To edit them, follow these steps : 
 - Click on the **Networking** icon on the module's main page to bring up the form shown in the screenshot below. 
 - By default, the server will accept connections made to any of your system's IP addresses. To change this (perhaps because you want it to be only accessible from an internal LAN), select the second radio button in the **Listen on address** field and enter an IP address into the text box. If you are running OpenSSH version 3 or above, this field will instead contain a table in which you can enter multiple addresses and ports. Above it are two radio buttons - **All addresses** which if selected tells the server to accept connections to the default port on any IP address, and **Entered below** which indicates that the addresses and ports in the table should be used. As is usual with tables in Webmin, this one will always have a single blank row at the bottom for adding a new address and port. If none have been defined yet, this will be all it contains. The meanings of the fields in the table's two columns are :
   - **Address** &mdash; In this field you must enter a single IP address or hostname for the server to listed on.
   - **Port**  &mdash;  **If Default** is selected in this column, the standard port set in step 3 will be used. Alternately, if the second option is selected the SSH server will listen on the port entered into the text box in the column. 
 - To change the port that the SSH server listens for connections on, edit the **Listen on port** field. If you do change it, clients will need to specify the new port when connecting. If your system uses OpenSSH 3 or above, this field only sets the default port which can be overridden in the **Listen on address** table. 
 - In the **Accept protocols** check the boxes for the SSH protocol versions that your server should accept. It is generally wise to allow both, so that older or newer clients can connect without difficulty. This field only appears if you are running OpenSSH though - commercial SSH accepts only version 1 or 2 depending on the SSH version you have installed. 
 - If you are running commercial SSH, the **Idle timeout** field can be used to disconnect clients that have neither sent or received any data for a certain amount of time. Select the second radio button, enter a period of time into the text box and select the units for that period from the menu. If **Default** is selected, clients will never be cut off no matter how long they are idle for. On a busy system, this feature can be useful for stopping people leaving idle SSH sessions open for days at a time, each of which has an associated memory consuming sshd and shell process. 
 - To have the SSH server disconnect clients that have been shut down or crashes without properly logging out, select **Yes** in the **Disconnect if client has crashed?** field. The server will periodically send messages to the client to make sure it is still really running, and close the connection if there is no reply. The only time you would want to choose **No** is if this extra traffic causes problems on your network, such as the automatic activation of an ISDN or dial-up connection when it is not really necessary. 
 - To configure the amount of time that the server will wait for a client to authenticate after it has connected, change the **Time to wait for login** field. If **Forever** is chosen the server will never disconnect a client no matter how long it takes, which could allow an attacker to overload your system by making lots of SSH connections that do nothing. 
 - One of the SSH protocol's more interesting features is its support for port forwarding, which allows clients to access ports on the server's network that they could not ordinarily.  Even though this is very useful for users, you might consider it a security risk as it allows anyone who can make an SSH to effectively bypass IP address restrictions on internal servers. To turn off this feature, change the **Allow TCP forwarding?** field to **No**. This field does only appears if you are running commercial SSH version 2 or above, or OpenSSH. 
 - A related field is **Allow connection to forwarded ports?** which determines if hosts other than the server itself are allowed to connect to ports forwarded back to the client.  You may want to set this to **No** to protect client users from attackers who are misusing possibly insecure forwarded connections back into the client's network. However, it only appears if your system runs OpenSSH version 2 or above. 
 - To have the server lookup the hostnames for client addresses then the address for those hostnames and block those that do not match, select **Yes** in the **Reverse-validate client IP addresses?** field. This is useful if you have hostname-based access controls in place and want to detect attackers using falsified DNS records. This field is only visible if you are running OpenSSH version 2.3 or above though. 
 - To save and activate your changes, hit the **Save** button at the bottom of the page and then Apply Changes back on the module's main page. They will take effect for any new client connections.

### Client Host Options
Even though this module is primarily for configuring an SSH server, it also lets you set options that apply to all client connections made from your system using the `ssh` and `scp` commands. Options can be set for connections to all hosts, or just to a specific one. You can set the port to connect to, the protocol to use and local and remote ports to forward. 

The settings made in this module apply to all users on your system, but can be overridden by individual users who edit their `~/.ssh/config files`. This can be done manually or using Usermin, which has an SSH Client module with an identical interface to the one documented here for editing global client settings. Many of the settings do not make much sense to set for all users, even though it is possible to do so using Webmin. For this reason, the instructions in this section only cover fields that are useful on a global level. 

[![](/images/docs/screenshots/modules/light/ssh-server-client-host-options.png "SSH Server Client Host Options Screenshot")](/images/docs/screenshots/modules/light/ssh-server-client-host-options.png)

To define settings for connections to a specific host, follow these steps: 
 - On the module's main page, click on the **Client Host Options** icon. A page containing one icon for each of the hosts that options have been set for will be displayed. Unless you have used this page before only the special **All hosts** icon will appear, which can be can be clicked on to edit options for connections to any host. 
 - Click on the **Add options for client host** link at the bottom of the page to bring up a form for specifying a host and the options that apply to it. All of the fields on this form have a **Default** option, which if selected indicates that the setting for all hosts should be used instead. This allows you to define options globally, and then override them on a per-host basis. 
 - In the **Options for host** field, enter the name of the host (as used in the `ssh` command) line that the options will apply to. Wildcards can be used, so you could enter _*.webmin.com_ to match any host in the _webmin.com_ domain for example.  Remember that the name must match that used by users in the `ssh` or `scp` command, so if you enter _foo_ and a user runs ssh foo.example.com the options will not apply, even though both names would resolve to the same IP address. For this reason you may want to enter the hostname as _foo_* to catch both possibilities. 
 - To have SSH clients connect to a different hostname instead, fill in the **Real hostname to connect to** field. This could be useful if combined with the **Port to connect to** field to secretly re-direct user connections to some host to a port on another address which is actually a tunnel of some kind to the actual destination. 
 - To force clients to use a different port by default, fill in the **Port to connect to** field. This is useful if the SSH server on some host runs on a different port from the usual 22, and you want to avoid the need to explicitly specify the port in every `ssh` and `scp` command. 
 - Normally, the SSH client treats the `~` (tilde) character as an escape that indicates that the next character entered by the user is actually a command to the ssh program itself.  For example, `~.` closes the connection, and `~^Z` suspends the program. The **Escape character** field can be used to use something different by selecting the third radio button and entering a single character into the adjacent text box. Or you can turn off escape support altogether by selecting **None**. This latter option is useful if you are using the ssh command to transfer binary data that may contain a tilde. 
 - By default, the SSH client and server will compress and uncompress data sent between them, which can speed up large transfers of text or other compressible data. However, sometimes this can actually slow things down or be a useless waste of CPU time, for example if you are using scp to copy lots of GIF files or always connecting to the host over a fast network. To turn off compression, change the **Compress SSH traffic?** field to **No**. If compression is enabled, the **Compression level** menu controls the trade off between CPU utilization and the amount of bandwidth used. If *1* is selected very little compression is done, whereas if *9* is chosen a lot more CPU time will be expended on reducing the actual amount of data transferred.  These fields and the those in the next two steps are not available if your system is running commercial SSH version 3 or above. 
 - By default SSH clients will use the privileged source port _22_ when connecting, which indicates to the server that it is a trusted program and thus can be relied on to provide correct information about the user running it. This is necessary for rlogin-style authentication to work, but unfortunately many networks have their firewalls configured to block connections with privileges source ports, which completely blocks SSH.  To have the clients use a normal port instead, select **No** for the **Use privileged source ports?** field. Unless you are using host-based authentication, this will cause no harm. 
 - To set the SSH protocol versions that clients will try when connecting to this server, choose **Selected** in the **Try SSH protocols** field and check the ones to try. The default is to try them both. 
 - Hit the **Create** button at the bottom of the page to save the new per-host settings. They will be used by all new client connections made from your system from now on. 

After a set of host options is created, an icon for the host will appear on the Client Host Options page. You can click on this icon to bring up its editing form, make changes to the same fields and hit the **Save** button. Or to remove the host and have connections to it revert to the default options, hit **Delete** on the same form. It is also possible to change the defaults that apply to all connects by clicking on the special **All hosts** icon and making changes on the form that appears. Of course, some fields do not really make sense in this context, such as *Real hostname to connect to* and **Port to connect to**, and so should not be used.

### User SSH Key Setup
Before a Unix user can use certificate authentication to login to an SSH server, he must generate a private key with the `ssh-keygen` command.

[![](/images/docs/screenshots/modules/light/ssh-server-user-ssh-key-setup.png "SSH Server User SSH Key Setup Screenshot")](/images/docs/screenshots/modules/light/ssh-server-user-ssh-key-setup.png)

This module can be configured to work with the [Users and Groups](/docs/modules/users-and-groups) module to run this command for all newly created users. If your network uses NFS-mounted home directories, this will allow new users to login to other hosts without needing to supply 
a password with no further setup needed. To configure the setup of SSH for new users, follow these steps: 
 - On the module's main page, click on the **User SSH Key Setup** icon. 
 - Check the **Setup SSH key for new Unix users** checkbox, so that ssh-keygen will be run for new accounts. 
 - To have the new user's public key added to the list of keys that are authorized to use his account, check the **Copy new `identify.pub` to `authorized_keys`** box. If it is not selected, they will need to do this manually before authentication with their new certificate will be accepted. 
 - To set a passphrase for new users' private keys, check the **Use password as key passphrase** box. If it is left unchecked, no passphrase will be set (which is more user-friendly, but less secure). 
 - Click the **Save** button to have Webmin start using your new settings.

### Miscellaneous Options
This page contains options that don't fit into any of the other categories.

[![](/images/docs/screenshots/modules/light/ssh-server-miscellaneous-options.png "SSH Server Miscellaneous Options Screenshot")](/images/docs/screenshots/modules/light/ssh-server-miscellaneous-options.png)

Some of the less obvious options but useful are:
 - **Allow X11 connection forwarding?**
 
   If set to **Yes**, users that make an SSH login from a Unix machine will be able to run X applications on the server and have the X connection tunnelled back through the SSH connection to their local display.
 - **System log facility**
 
   The syslog facility that is used to log error and information messages from the SSH server. This can be used in conjunction with the [System Logs](/docs/modules/system-logs) module to control which file SSH messages get written to.
 - **Server key regeneration interval**
   
   How often the SSH server re-generated the key used for encrypting connections. If you are paranoid about security, set this to a lower number.
