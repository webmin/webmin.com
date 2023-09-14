---
title: "iSCSI Server"
date: 2023-09-14
weight: 785
---

### The module
The **iSCSI Server** module allows you to export disk devices to other systems over the network using the iSCSI protocol. Configuration is done primarily by creating three types of objects described below. You can also edit settings that apply to the entire iSCSI server using the **iSCSI Server Options** page.

#### Devices to Share
Each of these is a partition, RAID device, logical volume or file that can be fully or partially exported via iSCSI. Shared devices should not be used for any other purpose on this system.

#### Device Combinations
These allow you to combine multiple Devices to share into a larger device for export. Devices can either be joined in RAID0-style to add their sizes together, or mirrored RAID1-style for redundancy and improved read performance.

#### Sharing Targets
Each entry in this list exports either a device or device combination to all systems on a selected network. A share can be either read-only or read/write.

At the bottom of the module's main page are buttons to stop, start and restart the iSCSI server. Configuration changes will not be applied until the server is restarted. 

### About iSCSI Server
When we talk about the iSCSI Server, we're usually referring to the "iSCSI target". The iSCSI protocol works in an initiator-target model.

- **iSCSI initiator (client)**: Initiates the SCSI command. This is typically the consumer of the storage, like a server needing access to disk.

- **iSCSI target (server)**: Provides the storage to the initiator. This can be a dedicated storage device, a SAN appliance, or even software running on a general-purpose server.

#### iSCSI target (server)

The iSCSI target is the storage provider in the iSCSI setup. It's the component that exposes block-level storage devices, or LUNs (Logical Unit Numbers), over a network to the iSCSI initiator (client).

#### Functionality of the iSCSI target

1. **Expose LUNs**: The primary function of the iSCSI target is to expose storage, usually in the form of block devices or logical unit numbers (LUNs), over the network. Each LUN corresponds to a block device, which could be an entire disk, a partition, or even a file-based image.

2. **Handle iSCSI sessions**: The target manages iSCSI sessions, which are established when an initiator logs in. A session represents a connection between an initiator and a target.

3. **Authentication**: iSCSI targets often support CHAP (Challenge Handshake Authentication Protocol) to authenticate initiators. This ensures that only authorized clients can access the storage.

4. **Data transfer**: Once a session is established, the iSCSI target handles the transfer of SCSI commands, data, and status information between the initiator and itself.

5. **Multipathing and failover**: Advanced iSCSI targets support multipathing, allowing multiple concurrent connections to the same LUN for redundancy and load balancing.

#### Setting up an iSCSI target on Linux:

If you're using Linux, there are multiple solutions to set up an iSCSI target, but one of the common ones is `targetcli`.

1. **Install `targetcli`**:
   ```bash
   sudo apt-get install targetcli-fb  # For Debian derivatives
   sudo dnf install targetcli  # For RHEL derivatives
   ```

2. **Start `targetcli` shell**: 
   ```bash
   sudo targetcli
   ```

3. **Define backstores**: These are the actual storage resources. It could be a file, a block device, or even RAM. For example, to create a file-backed storage:
   ```bash
   /backstores/fileio create name=myfileio dev=/path/to/file.img size=10G
   ```

4. **Create an iSCSI target**:
   ```bash
   /iscsi create
   ```

5. **Link the backstore to the target as a LUN**:
   ```bash
   /iscsi/iqn.yyyy-mm.com.domain:targetname/tpg1/luns create /backstores/fileio/myfileio
   ```

6. **Set ACLs** (if needed): You can set which initiators are allowed to connect.

7. **Configure networking**: Ensure the appropriate network ports (usually TCP _3260_) are open and accessible.

8. **Save and exit**: When done with the configuration in `targetcli`, make sure to save the configuration.

9. **Connect with initiator**: Once your target is set up, you can use an iSCSI initiator to connect to it, as described in the earlier explanation about [iSCSI Client](/docs/modules/iscsi-client).

Remember, proper configuration of your iSCSI target and network is crucial. iSCSI requires a robust network setup to ensure performance and reliability, especially in production environments.