---
title: "Apache Webserver"
subSection: "Servers"
date: 2023-04-01
weight: 355
---

### About
This page explains how to use Webmin to configure the **Apache Webserver**. It covers virtual hosts, IP access control, password restrictions and much more. 

### Introduction to Apache
Apache is the Internet's most popular HTTP server, due to its zero cost, wide availability and large feature set. All Linux distributions include it as a standard package, and it can be installed on or compiled for every other Unix variant supported by Webmin. However, it has a very large number of option directives defined in a text configuration file, and so can be hard for an inexperienced administrator to set up. 

Over the years since it was first introduced, many versions of Apache have been released, where each version has included more features and options. The basic webserving functionality and configuration file layout has remained essentially the same throughout, even though the internal implementation has changed significantly. 

Apache has a modular design, in which each module is responsible for some part of its overall feature set. There are several standard modules that are included with almost every install of Apache, and many more that are optional or have to be downloaded separately. Modules can be compiled into the webserver executable, or dynamically loaded from shared libraries at run time. This modular architecture can be used to save memory by avoiding the need to load modules that do not provide any useful functionality for a particular system. 

Apache takes its configuration from multiple text files, each of which contains a series of directives, usually one per line. Each directive has a name and one or more values, and sets an option such as the path to a log file or the MIME type for some file. The directives that Apache recognizes are dependant on the modules in use. Most modules add support for several directives to configure the functions they provide. 

Often, you will want to host more that one website on a single server. Apache can be configured to use a different configuration depending on the web site that was requested by a browser. Each one of these sites is called a virtual host, and is defined in the configuration file with a special `<Virtualhost>` section. All directives inside this virtual host section apply only to requests that match its IP address or hostname. 

Similarly, `<Directory>` and `<Files>` sections can be defined in the configuration file to contain directives that apply to only a certain directory or to files matching some pattern. These are often used to deny access to certain files on your system, to password protect them, or to control the way that they are displayed to clients. 

Another method of creating directives that apply to only to a single directory is to put them in a special configuration file named `.htaccess` that resides in the directory itself. Often these files will be created by regular users, so that they can configure their own websites without needing full access to the master configuration file. This is very useful on a system that hosts multiple sites that are each owned by a different Unix user, rather than on a system with only one website that is set up by the server's owner. 

### The Apache Webserver module 
This is one of the most complex and powerful Webmin modules, as it allows you to configure almost every feature of Apache. It can determine the version of Apache that is installed on your system and the modules that it uses, and adjusts its user interface accordingly so that you can edit only those directives that the webserver understands. However, the interface is generally the same for all versions of Apache. 

Because there are so many directives and the module attempts to allow configuration of all of them, it groups directives into categories like Processes and Limits, Networking and Addresses and CGI Programs. These categories are represented by icons that will appear when you open a virtual server, directory or options file in the module. In all cases, you can view and edit the settings under each category by clicking on its icon. 

Apache has a large number of standard modules, and an even larger number of separate modules that were developed by other people. Webmin does not support the editing of directives in most of these non-standard, such as `mod_perl` and `mod_php`. However, it will safely ignore any configuration file directive that it does not understand, so that any settings for unsupported modules that you make manually will not be harmed. 

When you open the Apache module, the tabbed page shown below will be displayed.

[![](/images/docs/screenshots/modules/light/apache-webserver.png "Apache Webserver Screenshot")](/images/docs/screenshots/modules/light/apache-webserver.png)

In the first tab are icons for the various categories of global options, as well as a few extra features. In the second is a list of all current virtual servers, and in the third is a form for adding a new virtual host. If you have a very large number of virtual servers on your system (more than 100 by default) a search form for finding servers will be displayed instead. The first server will always be the special **Default Server**, which contains directives that apply to all other virtual servers and handles requests that other servers do not. 

Naturally, the Apache module will not work if you do not have Apache installed on your system. If this is the case, the main page will display an error message instead of the module configuration form or list of virtual servers. All Linux distributions include a package, so install it from there using the [Software Packages](/docs/modules/software-packages) module before continuing.

Because the module assumes that the Apache executable and configuration files will be in the locations used by your distribution's package, it will report the same error about the software not being installed 
if you have compiled and installed it manually. If this is the case, click on the **Module Config** link and adjust the paths to the correct locations for your system.

On versions of Unix that do not include Apache by default, Webmin assumes that it will be installed from the standard source distribution from www.apache.org. If you have installed the webserver from an optional package that has been made available for your OS, then the main page will complain that it is not installed and you will need to adjust the module configuration. 

The module's user interface is quite complex and has a large number of pages, forms and sub-pages due to the complexity and power of the Apache configuration files. However, there are elements of the interface that are repeated on many pages throughout the module, such as: 
- **Category icons** When you click on the icon for a virtual server, directory or options file, a table of icons with names like MIME Types and CGI Programs is displayed at the top of the page. Under each of these icons are fields and tables for configuring options related to the label of the icon they are under. This commonly used layout breaks down the vast number of editable Apache options into categories, as there are far too many fields to display on a single page. The exact icons that appear and the fields under them differ depending on the part of the webserver configuration you are editing, and the version of Apache that is installed. However, their basic layout is always the same.
- **Tables fields** On many forms, some fields use tables for entering multiple values such as MIME types and their associated file extensions. There is no limit on how many rows each table can have, but Webmin will only display a single empty row in each table at any one time. This keeps down the size of forms that have lots of tables, but means that you can only add one new row to a table at a time. To add more than one, you will need to save the form and then re-enter it again, which will cause a new blank row to be displayed below the one you just filled in. 

The sections below explain in more detail exactly which icons to click and which tables to fill in when doing things like enabling CGI scripts and setting MIME types.

### Starting and stopping Apache 
Before browsers can connect to the Apache webserver on your system, its server process must be started. You can check if it is currently running by looking at the top of any of the pages in the module. If links labelled **Apply Changes** and **Stop Apache** appear, then it is currently active. However, if only the link *Start Apache* appears them it is not yet running. 

To start it, click the **Start Apache** link. If all goes well, the page that you are currently on will be re-displayed and the links at the top should change to indicate that it is now running. Otherwise, an error message will appear explaining what went wrong - most likely the cause will be an error in the configuration file. 

To stop the webserver once it is running, click the **Stop Apache** link on any of the module's page. In the unlikely event that Webmin is unable to stop the server, an error message page will be shown. If it is stopped successfully, the same page will re-displayed with the links at the top changed to show that it is no longer running. 

When Apache is active, every page will have an **Apply Changes** link at the top that can be used to signal the webserver to re-load its current configuration. After you make any changes in this module (except those in `.htaccess` files), this link must be clicked to make them active. Unlike other Webmin modules that have an Apply button on the main page, this one has it on every page so that 
you do not have to return to the index every time you make a change. 

### Editing pages on your webserver 
This section explains how to find and edit the files on your system that are displayed when a client connects to your Apache webserver. If you already know how to do this, feel free to skip it and move on to the next section. 

When Apache is first installed from a package or from source, its initial configuration will typically not have any virtual servers set up. Instead just the default server will exist, serving pages to any client that connects on port 80. You can view the default pages by running a web browser and going to the URL _http://yourhostname/_, or _http://localhost/_ if you are running the browser on the 
same system that Webmin is on. The page that appears will probably just be one supplied with Apache or your Linux distribution. 

The document root directory that Apache serves files out of will be shown on the module's main page next to the **Default Server** icon. On Redhat Linux for example, this directory is `/var/www/html` by default. The files in this directory can be edited by logging in as _root_, or by using Webmin's [File Manager](/docs/modules/file-manager) module. Any changes that you make will be immediately reflected on the website. 

If your system is just going to host a single static website, it may not be necessary to configure any other aspects of Apache. You can just upload or copy HTML, image and other files to the directory and its subdirectories to create the site that you want. The most important file is index.html, which is served by Apache whenever a browser does not request a specific page. Because most people 
will go to _http://yourserver/_ first, `the index.html` page will be the first one that they see. 

To make editing easier, you may want to change the ownership of the document root directory and all its files to a non-root user. However, you must make sure that they are still readable by the user that the Apache server process runs as, which is typically named httpd. The easiest way to do this is to make all files and directories world-readable and world-executable. 

### Creating a new virtual host 
If you want to host multiple websites on your system, then you will need to create an Apache virtual host for each one. Before you can add a site, its address must first be registered in the DNS, either on a DNS server on your system or on another host. If the site's files are to be owned by a different Unix user to the one who owns the document root directory, then he must be created first as well. 

The entire process for adding a virtual server, including the above steps, is: 
 1. Decide on a hostname that will be used in the URL for the new website, such as _www.example.com_. 
 2. Decide if your new site is going to be IP-based, or name-based. A name-based site will work fine with all except for old browsers, and so is by far the best choice these days. An IP-based site will work with any browser, but needs its own separate IP address to be added to your system. Because IP addresses are often scarce, this only makes sense if you need to set up a virtual FTP or POP3 server for the domain as well. 
 3. If your site is going to be IP-based, use the [Network Configuration](/docs/modules/network-configuration) module to add a new virtual IP address to the external network interface on your system. Make sure that it will be activated at boot time and is active now. If your system has only a single static internet IP address assigned by your ISP, then any extra virtual IP addresses that you add to it will not work. In that case, you will have to use a name-based virtual server instead, or request that your ISP assign you multiple addresses. 
 4. If the _example.com_ domain already exists on a DNS server, add a record for _www.example.com_ with the external IP address  of your system (for a name-based site) or the address chosen in the previous step (for an IP-based site). If the domain does not yet exist, you will need to add it to a DNS server and register it with a DNS registrar like Network Solutions. Either way, the [BIND DNS Server](/docs/modules/bind-dns-server) page explains how to add records and domains in detail. 
 5. If the site is going to use the standard HTTP port 80 (which is almost always what you want), then you can skip to step 8. Otherwise, on the Apache Webserver module's main page click on the **Networking and Addresses** icon to bring up the form shown in the first screenshot below.
 6. In the empty row in the **Listen on addresses and ports** table, select **All** under the **Address** column and de-select **Default** under the **Port** column. Then enter the TCP port number for your website into the field next to it, and click the **Save** button at the bottom of the page. 
 7. On the module's main page, scroll down to the *Create a New Virtual Server* form below the list of existing virtual hosts. 
 8. If you are setting up an IP-based virtual server, in the **Address** field you should enter the virtual IP address that was added in step 3. If setting up a name-based virtual server, enter the external IP address of your system into the field instead. If your Apache server has been configured to accept name-based connections on any IP address, you can select the **Any** option for this field instead. See the explanation below for more details. If your new virtual server is going to use a port other than 80 and will be the only server on that port, you can select the **Any** option as well so that it handles all requests that come in on the port. 
 9. If you are setting up an IP-based virtual server, de-select the **Add name virtual server address** checkbox. For name-based servers, it should be left enabled. 
 10. If the new virtual host is going to use a non-standard port, select the last option for the **Port** field and enter the number into the field next to it. 
 11. In the **Document Root** field, enter the full path to the directory that will contain files for this website. For example, this might be _/home/example/www_. 
 12. In the **Server Name** field, enter the hostnames that clients will use to refer to this website such as _www.example.com_. You can enter more than one name, such as _web.example.com_ and _example.com_ if this is going to be a name-based server that should be accessible at several different URLs. 
 13. Unless you have a separate file on your system that contains all virtual hosts, leave the **Add virtual server to file** field set to **Standard httpd.conf file**. Otherwise you can choose **Selected file** and enter the path into the field next to it. Make sure that the chosen file is actually used by Apache (such as by an Include directive in httpd.conf) or the virtual server will be useless and will not appear in Webmin. If you always use the same separate file for storing virtual hosts, the **File to add virtual servers to** field explained in the **Configuring the Apache Webserver module** section below may be useful. If it is set, another option is add to the *Add virtual server to file* field for adding to the file set by this module configuration option. 
 14. To have Webmin copy all of the directives from another virtual server to the one that you are creating, select it from the **Copy directives from** menu. This can be useful if all of your virtual hosts have a similar configuration. 
 15. When you are done filling in the form, click the **Create** button. The new virtual server will be added to the Apache configuration file and to the list of servers on the main page. 
 16. Click on the icon for the new virtual server, which will take you to its options page, shown in the second screenshot below. 
 17. Scroll down to the form under **Per-Directory Options**, and enter the document root directory that you chose in step 11 into the **Path** field. Make sure the **Type** is set to **Directory**, and the **Regexp?** field to **Exact match**. 
 18. Click the **Create** button to add a new section to the configuration file for the directory. This is necessary so that you can grant clients the rights to browse files that it contains, which the default Apache directory configuration denies. 
 19. Click on the new icon for the directory that has been added to the virtual server options page. This will take you to the directory options page, shown in the third screenshot below. 
 20. Click on the **Document Options** icon, and on the form that appears change the **Directory options** field to *Selected below*. Under the **Set for directory** column, change the entry for **Generate directory indexes** to **Yes**. Then click the **Save** button at the bottom of the page. 
 21. To make all your changes active, click the **Apply Changes** button at the top of any page. 
 22. You or the user who owns the virtual server can now start adding files to the document root directory. You can test it out by opening the URL (such as _http://www.example.com_/) in your web browser to make sure that everything is working properly. 

[![](/images/docs/screenshots/modules/light/apache-webserver-server-options.png "Apache Virtual Server Options Screenshot")](/images/docs/screenshots/modules/light/apache-webserver-server-options.png)

When Apache receives an HTTP request, it must first work out which virtual server the request is for. It will first look for a name-based virtual server whose hostname matches the host requested by the client, and whose address and port are the same as the ones that the client connected to. If none is found, the first defined virtual server for the address and port will be used instead, or if there are none then the request will be handled by the default server. 

Name-based virtual servers can only be used on addresses listed in the **Addresses for name virtual servers** field on the global Networking and Addresses page. If you follow the instructions above, an address will be added to this list automatically when you create a new virtual server. If all the virtual servers on your system are going to be name-based, you can open this page, enter `*` into the field and click **Save** so that Apache will handle such requests on any IP address. This also makes sense if you system has a dynamically assigned IP address and you want to serve multiple virtual hosts. 

Once a virtual server has been created, you can edit its settings or delete it by following these steps : 
- On the module's main page, click on the virtual server's icon.  This will take you to the server options page shown in screenshot above. 
- Scroll down to the **Virtual Server Details** form at the bottom of the page. 
- Change the **Address**, **Port** and other fields to whatever you want and click the **Save** button. These fields have the same meanings as on the virtual server creation form. However, if the address is changed on a name-based virtual server you may need to change it on the global Networking and Addresses page as well. Or if you want to get rid of the virtual server and all the configuration directives that it contains, click the **Delete Virtual Server** button instead. 
- Back on the module's main page, click on the **Apply Changes** link to make the new settings active. 

You cannot change the settings for the default server, nor can you delete it.

### Setting per-directory options 
Apache allows you to specify different options for certain directories, either for all virtual servers or just to a single one. Including directories, you can actually set options that apply to three 
types of object on your Apache server: 
- **Directory** The options apply to a specified directory and all files in it or in sub-directories that it contains. 
- **Files** The options apply to files with a specified name in any directory.
- **Location** The options apply to any files or directories requested by a URL whose path starts with the specified location. For example, in the URL _http://www.example.com/foo_ the path would be _/foo_. 

Whenever Apache processes a request, it checks for the options that apply to it in a fixed order. Those from directory sections and `.htaccess` files are read first ordered so that the most specific directories are checked first. They are then followed by files and then location sections. Then options from the virtual server that the request was made to (if any) are read, and finally options from the default server. 

[![](/images/docs/screenshots/modules/light/apache-webserver-per-directory-options.png "Apache Virtual Server Options Screenshot")](/images/docs/screenshots/modules/light/apache-webserver-per-directory-options.png)

This means that options set for a directory will override the same options set in a higher level directory, or in the virtual server that it is a member of. To set options for a directory, files or URL location the steps to follow are: 
- Even though the options you are going to set apply to a directory, they must be defined under one of the virtual servers or the default server. If they are under a virtual host, then they will apply only to requests to that server for files in the chosen directory or URL location. But if they are under the default server, requests to any virtual host for files in the directory will be effected. On the module's main page, click on either the **Default Server** icon or the icon for a virtual server that you want the directory options to be limited to. For directories, it is usually simplest to put their options under the default server as each virtual host typically has its own separate document root directory. URL location options however should be put under the virtual server that they are related to, because the same URL path may be used in different ways on more than one virtual host. The same goes for file options. 
- On the server options page that appears, scroll down to the *Create Per-Directory, Files or Location Options* form. 
- From the **Type** menu, choose one of the options described above. 
- If you are setting options for a directory, enter it into the **Path** field such _/home/example/www/images_. You can also enter a wildcard path such as _/home/example/w*_, which will cause the options to apply to all directories that match.  If the options are being set for a URL location, enter the part of the URL after the hostname into the **Path** field, such as _/images_.  You can also use shell wildcard characters like `*` and `?` in the URL as well. If setting options for files, enter a filename into the **Path** field such as _secret.html_. Once again, wildcard characters can be used in the filename, for example _secret*._ 
- If you want to be able to used complex regular expressions in the directory, filename or URL location, set the **Regexp?** field to **Match regexp**. This will allow you to use Perl regular expression characters like `[`, `]`, `+`, `.` and `*` in the path. 
- Click the **Create** button to add the new directory section to the Apache configuration. The virtual server options page will be displayed again, but with a new icon for the directory. 

Now that you have created a new icon for a directory, URL location or filename, you can set options that apply to it. One of the most common per-directory changes is configuring how files are listed 
when a browser requests a directory with a URL like _http://www.example.com/images/_. 
By default, if there is an `index.html` file in the directory it will be displayed, or if not a page listing all files that it contains will be shown instead. 

If you want to change the name of the index file, the style of the directory listing or any other settings related to indexing, the steps to follow are : 
- Click on the icon for the directory that you want to configure on the virtual server options page. This will take you to the directory options page. 
- Click on the **Directory Indexing** icon to bring up a form for setting indexing and listing options. 
- To change the appearance of directory listings, set the **Directory index options** field to **Selected below** and change the fields in the box below it. The defaults will generate a very plain list of files, but you can enhance it by setting the following options :
   - **Display fancy directory indexes** If enabled, the list of files will include their icon, size and modification date.
   - **Display HTML title as description** If enabled, the description for HTML files will be taken from their `<title>` tags.
   - **Icon height** This option allows you to change the height of icons included in the directory listing. If it is set to **Default**, the height of the standard Apache options will be used.
   - **Icon width** Like the previous option, this one allows you to specify the width of icons in the directory listing. 
   - **Allow user sorting of column** When this is enabled users will be able to sort the list of files by clicking on the column headings, assuming they are being displayed.
   - **Show file descriptions** If enabled, the directory listing will include a description for each file taken from its MIME type or HTML title.
   - **Output HTML header tags** When enabled, the directory listing will include the normal `<html>` and `<head>` tags that should begin every HTML page. You would only want to turn it off if providing your own header and footer files.
   - **Show last modified times** When enabled, the directory listing will include the last modified date for each file.
   - **Show file sizes** When enabled, the listing will include the size of each file. 
   - **Include icon in link** If this option is enabled, the icon in the listing will be a link to the file itself. Otherwise only the filename is a link.
   - **Filename width** This option controls the length of the filename column in the directory listing. You can either enter a number of characters or * to size the column to the length of the longest filename.
   - **Description width** This option controls the length of the description column in the directory listing, if any. You can either enter a number of characters or * to size the column to the length of the longest description.
   - **Display directories first** If enabled, the listing will show any directories above any files regardless of any other files. The options that are available depend on the version of Apache that you have installed on your system. Those listed above are valid for version 1.3.19, but if you have a newer release more options may be available. 
- If you want Apache to return a file other than the default (usually index.html) when a browser requests the directory, enter a list of filenames into the **Directory index files** field.  More that one can be entered, and the first that is found will be used. If none of the index files are found a directory listing using the options chosen in step 3 will be returned to the browser instead. 
- To have the webserver ignore certain files when generating the list of files in the directory, enter their filenames into the **Files to ignore in directory index** field. You can use shell wildcards in the regular expressions, such as _*.doc_. 
- To have an HTML file inserted at the start of the directory listing, enter its filename (relative to the directory) into the **Directory index header file** field. 
- Similarly, to have a file added at the end of the directory listing, enter its into the **Directory index footer file** field. 
- To control the default ordering of the directory, de-select **Default** in the **Sort directory index by** field and select an order and column to sort on from the two menus next to it. 
- You can set descriptions for files by filling in the *Directory index descriptions* table. In the table's empty row, enter a short message describing the file in the **Description** column, and a list of filenames or wildcard names in the **Filenames** column. Because only one empty row is shown at a time, you will need to re-visit this page after adding each description if you want to enter more than one. 
- Finally, click the **Save** button at the bottom of the page to store your changes and return to the directory options page. To activate them, click the **Apply Changes** link anywhere in the Apache module. 

Most of these options can be set for an entire virtual server by clicking on the **Directory Indexing** icon on the virtual server options page as well. In this case, they will apply to all files requested from the virtual host unless overridden by options for a directory or URL location. 

On the directory options page there are many more icons that you can click on to set options that apply only to that directory, URL path or filename. Some of these are explained in other sections later in this chapter, such as **Aliases and redirects** and *Password protecting a directory*. 

You can change the directory, filenames or URL location that settings apply to using the **Options apply to** form at the bottom of the directory options page. It has the exact same fields as the creation form described at the start of this section. If you make any changes, click the **Save** button to update the Apache configuration and then the **Apply Changes** link to make them active. Or to remove the directory configuration and all its options, click on **Delete** instead.

### Creating aliases and redirects 
Normally, there is a direct relationship between the path in URL and the file that is returned by the webserver. For example, if a browser requests _http://www.example.com/images/foo.gif_
and the document root for _www.example.com_ is _/home/example/www_, then the file _/home/example/www/images/foo.gif_ would be read by the webserver and returned to the client. 

This can be changed though by using what Apache calls aliases. An alias maps a particular URL path to a file or directory, which does not necessarily have to be under the document root. So in the example above, the _/images_ URL path might actually be aliases to the directory _/www/images_, which would cause the file _/www/images/foo.gif_ to be read instead. 

Aliases can be defined globally or in a virtual server. To create one, the steps to follow are : 
- On the module's main page, click on the icon for the virtual server that you want to create the alias under. If you want it to apply to all virtual servers (or you don't have any), click on the **Default Server** icon instead. 
- On the virtual server options page that appears, click on the Aliases and Redirects icon. This will take you to the page in the screenshot below.
- Fill in the empty row in the **Document directory aliases** table with the URL path (under **From**) and the file or directory that it should map to (under **To**). If you are editing the default server, there may already be several entries in this table that are part of the standard Apache configuration. There will always be exactly one empty row in the table. If you need to add more than one alias, you will need to re-visit this page after filling in the row and saving. 
- Click the **Save** button to have your new alias stored in the Apache configuration. The browser will return to the virtual server options page. 
- To make the alias active, click on the **Apply Changes** link at the top of the page.

Existing aliases can be editing by just changing the entries in the **Document directory aliases** table and then clicking **Save**. You should not change the alias for `/icons` in the default server though, as this is used by Apache when it generates icons for directory listings. If you want to delete an alias, just delete the contents of both its fields in the table. 

Aliases can also be created that use Perl regular expressions to match more complex URL paths. These must be entered into the **Regexp document directory aliases** table on the **Aliases and Redirects** form, which has the same columns as the *Document directory aliases* table described above. The difference is that any regular expression can be entered into the **From** field, such as _^/images/(.*)\.gif$_. 
The **To** field can taken a string that refers to bracketed sections in the expression, such as _/images/$1.jpg_. This would convert any request for a GIF file into one for the JPEG with the same name. 

Redirects are similar to aliases, but have a different purpose and work in a different way. Whenever a client requests a URL path that has been redirected, Apache will tell it to go to another URL (possibly on another server) instead. For example, you might redirect all requests to _http://www.example.com/webmin/_ to _http://www.webmin.com/_. Unlike the way aliases behave, 
if a browser requests a page like _/webmin/foo.gif_ it will not be redirected to _http://www.webmin.com/foo.gif_ - it will 
just go to the URL _http://www.webmin.com/_ instead. 

Redirects are implemented by the webserver sending the special 302 status code to the browser, which tells it to go to a new location. It is quite possible for the new URL to be a redirect itself, and you can even create a loop of redirects - not that this is a good idea. 

To set up redirection for a path on your server, the steps to follow are : 
- On the module's main page, click on the icon for the virtual server that you want to create the redirect under. If you want it to apply to all virtual servers, click on the **Default Server** icon instead. 
- On the virtual server options page that appears, click on the **Aliases and Redirects** icon. 
- In the empty row of the *URL redirects *table, enter the URL path on your server under the **From** column, such as _/webmin_.  Under the **To** column, enter the URL that requests should be redirected to, such as _http://www.webmin.com/_. The **Status** field is optional, but can be filled in if you want to change the HTTP status code that will be used for this redirect.  The default is 302, which indicates a temporary redirection. However, you can 301 to tell browsers that the direction is permanent, or 303 to tell them that the original content has been replaced. There will always be exactly one empty row in the table. If you need to add more than one redirect, you will need to re-visit this page after filling in the row and saving. 
- Click the **Save** button to have your new redirect stored in the Apache configuration. The browser will return to the virtual server options page. 
- To make the redirection active, click on the **Apply Changes** link at the top of the page. 

As with aliases, existing redirects can be edited by just changing the entries in the **URL redirects** table and then clicking **Save**. To delete a redirect, just delete the contents of all of its fields 
in the table. 

You can also create regular expression redirects that behave in a similar way to regexp aliases, using the **Regexp URL redirects** table on the same page. Under the **From** column you can enter a 
URL path expression such as _^/webmin/(.*)$_, and under the **To** column a URL that can refer to bracketed parts of the path, such as _http://www.webmin.com/$1_. In this example, an request by a client for a page under _/webmin_ would be redirected to the same file at _www.webmin.com_. 

Also on the Aliases and Redirects page are two more tables labelled **Permanent URL redirects** and **Temporary URL redirects**. The first behaves exactly the same as a normal redirection, but with the status code always set to 301, indicating a permanent redirection. The second also behaves like a normal redirect, but always uses a status code of 302 (temporary redirection). This option is really quite useless, as normal redirections default to using status 302 if one is not specified. 

Redirects can also be defined in the options for directories, URL locations, filenames and `.htaccess` files. When editing the options for one of these (described in the *Setting per-directory options* section), the exact same icon and table are available as when setting up aliases for a virtual server. Naturally, a redirect in a directory only makes sense if the URL path being redirected actually refers to that some file or sub-directory that it contains. The same goes for redirects in URL locations - the path being redirected must start with the location's path. 

If Apache on your system has been compiled with or dynamically loads the proxy module (covered in the *Configuring Apache as a proxy server* section below), tables labelled *Map locale to remote URLs* and **Map remote Location: headers to local** will appear on the **Aliases and Redirects** form under the virtual server options page. These allow you to specify a URL path that when requested will cause Apache to itself request pages from another website and return them to the browser. Even though the URL that the user is accessing is on your server and their browser is connecting only to your system, the content is actually being loaded from elsewhere. 

To set up this URL mapping, the steps to follow are : 
- On the module's main page, click on the icon for the virtual server that you want to create the mapping under. If you want it to apply to all virtual servers, click on the *Default Server* icon instead. 
- On the virtual server options page that appears, click on the **Aliases and Redirects** icon.
- In the empty row in the **Map locale to remote URLs** table, enter a URL path on your server (like _/webmin_) into the first field, and the full URL that you want the pages to be requested from into the second (like _http://www.webmin.com_/). 
- In the empty row in the **Map remote Location: headers to local** table, enter the same full remote URL into the first field and the URL path on your server into the second. This second table controls the conversion of redirects issued by the remote server, and should almost always be set. If it is not set, whenever the remote server issues a redirect the browser will end up connecting directly to it instead of to your server. 
- Click the **Save** button to have your new mapping stored in the Apache configuration. The browser will return to the virtual server options page. 
- To make the mapping active, click on the **Apply Changes** link at the top of the page. 

You can test it out by going to the mapped URL path on your system, and you should see pages that have been requested from the remote server. The process is not totally transparent though, because it does not convert HTML files in any way. So if in the example above the remote server contained an HTML page with a link like `<a href=/foo.html>`, following it would take the browser to `/foo.html` on your system, 
not `/webmin/foo.html` as you might expect. There is no solution to this problem, apart from making sure that the remote server always uses relative links and image paths.

### Running CGI programs 
CGI stands for Common Gateway Interface, and is a standard method for webservers to run external programs, pass them details of a browser's request, and read back any content that the program generates. CGI programs are one of the simplest way of adding dynamic pages to your webserver, and are relatively easy to set up and develop. Server-side includes (covered in the next section) are even simpler, but very limited in what they can do. 

A CGI program can be written in any language as long as it follows certain rules. The most common is Perl, but C, Python, PHP or any other language that can access environment variables and produce output can be used. You can even write shell scripts that are valid CGI programs. This section is not going to explain the details of how to write them though - there are plenty of books that cover that already. 

CGI programs are just files on your system, like any other HTML or image file. The difference is that when they are requested by a browser, Apache executes them and returns their output instead of the contents of the file. Because you only want this to happen for programs and not for HTML files, the server must be configured to identify certain files as CGI programs. This is normally done in one of two ways - by putting all CGI programs into a certain directory, or by giving them all a file extension like `.cgi`. 

The choice is yours, but the latter option is simpler to use as you can freely mix CGI scripts, HTML and image files in the same directory. To set it up, the steps to follow are : 
- On the module's main page, click on the icon for the virtual server that you want to set up CGI programs for. Or click on the **Default Server** icon if you want to use them on all servers. 
- Click on the icon for the directory that you want CGI programs to be enabled under. Typically each virtual server will have an icon for options for its document root directory, but if not you can create one by following the steps in the *Setting per-directory options* section above. If you only want to allow CGI programs to be run in some sub-directory of the website, you can create a new directory icon for that as well. 
- On the directory options page, click on the **Document Options** icon and change the **Directory options** field from **Default** to **Selected below**. Then set the rows **Execute CGI programs** and **Generate directory indexes** to **Yes**, and click the **Save** button at the bottom of the page. This tells Apache that CGI programs can be executed in the directory. 
- Back on the directory options page, click on the MIME Types icon. In the Content handlers table, select cgi-script from the first blank menu under the **Handler** column, and enter `.cgi` into the field next to it under the **Extensions** column.  Then click the **Save** button at the end of the form. This tells Apache to treat all files in the directory ending in `.cgi` as CGI programs. 
- Finally, click the **Apply Changes** link on any page. You should now be able to create a file with a `.cgi` extension in the chosen directory, and test it out in a web browser. 

An alternative to this approach is to specify a directory in which all files are treated as CGI programs. This has the advantage that they can be given any name you like, instead of being forced to have a `.cgi` extension. You can also set permissions on this directory to restrict who is allowed to create CGI programs, while still allowing others to edit normal HTML pages. 

To set up a directory for CGI scripts, the steps to follow are : 
- On the module's main page, click on the icon for the virtual server that you want to set up a CGI directory for. Or click on the *Default Server* icon if you want to set it up for all servers. 
- Click on the **CGI Programs** icon to bring up a page for setting various CGI options. 
- The **CGI directory aliases** table works in a very similar to the **Document directory aliases** table described in the previous section. However, in addition to mapping a URL path to a directory on your server it also tells Apache that any files accessed through that path should be treated as CGI programs. In the first empty row of the table, enter a URL path like _/cgi-bin/_ into the **From** field and a directory like _/home/example/cgi-bin/_ into the **To** field. 
- Click the **Save** button at the bottom of the page to return to the virtual server options page. Then click the **Apply Changes** link to make the CGI directory active. 

You should now be able to create CGI programs in the directory, and test them out in a web browser. On some Linux distributions, the default Apache configuration will already have a CGI directory available at the URL path `/cgi-bin/,` mapped to a directory like `/home/httpd/cgi-bin/`. If this is good enough for you, there is no need to follow the steps above - instead, you can just put CGI programs in that directory. 

Normally, all CGI programs execute as the Unix user that the webserver runs as, typically named httpd or apache. On a system with multiple users who cannot be fully trusted, this is not a good thing - anything that one user's CGI program can do, everyone else's can as well. So for example if a user writes a CGI program that edits some file, he would have to make that file writeable by the `httpd` user, meaning that everyone else's CGI programs could write to it as well. 

Fortunately, there is a solution. Apache comes with an optional program called `suexec` that can be used to have CGI programs run as some other Unix user, rather than as the webserver user. Typically the CGI programs under each virtual server will be run as the Unix user who owns that server's files. To set this up, the steps to follow are : 
1. Make sure that the `suexec` program exists on your system, and that it has setuid-root permissions. Apache typically expects to find it in `/usr/sbin` or `/usr/local/apache/sbin,` and most Linux distributions include it as a standard part of their Apache package. However, some do not have it setuid by default, so you may need to run `chmod 6711 /usr/sbin/suexec` to make it so. 
2. On the main page of the module, click on the icon for the virtual server that you want to have CGI programs run as a different user on. This will take you to the options page.
3. Click on the **User and Group** icon on the virtual server options page. 
4. For the **Run as Unix user** field, select **User name** and enter the name of the user who owns the virtual server into the field next to it. 
5. Similarly, for **Run as Unix group** select **Group name** and enter the primary group of the user specified in the previous step. 
6. Click the **Save** button to return to the options page for the virtual server. 
7. To activate `suexec` for the first time, you need to stop and re-start Apache. Use the **Stop Apache** link at the top of the page to halt it, and then the **Start Apache** link to start it up again. 
8. To check that `suexec` is actually working, check the Apache error log file for a line containing suEXEC mechanism enabled that was logged when the webserver was re-started. 

Because it can execute commands as any user on your system, `suexec` has many security restrictions to prevent misuse by normal users. It will only run CGI programs that are owned by the user and group specified in steps 4 and 5, and only if they are not writeable by any other user, or in a directory that is writeable by another user. The IDs of the user and group must be above minimums that are compiled into the program, to prevent programs owned by system users such as root or bin from being run. Finally, the program must reside under a directory that is compiled into suexec, and nowhere else on the filesystem. 

This last restriction can be very annoying if you have a large number of virtual servers and want to enable the execution of CGI programs in their directories. The default allowed directory is typically the standard CGI directory for Apache, such as `/home/httpd/cgi-bin.` To change this, you will need to re-compile `suexec` with a different directory, such as `/home.` 

Whenever `suexec` fails to run a CGI program, it fails with HTTP status code 500. Because there are many things that can go wrong, you should check the file `suexec_log` in the same directory as the other Apache logfiles to see why it is refusing to execute a particular program. For each failure, a line is written to this file explaining the problem, such as incorrect permissions or a file ownership mismatch. 

Writing CGI programs can be difficult because when they fail, very little information is displayed in the browser. All you see is a message like _500 server error_, which no explanation of the real cause. However, more detailed error information is written to the Apache error log file. This is usually named `error_log`, and can be found in the same directory as the Apache access log files. See the section below on **Configuring logging** for more details on how to find and change it. 

Anything that a CGI programs outputs to `STDERR` will also be written to the error log, which is useful if you want your program to generate debugging information that is not sent to the web browser. Because many programming languages like Perl output error messages on `STDERR` if a script fails to compile or run, all such messages will also be written to the error log file. 

The biggest problem with CGI programs is that the webserver has to launch a new process every time one is requested. If the CGI is written in Perl or PHP, the process then has to load the interpreter for that language which can itself be a large program. The end result is that processing a request for a CGI page takes much longer than a request for a static HTML or image file, and generates much more load on the server system. 

For this reason, optional modules have been developed that allow the webserver to run Perl and PHP scripts using an interpreter that is part of the Apache process. These modules are called `mod_perl` and mod_php, and are included in the Apache package in many Linux distributions. Installing and configuring them is not covered in this chapter though.

### Setting up server-side includes 
Server-side includes allow you to create simple dynamic web pages without the complexity of writing an entire CGI program in a language like Perl. When active, some of the HTML files served by Apache are checked for special tags starting with `<!--` . The contents of each tag is then replaced by dynamically generated text that depends on the tag's parameters, and the resulting page sent to the web browser. 

The most common use of server-side includes is including the contents of one HTML page into another. This can be useful if you have a common header or footer that you want to share among multiple pages without repeating it over and over again. Where a special tag like `<!--include file="something.html" -->` appears in the HTML of page, it is replaced with the contents of the file _something.html_. 

Server-side includes can also be used to access and set environment variables, to conditionally display HTML based on variables and to run CGI programs or shell commands and have their output included in the page. This section will not cover the tags that are available and the purposes though - instead, you should read the documentation on the Apache website or a good book on HTML. 

Normally, allowing un-trusted users to create HTML pages containing server-side include tags is perfectly safe because they cannot be used to perform potentially dangerous operations like editing files on the server. The exception to this is the `<!--#exec -->`tag, which can be used to run an arbitrary shell command and have its output included in the web page. Because the command runs as the Unix user that Apache is running as (normally httpd), a user who is not allowed to create CGI programs may be able use this kind of tag to read or modify files that he would not normally be able to. For this reason, Apache can be configured to enable server-side includes with or without the risky exec tag. 

Because checking an HTML file for server-side include tags is CPU intensive, they are often only activated for files with the `.shtml` extension. This way you can put static HTML in `.html` files and dynamic content into `.shtml` files, so that the server does not have to waste time looking for tags in files that do not contain them. However, it is also quite possible to have all `.html` files checked for server-side includes if you wish. 

To turn on includes for a virtual server, the steps to follow are: 
1. On the module's main page, click on the icon of the virtual server that you want to enable server-side includes on. Or click on the **Default Server** icon to enable them for all virtual hosts. 
2. Click on the icon for the directory that you want server-side includes to be enabled under. Typically each virtual server will have an icon for options for its document root directory, but if not you can create one by following the steps in the *Setting per-directory options* section above. If you only want to enable server-side includes in some sub-directory of the website, you can create a new directory icon for that as well. 
3. On the directory options page, click on the **Document Options** icon and change the **Directory options** field from **Default** to **Selected below**. If you want to enable server-side includes without the exec tag, change the **Server-side includes** row to **Yes**. If you want to enable the potentially risky exec tag as well, change **Server-side includes and execs** row to **Yes** instead. Either way, when they have been enabled click the **Save** button at the bottom of the page. 
4. Click on the **MIME types** icon on the directory options page.  If you want to enable includes on all HTML files, find the *Content handlers* table to select server-parsed from the first empty menu under the **Handler** column, and enter `.html` into the field next to it under the **Extensions** column. This tells Apache that files ending in `.html` should be checked for server-side include tags. If you want to enable includes for only `.shtml` files, enter `.shtml` instead of `.html` under the **Extensions** column. Then in the **Extra MIME types** table enter text/plain into the first empty field under the **Type** column and `.shtml` into the field under **Extensions** next to it. This tells Apache that `.shtml` files should be checked for server-side include tags, and that they actually contain HTML. 
5. Finally, click the **Save** button at the bottom of the MIME Types page, and then the **Apply Changes** link back on the directory options page. 

Once server-side includes are enabled, you can test them by creating an `.html` or `.shtml` file in the chosen directory with some special tags it in. Then open the page in your web browser to see the result. If for some reason server-side includes were not enabled properly, nothing will show up at all because the `<!-- tag indicates an HTML comment`. However, if the tag is replaced by the message an error occurred while processing this directive then includes are active but there is an error in the tag's parameters. More details will be written to the Apache error log file (described in the previous section) if an error if this kind occurs. 

There is another method of indicating to Apache that certain HTML files should have server-side include processing performed on them. The webserver can be configured so that any `.html` file with the Unix execute permission set is processed for includes, by following the steps below. You can set this permission with a command like 
 `chmod +x file.html`. 
- Follow steps 1 to 3 of the instructions above to enable server-side includes for some directory. 
- On the directory options page, click on the **CGI Programs** icon. 
- On the page that appears, change the *Process includes on files with execute bit?* field to **Yes**. You can also set it to **Yes and set last-modified date** to have Apache read the modification time each processed HTML file and use that to set the Last-Modified HTTP header. 
- Click the **Save** button at the bottom of the CGI Programs page, and then the **Apply Changes** link on any page. 

You should now be able to set execute permissions on HTML files in the directory, and Apache will parse them for server-side include tags when they are requested. This allows you to selectively turn on include processing, while avoiding the problem of having to rename a file (and break links) just because it now contains include tags.

### Configuring logging 
By default, every request that Apache finishes processing is written to a log file in a standard format. For each request the client IP address, website username, date, time, URL path, status code and number of bytes transferred is logged. In the default Apache configuration, there is only a single log file that is used for all virtual servers. However, you can re-configure the webserver to use different files for different virtual osts, 
and even to log additional information for each request. 

Apache also has a log file for recording error messages, which are generated when a browser requests a page that does not exist, when an HTTP connection is terminated, or if some other unexpected condition occurs. As the **Running CGI Programs** section explains, this log file also contains error output from CGI programs and failure messages from server-side include directives.

To see which log files are being used by Apache on your system and to change them, follow these steps : 
- On the Apache Webserver module's main page, click on the *Default Server* icon. This will bring you to the default server options page similar to the one shown earlier. 
- Click on the **Log Files** icon to being up the log files configuration form shown in the screenshot below. 
- The **Error log to** field controls where CGI and webserver error messages are written to. Typically the **File** option is selected and the path to a file into which error messages should be written is displayed int the field next to it. You can select the **System Log** option if you want to have messages sent to `syslog` instead (covered in chapter 13). All messages will use the `local7` facility. The other available option is **Program**, which when selected will cause Apache to run the command entered into the field next to it and feed error log messages to it as input. This can be useful for performing your own filtering or analysis of errors as they are reported. 
- The **Named log format** table lists pre-defined formats that can be used for logfiles defined in the next step. Each has as **Nickname** which is used to refer to it, and a **Format** string which specifies the fields written to the log for each request.  When a log line is written, each of the `%` fields in the format string is replaced by some detail of the request, such as the client address, HTTP status code or virtual server name.  See the online Apache documentation for more details on which `%` fields are available. Several standard formats such as common and combined are already defined in the default Apache configuration. To create your own log format, fill in the empty row at the bottom of the table. Each format much have a unique nickname. 
- The **Access log files** table specifies the files that are used for logging actual requests processed by the Apache webserver. Multiple files can be specified, and the format of each can be selected independently from one of those explained in the previous step. All requests will be written to all listed logfiles. Each row of the table defines one logfile. Under the **Format** column you can choose the format for the file, or select the **Default** option to use the standard Apache logfile format. Under the **Write to** column you can choose if the logging is being done to a file or to the input of a program.  The path to that file or program must be entered into the field in the **File or program** column. If you want to add an additional logfile, fill in the fields in the empty row at the bottom of the table. 
- If you have made any changes to the logging configuration, click the **Save** button at the bottom of the page, then the **Apply Changes** link. 

[![](/images/docs/screenshots/modules/light/apache-webserver-logging.png "Apache Webserver Logging Screenshot")](/images/docs/screenshots/modules/light/apache-webserver-logging.png)

Apache also allows you to define different logfiles for each virtual server, so that requests to the various virtual hosts on your system do not all get mixed up into one file. By default, all requests are written to a ingle access log file without any field that identifies the virtual server that processed them. To change this and have a virtual server write to its own separate logfile, the process is : 
- On the module's main page, click on the icon of the virtual server that you want to configure a new logfile for. 
- Click on the **Log Files** icon, which will take you to a page similar to the one in the screenshot above. 
- If you want this virtual server to have its own separate error log file, change the **Error log to** field from **Default** to one of the other options. 
- To add a log format that exists only for this virtual server, fill in the empty row in the **Named log formats** table. It is usually a better idea to define all log formats in the default server though, so that they can be used in any virtual host. 
- Add a row to the **Access log files** table for the separate logfile for this virtual server. As soon as one is defined, requests to the virtual host will be written only to it instead of the access log list on the Log Files page under the default server. 
- When done, click the **Save** button at the bottom of the page to have your new logfile settings written to the Apache configuration.  Then back on the virtual server options page, hit the *Apply Changes* link at the top to make them active. 

If you have multiple virtual servers and want to identify which one each request was made to, another solution to change the format of the default access log file to include the virtual server hostname 
in each log line. To set this up, the steps are: 
- On the module's main page, click on the **Default Server** icon, and then the **Log Files** icon on the default server options page. 
- In the **Named log formats** table find the row for the common format and change its **Format** field so that it reads

    `%h %l %u %t "%r" %>s %b %{Host}i "%{Referer}i" "%{User-Agent}i"`
  
  The extra fields will tell Apache to include the virtual server hostname, referrer URL and browser name for each request on every log line. 
- In the **Access log files** table, find the row for your server's main logfile, and make sure that the **Format** field is set to common, not to **Default** or some other named format. 
- Click the **Save** button, and then the **Apply Changes** link.  All entries written to the logfile from now on will include the additional information.

### Setting up custom error messages 
When a browser attempts to access a page that does not exist, a directory that is password protected or a CGI program that is malfunctioning, Apache returns one of its built-in error messages. Because these error message pages are not always friendly or nice to look at, you can configure the webserver to use your own pages instead. This can be set up to apply to all virtual servers, a single server or just one directory. The steps to follow are: 
- On the module's main page, click on either a virtual server or the **Default Server** icon if you want to define a custom error message that applies to all servers. 
- If you only want the custom message to be displayed for requests to a particular directory, URL path or filename, click on its icon on the server options page. If no icon for the directory exists yet, you will need to define one by following the steps in the section on **Setting per-directory options**. 
- In the directory or virtual server options page, click on the **Error Handling** icon. 
- The **Custom error responses** table is where you can enter error codes and their corresponding custom messages. Any existing error messages for the directory or server will be listed, followed by a blank row. To add a new one, start by entering the HTTP error number into the **Error code** field.  Some of the more common codes and their causes are :
   - **404** The requested page does not exist
   - **403** Access to the page is denied 
   - **401** The browser must login first before accessing the page 
   - **500** A CGI program failed, or some other internal error occurred 
#* If you just want to change the message that Apache displays when the error occurs, select **Show message** under the **Response** column and enter the text of your new message into the field under **URL or message**. On the other hand, if you want the contents of another page to be displayed instead, select **Goto URL** and enter either a URL page (like _/errors/500.html_) or full URL (like _http://www.error.com/505.html_) into the **URL or message** field. In the latter case, the browser will be re-directed to the URL when an error with the chosen code occurs. 
- Click the **Save** button at the bottom of the page. If you want to add another custom error message, click on the **Error Handing** icon again and fill in the new blank row in the table. 
- Click the **Apply Changes** button on any page to make the new custom error message active. 

### Adding and editing MIME types 
[MIME Type Programs](/docs/modules/mime-type-programs) are the method used by Apache, mail clients and many other programs to indicate the type of files and other date. A MIME type consists of two words separated by a slash, such as text/html, 
image/gif or video/mpeg. As those examples show, the first word is the general category of type, while the second is the actual type name. 

Every response sent by a webserver to a browser is accompanied by a type, so that the browser knows how to display it. When a normal file is requested, the webserver typically works out the type by looking at the file's extension, such as .gif or .html. CGI programs must supply their type to the webserver before any other content that they output, which is then forwarded on to the browser. This allows a CGI program to output HTML, plain text, images or any other kind of data, regardless of the filename of the CGI script itself. 

Browsers never attempt to work out the type of a page by looking at the filename extension in the URL - instead, they always rely on the MIME type sent by the webserver. Apache gets its global list of MIME types and the extensions that they are associated with from a configuration file that applies to all virtual servers. To edit and add to this list of types, the steps to follow are : 
- On the module's main page, click on the **MIME Types** icon in the Global Configuration section. This will bring you to a page listing all the types that Apache currently knows about, along with the filename extensions. Almost every type that you would ever need to use should already be listed. 
- To create a new type, click on the **Add a new MIME type** link above or below the list. 
- In the *MIME type *field of the form that appears, enter the type name such as _text/foo_. It is acceptable for the same type to be defined twice, as long as each entry has different associated filename extensions. 
- In the **Extensions** text box, enter all the filename extensions what you want associated with this type, such as _.foo_ and _.fo_. Make sure that no other MIME types are using the same extensions. 
- Click the **Save** button below the form. The browser will return to the types list, which will include your new entry. 
- Click the **Apply Changes** link on any page to make the new type active. 

You can edit or delete an existing global MIME type by clicking on its name in the list, which will bring up the type editing form. Either change the **MIME type** or **Extensions** fields and click **Save**, or hit the **Delete** button to totally remove it. Either way, afterwards you must use the **Apply Changes** link to make the changes active. 

MIME types can also be defined on a per-virtual server or per-directory level in the Apache configuration. This can be useful if you want to override a type for some extension in a particular directory, or create a type that is only needed by one virtual server. To do this, follow these steps : 
- On the module's main page, click on the icon for the virtual server that you want to define the MIME type for. 
- If you only want the type to be used for requests to a particular directory, URL path or filename, click on its icon on the server options page. If no icon for the directory exists yet, you will need to define one by following the steps in the section on **Setting per-directory options**. 
- In the directory or virtual server options page, click on the **MIME Types** icon. 
- The **Extra MIME types** table is for entering types that apply only to this virtual server or directory. In the first blank field under the **Type** column, enter a type like _text/foo_.  In the field next to it under **Extensions**, enter one or more filename extensions like _.foo_. 
- Click the **Save** button at the bottom of the page. If you want to add more than one type, you will need to click on the *MIME Types* icon again so that a new blank field appears in the table. 
- When you are done, use the **Apply Changes** link at the top of any page to make the new type mapping active. 

On the MIME Types page, there is a useful field labelled *Default MIME type*. If set, any files that Apache cannot identify the type for will be treated as whatever is entered into this field instead. Normally, this is set at the default server level to text/plain, but you may want to change it to something else for a particular directory that contains lots of files that have no filename extension. 

There is a similar field on the MIME Types page for directories, URL paths and filenames labelled **Treat all files as MIME type**. When it is set, Apache will identify all files in that directory as the specified type, no matter what their extension. This can be used to forcibly set the types of files that have names that do not follow the normal convention of ending with a type extension.

### Password protecting a directory 
The HTTP protocol has a standard method of indicating that a directory or site requires a username and password to be supplied before it can be accessed. Apache can be configured to force users to login before being able to view some or all of the pages on your system. Logins are typically checked against a separate password file, instead of the Unix user list. 

Password protection can be useful for securing a directory that only some people should be allowed to access, or for setting up a website that uses CGI programs to display different content to different users. To protect a directory, the steps to follow are : 
1. On the module's main page, click on the icon for the virtual server that you want password protection to be enabled under. 
2. Click on the icon for the directory, URL location or filename that you want to protect. If one does not exist yet, follow the steps in the **Setting per-directory options** section earlier in this chapter to create it. 
3. Click on the **Access Control** icon, which will bring you to the page shown in the screenshot below. 
4. In the **Authentication realm name** field, de-select **Default** and enter a description for the protected directory, such as _Private files_. This will be displayed to the user in the browser when he tries to login. 
5. Change the **Authentication type** to **Basic**. The **Digest** type is more secure, but is not supported by a lot of browsers. 
6. Change the **Restrict access by login** field to *All valid users*. This tells Apache that any of the users in the password file set in step 7 will be allowed to login. You can restrict access to only a subset of users by selecting the *Only these users* option and entering their names of users to allow into the text field next to it. Alternatively you can select *Only these groups* and enter the names of groups whose members you want to allow into its field. These options can be useful if the same authentication files are entered on this page for several directories. 
7. In the **Text file authentication** box, enter the full path to the file that you want to use to store usernames and passwords into the text field next to **User text file**. This authentication file must contain one line per user, each in the format _username_:_encrypted-password_.  Standard Unix encryption is used for the passwords, just like in the `/etc/shadow` file. The file doesn't necessarily have to exist yet, as it will be created when the follow the instructions in the later steps to add users. It should not be under of your webserver's document root directories though, as this might allow an attacker to download it, crack the passwords and login to your website. 
8. If you want to categorize users into groups for further restriction as explained in step 6, enter the full path to a group file into the **Group text file** field. This file must contain one line per group, in the format _groupname_ : _username1 username2 etc_. The file does not have to already exist, because it will be created when you add groups in the later steps. If you just want to set up simple username and password authentication, then this step is unnecessary. 
9. Click the **Save** button at the bottom of the page, and you will be returned to the directory options page again. 
10. If the user and group files already exist or if you are planning to edit them manually, you can skip to step 21. Otherwise, click on the **Access Control** icon again to re-display the form. 
11. Click on the **Edit users** link next to the **User text file** field. This will bring up a page listing all webserver users currently listed in the file, if any. 
12. To create a new user, click on the **Add a new user** link above or below the list. 
13. On the user creation form, enter a login name into the **Username** field. 
14. In the **Password** field, select the **Plain text** option and enter the user's password into the field next to it. 
15. Click the **Save** button to have the user added and the list of users re-displayed. You can edit an existing user by clicking on its name in the list, changing its details and hitting the **Save** button. To remove a user, click the **Delete** button on the user editing form instead. 
16. When you are done creating users, use the *Return to access control* link to go back to the Access Control form. 
17. If you are using a group file as well, click on the **Edit groups** link next to the **Group text file** field to bring up a list of existing groups and their members. 
18. To create a new group, click on the **Add a new group** link and fill in the **Group name** and **Members** fields on the creation form that appears, then click **Save**. Members must be entered as a space-separated list of usernames. 
19. Existing groups can be edited and deleted by clicking on their names in the list, just like users can. 
21. When you are done creating groups, follow the *Return to access control* link to go back to the Access Control form. 
22. Finally, click on the **Apply Changes** link on any page to activate password protection for the directory. You can test it out by trying to visit the protected page and logging in as one of the users that you created. 
23. You can add an edit users and groups in future by editing the text files directly, or by following the relevant steps above.  There is no need to use the **Apply Changes** link after changing the user or group lists though, as Apache re-reads the files on every request. 

<img src=http://www.webmin.com/screenshots/chapter29/figure8.gif><br>
The access control form

The instructions above explain how to create text files for storing users and groups, but if your website is going to have a very large number of users text files are not the best way to store them. Because Apache re-reads the user file on every request, the large it gets the longer it will take for the webserver to lookup a user and generate a response. When editing or deleting a user, the entire file must be read in and written out again by the program that is changing it, which can take some time if the file is large. This increases the chance of file corruption if more than one process attempts to manipulate the same user file at the same time. 

The solution is to use DBM files for storing users and groups instead. These are binary format database files that are indexed by a key (such as the username), and can be safely edited in-place. Their only down-side is that they cannot be viewed or changed by Unix programs that deal with plain text, like cat and vi. 

The process of setting up authentication from DBM files is almost identical to the steps above. The only difference is that the user and group filenames must be entered into the **User DBM file** and **Group DBM file** fields in the **DBM file authentication** box. The **User text file** and **Group text file** fields must be left set to **Default**. Unfortunately, Webmin does not allow you to edit users or groups in DBM files as you can with text files. Instead, you will need to write a Perl script or use a program like makemap to create them at the command line. 

Apache user and password files are totally separate from the system's Unix user list. However, this module can be configured to add, update or remove a user in a password file when a user with the same name is created, dited or deleted in the [[Users and Groups]] module. This is done using that module's synchronization feature.

Synchronization can be useful if you want to grant access to some web directory to some of the Unix users on your system, and want their usernames and passwords to remain in sync if they are ever changed/. To set up synchronization between an Apache text authentication file and Unix users managed by the Users and Groups module, the steps to follow are : 
- On the module's main page, click on the icon for the virtual server that the protected directory is under, then on the icon for the directory. 
- Click on the **Access Control** icon, then on the *Edit users link* next to the **User text file** field. 
- Below the list of users is a form for setting up synchronization for this users file. The checkboxes labelled *Add a user when a Unix user is added*, **Change the user when a Unix user is changed** and **Delete the user when a Unix user is deleted** are fairly self-explanatory. Typically you would select all three, or maybe just the last two if you want to add new users to this file manually. 
- After selecting the options that you want, click the **Save** button. Any changes made in the Users and Groups module from now on will cause this user list to be updated as well. 

Each Apache users text file has its own separate synchronization options. Because they are associated with the name of the file, if it is renamed the options will be reset to their defaults. Only changes made in Webmin's Users and Groups or Change Passwords modules will be synchronized with the Apache users file - if a user changes his password with the command-line passwd program, his web password will not be changed to match. 

If you want to turn off authentication for a directory so that any browser can access it, there is no need to delete the entire directory configuration icon. Instead, you can just follow these steps : 
- On the module's main page, click on the icon for the virtual server that the protected directory is under, then on the icon for the directory. 
- Click on the **Access Control** icon to go to the page shown in the screenshot above. 
- Change the **Authentication realm name**, *Authentication type*, **Restrict access by login**, **User text file** and *Group text file* fields all back to **Default**. If you are using DBM files instead of text, change the **User DBM file** and *Group DBM file* fields to **Default** as well. 
- Click the **Save** button, and then the **Apply Changes** link back on the directory options page.

### Restricting access by client address 
Apache can also be configured to limit access to a directory, URL location or filename to certain client systems. The webserver knows the IP address of every browser that connects to it, and can use that address to determine whether the browser is allowed to request certain pages or not. In some situations, the client's real IP address will not be available to the webserver. If the client is accessing the web through a proxy server or a firewall doing NAT, then the IP address that the request appears to come from will be that of the proxy or firewall system. There is way to get the real address, but generally it is not a problem because all clients behind the proxy or firewall are usually treated the same from an access control point of view. 

Apache determines whether a client is allowed access or not by checking its IP address and hostname against a list of rules. There are two types of rule - those that allow access, and those that deny it. Depending on its configuration, the webserver will either check all of the allow rules before the deny rules, or vice-versa. The first one to match determines if the client is denied or not, and no further rules are checked. 

Most people who set up IP access control want to allow access from certain addresses and networks, and deny everyone else. For example, you might want to give hosts on your company LAN access to your intranet, but prevent others on the Internet from accessing it. To set up this kind of access control, the steps to follow are: 
- On the module's main page, click on the icon for the virtual server that you want IP access control to be enabled under. 
- Click on the icon for the directory, URL location or filename that you want to restrict access to. If one does not exist yet, follow the steps in the **Setting per-directory options** section earlier in this chapter to create it. 
- Click on the **Access Control** icon, which will bring you to the page shown above. 
- Scroll down to the **Restrict access** table, and change the **Access checking order** field to **Allow then deny**. This tells Apache that any request which is not specifically allowed by access control rules should be denied, and that all rules that allow access should be checked before rules that deny.  If the alternative **Deny then allow** option is chosen, requests that do not match any rule will be allowed, and deny rules will be checked before allow rules. The **Mutual failure** option has the same effect as **Allow then deny**, and should not be used. 
- At first, this table will contain only one empty row for entering your first access control rule. Because you are going to allow only certain clients and block the rest, select **Allow** from the menu in the **Action** column. The menu and field under the **Condition** column determine what kind of check is done to see if the client is allowed or not. The available condition types are :
   - **All requests** If chosen, all client requests will have the selected action performed.
   - **Request from host** If chosen, only clients whose hostname is the same as or ends with the text entered into the field next to it will have the action performed. Apache gets the hostname by performing a reverse DNS lookup on the client's IP address, which may not always work.
   - **Request from IP** If the client's IP address is the exactly same as the one entered into the field next to the menu, the selected action will be performed.
   - **Request from partial IP** If chosen, clients whose IP addresses start with the partial IP entered into the field next to the menu will have the selected action performed. For example, you could enter _192.168_ to match all clients on that network. 
   - **Request from net/netmask** If the client's IP address is within the network specified by the network address and netmask entered, the selected action will be performed. An example network specification would be _192.168.1.0/255.255.255.0_. 
   - **Request from net/CIDR** If the client's IP address is within the network specified by the network address and prefix bits entered, the selected action will be performed. _192.168.1.128/25_ is an example of this kind of network specification.
   - **If variable is set** If this option is chose, the selected action will only be performed if the environment variable whose name is entered into the adjacent field is set. Apache provides several ways to set variables based on request headers and browser types and are too complex to cover here. 
- Click the **Save** button at the bottom of the form, and if there are no errors in your selections you will be returned to the directory options page. To allow more than on client IP address or network, click on the Access Control icon again and fill another next blank row in the **Restrict access** table. You can build up complex access control rulesets by adding many allow and deny rules. 
- When you are totally done, use the **Apply Changes** link on any page to make the restrictions active. 

It is possible to combine both IP address restrictions and username/password access control for the same directory. This can be done in two ways - either clients are checked for any IP restrictions and then forced to enter a password, or they are only prompted for a password if they do not pass the IP restrictions. 

The mode that Apache uses is determined by the **Clients must satisfy** field on the Access Control form. If you set it to **All access controls** then they must pass both password and IP checks. However, if *Any access control* is selected then a password will only be prompted for if the IP checks fail. This can be useful for granting access to a directory to everyone on your internal network, and to people on the Internet who have a valid username and password.

### Encodings, character sets and languages 
As the **Adding and editing MIME types** section explains, Apache attempts to determine a MIME type for every file that it sends to a browser. In addition to the type, files can also have an encoding that is usually used to indicate how they were compressed. The encoding is determined by the file extension (such .gz for gzipped data), and can be used by the browser to uncompress the file before displaying it. 

For example, this would allow you to create a file called foo.html.gz which contains compressed HTML data and is identified by the webserver as such. For large files, sending them in compressed format can save bandwidth and reduce the time it takes for them to be downloaded. Unfortunately, not all browsers support the common .gz and .Z encoding formats, so this feature is not always useful. At the time of writing, Mozilla and Netscape supported 
compressed encoding, but IE did not. 

Encodings can be defined globally, on a per-virtual server basis, or just for a single directory or URL location. They are usually defined globally though, and can be viewed and edited by following these steps : 
- On the Apache Webserver module's main page, click on the *Default Server* icon. 
- Click on the **MIME Types** icon, and scroll down to the *Content encodings* table. Each row in the table defines two encodings, and there is always at least one pair of empty fields for adding a new one. Typically entries for the x-compress and x-gzip encodings will already exist, as they are included in the default Apache configuration. 
- To add a new encoding, enter its name into the first empty field under the **Content encoding** column. In the field next to it, enter a space-separated list of filename extensions that are used by files encoded in that format. 
- To change the name or extensions for an existing encoding, just edit its fields in the table. For example, you can add extra extensions for an encoding by just entering them into same field as existing ones. 
- If you want to delete an encoding, just clear its entries in the fields under the **Content encoding** and **Extensions** fields. 
- When you are done editing encodings, click the **Save** button at the bottom of the page, and then the **Apply Changes** link. 

Apache takes all filename extensions into account when determining a file's MIME type, encoding, language and character set, and does not care about their order. This means that a files named foo.html.gz and foo.gz.html are both identified as containing gzip compressed HTML data. 

Another piece of information that Apache can supply to browsers requesting a file is the character set used by text in the file. If all your web pages are in English or a language like Malay that does not use any non-English letters, then you don't need to care about this. However, if you are creating HTML pages in a different language that uses characters outside the standard ASCII character set then it is useful and often necessary to indicate to browsers what character set each page is in. 

Languages like German and French use special characters like and Russian have so many characters that each must be represented by two bytes, using special character sets like Big5 and KOI8. 
For these languages, it is vital that the browser be informed of the character set of each page so that it can decode the text that it contains and use the correct font to display characters. 

As with encodings, Apache determines the character set of each file by looking at its filename extension. So for example a file named foo.html.Big5 would be identified as HTML in which the text was encoded in the Chinese Big5 format. A file can have both a character set and an encoding, such as foo.html.Big5.gz, and the order that its extensions are in does not matter. 

Character sets can be defined globally or for individual virtual servers and directories. To view and edit the global list of character sets, follow these steps: 
- On the Apache Webserver module's main page, click on the *Default Server* icon. 
- Click on the **Languages** icon, and scroll down to the *Extra character sets *table. Each row in the table defines two character sets, and there is always at least one pair of empty fields for adding a new one. In the default Apache configuration several commonly used character sets are already defined. 
- If you need to add a new character set, enter its standard ISO name into the first empty field under the **Charset** column, and the filename extensions associated with it into the adjacent field under **Extensions**. Many common character sets are defined by default, so you may just be able to use one of the existing recognized extensions for your files. Multiple extensions must be separated by spaces. 
- You can change the name or extensions for existing characters sets by just editing the fields in the table. It is not usually a good idea to rename the default sets, because they use the standard names that are recognized by browsers. Adding extensions is perfectly safe though. 
- To delete a character set, just clear out the fields containing its name and any associated extensions. 
- When you are done editing, click the **Save** button. If you used up all the blank fields in the Extra character sets table and want to add more, click on the **Languages** icon again.  Otherwise, use the **Apply Changes** link to make your changes active. 

Because most of the commonly used character sets are defined by default in the Apache configuration, it is not usually necessary to add new ones. Instead, you can just find the associated extensions and use them on your filenames. 

Apache can also identify the language that an HTML or text file is written in by looking at its filename extensions. At first it may seem that there is no difference between a file's language and its encoding, but that is not always the case. For example, the ISO-8859-2 character set is used for many different European languages, and the Chinese language can be represented by both the Big5 and GB character sets. 

Unfortunately, few browsers actually make any use of the language that a file is written in. However, some can be configured to request pages in a language chosen by the user, and Apache can be set up to use this information to identify the correct file to return. This happens when the **Generate Multiviews** option is turned on for a directory, in the Directory Options page. 

When that option is active, a request for a page like `/documents/foo` which does not actually exist will cause Apache to scan the directory for `/documents` for all files starting with foo, identify their types and languages, and return the one that best matches the client's specified language. This is useful if you want to be able to have multiple versions of the same page in different languages, but have them all accessible via the same URL. 

To view and edit the languages and file extensions recognized by Apache, the steps to follow are: 
- On the Apache Webserver module's main page, click on the *Default Server* icon. 
- Click on the **Languages** icon, and find the *Content languages *table. Each row in the table defines two languages, and there is always at least one pair of empty fields for adding a new one. The default Apache configuration contains several commonly used languages. 
- To add a new language, enter its ISO code into the first empty field under the **Language** column, and a list of extensions separated by spaces for files in that language under the **Extensions** column. 
- Existing languages can be editing by just changing their codes and extensions in the table, or deleted by clearing out their fields. It is wise not to change the standard codes for existing default languages. 
- When you are done editing languages, click the Save button at the bottom of the page. If you ran out of blank fields when adding new ones, click on the Languages icon again to return to the table. Otherwise, use the **Apply Changes** link to activate your new settings. 

As with encodings and character sets, Apache does not care about the ordering of extensions in a filename when working out its type and language. So both the files foo.html.de and foo.de.html would be identified as HTML documents written in German.

### Editing `.htaccess` files 
As explained in the introduction, Apache options can be set for a directory by creating a file named `.htaccess` in the directory. These are often created by normal users who do not have permissions to edit the master webserver configuration file, and want to change the way Apache behaves when accessing their directories. `.htaccess` files can be used to set almost all of the options that 
you can configure on a per-directory basis, as explains in other sections of this chapter. 

The options in one of these files apply to all the files in its directory and in any subdirectories. However, they can be overridden by another such file lower down in the directory tree. Per-directory options in the main Apache configuration will be overridden by those in a `.htaccess` file for the same directory, but directory options for a subdirectory will override those in a parent `.htaccess` file! 

Webmin can be used to create and edit `.htaccess` files as well. If some already exist on your system that were created manually, they must be discovered by Webmin first before you can use it to edit them. To have it search for existing files on your system, the steps to follow are: 
- On the module's main page, click on the *Per-Directory Options Files* icon. This is what Webmin calls `.htaccess` files. 
- On the page that appears, there is a button labelled *Find Options Files* with two options next to it. If **Automatically** is selected, Webmin will look in the document root directory of each virtual server for options files. If **From directory** is chosen, you can enter a directory that will be searched instead. The latter option is useful if the websites on your system have some pages that are outside of the document roots due to the user of aliases or user web directories. 
- Click the button to have the module search the select directories and any under them. The same page will be re-displayed, but with a table of all `.htaccess` files at the top, assuming some were found. 

To edit the options set in a file, just click on its path from the Per-Directory Options Files list. This will bring up a page similar to the directory options page shown in Figure 29-5. You can click on the icons to edit redirects, username and password access control, IP address restrictions, MIME types and custom error messages. The instructions in previous sections that apply to directories can be followed here as well - the only difference is that you do not have to use the Apply Changes link after making changes, as Apache always re-reads the `.htaccess` files that it encounters on every request. 

You can also create a new `.htaccess` file by entering the path to the directory that it should be created in into the field next to the **Create Options File** button. When the button is clicked, the file will be created empty and have its ownership set to the user and group configured on the User and Group page of the default server. It will be added to Webmin's list of known options files, and your browser will be redirected to the options file for the page. 

To delete an per-directory options file, click on the *Delete File* link that appears at the top of the page that appears when you click on its name from the list. As soon as it is removed, Apache will cease using any options that it defines in it for the directory it was in. 

The **Setting Per-Directory Options** section earlier in this chapter explains how to set options that apply only to files of a particular name, no matter which directory they are in. It is also possible for a `.htaccess` file to contain options that apply to only some of the files in the directory that contains it. This can be useful to do things like denying access to all files matching the pattern *.c in the directory `/usr/local/src,` which you cannot do just using per-directory or per-file options. 

To set options like this, the steps to follow are: 
- On the module's main page, click on the *Per-Directory Options Files* icon. Then click on the `.htaccess` file in the directory that you want the options to apply to. If it doesn't exist yet, use the **Create Options File** button to create it as explained above. 
- Scroll down to the **Create Per-File Options** form, and enter the filename or pattern into the **Path** field. Patterns can only use shell wildcard characters like `*` and `?`, unless you change the **Regexp?** field to **Match regexp**, in which case you can enter a Perl regular expression using characters like `||`, `[, ]` and `+`.
- When you click the **Create** button, the same page will be re-displayed but with an additional icon for the filename or name pattern that you just entered. 
- Click on the new icon, which will bring up another page of icons for different categories of options that can be applied to files whose names match the specified filename or pattern.  This page is very similar to the directory options page shown in above, and the pages that it links to are mostly identical. 
- The instructions in other sections of this chapter for creating redirects, custom error messages or IP access control can be followed on this page as well to set the same options for matching files in the directory. The only difference is that there is no need to click on the **Apply Changes** link to made new settings active. 

You can change the filename or pattern that the options are for by editing the **Path** field in the **Options apply to** form, and then clicking Save. Or you can remove them altogether so that the options for the directory apply instead by clicking on the **Delete** button in the same form. 

On a system that has many virtual websites run by un-trusted users, you may want to restrict the directives that those users are allowed to enter into `.htaccess` files. This can also be useful if you have user web directories enabled, explained in the next section. It is possible for a user to enable CGI scripts for his directory by putting the right directives into an options file, which could pose a security risk on your server. 

You can restrict the directives that can be used in `.htaccess` files on a per-directory basis. To do this, the steps to follow are: 
- On the main page of the Apache Webserver module, click on the icon for the virtual server that the directory is under. 
- Click on the icon for the directory that you want to restrict `.htaccess` files in, or if one does not exist yet follow the instructions in the **Setting Per-Directory options** section to create it. 
- Click on the **Document Options** icon. 
- In the **Options file can override** field, select the *Selected below* radio button. The de-select those categories of directives in the table below that you don't want users to be able to include in `.htaccess` files. The available categories are : *Authentication options *De-select this option to prevent the use of directives related to password authentication. *MIME types and encodings *De-select this option to prevent the setting of MIME types, character sets, encodings and languages for files. This will also stop files with certainly extensions being indicated to be CGI programs. *Indexing and index files *This option controls the use of directives for directory indexing. *Hostname access control *De-select this option to stop the use of IP access control directives. *Directory options *This option controls the use of directives that set options for the directory, such as whether indexing is done and if CGI programs are enabled. 
- Click the **Save** button, and then the **Apply Changes** link. 

Whenever a user tries to use directives that he is not allowed to, Apache will display an error message when files in the directory containing the `.htaccess` file are requested. It will not simply ignore the disallowed directives.

### Setting up user web directories 
On a system with many Unix users, you may want to allow each user to create his own set of web pages. Instead of creating a subdirectory for each user under some document root directory, you can instead designate a subdirectory in each user's home directory as a location for web page files. Typically this subdirectory is called public_html, and its contents are made available at a URL like _http://www.example.com/~_username_/_. 

The special `~username` path in the URL is converted by Apache to a directory under the home of the user _username_, no matter what document root directory is being used for the rest of the files on the website. It is also possible for files in the user's actual home directory to be made available instead, so that `~username` actually maps to the user's home directory and not a subdirectory. However, this is a bad idea as it makes all of the user's files available to anyone with access to the website. 

To turn on Apache's user web directories feature so that `~username` URL paths can be used, the steps to follow are: 
- On the module's main page, click on the icon for the virtual server that you want to activate user directories for. To activate them for all virtual servers, click on the *Default Server* icon instead. 
- Click on the **Document Options** icon.  - In the **User WWW directory** field, de-select the **Default** option and enter `public_html` into the field next to it. Or if you want a different subdirectory to be used for users' web pages, enter its name instead. To make users' entire home directories available via `~username` URL paths, enter `.` into the field. On many systems, this option will already be set to public_html in the default Apache configuration, meaning that user web directories are already enabled. 
- If the **All users accessible** option is selected, Apache will allow the pages in any user's web directory to be accessed.  To configure the webserver to only allow access to the pages belonging to certain users, select the **Only users** option and enter the names (separated by spaces) into the field next to it. This can be useful if there is a small fixed list of Unix users who should be allowed to publish web pages. To block only a few users' web pages and allow the rest, select the *All users except* option and enter the names of the blocked users into its field. This is useful for protecting files belonging to important system users such as root. 
- Click the **Save** button at the bottom of the page, then use the **Apply Changes** link to activate the new settings. Try creating a public_html subdirectory in the home directory of a user, putting some HTML files in it and seeing if they can be accessed using the ~username/filename.html URL path.. 
- It is also possible to have _~username_ URL paths mapping to directories outside users' home directories by entering values starting with `/` into the **User WWW directory** field.  For example, if you were to enter _/www_ and a browser requested _~jcameron/foo.html_, then the file returned by Apache would be `/www/jcameron/foo.html.` If you entered _/home/*/public_html_, then the file returned would be `/home/jcameron/public_html/foo.html,` even if the user jcameron did not have his home directory at `/home/jcameron.` As that example shows, any occurrence of a _*_ in the user web directory is replaced by the username. 

Similarly, you can enter a URL into the directory field, which will be used by Apache to generate a URL to re-direct browsers to when a user web directory is requested. For example, if you enter _http://home.example.com/users/_ and the URL path _~jcameron/foo.html_ is requested by a browser, it will be re-directed to http://home.example.com/users/jcameron/foo.html instead. This is useful if you want to move user web directory 
hosting to a separate server, while allowing URLs on your main server to be used to access them. 

Even though the above are sufficient to enable user web directories, there are some other things that you might want to do. As the *Editing `.htaccess` files* section above explains, you may want to limit the kinds of directives that users can put in their `.htaccess` files so that they cannot execute CGI programs or use server-side includes. You can also change the default directory indexing and document options that apply to user web directories. The steps to do both of these are:
- On the module's main page, click on the icon for the virtual server that user web directories were enabled in, or the default server. 
- Assuming all your users have their home directories under `/home` and the web subdirectory is named public_html, enter _/home/*/public_html_ into the Path field of the Create Per-Directory, Files or Location Options form at the bottom of the page. 
- Leave the **Type** field set to **Directory**, and the **Regexp?** field to **Exact match**. 
- Click the **Create** button to create a new set of options that will apply to users' web directories, then on its newly created icon. This will bring up the document options page shown in a screenshot earlier on this page. 
- Click on the **Document Options** icon. 
- Change the **Directory options** field to **Selected below**, and set to Yes those options that you want to apply to user web directories. It is advisable to turn on *Generate directory indexes* and safe to enable **Server-side includes**, but not **Execute CGI programs** or *Server-side includes and execs*. The **Follow symbolic links** option is relatively safe to turn on as well, but will allow users to make available via the web files that are not in their public_html subdirectory by creating links to them. 
- To prevent users overriding these settings in `.htaccess` files, change the **Options file can override** field to *Selected below* and de-select the **MIME types and encodings** and *Directory options* checkboxes. The others control options that present no security risk, and so can be safely left selected. 
- Click the **Save** button and then the **Apply Changes** link to save and activate the restrictions. 
- If you want to turn on server-side includes, set some custom MIME types or IP access controls for user web directories, you can do it by following the instructions in the appropriate sections for this directory. Because server-side includes are quite harmless with the ability to execute external programs disabled, they can be safely enabled for users by setting the right content handler for `.html` or `.shtml` files as the **Setting up server-side includes** section explains.

### Configuring Apache as a proxy server 
An HTTP proxy is a server that accepts requests for web pages from browsers, retrieves the requested pages from their servers and returns them to the browser. They are often used on networks on which clients are not allowed to connect to webservers directly, so that restrictions on who can access the web and what sites they can view can be enforced. A proxy can also cache commonly accessed pages, so that if many clients visit the same site its pages only have to be downloaded once. This speeds up web access and reduces bandwidth utilization. 

Apache is not the best proxy server available for Unix systems - [[Squid Proxy Server]] takes that honour. Squid has many more configurable options, is more efficient and can deal with much larger caches. However, if you want to set up a proxy on a system that is already running Apache, then it may make sense to use the existing webserver as a proxy instead of installing and running a separate server process for Squid. 

Apache's proxy support is only available if the mod_proxy module has been compiled into the webserver or is available to be dynamically loaded. You can see if the module is available by clicking on the **Re-Configure Known Modules** icon on the main page. If **mod_proxy** is checked, then your server can be used as a proxy. If so, you can skip the next paragraph which deals with loading the proxy module. 

On some Linux distributions, the proxy module is included with the Apache package but not loaded by default. If this is the case on your system, you can enable it by following these steps: 
- On the Apache Webserver module's main page, click on the *Edit Config Files* icon. This will bring up a page showing the contents of the primary configuration file, called httpd.conf. 
- Look for a line starting with LoadModule proxy_module which is currently commented out with a - at the start. If no such line exists, then the proxy module is probably not installed at all and so cannot be used. 
- Delete the - at the start of the line, and then click the **Save** button at the bottom of the page. 
- Click the **Stop Apache** link on any page to shut down Apache, and then the **Start Apache** link to start it again. This is necessary for the webserver to load the enabled proxy module. 
- On the module's main page, click on the *Re-Configure Known Modules* icon, and then on the Save button at the bottom of its page. This tells Webmin to re-analyse the Apache configuration so that it detects that the mod_proxy module is now available. 

If Apache on your system was compiled from source, then you will need to re-compile it with mod_proxy enabled in order to use the proxy features. Once mod_proxy has been enabled, you can set your system up as 
a proxy server by following these steps: 
- On the module's main page, click on the icon for the virtual server that you want to use as a proxy. This must be an IP-based virtual server or the default, as it is impossible to turn on proxying for just a single name-based virtual server.  However, the normal operation of whichever server you choose will not be effected. 
- Click on the **Proxying** icon which should be visible on the virtual server options page. If the icon does not exist, then the proxy module has not been detected by Webmin. 
- Change the **Act as proxy server?** field to **Yes**. 
- By default, Apache will not cache any pages that are requested though it when acting as a proxy server. To change this, create a directory that is writable by the web server user (usually httpd) and enter it into the **Cache directory** field. 
- To limit the amount of data that will be cached, enter a number of kilobytes into the **Cache size** field. If this is left set to **Default**, Apache will only cache 5 kB of pages. 
- To turn off caching for particular websites, enter a space-separated list of hostnames and domains into the **Domains not to cache** field. This can be useful for avoiding the caching of sites that change frequently. 
- To stop users of the proxy accessing certain domains, enter a space-separated list of full or partial hostnames into the **Block requests to domains** field. For example, to deny access to all sites in the foo.com domain you could just enter _foo.com_. 
- If you have another proxy server on your network and want to pass all requests on to that proxy, enter its URL (like _http://proxy.example.com:8080_/) into the empty field under **Forward to** in the *Requests to pass to another proxy* table, and leave the **All** option selected.  Alternately, you can have just some requests passed on by selecting the Matching option and entering a partial URL or URL type (like http://www.foo.com `/` or _ftp_) into the field next to it. Like other tables in the Apache module, this one only displays one blank row at a time. If you want to set up several other proxies to forward different requests to, you will need to re-edit this page after saving and fill in the next blank row. For example, you might want to forward all FTP requests to one proxy, but all other types of request to another. 
- To exclude some requests from being passed to the other proxies (for example if they are on your local network), you can fill in the **Don't pass requests to another proxy for** table. In each empty row you can choose from one of the following types:
   - **IP address** If this type is chosen, you must enter a complete IP address into the field next to it. Any requests to the webserver with this IP will not be passed on to another proxy.
   - **Hostname** When this type is chosen, any requests to the webserver whose hostname is entered into the adjacent field will not be passed on.
   - **Domain** Any requests to websites in the domain entered into the field next to the menu will be retrieved directly and not passed on.
   - **IP network** Any requests to websites in the specified IP network (entered as a partial IP address, like _192.168_) will not be passed on to another proxy.
   - **Network/bits** Any requests to websites in the IP network (entered in address/prefix, like _192.168.1.0/24_) format into the adjacent field will not be passed on. To add more than one row, you will need to save the form and edit it again so that a new blank row is displayed. 
- Most of the other options on the form control the layout of the cache directory and the amount of time pages are cached for. In most cases, the defaults will work fine so you can just leave them set to **Default**. 
- When done, click the **Save** button to update the Apache configuration file with the proxy settings, then the **Apply Changes** link to make them active. 

You should now be able to try your settings by configuring a web browser to use your Apache server as a proxy, and visiting some web pages. All proxy requests that Apache processes will be written 
to the access log file for the virtual server in the usual format, but with the full URL recorded instead of just the page. 

Sometimes you may want to limit who has access to proxy, either by client IP address or by username and password. This can be done by following the instructions in the *Restricting access by client address* and **Password protecting a directory** sections, but for the special directory proxy:*. If you set up client address access control, then only hosts will allowed addresses will be able to use your server as a proxy. However, they will still be able to access normal web pages, as IP address restrictions for the special proxy:* directory only apply to proxy requests. 

If you set up username and password authentication for your proxy server, then any web browsers that attempt to use it will be forced to login first. This login is to the proxy server, not to any website that is being access through it - so if a user visits a password-protected website using the proxy, then he will have to login separately to that site. 

It is also possible to set up IP or password restrictions that apply only to some protocols or sites accessed through the proxy, by creating them for special directories like _proxy:http_ or _proxy:http://www.example.com/_. Only requests for URLs that start with the text after proxy: will be effected by restrictions like these. They can be useful for blocking or limiting access to certain sites, or preventing the proxy from being used to request certain protocols like http or ftp.

### Setting up SSL 
SSL is a protocol for making secure, authenticated connections across an insecure network like the Internet. It encrypts network traffic, so that an attacker cannot listen in on the network and capture sensitive information such as passwords and credit card numbers. It allows servers to authenticate themselves to clients, so that a web browser can be sure that it is connecting to the website that is thinks it is. It also allows clients to authenticate themselves to servers, which can be used to replace usernames and passwords with digital certificates. 

The SSL protocol can be used to encrypt any kind of data that would normally travel over an unencrypted TCP connection. However, in this chapter we are only concerned with the encryption of web page requests and responses, which is done by encrypting HTTP protocol data with SSL. The result is a new protocol called HTTPS, which is used by all websites that want to operate securely. Almost every browser supports the HTTPS protocol, and uses it when retrieving URLs that start with _https://_ instead of the normal _http://_. Whereas the normal HTTP protocol use TCP port 80, the HTTPS protocol uses port 443. 

You can configure Apache to use HTTPS on a per-virtual server basis, or to use it for all servers. However, this depends on having the mod_ssl Apache module compiled in or available for dynamic loading, which is not always the case. The *Configuring Apache as a proxy server* section explains how to check for and possibly enable the mod_proxy module, and you can follow those same instructions for mod_ssl as well. Most modern Linux distributions include SSL support in their Apache package as standard though. 

At the heart of the SSL protocol are digital certificates, which are used for both authentication and encryption. Typically the server sends its certificate to the client to prove its identity, so that the client knows that its connection to the website has not been re-directed by an attacker. Certificates issued by a proper certificate authority such as Verisign or Thawte are impossible for forge, because they have been signed by the authority's master certificate. All web browsers include a list of authorities that they can use to validate signatures and thus ensure the authenticity of web site certificates. 

The down side of this method of certificate validation is that you cannot simply generate your own certificate for your website zhat will be accepted without complaint by web browsers. It is possible to create a self-signed certificate that Apache will happily use, but any browser connecting to that webserver in SSL mode will display a warning message to the user because the certificate is not signed by a recognized authority. Self-signed certificates are fine for encrypting HTTPS traffic, but if you want browsers to be able to validate your site you will need a 'real' certificate signed by a proper authority - and that costs money. 

Before you can enable SSL in Apache, you must have a certificate. The easiest way to get one for testing purposes is to generate your own self-signed certificate, which can be done by following the steps below. To generate a real certificate from a recognized authority, follow the steps at the end of this section instead. To create a certificate, you will need the openssl command, which is included with most modern Linux distributions and freely 
available for download from http://www.openssl.org/. If Apache on your system already includes the mod_ssl module, then openssl is probably already installed or on your distribution CD or website. 
- Login to your system as root. 
- Change to the directory in which you want to store your certificate files, such as `/usr/local/apache/conf` or `/etc/httpd.` 
- Run the command openssl req -newkey rsa:1024 -x509 -days 365 -nodes -out cert.pem -keyout key.pem 
- The command will ask the following question, in order to obtain attributes for your new key. To leave any of the requested fields blank, just enter a single period. *Country name *The two-letter code for the country your webserver is in, such as _AU_ or _US_. *State or Province Name *The name of the state your server is in, such as _California_. *Locality Name *The city your server is in, such as _San Francisco_. *Organization Name *The name of your company or organization, such as _Example Corporation_. *Organizational Unit Name *The name of your division within the company, such as _Engineering_. *Common Name *The hostname of your webserver as used in the URL. For example, if browsers usually access the server as http://www.example.com/, then you should enter _www.example.com_ for this question.  Unfortunately you can only enter a single hostname, so if your webserver is accessed by more than one name (such as www.example.com and example.com), then only one will match the certificate.  However, the hostname can contain the wildcard character **, so you can enter _*_.example.com_ or even just _*_. *Email Address *The email address of the administrator for this webserver, such as _jcameron@example.com_. 
- When all the questions have been answered, the files cert.pem and key.pem will be created in the current directory. These are your website's certificate and its private key respectively. 
- Because the private key **must** be kept secure to ensure the security of SSL connections to your server, change its ownership to the user that Apache runs as, with a command like `chown httpd key.pem`. Then set the permissions so that no other user can read it, with the command `chmod 600 key.pem`. 

How that a certificate and private key have been created, you are ready to configure your web server to use SSL. The best way to do this is to create a new virtual server that handles all requests to port 443 (the HTTPS port) in SSL mode. This way any existing virtual servers on your system will not be effected. The exact steps to follow are: 
- On the main page of the Apache Webserver module, click on the **Networking and Addresses** icon. 
- In the blank row at the end of the **Listen on addresses and ports** table, select **All** under the **Address** column and enter _443_ under the **Port** column. Then click the **Save** button at the bottom of the page. 
- Back on the main page, scroll down to the Create a New Virtual Server form. 
- Set the **Address** field to **Any**, and the **Port** field to _443_. 
- If you want the pages that browsers see when connecting in SSL mode to be the same as those that they see when making a normal HTTP connection, enter the document root directory for your default server into the **Document Root** field. Otherwise, you can enter a different directory so that clients will see different pages when making HTTPS requests. 
- In the **Server Name** field, enter the same hostname that you specified for the **Common Name** when creating the SSL certificate. 
- Click the **Create** button to have the new virtual server added to your Apache configuration. An icon for it will be added to the module's main page. 
- Click on the icon for your new server to go to the virtual server options page. An icon labelled **SSL Options** should be visible - if not, either your Apache webserver does not have the mod_ssl module, or Webmin hasn't detected it yet. 
- Click on the **SSL Options** icon to bring up the page shown in the screenshot below. 
- Change the **Enable SSL?** field to **Yes**. This tells Apache that the virtual server should treat all connections as HTTPS. 
- In the **Certificate/private key file** field, de-select **Default** and enter the full path to the cert.pem file that you created earlier. 
- In the **Private key file** field, enter the full path to the key.pem file. If you only have a single file that contains both the certificate and private key, you can leave this field set to **Default** and enter its path into the field above. 
- Click the **Save** button, and then the **Apply Changes** link back on the virtual server options page. 
- Unless an error is reported when applying the configuration, your webserver should now be running in SSL mode on port 443.  Test it out by using a web browser to go to https://www.example.com/ or whatever the URL of your site is. Note that there is no need to specify port 443 in the URL, as it is used by default for HTTPS, just like port 80 is the default for HTTP. 

<img src=http://www.webmin.com/screenshots/chapter29/figure10.gif><br>
The SSL Options page

It is also possible to create IP-based virtual servers that use SSL and handle connections to port 443 on particular IP addresses. However, it is not possible to create several name-based virtual servers that use SSL, because the server sends its certificate to the client before any HTTP protocol data is exchanged. Normally the Host: HTTP header is used by Apache to determine which name-based virtual server a request is being made to, but this header has not been send by the browser at the time the webserver selects the certificate to send to the client. The end result is that having multiple named-based virtual servers on the same IP address in SSL mode will not work properly, if at all. 

On some Linux distributions, the included Apache package may already include an example virtual server running on port 443 with SSL enabled. It will probably also come with usable certificate and private key files, although they are likely to be self-signed and to have a different hostname for the common name. In this case, there is no need to follow the steps above to set it up - all you need to do is generate your own SSL certificate files, and then visit the SSL Options page in the existing virtual server to change the **Certificate/private key file** and **Private key file** fields. 

If you want to use Apache to host a real Internet website running in SSL mode, you will need to request a certificate signed by a recognized authority. To do this, you must generate a CSR (certificate signing request) and send it to the authority for verification along with your website's name, company name and other details to prove that you really do own the website and domain. After they have verified your details, the CA will sign the certificate and send it back to you for use in your webserver. 

The exact steps to follow for generating a CSR are : 
- Login to your system as root. 
- Change to the directory in which you want to store your certificate files, such as `/usr/local/apache/conf` or `/etc/httpd.` 
- Run the command openssl genrsa -out key.pem 1024. This will create just the private key file key.pem. 
- Make sure that the file can only be read by the webserver user, with commands like `chown httpd key.pem` and `chmod 600 key.pem`. 
- Run the command openssl req -new -key key.pem -out csr.pem to generate the CSR. 
- The command will ask the following question, in order to obtain attributes for your new key. To leave any of the requested fields blank, just enter a single period. *Country name *The two-letter code for the country your webserver is in, such as _AU_ or _US_. *State or Province Name *The name of the state your server is in, such as _California_. *Locality Name *The city your server is in, such as _San Francisco_. *Organization Name *The name of your company or organization, such as _Example Corporation_. *Organizational Unit Name *The name of your division within the company, such as _Engineering_. *Common Name *The hostname of your webserver as used in the URL. For example, if browsers usually access the server as http://www.example.com/, then you should enter _www.example.com_ for this question.  Wildcards cannot generally be used in the hostname of certificates signed by CAs. *Email Address *The email address of the administrator for this webserver, such as _jcameron@example.com_. 
- When all the questions have been answered, the file csr.pem will be created in the current directory. This is your certificate signing request, which should be sent to the certificate authority for signing. 
- After your details have been verified and your money taken, the authority will send you back a signed certificate. It should be a text file that starts with the line -----BEGIN CERTIFICATE-----. Put it in the same directory as the private key, in a file named cert.pem. 

If you have over-written existing self-signed private key and certificate files, it is best to stop and re-start Apache to force the new ones to be used. You should now be able to connect to your webserver in SSL mode with no warning displayed in the browser.

### Viewing and editing directives 
The Apache Webserver module can be used to view and edit directives manually, instead of the usual method of editing them through the module's forms and pages. Manual editing is only recommended if you are familiar with the configuration file format, as no checking will be done to make sure that you have entered valid directives or parameters. However, it is often faster to configure the webserver in this way, especially if you are an experienced Apache administrator. 

On the options page for every virtual server, directory, URL location, filename and `.htaccess` file there is an icon labelled **Show Directives**. When clicked on, it will display all of the directives inside that virtual server or directory as shown in the screenshot below. Any directive that the module knows how to edit will be linked to the appropriate form for editing it, which will be one of those that can be reached by clicking on another icon on the virtual server or directory's options page. Next to each directive is the name of the file that it is located in and the line number in that file, so that you can use another program like vi or emacs to edit it manually if you wish. 

Below the list are two buttons, labelled **Manually edit directives** and **Edit Apache directive**. The first will take you to the editing form described in the next paragraph. The second will bring you to the form for editing the directive selected from the menu next to it, which will be one of those linked from an icon on the previous page. This can be useful if you know the name of the Apache directive that you want to use, but not where in Webmin it can be edited. 

<img src=http://www.webmin.com/screenshots/chapter29/figure9.gif><br>
Viewing directives for a directory

To directly edit the text of directives in a virtual server or directory, you can click on the **Edit Directives** icon located next to **Show Directives** on every options page. This will display a text box containing the exact text that appears in the Apache configuration file for that server or directory, including any comments and indentation. When the **Save** button is hit, any changes that you have made will be written back to the file without any verification. To make then active, you will need to click on the **Apply Changes** link on any of the module's pages. 

It is also possible to edit entire an Apache configuration file at once using the **Edit Config Files** icon on the module's main page. When clicked on, the complete contents of the primary configuration file (usually httpd.conf) will be displayed in a text box. Above it is a menu for selecting another file to edit, and a button labelled **Edit Directives in File** that will switch to the contents of the chosen file. Your Apache webserver may use several different files which Webmin normally hides from you. Only on this page can you see all files that the module has detected are being used, either by default (such as httpd.conf, srm.conf or access.conf) or through Include directives in the default configuration files. 

This page is the only place that you can view and manually edit directives that apply to all virtual servers, which are normally editable under the **Default Server** icon in the module. Because these default directives are usually split across multiple files, no **Show Directives** or **Edit Directives** icons appear on the options page for the default server. 

If you change any of the directives in the text box, click the **Save** button below it to have the configuration file re-written. No validation will be done, so be careful with your changes - a mistake with a container directive like `<Directory`< or `</IfModule>` may make it impossible for Webmin to parse some or all of the file. As usual, to make the changes active you will need to click on the **Apply Changes** link back on the module's main page. 

### Module access control 
You can use the [[Webmin Users]] module to give a user limited access to some modules. In the case of the Apache Webserver module, a Webmin user or group can be restricted so that he can only edit a subset of the available virtual servers. This can be very useful in a virtual hosting environment in which you want to give people the rights to edit the settings for their own servers, but not those belonging to everyone else. 

It is also possible to restrict the pages in the module that the user is allowed to edit, as some allow the setting of directives that could be used to subvert security on your system. For example, you would not want a user to be able to change the user and group that CGI programs on his virtual server run as. 

To set up the Apache module for a user so that he can only edit a few virtual servers, the steps to follow are: 
- In the Webmin Users module, click on Apache Webserver next to the name of a user who has been granted access to the module. 
- Change the **Can edit module configuration?** field to **No**, so that he cannot change the paths that the module uses for the webserver configuration files. 
- For the **Virtual servers this user can edit** field, choose the **Selected** option and select those servers that he should be allowed to manage from the list below. It is generally a bad idea to allow an untrusted user to edit the default server, as its configuration effects all other virtual servers. 
- Change the **Can edit global options?** field to **No**, so that he cannot change settings like the ports and addresses that Apache listens on. 
- Change the **Can create virtual servers?** field to **No**, so that he is not allowed to add new virtual hosts. 
- To stop him changing the user and group that CGI programs are run as, set the **Can change virtual server users?** field to **No**. This only really matters if you have `suexec` installed, as explained in the **Running CGI programs** section. 
- Unless you want him to be able to change the address and port that the virtual server accepts requests on, set the *Can change virtual server addresses?* field to **No**. If they are changed, they could interfere with other virtual servers. 
- If the **Can pipe logs to programs?** field is set to **Yes**, he will be able to configure the virtual server to log to a command which will be run as the user that Apache normally runs as (usually httpd). This may be a security risk on your system, so it is usually a good idea to set this field to **No**. 
- Change the **Can start and stop Apache?** field to **No**. He will be able to apply changes, but not shut down the entire webserver. 
- The **Limit files to directory** field controls where he can configure the server to write its logfiles to. Allowing them to be written anywhere may allow him to overwrite files, so it is best to set this to something under his home or document root directory, such as _/home/jcameron/logs_. 
- The **Directive types available** field determines which icons appear in the virtual server options page, and thus which kinds of directives he is allowed to edit. If you choose **All**, then all of the icons will be visible, along with the **Show Directives** and **Edit Directives** icons for manually editing the configuration files. If you choose **Selected** instead, only those pages chosen from the list below will be visible, and the manual editing icons will not be. It is usually a good idea to deny access to the User and Group and Log Files pages, and always good to prevent inexperienced users editing the configuration files manually. An error in the httpd.conf file might cause the entire webserver to stop working next time is it re-started. 
- Finally, click the **Save** button at the bottom of the page.  The restrictions will be applied to the user or group immediately. 

You should be aware that these restrictions will not stop a truly malicious user causing problems with your Apache configuration. It is quite possible to use the forms to introduce intentional syntax errors into the configuration files which could interfere with the proper working of the webserver. Fortunately, you can always track who has done what using the [[Webmin Actions Log]] module.

### See also
* [[Apache Basic Configuration]] 
* [[Name-Based Virtual Hosting]]
* [[Resolution for Virtual Hosts]]


[[Category:Apache]]
