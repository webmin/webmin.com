---
title: "iSCSI Target"
date: 2023-09-14
weight: 795
---

### The module
The **iSCSI Target** module allows you to export disk devices to other systems over the network using the iSCSI protocol. Each exported disk is called a target, and existing targets are listing on the module's main page. To create a new target, click the **Add a new iSCSI target** button, enter a name, and select the disk device or file to be exported.

Logins and passwords required from clients can either be set on a per-target basis, or for all targets on the **Authentication Settings** page. The iSCSI protocol also allows targets to authenticate themselves to clients (also known as initiators).

Global settings related to packet sizes and the iSCSI protocol can be changed on the **Connection Settings** page. Timeouts for communication with clients can be changed on the **Timeout Settings** page.

By default, any client with a valid login can connect to your exported targets. However, you can limit the IPs clients can connect from using the **Allowed Client Addresses** page. Alternately, you can restrict the IPs on the server that clients can connect to using the **Allowed Server Addresses** page.

At the bottom of the module's main page are buttons to stop, start and restart the [iSCSI Server](/docs/modules/iscsi-server). Configuration changes will not be applied until the server is restarted.

### About iSCSI Target
The iSCSI (Internet Small Computer Systems Interface) protocol allows two hosts to negotiate and then exchange SCSI (Small Computer Systems Interface) commands using IP networks. In this setup, the iSCSI Target acts as the server-side storage provider, while the iSCSI Initiator acts as the client accessing this remote storage.

#### Role of the iSCSI target
The iSCSI Target provides block-level storage that is made available over a network. This storage can then be accessed by iSCSI Initiators.

#### Core functionalities of the iSCSI target

1. **Expose LUNs**: The primary function of the iSCSI Target is to expose storage, usually in the form of block devices referred to as Logical Unit Numbers (LUNs), over a network. Each LUN corresponds to a block device, which could be an entire disk, a partition, or even a file-based image.

2. **Handle iSCSI sessions**: An iSCSI session represents a connection between an initiator and a target. The target manages these sessions, ensuring the SCSI commands and data get properly handled.

3. **Authentication**: iSCSI targets often support CHAP (Challenge Handshake Authentication Protocol) to authenticate initiators. This helps ensure that only authorized clients can access the storage.

4. **Data transfer**: After a session is established, the iSCSI Target is responsible for the transfer of SCSI commands, data, and status information between the initiator and the target.

5. **Multipathing and failover**: Advanced iSCSI Targets may support multipathing. This allows multiple concurrent connections to the same LUN for redundancy and load balancing.

#### Benefits of iSCSI target

- **Cost-effective**: iSCSI uses regular Ethernet hardware, which can be more cost-effective than other storage networking technologies like Fibre Channel.

- **Flexibility**: iSCSI storage can be provisioned and accessed across local area networks (LAN), wide area networks (WAN), or the internet.

- **Simplicity**: Many organizations find iSCSI to be simpler to manage and deploy than Fibre Channel, especially when they already have IP networking expertise.

- **Scalability**: It's relatively easy to scale iSCSI storage, either by adding more drives to an existing target or by setting up additional targets.

In essence, the iSCSI Target acts as a storage server, allowing clients (Initiators) to access its storage resources as if they were locally attached SCSI devices, but with the advantage of the flexibility and scalability offered by IP networks.
