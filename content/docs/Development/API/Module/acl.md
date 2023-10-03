---
title: "ACL"
date: 2023-10-01
weight: 6010
---

### Functions from module ACL
#### `acl-lib.pl`

Library for editing webmin users, passwords and access rights.
```perl
 foreign_require("acl");
 my @users = acl::list_users();
 $newguy = { 'name' => 'newguy',
             'pass' => acl::encrypt_password('smeg'),
             'modules' => [ 'useradmin' ] };
 acl::create_user($newguy);
```

##### list_users

Returns a list of hashes containing Webmin user details. Useful keys include:

* `name` - Login name
* `pass` - Encrypted password
* `modules` - Array references of modules
* `theme` - Custom theme, if any

##### list_groups

Returns a list of hashes, one per Webmin group. Group membership is stored in `/etc/webmin/webmin.groups`, and other attributes in the config file. Useful keys include:

* `name` - Group name
* `members` - Array reference of member users
* `modules` - Modules to grant to members

##### list_modules

Returns a list of the dirs of all modules available on this system.

##### list_module_infos

Returns a list of the details of all modules that can be used on this system, each of which is a hash reference in the same format as their module.info files.

##### create_user(&details, [clone])

Creates a new Webmin user, based on the hash reference in the details parameter. This must be in the same format as those returned by `list_users`. If the clone parameter is given, it must be a username to copy detailed access control settings from for this new user.

##### modify_user(old-name, &details)

Updates an existing Webmin user, identified by the old-name parameter. The details hash must be in the same format as returned by `list_users` or passed to `create_user`.

##### delete_user(name)

Deletes the named user, including all `.acl` files for detailed module access control settings.

##### create_group(&group, [clone])

Add a new webmin group, based on the details in the group hash. The required keys are:

* `name` - Unique name of the group
* `modules` - An array reference of module names
* `members` - An array reference of group member names. Sub-groups must have their names prefixed with an @.

##### modify_group(name, &group)

Update a Webmin group, identified by the name parameter. The group's new details are in the group hash ref, which must be in the same format as returned by `list_groups`.

##### delete_group(name)

Delete a webmin group, identified by the name parameter.

##### group_line(&group)

Internal function to generate a group file line.

##### acl_line(&user, &allmodules)

Internal function to generate an ACL file line.

##### can_edit_user(user, [&groups])

Returns 1 if the current Webmin user can edit some other user.

##### open_session_db(\%miniserv)

Opens the session database, and ties it to the `sessiondb` hash. Parameters are:

* `miniserv`

   The Webmin `miniserv.conf` file as a hash ref, as supplied by `get_miniserv_config`

##### delete_session_id(\%miniserv, id)

Deletes one session from the database. Parameters are:

* `miniserv`

   The Webmin `miniserv.conf` file as a hash ref, as supplied by `get_miniserv_config.`
* `user`

   ID of the session to remove.

##### delete_session_user(\%miniserv, user)

Deletes all sessions for some user. Parameters are:

* `miniserv`

   The Webmin `miniserv.conf` file as a hash ref, as supplied by `get_miniserv_config.`
* `user`

   Name of the user whose sessions get removed.

##### rename_session_user(\%miniserv, olduser, newuser)

Changes the username in all sessions for some user. Parameters are:

* `miniserv`

   The Webmin `miniserv.conf` file as a hash ref, as supplied by `get_miniserv_config`.
* `olduser` - The original username.
* `newuser` - The new username.

##### update_members(&allusers, &allgroups, &modules, &members)

Update the modules for members users and groups of some group. The parameters are:

* `allusers` - An array ref of all Webmin users, as returned by `list_users`.
* `allgroups` - An array ref of all Webmin groups.
* `modules` - Modules to assign to members.
* `members` - An array ref of member user and group names.

##### copy_acl_files(from, to, &modules)

Copy all .acl files from some user to another user in a list of modules. The parameters are:

* `from` - Source user name.
* `to` - Destination user name.
* `modules` - Array ref of module names.

##### copy_group_acl_files(from, to, &modules)

Copy all .acl files from some group to another in a list of modules. Parameters are:

* `from` - Source group name.
* `to` - Destination group name.
* `modules` - Array ref of module names.

##### copy_group_user_acl_files(from, to, &modules)

Copy all .acl files from some group to a user in a list of modules. Parameters are:

* `from` - Source group name.
* `to` - Destination user name.
* `modules` - Array ref of module names.

##### set_acl_files(&allusers, &allgroups, module, &members, &access)

Recursively update the ACL for all sub-users and groups of a group, by copying detailed access control settings from the group down to users. Parameters are:

* `allusers` - An array ref of Webmin users, as returned by list_users.
* `allgroups` - An array ref of Webmin groups.
* `module` - Name of the module to update ACL for.
* `members` - Names of group members.
* `access` - The module ACL hash ref to copy to users.

##### get_ssleay

Returns the path to the openssl command (or equivalent) on this system.

##### encrypt_password(password, [salt])

Encrypts and returns a Webmin user password. If the optional salt parameter is not given, a salt will be selected randomly.

##### get_unixauth(\%miniserv)

Returns a list of Unix users/groups/all and the Webmin user that they authenticate as, as array references.

##### save_unixauth(\%miniserv, &authlist)

Updates `%miniserv` with the given Unix auth list, which must be in the format returned by get_unixauth.

##### delete_from_groups(user|@group)

Removes the specified user from all groups.

##### check_password_restrictions(username, password)

Checks if some new password is valid for a user, and if not returns an error message.

##### hash_session_id(sid)

Returns an MD5 or Unix-crypted session ID.

##### hash_md5_session(string)

Returns a string encrypted in MD5 format.

##### md5_perl_module

Returns a Perl module for MD5 hashing, or undef if none.

##### session_db_key(sid)

Returns the session DB key for some session ID. Assumes that open_session_db has already been called.

##### setup_anonymous_access(path, module)

Grants anonymous access to some path. By default, the user for other anonymous access will be used, or if there is none, a user named `anonymous` will be created and granted access to the module.
