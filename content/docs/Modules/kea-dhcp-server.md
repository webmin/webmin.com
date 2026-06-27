---
title: "Kea DHCP Server"
date: 2026-06-27
weight: 376
---

### About
This page explains how to use Webmin's **Kea DHCP Server** module to manage ISC Kea DHCP configuration files and service state. The module covers DHCPv4, DHCPv6, DHCP-DDNS, Kea services, runtime lease information and manual editing of Kea JSON configuration files.

### Intro
Kea is the modern DHCP server from ISC. It replaces the older ISC DHCP server with a JSON configuration format, separate daemons for DHCPv4 and DHCPv6, optional DHCP-DDNS support and multiple lease database backends.

Like the older [DHCP Server](/docs/modules/dhcp-server) module, this module is used to define subnets, address pools, reservations and options sent to clients. Unlike the older server, Kea stores its configuration in JSON files and commonly runs several services:

- **DHCPv4** leases IPv4 addresses and options.
- **DHCPv6** leases IPv6 addresses, options and prefix delegations.
- **DHCP-DDNS** receives name-change requests and updates DNS zones.
- **Control Agent** exposes a management endpoint when configured.

The module is available on Linux and FreeBSD systems where Kea packages and configuration files can be found.

### The module
The **Kea DHCP Server** module can be found under the Servers category. The main page shows tabs for DHCPv4, DHCPv6, DHCP-DDNS and Services. It also provides buttons to start, stop or restart all configured Kea services, open module configuration, edit config files manually and view runtime status.

If no Kea configuration files or executables are found, the module displays an installation or configuration warning. If Kea is installed in non-standard locations, update the module configuration paths.

Kea accepts comments in its JSON files, but Webmin saves structured changes as standard formatted JSON. If a file contains comments, Webmin warns that those comments will be removed when saving through the structured pages. Use the manual editor if preserving hand-written layout or comments is important.

### DHCPv4 and DHCPv6 settings
The DHCPv4 and DHCPv6 global settings pages configure daemon-level options, including:

- Listening interfaces.
- Lease database backend and connection settings.
- Local control socket.
- Logging.
- DDNS sender settings.
- DHCP options inherited by shared networks and subnets.
- Lease timers and advanced daemon behavior.

The **Listen on interfaces** field is especially important. Leaving it empty uses the packaged Kea default, which on many systems means the daemon starts but does not serve DHCP until interfaces are configured. Entries can be interface names, interface/address pairs such as `eth0/192.0.2.1`, or `*` when supported by the local Kea version and policy.

The lease backend is often `memfile`, which stores active leases in memory and writes them to a local CSV lease file. SQL backends such as MySQL and PostgreSQL require matching Kea packages and database connection settings.

### Subnets and shared networks
Subnets define the networks on which Kea can lease addresses. A subnet has an ID, CIDR prefix, optional description, optional shared-network membership and protocol-specific settings.

To create a subnet:

- Open the DHCPv4 or DHCPv6 tab.
- Click **Add subnet**.
- Enter a subnet ID and prefix, such as `192.0.2.0/24` or `2001:db8:1::/64`.
- Add one or more address pools if ordinary clients should receive dynamic leases.
- Add reservations when specific clients need fixed addresses, prefixes or hostnames.
- Set DHCP options for this subnet if they should override shared-network or global options.
- Save the subnet and restart Kea services when ready.

Address pools are the dynamic lease ranges inside a subnet. DHCPv4 pools are usually ranges such as `192.0.2.10 - 192.0.2.200`. DHCPv6 pools are often prefixes such as `2001:db8:1::/80`. If a subnet has no pools and no matching reservations, ordinary clients will not receive dynamic leases.

Shared networks group subnets that are on the same physical link. Options and timers set on a shared network are inherited by its subnets unless a subnet overrides them. They are most useful when two or more logical subnets share the same network segment.

### Reservations
Reservations assign fixed addresses, prefixes or hostnames to clients. A reservation is matched by an identifier that the client or relay consistently sends, such as hardware address, client ID, DUID, circuit ID or flexible identifier.

For DHCPv4, a reservation commonly maps a hardware address to one IPv4 address. For DHCPv6, a reservation can include multiple IPv6 addresses and prefix delegations. Reservations can also set hostnames and option data for matching clients.

### DHCP options
Options can be set globally, on shared networks or on subnets. More specific scopes override inherited settings. Common DHCPv4 options include default routers, subnet mask, broadcast address, DNS servers, DNS search domains, NTP servers, TFTP server, boot file name, NIS and NetBIOS settings. DHCPv6 options include DNS servers, SNTP servers, boot file URL, timezone and preference.

Kea-managed options, such as DHCPv4 subnet mask where it can be calculated from the subnet, are intentionally not edited as arbitrary custom options. Use **Additional option data** for uncommon standard options, vendor options or numeric options not listed in the structured form.

DHCPv6 does not provide the default router to clients. Configure Router Advertisements separately, for example with router firmware, `radvd`, systemd-networkd, NetworkManager or another routing service.

### DHCP-DDNS
Kea can update DNS records through the separate DHCP-DDNS daemon, also called D2. Enabling updates in DHCPv4 or DHCPv6 only enables the sender side. For updates to work, you must also configure the D2 listener, forward and reverse DNS zones, DNS server addresses and any required TSIG keys.

The DHCP-DDNS page manages:

- Listener IP address, port, protocol and format.
- Sender settings for DHCPv4 and DHCPv6.
- Forward and reverse DNS update domains.
- Per-domain DNS servers and ports.
- TSIG keys used to sign DNS update requests.
- DHCP-DDNS logging.

D2 is normally bound to a loopback address. If you change the listener address or port, make sure the DHCPv4 and DHCPv6 sender settings point to the same destination.

### Runtime status
The **Runtime Status** page shows active leases, per-subnet pool usage, lightweight statistics and recent Kea logs when available.

Lease listing is supported for `memfile` lease databases, because Webmin can read the local lease CSV files. SQL lease backends may require external Kea tools or database queries. DHCP is packet based, so there are no persistent client connections to list.

Pool usage compares configured subnets with active lease counts, which helps find empty pools, busy scopes and reservation-only networks.

### Manual editing and applying changes
The **Edit Config Files** page lets you edit Kea configuration files directly. This is useful for advanced JSON structures that are not yet exposed in the forms.

When saving structured or manual changes, Webmin parses and validates the Kea file where possible. After changing configuration, use **Restart all Kea services** to apply the new settings. The module can also start or stop all configured Kea services from the main page.

### Configuring the module
Module configuration controls paths to the DHCPv4, DHCPv6, DHCP-DDNS and Control Agent configuration files, their executables, the `keactrl` script, memfile lease files, PID files, systemd unit names and commands used to start, stop or restart services.

If Kea was installed from distribution packages, the defaults should usually be correct. If Kea was compiled or installed under a custom prefix, adjust these paths before using the module.

### Module access control
Through [Webmin Users](/docs/modules/webmin-users), access can be separated for viewing DHCPv4, DHCPv6, DHCP-DDNS, service status and runtime status. Change permissions can separately allow editing DHCPv4, editing DHCPv6, editing DHCP-DDNS, manual config editing, starting and stopping services, and installing Kea packages.
