---
title: "Partitions on Local Disks"
date: 2023-09-14
weight: 825
---

### About
This page explains how hard disks are partitioned and how filesystems are created on them. It also covers the use of [Linux RAID](/docs/modules/linux-raid) and [Logical Volume Management](/docs/modules/logical-volume-management) (LVM) to combine multiple partitions into one large filesystem. 

### Intro
All hard disks used by Linux and other operating systems on PC hardware are divided into one or more non-overlapping regions called partitions. Sometimes an entire hard disk will be taken up by one partition, but usually your system will have at least two partitions on the primary disk - one for the _root_ filesystem, and one for virtual memory (also known an _swap_ space).

Every partition has a type which identifies the kind of data that it stores. There is a type for Linux filesystems, a type for Linux swap space, a type for Windows filesystems and many more. Almost every kind of operating system that runs on PC hardware has its own partition type for its own filesystems. However, when adding new partitions on your system you will very rarely use any types other than those specifically for Linux. 

On PC systems, each hard disk can only contain four _primary_ partitions. Because this is often not enough, it is possible for one of those four to be a special _extended_ partition that can contain an unlimited number of _logical_ partitions. If you make use of an extended partition, there is effectively no limited on the number that your hard disk can contain. 

Every hard disk is divided into equal sized cylinders, which represent concentric circles on the surface of the disk. Larger hard disks generally have more cylinders, but due to different drive geometries this is not always the case. Each partition has a starting and ending cylinder, and occupies all the space on the disk between them. 

Be very careful when changing or re-formatting any existing partitions on your system. Because they contain filesystem data, deleting or modifying one could wipe out all your files or make your system unbootable. Webmin tries to prevent this, but it is still possible to do a lot of damage with only a few mouse clicks! Normally you should only need to create or edit partitions when adding a new hard disk to your system. 

### The module
All disk partition management in Webmin is done using the Partitions on Local Disks module, which can be found under the Hardware category. When you enter the module, a page showing all hard disks and partitions found on your system will be displayed, as shown in the screenshot below.

[![](/images/docs/screenshots/modules/light/partitions-on-local-disks.png "Partitions on Local Disks Screenshot")](/images/docs/screenshots/modules/light/partitions-on-local-disks.png)

All IDE and SCSI disks are shown, along with their manufacturers and model numbers. If your system has configured RAID disks, the RAID devices will be shown instead of the actual underlying hard disks that make them up. However, disks and partitions used for software RAID will be shown, but not the logical or virtual drives that they have been combined into. 

For each disk, all partitions on it will be listed showing their type, start and end cylinders and current mount point or other use. If the partition contains a filesystem, the amount of free disk space will be displayed as well. If a partition is being used for software RAID, their raid device that it is part of will be shown. Similarly, if a partitions is part of an LVM volume group the group name will be displayed under the **Used by** column. 

[![](/images/docs/screenshots/modules/light/partitions-on-local-disks-edit-partitions.png "Edit Disk Partitions: Partitions on Local Disks Screenshot")](/images/docs/screenshots/modules/light/partitions-on-local-disks-edit-partitions.png)

### Adding and formatting a new partition
If you have just added a new hard disk to your system and want to make use of it under Linux, you must first partition it and then format the partition as the filesystem type of your choice. The steps to follow the do this are: 
- In the main page of the Partitions on Local Disks module, locate your new hard disk. It will probably not have any partitions on it, but it may have been set up with one large partition by the manufacturer. 
- Assuming no partitions exist yet, click the **Add primary partition** link next to your new hard disk. This will take you to the creation form for entering the details of the new partition. 
- If the new partition is to take up the entire hard disk, the **Extent** fields can be left unchanged as they are always automatically filled in to cover all the free space left on the disk. However, if you want to create more than one partition, adjust the extent so that it takes up only part of the disk. 
- If this partition is to be for an `ext2`, `ext3`, `ext4`, `reiserfs` or `xfs` filesystem, set the **Type** field to **Linux**. If it is to be for virtual memory, set the **Type** to **Linux swap**. If it is for software RAID, set the **Type** to **Linux raid**. If it is for LVM, set the **Type** to **Linux ext**; it will become available as physical disk in [Logical Volume Management](/docs/modules/logical-volume-management). If you are creating the filesystem for some other operating system to use, set the **Type** field to whatever is appropriate for that OS. 
- Click the **Create** button to add the partition. Assuming no errors were detected, you will be returned to the list of disks and partitions on the main page of the module, which should now include the new partition. 
- If the new partition is to have a Linux filesystem created on it, you must follow the steps in the [Creating a new filesystem](#creating-a-new-filesystem) section below. Virtual memory partitions can be added immediately in the [Disk and Network Filesystems](/docs/modules/disk-and-network-filesystems) module. Partitions for use with RAID can be also be used immediately in the Linux RAID module, but you must have created all the partitions that will make up a RAID device before creating it. Partitions that will be part of an LVM volume group can be added immediately using the [Logical Volume Management](/docs/modules/logical-volume-management) module.

### Creating a new filesystem
Before a newly created partition can be used to store files, it must first have a filesystem created on it. Filesystems can also be created on partitions that have been used before, perhaps by another operating system. However, be very careful when formatting a partition with a new filesystem, as any files that it used to contain will be lost forever. 

The steps to follow to create a new filesystem are: 
- On the main page of the module, click on the number of the partition that you want to re-format. This will take you to the partition editing form, as shown in the screenshot below. 
- Near the bottom of the page is a button labeled **Create Filesystem** with a menu of supported filesystem types next to it. See the section on **A comparison of filesystem types** in [Disk and Network Filesystems](/docs/modules/disk-and-network-filesystems) for information on the pluses and minuses of each type. When you have made a selection, click the button which will take you to a form for selecting options for the new filesystem. 
- Depending on the type of filesystem chosen, different creation options are available. For `ext2` or `ext3` filesystems, the only one that you might want to change is **Reserved blocks** which determines the amount of disk space reserved for the exclusive use of _root_ user. The default is 5%, which can be rather wasteful on the large disks.
- Click the **Create Filesystem** button to format the partition.  A page showing the progress of the new filesystem's creation will be displayed, which can take some time for large hard disks. 
- Assuming that the formatting is successful, you can now use the [Disk and Network Filesystems](/docs/modules/disk-and-network-filesystems) module to mount the new filesystem. 

[![](/images/docs/screenshots/modules/light/partitions-on-local-disks-edit-partition.png "Edit Partition: Partitions on Local Disks Screenshot")](/images/docs/screenshots/modules/light/partitions-on-local-disks-edit-partition.png)

### Partition labels 
Labels are a feature of newer versions of Linux that allow a partition to be identified in the <tt>/etc/fstab</tt> file by a short name, rather than its IDE or SCSI device file such as `/dev/hdb3`. Device files can change if you change an IDE drive from one controller to another, change the ID of a SCSI drive, or even add a new SCSI drive with an ID lower than an existing drive. Any of these changes could cause a partition to fail to mount at boot time, possibly making your system un-bootable. However, partitions with labels can be referred to by label name, which does not change even if the device file does. 

Some newer Linux distributions use labels by default for filesystems that you create at install time. If you use the [Disk and Network Filesystems](/docs/modules/disk-and-network-filesystems) module on such a system, the **Location** column for these filesystems will be something like **"Partition labeled _/home_"**. 

Only partitions with `ext2`, `ext3` or `xfs` filesystems on them can be labeled, as the label is stored in the filesystem rather than the partition table. To label an existing filesystem, follow these steps: 
- On the main page of the module, click on the number of the partition that you want to label. This will take you to the partition editing form, as shown in the screenshot above. 
- Assuming the partition is not currently in use, you will be able to enter the new label into the **Partition label** field.  It must be at most 16 characters long - for example `/home` or `root`. 
- After you have entered the label, click the **Save** button.  It will be stored in the filesystem, and the browser will return to the module's main page. 
- At this point, the [Disk and Network Filesystems](/docs/modules/disk-and-network-filesystems) module can be used to mount the labeled filesystem by label name.

### Deleting or changing a partition
Once a partition has been created, its size or position on the hard disk cannot be changed using Webmin. The only things you can do are change its type, or delete it. However, neither are possible if a filesystem on the partition is listed in the [Disk and Network Filesystems](/docs/modules/disk-and-network-filesystems) module - that is, if it is currently mounted or recorded for mounting at boot time. 

Changing the type of a partition will not harm the data on it in any way. However, it may make it unusable by some operating systems or for some purposes. The steps to make a change are: 
- On the main page of the module, click on the number of the partition that you want to change. This will take you to the partition editing form. 
- As long as the partition is not in use, you will be able to select a new type from the **Type** field and click the **Save** button. 
- Once the change has been made, the browser will return to the list of disks and partitions. 

Deleting a partition should be done only if you are sure that you want to lose all the data on it. However, it is the only way to make some changes to the partition table in Webmin, such as replacing two small partitions with one larger one. If you are sure that you want to go ahead with the deletion, the process is as follows: 
- On the main page of the module, click on the number of the partition that you want to delete, which will take you to the partition editing form. 
- Click the **Delete** button, which will only appear if the partition is not in use. This will take you to a page for confirming the deletion. 
- If you are really sure you want to go ahead, click the **Delete Now** button. One the job is done, you will be returned to the main page of the module. 
Theoretically, it is possible to restore a deleted partition by creating a new one with the exact same size and extents. 

### Module access control
It is possible to limit the access that a Webmin user has to certain disks in the Partitions on Local Disks module. This could be useful if your system has a removable drive (like a Zip or Jaz drive) that you want users to be allowed to partition with Webmin, while preventing them from re-formatting the primary hard disk. 

Once a user has been granted access to the module, to restrict the disks that he can access, the steps to follow are: 
- In the [Webmin Users](/docs/modules/webmin-users) module, click on Partitions on Local Disks next to his username. This will bring up the module access control form. 
- Change the **Disks this user can partition and format** field to **Selected**, and choose the disks that the user should be allowed to partition and create filesystems on from the list below. 
- To stop the user seeing disks on the main page that he cannot manage, change the **Can view non-editable disks?** option to **No**. 
- Finally, click the **Save** button to activate the access control restrictions. 

Just being able to partition and format a disk is not particularly useful, unless it can be mounted as well. The [Disk and Network Filesystems](/docs/modules/disk-and-network-filesystems) module has no support for access control restrictions, because giving a user the rights to mount a filesystem would open up several security holes. A better solution is to set up an automounter filesystem so that removable devices can be mounted by just entering a special mount-point directory. 

### Other operating systems
Solaris is the only other operating system that has a module for managing disks and partitions. However, there are several differences between the two: 

Every Solaris disk has exactly 8 partitions, some of which may have no extent if they are not being used. Partitions never need to be created or deleted, and there are no extended or logical partitions. 
- When editing a Solaris partition, its extents can be changed without needing to delete and re-create it. However, this will almost certainly result in the loss of data on the partition.
- Every partition has a type that indicates what it is used for.  The _root_ type is usually for the _root_ directory filesystem, the _swap_ type is for virtual memory, the _usr_ type is for other filesystems and the _unassigned_ type is for empty partitions.
- Each partition has two flags - **Mountable** and **Writable**, which indicate whether it can be mounted or written to respectively.
- The only filesystem supported on Solaris partitions is `ufs`, the native Unix filesystem type.
- Partition labeling is not supported on Solaris.
- When editing the module access control, there is no **Can view non-editable disks?** option. 
The RAID and LVM modules explained below are not available on Solaris or any other operating system. 

### Partitioning with CLI examples
In Linux, partitioning can be performed using a range of tools, but one of the most traditional and well-known is `fdisk`.

#### Using `fdisk` to partition a disk

1. **List all disks and partitions**

   ```bash
   sudo fdisk -l
   ```

2. **Start fdisk for a specific disk** (e.g., `/dev/sda`)

   ```bash
   sudo fdisk /dev/sda
   ```

   This command will start the `fdisk` interactive menu for the specified disk.

3. **Print the partition table**

   In the `fdisk` prompt:
   ```bash
   p
   ```

4. **Delete a partition**

   If you need to delete an existing partition:

   ```bash
   d
   ```

   Follow the prompts to choose which partition to delete.

5. **Create a new partition**

   ```bash
   n
   ```

   This will guide you through a series of questions:

   - **Partition type**: Primary or Extended. Most cases will use Primary.
   - **Partition number**: You can choose a number or use the default.
   - **First and last sectors**: This determines the size of the partition. You can accept the defaults for the full available space or specify a size like `+20G` for a 20 GB partition.

6. **Change partition type**

   Sometimes you might want to change the type of a partition to, for example, a Linux swap.

   ```bash
   t
   ```

   You'll be prompted for a hexadecimal code. The list of codes can be displayed with the `L` command.

7. **Save changes**

   Once you've made all your desired changes:

   ```bash
   w
   ```

   This writes the changes to the disk. Beware! This can delete data or make systems unbootable if not done correctly.

After creating a new partition, you'll want to create a filesystem on it:

```bash
sudo mkfs.ext4 /dev/sda1
```

Replace `/dev/sda1` with the correct partition name.


#### Using `parted` to partition a disk
The more modern partitioning tool called `parted` that's used especially for larger drives (those above 2TB) because of its support for the GPT (GUID Partition Table) format, in addition to the older MBR.

1. **List all disks and partitions**

   ```bash
   sudo parted -l
   ```

2. **Select a disk for further operations**

   ```bash
   sudo parted /dev/sda
   ```

   This command will start `parted` in interactive mode for the specified disk (`/dev/sda`).

3. **Print the partition table**

   In the `parted` prompt:

   ```bash
   print
   ```

4. **Create a new partition**

   You can create a new partition by specifying its type (primary, extended, or logical), starting position, and ending position.

   ```bash
   mkpart primary ext4 1GiB 5GiB
   ```

   This command creates a primary partition with the `ext4` filesystem type that starts at 1GiB and ends at 5GiB on the disk.

5. **Delete a partition**

   ```bash
   rm 1
   ```

   This deletes the first partition. Replace `1` with the appropriate partition number.

6. **Resize a partition**

   ```bash
   resizepart 2 10GiB
   ```

   This resizes the second partition to end at 10GiB. The starting point remains unchanged.

7. **Set partition flags**

   For instance, if you need to mark a partition as bootable:

   ```bash
   set 1 boot on
   ```

8. **Change disk partition table type**

   If you need to switch between MBR and GPT:

   ```bash
   mklabel gpt
   ```

   This command changes the partition table to GPT. Use with caution, as this erases all partitions!

9. **Exit `parted`**

   ```bash
   quit
   ```

##### Tips when using `parted`:

1. **Specify filesystem**: When creating a partition in `parted`, you're specifying the intended filesystem (like `ext4`), but it doesn't format the partition. You'll still need to format it after exiting `parted`:

   ```bash
   sudo mkfs.ext4 /dev/sda1
   ```

2. **Alignment**: `parted` includes an option to align partitions optimally, which is especially useful for SSDs. When creating or resizing partitions, use:

   ```bash
   align optimal
   ```

3. **Safety**: `parted` executes changes immediately upon command issuance. Unlike `fdisk`, which writes changes after the `w` command, `parted` doesn't provide a "staging" area. So, be cautious and double-check commands before executing them.

4. **Help**: If you're unsure about a command while in `parted`, type `help` to see a list of available commands.

Both `fdisk` and `parted` are powerful tools. The one you choose to use might depend on the specific task, your personal preference, or the size of the drive you're working with. Always make sure you understand the commands you're executing, especially when working with disk partitions, as they can lead to data loss if used incorrectly.

#### General tips for partitioning

1. Be very careful when partitioning, especially when deleting partitions. You can lose data.
2. Always back up important data before making changes to disk partitions.
3. After creating a partition, remember to format it using a filesystem (e.g., `mkfs.ext4 /dev/sda1`).
4. If partitioning a disk for booting, ensure you understand boot and EFI partitions.
5. For an in-depth understanding of these tools, their features, and additional options, it's highly recommended to consult the manual pages. These pages provide a comprehensive overview and are a valuable resource when working with Linux utilities.

    To access the manual page for `fdisk`:

    ```bash
    man fdisk
    ```

    For `parted`:

    ```bash
    man parted
    ```

    The `man` command will display detailed documentation, allowing you to explore the full range of capabilities of each tool. It's a good habit to reference the manual pages when unsure about command usage or when seeking more information about a particular feature.

### See also
* [Disk and Network Filesystems](/docs/modules/disk-and-network-filesystems)
* [Linux RAID](/docs/modules/linux-raid)
* [Logical Volume Management](/docs/modules/logical-volume-management)
