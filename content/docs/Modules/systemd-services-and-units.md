---
title: "Systemd Services and Units"
date: 2026-06-27
weight: 340
---

### About
This page explains how to use Webmin's **Systemd Services and Units** module to inspect, control and create systemd units. The module manages system services, timers, sockets, paths, targets, storage units, resource-control units, devices and per-user units.

### Intro
Most modern Linux systems use systemd as the first userspace process and service manager. Instead of relying only on traditional boot scripts, systemd describes services and other system resources in unit files. A unit can start a daemon, run a scheduled task, listen on a socket, mount a filesystem, activate swap, group services into a target, or apply resource limits to a slice.

Systemd tracks two different kinds of state for a unit. The unit file state controls whether the unit is enabled, disabled, static or masked at boot. The runtime state shows what systemd reports right now, such as active, inactive, failed or activating. Webmin displays both, because enabling a service at boot does not necessarily mean that it is currently running.

The older [Bootup and Shutdown](/docs/modules/bootup-and-shutdown) module is still useful for traditional init scripts and basic service control. This module is intended for systemd systems where administrators need direct access to native unit types, drop-in overrides, journal logs and user units.

### The module
The **Systemd Services and Units** module can be found under the System category. Its main page groups units into tabs such as Services, Timers, Sockets, Paths, Targets, Storage, Resources, Devices and User units. Each table lists the unit name, description, file state and runtime state, with action buttons for common tasks.

From the module index you can:

- Start, stop or restart selected units.
- Enable or disable units so they do or do not start at boot.
- Mask or unmask units to prevent or allow activation.
- View status, properties, dependencies and journal logs.
- Create new system units or user units.
- Edit writable unit files, inspect packaged unit files, or create drop-in overrides.
- Reload the systemd manager after unit files change.

Generated and transient units appear only when **Show generated and transient units** is enabled in the module configuration. These units are created dynamically by systemd or other tools, so when they are shown Webmin can display status, dependencies and logs, but cannot safely edit their source files.

### Managing services
Service units start long-running daemons, short-lived commands or one-shot setup tasks. To manage a service:

- Open the **Services** tab.
- Click the service name to view or edit its unit details.
- Use **Start**, **Stop**, **Restart**, **Status**, **Properties**, **Dependencies** or **Logs** as needed.
- Use **Enable** or **Disable** to control startup at boot.
- Use **Mask** when the service must not be started manually or as a dependency.

When editing a service, Webmin exposes common fields such as the description, startup and shutdown commands, service type, PID file, user and group, working directory, environment variables, restart policy, timeouts, logging options and security restrictions.

### Creating units
The module can create several native systemd unit types:

- **Service units** run commands or daemons.
- **Timer units** activate another unit on a calendar schedule, after boot, or after the last activation.
- **Socket units** listen on TCP, UDP, filesystem or FIFO sockets and activate a service when traffic arrives.
- **Path units** watch files or directories and activate another unit when a path appears, changes or becomes non-empty.
- **Target units** group related units into a named synchronization point.
- **Mount, automount and swap units** define storage resources controlled by systemd.
- **Slice units** define persistent resource-control groups.
- **User units** run under a user's own systemd manager.

To create a unit, use one of the **Create a new systemd unit** actions on the main page. Enter a unit name, choose the type, fill in the type-specific fields and save. Webmin verifies the unit file before saving where possible, reloads the appropriate systemd manager and returns to the unit page or index depending on the module configuration.

For service units, at least one startup command is normally required. For timers, you must enter a timer trigger and the unit to activate. For sockets and paths, Webmin requires at least one listener or watched path plus the unit that should be activated.

### Drop-in overrides and manual edits
Packaged unit files are usually stored under vendor directories and may be replaced by package updates. For normal customization, use a drop-in override instead of editing the packaged file directly. A drop-in stores only the changed settings under a local override directory and keeps the base unit intact.

On a unit page, use **Create Override** or **Edit Override** to manage a drop-in. The module also has **View Drop-in Overrides** on the index page, which lists discovered system and user override files and opens safe ones for editing.

The **Edit Unit Files** page is for advanced manual editing of discovered system and user unit files. It is useful for directives that are not exposed in Webmin's forms. After saving manual changes, reload the systemd manager so the new unit definition is used.

### User units and linger
User units live in a user's own systemd configuration and are controlled by that user's systemd manager. They are useful for per-user services, timers and sockets that should not run as root.

The **User units** tab lets you view and manage units owned by allowed users. If a user unit must keep running after the user logs out, enable linger for that user. Linger allows the user's systemd manager to run without an active login session, which is often needed for background user services and timers.

### Logs and status
For any unit, **Status** shows systemd's current status output, **Properties** shows detailed systemd properties, **Dependencies** shows related units and **Logs** reads recent entries from the systemd journal. The number of journal lines and whether logs are limited to the current boot are controlled in the module configuration.

These views are often the safest first step when a service fails to start. Check the runtime state, then read the unit logs before editing the unit file.

### Configuring the module
Like other Webmin modules, this module can be configured from **Module Config**. Common options include:

- Whether to display unit descriptions.
- Which tabs are visible on the index page.
- Whether generated and transient runtime-managed units are included in the unit lists.
- The default scope for new units, system or user.
- Whether vendor unit files can be edited or deleted.
- Whether manual editors include packaged unit files.
- The default linger setting for new user units.
- Whether to show full unit names with suffixes.
- Whether to show the drop-in override inventory.
- Journal log line count and log scope.

### Module access control
Access can be restricted through [Webmin Users](/docs/modules/webmin-users). The ACLs distinguish between read access, runtime control and advanced changes. For example, one user can be allowed to view logs and restart services, while another can create units, edit drop-ins, reload the manager or manage user-unit linger state.

User unit permissions can also be limited by owner, such as all users, the current Webmin user, selected users, users outside a list, a UID range or a primary group.
