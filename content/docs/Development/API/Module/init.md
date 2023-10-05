---
title: "Init"
date: 2023-10-05
weight: 6040
---

### Functions from init module
#### init-lib.pl

Common functions for boot/shutdown sequences. Because each system uses a different format and semantics for bootup actions, there are separate functions for listing and managing each type. However, some functions like `enable_at_boot` and `disable_at_boot` can create actions regardless of the underlying boot system.

```
foreign_require('init');
my $ok = init::action_status('foo');
if ($ok == 0) {
init::enable_at_boot('foo', 'Start or stop the Foo server',
                     '/etc/foo/start', '/etc/foo/stop');
}
```

##### init_mode
This variable is set based on the bootup system in use. Possible values are:
* `osx` - MacOSX hostconfig files
* `rc` - FreeBSD 6+ RC files
* `init` - System V `init.d` files, seen on Linux and Solaris
* `local` - A single rc.local file
* `win32` - Windows services

##### runlevel_actions( level, S|K )
Return a list of `init.d` actions started or stopped in some run-level, each of which is a space-separated string in the format: number name inode.

##### list_runlevels()
Returns a list of known runlevels, such as: 2 3 5.

##### list_actions()
List boot time action names from `init.d`, such as `httpd` and `cron`.

##### action_levels( S|K, action )
Return a list of run levels in which some action (from `init.d`) is started or stopped. Each item is a space-separated string in the format: level order name

##### action_filename( name )
Returns the path to the file in `init.d` for some action, such as `/etc/init.d/foo`.

##### runlevel_filename( level, S|K, order, name )
Returns the path to the actual script run at boot for some action, such as `/etc/rc3.d/S99foo`.

##### add_rl_action( action, runlevel, S|K, order )
Add some existing action to a runlevel. The parameters are :
* `action` - Name of the action, like foo
* `runlevel` - A runlevel number, like 3
* `S/K` - Either S for an action to run at boot, or K for shutdown
* `order` - Numeric boot order, like 99

##### delete_rl_action( name, runlevel, S|K )
Delete some action from a runlevel. The parameters are:
* `action` - Name of the action, like foo
* `runlevel` - A runlevel number, like 3
* `S/K` - Either S for an action to run at boot, or K for shutdown

##### reorder_rl_action( name, runlevel, S|K, new_order )
Change the boot order of some existing runlevel action. The parameters are:
* `action` - Name of the action, like foo
* `runlevel` - A runlevel number, like 3
* `S/K` - Either S for an action to run at boot, or K for shutdown
* `new_order` - New numeric boot order to use, like 99

##### rename_action( old, new )
Change the name of an action in `init.d`, and re-direct all soft links to it from the runlevel directories. Parameters are:
* `old` - Old action name
* `new` - New action name

##### rename_rl_action( runlevel, S|K, order, old, new )
Change the name of a runlevel file. For internal use only.

##### get_inittab_runlevel()
Returns the runlevels entered at boot time. If more than one is returned, actions from all of them are used.

##### init_description( file, [&hasargs] )
Given a full path to an `init.d` file, returns a description from the comments about what it does. If the hasargs hash ref parameter is given, it is filled in with supported parameters to the action, like "start" and "stop".

##### chkconfig_info( file )
If a file has a chkconfig: section specifying the runlevels to start in and the orders to use, return an array containing the levels (as array ref), start order, stop order and description.

##### action_status( action )
Returns 0 if some action doesn't exist, 1 if it does but is not enabled, or 2 if it exists and is enabled. This works for all supported boot systems, such as `init.d`, OSX and FreeBSD.

##### enable_at_boot( action, description, startcode, stopcode, statuscode )
Makes some action start at boot time, creating the script by copying the specified file if necessary. The parameters are:
* `action` - Name of the action to create or enable
* `description` - A human-readable description for the action
* `startcode` - Shell commands to run at boot time
* `stopcode` - Shell commands to run at shutdown time
* `statuscode` - Shell code to output the action"s status
If this is called for a named action that already exists (even if it isn"t enabled), only the first parameter needs to be given

##### disable_at_boot( action )
Disabled some action from starting at boot, identified by the action parameter. The config files that define what commands the action runs are not touched, so it can be re-enabled with the `enable_at_boot` function.

##### start_action( name )
Start the action with the given name, using whatever method is appropriate for this operating system. Returns a status code (0 or 1 for failure or success) and all output from the action script.

##### stop_action( name )
Stop the action with the given name, using whatever method is appropriate for this operating system. Returns a status code (0 or 1 for failure or success) and all output from the action script.

##### restart_action( action )
Calls a stop then a start for some named action.

##### tab_indent( lines )
Given a string with multiple `\n` separated lines, returns the same string with lines prefixed by tabs.

##### get_start_runlevels()
Returns a list of runlevels that actions should be started in, either based on the module configuration or `/etc/inittab`.

##### runlevel_dir( runlevel )
Given a runlevel like 3, returns the directory containing symlinks for it, like `/etc/rc2.d`.

##### list_win32_services( [name] )
Returns a list of known Win32 services, each of which is a hash ref. If the name parameter is given, only details of that service are returned. Useful keys for each hash are:
* `name` - A unique name for the service
* `desc` - A human-readable description
* `boot` - Set to 2 if started at boot, 3 if not, 4 if disabled
* `state` - Set to 4 if running now, 1 if stopped

##### start_win32_service( name )
Attempts to start a service, returning undef on success, or some error message.

##### stop_win32_service( name )
Attempts to stop a service, returning undef on success, or some error message.

##### enable_win32_service( name )
Marks some service as starting at boot time. Returns undef on success or an error message on failure.

##### disable_win32_service( name )
Marks some service as disabled at boot time. Returns undef on success or an error message on failure.

##### create_win32_service( name, command, desc )
Creates a new win32 service, enabled at boot time. The required parameters are:
* `name` - A unique name for the service
* `command` - The DOS command to run at boot time
* `desc` - A human-readable description.

##### delete_win32_service( name )
Delete some existing service, identified by some name. Returns undef on success or an error message on failure.

##### list_rc_scripts()
Returns a list of known BSD RC scripts, and their enabled statuses. Each element of the return list is a hash ref, with the following keys :
* `name` - A unique name for the script
* `desc` - A human-readable description
* `enabled` - Set to 1 if enabled, 0 if not, 2 if unknown
* `file` - Full path to the action script file
* `standard` - Set to 0 for user-defined actions, 1 for those supplied with FreeBSD

##### save_rc_conf(name, value)
Internal function to modify the value of a single entry in the FreeBSD `rc.conf` file.

##### get_rc_conf
Reads the default and system-specific FreeBSD `rc.conf` files, and parses them into a list of hash refs. Each element in the list has the following keys:
* `name` - Name of this configuration parameter. May appear more than once, with the later one taking precedence
* `value` - Current value
* `cmt` - A human-readable comment about the parameter

##### enable_rc_script(name)
Mark some RC script as enabled at boot.

##### disable_rc_script(name)
Mark some RC script as disabled at boot.

##### start_rc_script(name)
Attempt to start some RC script, and returns 1 or 0 (for success or failure) and the output.

##### stop_rc_script(name)
Attempts to stop some RC script, and returns 1 or 0 (for success or failure) and the output.

##### lock_rc_files
Internal function to lock all FreeBSD `rc.conf` files.

##### unlock_rc_files
Internal function to un-lock all FreeBSD `rc.conf` files.

##### reboot_system
Immediately reboots the system.

##### shutdown_system
Immediately shuts down the system.
