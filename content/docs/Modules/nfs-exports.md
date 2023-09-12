---
title: "NFS Exports"
date: 2023-09-12
weight: 675
---

### About
**NFS** is the most common protocol for sharing files between Unix systems over a network. NFS servers export directories from their local hard disks to NFS clients, which mount them so that they can be accessed like any other directory. Unlike other file sharing protocols such as Windows networking, Netware and AppleShare, NFS was designed to support client systems that have multiple users. This means that a client never logs into a server, and that the server almost completely trusts the client to authenticate users. The down side is that NFS is not a good protocol for sharing files with client systems that are not fully trusted. 

Instead of using usernames and passwords for authentication, NFS uses the IP address of the client. Only trusted clients are allowed to mount directories from the server, so that it is not vulnerable to unauthorized file access from any client on the network. Some additional security can be gained by restricting the access of particular Unix users on a client, or treating all requests from a client as a single user. 

On Linux, the `/etc/exports` file contains a permanent list of directories exported by NFS and the clients they are exported to. Typically this file is read at boot time by the `nfsd` and `mountd` programs, which run in the background to service NFS requests. When you change or create exports using Webmin, the exports file is directly updated. 

On Linux, NFS server configuration is done using the **NFS Exports** module which can be found under the Networking category. After entering the module, the main page will display a list of exported directories and the clients that are allowed to access them, as shown below.

[![](/images/docs/screenshots/modules/light/nfs-exports.png "NFS Exports Screenshot")](/images/docs/screenshots/modules/light/nfs-exports.png)

Most Linux distributions come with the programs required for NFS file sharing installed by default. However, if Webmin detects that they are missing from your system an error message will be displayed when you enter the module. If that happens, you will need to install the `nfs-server` or `nfs` package. 

### Exporting a directory
Only directories on local file systems can be exported via NFS, so it is not possible to re-export files that have been mounted from another NFS server. Neither is it possible to export directories from non-Unix file systems such as `vfat`, `ntfs` or `iso-9660`. If an exported directory has mount points under it, files under those mount points will not be accessible by NFS clients. So if you exported the root directory `/` and have a separate file system mounted at `/home`, you would need to also export `/home` and clients would need to mount it in order to see the files under it. 

#### Export details

##### Directory to export

   Instead of mounting a number of distinct exports, an NFSv4 client sees the NFSv4 server's exports as existing inside a single file system, called the _NFSv4 pseudofilesystem_.  So for NFSv4, this directory is firstly mounted (with mount --bind) in the _NFSv4 pseudofilesystem_, the pseudo file system is exported (if it wasn't), then the directory.
   
   It is preferable to export this directory without hiding it, so the client will be able to move in it without mounting it.
   
   Unlike other NFS servers, Linux supports the re-exporting of a directory that has been NFS mounted from another host, and the exporting of a directory that contains mount points for other file systems. 

##### _NFSv4 Pseudofilesystem_ to export

   _NSFv4 only_ Usually the `/export` directory will be used to mount exported nfs directories. A corresponding entry in `/etc/fstab` will be created when creating an nfsv4 export within a pseudo file system.

##### Active

   Unless you want the export to be unavailable, make sure the option is set to **Yes**. 

##### Export to

   Choose which clients will have access to the directory. The possible choices are:
    
  -  **Everyone** &mdash; Any system that can connect to yours over the network will be able to mount the directory. Be very careful with this choice, as it may allow anyone on the Internet to access your files.
    
  -  **Host(s)** &mdash; Only the single specified host or IP address will be allowed. You can also enter a wildcard hostname like _*.foo.com_ for this option to allow all hosts from a domain. However, if you want to export a directory to several specific client hosts then the only solution is to create multiple exports of the same directory, each with a different hostname in this field.
    
  -  **NIS Netgroup** &mdash; A netgroup is a list of hosts that is defined on an NIS server. Your system must be an NIS client for this to be useful.
    
  -  **IPv4 Network** &mdash; All hosts on the specified network will be allowed to connect. To allow all hosts with IP addresses from _192.168.1.0_ to _192.168.1.255_, you would enter _192.168.1.0_ for the network and _255.255.255.0_ for the netmask. 
    
  -  **IPv6 Network** &mdash; Any host in the specified subnet is allowed access. 

##### Security levels

   _NSFv4 only_. This field determines which security levels clients are required to use. Multiple levels can be selected, and preferred levels will be tried first. 

#### Export security

##### Read-only

   If you want to prevent clients from modifying or creating files in the exported directory, set to **Yes**

##### Trust remote users

   **Everyone** if exporting only to trusted systems.  By default, do not trust other systems' root account.  

##### Treat untrusted users as

   This option determines which local user untrusted client users are treated as. You may enter either a UID or select a user, or choose the default. 
   - **exportfs option**: anonuid
   - **default**: -2 or nobody

##### Treat untrusted groups as

   This option determines which local group untrusted client groups are treated as. You may enter either a GID or select a group, or choose the default. 
   
   - **exportfs option**: anongid
   - **default**: -2 or nobody

##### Disable subtree checking

   This option disables subtree checking, which has mild security implications, but can improve reliability in some circumstances.
   
   If a subdirectory of a filesystem is exported, but the whole filesystem isn't then whenever a NFS request arrives, the server must check not only that the accessed file is in the appropriate filesystem (which is easy) but also that it is in the exported tree (which is harder). 

##### Immediate sync all writes

   When this option is enabled, all NFS writes by clients for this export will be written to disk before success is reported back to the client. This is slower, but ensures data integrity. When the option is disabled, writes by NFS clients may be buffered until later.
    
   - **exportfs options**: sync, async
   
   - **default**: enabled (but disabled for releases of nfs-utils previous to 1.0.0)

##### Make symbolic links relative

   This is a _NFSv2-specific_ option. Converts absolute symbolic links seen by the client to relative links. For example, if the directory `/usr` was exported, a link from `/usr/local/bin` to `/usr/X11R6/bin` would be converted to `../X11R6/bin`. This makes a lot more sense if the client is mounting the directory somewhere else than `/usr`.

##### Clients must be on secure port

   If this option is chosen, NFS clients must used an UDP or TCP port less than 1024. This provides additional security for Unix clients, but may interfere with some Windows NFS implementations. 
    
   - **exportfs options**: secure, insecure

##### Deny access to directory

   This is a _NFSv2-specific_ option. If this option is chosen, the specified clients will not be allowed access to anything in this directory. Chis option is only really useful if you are exporting a parent directory, but what to deny access to some subdirectory.
   
   - **exportfs option**: noaccess

##### Hide the filesystem

   hen set to Yes, clients will need to mount separately any filesystem exported under this one. When set to No, it will effectively get mounted automatically. 

##### Don't trust UIDs

   This is a _NFSv2-specific_ option. The mapping daemon ugidd must be running. In addition to the Trust remote users section, this option allows you to specify a list of client UIDs to be treated as the untrusted user. You must enter a comma-separated list of UIDs or UID ranges like 1,10,20-25,100-150. 
    
   - **exportfs options**: squash_uids, map_daemon

##### Don't trust GIDs

   This is a _NFSv2-specific_ option. The mapping daemon ugidd must be running. Like Don't trust UIDs, this option allows you to specify a list of client GIDs to be treated as the untrusted group. You must enter a comma-separated list of GIDs or GID ranges like 1,10,20-25,100-150. 
    
   - **exportfs options**: squash_gids, map_daemon

Click the **Create** button to save the export. If you have made any mistakes in any of the fields, an explanatory error message will be displayed. Otherwise, the browser will return to the list of exports. 

Allowed clients should now be able to mount the exported directory. If not, check your system's error logs for messages from the NFS server processes that explain why the client is being rejected.

### Editing or deleting an NFS export
All the details of any existing NFS export can be edited at any time, by following these steps:
- On the main page of the module, click on the client under the **Exported to** column that you want to edit. If a single directory is exported multiple times to different clients, each one must be edited individually. 
- On the export editing form (which is almost identical to the screenshot above) change any of the options, including the directory to share. 
- If you want to delete the export, click the **Delete** button at the bottom-right of the page. Otherwise, click **Save** to save your changes. Either way, your browser will return to the module's main page. 
- Click the **Apply Changes** button to make the changes active. 

Existing NFS exports can be edited or deleted by clicking on their directory on the module's main page. If you make any changes, you must click the **Apply Changes** button to make them active.

### Importing directory
To 'import' a directory that has been exported by another system you can use [Disk and Network Filesystems](/docs/modules/disk-and-network-filesystems). Also, when using a _NFSv4 pseudofilesystem_, the NFS exports are 're-imported' on the system that exports.

### Manual Setup

Step-by-step example of setting up an NFS export on a Linux system using command line.

#### Scenario

You have a directory named `/shared_data` on a server, and you want to share it with two client machines: `client1.example.com` and `client2.example.com`. You want `client1` to have read-write access and `client2` to have read-only access.

#### Install

 - **Install NFS Server**:
   First, ensure that the NFS server software is installed.
   
   For Debian and derivatives:
   ```bash
   sudo apt update
   sudo apt install nfs-kernel-server
   ```

   For RedHat and derivatives:
   ```bash
   sudo dnf install nfs-utils
   ```

#### Configure
##### Server Side Configuration

- Open and edit the `/etc/exports` file in your preferred text editor, e.g., `sudo nano /etc/exports`, and add the following lines:

   ```
   /shared_data client1.example.com(rw,sync,no_root_squash)
   /shared_data client2.example.com(ro,sync,no_root_squash)
   ```

- **Apply Configuration**:
   After editing and saving the file, apply the configuration with:

   ```bash
   sudo exportfs -ra
   ```

- **Start/Restart the NFS Service**:
   Start (or restart) the NFS server to ensure the changes are active:

   ```bash
   sudo systemctl restart nfs-kernel-server  # For Debian/Ubuntu
   ```

   Or

   ```bash
   sudo systemctl restart nfs  # For RedHat/CentOS
   ```

##### Client Side Configuration
   
 - On the client machines, you'd typically use the `mount` command or `/etc/fstab` to mount the shared directory.

   Example using the `mount` command:
   ```bash
   sudo mount -t nfs server_ip:/shared_data /local_mount_point
   ```

 - **Firewall Configuration** (Optional but Important):
   
   If you have a firewall enabled on the server, ensure it allows NFS traffic.

   For `ufw` (common on Ubuntu systems):
   ```bash
   sudo ufw allow from [client1_IP] to any port nfs
   sudo ufw allow from [client2_IP] to any port nfs
   ```

   For `firewalld` (common on CentOS systems):
   ```bash
   sudo firewall-cmd --permanent --add-service=nfs
   sudo firewall-cmd --reload
   ```

#### Summary

This is a basic NFS setup. In real-world scenarios, especially in larger networks or on the internet, you would want to consider security implications, potential for abuse, and other best practices like using NFSv4 with Kerberos for secure authentication and encryption.