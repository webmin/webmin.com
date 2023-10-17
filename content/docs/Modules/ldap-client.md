---
title: "LDAP Client"
date: 2023-03-25
weight: 215
---

### About
This page explains why you would want to use LDAP, and how an LDAP Client system talks to an [LDAP Server](/docs/modules/ldap-server).

It allows you to select the [LDAP Server](/docs/modules/ldap-server) that this client system will contact to in order to fetch user and group information. The most important field is the LDAP server hostnames, into which you must enter the hostname or IP address of the LDAP server on your network. If you have more than one replicated server, they can all be entered here.

The _Login_ for non-root users and _Password_ for non-root users fields must be filled in with a username and password accepted by the LDAP server, respectively. The login will typically be an LDAP distinguished name, like `cn=Manager,dc=my-domain,dc=com`.

Because this login and password is visible to all Unix users on your system, it is typically set to that of a LDAP user with limited privileges (such as read-only access, and no ability to view passwords). Because passwords do need to be checked in some situations, the login for _root_ user and password for _root_ user fields should be set to an LDAP username and password who has read access to the entire LDAP server. This second password is stored in a file that is only readable by the _root_ user, and thus is secure from regular un-trusted Unix users. 

### Introduction to LDAP on Linux
LDAP is a network protocol that can be used to share databases of Unix users, groups and other information between multiple systems. Typically, a single LDAP server will store a databases of users, which is then queried by multiple clients. If these clients also mount home directories via [NFS Exports](/docs/modules/nfs-exports) and [Disk and Network Filesystems](/docs/modules/disk-and-network-filesystems), users will be able to login to any one of those systems with the same username and password. In many ways, LDAP is used similarly to NIS, covered on the [NIS Client and Server](/docs/modules/nis-client-and-server) page. Using a correctly configured LDAP Client it is possible to manage users and groups with [LDAP Users and Groups](/docs/modules/ldap-users-and-groups).

### The LDAP Client module

[![](/images/docs/screenshots/modules/light/ldap-client.png "LDAP Client Screenshot")](/images/docs/screenshots/modules/light/ldap-client.png)

This module allows you to configure a Linux system as a client of an existing LDAP server. For this to work, your system must first have the packages require to act as a client installed - specifically the NSS LDAP client library, and the PAM client library. The actual package names differ depending on your distribution, but on Debian and Ubuntu they are `libnss-ldap` and `libpam-ldap` respectively. On Red Hat and Fedora systems, they are both in the `nss_ldap` package. The simplest way to install these is to use the [Software Packages](/docs/modules/software-packages) module to install them directly from `apt` or `yum`.

### Selecting an LDAP server

Once you have the needed software installed, follow these steps to configure your system connect to the correct [LDAP Server](/docs/modules/ldap-server):

[![](/images/docs/screenshots/modules/light/ldap-client-configuration.png "LDAP Server Configuration Screenshot")](/images/docs/screenshots/modules/light/ldap-client-configuration.png)

- Open the LDAP Client module under System category. A page of icons as shown on the first screenshot will appear.
- Click on the _LDAP Server Configuration_ icon to bring up the form below.
- In the _LDAP server hostnames_ field, enter the hostname of your LDAP server. If you plan to use LDAP for address resolution (unlikely), enter the IP address instead.
- In the _Login for non-root users_ field, enter the DN of a user in the LDAP database who has permission to read all information about users, such as `cn=Manager,dc=my-domain,dc=com`.
- In the _Password for non-root users_ field, enter the password for the DN user above.
- Unless your LDAP server is running in SSL mode or on a custom port, all other options can be left as their defaults.
- Click the _Save_ button.

### Search bases
An LDAP database has a hierarchical structure, in many ways similar to Internet domain names. Each user or other object in the database has a full name (called the DN) that specifies its position in the hierarchy, like `cn=moroder, cn=Users,dc=my-domain,dc=com`. Typically, all the users in the database will be stored under the same parent DN, which would be `dc=my-domain,dc=com` in the previous example. 

By default, all searches will be done under the Global search base. However, because most servers put users and groups under different sub-trees, you will probably need to set the Base for Unix users and Base for Unix groups to the distinguished names for those sub-trees. The Base for Unix passwords should be set to the same DN as Base for Unix users, as password information is almost always stored with other user attributes. 

For your system to find users and groups in the LDAP database, it must know the DNs to search for them under. To configure this, do the following :
- Click on the **LDAP Search Bases** icon on the module's main page, which will bring up the form shown below.
- In the **Global search base** field, enter a DN like `dc=my-domain, dc=com` under which all your users and groups can be found.
- From the **Search depth** menu, select **Entire subtree**.
- Only if your DNs for users and groups are under completely different trees do you need to fill in the **Base for Unix users** and **Base for Unix groups** sections.
- Click **Save**.

### Selecting services
One more step is needed before your system will actually use LDAP to find users and groups - configuring the NSS (Name Service Switch) to use the LDAP datastore. To do this, following these steps :
- Click on the **Services Using LDAP** icon.
- In the table that appears, click on **Unix users**.
- Typically, only one data source will be selected initially - **Files**, which tells the system to use `/etc/passwd` to find user accounts. From the **Second data source** menu, select **LDAP**.
- Click **Save**. After returning to the services list, follow the same steps for the **Unix shadow passwords** and **Unix groups** services.

Once everything is configured, you can use the **Validate Configuration** button on the module's main page to check that everything is setup properly. If it reports any problems, you will need to re-try some of the steps above with different options.

### LDAP Browser
This page provides a simple way of exploring the data in the currently configured [LDAP Server](/docs/modules/ldap-server). It is useful for finding where in the hierarchy users and groups are stored, so that they can be correctly entered on the LDAP Search Bases page. 
