---
title: "Network Configuration"
date: 2023-09-12
weight: 695
---

### About
This page explains how to set your systems IP address, hostname, DNS servers and other network settings. It covers both Linux and other Unix variants. 

### Intro
A Linux system can be connected to a network or the Internet in several different ways - for example, via an Ethernet network card, a wireless network or a PPP (Point-to-Point Protocol) connection over a dial-up or DSL modem.

Every Ethernet network card, PPP connection, wireless card or other device in your system that can be used for networking is known as an ''interface''. Interfaces are usually associated with a piece of hardware (like a network card), but they can also be dynamically created (like PPP connections). For an interface to be used, it must first have an IP address assigned, which may be fixed and set from a configuration file on your system, or dynamically assigned by a server. An Ethernet interface for a desktop computer on a company or home network would usually have a fixed address, whereas a PPP connection interface to an ISP would have its address dynamically assigned by a server at the other end. 

PPP interfaces are configured in a very different way to Ethernet and other fixed hardware interfaces. Before one can be activated, a modem must be used to dial an ISP on a particular phone number and login with a username and password. Only after the login is successful will the PPP interface have an IP address assigned by the ISP's access server. Other network settings on your system such as the DNS server addresses and default gateway will be assigned by the ISP as well. An Ethernet interface however can have an IP address set and start working at any time, and a system connected via Ethernet usually uses fixed DNS server and gateway addresses. 

Sometimes, an Ethernet interface will have its addresses dynamically assigned as well. If so configured, the system will broadcast a request for an address using the DHCP (Dynamic Host Configuration) protocol when the interface is activated at boot time. This will be answered by a DHCP server, which supplies the IP address and possibly default gateway and DNS server addresses as well. DHCP is often used on large networks with many systems that frequently connect and disconnect (such as laptops), in order to avoid manually configuring each system with a fixed IP address. 

One special network interface that is always available is the loopback interface. It always has the IP address _127.0.0.1_, which is mapped to the hostname `localhost`. This interface cannot be used to communicate with other systems, just your own - for example, running the command telnet localhost will bring up the login prompt of your own system (assuming a telnet server is active). 

Every interface has a name, like _eth1_ or _ppp0_. All Ethernet interfaces start with _eth_, PPP interfaces with _ppp_, loopback with _lo_ and token ring with _tr_. The number tells you which network card of that type the interface is related to - if your system had two Ethernet cards the first would be _eth0_ and the second _eth1_. 

If your system is connected to a network any bigger than a small home LAN, one of the computers on the network will be the gateway. This is a server (or more likely a router) that knows how to route traffic to other networks or the internet, perhaps by a PPP link, broadband connection or other network card. For your system to communicate with those other networks, it must be configured with the IP address of the gateway. 

All communication on an IP network is done using IP addresses, like _192.168.1.10_ or _210.23.128.117_. Because addresses like this are not too easy for the average person to remember, they can have names associated with then as well, like _server.foo.com_. Any time a system needs to lookup an IP address for a hostname (or vice versa) it queries a DNS server which will supply the needed information, either from its own records or by querying other 
DNS servers on the network or Internet. For your system to be able to query a DNS server, it needs to be configured with the IP address or addresses of nearby servers and a default domain name to append to any hostnames. 

Not all IP addresses are looked up from a DNS server though - some are stored in the `/etc/hosts` file on your system so that they can be found even when networking is not active. Typically the IP addresses for `localhost` and your system's hostname will be stored in this file, because they rarely change. 

As would be expected, the **Network Configuration** module can be found under the Networking category in Webmin. The main page shows one icons for each of the four configuration categories:
  - **Network Interfaces**
  - **Routing and Gateways**
  - **Hostname and DNS Client**
  - **Host Addresses**.
  
All the editable forms and options in the module are under one of those four categories. 

This module was designed mainly for configuring networking on systems with permanent network connections, such as Ethernet or token ring cards. If your system has only a dial-up PPP connection to the internet, it will not be much use to you. Instead, you should use one of the PPP configuration tools that comes with most Linux distributions and allows you to set phone numbers, usernames and passwords for dial-up connections. 

The forms in this module only allow you to set up your system as a DNS and DHCP client. See also [BIND DNS Server](/docs/modules/bind-dns-server) and [DHCP Server](/docs/modules/dhcp-server) for configuration of the corresponding servers.

### Viewing and editing network interfaces

To view the interfaces that are currently active on your system, click on the **Network Interfaces** icon on the main page of the module. This will take you to the page shown in the screenshot below.

[![](/images/docs/screenshots/modules/light/network-configuration.png "Network Configuration Screenshot")](/images/docs/screenshots/modules/light/network-configuration.png)

It lists interfaces on your system in two categories. At the top under interfaces **Active Now** are those that are currently enabled and have an IP address assigned. All loopback, Ethernet and PPP interfaces will be shown, although not all will be editable using Webmin. At the bottom under interfaces **Activated at Boot** time are those which have been configured to be activated at boot. The two lists will not necessarily be the same, as some types of interface (such as PPP) are not activated at boot time and so will not appear in the second list. 

The steps to follow to change the IP address, active status or other details of an interface are: 
- If the interface appears under both interfaces **Active Now** and interfaces **Activated at Boot** time (as most editable ones do), click on its name in the lower list. This will take you to a form for editing its settings.
- To assign a different address, enter it into the **IP Address** field. Or select the **From DHCP** option if you want the address to be dynamically assigned by a DHCP server on your network. 
- If necessary, change the **Netmask** field. If it or IP address is changed, you will also need to set the **Broadcast** address field based on the new netmask and IP. 
- When editing an active interface, the **MTU** and **Hardware address** fields will be available. You should leave the MTU alone unless you really know what you are doing, as changing it could reduce network performance or cut your system off from the network altogether. The hardware address should only be changed if you want to give your network card a different Ethernet address, which is rarely necessary. 
- If editing a boot-time interface, make sure the **Activate at boot?** field is set to **Yes** so that the interface is brought up when the system starts. If editing an active interface, make sure the **Status** field is set to **Up** so that it can be used immediately. 
- When done editing a boot-time interface, click the **Save and Apply** button to save your changes for use at bootup time, and to make them immediately active. If you are editing an active interface, just click **Save** to activate your changes. 

[![](/images/docs/screenshots/modules/light/network-configuration-edit.png "Edit Active Interface: Network Configuration Screenshot")](/images/docs/screenshots/modules/light/network-configuration-edit.png)

After changing any of your system's IP addresses, be sure to update any host address entries associated with them as well. See the **Editing host addresses** section below for details on how to do this. You may also need to update records in your DNS server as well. 

An active interface can be shut down by clicking the **Delete** button on its editing form instead. Similarly, a boot-time interface can be removed (for example if you have removed a network card) so that it will not be activated at startup by clicking the **Delete** button on its form. 

### Adding a network interface
There are two situations in which you might want to add a new network interface - if your system has just had a network card installed, or if you are adding an additional virtual IP address to an existing interface. In the latter case, the new virtual interface is not associated with its own separate network card, but instead adds an additional IP address to an existing Ethernet card. Virtual addresses are often used on systems hosting multiple websites, so that each site can have its own IP address. 

Before an interface for a new network card can be configured, you must make sure that it is recognized by the Linux kernel and the appropriate kernel module loaded. There is no support in Webmin for doing this at the moment, but most distributions include a graphical tool for loading kernel modules, or a configuration file in `/etc` that specifies which modules to load. Once the interface is recognized, the steps to configure it are: 
- On the main page of the module, click the **Add a new interface** link under interfaces **Activated at Boot** time. This will take you to the creation form, which is similar to the editing form.
- Enter the interface name (such as _eth1_ or _tr0_) into the **Name** field. This must correspond to whatever name has been assigned by the kernel. 
- In the **IP Address** field, either enter an address or select the **From DHCP** option for it to be dynamically assigned. 
- Enter the netmask for the network the interface is on into the **Netmask** field, such as _255.255.255.0_. 
- Set the **Broadcast** field based on the address and netmask.  For example, if the IP was _10.1.2.3_ and the netmask was _255.0.0.0_ then the broadcast address would be _10.255.2.255_. 
- If you want the interface to be brought up at boot time, set the **Activate at boot?** field to **Yes**. 
- Finally, click the **Create** button. Assuming there are no errors in your input, you will be returned to the list of interfaces. 
- To make the interface active now, click on its name from the interfaces **Activated at Boot** time list. Then on the editing form, click the **Save and Apply** button. If any error occurs during activation (such as the interface not being recognized by the kernel) Webmin display an error message. 

A virtual interface adds an additional IP address to an existing 
real interface. Virtual interfaces have names like _eth0:1_, 
where _eth0_ is the name of the real interface and _1_ is the virtual 
number. To add one, the steps to follow are: 
- On the main page of the module, click on the real interface that you want to add a virtual address for, under interfaces **Activated at Boot** time. 
- On the editing form, click the **Add virtual interface** link.  This will take you to a creation form.
- In the **Name** field, enter a number for the virtual interface.  This must not be used by any existing virtual interface on the same real network card. 
- Fill in the **IP Address** field with the address that you want to assign to the virtual interface. 
- The **Netmask** and **Broadcast** fields should be set to the same addresses as the real interface. They would only be different if the virtual interface was on a different IP network that was sharing the same LAN as the network for the real interface. 
- Assuming you want the virtual interface to be created at boot time, set the **Activate at boot?** field to **Yes**. 
- Hit the **Create** button. As long as there are no errors in your input, you will be return to the list of interfaces. Your new virtual interface will appear under its real parent in the interfaces **Activated at Boot** time section. 
- To activate the virtual interface immediately, click on its name and on the editing form click the **Save and Apply** button.

### Routing and Gateways
Any system attached to a large network needs to know the address of a default gateway. In some cases, the system itself may be a gateway as well - perhaps forwarding data between a local area network and a dialup or broadband connection. In this case, it must be configured to forward incoming packets that are destined for some other address. 

[![](/images/docs/screenshots/modules/light/network-configuration-routing-and-gateways.png "Network Configuration Screenshot")](/images/docs/screenshots/modules/light/network-configuration-routing-and-gateways.png)

In some cases, traffic destined for certain networks may have to be sent via another router instead of the default gateway. Or if the more than one IP network shares the same LAN, traffic for any of those networks must be sent using the correct interface. If either of these are the case on your network, static or local routes need to be configured so that the system knows where to send packets for certain destinations. 

To change the default gateway used by your system or enable packet forwarding, the steps to follow are: 
- On the Network Configuration module's main page, click the **Routing and Gateways** icon. This will take you to a form for configuring routing, which is unfortunately slightly different on each Linux distributions due to differences in the underlying configuration files. 
- Enter the IP address of the default gateway into the **Default router** field. 
- Enter the name of the network interface that must be used to reach the default router into the **Default route device** field. On some Linux distributions this field is optional, meaning that the system will work it out automatically. On others, there is a **Gateway** field next to the **Default router** input. 
- To enable routing, set the **Act as router?** field to **Yes**. 
- On Redhat, Mandrake, MSC and Turbo Linux, you can set up static routing using the **Static routes** table. For each static route, you must enter one row containing the following information:
  - In the **Interface** column, enter the interface that will be used to reach the router, such as _eth0_.
  - In the **Network** column, enter the address of the remote network, such as _192.168.5.0_.
  - In the **Netmask** column, enter the network's netmask, such as _255.255.255.0_.
  - In the **Gateway** column, enter the IP address of a router that knows how to forward data to the network, such as _192.168.4.1_. 
- On those same distributions, you can set up routing to additional IP networks on connected LANs using the Local routes table.  For each route, you must enter one row containing the following details:
  - In the **Interface** column, enter the name of the interface that the LAN is connected to, such as _eth1_.
  - In the **Network** column, enter the address of the additional IP network, such as _192.168.3.0_. 
- Click the **Save** button when done. Any changes will not be activated immediately - instead, they will only take effect when your system is next booted. 

If your system's primary network connection is via PPP dialup, then the default gateway will be assigned automatically when you connect and removed when you disconnect. Therefore there is no need to set it up using this form.

### Hostname and DNS Client
Every Unix system has a hostname, which appears in the login prompt, system logs, outgoing email and on every Webmin page. Normally the hostname is the same as or part of the DNS name for the system's IP address, but this does not have to be the case, especially if the system is not connected to a network or only connects occasionally via dialup. However, for permanently connected systems the hostname should be the hosts fully qualified DNS name (like _server1.foo.com_), or just the first part (like _server1_). Anything else is likely to cause confusion and possibly network problems. 

When a Linux system is first set up, you get to choose the hostname as part of the distribution's installation process. However, it can be changed at any time, either using Webmin, a GUI tool provided by the distribution, or the hostname command.

[![](/images/docs/screenshots/modules/light/network-configuration-hostname-and-dns-client.png "Network Configuration Screenshot")](/images/docs/screenshots/modules/light/network-configuration-hostname-and-dns-client.png)

To make the change in Webmin, the steps to follow are: 
- On the main page of the Network Configuration module, click the **Hostname and DNS Client** icon. This will take you to the form for editing the hostname and DNS options shown in the screenshot above. 
- Enter the new hostname (composed of letters, numbers, underscores and dots) into the **Hostname** field. 
- Click the **Save** button to have it immediately changed. Your browser will be returned to the module's main page. 
- Change the host address for your old hostname to the new one, as explained in the **Editing host addresses** section below. 
- If you are running a DNS server, don't forget to update the entry for your system there as well. 

As explained in the introduction to this chapter, in order to lookup hostnames and IP addresses your system will almost certainly need to know the addresses of DNS servers on the network. To change the system's DNS settings, follow these steps: 
- Click on the **Hostname and DNS Client** icon on the main page of the module, which will take you to the form shown in the screenshot above.
- Enter the addresses of up to three servers into the **DNS servers** field. If the first is not available, your system will try the second or finally the third. Most networks will have at least a primary and secondary DNS server to increase reliability in case one fails. 
- The **Resolution order** field can be used to control where your system will look when resolving hostnames and IP addresses.  Generally the defaults are reasonable, with **Hosts** (the `/etc/hosts` file) listed first and **DNS** later. However, if you are using NIS for hostname resolution you will need to make sure it is selected somewhere in the order. 
- In the **Search domains** field, enter any domain names that you want your system to automatically append to resolved hostnames. For example, if _foo.com_ was listed and you ran the command `telnet server1` then the IP address for _server1.foo.com_ would be looked up. 
- When done, click the **Save** button. Any changes will take effect immediately in all programs running on your system. 

If your system's only network connection is via dialup, the DNS servers may be assigned automatically by your ISP depending on your PPP configuration.

### Host Addresses
Host addresses are mappings between an IP address and one or more hostnames that are stored in the `/etc/hosts` file on your system. Because they are stored locally, they can be looked up at any time, even when a DNS server is not accessible. On a small network with only a few systems, you may choose not to run a DNS server at all, but instead keep the addresses of every system in the hosts file on each system. In fact, this is what was done in the early days of the Internet before DNS was developed. 

To view the addresses on your system, click the **Host Addresses** icon on the module's main page.

[![](/images/docs/screenshots/modules/light/network-configuration-host-addresses.png "Network Configuration Screenshot")](/images/docs/screenshots/modules/light/network-configuration-host-addresses.png)

There will always be an entry for `localhost`, and probably one for your system's hostname as well. If your system's IP address or hostname has been changed, the host addresses list will probably not reflect the change, which could cause problems. To change a host address, the steps to follow are: 
- Click on its IP address from the list, which will take you to an editing form. 
- Enter the new address into the **IP Address** field. 
- Enter any hostnames into the **Hostnames** field. It is always a good idea to enter both the short and long forms of any hostname, such as _server1.foo.com_ and _server1_ so that both can be used. 
- Click the **Save** button, and if there are no errors in the form your browser will return to the list of hosts and addresses. 

You can add extra host addresses by clicking the **Add a new host address** link above or below the link and filling in the same form. There are no restrictions on the same hostname being associated with two different IP addresses, or the same IP address appearing twice in the list. 

### Module access control
As [Webmin Users](/docs/modules/webmin-users) explains, it is possible to limit the features of this module that a particular Webmin user or group can access. For example, you may want to allow a user to only edit the host addresses 
list, or only be able to view settings instead of editing them. To do this, create or edit a Webmin user who has access to the module, and then follow these steps: 
- In the Webmin Users module, click on Network Configuration next to the name of the user or group that you want to restrict.  This will bring up the module access control form. 
- Change the **Can edit module configuration?** field to **No**, so that they user cannot configure the module to edit a host addresses file other than `/etc/hosts`. 
- The **Can edit network interfaces?** field determines which interfaces the user can see and edit. Setting it to **Yes** allows editing of all of them, while choosing **No** prevents the Network Interfaces page from being accessed at all. If **View only** is chosen, all interfaces will be visible but the user will not be able to change any of their attributes. If **Only interfaces** is chosen, only those whose names (separated by spaces) are entered into the field next to it will be editable. All others will be only viewable. 
- If the **Can edit routing and gateways?** field is set to **Yes**, the user will be able to set up the default router and static routes as normal. If **No** is chosen, the Routing and Gateways page will not be accessible at all, or if **View only** is chosen the current settings will be visible but not changeable. 
- Similarly, the **Can edit DNS client settings?** and **Can edit host addresses?** fields can be set to **Yes**, **View only** and **No** to control access to the DNS Client and Host Addresses pages respectively. 
- When you are done making selections, click the Save button to have the new restrictions immediately activated. 

Be very careful giving an un-trusted user the rights to edit any network configuration in this module, as he may be able to figure out a way to gain _root_ access or disrupt other users by changing routes, host addresses or interface settings. 

### Other operating systems
The Network Configuration module is also available on several other operating systems, with fairly similar options to Linux. Due to the different features supported by network configuration files on other versions of Unix, in some sections the user interface is quite different. The supported systems and the variations between them and Linux are: 
#### Sun Solaris and SCO UnixWare
  - When editing a boot-time network interface, all that can be changed is the IP address. 
  - The boot-time settings for the loopback interface cannot be edited at all. Both operating systems always enable it at boot with the IP address _127.0.0.1_.
  - On the **Routing and Gateways** page, multiple default routers can be entered. There is no need to specify a default route device though, as it is always worked out automatically. 
#### FreeBSD and NetBSD
  -  There is no option to use DHCP to automatically assign an address for an interface at boot time.
  -  On the **Routing and Gateways** page, there is no default route device field. However, there is an additional **Start route discovery daemon?** option. 
  -  The hardware address of an active interface cannot be changed. 
  -  When creating a virtual interface, the netmask must be entered as _255.255.255.255_.
#### OpenBSD
  -  On the **Routing and Gateways** page, there is no default route device field. However, there is an additional **Start route discovery daemon?** option.
  - The hardware address of an active interface cannot be changed.
