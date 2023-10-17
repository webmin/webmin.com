---
title: "Disk Quotas"
date: 2023-03-21
weight: 185
---

### About

In this page, the use of disk quotas to limit the amount of space that individual users can consume is explained. 

### Introduction to disk quotas

On a system with multiple users, it is often necessary to limit how much disk space each user can take up. Quotas are the mechanism used by Unix systems to enforce limits on the amount of disk space and the number of files each user (and possibly group) can own. Each file counts towards the quota of the user who owns it, and if group quotas are being used the file counts towards the quotas of its group owner as well. Once a user exceeds his quota, he will not be able to create or enlarge any files until some are deleted. 

Quotas are setup on a per-filesystem basis, so that you can have different quotas for different directories on your system. However, this means that if two directories are both on the same filesystem then they must share the same quotas. Only Unix filesystems like `ext3`, `ext4` and `xfs` on local hard disks support quotas - although if your system NFS mounts a remote directory that has quotas enabled, they will be enforced on the server. 

Each user or group has two different quotas, one for blocks and one files. The blocks quota controls how much disk space the user can use, and is specified in disk blocks which are typically 1 kB in size. The files quota controls how many separate files the user can create, and is necessary because Unix filesystems often have a limit on how many files can exist at one time. Without a files quota, a user could create millions of empty files until the filesystems limit was reached, and so prevent other users from creating any files at all. 

Both the blocks and files quotas have what are called soft and hard limits. The soft limit is the point at which the user is warned that he is close to exceeding his quota, but is still allowed to continue using up disk space. The hard limit is the number of blocks or files that can never be exceeded, and any attempt to do so will result in an error. Both limits are optional, so that you can have only a hard limit and give the user no warning that he is approaching his quota, or only a soft limit and so only warn users of quota violations instead of actually enforcing them. 

If a user stays above his soft limit but below the hard limit for more than a set period of time (called the grace period), the system will treat him as though he had exceeded the hard limit and prevent the creation or enlargement of any files. Only when the user deletes enough files to drop his usage below the soft limit will it revert to just a warning level. 

At the shell prompt, quotas can be viewed using the repquota and quota commands, and edited using the edquota command. The files aquota.user and aquota.group in the mount directory of each filesystem contain the actual records of how much disk space is allocated to each user or group, and how much they are currently using. When displaying and setting quotas, Webmin calls the quota commands and parses their output. It does not use system calls or attempt to edit the quota files directly. 

### The disk quotas module
Webmin's Disk Quotas module is found under the System category. When you enter the module, a list of all filesystems on which quotas could be or are active is displayed, along with their current active status and whether quotas are configured for users, groups or both. See the screenshot below for an example. 

[![](/images/docs/screenshots/modules/light/disk-quotas.png "Disk Quotas Screenshot")](/images/docs/screenshots/modules/light/disk-quotas.png)

On most systems that have never used quotas before, none of your filesystems will be listed. This is because quotas must first be enabled in the [Disk and Network Filesystems](/docs/modules/disk-and-network-filesystems) module.

If your system does not have the quota manipulation commands installed, Webmin will display an error message on the main page of the module and you will not be able to activate or edit any quotas. All Linux distributions should have a package on their CD or website containing the quota commands though. 

### Enabling quotas for a filesystem
If the main page of the module shows **User Quotas Active** (or *Group Quotas Active*) under the **Status** column for the filesystem, then quotas have already been enabled. If not, to configure and turn on quotas for an `ext3` or `ext4` filesystem, follow these steps: 

- If the filesystem already appears in the list on the main page of the module, quotas have already been configured and you can skip to step 5. 
- Go to the Disk and Network Filesystems module and click on the filesystem you want to enable quotas on. 
- Change the **Use Quotas?** option to either **User only**, _Group only_ or **User and Group** depending on which kinds of quota you want to enforce. 
- Click the **Save** button. If an error saying that the filesystem is already in use appears, just click the *Apply to Permanent List* button. Quotas can still be enabled without needing to reboot, and will be automatically re-enabled when the system is next rebooted. 
- Back in the Disk Quotas module, your filesystem should now be visible. Click on the **Enable Quotas** link to activate quotas now. 
- Assuming all goes well, after a short delay the browser will return to the list of quotas and the **Status** column will have changed to **User Quotas Active**. 

For an xfs filesystem, the procedure is slightly different. You must first enable user and/or group quotas in the Disk and Network Filesystems module, and then either reboot or un-mount and re-mount the filesystem. Quotas will be automatically activated at mount time, so there is no need to enable them in the Disk Quotas module. 

### Disabling quotas for a filesystem
To permanently deactivate quotas for an `ext3` or `ext4` filesystem, follow these steps : 

- On the main page of the module, click on **Disable Quotas** under the **Action** column for the filesystem. 
- To prevent quotas from being re-activated at boot time, go to the Disk and Network Filesystems module and click on the filesystem from the list. 
- Change the **Use Quotas?** option to **No**. 
- Click the **Save** button. If an error saying that the filesystem is already in use appears, just click the _Apply to Permanent List_ button. 

For an `xfs` filesystem, step 1 is not necessary (or possible) as quotas are only enabled when the filesystem is mounted. However, in step 4 when saving the quota settings for the filesystem it must be un-mounted and re-mounted cleanly for the deactivation to take effect. 

### Setting quotas for a user or group
The quotas for a user or group can be set or changed at any time on a filesystem that currently has quotas of the correct type enabled. By default, any user or group whose quotas have not yet been set will have no limits at all, and thus be able to use up all the disk space on your system. 

[![](/images/docs/screenshots/modules/light/disk-quotas-edit.png "Edit Disk Quotas Screenshot")](/images/docs/screenshots/modules/light/disk-quotas-edit.png)

To set quotas for a user, follow these steps : 
- From the list of filesystems on the main page of the module, click on the mount point of one that you want to edit quotas on. This will take you to a page listing the quotas for all users on the filesystem, as shown in the first image below. 
- Click on the name of the user you want to edit under the User column, or enter the username into the **Edit Quota For** field and press the button. Both will take you to a form containing the user's current quota settings and blocks and files used, as shown in the second image below. 
- Set the **Soft Block Limit** and **Hard Block Limit** fields to the number of blocks that you want to limit the user to, or select **Unlimited** to not impose any limit. On most filesystems each block will be 1 kB in size, but this not necessarily always the case. 
- Set the **Soft File Limit** and **Hard File Limit** fields to the number of files that you want to limit the user to owning. 
- Click the **Update** button. The new quota settings will take effect immediately. 

The procedure for setting group quotas is almost identical. If a filesystem has both user and group quotas enable, the main page of the module will have two links for each filesystem, one for users and one for groups. 

### Copying quotas to multiple users
If you have a large number of users on your system and want them to all have the same quotas, there is an easier solution that setting each user individually. Instead, you can set the quotas that you want for one user and duplicate his settings to as many other users as you want. The only down side is that quotas are copied on all filesystems, not just a single one. 

The steps to follow to copy quotas like this are : 
- Set the quotas for a single _source_ user, as explained in the **Setting quotas for a user or group** section. 
- On the main page of the module, enter the username of the _source_ user into the **Edit User Quotas** page and press the button. 
- On the page that appears listing the user's quotas on all filesystems, click the **Copy Quotas** button. This will take you to a form for choosing which users the quota settings will be copied to. 
- Choose which _target_ users to copy quotas to by selecting one of the options on the form: 
  - *All users on your system* - Every single user on your system will have the same quota settings.  You may want to set quotas for root back to unlimited after doing this.
  - *Selected users* - Only the users entered into the field next to this option will have their quotas set.
  - *Members of selected groups* - All primary and secondary members of the groups entered into the field next to this option will have their quotas set. 
- Click the **Copy** button to copy the quotas for the _source_ user on all filesystems to all _target_ users. 

If you are using group quotas, it is also possible to copy the settings for one group to multiple other groups. However, the options for choosing which groups to copy to are slightly different. The **Selected users** option is replaced with **Selected groups**, and the **Members of selected groups** option is replaced with **Groups containing users**. The latter option will copy to all groups that have one of the entered users as a member. 

### Setting grace times
When a user exceeds his soft blocks or files limit, he will still be able to use up disk space up to the hard limit for a certain period of time - the grace period. There are separate periods for the blocks quotas and the files quota on each filesystem. Once the period has expired, it will be as though he had reached the hard limit. No more blocks of disk space can be used if it was the blocks quota that was exceeded, or no more files can be created if it was the files quota. Grace periods can also be set for group quotas, and if a filesystem has both user and group quotas enabled each has their own separate periods. 

To set the grace periods for all users on a particular filesystem, follow these steps : 
- Click on the mount point from the list of filesystems on the main page of the module. This will take you to the list of all users and their quotas. 
- Click the **Edit Grace Times** button, which will bring up a form for editing the periods. 
- For both the blocks and files quotas, select the period and units. When done, click the **Update** button to save your settings and put the grace periods into immediate effect.  

The process for editing the group grace times on a filesystem is almost exactly the same. If a filesystem has both user and group quotas enable, the main page of the module will have two links for each filesystem, one for users and one for groups. 

### Setting default quotas for new users
If a filesystem has user quotas enabled, you can configure the blocks and files quotas that will be assigned to new Unix users created using Webmin's Users and Groups module. As explained in chapter 4, any time a user is added other modules will be notified so that they can perform additional actions. In the case of the Disk Quotas module, that action can be the setting of an initial quota for the user on multiple filesystems. 

To set the default quota for new users on a particular filesystem, the steps to follow are : 
- On the module's main page, click on the mount point of the filesystem that you want to set the default for. This will take you to the list of users and their quotas, shown above. 
- At the very bottom of the page is a form in which you can set the default hard and soft blocks and files quotas. When you are done filling it in, click the **Apply** button. 

There are no similar defaults for newly created Unix groups. 

### Other operating systems
As disk quotas work in a very similar way across all versions of Unix, this module appears almost identical on all supported operating systems. The biggest difference is that some Unix variants do not support group quotas. Some (like Solaris) do not need quotas to be enabled in the Disk and Network Filesystems module before activating them in this module. If there is a quotas option for the filesystem, it determines whether they are enabled at boot time or not. 

### Configuring the Disk Quotas module
The Disk Quotas module has only a few options that can be changed to configure its user interface. To edit them, click on the *Module Config* link on the main page, which will take you to the standard configuration editing page.

### Module access control
As described in [Webmin Users](/docs/modules/webmin-users), it is possible to give a Webmin user access to only part of the functionality of a module. In the case of the Disk Quotas module, you can limit which users and groups quotas can be edited for, and on which filesystems they can be edited. This can be useful if there is a person in your organization who should be allowed to edit some or all quotas, but not perform any other administration tasks. 

Assuming you have already created a user with access to the module, the steps to follow to set this up are:

- In the Webmin Users module, click on Disk Quotas next to the name of the user that you want to restrict. 
- Set the **Can edit module configuration?** field to **No**, so that the user cannot change the commands used for setting and getting quotas. 
- To restrict the filesystems on which quotas can be assigned, change the **Filesystems this user can edit** field to **Selected** and choose them from the list below. 
- Set the **Can enable and disable quotas?** field to **No**, unless the user is responsible for all user and group quotas on the allowed filesystems. Otherwise he would be able to turn off quotas for users that he is not allowed to edit. 
- Change the **Can configure quotas for new users?** field to **No**, so that he cannot change the quotas that are assigned to users created in the Users and Groups module. Only if the Webmin user is allowed to edit all quotas on a filesystem should this be left set to **Yes**. 
- If you do not want this Webmin user to change grace times, set the **Can edit user grace times?** and *Can edit group grace times?* fields to **No**. 
- To stop the user from handing out massive disk quotas, set the **Maximum grantable block quota** and *Maximum grantable file quota* fields to the maximum blocks and files that can be granted to any one user, respectively. There is nothing to stop him granting quotas to multiple users that add up to more than these limits though. 
- To restrict the Unix users whose quotas can be edited, change the U*sers this user can edit quotas for* field from **All users** to one of the other options. The most useful is *Users with UID in range*, which restricts access to those users whose UIDs lie within the minimum and maximum numbers entered into the fields next to it. It is usually a bad idea to allow the editing of the root user's quotas, as setting it too low may prevent the system from creating important PID, mail and lock files.  You can prevent this by selecting **All except users** and entering root into the field next to it, assuming that you want to allow the editing of every other user. To stop the Webmin user editing any user quotas at all, select the **Only users** option and enter nothing into the field next to it. 
- Similarly, you can limit the groups whose quotas can be edited by changing the **Groups this user can edit quotas for** field.  Naturally, this only has an effect on filesystems that have group quotas enabled. 
- When done, click the **Save** button to have the restrictions applied immediately.
