---
title: "Cluster Usermin Servers"
date: 2023-09-30
weight: 915
---

### The module
The **Cluster Usermin Servers** module allows you to manage modules, themes, users and groups across multiple Usermin servers from one interface. It combines functions from the [Usermin Configuration](/docs/modules/usermin-configuration) and [Webmin Users](/docs/modules/webmin-users) modules with the ability to carry out actions (such as installing a theme or creating a user) on multiple servers at once.

### Managed Servers
 
The top part of the main page under the **Managed Servers** heading lists other Webmin servers whose modules and users are being managed by this module. To add a server to this list, you must first add it to the [Webmin Servers Index](/docs/modules/webmin-servers-index) module, with a username and password specified to login to Webmin on that server. You can then select the server from the list next to the **Add Server** button.

When a server is added, it will be checked to make sure it is running a supported version of Usermin (0.985 or later) and that it has the necessary modules installed. Lists of all modules, themes, users and groups from the server will then be downloaded and cached locally.

Once there is at least once icon under **Managed Servers**, you can use the buttons under [Users and Groups](/docs/modules/users-and-groups) to edit, create or set ACLs on users and groups on any server. Users and groups that you create will be created on all managed servers, but those that already exist that are edited or deleted will only be changed on the servers they already exist on.

### Modules and Themes
 
In the middle of the page under **Modules and Themes** are buttons for editing modules and themes installed on any managed server, and a form for installing a new module or theme on all servers. 

 ### Upgrade Usermin
 
At the page bottom you can upgrade Usermin on all managed servers.
