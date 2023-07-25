---
title: "Squid Proxy Server"
date: 2023-07-25
weight: 505
---

### About
This article explains what an HTTP or FTP proxy server is, and then explains how Webmin can be used to configure the popular Squid proxy server.

### Introduction to Proxying and Squid
An HTTP proxy server is basically a program that accepts requests  from clients for URLs, fetches them on behalf of the client, and returns the results  to the client. Proxies are used on networks where clients do not  have direct access to the Internet but still need to be able to  view web pages. A proxy is also used for caching commonly requested pages so that  if more than one client wants to view the same page it only has to  be downloaded once.

Many companies and organizations have their firewalls set up  to block all incoming and outgoing traffic by systems on internal  LANs. This may be done for security reasons, or to limit what employees  can access on the Internet. Because being able to view web pages  is extremely useful, a proxy is often set up so that websites can  be accessed through it.

Large organizations and ISPs with many client PCs accessing  the web may also want to run a proxy server to reduce the load on  their networks. Because one of the main tasks of a proxy is caching  pages requested by clients, any page asked for more than once  will be returned from the cache instead of being fetched from  the originating server. For this reason clients systems are  often configured or forced to use a caching proxy to access the  web.

A proxy is only useful if client browsers are configured to use  it instead of connecting to web sites directly. Fortunately,  every web browser in existence, and almost all programs that download  files via HTTP for various purposes, can be configured to use a  proxy. This tells them to make a special proxy HTTP connection  to the proxy server instead, specifying the complete URL to download.

Proxies are not just for HTTP - they can also support FTP and Gopher  protocol requests from clients, which they service by making  a FTP or Gopher connection to the actual requested server. Even  encrypted SSL connections can be handled by a proxy, even though  it cannot decrypt the request. Instead, the proxy simply forwards  all data from the client to the destination server and back again.

Squid is the most popular proxy server for Unix/Linux systems. It is  open source and is freely available for download from [squid-cache.org](http://squid-cache.org), and  is included as a standard package with all Linux distributions  and many other operating systems. Squid supports both proxying,  caching and HTTP acceleration, and has a large number of configuration  options to control the behavior of these features.

Squid reads its configuration from the text file squid.conf,  usually found in or under the /etc directory. This file consists  of a series of directives, one per line, each of which has a name  and value. Each directive sets some option, such as the TCP port  to listen on or a directory to store cached files in. Webmin's  Squid module edits this file directly, ignoring any comments  or directives that it does not understand.

Many versions of Squid have been released over the years, each  of which has supported different configuration directives  or assigned different meanings to the same directives. This  means that a squid.conf file from version 2.0 may not be compatible  with Squid 2.5 - and one from Squid 2.5 certainly will not work  with version 2.0. Fortunately, Webmin knows which directives  each release supports and only allows editing of those that are  known to the running version of Squid.

Cached web pages are stored in files in a multi-level directory  structure for increased filesystem performance. Squid can  be configured to use multiple separate cache directories, so  that you can spread files over different disks to improve performance. Every time a cacheable page is requested it is stored in a file,  so that when a subsequent request for the same page arrives the  file can be read and the data served from it. Because some web pages  change over time (or are even dynamically generated), Squid  keeps track of the last-modified and expiry dates of web pages  so that it can clear data from the cache when it is out of date.

The actual program that handles client requests is a permanently  running server process called squid. It may also start several  other sub-processes for tasks such as DNS lookups or client authentication,  but all the actual HTTP protocol processing is done in the single  master process. Unlike other similar servers such as Apache  or Sendmail, Squid does not start or use sub-processes to handle  client requests.

Squid can be compiled on all the flavors of Unix that Webmin supports,  and works almost identically on all of them. This means that the  Webmin module's user interface is the same across operating  systems as well, with the exception of the default paths that  it uses for the Squid programs and configuration files. 

### The Squid Proxy Server module

If you want to set up or configure Squid from within Webmin, you  will need to use the Squid Proxy Server module, found under the  Servers category. When its icon is clicked on, the page shown  in the screenshot below will appear, assuming that Squid is installed  and configured correctly. As you can see, the main page consists  only of a table of icons, each of which can be clicked on to bring  up a form for editing settings in that category.

[![](/images/docs/screenshots/modules/light/squid-proxy-server.png "Squid Proxy Server Screenshot")](/images/docs/screenshots/modules/light/squid-proxy-server.png)

If you have not configured or started Squid on your system before,  the cache directory has probably not been set up yet. The module  will detect this and display a message like **Your Squid cache directory /var/spool/squid has not been initialized** above  the table of icons. To initialize the cache, follow these steps:

 - If you are unhappy with the displayed cache directory, now is the time to change it. Follow the instructions in the [Adding cache directories](#adding-cache-directories) section to define your own directories before continuing.  
 - In the **as Unix user** field enter the name of the user who will own the cache files and who the daemon process will run as.  Typically this will be a special squid user created for the purpose (and the field will default to squid if such a user exists), but in fact any user will do. I recommend using the Users and Groups module (covered in chapter 4) to create a user called squid whose home directory is the cache directory if needed though.  
 - Click the **Initialize Cache** button. The Squid configuration will be updated to use your chosen username, and the command <tt>squid -z</tt> will be run to setup the cache directories. All output that it produces will be displayed so that you can see how the initialization is progressing.  
 - When the process is complete, return to the module's main page and the error message should have disappeared.

If Squid is not installed at all on your system (or installed in  a different location to the one Webmin expects), an error message  like **The Squid config file /etc/squid.conf does not exist**  will appear on the main page instead of
the table of icons. You can use module config to change the paths the module uses. On the other hand, if it really is not installed you should use the [Software Packages](/docs/modules/software-packages) module to install the `squid` package from your Linux distribution.

If no such package exists for your operating system, you will  need to download, compile and install the latest version of Squid  from [squid-cache.org](http://squid-cache.org). As long as you have a compiler installed  on your system, this is a relatively
simple process with no dependencies.

Once the server is installed, if you want to make use of it in the  long term you should arrange to have it started at boot time, using  the [Bootup and Shutdown](/docs/modules/bootup-and-shutdown) module (which chapter 9 explains how  to use). All Linux packages include a bootup action script for  Squid, although it may be disabled by default thus requiring  you to enable it in that module. Otherwise you will need to create  an action that runs a command like `/usr/local/squid/bin/squid  -sY`, assuming that you have Squid installed in `/usr/local/squid`.

Once Squid has been installed and initialized, you can start  using this module. When Squid running, every page has two links  at the top - **Apply Changes** which forces the current configuration  to be re-read, and **Stop Squid** which shuts down the proxy server.  If the server is not running, those links are replaced with **Start  Squid** instead, which as the name suggests attempts to start  it. If it is not yet running, you will probably want to start it  now.

Because each version of Squid has introduced new configuration  directives, this module's user interface will appear differently  depending on the version of Squid that it detects on your system.  All of the instructions in this chapter are written for Squid  2.4 as it is currently the most widely deployed version. If you  are running an older or newer release, different fields may appear  on the forms or have more or fewer options. For example, each new  version has introduced different ACL types, and authentication  has been handled in three different ways through the history  of the program. However, the basic concepts have always been  the same.

When you are using this module, make sure your browser is configured  not to use the Squid proxy to access your Webmin server. Otherwise  you run the risk of cutting off your own access to the module if  you make a configuration mistake or shut down the server process.  All browsers that can use a proxy have a field for listing hosts  to connect to directly, into which you can enter the hostname  of your Webmin server.

### Changing the proxy ports and addresses

By default, Squid listens for proxy requests on TCP port `3128` on all of your system's IP addresses. Because this is not the usual  port that proxies are run on (`8000` and `8080` seem to be the most common),  you may want to change it. You might also want to edit the listening  address so that only clients on your internal network can connect,  if your system has more than one network interface.

To specify the ports that Squid uses, follow these steps :

 - On the module's main page, click on the **Ports and Networking** icon to bring up the form.
 - In the **Proxy addresses and ports** table, select the *Listed below* option. In the table below, each row defines a listening port and optionally an address to bind to. Any existing ports and addresses will be listed, followed by a single blank row for adding a new one. In the first empty field in the **Port** column, enter a port number like `8000` or `8080`. In the **Hostname/IP address** column, either select **All** to accept connections on any of your system's interfaces, or the second option to enter an IP address in the adjacent text box. Using this table, Squid can be configured to listen on as many ports as you like.  However, because only one blank row appears at a time you will need to save and re-open the form to add more than one new port.
 - ICP is a protocol used by Squid to communicate with other proxies in a cluster. To listen on a port other than the default of `3130` for ICP, fill in the **ICP port** field. This is not generally necessary though, as only other proxies ever use this protocol.  
 - Squid will normally accept ICP connections on any IP address.  To change this, select the second radio button in the **Incoming UDP address** field and enter one of your system's interface IPs into its text field. This can be useful if all of the other proxies that your server might want to communicate with are on a single internal LAN.  
 - Click the **Save** button at the bottom of the page to update the configuration file with your new settings, then click the **Apply Changes** link back on the main page to activate them.

[![](/images/docs/screenshots/modules/light/squid-proxy-server-ports-and-networking.png "Squid Proxy Server - Ports and Networking Screenshot")](/images/docs/screenshots/modules/light/squid-proxy-server-ports-and-networking.png)

### Adding cache directories

In its usual default configuration, Squid uses a single directory  for storing cached pages. At most 100 MB of data will be stored  in this directory, which is not likely to be enough if serving  a large number of active clients. If your system has more than  one hard drive, it makes sense to spread the cache across multiple  disks to improve performance. This can be done by specifying  multiple directories, each with its own maximum size.

On a system that is dedicated to running a proxy server, the maximum  amount to cache in each directory should be about 90% of the available  space. It is unwise to configure or allow Squid to use up all free  disk space, as many filesystems suffer reduced performance  when nearly full. Furthermore, disk space may be used by log files  and user data as well. If Squid fills up your entire hard drive,  problems may occur because other programs are unable to create temporary files or write to logs.

To add a new cache directory and specify the maximum size for the  existing one, follow these steps :

 - Click on the **Cache Options** icon on the module's main page to bring up the form shown in the screenshot below.
 - In the **Cache directories** field, select the **Listed** option.  If **Default** was chosen before, Squid will have been using the single compiled-in default cache directory displayed in brackets. If you want to continue using this directory, it must be explicitly entered into the table. The default size is 100 MB, and it uses 16 _1st_ level and 256 _2nd_ level directories.  Each row in the table specifies a single cache directory.  Any existing directories (apart from the default) will be listed so that you can edit them, followed by a single blank row. Each row has fields under the following columns:
   - **Directory** &mdash; The full path to the top-level cache directory, such as `/var/spool/squid` or `/disk2/cache`. This directory must already exist and be owned by the use that Squid runs as (usually called squid) - the module will not create it for you. 
   - **Type** &mdash; The storage type used in the directory. You should always select **UFS** here. 
   - **Size (MB)** &mdash; The maximum amount of data that it will contain, in megabytes. Once this limit is reached, the oldest un-requested files will be replaced with new ones. 
   - **1st level dirs** &mdash; The number of subdirectories that will be created under the cache directory. The default of 16 is usually fine, but you may want to increase this for very large caches. 
   - **2nd level dirs** &mdash; The number of subdirectories that will be created under each first-level directory. You should just enter 256 unless your cache is going to be very large. 
   - **Options** &mdash; Leave this field blank - it is only used for other directory types.  If you are wondering why Squid needs to create two levels of subdirectories under each cache directory, the reason is the poor performance of many filesystems when a directory contains a large number of files. Because every single cached HTML page or image is stored in a separate file, the number of files on a busy proxy system can be huge. Spreading them across multiple directories solves this problem.
 - After adding a directory, click the **Save** button at the bottom of the page. If you want to add more than one you will need to click on the **Cache Options** icon again to re-display the table with a new empty row.  
 - When you are done defining directories, return to the module's main page. If a new one has been added, an error message like **Your Squid cache directories have not been initialized** will be displayed. Click the **Initialize Cache** button to have Squid create all the sub-directories in any new cache directories.  The server will be shut down during the process, and
re-started when it is complete.  
 - After initialization is complete, click on the **Apply Changes** link on any page to start using your new directories.

### Editing caching and proxy options

Squid has numerous settings that limit the size of cached objects,  the size of client requests and the types of pages to cache. They  can be used to stop the server storing enormous files (such as  downloaded ISO images), to limit the size of files that clients  can upload or download, and to prevent the cache of pages that  change frequently (such as those generated by CGI scripts).  The defaults will generally work fine though, with the possible  exception of the maximum upload size which is only 1 MB.

To edit caching options, follow these steps :

 - Click on the **Cache Options** icon on the main page to display for form show above again.  
 - To set the maximum size  - of uploaded files, select the second option in the **Maximum request body size** field, enter a number into the text box and select some units from the menu. 10 or 100 MB should be more than enough for anyone.  
 - To stop clients downloading large files, fill in the **Maximum reply body size** field in the same way. This can be used by prevent the abuse of your network by clients downloading huge movies or ISO files, but can often be subverted by downloading a large file in pieces.  
 - If you want to set an upper limit on the file that a page can be stored in the cache, fill in the **Maximum cache time** field instead of leaving it set to **Default**. Otherwise data will be cached for up to a year, or until it the expiry date set by the originating server.  
 - As well as caching downloaded files, Squid will remember error messages from servers and return them to clients that request the same page. You can change the amount of time that errors are cached for by entering a number and selecting units in the **Failed request cache time** field. If **Default** is chosen, errors will be cached for 5 minutes. Even this can be annoyingly long if you have just fixed an error on a web site though.  
 - Squid will cache the responses to hostname lookups to reduce the amount of DNS activity, regardless of the TTLs that the DNS servers supply. If **Default** is selected in the **DNS lookup cache time** field, responses will be remembered for 6 hours.  If this seems to long for you, select the second radio button and enter your own cache time instead.  
 - The **Don't cache URLs for ACLs** field can be used to completely prevent caching for certain URLs, web servers or clients.  Any request that matches one of the ACLs checked in this field will never be cached, and thus will always be fetched directly.  You can use this feature to block the caching of dynamically generated pages by creating a **URL Path Regexp** ACL for `.cgi` or `cgi-bin` and selecting it here. See the [Introduction to access control lists](#introduction-to-access-control-lists) section for more details on how ACLs work and can be defined.  
 - Hit the **Save** button at the bottom of the page to return to the main menu. Because some additional caching options are on the memory and disk usage form, click on the **Memory Usage** icon to display it.  
 - To limit the amount of memory that Squid will use, fill in the **Memory usage limit** field. Note that this limit only effects the maximum memory used for storing in-transit and frequently accessed files, and negative responses. Because Squid uses memory for other purposes, it will certainly consume more than whatever you enter here. If **Default** is selected, a limit of 8 MB will be enforced, which is probably too low for a busy server.  
 - To prevent the caching of huge files, fill in the **Maximum cached object size** field. The default is only 4 MB, so if you have plenty of disk space it should definitely be increased.  
 - Hit the **Save** button at the bottom of the form and then the **Apply Changes** link on the main page to activate all of your new settings.

### Introduction to access control lists

ACLs (access control lists) are possibly Squid's most powerful  feature. An ACL is simply a test that is applied to a client request  to see if it matches or not. Then, based on the ACLs that each request  matches you can choose to block it, prevent caching, force it  into a delay pool, or hand it off to another proxy server. Many  different types of ACL exist - for example, one type checks a client's  IP address, another matches the URL being requested, while others check the destination port, web server hostname, authenticated  user and so on.

The most common use of ACLs is blocking connections from clients  outside your network. If you run a proxy server that is connected  to and accessible from the Internet, hosts outside your local  network should not be allowed to use it. Malicious people often  use other proxies to launder connections used for hacking, sending  spam or accessing web sites that they shouldn't be allowed to.

Because the special `CONNECT` proxy request can be used to connect  to any port, an ACL is often used to block its use for any ports other  than 443 (the SSL default). This stops users from using your proxy  to connect to servers other than web servers, such as AIM, ICQ  or MSN. Similarly, an ACL can be set up to block normal HTTP requests  to ports like 22, 23 and 25 which are normally used for SSH, telnet  and SMTP.

Just defining an ACL in the Squid configuration does not actually  do anything - it must be applied in some way to have any effect.  This section explains how to use them to control which requests  to your server are allowed or denied. Other sections explain  how they relate to caching and accessing other servers.

When it receives a request, Squid first determines which ACLs  it matches. It then compares this list of matches against a list of  proxy restrictions, each of which contains one or more ACLs and  an action to perform (either **Allow** or **Deny**). As soon as a restriction  is found that matches the ACLs for the request, its action determines  whether the request is allowed or denied. If no restrictions  match, the opposite of the last action in the list is applied.  For this reason, the final action in most Squid configurations  is **Allow all** or **Deny all**.

ICP requests from other proxies are also checked to see which  ACLs they match, and compared against a similar but different  list of ICP restrictions to see if they will be allowed or not.  See the [Connecting to other proxies](#connecting-to-other-proxies) section later for a more  complex explanation of what ICP is and when it is used.

The typical default Squid configuration includes several ACLs  and proxy restrictions. For security reasons, all requests  from anywhere are denied by default. This means that you will  need to change the restrictions list before anyone can use your  proxy. Read on to find out how.

To view the lists of defined ACLs, proxy restrictions and ICP  restrictions, click on the **Access Control** icon on the module's  main page. As the image below shows, a table of ACLs showing their  names, types, and matches is displayed on the left. To the right  are tables of proxy and ICP restrictions showing their actions  and the ACLs that they match. The restriction tables have up and  down arrows next to each entry to move them in the list, because  their order matters.

Before clients can use your proxy you will need to configure it  to allow access from some addresses. The steps to do this are:

 - On the access control page, select **Client Address** from the menu below the list of existing ACLs. When you click the **Create new ACL** button, a form for entering matching addresses will appear.  
 - In the **ACL name** field enter a short name such as `yournetwork`.  
 - In the empty field under **From IP** enter the starting IP address in the range to allow, such as `192.168.1.1`.
 - If the field under **To IP** enter the ending address in the range, such as `192.168.1.100`. Only clients that fall within this range will match the ACL. Do NOT enter anything in the **Netmask** field. 
 - Alternately, you can specify an IP network by entering the network address in the **From IP** field, and the netmask (like `255.255.255.0`) into the **Netmask** field. To enter more than one, you will need to save and re-edit this ACL so that new blank fields appear.  
 - Click the **Save** button to add the ACL and return to the access control page on which your new ACL will be listed.  
 - Click on **Add proxy restriction** below the **Proxy restrictions** table.  
 - On the form that appears, select **Allow** from the **Action** field.  
 - In the **Match ACLs** list, select your new `yournetwork` ACL.  
 - Click the **Save** button on this form to go back to the access control page again. The new restriction will be displayed at the bottom of the table, most likely below the **Deny all** entry.  
 - Click the up arrow next to your new restriction to move it above **Deny all**. This tells Squid to allow connections from your network, and deny everyone else.  
 - Finally, click the **Apply Changes** link at the top of the page.  The proxy will now be usable by clients on your internal network, but no one else!

These instructions assume that you are starting with the default  Squid configuration. If the proxy has already been configured  to allow access from anywhere (by changing the **Deny all** restriction  to **Allow all**), you should change it back again to block clients  from outside your network. To learn more about the types of ACL  available and how to use them, read the next two sections.

### Creating and editing ACLs

Before you can block or allow requests from some address, to some  server or for some page you will need to create an appropriate  ACL. The basic steps to do this are :

 - Select the type of ACL to create from the drop-down menu below the **Access control lists** table and click the* Create new ACL* button.  
 - On the form that appears, enter a name for your new ACL in the **ACL name** field. If more than one has the same name, it will be treated as matched if any ACL with that name matches. The name should consist of only letters and numbers, with no spaces or special characters. 
 - Fill in the rest of the form as explained in the table below.  
 - In the **Failure URL** field, enter a complete URL that clients who are denied by this ACL will be redirected to. This allows you to define custom error pages to be displayed instead of the default Squid responses.
 - Click the **Save** button at the bottom of the form. 

Once an ACL has been created you can edit it by clicking on its name  in the list, changing the fields and clicking **Save**. Or your can  delete it (if it is not in use by some proxy or ICP restriction)  with the **Delete** button. As usual, the **Apply Changes** link  must be used to activate any changes that you make.

Squid has an amazing number of ACL types, although not all are  available in all versions of the server. The table below lists  those that you can create for Squid 2.4, and explains what they  do and what the fields on the creation form for an ACL of each type  mean :

Many types of ACL are inappropriate for certain situations.  For example, if a client sends a CONNECT request the URL path is  unavailable, and thus a **URL Path Regexp** ACL will not work. In  cases like this the ACL is automatically assumed not to match.

### Creating and editing proxy restrictions

Once you have created some ACLs, they can be put into use by creating,  editing and moving around proxy restrictions. Squid will compare  every request to all defined restrictions in order, stopping  when it finds one that matches. The action set for that restriction  then determines if the request is allowed or denied. This processing  system combined with the power of ACLs allows you to set up some  incredibly complex access control rules - for example, you could  deny all access to sites with `quake` in the URL between 9 AM and  5 PM Monday to Friday, except for certain client addresses.

To create a proxy restriction, follow these steps :

 - Click on the **Access Control** icon on the module's main page to bring up the page shown in the screenshot above.
 - Click on **Add proxy restriction** below the list of existing restrictions to go to the creation form.  
 - From the **Action** field select either **Allow** or **Deny** depending on whether you want matching requests to be processed or not.
 - The **Match ACLs** list can be used to select several ACLs that if all are matched will trigger the action. Similarly, the **Don't match ACLs** field can be used to select ACLs that must not match for the action to be triggered. It is perfectly valid to make selections from both lists to indicate that the action should be triggered only if all ACLs on the left match and if those on the right do not. In its default configuration Squid has an ACL called **all** that matches all requests. It can be useful for creating restrictions that allow or deny everyone, one of which usually exists by default.  
 - Click the **Save** button to create the new restriction and return to the access control page.  
 - Use the arrows next to it in the **Proxy restrictions** table to move it to the correct location. If your list ends with a **Deny all** entry, you will need to move it off the bottom for it to have any effect. If the list has an entry that allows all clients from your network and you have just added a restriction to deny access to some sites, you will need to move it above that **Allow** entry as well for it to be used.
 - When you are done creating and positioning restrictions, hit the **Apply Changes** link at the top of the
page to make them active.

After a proxy restriction has been created you can edit it by clicking  on the link in the **Action** column for its row in the table. This  will bring up an editing form identical to the one used for creating  the restriction, but with **Save** and **Delete** buttons at the  bottom. The former will save any changes that you make to the action  or matching ACLs, while the latter will remove the restriction  altogether. Again, the **Apply Changes** link must be used after  updating or deleting a restriction to make the change active.  If for some reason you delete all the proxy restrictions, Squid  will allow all requests from all clients, which is probably not  a good idea.

Also on the access control page is a table for editing and creating  restrictions that apply to ICP requests. As the [Connecting to other proxies](#connecting-to-other-proxies) section explains, ICP is a protocol used by  Squid proxies in a cluster or hierarchy to determine what URLs  other servers have cached. You can add to and edit entries in the  **ICP restrictions** table in exactly the same way as you would  for proxy restrictions. If you really are running a cluster of  proxies, it may make sense to block ICP requests from sources  other than your own network. If not, the default setup that allows  all ICP packets is fine.

### Setting up proxy authentication

Even though it is possible to configure Squid to allow access  only from certain IP addresses, you may want to force clients  to authenticate themselves to the proxy as well. This might make  sense if you want to give only certain people access to the web,  and cannot use IP address validation due to the use of dynamically  assigned addresses on your network. It is also handy for keeping  track of who has requested what through the proxy, as usernames  are recorded in the Squid logs.

All browsers and programs that can make use of a proxy also support  proxy authentication. Browsers will pop up a login window for  entering a username and password to be sent to the proxy the first  time it requests them, and automatically send the same information  for all subsequent requests. Other programs (such as `wget` or `rpm`) require the username and password to be specified on the  command line.

Each login and password received by Squid is passed to an external  authentication program which either approves or denies it.  Typically this program checks against a separate users file,  but it is possible to write your own programs that use all sorts  of methods of validating users - for example, they might be looked  up in a database, or an LDAP server, or the Unix user list. Webmin  comes with a simple program that reads users from a text file in  the same format as is used by Apache, and this module allows you  to edit users in such a file.

The steps to turn on authentication for your Squid proxy are:

 - On the module's main page, click on the **Access Control** icon
 - Select **External Auth** from the menu below the ACL table and hit the **Create new ACL** button. 
 - In the form that appears, enter `auth` for the **ACL name** and select **All users** in the **External auth users** field. Then, hit the Save button.
 - Click on **Add proxy restriction** below proxy restrictions table. 
 - Select **Deny** in the **Action** field and choose your new **auth** ACL from the **Don’t match ACLs** list. This will block any proxy requests that are not authenticated, thus forcing clients to log in.
Selecting **Allow** and then choosing **auth** from the **Match ACLs** field can be used for a slightly different purpose. This creates a proxy restriction that allows access to all authenticated clients, which can be positioned to force clients outside your network to log in while not requiring it for those inside the network. 
 - Click the **Save** button to return to the access control page again. 
 - Use the up arrow next to the new restriction to move it above any entry in the table that allows all access from your own network. If it is below this entry, clients from the network will be able to use the proxy without needing to log in at all. Of course, this may be what you want in some cases. 
 - Click on the **Authentication Programs** icon back on the main page. 
 - From the **Authentication program** field, select **Webmin default**. This tells the module to use the simple text-file authenticator that comes with the module so that you don’t have to write your own. Of course, you can specify your own custom program by selecting the last radio button and entering the full path to a script with some parameters in the adjacent text box. This program must continually read lines containing a username and password (separated by a space) as input, and for each output either the line `OK` or `ERR` for success or failure, respectively. Squid will run several instances of the program as permanent daemon processes when it is started. 
 - The login window that appears in browsers includes a description of the proxy server that the user is logging into. By default, this is `Squid proxy-caching web server`, but you can enter your own (such as ***Example Corporation Proxy***) by filling in the **Proxy authentication realm** field.
 - Normally, Squid will cache valid logins for one hour to avoid calling on the authentication program for every single request. This means that password changes may take up to an hour to take effect, which can be confusing. To lower this limit, at the cost of increased system load and slightly slower request processing, edit the **Time to cache passwords for** field. 
 - Hit the Save button and then click on **Apply Changes** on the main page.

Now that authentication is enabled, any attempts to use your proxy from a web browser will cause a login window to appear. Because no valid users have been defined yet, no logins will be accepted, which is not particularly useful! To create some users for authentication, follow these steps: 

 - Click on the **Proxy Authentication** icon on the module’s main page to bring up a table listing proxy users. At first, this will be empty. 
 - Click on the **Add a new proxy user** link above or below the table to display the user creation form.
 - Enter a login name into the **Username** field and a password for the user in the **Password** field. 
 - To temporarily disable this user without deleting him, change the **Enabled?** field to **No**. 
 - Hit the Create button to add the user and then click the **Apply Changes** link. This last step is necessary after creating a user for the changes to take effect, as Webmin’s Squid authentication program only reads the user file when first started. 

A user can be edited by clicking on its name in the proxy users list, changing the username, password, or enabled status, and hitting the **Save** button. You can also completely remove a user with the **Delete** button on its editing form. Again, **Apply Changes** must be clicked to make any
modifications or deletions active. Squid will also cache valid passwords (as explained above) to reduce the load on the
authentication program, so a password change may take some time to take effect. 

The module’s user management feature will only work if you choose **Webmin default** in the **Authentication program** field or if your own custom program takes the full path to an Apache-style users file as a parameter. If your program validates users against some other database or server, or if the module cannot figure out which file contains users from the command, the **Proxy Authentication** icon will not appear. Sometimes you may want to allow normal UNIX users to log in to your program with the same passwords that they use for telnet and FTP. Even though it is possible to write a program that does proxy authentication against the UNIX user database, there is another solution—configuring the module to add, delete, and update proxy users whenever a UNIX user is created, removed, or renamed. This is most useful for keeping usernames and passwords in sync without needing to grant access to every single UNIX user. Once you have normal authentication set up as explained above, synchronization can be turned on by following these steps:

 - On the module’s main page, click on the **Module Config** link in the top-left corner. 
 - As their names suggest, the **Create proxy users when creating system users, Update proxy users when updating system users, and Delete proxy users when deleting system users** fields control the automatic creation, modification, and deletion of proxy users when the same thing happens to a UNIX user. For each one, you can either select **Yes** or **No**. You should probably turn on synchronization for updates and deletions, but leave it off for creations so that you can explicitly control who gets access to the proxy. 
 - Hit the **Save** button at the bottom of the form to activate the new settings. From now on, actions performed in Webmin’s Users and Groups module will also affect the Squid user list in the ways you have chosen. Adding a user at the command line with useradd or changing a password with the passwd command, however, will not.

### Configuring Logging

Squid writes to three separate log files—one for recording client access requests, one for cache events, and one for debugging information.  Logging is enabled by default to paths compiled into Squid, and thus is dependant upon your operating system—but you can change the destinations
for log files and some details of the access log format.

To configure how and where logs are written, follow these instructions:

1. Click on the **Logging icon** on the module’s main page, which predictably takes you to the logging form.
2. To change the location of the client access log file, edit the contents of the **Access log** file field. If **Default** is selected, the path compiled into Squid will be used (which may be `/usr/local/squid/log/access.log` or `/var/log/squid/access.log`).
3. To change the location of the cache storage log, edit the **Storage log file** field. The default is always the `store.log` located in the same directory as the `access.log` file.
4. To change the path to which the debug log is written, edit the **Debug log file** field. Again, the default is `cache.log` located in the same directory as `access.log`.
5. Squid normally uses its own custom format for the access log. To force the use of the format used by Apache instead, change the **Use HTTPD log format?** field to Yes. This format may be necessary for processing by some applications, but it does not record all of the information that the default does.
6. To have Squid write resolved client hostnames to the access log instead of just IP addresses, select **Yes** in the **Log full hostnames?** field. This avoids the need to resolve them later when generating reports, but will slow down the server due to the time that reverse DNS lookups can take.
7. The `ident` or RFC931 protocol can be used to find the name of the UNIX user who is making a connection to your proxy from some remote host. Unfortunately, it is often disabled and not supported on other operating systems, so is of limited use. You can, however, configure Squid to include RFC931 user information in its access log file by selecting some of the ACLs in the **Perform RFC931 ident lookups for ACLs** field. You
should ideally create a special Client Address ACL that matches only UNIX hosts with the ident daemon on your network and select only it. If you do enable remote user lookups, the **RFC931 ident timeout** field can be used to set a maximum amount of time that Squid will wait for a response from a client. If **Default** is selected, the server will wait 10 seconds (at most) for a response before giving up (but will still allow the request).
8. Click the **Save** button at the bottom of the page to record the changes made on this form and then click the **Apply Changes** link to activate them.

Many Linux packages of Squid include a configuration file for the `logrotate` program to have the log files rotated, compressed, and eventually deleted when they become too old. If you change the paths to the log files using the instructions above, rotation will no longer be done and the logs will consume an unlimited amount of disk space. On a busy system, this could lead to a shortage of space on the logging filesystem that would be avoided if rotation were in effect.

### Connecting to Other Proxies

Instead of retrieving requested web pages directly, Squid can be configured to connect to another proxy server instead and forward some or all requests to it. This feature is useful if your organization has one proxy for each department and a master cache for the entire network, and you want to have all department proxies query the master for requests that they cannot serve from their own caches. It may also be necessary if your ISP runs a proxy server and you want to set up Squid for your home network as well, yet still make use of the ISP’s cache.

By making use of ACLs to categorize requests, you can set up Squid to forward only some
requests to another proxy while handling the rest normally. For example, your proxy could
always handle requests for web pages on your local LAN, but still forward everything else to a
master proxy cache system.

To set up your server to make use of another proxy for requests except those to a certain network or domain, follow these steps:

1. On the module’s main page, click on the **Access Control** icon.
2. Create a **Web Server Hostname** or **Web Server Address** ACL that matches the web servers that your proxy should fetch directly. Call the ACL **direct**, for example.
3. Go back to the main page and click on the **Other Caches** icon to bring up a page containing a list of other known proxy servers (if any) and a form for setting options that control when they are used.
4. Click on **Add another cache** to go to the cache host creation form.
5. In the **Hostname** field, enter the fully qualified hostname of the master cache server, such as _bigproxy.example.com_. Do not just enter _bigproxy_, as Squid sometimes has trouble resolving non-canonical DNS names.
6. From the **Type** menu, select **parent**, which tells Squid that this other proxy is at a higher level (and thus has more cached pages) than yours.
7. In the **Proxy port** field, enter a port number that the other proxy is listening on, such as _8080_.
8. In the **ICP port** field, enter the port that the proxy uses for ICP requests, which will typically be _3130_. If you don’t know or the master proxy does not support ICP, enter _3130_ anyway.
9. Hit the **Save** button at the bottom of the page to return to the list of other caches.
10. In the form at the bottom of that page is a section entitled **ACLs to fetch directly**, which is actually an ACL table. Use the **Add ACLs to fetch directly** link to first add an entry to allow your **direct** ACL, and then add one to deny the all ACL. This tells Squid to directly fetch pages from local web servers, but pass all other requests on to the chosen proxy.
11. Finally, click on **Apply Changes** at the top of the page to have Squid start using the other
proxy server.

If you just want to have your proxy forward all requests to another proxy server, regardless of their destination, _Step 10_ in the previous instructions can be skipped completely. This works because Squid will use the other configured proxy by default if no ACLs have been set up to force direct fetching for certain requests.

On a large network with many clients, one single system running Squid may not be able to keep up with the volume of client requests. For example, a big company with hundreds of employees all running web browsers, or an ISP that has set up a proxy for customers, could put an enormous load on a single Squid server. One solution would be to upgrade to a more powerful machine. Another would be to install Squid on multiple systems and spread the proxying load between them.

This is typically done by creating one DNS address record for each proxy system, all with the same name (such as _proxy.example.com_) but with different IP addresses. Then, when a client looks up the IP address for _proxy.example.com_, it will get back all the addresses and pick one effectively at random to which to connect. Another alternative is to install a layer four switch that can redirect traffic to the same IP address to different destinations, such as multiple proxy servers. This is more expensive (layer four switches don’t come cheap), but more reliable because a server that is down can be detected and not used. If you are unfamiliar with the term, a layer four switch is one that can reroute network traffic depending on its protocol, port, and destination. In the case of HTTP requests, it can transparently redirect them to another server while leaving other types of data to be routed normally.

There is one problem with using multiple servers, however—each maintains its own cache, so if two different clients request the same web page from two different proxies it will be downloaded twice! This negates most of the benefit of running a caching proxy server.

Fortunately, Squid has features that solve this problem. It can be configured to contact other caches in the same cluster for each request, and ask them if they already have the page cached. If so, it is retrieved from the other proxy instead of from the originating web server. Because all the proxies in an organization are typically connected via a fast network, this is far more efficient. The protocol used for this inter-cache communication is called ICP and is only used by Squid.

On the module’s main page, click on the **Other Caches** icon.To set up two or more proxies to talk to each other with ICP, follow these steps on each system:

1. Click on **Add another cache** to bring up the cache host creation form.
2. In the **Hostname** field enter the full hostname of one of the other caches.
3. From the **Type** menu, select **sibling**, indicating that the other cache is at the same level as this one.
4. In the **Proxy port** field, enter the HTTP port on which the other proxy listens.
5. In the **ICP port** field, enter the port number that the other proxy uses for ICP (usually _3130_).
6. Hit the **Save** button to add the other proxy and return to the other caches list.
7. Repeat Steps 2 through 7 for each of the other hosts in the cluster.
8. Finally, click on **Apply Changes** at the top of the page.

The end result should be that each proxy in the cluster has entries for all the other proxies, so that it knows to contact them for requests not in its own cache. You can, however, set up ACLs to avoid the use of ICP and force the direct fetching of certain requests, just as you can when forwarding requests to a master cache.

### Clearing the Cache

Sometimes it may be necessary to remove all of the files in your Squid cache, perhaps to free up disk space or force the reloading of pages from their originating web servers.

This can be done easily using Webmin by following these steps:

1. On the module’s main page, click on the **Clear and Rebuild Cache** icon. A confirmation page asking if you are really sure will be displayed in your browser.
2. To continue, hit the **Clear and Rebuild Cache** button. Because the server will be stopped during the clearing process, it should not be done when the proxy is in use.
3. A page showing Webmin’s progress will be displayed as it shuts down Squid, deletes all cached files, reinitializes the directories, and finally restarts Squid. This may take quite some time if you have a large cache or are using a filesystem that is slow to delete files (such as UFS on Solaris).

### Setting Up a Transparent Proxy

A transparent proxy is one that clients connect to without being aware of it, due to the use of firewall rules that redirect connections on port 80 to the proxy system. The advantage of this setup is that you do not have to manually configure all web clients to use the proxy. Instead, they will be connected to it without their knowledge. It also means that users cannot get around the cache and thus avoid its access control rules by not configuring it in their browsers.

Transparent proxying has some down sides to it, however. It is not possible to automatically capture FTP or HTTPS connections, or those to web sites on ports other than 80. It is also incompatible with proxy authentication, as clients cannot tell the difference between the proxy’s request to log in and that of a website. Even though authentication may appear to work, it really does not.

Most networks have a router that connects an internal LAN to the Internet. For transparent proxying to work, this router must be configured to redirect outgoing packets on port 80 to the Squid proxy host and port instead. On a small network, the proxy can even be run on the same router host. The IPtables firewall that comes with Linux can perform both kinds of redirection using special DNAT (Destination Network Address Translation) rules in the `nat` table.

Because most of the work is actually done by the firewall rules that redirect outgoing packets.

### Module Access Control

It can be very useful to give someone the rights to configure Squid without letting them harm or change anything else on the system. This can be done in Webmin by creating a Webmin user with access to the module and then restricting what he can do with it. This section here covers restricting access to the Squid module in particular.

Some care is needed when restricting a user like this, however, as some features of the module could be used to modify files or execute commands with `root` privileges. For example, it is not a good idea to let an untrusted user change the cache directories, as setting `/` or `/etc` as a cache could damage files on the system. Features like ACL and proxy user editing are quite safe, though, and are probably the most useful to allow a subadministrator to use.

To create a user who can only configure Squid, follow these steps:

1. In the [Webmin Users](/docs/modules/webmin-users) module, create a user or group with access to this module.
2. Click on **Squid Proxy Server** next to the user’s name in the list on the main page to bring up the access control form.
3. Change the **Can edit module configuration?** field to **No** so the user cannot edit the paths to commands or the Squid configuration file.
4. In the **Allowed configuration pages** list, select those module icons that should be visible to the user. **Logging**, **Cache Options**, and **Helper Programs** should not be chosen, as those pages contain potentially dangerous options.
5. Because Squid can read ACLs values from separate files and this module allows users to edit the contents of these ACL files, you should restrict the directory in which they can be created. To do this, enter a directory belonging only to the Webmin user in the **Root directory for ACL files** field, such as `/home/joe`. Leaving it set to `/` is a bad idea, as this may allow the user to edit any file on your system as `root`.
6. To prevent the user from shutting down Squid, change the **Can start and stop Squid?** field to **No**. A user will still be able to apply changes, however, and reconfigure the server so it is unusable.
7. Hit the **Save** button to activate the restrictions.

### Module Configuration

Like most modules, this one has several settings that you can edit to configure the user interface and the paths that it uses for Squid programs and configuration files. They can all be accessed by clicking on the **Module Config** link on the main page. The user interface fields are listed under **Configurable options** on the form that appears, while those related to program paths are under **System configuration**.

Because the module’s default paths match those used by the Squid package for your Linux distribution or operating system (if there is one), fields in the second group do not generally need to be edited. If you are not using the supplied Squid package because you have compiled and installed the program from the source code, however, these paths will need to be changed.
