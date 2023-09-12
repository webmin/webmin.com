---
title: "Network Services and Protocols"
date: 2023-09-12
weight: 665
---

### About
This page covers the super-servers **inetd** and **xinetd**, which are responsible for starting servers for protocols like _telnet_ and FTP when needed. 

### Intro
Heavily used network services such as [Postfix Mail Server](/docs/modules/postfix-mail-server), [Squid Proxy Server](/docs/modules/squid-proxy-server) and [Apache Webserver](/docs/modules/apache-webserver) are handled by server processes that run continually and have their own complex configuration files and Webmin modules. However, there are other services like _telnet_, _finger_ and POP that do not need any configuration and do not need their own permanent server process. Instead, their servers are run when needed by a super-server like _inetd_ or _xinetd_ which listens for network connections on multiple ports. Only when it receives a connection does it start the appropriate process to communicate with the client, which exits when the connection is closed. This saves memory by limiting the number of processes running at any one time, but makes the handling of new connections slightly slower. 

Every service has a short name like _telnet_ or _pop3_, a port number like _23_ or _110_ and a protocol like TCP or UDP. The file `/etc/services` lists all the service names and their corresponding ports numbers that your system knows about, only a few of which may have a super-server or other server listening on them. 

The most commonly used super-server is _inetd_, which is used by almost all Linux distributions and Unix variants. All server settings are stored in the configuration file `/etc/inetd.conf`. In addition to starting servers in response the TCP and UDP connections, it can also handle RPC (remote procedure call) function calls in a similar way. One major shortcoming of _inetd_ is its inability to reject connections depending on the client IP address. However, this can be overcome by using an intermediate TCP-wrappers server program, which has its own IP access control configuration file. 

Another super-server that is gaining in popularity and has more features is _xinetd_, which uses the `/etc/xinetd.conf` configuration file and sometimes other files under the `/etc/xinetd.d` directory.  Like _inetd_, it can launches server processes in response to TCP and UDP connections, but does not support RCP. Its major advantage is built-in support for restricting connections to certain client IP addresses without the need for a separately configured program. It can also re-direct an incoming connections on certain ports to another host and port by making its own client connection 
and forwarding data back and forth. 

Because _inetd_ and _xinetd_ have totally different configuration files and file formats, there is a separate Webmin module for configuring each of them. Most Linux distributions will ship with one or the either, but in some cases both can be installed and co-exist peacefully. The only limitation is that they cannot both listen on the same port at the same time. 

### The module
This module deals with the configuration of _inetd_, and can be found under the Networking category in Webmin. If the link is not visible, Webmin has detected that it is not installed. This could be because your distribution is using _xinetd_ instead.

The module's main page displays two tables, one for **Internet Services** that respond to TCP or UDP connections, and one for **RCP Programs**. In the **Internet Services** section, the names and protocols of all services are shown – in some cases, the same service may be recognized for more than one protocol. Each service can be in one of three states, indicated by the font its name is shown in : 
 - **Enabled** (bold) &mdash; A server program has been assigned to this service, and it is currently active. 
 - **Disabled** (bold-italic) &mdash; A server program has been assigned,  but it is not active. This corresponds to a commented-out entry  in the _inetd_.conf file.
 - **Unassigned** (normal) &mdash; No server program has been assigned to this service, meaning there is no _inetd_.conf entry for it. 
If the module configuration option **Show services with no program** has been set to **No**, services in the unassigned state will not be displayed. This is the default on some operating systems, 
due to the large number of services that the system knows about. 

Most Linux distributions ship with almost all services in the disabled state by default. This limits the number of unnecessary services that your system allows connections to, and thus reduces the chance of a security hole in one of the server programs being exploited by an attacker. 

Because each service is shown with only a short name like _telnet_ or _chargen_, it is not obvious to an inexperienced administrator what each of them do. Some of the more commonly used services and their purposes are:

The _daytime_, _echo_ and _chargen_ services for both TCP and UDP protocols are handled internally by _inetd_ when enabled, not by a separate server program.

### Enabling an Internet service
If you want to allow users to fetch mail from your system using the POP3 protocol or login via _telnet_, it is necessary to turn on the appropriate internet service if it is not currently enabled. To do this, the steps to follow are : 
 -  On the main page of the module, click on the name of the service that you want to enable in the **Internet Services** table. If unassigned services are not displayed on your system, you can enter the service name and select the protocol in the fields next to the **Edit service** button. Clicking the button will take you to the editing form, assuming the service name is recognized. 
 -  The **Service name**, **Port number**, **Protocol** and **Aliases** fields should be left unchanged unless you want to rename the service or change the port it is listening on. For services that you did not create yourself, changing any of these fields is a bad idea as it may prevent programs on your system connecting to other servers. 
 -  In the **Server program** section, to enable the service select the **Program enabled** option. If **Program disabled** was selected previously, then all the other settings in the section should be correct and will not need to be changed. However, if **No program assigned** was selected before then you will need to choose a server program and a user for the server to run as. Select the **Program** field **Command** option and enter the full path to the server program into the field next to it, such as `/usr/sbin/in.ftpd`. In the **Args** field, enter the server command again and any arguments what it needs, such as `in.ftpd –l –a`. Even though the program path is in the **Command** field, the program name must appear in the **Args** field as well. You will need to enter a user for the server program to  run as into the **Execute as User** field. For almost all servers, this will be _root_. One of the **Wait Mode** options must be set as well – unless the server runs and executes very quickly, choose **Don't wait**. Some services such as _daytime_, _echo_, _chargen_ and discard are handed internally by _inetd_. If you are enabling one of them, just select the **Internal to _inetd_**.  No program or arguments need to be entered, and the user the server executes as is irrelevant. 
 -  When you are done, click the **Save** button. As long as there are no errors and the chosen server program actually exists, the browser will return to the list of services on the main page. 
 -  Click the **Apply Changes** button at the bottom of the page to make your changes active. 
 
In some cases, you will not be able to enable a service because the corresponding server program is not installed yet.

If you want to disable a service, just follow the same steps but select the **Program disabled** option instead. This is better than choosing **No program assigned** as it is easy to turn the service back on again without having to re-enter the server program details. 

### Creating your own Internet service
In some situations, you may want to add a new server to your system that listens on a port not assigned to anything else. You might want to run a _telnet_ server on some non-standard port, or re-direct traffic from one port on your system to another server using a program like _nc_. If you are just trying to turn on some standard service like _ftp_ or _imap_, the instructions in this section are not for you – see the [”Enabling an Internet service”](#enabling-an-internet-service) section instead. 

The steps to follow to create a new service are : 
 -  On the main page of the module, click the **Create a new internet service** link. This will take you to the service creation form. 
 -  Fill in the **Service Name** field with a unique name for your service. 
 -  Enter the port number you want the service to be associated with into the **Port Number** field. 
 -  Select the protocol from the **Protocol** list. This will almost always be TCP, but in some cases you may need to use UDP. 
 -  Enter any alternate names that you want the service to be referred to by into the **Aliases** field. 
 -  Assuming you want to have a server program associated with this service, choose the **Program enabled** option in the **Server Program** section. Otherwise all that will be created is an association between a service name and port number. 
 -  For the **Program** field, select the **Command** option and enter the full path to the server program into the field next to it – for example `/usr/local/bin/someserver`. In the **Args** field, enter the program name and any command-line arguments that it should be run with, such as someserver –foo. To give another example, if you wanted to create a service that displayed all the processes running on your system to anyone who connected via _telnet_, you could set the **Command** to `/bin/ps` and the **Args** to `ps auxwww`. This would be a bad idea from a security  point of view though. 
 -  If the server program is going to take more than a second to run or if it accepts any input, set the **Wait mode** field to **Don't wait**. Otherwise _inetd_ will stop handling new network connections until the program has finished. The only advantage of this **Wait until complete** mode is a slight reduction in memory usage. 
 -  Enter the username of the Unix user that the server program should run as into the **Execute as User** field. This is usually root, but can be anyone. 
 -  To limit the rate at which _inetd_ will accept connections for your service, enter a number into the **Max per Minute** field. If the limit is exceeded, subsequent connections will be refused until the next minute. 
 -  By default, the group that the server program runs as is the primary group of the user set in the **Execute as User** field. To change this, enter a group name into the **Execute as Group** field. 
 -  Click the **Create** button to create your service. As long as there are no errors in the form, you will be returned to the list of services on the main page. 
 -  Click the **Apply Changes** button to make the service active. 

Once a service has been created, you can test it by running _telnet_ localhost _portnumber_ at the shell prompt on your system. You can edit your service at any time by clicking on its name on the main page, and changing any of the options before clicking **Save** – or **Delete** if you want to get rid of it. After making any modifications, the **Apply Changes** button must be used to make them active, 

### Creating and editing RPC programs
RPC is a protocol and data format that is the basis for other protocols like NFS and NIS. RPC clients make function calls to RPC servers, passing parameters and getting back results. To the client or server, making a remote procedure call is no more difficult than calling a normal library function, which writing programs that use RPC much easier than creating your own protocol from scratch. 

An RPC program is a set of functions that are handled by a server. Each program has a unique number, similar to the port of an internet service. Programs are not associated with a particular protocol, as they can generally accept connections and function calls via UDP or TCP. Nor does it have a fixed port, as they are assigned dynamically when needed. 

RPC servers (like the NIS and NFS servers) that handle a large amount of traffic have their own processes that run all the time. However, some servers that need to be run only occasionally can be instead executed by _inetd_ only when needed – just like with infrequently used internet services. Some of the more commonly used RPC programs are:
 
On some systems, these RPC programs may be handled by servers that are not run from _inetd_ but instead as stand-alone processes. In that case, the [Bootup and Shutdown](/docs/modules/bootup-and-shutdown) module is the place to activate or de-activate it. Due to the small number of common RPC programs and their limited usefulness, many Linux distributions do not have any programs enabled or disabled in the _inetd_ configuration by default. However, this is not the case on other operating systems like Solaris. 

If you want to make use of an RPC protocol which is not currently enabled, you can use this module to turn it on. Of course, the appropriate RPC server program must be installed first, and _inetd_ on your 
system must support RPC programs. If so, the steps to follow are: 
 -  On the main page of the module, click on the program name from the **RPC Programs** table. This will take you to the program editing form shown in Figure 15-3. 
 -  Under the **Server Program** section, select the *Program enabled* option. If **Program disabled** was selected previously, then all the other settings in the section should be correct and will not need to be changed. However, if **No program assigned** was checked you will need to fill in several other fields. The **RPC Versions** field should be set to the range of versions that the server program supports, such as _1_ – _3_. The *Socket Type* field should be set to **Datagram**, and the **Protocol** field set to only the **udp** option. For the **Server Program** field, enter the full path to the RPC program, such as `/usr/sbin/rpc.rusersd`.  For the **Command** field, enter the program name and any arguments, such as `rpc.rusersd –a`. For the **Wait Mode**, select **Don't wait**. For the Execute as User field, enter the username you want the server program to run as – usually root. 
 -  When done, click the **Save** button. As long as there are no errors in your input, you will be returned to the main page of the module where the RPC program should appear as enabled. 
 -  Click the **Apply Changes** button to make the program active. 
  
### Configuration
To access the configurable options of the Internet Services module, click on the **Module Config** link in the top-left corner of its main page. This will take you to the standard configuration form, on which you can change the following options: 

The rest of the module configuration options under **System configuration** are set automatically by Webmin based on your operating system type, and so should not be changed. 

### Other operating systems
Almost all versions of Unix include _inetd_ as standard, and use it to launch infrequently-run server programs in the same was that Linux does. However, its configuration file format and capabilities are slightly different on other operating systems, which means that the module's user interface will not be exactly the same. The main page will always show lists of internet and RPC services, but when editing or creating a service different fields and options will be available depending on the Unix variant you are running: 
 - #### Sun Solaris

   - When editing an internet service, the **Max Per Minute** and **Execute as Group** fields are not available.
   - Solaris versions 8 and above support IPv6 TCP and UDP protocols, as well as the standard IPv4 that Linux uses.
   - Many RPC services exist in the disabled state by default, for things like NFS quotas and locking. 

 - #### FreeBSD

   - RPC services cannot have programs assigned. All you can do is edit the service names and program numbers.
   - When editing or creating a service, you can control the number of server programs that can active at any one time with the **Max Child Processes** field.
   - Also when editing, you can set the login class that the server program runs as with the **Execute as Login Class** field.

 - #### NetBSD

  Like on FreeBSD, the **Max Child Processes** and **Execute as Login Class** fields are available when editing or creating a service. 
  
   - As with Solaris, internet services can use IPv6 TCP and UDP protocols. 

 - #### OpenBSD
   - **OpenBSD**, **Compaq Tru64/OSF1**, **IBM AIX**, **SCO OpenServer** and **SCO UnixWare** (like on Solaris, the **Max Per Minute** and  **Execute as Group** fields are not available). 

 - #### SGI Irix

   - The **Max Per Minute** and **Execute as Group** fields are not available when editing a service.
   - There is an additional checkbox below the server program **Command** field labeled **Command may not exist?**, that if set tells _inetd_ to ignore the service if the server program is not installed. By default, this is turned on for many services related to Irix packages that are not installed by default. 

 - #### HP/UX

   - On HP/UX, the module has exactly the same options as Linux.

 - #### Apple MacOS X

   - Like on Solaris, the **Max Per Minute** and **Execute as Group** fields are not available. 
   - RPC services cannot have programs assigned, as on FreeBSD.
   - Instead of the `/etc/services` file being used to store service names and ports, they are in a NetInfo table. Webmin dumps and re-loads this table to read and edit services. 
