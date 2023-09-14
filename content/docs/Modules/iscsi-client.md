---
title: "iSCSI Client"
date: 2023-09-14
weight: 775
---

### The module
The **iSCSI Client** module allows you to access disk devices shared using the iSCSI protocol by other systems on your network. Once a device has been connected, it can be partitioned, mounted or used for [RAID](/docs/modules/linux-raid) or [LVM](/docs/modules/logical-volume-management) just like a locally attached disk.

[![](/images/docs/screenshots/modules/light/iscsi-client.png "iSCSI Client Screenshot")](/images/docs/screenshots/modules/light/iscsi-client.png)

If the iSCSI server you plan to access requires authentication, first visit the **Authentication Options** page to set a username and password to be used for subsequent connections.

To attach a new device, go to the **iSCSI Connections** page and enter the hostname or IP of the [iSCSI Server](/docs/modules/iscsi-server) in the form at the bottom of the page. Webmin will fetch available target devices from the specified server, and allow you to select one or all to connect. Assuming that connection completes successfully, a local SCSI device like `/dev/sdb` will be created and made available in the [Partitions on Local Disks](/docs/modules/partitions-on-local-disks) and  [Disk and Network Filesystems](/docs/modules/disk-and-network-filesystems) modules.

Existing connections can be removed by checking the box next to their entries on the **iSCSI Connections** page, and clicking the **Disconnect** button. Removing a connection that is currently mounted or used in a RAID or LVM volume is not recommended. 

### About iSCSI
iSCSI, which stands for Internet Small Computer Systems Interface, is a protocol that allows for the use of the SCSI protocol over TCP/IP networks. Essentially, it's a way of connecting storage devices over a network just like you would do with a local storage device.

When we talk about an iSCSI Client, we are referring to the iSCSI initiator. In the iSCSI world, the terms "initiator" and "target" are frequently used.

- **iSCSI Initiator (Client)**: This is the end that initiates the SCSI command. It's essentially the client side, which requests storage access from the target. The initiator could be a server or any device that needs to access block storage.

- **iSCSI Target**: This is the storage provider. The target has the actual storage devices and provides access to them for initiators over the iSCSI protocol.

#### How an iSCSI client works

1. **Setup**: To use iSCSI storage, an initiator first has to "discover" available iSCSI targets. This is typically done via a process called "discovery", where the client queries a target, often using a special IP address and port (by default, port _3260_).

2. **Authentication**: Once discovered, there usually is a login or authentication process. iSCSI supports CHAP (Challenge Handshake Authentication Protocol) to establish secure connections.

3. **LUN Mapping**: Once authenticated, the initiator gets access to specific logical unit numbers (LUNs) from the target. LUNs represent block storage devices or portions of them.

4. **Block Access**: After setup, the initiator sees the iSCSI LUN as if it's a local hard drive. The operating system can then format it, mount it, and use it just like a local storage device.

5. **Multipathing**: For redundancy and improved performance, iSCSI supports multiple paths to storage. If one path fails, another can take over.

#### Manually using iSCSI client on Linux

If you're working on a Linux system, the `open-iscsi` package provides tools to set up and manage iSCSI initiators. Here's a brief rundown:

1. **Install open-iscsi**: 
   ```
   sudo apt-get install open-iscsi  # For Debian/Ubuntu
   sudo dnf install iscsi-initiator-utils  # For CentOS/RedHat
   ```

2. **Discover targets**: 
   ```
   iscsiadm -m discovery -t st -p TARGET_IP
   ```

3. **Connect to a target**: 
   ```
   iscsiadm -m node -T target_name -p TARGET_IP -l
   ```

4. **Use the device**: Once connected, you'll have a new block device (like `/dev/sdb`). You can format it, mount it, and use it like any other disk.

5. **Disconnect from a target**: 
   ```
   iscsiadm -m node -T target_name -p TARGET_IP -u
   ```

It's worth noting that, while iSCSI can run over any TCP/IP network, for performance reasons, it's often run on dedicated network segments or VLANs, especially in enterprise environments. Proper configuration and network planning can ensure that iSCSI traffic doesn't overwhelm your main network and provides reliable, fast access to storage.