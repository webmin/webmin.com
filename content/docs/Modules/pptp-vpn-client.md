---
title: "PPTP VPN Client"
date: 2023-09-13
weight: 725
---

### About
The **PPTP VPN Client** Webmin module allows you to create VPN connections to other servers using the PPTP protocol. The module makes use of the standard Linux PPTP client program, and the PPP daemon. Remote servers must be running a PPTP daemon, which can be configured using Webmin's [PPTP VPN Server](/docs/modules/pptp-vpn-server) module.

Multiple tunnels may be defined, each of which must have a remote server to connect to, a login name and a password. A tunnel can also have several associated static routes, to be brought up when it is connected. By default, only a route to the server at the other end of the tunnel is created when it is activated.

Once a tunnel has been created, it can be activated using the **Connect to** button at the bottom of the main page. Multiple tunnels can be active at any one time, and those that are active can be shut down with the **Disconnect from** button.

Also on the main page is the **Edit Global PPP Options** button for editing settings that apply to all tunnels. The most important are those related to MPPE, an encryption protocol using by Microsoft VPN servers to secure PPTP connections. However, support in both the PPP daemon and the kernel is needed for MPPE to work. PPPd versions 2.4.2 and above support MPPE natively, and a patch exists for older versions as well. 

### Intro
PPTP (Point-to-Point Tunneling Protocol) is a method for implementing virtual private networks (VPNs). PPTP uses a control channel over TCP and a GRE tunnel operating to encapsulate PPP packets.

### PPTP VPN Client

A PPTP VPN Client is software or a device that establishes a PPTP connection to a VPN server. This allows users to create a secure and encrypted connection to another network over the Internet or to access region-restricted websites.

#### Key features and components of a PPTP VPN Client include

1. **Connection Establishment**: The client initiates the connection to the PPTP VPN server. This involves setting up a TCP control channel and a GRE tunnel.

2. **Authentication**: Just like PPP, PPTP supports multiple authentication methods. PAP, CHAP, MS-CHAP, and MS-CHAPv2 are some of the authentication protocols that can be used with PPTP.

3. **Encryption**: While PPTP itself doesn't provide encryption, it relies on the PPP connection's encryption capabilities, most commonly using Microsoft Point-to-Point Encryption (MPPE).

4. **IP Address Assignment**: Once connected and authenticated, the VPN client is typically assigned an IP address from a range specified on the VPN server. This allows the client to access the remote network as if it's directly connected.

5. **Data Transfer**: After establishing the connection, data can be securely transferred between the client and the remote network through the encrypted tunnel.

6. **Termination**: When the VPN connection is no longer needed, the client can terminate the connection.

### Points to Consider

- PPTP is one of the oldest VPN protocols and, while simple and widely supported, it's considered less secure than newer protocols like L2TP/IPsec, OpenVPN, or IKEv2/IPsec. Its vulnerabilities have led many to recommend using other more secure protocols if possible.

- Because of its security issues, some organizations and countries have started blocking PPTP traffic.

- In a system administration context, tools like Webmin might have modules to configure and manage PPTP VPN Client settings, allowing administrators to establish, maintain, and troubleshoot PPTP VPN connections.

To sum it up, while PPTP VPN Client provides an easy way to set up a VPN, it's essential to consider its security vulnerabilities before using it in sensitive or critical applications.