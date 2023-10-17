---
title: "NIS Client and Server"
date: 2023-09-12
weight: 685
---

### About
The **NIS Client and Server** module handles the use of NIS, **Network Information Service** which is a protocol for sharing users, groups and other information between multiple systems. This chapter explains how NIS works, and how to set your system up as either a client or server using Webmin. However, NIS is an old and inherently insecure protocol that can easily lead to compromised systems, and has mostly been supplanted by newer, more secure systems like LDAP, but it's still found in some environments, especially older ones.

A [FirewallD](/docs/modules/firewalld) needs to be configured correctly to prevent unauthorized access.

### Intro
NIS is a protocol for sharing user, group, hostname and other information between multiple Unix systems. It was originally developed by Sun Microsystems, but is now available on Linux and many other Unix operating systems. Its original name was YP (**Yellow Pages**), which is why many of the NIS commands start with `yp`.

On a network with many systems, users may be allowed to login to any of those systems. Typically, to avoid having to create and update users on each system separately, NIS can be used to distribute a master list of users and groups to all hosts. Although distributing user and group information is the most common use of NIS, it can also be used to share hostnames and IP addresses, automounter maps, internet services and netgroups. 

An NIS server is a system that stores tables of user, group and other information. A client system connects to a server and queries it for stored information, usually by looking up usernames, hostnames and so on. Normally a server system is also one of its own clients, so that it has access to the users and other data in its own tables. 

Each server is responsible for a single NIS domain, and each client is a member of a domain. A domain has a short name, like marketing or `foo.com`, which is not related to or necessarily the same as the network's DNS domain. When NIS is started on a client system, it can either broadcast for any server on the network for its domain, or connect to specific server IP addresses. A single network may have multiple NIS servers for different domains, each of which supplies different tables. 

In order to reduce the load on the NIS server, a network may contain multiple servers that all have copies of the same tables. One is the master server and the rest are slaves, which just receive information from the master whenever it is changed. A client can then connect to either the master or a slave and query the same tables. 

In recent years, a new version of the old NIS protocol has been developed, called NIS+. It solves many problems with the original protocol, the biggest being its lack of security. However, it is more complex to configure and not as widely available. For these reasons, Webmin only supports the configuration of NIS clients and servers. 

The file `/var/yp/Makefile` is usually the primary configuration file for an NIS server, as well as a make script that generates binary format table data from source text files. The server also reads the files `/var/yp/securenets` and `/etc/ypserv.conf` to control which clients are allowed to connect, and which tables they can query. Webmin directly updates all of these files, along with the table source files when you are configuring NIS. The primary NIS server program is called `ypserv`, but others such as `yppasswd` (for processing password change requests from clients) and `ypxfrd` (for sending tables to slaves) may be run as well. 

On client systems, the file `/etc/yp.conf` stores the domain name and NIS server IP addresses. Information about which services to query NIS for is stored in `/etc/nsswitch.conf`. All clients run the program `ypbind`, which passes queries for user, group and other information from local programs to the NIS server. 

The NIS Client and Server Webmin module allows you to set up your system as an NIS client and/or server. When you enter it from the Networking category, the main page simply shows five icons for the different areas of client and server configuration. If Webmin detects that the NIS client programs are missing from your system, the main page will instead display an error message – if this happens, check your Linux distribution or website for a package named something like `ypbind`.

The module is not supported on all versions of Linux. At the time of writing, only Redhat, Mandrake, OpenLinux, Debian, SuSE, UnitedLinux and MSC.Linux could use it. Because each distribution uses slightly different configuration files for NIS, there may be some differences in the user interface and default settings between different distributions, in particular on the **Client Services** and **NIS Server** pages. 

#### Key Concepts

1. **NIS Server**: The server maintains the master copies of system configuration files. These are then made available to NIS clients. There can be backup NIS servers in addition to the primary NIS server.
   
2. **NIS Client**: Clients query the NIS server to get information. This could be user authentication data, hostnames, IP addresses, and so on. In essence, when a client needs information, it will ask the NIS server instead of looking in its local configuration files.

3. **NIS Domain**: An arbitrary name that identifies a group of machines that share the same NIS data. It is important not to confuse NIS domains with DNS domains as they serve different purposes.

4. **NIS Maps**: These are databases that the NIS server distributes. They are derived from text files on the NIS server, such as `/etc/passwd` or `/etc/group`.

#### How It Works

 -  **Setup**: The server's system files (like `/etc/passwd`, `/etc/group`, etc.) are converted into NIS format, creating the NIS maps.
 - **`yppush`**: When an update occurs on the NIS server, the `yppush` program pushes updates to slave NIS servers.
 - **`ypbind`**: NIS clients run the `ypbind` process. This process finds an NIS server and binds the client to it. When an application needs information from a map, it queries `ypbind` to determine where to send the request.
 - **Queries**: Client machines query the server to get information. For instance, when a user logs in, the system can query the NIS server to authenticate that user's password.

#### Considerations

 - **Security**: One of the main criticisms of NIS is its lack of security. Password hashes can be openly queried by any machine in the NIS domain. There's no encryption, so eavesdroppers can potentially pick up sensitive information. For this reason, NIS should never be used across untrusted networks.
 - **Modern Alternatives**: LDAP, especially when combined with Kerberos, is a modern alternative to NIS. It provides a lot of the same directory services as NIS, but with more features, flexibility, and better security.

In many modern systems, the need for NIS has been completely obviated by other technologies, but it's still a good idea to be familiar with it, especially if you're working with older UNIX systems.

### Becoming an NIS client
To set your system up as an NIS client, there must already be an NIS server running and be accessible on your network.  If not, see the section on [“Setting up an NIS master server”](#setting-up-an-nis-master-server) below for information on how to start one. Assuming there is an NIS server running and you know its NIS domain name, the steps to become a client are: 
 - Install necessary modules: `ypbind` `yp-tools` and `rpc-bind`.
 - Start the `ypbind` service.
 - On the module's main page, click the **NIS Client** icon. This will take you to a form for entering the domain name and NIS server IP addresses. 
 - In the **NIS domain** field, enter the name of your network's NIS domain. 
 - If you do not know the IP address of an NIS server, set the **NIS servers** option to **Find by broadcast**. This will only work if the server is on the same LAN as your system – if not, the broadcast will not be able to reach it. If you do know the address of an NIS server, select the **Listed below** option and enter all the master and slave server addresses into the text box. The more you enter the better, because your system will try to query each of them in turn when NIS is enabled. However, it is best to enter the nearest server first so that a more distant and thus slower server is not always queried. 
 - Click the **Save and Apply** button to have your settings saved and immediately activated. If your system cannot contact a server for the NIS domain, an error message will be displayed – otherwise, the browser will return to the module's main page. 
 - Now that you are connected to an NIS server, you must configure the system to actually query it for users, groups and other information. To do this, click on the **Client Services** icon.
 - Each row of the client services form controls what your system will query when looking something up for a particular service. For each, you can select several sources that will be checked in order until one finds a match. The available sources are: 
   - **Files**
 
     Local configuration files, such as `/etc/passwd` or `/etc/hosts`. 
   - **NIS**
 
     This NIS server that your system is currently connected to. 
   - **NIS+**
 
     The NIS+ server that your system is connected to. Configuring NIS+ is not supported by Webmin though. 
   - **NIS and Files**
 
     This option only works for the **Unix users** and  **Unix groups** services. If chosen, special lines in `/etc/passwd` and `/etc/group` starting with `+` or `–` can be used to indicate that some or all NIS users should be included. This is actually more flexible than just choosing the **NIS** source, as special `+` and `–` lines can be used to bring in only some users and groups,  or change the attributes of those that are included. 
   - **DNS**
 
     This option only makes sense for the **Host addresses** source.  It tells the system to query a DNS server when looking up hostnames, which is almost always what you want to do. Typically, you should set each of the services that you want to use NIS for (such as **Unix users** and **Unix groups**) to **Files** and **NIS**. Everything else should be left set to just **Files**, or in the case of **Host addresses** just **Files** and **DNS**. Your system will then look in the local system configuration file first (such as `/etc/passwd`) and then query the NIS server. 
 - When done, click the **Save** button. Your changes will take effect immediately in all programs, and any NIS users should be able to login just as local users would.  

Once you have used Webmin to make your system an NIS client, it will attempt to connect to a server at boot time. Failure to connect could cause the system to hang part way through the boot process, waiting for the server to become available. If the server goes down while your system is connected, any program that looks up user information may hang as well. 

To stop your system from being an NIS client, the steps to follow are: 
 - On the main page of the module, click the **NIS Client** icon  to go to the client options page. 
 - Set the **NIS domain** field to **None (NIS diabled)**. 
 - Click the **Save and Apply** button. The system will no longer use NIS to look up any information, and will not connect at boot time. Any services that are configured to use an NIS source on the **Client Services** page will simply skip that source, and most likely only use local files instead.

### Setting up an NIS master server
Before your system can become an NIS, the appropriate server programs must first be installed – if they are not, which you click on the **NIS Server** icon an error message will be displayed. Check your Linux distribution or website for a `ypserv` or nis-server package, which should contain all the needed commands and files. 

The first step to setting up an NIS server is deciding on a domain name. Typically, this will be the same as your internet domain (such as `foo.com`), but anything made up of letters, numbers and dots is allowed. After deciding, the steps to follow are:
 - Install necessary modules: `ypserv` `ypbind` `yp-tools` and `rpc-bind`.
 - Start the `ypserv` service on [Bootup and Shutdown](/docs/modules/bootup-and-shutdown).
 - Make sure the [FirewallD](/docs/modules/firewalld) allows access from NIS-clients.
   
   ```
   firewall-cmd --zone=trusted --add-source=192.168.100.0/24 --permanent
   ```
   (assuming that other servers are on the 192.168.100.xxx segment)
 - On the module's main page, click on the **NIS Server** icon. This will take you to a form for enabling the server and configuring other options.
 - Set the **Enable NIS server?** option to **Yes**. When the form is saved, the server processes will be started immediately and at each subsequent reboot. 
 - Enter your chosen domain into the **Serve NIS domain** field. This is better than choosing the **Same as client** option, even if they are going to be the same. 
 - Leave the **Server type** set to **Master server**. To set up a slave server, see the [“Setting up an NIS slave server”](#setting-up-an-nis-slave-server) section below. 
 - If NIS clients are incapable of looking up hosts and addresses in DNS themselves, turn on the **Lookup missing hosts in DNS?** option to have the master server do lookups for them. Only very old client operating systems like SunOS 4 need this. 
 - In the **NIS tables to serve** field, select all tables that you want to make available to clients. Some of the most commonly used tables and their purposes are:
 
   **passwd** &mdash; Unix users, as stored in the `/etc/passwd` file. Normally this contains  passwords as well, instead of them being stored in a separate  shadow table. 
   
   **group** &mdash; Unix groups, as normally found in the `/etc/group` file.
   
   **hosts** &mdash; Hosts and IP addresses, as found in the `/etc/hosts` file. Even though NIS can be used to store and lookup hostnames and addresses, it is almost always better to set up a DNS server instead.
   
   **shadow** &mdash; Additional user information, including passwords. If this table and **passwd** are selected, depending on your NIS Makefile configuration you may be able to edit extended user information, such as expiry and warning dates.
   
   **netgrp** &mdash; Netgroups, which are groups of hosts. These  can be used when exporting directories via NFS.
 - If your network will have slave servers, it is advisable to set the **Push updates to slaves?** option to **Yes**. This way whenever a change is made to one of the NIS tables, all slave servers will be notified immediately so that they are in sync. 
 - Enter the IP addresses of any slaves (separated by spaces) into the **Slave servers** field. 
 - In the **Master NIS files** section, you can choose which files will be used as the sources for the NIS tables. Often by default the normal user, group, host and other configuration files in `/etc` will be used, such as `/etc/passwd`, `/etc/group` and  `/etc/hosts`. This is not a good idea though – instead, you should change the files for the tables that your server is serving to similar filenames in the `/var/yp` directory, such as `/var/yp/passwd`  and `/var/yp/group`. Once the server is running, it can be configured to become one of its own clients and so have access via NIS to any records in these files, instead of accessing them locally. 
 - When done, click the **Save and Apply** button. This NIS server will be started on your system, and be configured to start at boot time in future. 

Now that the server is running, you can test it by configuring some other system as an NIS client for the chosen domain. Server settings on the form can be changed at any time by simply repeating the same steps, and they will become effective immediately. 

To shut down your NIS server, the steps to follow are: 
 - Make sure any clients are no longer using your system as a server, either by turning off NIS on them altogether or having them use a different server. 
 - On the module's main page, click on the **NIS Server** icon to go to the server options form. 
 - Set the **Enable NIS server?** field to **No**. 
 - Click the **Save and Apply** button. The server processes on your system will be shut down, and prevented from starting at boot time in future. 

### Editing NIS tables
Once your system is running as an NIS master server, you can use this Webmin module to edit records in the tables that it is serving. To see the editable tables, click on the **NIS Tables** icon, which will take you to page with a menu of all tables and the contents of one displayed. Other tables can be shown by selecting one of them from the list and clicking the **Edit NIS table** button. 

For most table types, Webmin will parse the contents of their files and display it as a table on the page, with one record per row. You can edit any record by clicking on its name in the first column, or add a new one by clicking the **Add a new record** link. However, some tables are in a format unknown to Webmin and so will be shown as raw text in a text box instead. If you know the correct format, the table can be manually edited and saved with the **Save and Apply** button. You can also switch any table to manual mode by clicking the **Edit table manually** link, if you prefer to work with the raw text. 

The fields that exist in each record and the form for editing them is different for each type of table. The instructions below explain how to add, delete and modify records in several commonly used tables. One commonality is that any changes will cause the NIS table to be automatically rebuilt from the changed source files, and pushed out to slave servers if configured. 

To create a new Unix user for NIS clients, the steps to follow are: 
 - Select the **Unix users** table from the menu and click the *Edit NIS table* button. 
 - Click the **Add a new record** link above or below the table of existing users, which will take you to the user creation form. 
 - Enter the user's name into the **Username** field, and a ID number for the new user into the **User ID** field. Unlike in the [Users and Groups](/docs/modules/users-and-groups) module, the ID will not be automatically chosen for you, so make sure it is unique. 
 - Enter the user's full name into the **Real name** field. 
 - Enter a home directory into the **Home directory** field. Unlike in the Users and Groups module, this will not be created for you and files will not be copied into it. 
 - Select a shell from the **Shell** menu, or select the **Other** option and enter the path to the shell program into the field  below. 
 - Select the **Normal password** option for the **Password** field, and enter the new user's password into the text field next to it. 
 - Enter the numeric ID of the user's group into the **Primary group ID** field. 
 - If the shadow NIS table is enabled, you can set the optional **Expiry date**, **Minimum days**, **Maximum days**, **Warning days** and **Inactive days** fields. These all have the same meanings as in the [Users and Groups](/docs/modules/users-and-groups) module 
 - When done, click the **Create** button to have the new user added to the table. 

Existing Unix users can be edited by clicking on their names in the table, which will take you to an editing form with all the same fields as described above. Change any of the fields, and click the **Save** button – or to delete the user, click the **Delete** button at the bottom of the form. When deleting, the user's home directory will not be touched, so you may need to delete it manually. 

To create a new Unix group in NIS, the process is as follows: 
 - Select the **Unix groups** table from the menu and click the **Edit NIS table** button. 
 - Click the **Add a new record** link above or below the table of existing groups, which will take you to the user creation form. 
 - Enter a name for the new group into the **Group name** field, and a numeric ID into the **Group ID** field. Make sure that the ID is not used by any other existing group. 
 - The **Password** field can be left untouched, as group passwords are almost never used. 
 - Fill in the **Group members** field with the usernames of users who will be members of the group, one per line. 
 - When done, click the **Create** button to have the new group added to the table. 

As with users, you can edit a group at any time by clicking on its name from the table, which will take you to an editing form. Make any changes that you want, and click the **Save** button to save them – or use the **Delete** button to remove the group. No checking will be done to see if it is the primary group of any existing users though. 

As the instructions for editing users and groups show, the process for editing any of the supported tables is quite similar. Currently, you can edit **Unix users**, **Unix groups**, **Host addresses**, **Networks**, **Services**, **Protocols**, **Netgroups**, **Ethernet addresses**, **RPC programs**, **Netmasks** and **Aliases** for email using forms in Webmin. All other tables must be edited manually. 

### Securing your NIS server
By default, an NIS server allows any client to connect to it and query tables, as long as the client knows the domain name. If your system is connected to the internet, an attacker could guess the NIS domain and request a list of all NIS users. Even though their passwords are stored in encrypted format, it is still possible for obvious or dictionary word passwords to be discovered by a brute-force attack on the password encryption. 

For this reason, it is wise to limit the addresses of clients that connect to the server to only those Unix systems that are really clients. To set this up, the steps to follow are: 
 - On the main page of the module, click on the **Server Security**  icon. 
 - The rows in the **Allowed clients** table control which clients are allowed to connect. You can modify any of the existing entries, or use the empty row at the bottom to add a new one. To add more than one row, you will have to add them one at a time, saving and opening the form for each one. To grant access to a single host, under the **Netmask** column select **Single host** and enter its IP address under **Network/host address**.  To grant access to an entire IP network, select **Netmask** and enter a netmask (such as _255.255.255.0_) into the field next to it, and the network address under the **Network/host address** column. To grant access to all clients, just select the Any host option under the **Netmask** column. 
 - When done, click the **Save and Apply** button. The new restrictions will take effect immediately, and you will be returned to the module's main page. 

It is a good idea to at only clients on your own network to connect, and deny all others. An even more secure alternative would be to allow only those systems that you know are NIS clients, assuming they have fixed IP addresses and do not change often. 

Even if you restrict access to only trusted client systems, users who can login to those systems via SSH or telnet may still be able to get a list of all NIS users and their encrypted passwords. To prevent this, it is possible to configure the server to only allow clients using trusted ports to access certain tables or fields within tables. Because on Unix systems only the root user can create TCP or UDP sockets with port numbers below 1024, these low ports are considered trusted and safe from use by regular users. 

It is also possible to prevent certain clients from accessing some NIS tables, but still allow them access to others. For example, you might want to give all client systems access to the **Host addresses** table, but only a trusted few the rights to the **Unix users** table. 

To restrict access to tables on your server, the steps to follow are: 

 - On the main page of the module, click on the **Server Security** icon.
 - The **Client map restrictions** table controls which NIS tables can be accessed by certain client systems, and who on those systems can access them. Each row specifies a rule that applies to some or all clients, and can either allow access, block it entirely or filter the a queried table. The fields and their meanings are: 
   - **Hosts**
 
     An IP address or partial IP address (like **192.168.1.**) that this restriction applies to. Entering `*` will make the restriction apply to all clients. 
   - **NIS tables**
 
     **Select the All** option to have the restriction apply to all tables, or enter a single table name. Internally, the NIS server appends something like .byname or .byuid to table names to indicate that they are indexed by. The table name that you enter must use this internal name, such as `passwd.byuid` or `hosts.byaddr`. **Restriction** This field controls what the server does if a client request matches. Select **None**  to allow the request, **Deny access** to block it altogether, or **Trusted port** to block if the client is using an un-trusted port. **Mangle field** If using the **Trusted port** restriction, you can use this option to hide only a single field of the requested table from the client. Selecting **None** will block access to the table altogether, but entering a field number will cause its contents to be replaced with an `x`. The only practical use of this option is hiding passwords in the `passwd.byname`, `passwd.byuid` or `shadow.byname` tables, which are in field 2.
     
     New restrictions can be added using the empty row at the bottom of the table. To add more than one restriction, you will need to save and re-open the form multiple times. When a client requests a table, the NIS server will find the first row in the table that matches and use the restriction defined. For this reason, you must make sure that any new row you add is before the one that grants access to all clients and tables, which usually exists by default. 
 - When done, click the **Save and Apply** button. The browser will return to the module's main page, and any changes to restrictions will take effect immediately. 

The most useful use of the **Client map restrictions** table is to add a row for all clients on the `passwd.byname` table with the restriction set to **Trusted port** and the **Mangle field** option set to 2. Then add another row for the `passwd.byuid` table, with all other options the same. These will prevent non-root users from seeing encrypted password, while still allowing programs running as root such as the telnet or SSH server. 

If you are using the separate shadow table to store passwords and expiry information, the restriction should be on the `shadow.byname` table instead. On many Linux distributions, a restriction like this exist by default. 

### Setting up an NIS slave server
Slave NIS servers are used in a similar way to secondary DNS servers – they keep a copy of the tables held by the master server, and can be used by clients if the master fails or is slow to respond. If you are using NIS on a very large network that has multiple LANs connected by slow links, it may also make sense to put a slave server on each LAN so that clients can use it instead of the master. 

On OpenLinux, there is no way to setup a slave server using Webmin due to the unique NIS configuration files used by the distribution. On all other versions of Linux, the steps to set up a system as a slave server: 

 - On the module's main page, click on the **NIS Server** icon.
 - Set the **Enable NIS server?** field to **Yes**. 
 - Enter the master server's domain into the **NIS domain** field. 
 - Change the **Server type** to **Slave of server**, and enter the IP address of the master into the field next to it. None of the other fields need to be touched, because they all relate to running an master server. 
 - Click the **Save and Apply** button. The server should be started immediately, and configured to start at boot time. 

Make sure that the master server has the address of this slave entered into the **Slave servers** field on the server configuration form. It should also have the **Push updates to slave servers?** option enabled, so that any changes to tables will be immediately sent to the slaves. If not, you can use the `yppush` command to send the contents of an NIS table to a some or all slave servers. 

### Configuring the NIS Client and Server module
The module has a few configurable options that can be changed by clicking on the Module Config link in the top-left corner of the main page.

### NIS on Solaris
The only other operating system that Webmin allows you to configure NIS on is Sun's Solaris. On Solaris, the **NIS Client** and **Client Services** page are identical to those on Linux, and work in the same way. However, the **NIS Server** and Server Security forms are slightly different: 
* On the **NIS Server** page, the whatever domain you enter will also be used for the NIS client as well. This is a limitation of Solaris, unlike Linux where a system can be a server for one domain and a client of another. 
* On the server page, you cannot specify the paths to individual table files directly. Instead, the **NIS source files directory**  and **NIS password source files directory** fields control which  directories they are stored in, usually `/var/yp`. 
* There is no **Client map restrictions** table on **the Server Security** page, and so no way to control which tables and fields clients can request. However, you can still allow or deny certain hosts and networks entirely using the **Allow clients** table. 
* Solaris systems include client and server support for NIS+ as standard. However, because that protocol is not supported by Webmin, attempting to use this module to re-configure a system that is already running as an NIS+ client or server will not work, and may even cause problems with its configuration.
