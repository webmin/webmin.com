---
title: "Linux RAID"
date: 2023-09-14
weight: 805
---

### About
**RAID** (which stands for **Redundant Array of Inexpensive Disks**) is a method for combining multiple partitions on different disks into one large virtual device, also known as a RAID array. This has several advantages:
* You can create a single filesystem that is as big as all your existing hard disks, instead of needing to mount each one separately at a different mount point directory. 
* In most cases, reading to and writing from a RAID device is faster than accessing a single disk, because the data being read or written is spread across multiple drives.
* With the right configuration, data on a RAID device can survive even if any one of the hard disks fails. This is done by spreading redundant information across all drives, and comes at the cost of some disk space. 

The different types of RAID configuration are called _levels_. The levels supported by Linux are:
 - **Concatenated or Linear**

   In this mode, all the partitions in the RAID array are combined end-to-end into one large virtual device. Data written to the device will fill up the first disk, then go on to the second disk and so on. Linear mode does not generally make data access any faster, as all the blocks of a file being read or written are likely to be next to each other on the same disk. 
 - **RAID 0 or Striped**

   In striped mode, multiple partitions are also combined into one large device as in linear mode. However, data written to the array will be spread evenly across all disks, so that reading or writing a single large file is much faster.  Ideally, if you had 5 disks in your striped RAID array then accessing data would be 5 times faster. The only problem with this mode is that it does not deal well with disks that are not all the same size - any space on a disk that is larger than the rest will still be used, but only at its normal speed.  
 - **RAID 1 or Mirrored**

   In mirrored mode, every partition in the array contains exactly the same data. This means that in the event of a disk failure, your data is safe even if only one disk survives.  The down side is that under normal conditions most of the disks are wasted, and the usable space on the array is only as big as the smallest partition. Reading from a mirrored array is as fast as reading from a striped array, but writing will be as slow as the slowest disk due to the need to write all data to all disks simultaneously.
 - **RAID 4 or Parity**

   Parity mode is rarely used, as it offers no real advantage over RAID 5. It provides protection against a single disk failure and increases read speed but not write. A RAID 4 array can survive the loss of any one disk because it dedicates one disk to the storage of parity information, which can be used to re-construct data on other disks if one fails. Because all writes to the array cause a write to this disk, it becomes a bottleneck that slows done the entire array.
 - **RAID 5 or Redundant**

   This is the most useful RAID mode as it provides protection against a disk failure, increases read and write speeds, and combines multiple partitions into one large virtual device. A RAID 5 array can survive the loss of any one disk without the loss of all data, but at the expense of sacrificing some space on all the disks for storing redundant information.  It is faster than linear mode, but not quite as fast as striped mode due to the need to maintain redundancy. 

This page only covers the configuration software RAID on Linux. If your system has a separate hardware RAID controller card or external array, you will need special software to set it up. Virtual RAID devices on hardware controllers will show up in the [Partitions on Local Disks](/docs/modules/partitions-on-local-disks) module for partitioning, just like any real hard disk would. They will not be visible or configurable in the Linux RAID module.

### The module
This module allows you to create, format and delete RAID arrays on your Linux system. Like the other hard-disk related modules, it can be found under the Hardware category. When you enter the module, the main page will display existing RAID devices (if any) as shown below. 

[![](/images/docs/screenshots/modules/light/linux-raid.png "Linux RAID Screenshot")](/images/docs/screenshots/modules/light/linux-raid.png)

If Webmin detects that the commands that is uses to setup RAID are missing from your system, an error message will be displayed on the main page of the module instead. An error will be displayed if your Linux kernel has not been compiled with RAID support. In this case, you may have to re-compile the kernel with RAID supported turned on. 

Assuming all the necessary packages have been installed, adding a new RAID device is relatively easy.

[![](/images/docs/screenshots/modules/light/linux-raid-create.png "Create Linux RAID Screenshot")](/images/docs/screenshots/modules/light/linux-raid-create.png)

#### Add a new software RAID device

- In the [Partitions on Local Disks](/docs/modules/partitions-on-local-disks) module, create a partition on each disk that you want to use for RAID. Existing partitions can also be used, as long as they do not contain any data that you do not want overwritten. A disk that is partially used for some other purpose can also have a new partition added for RAID use, although this may negate some of the performance benefits. Every partition that is going to be part of the RAID array should have its type set to **Linux raid**. Unless you are using linear mode, all partitions should be the same size so that space on the larger partitions is not wasted. 
- At this point, it may be necessary to reboot your system. Some Linux kernels can only detect new partitions at boot time.  If you do not reboot and the partition is not detected, the creation of the RAID device will fail. 
- On the main page of the module, select the RAID level that you want to use and click the **Create RAID device of level button**.  This will take you to a form for selecting the partitions to be part of the array and other options, assuming Webmin detects at least one unused partition on your system. 
- The **Partitions in RAID** option will list all hard disk partitions that are not currently in use for possible inclusion in your RAID device. It will also list any other RAID devices that are not in use, allowing you to theoretically create an array that contains other arrays. Select all the partitions that you want to be part of your new RAID device. 
- The **Force initialization of RAID?** option should be set to **Yes** if any of the selected partitions have been used before for other purposes. Otherwise, the creation of the new array will fail if a filesystem is detected on any of the partitions. 
- Click the **Create** button to set up the new array. If everything is successful, you will be returned to the main page of the module, which should now include your new RAID device. 
- If you want to create a filesystem on the new device so that it can be mounted, click on its icon to go to the device status page. If the RAID device is to be used for virtual memory, as part of an LVM volume group or as part of another RAID array, then this is not necessary. 
- Select the type of filesystem you want to create from the menu at the bottom of the page, and click the **Create filesystem of type** button. 
- Select any options for the new filesystem, as explained in the **Creating a new filesystem** section. When done, click the **Create** button. A page showing the progress of the new filesystem's creation will be displayed, which can take some time for large arrays. 
- Assuming that the formatting is successful, you can now use the [Disk and Network Filesystems](/docs/modules/disk-and-network-filesystems) module to mount the new filesystem. 

Existing RAID devices that are not in use can be deleted or de-activated by clicking on their icon on the main page of the module, and pressing the **Delete** appropriate button. Deleting a device will cause any data stored on it to be lost forever. 

### `mdadm` command
In the Linux environment, RAID is primarily implemented using the `mdadm` utility, which manages "md" (multiple device) devices to create and manage software RAID arrays. Linux RAID usually keeps its configuration in `/etc/mdadm/mdadm.conf`. For example, a two-disk RAID1 configuration using partitions `/dev/sdb` and `/dev/sdc` the contents will look like:
```
 ARRAY /dev/md0 uuid=31b036a3:e57803f4:98017b49:bfe6d693
```

#### Key features

1. **Array Creation**: You can create arrays of various levels using `mdadm`.

2. **Monitoring**: It can monitor the health and status of arrays, alerting you if there are failures.

3. **Array Management**: `mdadm` allows you to grow an array, remove or add disks, and manage spare disks.

4. **Array Repair**: If a disk fails, you can replace it and rebuild the array using `mdadm`.

#### Basic `mdadm` commands

1. **Create a RAID array**:
   ```bash
   mdadm --create /dev/md0 --level=1 --raid-devices=2 /dev/sda1 /dev/sdb1
   ```

2. **Monitor RAID status**:
   ```bash
   cat /proc/mdstat
   ```

   Or:

   ```bash
   mdadm --detail /dev/md0
   ```

3. **Add a spare to an array**:
   ```bash
   mdadm /dev/md0 --add /dev/sdc1
   ```

4. **Remove a drive from an array**:
   ```bash
   mdadm /dev/md0 --fail /dev/sda1 --remove /dev/sda1
   ```

5. **Stop and delete a RAID array**:
   ```bash
   mdadm --stop /dev/md0
   mdadm --remove /dev/md0
   ```
It's important to note that while this kind of software RAID is versatile and doesn't require specialized hardware, it does impose additional CPU overhead. Hardware RAID solutions, on the other hand, use dedicated controllers to manage RAID operations but can be more expensive and less flexible than their software counterparts.

### See also
* [Logical Volume Management](/docs/modules/logical-volume-management)
* [Partitions on Local Disks](/docs/modules/partitions-on-local-disks)
