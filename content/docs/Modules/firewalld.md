---
title: "FirewallD"
date: 2023-09-10
author: "Ilia Ross"
weight: 635
---

### About
The **FirewallD** module in Webmin provides an intuitive interface for managing FirewallD rules on your server. FirewallD is a front-end to `nftables` or formerly `iptables` that provides an easier way to manage host-based firewall rules. The module located under the Networking category.

[![](/images/docs/screenshots/modules/light/firewalld.png "FirewallD Screenshot")](/images/docs/screenshots/modules/light/firewalld.png)

### Module Features

#### Show rules in zone
   Use the dropdown menu to select a specific zone and view its rules. Different zones can represent different trust levels for network connections.

   - **Make Default**

     Set the selected zone as the default zone.
   - **Delete Zone**

     Remove the selected zone.
   - **Add Zone**

     Add a new zone to FirewallD.

#### Rule Management Buttons
   - **Select All Rules**

     Highlight all rules in the selected zone.
   - **Invert Selection**

     Toggle the selection status for all rules.
   - **Add Allowed Port**

     Open a port in the firewall for incoming traffic.
   - **Add Allowed Service**

     Allow traffic based on a predefined service (e.g., SSH, HTTP).
   - **Add Port Forward**

     Redirect incoming traffic from one port to another.
   - **Edit Config Files**

     Directly modify FirewallD's configuration files.
     [![](/images/docs/screenshots/modules/light/firewalld-manual.png "FirewallD Screenshot")](/images/docs/screenshots/modules/light/firewalld-manual.png)


#### Delete Selected Rules
   After selecting one or more rules, use this button to remove them from the zone.

#### Apply rules to
   - **All interfaces**
     
     The rules will apply to all network interfaces on the server.
   - **Selected interfaces**
     
     Choose specific network interfaces for the rules to apply to.

#### Action Buttons
   - **List Firewall Rules**
   
     Displays rich and direct FirewallD rules in the selected (e.g., public) zone.
   - **Reload FirewallD**
   
     Implement any permanently created rules without restarting the server.
   - **Stop FirewallD**
   
     Turn off the FirewallD service, removing the displayed rules.
   - **Activate at Boot**
   
     Toggle whether FirewallD should start automatically when the server boots up.

#### Edit Service
   Click on the **Rule Type** from the displayed table to open the **Edit Service** page. Here you can modify the existing service's parameters and settings.

[![](/images/docs/screenshots/modules/light/firewalld-edit.png "Edit FirewallD Service Screenshot")](/images/docs/screenshots/modules/light/firewalld-edit.png)

### Configuration

Webmin provides several configurable options for the FirewallD module:

 - **Full path to firewall-cmd program**: Specify the complete directory path to the `firewall-cmd` executable. It's the command-line client of FirewallD.

 - **FirewallD init script name**: Define the initialization script used by Webmin to start, stop, or reload FirewallD.

 - **FirewallD configuration directory**: This is where Webmin looks for the FirewallD's configuration files. By default, FirewallD's configuration is stored in `/etc/firewalld/`. However, if your system has a custom location or if you want Webmin to work with an alternative configuration, you can specify that directory here.

### Tips
- Always test new rules to ensure they're working as expected and not accidentally blocking essential services or exposing vulnerabilities.
