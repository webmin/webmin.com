---
title: "TCP Wrappers"
date: 2023-09-13
weight: 755
---

### About
The **TCP Wrappers** Webmin module uses a simple access control language that is based on client (host name/address, user name), and server (process name, host name/address) patterns.

An extended version of the access control language is described in the `hosts_options(5)` document. The extensions are turned on at program build time by building with `-DPROCESS_OPTIONS`.

### Access Control Files
The access control software consults two files. The search stops at the first match:
- Access will be granted when a (daemon, client) pair matches an entry in the `/etc/hosts.allow` file.
- Otherwise, access will be denied when a (daemon, client) pair matches an entry in the `/etc/hosts.deny` file.
- Otherwise, access will be granted.

A non-existing access control file is treated as if it were an empty file. Thus, access control can be turned off by providing no access control files. 

### Manual Setup
Here's a simple example of how TCP Wrappers might be configured:

In `/etc/hosts.allow`:
```
sshd : 192.168.1.
```
This would allow any IP address in the `192.168.1.x` range to access the SSH daemon.

In `/etc/hosts.deny`:
```
sshd : ALL
```
This would deny all other IP addresses from accessing the SSH daemon.

### Limitations

1. **Limitation to inetd Services**: Originally, TCP Wrappers was tied closely to services launched by `inetd`, but over time, many services began to incorporate native support for TCP Wrappers.

2. **Firewalls & Advanced Security Solutions**: As network environments and threats evolved, more sophisticated solutions, like _iptables_ and _firewalld_ in Linux, emerged. These tools, combined with advanced security systems and SELinux, often made TCP Wrappers redundant in many scenarios.

3. **Deprecation**: In some modern Linux distributions, TCP Wrappers has been deprecated in favor of more advanced security solutions.

While TCP Wrappers might not be as commonly used as it once was, understanding its history and functionality provides insight into the evolution of network security on Unix-like systems.