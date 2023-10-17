---
title: "useradmin::"
date: 2023-10-05
weight: 6090
---

### Functions from useradmin module

#### `user-lib.pl`
Functions for Unix user and group management.

```perl
foreign_require("useradmin", "user-lib.pl");
my @users = useradmin::list_users();
my @groups = useradmin::list_groups();
my ($joe) = grep { $_->{'user'} eq 'joe' } @users;
if ($joe) {
    my $joe->{'pass'} = useradmin::encrypt_password('smeg');
    useradmin::making_changes()
    useradmin::modify_user($joe, $joe);
    useradmin::made_changes()
}
```

##### password_file(file)
Returns true if some file looks like a valid Unix password file.

##### list_users
Returns an array of hash references, each containing info about one user. Each hash will always contain the keys:
* `user` - The Unix username
* `pass` - Encrypted password, perhaps using MD5 or DES
* `uid` - User's ID
* `gid` - User's primary group's ID
* `real` - Real name for the user. May also contain office phone, home phone and office location, comma-separated
* `home` - User's home directory
* `shell` - Shell command to run when the user logs in

In addition, if the system supports shadow passwords it may also have the keys:
* `change` - Days since 1970 the password was last changed
* `min` - Days before password may be changed
* `max` - Days after which password must be changed
* `warn` - Days before password is to expire that user is warned
* `inactive` - Days after password expires that account is disabled
* `expire` - Days since Jan 1, 1970 that account is disabled

Or if it supports FreeBSD master.passwd info, it will also have keys:
* `class` - User's login class
* `change` - Unix time at which the password was last changed
* `expire` - Unix time at which the password will expire

##### create_user(&details)
Creates a new user with the given details, supplied in a hash ref. This must be in the same format as returned by list_users, and must contain at a minimum the user, uid, gid, pass, shell, home and real keys.

##### modify_user(&old, &details)
Update an existing Unix user with new details. The user to change must be in &old, and the new values are in &details. These can be references to the same hash if you like.

##### delete_user(&details)
Delete an existing user. The `&details` hash must be user information as returned by `list_users`.

##### list_groups
Returns a list of all the local groups as an array of hashes. Each will contain the keys:
* `group` - The group name
* `pass` - Rarely-used encrypted password, in DES or MD5 format
* `gid` - Unix ID for the group
* `members` - A comma-separated list of secondary group members

##### create_group(&details)
Create a new Unix group based on the given hash. Required keys are:
* `gid` - Unix group ID
* `group` - Group name
* `pass` - Encrypted password members - comma-separated list of members.

##### modify_group(&old, &details)
Update an existing Unix group specified in old based on the given details hash. These can both be references to the same hash if you like. The hash must be in the same format as returned by `list_groups`.

##### delete_group(&details)
Delete an existing Unix group, whose details are in the hash ref supplied.

##### recursive_change(dir, olduid, oldgid, newuid, newgid)
Change the UID or GID of a directory and all files in it, if they match the given old UID and/or GID. If either of the old IDs are -1, then they are ignored for match purposes.

##### making_changes
Must be called before changes are made to the password or group file.

##### made_changes
Must be called after the password or group file has been changed, to run the post-changes command.

##### other_modules(function, arg, ...)
Call some function in the `useradmin_update.pl` file in other modules. Should be called after creating, deleting or modifying a user.

##### can_edit_user(&acl, &user)
Returns 1 if the given user hash can be edited by a Webmin user whose access control permissions for this module are in the `acl` parameter.

##### can_edit_group(&acl, &group)
Returns 1 if the given group hash can be edited by a Webmin user whose access control permissions for this module are in the `acl` parameter.

##### nis_index(&lines)
Internal function to return the line number on which NIS includes start in a password or group file.

##### get_skel_directory(&user, groupname)
Returns the skeleton files directory for some user. The `groupname` parameter must be the name of his primary group.

##### copy_skel_files(source, dest, uid, gid)
Copies skeleton files from some source directory (such as `/etc/skel`) to a destination directory, typically a new user's home. The uid and gid are the IDs of the new user, which determines file ownership.

##### copy_file(file, destdir, uid, gid)
Copy a file or directory and chown it, preserving symlinks and special files. Mainly for internal use by `copy_skel_files`.

##### lock_user_files
Lock all password, shadow and group files. Should be called before performing any user or group operations.

##### unlock_user_files
Unlock all password, shadow and group files. Should be called after all user or group operations are complete.

##### my_setpwent
The same as Perl's setpwent function, but may read from `/etc/passwd` directly.

##### my_getpwent
The same as Perl's getpwent function, but may read from `/etc/passwd` directly.

##### my_endpwent
Should be called when you are done with `my_setpwent` and `my_getpwent`.

##### my_getpwnam(username)
Looks up a user by name, like the `getpwnam` Perl function, but may read `/etc/passwd` directly.

##### my_getpwuid(uid)
Looks up a user by ID, like the `getpwnam` Perl function, but may read `/etc/passwd` directly.

##### pw_user_rv(&user, want-array, username-field)
Internal function to convert a user hash reference into a list in the format return by the `getpw*` family of functions

##### my_setgrent
The same as Perl's `setgrent` function, but may read from /etc/group directly.

##### my_getgrent
The same as Perl's `getgrent` function, but may read from /etc/group directly.

##### my_endgrent
Should be called when you are done with `my_setgrent` and `my_getgrent`.

##### my_getgrnam(group)
Looks up a group by name, like the Perl `getgrnam` function.

##### my_getgrgid(gid)
Looks up a group by GID, like the Perl `getgrgid` function.

##### auto_home_dir(base, username, groupname)
Returns an automatically generated home directory, and creates needed parent dirs. The parameters are:
* `base` - Base directory, like /home
* `username` - The user's login name
* `groupname` - The user's primary group name

##### set_netinfo(&user)
Update a NetInfo user based on a Webmin user hash. Mainly for internal use.

##### set_group_netinfo(&group)
Update a NetInfo group based on a Webmin group hash. Mainly for internal use.

##### set_user_dirinfo(&user)
Update a user in OSX directive services based on a Webmin user hash. Mainly for internal use.

##### set_group_dirinfo(&group)
Update a group in OSX directive services based on a Webmin group hash. Mainly for internal use.

##### check_password_restrictions(pass, username)
Returns an error message if the given password fails length and other checks, or undef if all is good.

##### check_username_restrictions(username)
Returns an error message if a username fails some restriction, or undef if all is good.

##### can_use_group(&acl, group)
Returns 1 if some group can be used as a primary or secondary, 0 if not.

##### refresh_nscd
Sends a HUP signal to the `nscd` process, so that any caches are reloaded.

##### set_user_envs(&user, action, [plainpass], [secondaries], [&olduser], [oldplainpass])
Sets up the USERADMIN_ environment variables for a user update of some kind, prior to calling making_changes or made_changes. The parameters are:
* `user` - User details hash reference, in the same format as returned by list_users
* `action` - Must be one of `CREATE_USER`, `MODIFY_USER` or `DELETE_USER`
* `plainpass` - The user's un-encrypted password, if available
* `secondaries` - An array reference of secondary group names the user is a member of
* `olduser` - When modifying a user, the hash reference of it's old details
* `oldplainpass` - When modifying a user, it's old un-encrypted password, if available

##### set_group_envs(&group, action, [&oldgroup])
Sets up the USERADMIN_ environment variables for a group update of some kind, prior to calling making_changes or made_changes. The parameters are:
* `group` - Group details hash reference, in the same format as returned by list_groups
* `action` - Must be one of `CREATE_GROUP`, `MODIFY_GROUP` or `DELETE_GROUP`
* `oldgroup` - When modifying a group, the hash reference of it's old details

##### clear_envs
Removes all variables set by `set_user_envs` and `set_group_envs`.

##### encrypt_password(password, [salt])
Encrypts a password using the encryption format configured for this system. If the `salt` parameter is given, it will be used for hashing the password - this is typically an already encrypted password, that you want to compare with the result of this function to check that passwords match. If missing, a salt will be randomly generated.

##### build_user_used([&uid-hash], [&shell-list], [&username-hash])
Fills in hashes with used UIDs, shells and usernames, based on existing users. Useful for allocating a new UID, with code like:
```perl
my %used;
useradmin::build_user_used(\%used);
my $newuid = useradmin::allocate_uid(\%used);
```

##### build_group_used([&gid-hash], [&groupname-hash])
Fills in hashes with used GIDs and group names, based on existing groups. Useful for allocating a new GID, with code like:
```perl
my %used;
useradmin::build_group_used(\%used);
my $newgid = useradmin::allocate_gid(\%used);
```

##### allocate_uid(&uids-used)
Given a hash reference whose keys are UIDs already in use, returns a free UID suitable for a new user.

##### allocate_gid(&gids-used)
Given a hash reference whose keys are GIDs already in use, returns a free GID suitable for a new group.

##### list_allowed_users(&access, &allusers)
Returns a list of users to whom access is allowed. The parameters are:
* `access` - A hash reference of Webmin user permissions, such as returned by `get_module_acl`
* `allusers` - List of all users to filter down

##### list_allowed_groups(&access, &allgroups)
Returns a list of groups to whom access is allowed. The parameters are:
* `access` - A hash reference of Webmin user permissions, such as returned by `get_module_acl`
* `allgroups` - List of all Unix groups to filter down

##### batch_start
Tells the create/modify/delete functions to only update files in memory, not on disk.

##### batch_end
Flushes any user file changes

##### users_table(&users, [form], [no-last], [no-boxes], [&otherlinks], [&rightlinks])
Prints a table listing full user details, with checkboxes and buttons to delete or disable multiple at once.

##### groups_table(&groups, [form], [no-buttons], [&otherlinks], [&rightlinks])
Prints a table of groups, possibly with checkboxes and a delete button

##### date_input(day, month, year, prefix)
Returns HTML for selecting a date

##### list_last_logins([user], [max])
Returns a list of array references, each containing the details of a login.

##### user_link(&user)
Returns a link to a user editing form. Mainly for internal use.

##### group_link(&group)
Returns a link to a group editing form. Mainly for internal use.

##### sort_users(&users, mode)
Sorts a list of users according to the user's preference for this module, and returns the results.

##### sort_groups(&groups, mode)
Sorts a list of groups according to the user's preference for this module, and returns the results.

##### create_home_directory(&user, [real-dir])
Creates and chmod's the home directory for a user, or calls error on failure.

##### delete_home_directory(&user)
Deletes some users home directory.

##### supports_temporary_disable
Returns 1 if temporary locking of passwords (with an ! at the start of the hash) is supported on this OS.

##### change_all_home_groups(old-gid, new-gid, &members)
Change the GID on all files in the home directories of users whose GID is the old GID.
