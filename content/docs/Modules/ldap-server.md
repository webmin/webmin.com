---
title: "LDAP Server"
date: 2023-05-19
weight: 405
---

### About
An **LDAP Server** (_openldap-servers_) should be installed first using [Software Packages](/docs/modules/software-packages) (or command line of course).

This module allows you to configure the OpenLDAP directory server, and manage objects in its database. Assuming that you have the LDAP server installed on the same system as Webmin, the main page will show icons for editing the server configuration and managing the database. If the module is configured to talk to a remote LDAP server, it will instead only show icons for accessing the database.

You can control whether it uses a local or remote server by clicking on the Module Config link. Only when managing a local server will pages be available to edit configuration files and stop, start and restart the OpenLDAP server process.

If you are looking for a way to manage Unix users and groups in your LDAP database, try the [LDAP Users and Groups](/docs/modules/ldap-users-and-groups) module under the Webmin System category instead. To configure a system to fetch users and groups from a local or remote LDAP server, use the [LDAP Client](/docs/modules/ldap-client) module, also under the System category. 

[![](/images/docs/screenshots/modules/light/ldap-server.png "LDAP Server Screenshot")](/images/docs/screenshots/modules/light/ldap-server.png)

### Module Config
To be able to use the LDAP Server module, it has to be configured within Webmin. The **Module Config** link at the left top will do so.

The first thing to make sure of course is the location of the LDAP config files on the server.
* **OpenLDAP server configuration file or directory** which is likely to be set to the directory `/etc/openldap/slapd.d`
* **Command to start LDAP Server** may be set to `systemctl start slapd`
* **Command to stop LDAP Server** may be set to `systemctl stop slapd`
* **Command to apply configuration** may be set to `systemctl restart slapd`

Default contents of `/etc/openldap/ldap.conf` looks like:
```
 # LDAP Defaults
 # See ldap.conf(5) for details
 # This file should be world readable but not world writable.
 #BASE   dc=example,dc=com
 #URI    ldap://ldap.example.com ldap://ldap-master.example.com:666
 #SIZELIMIT      12
 #TIMELIMIT      15
 #DEREF          never
 
 TLS_CACERTDIR   /etc/openldap/certs
```

So effectively, `TLS_CACERTDIR` is the only parameter defined.

### OpenLDAP Server Configuration
This page allows you to configure global settings for your OpenLDAP server, such as the _root_ DN for the database, administration login, cache sizes and SSL certificates. The most commonly changed fields are :

- **Root DN for LDAP database** &mdash; This field is for entering the DN (distinguished name) under which all objects in your LDAP database must be stored. Typically it should be changed to something matching your company or organization's name, like `dc=yourcompany,dc=com`. But you are free to enter anything as long as it is correctly formatted.

- **Administration login DN** &mdash; This is effectively the _root_ user for your LDAP database. It should be a DN under your _root_ set in the above field, like `cn=Manager,dc=yourcompany,dc=com`.

- **Administration password** &mdash; This field shows the current password (possibly encrypted), and an option to enter a new one. If you change the password, the module will use it automatically when connecting to the database to make changes.
Any changes made on this page will not take effect until the **Apply Configuration** button is clicked on the module's main page.

If you want your LDAP server to accept TLS encrypted connections, you must first generate an SSL certificate and public key. This can be mostly automated by clicking the **Generate SSL Certificate** button at the bottom of the page.

### Manage Schema
The LDAP schema determines which object classes and attributes can be stored in your LDAP database. This page allows you to select which schema types are supported by your server, using the checkbox next to each schema file name. Once you have made changes, click Save to update the OpenLDAP configuration file, then apply configuration on the main page to activate them.

Be careful de-selecting existing schema files though, as this may break your LDAP server if objects already exist in the database using the attributes defined in those files. The core schema which contains the most basic LDAP classes cannot be de-selected.

The ordering of schemas is important, as later schemas can only refer to attributes defined previously. You can re-order the list using the up and down arrows on this page, but again this should be done with care for existing schemas in order to avoid breaking the LDAP database.

To see what classes and attributes a schema defines, click on it's View link. If you are familiar with the schema format and want to edit a file, click Edit instead. 

### LDAP Access Control
By default, an LDAP server allows any [LDAP Client](/docs/modules/ldap-client) that can connect to read all objects and attributes in the database. However, only the administrative user can perform updates. This may not be ideal for networks that have users with different levels of trust though, so OpenLDAP allows you to grant varying access levels to different users on different parts of the database.

This page lists all access controls rules currently defined, if any. To create a new one, click the Add a new access control rule link. To remove several rules at once, check the boxes next to them and hit the **Delete Selected Rules** button. To change the ordering of rules, use the up and down arrows on the right-hand side of the table.

As with most other LDAP server configuration changes, access control rules will not take effect until the **Apply Configuration** button is clicked on the module's main page.

### Browse Database

#### Configuration
If a necessary Perl module is missing you might get an error. After installing a heap of Perl modules (just click on automatically install) next error may appear. So enter a valid (local) domain and generate a SSL certificate using Webmin.

#### Browsing
This page allows you to navigate through the heirarchy of objects in your LDAP database, create and remove objects, and edit their attributes. The DN for the object being managed is always shown in the Browsing field - to quickly navigate to another object, enter a new DN and click Show. To move up the heirarchy, click on Browse Parent.

The rest of the page is divided into two tabs :

- **Child objects** &mdash; This table lists all objects under the current one. You can edit a sub-object by clicking on it's DN, or delete objects by checking them and hitting the **Remove Selected Children** button. To change the DN of a sub-object, click on the Rename link and enter a new DN in the field that appears. Clicking on Add a new sub-object will bring up a form for entering the details of a new empty object under the current one.

- **Object attributes** &mdash; This table lists all attributes of the current object. To edit the values of one, click on the Edit link on the right. To delete attributes, check the boxes next to them and then click the **Remove Selected Attributes** button. In both cases, the LDAP server will enforce restrictions on allowed and required attributes for the object's class.  A new attribute can be created by clicking the Add attribute to object link, which will display field for entering a name and value.
