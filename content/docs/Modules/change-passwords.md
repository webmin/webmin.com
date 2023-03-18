---
title: "Change Passwords"
date: 2023-03-18
weight: 175
---

### About
This page explains how to change Unix users' passwords, using the aptly-named **Change Passwords** module. 

### Introduction to Unix Passwords
On a typical Linux or Unix system, users' passwords are stored in the `/etc/shadow` file. They can be changed with the `passwd` command, or by editing that file directly.

In Webmin, you can use the [Users and Groups](/docs/modules/users-and-groups)  module to edit all details of a user, including password. However, if you just need to change passwords on a regular basis, or want to give a less-trusted admin permissions to only change passwords, the Users and Groups module is un-necessarily complex.

### The Change Passwords Module
This module can be found under the **System** category. When opened, it displays a list of the names of all local users on your system (shown below) for which the current user has permissions to make password changes, which will be all users by default. To change a user's password, do the following :
- Click on the user's name on the main menu.
- Fill in the **New password** field, and the **New password again** field.
- If you want the password change to be made in other modules which have separate password databases (usually a good idea), check the **Change password in other modules?** box.
- Click the **Change** button.

[![](/images/docs/screenshots/modules/light/change-passwords.png "Change Passwords Screenshot")](/images/docs/screenshots/modules/light/change-passwords.png)

### Module access control
As described on [Webmin Users](/docs/modules/webmin-users), it is possible to give a Webmin user access to only part of the functionality of a module. In the case of the Change Passwords module, you can limit which users passwords can be edited for. This is particularly useful if you are creating a Webmin login who should only be able to manage users within a certain group, but not touch critical system users like `root`.

You can also select if the Webmin user is required to know the old password for each user being changed, and if he is forced to enter the new password twice.
