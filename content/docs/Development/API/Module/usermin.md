---
title: "usermin::"
date: 2023-10-05
weight: 6100
---

### Functions from usermin module

#### `usermin-lib.pl`

Functions for configuring Usermin running on this system.

```perl
foreign_require("usermin");
my @usermods = usermin::list_usermin_usermods();
push(@usermods, [ 'joe', '', 'mailbox changepass' ]);
usermin::save_usermin_usermods(\@usermods);
```

##### get_usermin_miniserv_config(&hash)

Similar to the standard `get_miniserv_config` function, but this one fills in the given hash ref with the contents of the `/etc/usermin/miniserv.conf` file.

##### put_usermin_miniserv_config(&hash)

Writes out the Usermin _miniserv_ configuration, based on the given hash ref.

##### get_usermin_version

Returns the version number of Usermin on this system.

##### restart_usermin_miniserv

Send a HUP signal to Usermin's _miniserv_, telling it to restart and re-read all configuration files.

##### reload_usermin_miniserv

Sends a USR1 signal to the _miniserv_ process, telling it to re-read most configuration files.

##### get_usermin_config(&hash)

Fills in the given hash ref with the contents of the global Usermin configuration file, typically at `/etc/usermin/config`.

##### put_usermin_config(&hash)

Writes the given hash ref to the global Usermin configuration file.

##### list_themes

Returns an array of all Usermin themes. The format is the same as the `webmin::list_themes` function.

##### list_modules

Returns a list of all Usermin modules installed and supported on this system. Each is a hash ref in the same format as returned by Webmin's `get_module_info` function.

##### get_usermin_module_info(module, [noclone])

Returns a hash contain details of a module, in the same format as Webmin's `get_module_info` function. Useful keys include:

* `dir` - The module's relative directory
* `desc` - The human-readable title
* `category` - Category the module is in, like login or apps
* `depends` - Space-separated list of dependent modules
* `os_support` - List of supported operating systems and versions

##### get_usermin_theme_info(theme)

Like `get_usermin_module_info`, but returns the details of a theme instead. This is basically the contents of its theme.info file.

##### check_usermin_os_support(&minfo)

Given a Usermin module information hash ref (as returned by `get_usermin_module_info`), checks if it is supported on this OS. Returns 1 if yes, 0 if no.

##### read_usermin_acl(&array, &array)

Reads the acl file into the given hashes. The first maps user,module to 1 where granted, which the second maps a user to an array ref of module dirs.

##### Usermin_acl_filename

Returns the file containing the webmin ACL.

##### save_usermin_acl(user, &modules)

Updates the list of available modules in Usermin.

##### install_usermin_module(file, unlink, nodeps)

Installs a Usermin module or theme, and returns either an error message or references to three arrays for descriptions, directories and sizes. On success or failure, the file is deleted if the unlink parameter is set.

##### list_usermin_usermods

Returns the list of additional module restrictions for Usermin. This is a list of array refs, each element of which contains a username, a flag and an array ref of module names. The flag can be one of:

* `+` Add the modules to the list available to this user.
* `-` Take the modules away from this user.
* `blank` - Assign the modules to the list for this user.

##### save_usermin_usermods(&usermods)

Saves the list of additional module restrictions. This must be an array ref in the same format as returned by `list_usermin_usermods`.

##### get_usermin_miniserv_users

Returns a list of Usermin users from `miniserv.users`. In normal use, there is only one, as all authentication is done using Unix users.

##### save_usermin_miniserv_users(&user, ...)

Updats the list of Usermin _miniserv_ users, each of which is a hash ref in the format returned by `get_usermin_miniserv_users`.

##### can_use_module(module)

Returns 1 if the current Webmin user can use some function of this module.

##### get_usermin_base_version

Gets the Usermin version, rounded to the nearest `.01`

##### base_version

Rounds a version number to the nearest `.01`

##### find_cron_job(\@jobs)

Finds the cron job for Usermin updates, given an array ref of cron jobs as returned by `cron::list_cron_jobs`.

##### delete_usermin_module(module, [delete-acls])

Deletes some Usermin module, clone or theme, and return a description of the thing deleted.

##### flush_modules_cache

Forces a rebuild of the Usermin module cache.

##### stop_usermin

Kills the running Usermin server process, returning `undef` on success or an error message on failure.

##### start_usermin

Starts the Usermin server process. Return value is always `undef`.

##### get_install_type

Returns the package type Usermin was installed form (_rpm_, _deb_, _solaris-pkg_ or `undef` for _tar.gz_).

##### switch_to_usermin_user(username)

Returns a set-cookie header and redirect URL for auto-logging into Usermin as some user.
