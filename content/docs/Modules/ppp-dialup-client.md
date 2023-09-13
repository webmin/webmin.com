---
title: "PPP Dialup Client"
date: 2023-09-13
weight: 715
---

### About
The Webmin’s **PPP Dialup Client** module allows you to set phone numbers, usernames, and passwords for dial-up connections.

### Intro
PPP (Point-to-Point Protocol) is a data link layer protocol used for establishing a direct connection between two nodes. It is used over many types of physical networks, including serial cables and cell phone links, but most commonly over phone lines. PPP provides a method for transmitting datagrams over serial point-to-point links.

#### PPP Dialup Client

A PPP Dialup Client is a software or device that uses PPP to connect to the Internet or another network over a dial-up connection, typically using a modem. In the early days of the Internet, before the widespread use of broadband connections, dial-up was the most common method for individuals to connect to the Internet from their homes.

#### Key aspects of a PPP Dialup Client include

1. **Dialing & Handshaking**: The client initiates the connection by dialing a number and establishing a handshake with the server or another client on the other side.
  
2. **Authentication**: After the handshake, PPP supports multiple authentication protocols, such as PAP (Password Authentication Protocol) and CHAP (Challenge Handshake Authentication Protocol), to verify the credentials of the user.

3. **IP Address Configuration**: Once authenticated, the client is usually assigned an IP address, either statically set or dynamically assigned by the server.

4. **Data Transfer**: After all the setup, data can be transferred between the client and server. PPP encapsulates the IP packets to be sent over the serial link.

5. **Termination**: When the connection is no longer needed or after a set duration, the client can terminate the connection.

In today's world, with the prevalence of broadband, fiber-optic, and cellular networks, PPP Dialup connections have become less common for Internet access. However, the protocol is still relevant in some specialized scenarios and in places where broadband access isn't available or feasible.

In Webmin and similar system administration tools, there might be a module to configure and manage PPP Dialup Client settings, allowing the system administrator to set up and manage dial-up connections for the system.
