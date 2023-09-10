---
title: "Linux Firewall"
date: 2023-09-10
weight: 645
---

### About
If your system is connected to the Internet, it may be useful to protect it with a firewall to prevent unauthorized access. This page covers the process of setting up and configuring a **Linux firewall** with Webmin and **iptables**. 

### Intro
A firewall is a system that protects itself and other hosts on a network from attackers on untrusted networks, such as the Internet. It can block packets and connections based on a variety of criteria, 
such as the source address, destination address, port and protocol. Typically a firewall is also a router, forwarding packets between a secure local network and the untrusted Internet - however, it is also possible for a system to protect just itself. 

A firewall system can also be configured to hide multiple hosts behind a single IP address, using a process known as NAT (Network Address Translation). Typically, the hidden hosts are on an internal LAN using a private IP network (such as 192.168.0.0) and the firewall has a single Internet IP address. NAT allows these internal hosts to communicate with others on the Internet, even though they do not have real public IP addresses.

The Linux kernel has included several different firewall implementations over the years, such as IPfwadm and IPchains. The 2.4 series of kernels include the IPtables firewall, which is more powerful and flexible than its predecessors. All Linux distributions that use the 2.4 kernel has IPtables support enabled, and include the commands needed to configure it. This chapter and the Linux Firewall module only covers the setting up of a firewall using IPtables, not any of the older implementations like IPchains or IPfwadm.

All IP network traffic is broken up into packets, which are chunks of data with a source, destination and protocol information. Even a continuous flow of data such as the download of a large file is broken into packets when sent, and re-assembled at its destination. Because the IPtables firewall operates at the IP level, all of its rules and chains evaluate and operate on individual packets, not TCP connections or HTTP requests. 

An IPtables firewall is made up of three different kinds of object - tables, chains and rules. Each of the three tables contains two or three standard chains, and possibly many user-defined custom chains. Each chain contains zero or more rules, which are applied to packets received by or sent out from the firewall to determine their fate. The three tables and their standard chains are:

 - Packet filtering (filter): The INPUT, OUTPUT and FORWARD packets chains in this table apply to packets received by, sent out from  or forwarded by the firewall respectively. If the firewall system is acting as a router, only the FORWARD chain applies to routed packets. Network traffic destined for the system itself is processed by the INPUT chain, and traffic sent out by local process by the OUTPUT chain. For a system that is an ordinary router and not doing any masquerading, or a system that only needs a firewall to protect itself, this is the only table that rules need to be added to. 
 - Network address translation (nat): This table is used only  for packets that start a new connection. The rules in its PREROUTING chain are applied to packets as soon as they are received by the system for routing, and the POSTROUTING for packets about to leave after routing. The OUTPUT chain rules are applied to locally generated packets for modification before routing. Rules are typically added to this table to set up masquerading, transparent proxying or some other kind of address translation.
 - Packet alteration (mangle): This table is used only for specialized packet alteration. It contains two chains - PREROUTING for modifying packets before routing, and OUTPUT for modifying locally generate packets. This table is rarely used at all in a typically firewall configuration. 
When a network packet is processed by a chain, each rule in the chain is executed in order. Every rule has a set of conditions that determine whether the rule matches or not, and an action that is taken in the case of a match. This action may be to immediately accept the packet, immediately drop it, perform some modification or continue execution. If the end of a chain is reached, its default action will be taken instead, which is usually to allow the packet through. 

The firewall can also effect packets send out by processes on the local system. These are checked against the three Output chains and the After routing chain before being transmitted via the appropriate network interface to their destinations. This means that an IPtables firewall can be used to limit the addresses that local processes can connect to, and the protocols they can use. 

### The module
This module can be used to set up a firewall on a Linux system with IPtables enabled, or edit any part of an existing firewall. It stores the firewall configuration in a save file created and read by the iptables-save and iptables-restore commands, not in a shell script containing calls to the iptables command. Redhat, Debian and Gentoo Linux all use a save file like this as standard, which Webmin knows about and will work with. 

If you have manually created a firewall using a shell script and want to use this module to edit it from now on, it will have to be converted to an IPtables save file so that Webmin can edit it. 

What you have to do is stop your custom script from being run at boot time, and tell the module to create its own firewall setup script instead. 

This also applies to firewalls created by tools such as YaST or fBuilder, which write out shell scripts of iptables commands. Unless the tool can also edit an IPtables save file (such as knetfilter), it should not be used alongside Webmin's Linux Firewall module, or they will probably overwrite each other's settings. 

When you enter the module from the Networking category, the main page will usually display a list of all chains and rules in the first table that contains any (usually **Packet filtering**), as shown in below. However, if Webmin detects that the iptables or iptables-save commands are not installed, an error message will be displayed instead - check your distribution CD or website for a package containing them. 

If this is the first time you have used the module and no firewall has been set up on your system yet, the main page will instead display a form to simplify the initial firewall creation. Three options will be displayed - select one and click the **Setup Firewall** button to set it up. If necessary, Webmin will also display an **Enable firewall at boot time?** check-box which if selected will cause a boot-up script to be created so that the firewall is enabled at boot time as well. The firewall setup options are:
 - Allow all traffic: If selected, the firewall will be created 'empty' and all traffic allowed through. 
 - Do network address translation on external interface: The firewall will be set up for NAT, so that hosts on an internal LAN can access the Internet via a host with a single public IP address. You must select the network interface that is connected to the Internet from the list next to this option, such as _ppp0_. 
 - Block all incoming connections on external interface: If chosen, the firewall will be set up to block all traffic coming into your system on the selected network interface, except for established connections, DNS replies and harmless ICMP packets. The interface you select should be the one connected to the Internet, such as _ppp0_. 

If this is the first time the module has been used and Webmin detects that an firewall already exists on your system, its rules will be displayed and you will be prompted to convert it to a save file so that the module can be used to edit it. If you choose to do this by clicking the **Save Firewall Rules** button, all existing tables, chains and rules will be safely recorded. An *Enable firewall at boot time?* checkbox will also be displayed if necessary, which if selected will cause Webmin to create a boot script to activate the saved firewall rules at boot time. 

If you choose to convert an existing manually created firewall configuration, be sure to disable any existing script that sets it up at boot time. Otherwise both the old script and the one created by Webmin will be run, possibly causing the rules set up in this module to be canceled out by the older manual configuration. 

### Allowing and denying network traffic
To restrict the types of connections and packets that your firewall will accept or forward, you need to create additional firewall rules. The best place for these rules is the **Packet filtering** table, in either the **Incoming packets** or **Forwarded packets** chain. If your firewall is acting as a router and you want to protect systems on the secure network that it is attached to but not the firewall itself, the **Forwarded packets** chain should be used. However, if you want to protect both the firewall and other systems that it routes to, rules should be added to the **Incoming packets** chain. 

It is also possible to restrict data being sent out by your system, which may come from local processes or be forwarded from other hosts. To do this, you can add rules to the **Outgoing packets** chain. This can be useful for limiting what addresses and ports local users can connect to, if you desire. 

To create a new rule to block traffic, the steps to follow are:
 1. On the main page of the module, select **Packet filtering** from the list next to the **Show IPtable** button, and then click it to switch to the filtering table. 
 2. To add a rule that applies to all incoming traffic, click the **Add Rule** button in the **Incoming packets** section. If you want to restrict only forwarded traffic, click the button under Forwarded packets instead. Either way, you will be taken to the rule creation form.
 3. Change the **Action to take** to **Drop**, so that packets matching this rule are silently discarded by the firewall. 
 4. In the **Condition details** section, select the conditions that determine which packets will be matched and thus dropped.  Only packets matching all conditions that are not set to **Ignore** will be dropped. Some examples of the conditions to select to block certain kinds of traffic are:
    - **Blocking all connections to a certain TCP port**
      
      Set the **Network protocol** field to **Equals** and select **TCP**. To block a port, a protocol must always be selected. Set the **Destination TCP or UDP port** to **Equals** and enter a port number into the **Port(s)** field next to it. You can block several ports by entering a list of numbers separated by commas into the Port(s) field, or block an entire range by selecting **Port range** and entering the start and end ports into the fields next to it.
    - **Blocking all traffic from a particular address**
      
      Set the **Source address or network** to **Equals** and enter the IP address to block into the field next to it. You can also block an entire network by entering a network/prefix pair like _130.194.164.0/24_ into the field. Set the **Connection state** to **Does not equal** and select **Existing connection** from the menu next to it.  This step will allow your system to connect to the blocked addresses, but not vice-versa.
    - **Blocking traffic to a particular address**
      
      Set the **Destination address or network** to **Equals** and enter the IP address or network to block into the field next to it. Because this will effectively stop the blocked system from connecting to yours as well, it may be a good idea to set the **Connection state** to **Does not equal** and select **Existing connection** from the menu next to it. In all cases, it is usually a good idea to set the **Incoming interface** to the network interface that is connected to the Internet (such as _ppp0_), so that the restriction does not apply to connections from your local LAN. 
 5. When you are done selecting conditions, click the **Create** button. As long as there are no errors in your input, you will be returned to the module's main page on which the new rule will be listed. 
 6. To make the new rule active, click the **Apply Configuration** button at the bottom of the page. 

The rules in each chain are evaluated in order from top to bottom, and the action taken is determined by whichever one matches first. If none match, then the chain's default action is taken, which is usually to accept to the packet. You can make use of this evaluation order to create a rule that allows a single IP address, followed by a rule to deny an entire network. The final effect will be that every host within the network is denied except one. 

Because the ordering of rules is important, you may sometimes want to add a rule in the middle of an existing chain. To do this, use on of the arrow buttons under a chain's **Add** column on the module's main page to create a new rule either before or after an existing one. 

The most common actions and their meanings are listed below. Not all are available in all chains and tables. 
  - **Do nothing**
      
      If a rule with this action is matched, nothing will be done and processing will continue to the next rule. 
  - **Accept**
      
      Matching packets will be immediately accepted, and no further processing will be done in the chain. However, rules in other tables may still effect the packet.
  - **Drop**
      
      Matching packets will be silently discarded, as though they were never received at all. No further processing will take place in this chain or any other.
  - **Userspace**
      
      Packets will be passed to a normal userspace process.  This action is rarely used.
  - **Exit chain**
      
      Jump immediately to the end of the chain, and execute its default action instead. If this is used in a user-defined chain, processing will return to the rule that called it.
  - **Masquerade**
      
      Matching packets will have their source address changed to appear to come from the firewall system, and no further rules in the chain will be processed. When this action is selected, you can use the **Source ports for masquerading** field to control which ports the firewall will use for masqueraded connections.  See the **Setting up network address translation** section for more details. The **Masquerade** option is only available in the **Network address translation** table, in the **Packets after routing** chain.
  - **Source NAT**
      
      Similar to the **Masquerade** option, but better suited to systems that have a fixed Internet IP address. If selected, you can use the **IPs and ports for SNAT** field to control which available in the **Network address translation** table, in the **Packets after routing** chain.
  - **Destination NAT**
      
      Matching packets will have their destination address and port modified based on the IPs and ports for DNAT field.  This is the basis for transparent proxying, so to learn more see the **Setting up a transparent proxy** section below. This action is only available in the **Network address translation** table, in the **Packets before routing** and **Output** chains.
  - **Redirect**
      
      This action redirects all matching packets to a port or ports on the firewall box, specified by the **Target ports for redirect** field. It can also be used for transparent proxying, although destination NAT is more flexible. The redirect action is only available in the **Network address translation** table, in the **Packets before routing** and **Output** chains. 

You can also choose the **Run chain** option for the **Action to take**, which will pass the packet on to the user-defined chain or custom target entered into the field next to it. See the **Creating your own chain** section below for more information on user-defined chains. Some of the targets available are LOG (for logging packets to syslog), MIRROR (for reflecting packets back to their sender) and MARK (for marking a packet for later conditions). 

For each condition, the options **Ignored**, **Equals** and **Does not equal** can be selected. The first means that the condition is not used at all when checking if a packet matches the rule. The second means that a packet must match the condition for it to match the entire rule, and the third means that the packet must NOT match the condition for the rule to be executed. If for example the "Incoming interface" condition was set to "Does not equal" and _eth0_ selected, 
the rule would match only packets coming in on any interface except the primary Ethernet card. 

Because almost all network protocols involve traffic flowing in two directions, attempting to block just incoming traffic from some address using the **Source address or network** condition will also block connections to the address as well, because reply packets that are part of the connection will be dropped. The same goes for blocking incoming data on a particular port using the **Destination TCP or UDP port** condition - if in the unlikely case the randomly chosen source port of a connection from your system matches the blocked port, any replies to it will be dropped. For these reasons, it is usually a good idea when creating deny rules to set the **Connection state** condition to **Does not equal** and select **Existing connection** from menu next to it. This will cause IPtables to keep track of outgoing connections made by your server, and not block them. 

As you can see, there are many different conditions available which can be combined to create quite complex rules. To learn more about what each of the available conditions do, see the *Firewall rule conditions* section below. Because there are so many conditions, Webmin allows you to create new rules that are almost identical to existing ones. To do this, click on an existing rule to edit it and use the **Clone rule** button at the bottom of the page to go to the rule creation form with all conditions and actions set based on the original rule.

### Changing a chain's default action
Packets that do not match any rule in a chain will be processed using the default action, which is usually to accept the packet. On the module's main page, the default action for each chain is shown next to the **Set default action to** button. To change it, the steps to follow are:
 - Select the new action from the menu next to the **Set default action to** button. Only the **Accept**, **Drop**, **Userspace** and **Exit chain** actions are available - see the **Allowing and denying network traffic** section above for their meanings.  Typically, only **Allow** and **Drop** make sense as a default action.  
 - Click the **Set default action to** button to save the new default. 
 - If changing to **Drop**, add any additional firewall rules needed so that your system can still access other servers and supply important services. 
 - When done, click the **Apply Configuration** button to make the new default active. 

Just changing the default action to **Drop** for incoming packets is an easy way to totally cut your system off from the network, and possibly make it unusable. Before you do so, make sure you allow at least the following kinds of traffic:
* All established connections. Create an **Allow** rule with the **Connection state** set to **Equals** and **Existing connection** chosen. 
* Connections related to those that are established, such as FTP data connections. Create an **Allow** rule with the **Connection state** set to **Equals** and **Related connection** chosen.
* All traffic on the loopback interface. Create an **Allow** rule with **Incoming interface** set to **Equals** and lo chosen.
* Traffic from your system to itself on its primary network interfaces.  For each interface create an Allow rule with both the **Source address or network** and **Destination address or network** set to the interface IP address.
* Safe ICMP types. Create four **Allow** rules with the **ICMP packet type** set to **Equals** and echo-reply, destination-unreachable,  source-quench and time-exceeded chosen. 

Changing the default action for forwarded packets to **Drop** will not cause as many problems - it will just be the equivalent of turning off forwarding altogether. Changing the default action for outgoing packets to **Drop** is a bad idea as it will cut off all network access, and probably makes very little sense in most cases. 

### Editing firewall rules
Webmin can be used to edit any of the existing firewall rules that have been created manually, in another program or using this module. Even though the module does not support all of the available IPtables condition and action options, you can still use it to safely edit rules containing unknown options. Only those known to Webmin can be changed, and others will be left untouched. 

To edit a rule, the steps to follow are:
 1. On the main page of the module, select the table the rule is in from the list next to be **Showing IPtable** button before clicking it. 
 2. Click on the action of the rule you wish to change in the table for its chain. This will take you to an editing form, which is identical to the creation form shown in Figure 19-3. 
 3. Change the action or any of the conditions, and click the **Save** button to return to the list of chains and rules. Or to delete the rule altogether, click the **Delete** button. 
 4. To make the changes active, click on **Apply Configuration**. 

Rules can be moved up and down within their chain using the arrows under the **Move** column on the main page. Because rules are evaluated in order by the firewall, changing their ordering can effect which traffic is allowed or denied. Whenever you create a new rule, it will be added to the end of its chain, so it may be necessary to move it up the correct position to get the desired effect. 

### Creating your own chain
It is possible to create your own custom chains of rules in addition to the standard ones. The difference is, they will only be executed if a rule in one of the standard chains has its action set to explicitly 
jump to a custom chain. When execution of a custom chain finishes (or a rule with the **Exit chain** action is matched), evaluation will return to the calling chain. This means that custom chains can be used to define rules that are shared by several standard chains, instead of repeating the same rules in multiple places. In a way, a custom chain is like a subroutine in a programming language. 

To create your own chain, the steps to follow are:
 1. On the main page of the module, select the table you want the chain to be in from the menu next to **Showing IPtable**, and click the button. Custom chains can only be called from other chains in the same table. 
 2. Enter the name of your new chain into the text box next to the **Add a new chain named** button, and then click the button to create it. Chain names must be unique, and are generally composed of only lower-case letters and numbers. 
 3. Once the new chain has been created, it will appear at the bottom of the page. You can use its **Add rule** button to append rules to it, just as with one of the normal chains. 

Custom chains do not have a default policy, so they have no **Set default action to** button on the main page. If execution of the chain reaches the end, control will always return to the caller. Custom chains can be deleted though, using the **Delete chain** button underneath their tables of rules. 

A custom chain can contain rules that jump to other custom chains. However, a chain cannot jump to itself, nor can you create loops by jumping to another chain the jumps back to the first. Even if this were possible, it would be a very bad idea! 

### Setting up network address translation
If you have several systems in your home or office connected by a LAN and only one Internet IP address, network address translation can be used to give all those systems almost complete Internet access. NAT hides the addresses of all systems on the internal LAN behind a single Internet address, converting addresses and ports back and forth as needed. This allows all internal systems to make connections to any host on the Internet, such as web servers, DNS servers, POP3 servers and so on. The only limitation is that internal systems cannot receive connections from other Internet hosts, which can cause some protocols (such as Internet telephony and network games) to fail. 

Because of this limitation, internal systems are protected from most attacks from other hosts on the Internet, just as if you were to block all forwarded packets coming in on the external interface. NAT also makes IP address assignment easier, as there is no need to worry about running out of real Internet addresses to assign to internal hosts that do not really need then. For these reasons, it may make sense to set up NAT in your organization even it is not totally necessary from a networking point of view. 

NAT works by modifying the source address and port of packets sent by internal hosts and routed through the firewall. The source address is always changed to the external IP address of the firewall system, and the source port to a randomly chosen unused port. When a reply packet comes back, its destination port is used to determine the original internal client IP address and port to which the packet should be forwarded. 

To set up NAT, all you really need is a system with two network interfaces - one for the internal LAN, and one that is connected to the Internet via dial-up, ISDN or broadband. Once you have this, the steps to follow are:
 1. On the internal LAN, every system's Ethernet interface should be assigned an address on a private IP network such as 192.168.0.0, including the gateway system. 
 2. Set the default router on all internal systems to the LAN IP address of the gateway system. 
 3. Make sure that the gateway has IP forwarding enabled in the Network Configuration module under Routing and Gateways.  See [Network Configuration](/docs/modules/network-configuration) module for more information on how to do this. 
 4. On the main page of the Linux Firewall module on the gateway system, select **Network address translation** from the list next to the **Showing IPtable** button. Then click the button to display chains in the NAT table. 
 5. Click the **Add rule** button in the **Packets after routing** section, which will take you to the rule creation form. 
 6. Set the **Action to take** to **Masquerade**. 
 7. To control which ports the firewall will use for masqueraded connections, set the **Source ports for masquerading** option to **Port range** and enter starting and ending port numbers into the fields next to it. Usually just selecting **Any** to let the firewall use any available port will work fine. 
 8. Change the **Outgoing interface** condition to **Equals** and select the external network interface from the list next to it, such as _ppp0_. 
 9. Click the **Save** button at the bottom of the page to return to the list of chains and rules. 
 10. Click on **Apply Configuration** to make the new rule (and NAT) active. 

It is possible to combine NAT with other firewall rules in the **Packet filtering** table to block connections to the firewall host itself. You can also prepend deny rules to the **Packets after routing** chain to stop certain internal hosts from accessing the Internet, or limit the ports to which they can connect. 

The instructions above will work on any network that has a gateway system with a single Internet IP address. However, if your gateway's address is static it is better to select **Source NAT** in step 6 
instead of **Masquerade**. When using masquerading, any connections being forwarded by the firewall will be lost if the external network interface goes down, even if it comes back up again with the same IP address. If the external interface has a dynamically assigned address, this doesn't matter as the connections would be lost anyway. But when using a static IP address, it is possible for a connection to be maintained even through a short network outage. 

To use it, in step 6 set the **Action to take** to **Source NAT**. Then set the **IPs and ports for SNAT** to **IP range** and enter your system's static external IP address into the field next to it. All other 
steps in the NAT setup process are the same. 

### Setting up a transparent proxy
Many networks use proxy servers like Squid to cache commonly accessed websites and thus cut down on the amount of bandwidth used by web browsing clients. However, normally each client must be configured to use the proxy server instead of making direct connections to websites. On a large network with many clients systems or at an ISP where they are owned by many different people, this individual configuration can be difficult. It is made worse by each browser having its own proxy server settings, so if a user installs a new browser it will probably default to not using a proxy at all. 

Fortunately, there is a solution - transparent proxying. If all client systems access the Internet through a gateway running an IPtables firewall, it can be configured to re-direct connections to port 80 (used by most websites) to a proxy server on the some other system. This means that clients do not need to be configured to access a proxy, as any HTTP requests that they make will be transparently sent to the proxy server without their knowledge. 

To set up transparent proxying, the steps to follow are:
 1. On the main page of the Linux Firewall module on the gateway system, select **Network address translation** from the list next to the **Showing IPtable** button before clicking it. 
 2. In the **Packets before routing** section, click on **Add rule** to go to the rule creation form. The rule being added will redirect all traffic on port 80 forwarded by the firewall system to a proxy server. 
 3. Set the **Action to take** to **Destination NAT**. 
 4. In the **IPs and ports for DNAT** field, select **IP range** and enter the address of the proxy server system into the field next to it. If the proxy is running on the same system, enter its Ethernet IP address (not _127.0.0.1_). In the field next to **Port range**, enter the port the proxy server is running on, such as _8080_. 
 5. Set the **Incoming interface** to **Equals** and select the internal LAN interface, such as _eth0_. 
 6. Set the **Network protocol** to **Equals** and select **TCP**. 
 7. If the proxy is on another system that is also on the internal LAN, make sure that its connections on port 80 will not be proxied by the firewall as well! To do this, set the **Source address or network** condition to **Does not equal** and enter the IP address of the proxy server into the field next to it. If the proxy is on a different LAN or is the firewall system, this is not necessary. 
 8. Set the **Destination TCP or UDP** port to **Equals** and enter _80_ into the **Port(s)** field. 
 9. Click the Create button to save the rule and return to the module's main page. 
 10. Click on **Add rule** under **Packets after routing** to bring up the rule creation form again. This rule will forward packets back in the other direction from the proxy to the client. If your firewall system is also running the proxy server, this rule is not necessary and you can skip to step 16. 
 11. For the **Action to take**, select **Source NAT**. 
 12. In the **IPs and ports for SNAT** field, select **IP range** and enter the LAN IP address of the firewall server into the field next to it. 
 13. Set the **Destination address or network** to **Equals** and enter the IP address of the proxy server into the field next to it. 
 14. Set the **Network protocol** to **Equals** and select **TCP**. 
 15. Click the **Create** button to add the new rule. 
 16. Back on the main page, click the **Apply Configuration** button.  All packets on port 80 forwarded by your firewall will now be sent to the proxy server instead. 
 17. Assuming you are running the Squid proxy server (version 2.4 or above) on the proxy system, you can use Webmin to configure it. Otherwise, there is no point reading beyond this step. 
 18. On the proxy system, enter the Squid Proxy Server module and click on Miscellaneous Options. 
 19. Set the **HTTP Accel Host** field to **Virtual**, and the **HTTP Accel Port** to _80_. 
 20. Set both the **HTTP Accel With Proxy** and **HTTP Accel Uses Host Header** fields to Yes. 
 21. Finally, click **Save** to return to the main page of the Squid module, and click the **Apply Changes** link near the top of the page to activate the new configuration. 

From now on, any HTTP requests on port 80 forwarded by your firewall will be sent to the proxy server for processing. Transparent proxying can be safely used at the same time as conventional NAT by creating a masquerade rule in the packets after routing chain, as explained in the instructions in the **Setting up network address translation** section above. 

### Setting up port forwarding
On a network that uses NAT to hide internal systems from the Internet, outside hosts cannot connect directly those on the internal network. This is great for security, but can be annoying if there is some internal service that you do want to make available to the outside world. For example, your mail server system may not be the firewall host, which would normal make it inaccessible 
from the Internet. Fortunately, there is a solution to this problem - port forwarding. 

This lets you re-direct all connections to some port on the firewall system to a different host and port on your internal network. For a mail server, all data received on port _25_ might be send to the same port on the host that is actually being used to host user email. Of course, this would make it impossible for your firewall system to receive email itself. 

To set up port forwarding, follow these steps:
 1. On the main page of the Linux Firewall module on the gateway system, select **Network address translation** from the list next to the **Showing IPtable** button before clicking it. 
 2. In the **Packets before routing** section, click on **Add rule** to go to the rule creation form. The rule being added will redirect all external traffic received by the firewall to some internal address. 
 3. Set the **Action to take** to **Destination NAT**. 
 4. In the **IPs and ports for DNAT** field, select **IP range** and enter the address of the internal host into the adjacent text box, such as _192.168.1.10_. In the **Port range** box, enter the port number on the internal host to which data should be sent, such as _25_ for SMTP, _110_ for POP3 or _80_ for HTTP. 
 5. Set the **Network protocol** to **Equals** and select **TCP**. 
 6. In the **Destination TCP or UDP port** field, select **Equals** from the menu and enter the external port number for which forwarding should be done into the adjacent text field. Typically this will be the same as the port entered in step 4. 
 7. Hit the **Save** button to create the rule and return to the main page, and then click the **Apply Configuration** button. 

The only problem with this method is that connections from inside your network to the firewall system will not be forwarded to the other host. 

### Firewall rule conditions
When creating a firewall rule, you can select many different conditions to control which packets the rule matches. A rule's action will only be executed if all the conditions are matched. Each condition can be in one of three states, chosen by the menu next to it on the rule creation form:
 - **Ignore**
 
   The condition will be totally ignored when deciding whether the rule matches or not. 
 - **Equals**
   The rule will only match if the packet matches the address, port, interface or whatever was selected for this condition.
 - **Does not equal**
   
   The rule will only match if the packet does NOT match whatever was selected for this condition. 

The available conditions and what each matches are listed in the table below. Note that some are not available in all tables and chains. 

Remember that each condition is applied on a per-packet basis, and that a single TCP connection may involve multiple packets flowing in both directions.

### See also
* [FirewallD](/docs/modules/firewalld)
