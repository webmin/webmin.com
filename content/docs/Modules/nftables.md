---
title: "Linux Firewall (nftables)"
date: 2026-06-27
weight: 640
---

### About
This page explains how to use Webmin's **Linux Firewall** module to configure a Linux firewall using nftables. The module manages nftables tables, chains, sets and rules, provides quick controls for common allow, block and port-forwarding tasks, and can apply saved rules to the active kernel firewall.

### Intro
`nftables` is the modern Linux packet filtering framework and the successor to many `iptables`, `ip6tables`, `arptables` and `ebtables` use cases. It stores rules in tables. Each table belongs to a family such as `inet`, `ip` or `ip6`, and contains chains. Chains contain rules, and rules are made from matches followed by an action such as accept, drop, reject, log, jump or DNAT.

Named sets can group addresses, networks, ports or other values for reuse in multiple rules. This makes large address lists and service lists easier to maintain than repeating the same values in many rules.

The older [Linux Firewall (iptables)](/docs/modules/linux-firewall) module manages iptables-style rules, and Webmin also has a separate **Linux Firewall (ip6tables)** module for IPv6 ip6tables rules. [FirewallD](/docs/modules/firewalld) manages firewalld zones. Avoid using multiple firewall tools to change the active kernel ruleset at the same time, because each tool may overwrite or hide changes made by another.

### The module
The **Linux Firewall** module can be found under the Networking category on systems where nftables is available. Its main page displays the selected table, its chains, rules and sets. It also warns if other configured firewall modules are detected.

From the module index you can:

- Create a ruleset profile.
- Create, import or delete tables.
- Create, edit, rename or delete chains.
- Create, edit or delete sets.
- Add, edit, move or delete rules.
- Use quick controls for IP allow/block, allowed ports, allowed services and port forwarding.
- View the active ruleset currently loaded in the kernel.
- Apply saved configuration, revert to the active ruleset, or activate the firewall at boot.
- Edit nftables configuration files manually.

Saved rules shown in the module are not the same thing as the active kernel ruleset until you apply them. Use **Apply Changes** after editing rules to load the saved ruleset into the kernel.

### Creating a ruleset profile
If you are starting from an empty firewall, use **Create Ruleset Profile**. It can create a managed nftables table from a predefined profile:

- **Allow all traffic** opens input, forward and output policy.
- **Management only** allows SSH and the current Webmin service, with outgoing traffic allowed.
- **Web server** allows management access plus HTTP and HTTPS.
- **Mail server** allows common mail and Usermin ports.
- **DNS server** allows DNS, DNS-over-TLS, DHCPv6 client and mDNS.
- **Virtualmin hosting server** allows common web, mail, DNS, FTP, Usermin and passive FTP services.
- **Locked-down server** drops input, forward and output traffic with no service exceptions.
- **Custom selected services** creates rules only for the services and ports you select.

Profiles are useful starting points, but you should review the resulting rules before relying on them on a production server.

### Tables and chains
A table is the top-level container for nftables objects. Webmin lets you create a table by choosing its family and name. The `inet` family is often convenient because it can contain both IPv4 and IPv6 filtering rules.

Chains hold rules. A base chain is attached to a packet-processing hook, such as input, forward, output, prerouting or postrouting. Base chains require a type, hook, priority and policy. Regular chains are used as jump or goto targets and do not have a hook.

The chain policy controls what happens when a packet reaches the end of a base chain without matching a terminating rule. Common policies are accept or drop. Be careful when setting an input policy to drop, and make sure SSH or Webmin access is allowed before applying changes on a remote system.

### Rules
Rules are evaluated from top to bottom. A typical rule matches a protocol, address, port, interface or connection state, and then performs an action.

The rule editor supports common matches and actions, including:

- Source and destination addresses.
- Source and destination ports.
- Protocol.
- Incoming and outgoing interfaces.
- ICMP or ICMPv6 type.
- Conntrack state.
- TCP flags.
- Rate limits and burst limits.
- Logging and counters.
- Accept, drop, reject, return, redirect, DNAT, jump and goto actions.

For inbound services such as SSH or HTTPS, match the destination port. A later drop rule will not override an earlier accept rule, so order matters. Use the move controls to adjust rule order.

The editor can also show the generated raw rule line. Advanced users can switch to direct raw editing for syntax that is not exposed by the form.

### Sets
Sets store reusable groups of values. For example, a set can contain trusted source networks, blocked addresses or allowed service ports. Rules can then match against the set instead of listing every value in the rule.

When creating a set, choose a type that matches how it will be used. Address fields require address set types such as IPv4 or IPv6 addresses, while port fields require service-port set types. The module checks for mismatches when saving and applying rules.

A set that is referenced by rules cannot be deleted until those rules are changed or removed.

### Quick controls
The module provides quick controls for common firewall tasks:

- **Allow IP/CIDR** adds a rule to accept traffic from an address or network.
- **Block IP/CIDR** adds a rule to drop traffic from an address or network.
- **Add allowed port** opens a TCP or UDP port or port range.
- **Add allowed service** looks up a named service such as SSH, HTTP or DNS and opens the matching port definitions.
- **Add port forward** creates a redirect or DNAT-style forward from one port to another port and optional destination address.

Quick controls use the selected table and an appropriate input chain. If the table family or chains cannot support the requested rule, the module reports an error instead of creating an unsafe rule.

### Active ruleset and applying changes
The **View Active Ruleset** page shows nftables tables currently loaded in the kernel. Tables may be shown as managed by Webmin, externally managed or unclaimed. You can import a copy of an active table into Webmin's saved configuration, or clear active tables that are safe to clear.

Use **Apply Changes** to load Webmin's saved nftables configuration into the kernel. Use **Revert Configuration** to reset the saved configuration to the currently active ruleset. Use **Activate at Boot** to control whether the module-managed rules are applied during system boot.

Before and after commands can be configured for rule changes and apply operations, which is useful for local policy hooks or logging.

### Manual editing and configuration
The **Edit Config Files** page opens configured nftables files for manual editing. Webmin validates the configuration before saving where possible. Manual editing of the full rules file may be restricted unless the Webmin user can manage all tables.

Module configuration controls the path to the `nft` command, number of rules per page, whether conditions and comments are shown in the rule list, and optional commands run before or after changes and apply operations.

### Module access control
Through [Webmin Users](/docs/modules/webmin-users), users can be limited to all tables, selected tables or all except selected tables. Individual permissions control viewing managed rules, listing active rulesets, creating tables, creating profiles, managing chains, managing sets, managing rules, editing raw rule text, deleting objects, applying saved configuration, enabling boot activation, importing active tables, clearing active tables, using quick controls and manually editing config files.
