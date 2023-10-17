---
title: "LDAP Users and Groups"
date: 2023-03-28
weight: 225
---

### Intro
The module **LDAP Users and Groups** facilitates the use of an [LDAP Server](/docs/modules/ldap-server) to store Unix [Users and Groups](/docs/modules/users-and-groups). 

* [Introduction to LDAP](/docs/introduction-to-ldap)
* [LDAP Server](/docs/modules/ldap-server)
* [LDAP Client](/docs/modules/ldap-client)

### Configuration
The most complex part of using this module is configuring it to talk to your [LDAP Server](/docs/modules/ldap-server). By default, it will attempt to auto-detect the settings by looking at the LDAP client settings on your system, documented on the [LDAP Client](/docs/modules/ldap-client) page. The LDAP Users and Groups module is located under _Un-used Modules_ in navigation menu as long as the LDAP Client is not detected.

If autodetection fails (perhaps because the LDAP server is not one of its own clients), you will need to configure the module manually as follows:
- On the module's main page, click on the **Module Config** link.
- In the **LDAP server host** field, enter the hostname of your LDAP server. If it is running on the same machine, enter `localhost`.
- If the LDAP server is using encryption, change the **LDAP server uses TLS?** option to **Yes**.
- In the **Bind to LDAP server as** field, enter the full DN of the administrative user for your LDAP server. This might be something like `cn=Manager,dc=my-domain,dc=com`.
- In the **Credentials for bind name above** field, enter the password for the above administrative DN.
- In the **Base for users** field, enter the DN under which all users can be found and which new users should be created. This is typically something like `dc=Users,dc=my-domain,dc=com` .
- Similarly, in the **Base for groups** field, enter the DN under which groups are found and which new groups should be created. This is typically something like `dc=Groups,dc=my-domain,dc=com` .
- Click the **Save** button.

Assuming that all your settings are correct, the module should now display a list of existing users and groups, with links to add new ones. From here on, it can be used exactly like the [Users and Groups](/docs/modules/users-and-groups) module.

### About
This module is essentially the same as the [Users and Groups](/docs/modules/users-and-groups) module. However, instead of modifying your systems `/etc/passwd` and `/etc/group` files, it talks to an [LDAP Server](/docs/modules/ldap-server) (such as OpenLDAP) and modifies users in the server's database. At the moment, it assumes that you already have an LDAP server setup with base DN's created for your users and groups.

#### Batch add
This form allows you to create, modify or delete many users at once from an uploaded or local text file. Each line in the file specifies one action to take, depending on its first field. The line formats are:

 ```
 create:username:passwd:uid:gid:realname:homedir:shell:min:max:warn:inactive:expire
 modify:oldusername:username:passwd:uid:gid:realname:homedir:shell:min:max:warn:inactive:expire
 delete:username
 ```

In create lines, if the `uid` field is left empty, Webmin will assign a UID automatically. If the `gid` field is empty, Webmin will create a new group with the same name as the user. The `username`, `homedir` and `shell` fields must be supplied for every user - all other fields are allowed to be empty. If the `passwd` field is blank, no password will be assigned for the user. If it contains just the letter `x`, the account will be locked. Otherwise, the text in the field will be taken as the cleartext password and encrypted.
In modify lines, an empty field will be taken to mean that the corresponding user attribute is not to be modified.
