---
title: "DHCP Server"
date: 2023-05-18
weight: 375
---

### About
This page explains what DHCP is and how to use Webmin to set up a DHCP server on your network so that other systems can obtain IP addresses automatically. 

### Intro
DHCP is a protocol that allows hosts to request and be assigned an IP address on a local area network. It is used to simplify the process of IP address assignment, as a single server can manage the addresses of multiple clients. It is also useful for systems such as laptops that are moved between multiple networks, as they do not need to be re-configured for each LAN that they connect to. 

DHCP is usually used on Ethernet networks, although it can be used on any type of LAN that supports broadcast traffic such as 802.11 and token ring. It is not used for address assignment for dial-up connections or ADSL - the PPP protocol has its own method of assigning clients their IP addresses. Because broadcasts are not normally forwarded by routers, a DHCP server can only assign addresses to hosts on a single LAN - unless you have a router that is configured to forward DHCP packets. 

A DHCP server can also supply other information to clients in addition to an IP address. The addresses of DNS servers and the network gateway can be sent, along with the DNS domain, NIS server, NIS domain, static routes and much more. DNS and routing information allows clients to fully integrate themselves into the network they are connected to without needing any manual configuration. 

When a server assigns an IP to a client, it is given a lease on that address for a certain amount of time, during which no other client will be assigned the same address. When the lease expires the client must contact the server again. Typically it will be assigned the same IP address as before, and the lease will be extended for the same time period. If a client does not contact the server when its lease is up the server assumes that the client has been shut down, and marks the address as available for assignment to other hosts. 

Most operating systems include support for configuring a network interface to use DHCP to get its IP address. DHCP has become the standard protocol for address assignment on IP networks, replacing the older BOOTP protocol used by some Unix operating systems. 

### The ISC DHCP server  
The most common DHCP server for Unix system is the ISC server, of which several versions have been released. The latest is version 3, but version 2 is still in common use. Release 1 uses a very different configuration file format to later versions, and is not seen much any more. The ISC DHCP server supports a wide range of options, and can be configured to behave differently for different clients, networks and address ranges. 

The ISC server can be used to assign fixed addresses to hosts, or addresses from certain ranges. Every host is identified by its MAC addresses, which on an Ethernet LAN is the address of the host's Ethernet card. A static IP address and other options can be associated with a particular hardware address, which allows you to fix the address that certain systems receive while using dynamic allocation for others. 

The server's configuration file contains four different types of entries, that contain options that effect different clients:

  * **Subnet** &mdash; A subnet is an entire IP network, such as _192.168.1.0_.  Entries of this type are used to dynamically allocate addresses within certain ranges to clients within the network. 

  * **Shared network** &mdash; A shared network is a group of subnets that share the same physical network.

  * **Host** &mdash; A single client host, identified by its MAC address and assigned a fixed IP address.

  * **Group** &mdash; A group of hosts for which the same options can be set. 

Entries in the server configuration are arranged in a hierarchy that determines what client options and other settings apply to a particular client. Options in higher-level entries are overridden by those lower in the hierarchy, which allows an administrator to avoid repeating configuration information while still being able to set individual options for specific hosts.

The ISC DHCP server's primary configuration file is called dhcpd.conf, and can usually be found in the /etc directory. Other configuration files can be included by the primary file, but on most systems only dhcpd.conf is used. The only other file used by the server is dhcpd.leases, which contains all granted leases and is always kept up to date. Whenever the server is started, it re-reads this file to find out which leases are currently active. This means that there is no danger of lease information being lost if the server is stopped and re-started, which is necessary for it to re-read the primary configuration file. 

Webmin's DHCP Server module directly updates the configuration and lease files when you manage subnets, hosts, groups and leases. To activate the current configuration, it kills the server process and re-runs it, as there is no way to signal the server to re-read its configuration file. 

### The DHCP Server module  
This module can be used to set your system up as a DHCP server so that clients on your LAN can be automatically assigned IP addresses, DNS servers and other information. If there is already a server on your network, setting up another one is a bad idea as they may interfere with each other. If you just want to configure your system to obtain its own IP address via DHCP, then there is no need to set up a server - instead, see the **Adding a network interface** section of [Network Configuration](/docs/modules/network-configuration).

The DHCP Server module can be found in Webmin under the Servers category. Clicking on its icon will take you to the main page, which lists all existing subnet, shared network, host and group configurations. The screenshot below shows an example.

[![](/images/docs/screenshots/modules/light/dhcp-server.png "DHCP Server Screenshot")](/images/docs/screenshots/modules/light/dhcp-server.png)

At the bottom of the page are buttons for editing global settings, and for displaying current dynamic address leases. Below them is the **Start Server** or **Apply Changes** button, which either starts the server if it is not running, or re-starts it to force a reload of the configuration if it is. However, you cannot start the server until at least one valid subnet has been defined. 

If the ISC DHCP server is not installed on your system, the main page will display an error message notifying you that the dhcpd program could not be found. All Linux distributions include a DHCP server package on their CD or website, which you will need to install before you can use the module. Make sure that the package you add is called dhcpd or dhcp-server, as there is often a separate package for the DHCP client programs. 

The same error can also appear if the server is installed, but in a location other than the one that the module expects. This can happen if you have compiled and installed it yourself from the source code, rather than using your distribution's standard package. If so, you will need to adjust some of the paths explained in the section called **Configuring the DHCP Server module**.

Because this module only supports the configuration of ISC DHCP server versions 2 and 3, the main page will also display an error message if it detects that version 1 of the server is installed. Unfortunately, this older release uses a totally different configuration file format and so is not supported by the module. Some operating systems (such as Solaris) include this older version by default, but it can be replaced by the latest one. 

The ISC DHCP server is also available for several other Unix operating systems in addition to Linux. Because it works the same on all of those systems, the behaviour of this module is identical as well. The only differences are the default paths that it uses for the server configuration files and programs. 

On some operating systems and Linux distributions, the DHCP server package includes a sample configuration file that defines several hosts and subnets. These are not going to be of much use for your network, and will probably prevent the server from working at all as they do not match its actual network interfaces. For this reason, it is best to _simply delete_ them before setting up your own configuration. 

Once a few entries have been added to the server configuration, the main page displays a table of icons networks under the heading **Subnets and Shared Networks**. Each icon represents either a subnet (shown with its network address under it), or a shared network (shown with its name). By default, subnets are listed first followed by shared networks, and both lists are in the order that they appear in the configuration file. If you have a complex DHCP configuration, you can change this by clicking on one of the following links next to **Display nets and subnets by**:


  * **Assignment** &mdash; The default sorting mode - subnets are shown before shared networks, and both are listed in the order that they appear in the configuration file. 

  * **File structure** &mdash; Subnets are listed after the shared networks that they are part of, which are sorted by their order in the configuration file.

  * **Name/IP address** &mdash; Subnets are listed sorted by IP address, followed by shared networks sorted by name. 

In the bottom part of the page is a table of icons with the heading **Hosts and Host Groups**. An icon is shown for each host or host group, with the name or number of members displayed beneath it. Because many servers have a large number of hosts, you can control the order that they are displayed in by clicking on one of the following links next to **Display hosts and groups by**:


  * **Assignment** &mdash; Hosts are listed before groups, and both are in the same order that they appear in the configuration file. 

  * **File structure** &mdash; Hosts are listed after the groups that they are part of, which are sorted by their order in the configuration file.

  * **Name** &mdash; Hosts are listed sorted by name, followed by groups in the order that they appear in the configuration file.

  * **Hardware address** &mdash; Hosts are listed sorted by MAC addresses, followed by all groups.

  * **IP address** &mdash; Hosts are listed sorted by their fixed IP address, followed by all groups. 

Changes to the sorting modes will be remembered by the module, so that they will be used every time you visit the main page from now on. 

### Adding and editing subnets  
In the simplest DHCP server configuration, all you need is a single subnet entry to hand out IP addresses within some range to clients on a single LAN. The server allows you to do much more than that, but for many networks this is all that is needed (unless you want to assign fixed addresses to some hosts, or have multiple IP networks on the same LAN). 

To add a new subnet entry, the steps to follow are:
- On the module's main page, click on the **Add a new subnet** link in the **Subnets and Shared Networks** section. This will take you to the page shown in the first image below. 
- In the **Network address** field, enter the address of your local LAN such as _192.168.1.0_. This must be a network that your system is connected directly to. 
- In the **Netmask** field, enter the mask for the local LAN such as _255.255.255.0_. The best way to find the correct network address and netmask is to use the [Network Configuration](/docs/modules/network-configuration) module to look at the settings for your Ethernet interface. 
- The **Address ranges** section is actually a table for entering multiple ranges, but only one blank row is displayed at a time.  In the first field, enter the starting address for the range of IPs that you want assigned to clients, such as _192.168.1.100_, and in the second enter the ending address for the range, such as _192.168.1.150_. Both addresses must be within the network, and the first must be lower than the second. To add more than one range, you will need to re-edit this subnet after saving so that a new blank row appears in the table. The server will always assign addresses from the start of the first range up to the end, then go on to the second and any subsequent ranges.  Because each client must have a unique IP, make sure that your ranges are big enough to support all the client hosts that may be connected to the network at any one time. 
- If you want this subnet to be part of a shared network (explained in the **Adding and editing shared networks** section), select it from the **Shared network** menu. Otherwise, choose **<None>** to have the subnet created outside of any shared nets. 
- To set the lease length for clients on this network, change the **Default lease time** from **Default** and enter a number of seconds into the field next to it. This will be the length of the lease for hosts that do not explicitly request one.  You should also set the **Maximum lease time** field, so that clients cannot request a lease longer than the specified number of seconds. If not set, then there is no upper limit on lease length. 
- Unless the client systems on your LAN will be network booting from another server, the **Boot filename** and **Boot file server** fields can be left set to **Default**. Only diskless workstations need to do this. 
- The **Server name** field is for entering the network hostname of your DHCP server system. Usually this can be left set to **Default**, in which case the server will work it out automatically. 
- Click the **Create** button at the bottom of the page. An new entry for the subnet will be added to the server's configuration, and you will be returned to the module's main page. 
- Click on the new icon for the subnet, which will take you to an editing form that is almost identical to the creation page. 
- Click on the **Edit Client Options** button to go to a page listing information that will be sent to clients, as shown in Figure 32-4. All of the fields have a **Default** radio button, which if selected typically indicates that no information related to that option will be sent to clients. 
- Fill in the **Default routers** field will the IP address of the default gateway on your network, such as _192.168.1.1_.  This will be used by clients that have their address assigned by DHCP to communicate with systems outside the network. 
- Fill in the **Subnet mask** field with the netmask for your network, such as _255.255.255.0_. 
- Enter the broadcast address for your network into the *Broadcast address* field, such as _192.168.1.255_. 
- Fill in the **Domain name** field with the DNS domain name such as _example.com_ that clients should append to partial hostnames. 
- In the **DNS servers** field, enter a space-separated list of DNS server IP addresses that clients can use, such as _192.168.1.104 1.2.3.4_. 
- If you are running NIS (covered on [NIS Client and Server](/docs/modules/nis-client-and-server)) and want clients to connect to an NIS server at boot time, fill in the **NIS domain** field with the name of your NIS domain, and the **NIS servers** field with the IP address of your NIS master or slave server.  This is only useful if the client hosts are capable of getting their NIS settings from DHCP. 
- If you have Windows clients and are running a Samba or Windows server, fill in the **NetBIOS name servers** field with the IP address of a system that can do NetBIOS name resolution for clients. Any Unix system running Samba will be able to perform this role. 
- Click the **Save** button at the bottom of the page to go back to the subnet form. 
- If this is your first subnet, you will need to make sure that the server is configured to use the right network interface for your system. Return to the module's main page, and click on the **Edit Network Interface** button at the bottom of the page. Then select the interface for the new subnet from the **Listen on interfaces** list, and click **Save**. If you have multiple network interfaces and have created subnet configurations for each of them, then all the interfaces must be selected for the server to work properly. 
- If you are running version 3 of the ISC DHCP server (shown on the main page) and this is your first subnet, you may need to set the DDNS update style before the server can be started.  Even if you are not using DDNS, some versions insist on an entry existing in the configuration file for it. Click on the *Edit Client Options* button on the main page and scroll down to the **Dynamic DNS update style** field. Select **None** and click **Save** to return to the module index. 
- Back on the main page and click on the **Start Server** or *Apply Changes* button. If something goes wrong, the error message generated by the DHCP server will be displayed. The most common problem is a mismatch between the network interface settings and the network address for the subnet. Another that often shows up is related to the ddns-update-style directive, which step 21 explains how to set. 

Once your first subnet has been created and the server started, you can test it by configuring a client system to use DHCP. When the client boots up, it should contact the server and be assigned an address, DNS and routing information. You should also be able to see the client on the leases page, covered in the subsequent **Viewing and managing leases** section. 

An existing subnet can be edited by clicking on its icon on the main page, changing fields and hitting the **Save** button. If you want to edit options for clients in the subnet, you will need to click on **Edit Client Options** as in the instructions above, make your changes and then click **Save** on that page. After any modifications, the **Apply Changes** button must be used to make them active. 

A subnet can be deleted using the **Delete** button on its editing form. Any hosts, groups or address pools that it contains will be removed as well, so be careful. After deleting, use the Network Interfaces page to de-select the interface for the subnet - failure to do so will cause the DHCP server to display an error message when **Apply Changes** is clicked, which must be done to make the deletion active. 

If the subnet contains any hosts or groups, a confirmation page will be displayed when **Delete** is clicked listing all the groups and hosts that will be deleted as well. Only when the **Yes** button is hit will be subnet (and all it contains) actually be removed. 

Another way to create a subnet inside a shared network is to click on the **Add a new subnet** link on the shared network's page. This will bring up the same subnet creation form shown in the screenshot above, but without the **Shared network** field. Instead, the shared net is shown at the top of the page under the title. The rest of the creation process is identical. 

A subnet configuration entry must be created for each IP network that you want to allocate addresses on. Typically, there will be one for each LAN connected to your system via an Ethernet, Token Ring or 802.11 network card. If two IP networks are actually on the same LAN, then both their subnets must be inside a shared network, as explained in the **Adding and editing shared networks** section. 

You must also make sure that every network interface that is connected to a network on which your DHCP server is assigning addresses is selected on the Network Interface page. If not, an error will be reported when the server is started or changes are applied. For most system administrators, this is not a big issue though as they have only a single LAN in their organization. 

### Viewing and deleting leases  
Every time the DHCP server supplies a dynamic address to a client, it records information about the assignment in its lease file. Fixed addresses assigned to specific hosts (covered in the *Adding and editing fixed hosts*) section do not trigger the creation of a lease, as they are considered permanent. You can use this module to view all current leases or expired leases, and to delete those that exist. Removing a lease tells the server that its IP address is no longer in use, and can be assigned to some other client. This should only be done if the client really isn't using the address any more though, for example if it crashed while holding a long lease. 

To view and delete leases, the steps to follow are:
- On the module's main page, click on the **List Active Leases** button. This will display a table listing all currently active leases, with the IP address, client name and start time shown for each. 
- To show leases that have expired as well, click on the *List all active and expired leases* button at the bottom of the page. 
- To remove a lease, click on its IP address in the list. The DHCP server will be stopped and re-started automatically to make the deletion active. 

It is also possible to view the leases to clients in just a single subnet by clicking on the **List Leases** button on the subnet editing form. This can be useful if you have several networks connected to your system with a large number of clients, and want to limit the size of the lease display. 

### Editing global client options  
The **Adding and editing subnets** section explains how to set client options (such as DNS and gateway IP addresses) that are supplied to all clients in a subnet. However, if you have more than one network or many fixed hosts, it can be more convenient to set option that apply to all clients of the server. These options can still be overridden for individual subnets, hosts and groups if you wish. 

To edit global client options, the steps to follow are:
- Click on the **Edit Client Options** near the bottom of the module's main page. This will take you to a form similar to the one shown in the screenshot above. 
- Change any of the fields as explained in steps 11 to 18 of the **Adding and editing subnets** section. 
- At the bottom of the form are fields for setting the default and maximum lease times for all clients, along with a few other options. These have the same meanings as similarly named fields on the subnet creation page. 
- Click the **Save** button to update the DHCP server configuration file and return to the module's main page. 
- Hit the **Apply Changes** button to make your new settings active. 

Client options specified for a subnet override those defined globally, and are in turn overridden by options for hosts within the subnet. 

### Adding and editing fixed hosts  
If you want to fix the IP address that is assigned to a specific host, you will need to add a host entry to the DHCP server configuration. This also allows you to set client options that apply only to that host, such as the DNS server addresses or default router. 

The server identifies hosts by their MAC (Medium Access Control) address, which on an Ethernet LAN is the Ethernet address of the client's network card. Typically this address is fixed, but a few network cards allow it to be changed. On Linux systems, you can find the MAC address by running the command ifconfig eth0 as root and looking for a string of 6 bytes in hex separated by colons, like _00:D0:B7:1D:FB:A1_. On Windows, the `winipcfg` program can provide the information although it is displayed with dashes instead of colons. Other operating systems have their own ways of finding the Ethernet address. 

Once you know the MAC address of the host, it can be added to the DHCP server configuration as follows:
- On the module's main page, click on the **Add a new host** link in the **Hosts and Host Groups** section. This will bring up the host creation form shown in the image below. 
- Enter a name into the **Host name** field. This should match the hostname that the client is configured with, or its fully-qualified name on your network. However, this is not mandatory. 
- Select the type of network (such as Ethernet) that the host in on from the menu in the **Hardware address** field. In the text box next to it, enter the host's MAC address as a series of 6 hex bytes separated by colons, like _00:D0:B7:1D:FB:A1_. 
- Enter the IP address that should be always assigned to this client into the **Fixed IP address** field. 
- If you want this host to inherit client options from a subnet, select **Subnet** from the menu in the **Host assigned to** field.  The list next to it will be filled in with the names of all existing subnets, allowing you to select the one that the host should be under. The fixed IP address must be within the subnet's network though, and the client must be connected to its LAN.  Hosts can also be created inside shared networks or host groups, by choosing **Shared Network** or **Group** from the menu and selecting the appropriate entry from the list to the right. 
- If this host needs to network boot from a server, enter the name of that server into the **Boot file server** field. You must also fill in the **Boot filename** field with the path to an appropriate boot file (downloadable via TFTP) on the server.  Generally, network booting is used by simple clients like X terminals and diskless workstations. For it to work, you must set up a TFTP server which contains the correct boot files for the client, which is not covered in here. 
- Click the **Create** button at the bottom of the form, and you will be returned to the module's main page which will now include an icon for the new host. 
- To edit the client options that are assigned to this host, click on its icon to go to its editing page, then on _Edit Client Options_. This is not always necessary if the host is a member of a subnet that already has these options set, or if they have been defined globally as explained in _Editing global client options_. 
- Fill in the form as you would for a subnet, as explained in the **Adding and editing subnets** section. 
- Click the **Save** button to return to the host form. 
- Return to the main page, and hit the **Apply Changes** button.  From how on, the host will be assigned the IP address and options that you have chosen. It will no longer appear on the lease list, as its IP assignment is permanent.

Once a host has been created, you can change its fixed IP address, MAC address and other options by clicking on its icon on the module's main page, which will take you to the host editing form. After making modifications, hit **Save** to update the server configuration and then **Apply Changes** to make them active. A host can also be deleted with the **Delete** button on the editing page. From then on, the client system will receive a dynamically allocated address from one of the ranges for its subnet, rather than a fixed addresses. 

A host can also be created by clicking on the **Add a new host** link on the subnet, shared network or group editing page. If done this way, the **Host assigned to** field is no longer displayed on the creation form - instead, the parent that it will be added to is shown at the top of the page. All the other steps in the process of adding the host are the same though. 

If you have a large number of hosts and want all of them to use the same client options, then they should be placed in a group or shared network. See the section on **Adding and editing groups** for more information on group management. The DHCP server configuration allows you to define several levels of groups, which allows for quite complex configurations. If you have more than one fixed address host on your network, they definitely should be both under a subnet or group to avoid duplicating settings. 

### Adding and editing shared networks  
A shared network is a group of subnets that shared the same physical LAN. If you have multiple IP networks on the same physical network, then the DHCP server configuration entries for all of them must be placed inside a shared network. Failure to do so may cause the server to behave incorrectly or report an error message when started. On the other hand, you must not put subnets that do not share the same LAN in the same shared network either. 

It is also possible for a shared network to contain a single subnet, although this does not really achieve anything. However, it may be useful for grouping configuration entries, as a shared network can contain hosts and groups as well, and have client options that apply to all its members. 

To create a shared network, the steps to follow are:
- On the module's main page, click on the **Add a new shared network** link under **Subnets and Shared Networks**. 
- Enter a short name for the network into the **Network name** field, such as _homelan_. This is used only when displaying the shared network on the main page. 
- To set the lease lengths for all clients of subnets under this shared network, fill in the **Default lease time** and *Maximum lease time* fields. Their meanings are the same as on the subnet creation form, documented in the **Adding and editing subnets** section. 
- In the **Subnets in this shared network** field, select any existing subnets that you want to move into this shared network.  All existing subnets including those in other shared networks will be listed. You must choose at least one subnet, as a shared network cannot be empty. 
- Click the **Create** button at the bottom of the page. Your new shared network will be added to the server's configuration, and an icon for it will appear on the module's main page. 
- If you want to set client options that will apply to all subnets in the shared network, client on its icon and then on *Edit Client Options*. Set any of the fields that you want, and then hit **Save** to return to the shared network form. 
- Click the **Apply Changes** button to make it active. 

Once a shared network has been created, subnets can be created in or move to it using the **Shared network** field on the subnet form. The same field can also be used to move a subnet out of any shared networks, by selecting the **<None>** option. 

Once a shared network has been created, it can be renamed or edited by clicking on its icon, changing fields and hitting the **Save** button. Or is can be removed altogether with the **Delete** button. Trying to delete a shared network that contains subnets, hosts or groups will bring up a confirmation page asking if you really want to go ahead. If you click **Yes**, all the configuration entries that the shared network contains will be deleted as well. As usual, after making changes or deleting, you must click the **Apply Changes** button on the main page to activate the new settings. 

### Adding and editing groups  
Unlike subnets, hosts and shared networks, group entries in the DHCP server configuration do not actually effect the server's behaviour in any way. Instead, they are just used to define options that will apply to multiple hosts. Even though there are other ways that this can be achieved (such as putting the hosts under a subnet), using a group gives you extra flexibility. 

Groups can be defined under subnets and shared networks, but not other groups. In order DHCP server versions, groups do not normally have names - instead, they are identified in Webmin by the number of hosts that they contain. Never versions do support group names, and they can be set using Webmin.

To create a new host group, the steps to follow are:
- On the module's main page, click on the **Add a new host group** link under **Hosts and Host Groups** to go to the group creation form. 
- Select any existing hosts that you want to be members of this group from the **Hosts in this group** list. 
- If you want this group to be under a subnet, choose **Subnet** from the menu in the **Group assigned to** field, and select the subnet in the list next to it. All hosts in the group must have fixed IP addresses that fall within the subnet's network.  Similarly, a group can be created inside a shared network by choosing **Shared Network** from the menu and selecting the network name from the list. In both cases, the group will inherit client options and other settings (like the lease length) from its parent subnet or shared net. 
- If hosts in the group need to network boot from a server, enter the name of that server into the **Boot file server** field.  You must also fill in the **Boot filename** field with the path to an appropriate boot file (downloadable via TFTP) on the boot server. 
- Click the **Create** button. You will be returned to the module's main page, while will now include an icon for the new group. 
- Click on the group icon to bring up its editing form, and then on **Edit Client Options**. This will take you to the page shown in way above for setting options that are sent to client hosts in this group. 
- Set any of the options such as the DNS or NIS servers by following steps 10 to 18 of the **Adding and editing subnets** section. 
- Click the **Save** button at the bottom of the page to save the options and return to the group form. 
- Go back to the module's main page and hit **Apply Changes** to make your new group active. 

Once a group has been created, new or existing hosts can be moved into it using the **Host assigned to** field on the host form. Any host added to a group will inherit client options and network boot settings from the group, unless overridden by settings for the host itself. 

As usual, a group can be edited by clicking on its icon on the module's main page, making changes and clicking **Save**. A group can also be removed with the **Delete** button on its editing page - however, if it contains any hosts you will be asked to confirm the deletion before it and the hosts are actually removed. 

A group can also be created under a subnet or shared network by clicking on the **Add a new host group** link on the page reached by clicking on one of their icons. The group creation form that is displayed no longer has a **Group assigned to** field - instead, the name of the subnet or shared network that it will be added to is displayed at the top of the page. Apart from that difference, the instructions above can still be followed. 

### Module access control  
As the [Webmin Users](/docs/modules/webmin-users) page explains, the Webmin Users module can be used to limit what a user or group can do with a particular module. For this module, you can control exactly which hosts, groups, subnets and shared networks a user can edit. This can be useful for granting a sub-administrator the rights to set options for only a few hosts within your server configuration, while preventing him from changing subnets and other hosts. 

Once a user has been given access to the module, to limit him to editing only certain hosts the steps to follow are:
- In the Webmin Users module, click on DHCP Server next to the name of the user. This will bring up the module access control form. 
- Change the **Can edit module configuration?** field to **No**, so that he cannot edit the configuration file path and the commands that the module uses. 
- Leave **Can apply changes?** set to **Yes**, so that he can activate any changes that he makes. 
- Change **Can edit global options?** to **No**, so that he cannot change options that apply to all clients. 
- **Can view leases?** can be safely left set to **Yes**, but *Can remove leases?* should be set to **No**. 
- The **Uniq host names?**, **Uniq subnet IP addresses?** and *Uniq shared-net names?* fields should be changed to **Yes** to prevent the creation of clashing hosts, subnets and shared networks. 
- The **Use security level** field determines which configuration entries in the hierarchy the user is allowed access to. The available options and their meanings are: _Level 0_ The user will have access to all entries to which he has been granted.  _Level 1_ The user will have access to granted entries, as long as he can access all their children as well. _Level 2_ The user will have access to granted entries, as long as he can access all parent and ancestor entries. _Level 3_ Like levels 1 and 3 combined. Generally, you should leave this option set to level _0_ for simplicity's sake. 
- Assuming you are limiting the user to only editing certain hosts, in the **Access groups** and **Access shared nets** field de-select all three options. This will stop the user viewing and editing any groups or shared networks. To stop the user creating hosts and subnets, de-select **create** in the **Access hosts** and **Access subnets** fields. 
- Change the **Enable per-subnet ACLs?** and **Enable per-host ACLs?** fields to **Yes**. This allows you to select exactly which hosts and subnets the user can access from the **Per-object ACLs** section below. If the first of these fields is set to **No** instead, the **Access subnets** checkboxes above determine if the user can view and edit all subnets. Similarly, if the **Enable per-host ACLs?** field is set to **No** then the **Access hosts** checkboxes control the viewing and editing of all hosts. 
- In the **Per-object ACLs** section, select **read/write** for any hosts and subnets that the user should be able to configure, and **not allowed** for the rest. Choosing **read only** will allow him to view the host or subnet without being able to change it. 
- Finally, click the **Save** button at the bottom of the page to make the new restrictions active. 

Another common use of the DHCP Server module's access control page is limiting a user to the viewing and cancelling of leases only. This can be done by setting the **Can view leases?** and **Can remove leases?** fields to **Yes**, and everything else to **No**.  The user should also be denied access to all hosts, subnets and so on, or possibly given read-only permissions.
