---
title: "Webmin Servers Index"
date: 2023-03-16
weight: 145
---

### About
This module really serves two purposes, one simple and one quite complex. You can use it to create a master index of other systems running Webmin on your network, each of which is shown as an icon that you can click on to link to the server. Each icon can either be a normal link, or a 'tunnel' that logs you into another server automatically with all traffic sent via the first system. 

As well, the module can be used to define systems which can be controlled by a master Webmin server, using the [System and Server Status](/docs/modules/system-and-server-status) module and the modules in the Cluster category. Each of these other systems must also have Webmin installed, and a special RPC (Remote Procedure Call) protocol is used by the master to communicate with and control the slaves. How this all works is explained in detail in this page below. 

When you click on the module's icon in the Webmin category, a page like the one shown in the image below will be displayed. Most of the page is taken up with a table of icons, one for each of the other servers that you have added. Of course, if this is the first time the module has been used, no server icons will appear initially. At the bottom are buttons for automatically finding other Webmin servers on your local network. 

[![](/images/docs/screenshots/modules/light/webmin-servers-index.png "Webmin Configuration Screenshot")](/images/docs/screenshots/modules/light/webmin-servers-index.png)

Even though it was designed for creating an index of Webmin web servers, there is not reason that you cannot create icons for other types of web server instead. However, the module's RPC features will naturally only work when communicating with a host running Webmin. 

### Adding a Webmin server
To add a new server to this module, either to provide a link to it or so that it can be managed with one of the Cluster group modules, follow these steps : 
- Click on the **Register a new server** link on the main page above or below the existing icons. 
- In the **Hostname** field enter the Internet hostname or IP address of the other server, such as **server.example.com**. 
- In the **Port** field enter the port that Webmin is listening on, usually **10000**. 
- From the **Server type** menu choose the operating system that the other host runs. This only sets the icon that will be used to represent the server. 
- If the other Webmin server is in SSL mode, select **Yes** in the **SSL server?** field. This option can only be used if the master system has the `Net::SSLeay` Perl module and the OpenSSL library installed, so that it can make a client-mode SSL connection. 
- When the **Description** field is set to *From hostname and port*, the server's hostname and port number are shown under its icon on the module's main page. However, you can select the second option and enter an alternate description to be shown instead, such as **Corporate Web Server**. 
- Servers defined in this module can be categorized into groups for easier addition in the Cluster category modules. In the **Member of server group** field you can select one of the following options:
  - *None* - The system you are adding will not be in any group.
  - *Existing group* - If some groups have already been defined, this server will be in the group selected from the menu next to this option. If no groups exist yet, this option will not even appear.
  - *New group* - The server will be added to the new group whose name you enter in the adjacent text field.  A group will cease to exist as soon as all the of servers in it have been deleted or changed to another group. 
- The **Link type** field is possibly the most important on this form, as it determines if the new server can be used in the Cluster modules and [System and Server Status](/docs/modules/system-and-server-status) module. It also determines if the icon is a normal link, or a tunnel. Your options are:
  - *Normal link to server* - RPC calls cannot be made to the other server, and its icon on the module's main page will just be a normal web link. If the system is running some other webserver specified port you should select this option.
  - *Login via Webmin with username* - This option must be chosen if you want to use Webmin's RPC features to control this server, such as with the Cluster category modules. If selected, you must enter a username and password for Webmin on the remote host into the fields next to it. The user should be root or admin, as other Webmin users are not by default allowed to receive RPC calls unless specifically authorized. RPC can be used to run any command or modify any file on a server, which is why access to it must not be granted to un-trusted Webmin users. If this mode is chosen, the server's icon on the main page will be a tunnel that automatically logs whoever clicks on it into the remote server as the specified user.
  - *Login when icon is clicked on* - If this option is chosen the server cannot be used for RPC, but its icon will still be a tunnel to the remote host. However, when first clicked on it will prompt the user for a login and password for the remote system, which will be stored in a cookie in the user's browser. This option is handy if you want various users to be able to to make use of the tunneling feature, but still login to the remote system as themselves. 
- If **Login via Webmin with username** was selected above, the **Make fast RPC calls?** field determines if the new fast RPC protocol will be used, or the older slow protocol. You can either select **Yes** to force the use of fast mode, **No** to force slow mode or **Decide automatically** to have Webmin use fast mode only if it is available. If the automatic option is chosen and the server cannot be contacted or logged into, an error message will be displayed when you hit the **Create** button later. Versions of Webmin before 0.89 did not support the fast protocol, but most systems should have been upgraded beyond that by now. Generally you will want to use the faster mode all the time, unless a firewall is blocking the direct TCP connections that it uses. See the [How RPC works](#how-rpc-works) section later in the page for more details on the differences between the two modes. 
- Finally, hit the **Create** button to add this new server. As long as there were no errors in the form you will be returned to the module's main page, which should include a new icon. 

The icons for servers not created in **Normal link to server** mode will actually be links to a program on this master server that connects to the remote system for you. This can actually be useful if your master server is accessible from the Internet but internal hosts are not, for example if you only have a single Internet IP address and are using NAT. When you access those internal servers by clicking on their icons in this module on the master system, your browser is only really connecting to the master server, which is then tunneling the requests though to the chosen slave. 

On a Webmin system with multiple users you should be careful about giving access to this module to un-trusted users. Anyone who can click on an icon for a server in **Login via Webmin with username** mode will be connected to the remote system as the user specified for that server, not himself. This will probably allow him to do things with root privileges on that remote host that he would not be able to do on the master system. 

The [Module access control](#module-access-control) section later explains how you can control which server icons a particular user can use, so that un-trusted people can be limited to those in the safe *Normal link to server* or *Login when icon is clicked* on modes. 

### Editing or deleting a Webmin server
Once a server has been added to this module you can edit all of its details or even delete it altogether. The steps to follow are: 

- On the main page, click on the **(edit)** link next to the name of the server that you want to change. This will bring up an editing form almost identical to the one for adding a server. 
- All of the fields can be edited, and have the same options and meanings as explained in the [Adding a Webmin server](#adding-a-webmin-server) section.  The only exception is the **Make fast RPC calls?** field, which will not have the **Decide automatically** selection if the module has already worked out the RPC mode that the remote server supports. 
- Hit the **Save** button to activate your new settings. Or if you want to remove this server from the module, hit **Delete** instead. Any other modules (such as those in the Cluster category) that made use of this server will automatically remove it from their lists. 

### Using server tunnels
When you click on an icon for a Webmin server in one of the tunnel modes you will be connected to it via this master system. The user interface of the remote host will be almost exactly the same as if you logged in normally, except that every page will include a special **Webmin Servers** link. When clicked on this will take you back to the Webmin Servers Index module on the master system, which is more convenient than hitting the back button in your browser a few hundred times. 

For tunneling to work, the master server must analyze and modify the HTML sent back by the remote host that you are logging in to. Currently this works well for Webmin servers, but may fail if you are tunneling through to some other web-based application or website that uses HTML not supported by this module. Symptoms of this include links pointing to non-existent pages on the master server, and images that are not loaded properly. 

Clicking on the icon for a server *Login when icon is clicked* mode will initially display a login form for entering a username and password for the remote system. This will appear even if the remote host does not actually run Webmin on the chosen port, but can be used to login to any web server that uses standard HTTP authentication. After you login your username and password will be remembered until you either quit your browser (thus discarding the cookie), or click on the **(logout)** link that appears below server's icon on the module's main page.

### Broadcasting and scanning for servers
If you have a large number of Webmin servers on your network, adding them one by one to this module can be tedious. There is a better way though - the master system can broadcast on your local LAN for other Webmin servers, or send requests to hosts within a specific network to probe for servers. Any found will be automatically added to this module, although only in **Normal link to server** mode. There is no way for the master system to automatically determine a login and password for a remote system as this would be a huge security hole if it were possible! 

To find other Webmin servers, follow these steps : 

- If you only want to search your local LAN, click on the *Broadcast for servers* button at the bottom of the module's main page.  To search some other network, enter its address into the field to the right of the **Scan for servers** button before hitting it. This must be a class C network, entered like **192.168.1.0**. 
- A page listing the URLs of servers found will be displayed.  New ones will have **Found new server** before their URLs, those already on the main page will have **Found known server**, and responses from the master system itself will have *Found this server*. 
- When the process is complete you can return to the main page, which will now contain an extra icon for each of the newly found servers. Then can be edited to switch to *Login via Webmin with username* mode to use them for RPC. 

All versions of Webmin since 0.75 listen on UDP port 10000 for the broadcast and scan packets sent out by this module, and reply with their hostname, port number and SSL mode. A server will not be found if a firewall is blocking this port or if UDP listening has been turned off for security reasons. 

### How RPC works
RPC is a protocol that one Webmin system can use to control another. An RPC request is usually a call to a function in the library of some module, and includes the parameters to that function. However, there are other RPC request types for transferring data to and from a server, checking if a module is available, getting a module's configuration and executing a piece of Perl code. This section explains the technical details of how it works, and can be skipped if you are not a programmer and are not having any trouble with RPC connections. 

When you set up the [System and Server Status](/docs/modules/system-and-server-status) module to fetch some status information from a remote system, an RPC call is made to functions in the same module on that system to determine if a service is up or down. Similarly, when a user is added in the Cluster Users and Groups module, multiple RPC calls are made to add him to the password file, create his home directory and copy files into it. Chapter 56 explains how to make use of RPC in your own modules, and what its limitations are. 

As explained earlier, RPC has two different modes - fast and slow. Slow mode is simplest, as it uses an HTTP request from the master to the slave for each RPC function call, file transfer or request for information. All parameters, data and return values are included in that request and its response, and no other TCP connections are made. The advantage of this mode is that it can work through firewalls and proxies, as long as HTTP requests to port 10000 are allowed. 

Apart from being slow, this mode has one big down-side - HTTP is a stateless protocol, but Webmin RPC calls are not stateless. It is quite possible for one function call to set a global variable that the next function call depends upon. This means that a background process in which state is kept must be started on the remote system for each master that opens an RPC session. But there is no way for a slave system to automatically detect when the master CGI program has finished and thus shut down the background process, because no direct connection between the two exists! 

Webmin's solution is to have the process exit when the master makes a special RPC call, or after 30 seconds of inactivity. If a master CGI program does not invoke the `remote_finished` function the remote process will hang around consuming memory until the timeout elapses. If for some reason more than 30 seconds passed between RPC calls to the same host, the background process will exit and future RPC calls will fail. 

The newer fast RPC protocol solves these problems using only one initial HTTP request to have a background process started on the remote system. The master server then makes a TCP connection to this process (which is listening on a free port), and sends RPC requests through that connection instead. When the master program exits this connection will be automatically torn down, and the remote background process will exit. No special function calls or timeouts are needed. 

Fast RPC mode has much better support for transferring large files to and from remote systems. The slow mode attempts to encode files inside an HTTP request, which can fail if they are two large. The newer mode instead transfers them un-encoded through a separate TCP connection, which is quicker and far more reliable. The Cluster Software Packages and Cluster Webmin Configuration modules may fail when installing a large package in slow mode. 

The only problem with fast mode is that some firewalls may block the TCP connection, which is typically made on a port 1 or 2 above the remote host's base Webmin port, such as 10001 or 10002. Multiple connections may be made if data is transferred with RPC, so any firewall on your network between the two servers must be configured to allow connections from the master to the remote host on ports in the range 10000 up to 10100. 

### Module access control
If you have more than one Webmin user on your system, you may want to make this module available to other people without giving them access to all server icons or the ability to add servers. This is useful if you want others to see only icons for servers not in **Login via Webmin with username** mode, thus turning the module into just an index of other systems on your network. The first step is to assign this module to a user, as explained on [Webmin Users](/docs/modules/webmin-users). You can then restrict him to only being able to see and use the tunnels for certain servers by following these steps: 
- Click on Webmin Servers Index next to the name of the user or group in the [Webmin Users](/docs/modules/webmin-users) module to bring up the access control form. 
- Change the **Can edit module configuration?** field to **No**, so that he cannot change the user interface for other people. 
- In the **Can use servers** field chose **Selected** and select the ones that you want to make visible from the list below. 
- Change the **Can edit servers?** and **Can find servers?** fields to **No**. 
- Hit the **Save** button to activate the new restrictions. 

Hiding a server from a user in this module does not stop him from using it in other modules that make use of RPC. 

### Configuring the Webmin Servers Index module
This module has several settings that control how its user interface appears and how scans for servers are done. You can edit them by clicking on the **Module Config** link on the main page, which will bring up a form containing the following fields:
