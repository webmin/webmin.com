---
title: "passwd::"
date: 2023-10-05
weight: 6050
---

### Functions from passwd module

#### `passwd-lib.pl`
Functions to support the change passwords module. Some example code:

```perl
foreign_require('passwd');
my $user = passwd::find_user('joe');
if ($user) {
    passwd::change_password($user, 'smeg', 0);
}
```

##### can_edit_passwd( &user )
Returns 1 if the current Webmin user can change the password for the Unix user whose details are in the given hash ref, which is in the format returned by `useradmin::list_users`.

##### find_user( name )
Looks up the user structure for some name, in the `useradmin`, `ldap-useradmin` and `nis` modules, and returns it.

##### change_password( &user, pass, do-others )
Updates a user's password. The required parameters are:
* `user` - A hash ref of user details, in the format supplied by `find_user`
* `pass` - The new password, in plain text
* `do-others` - If set to 1, the password is changed in other Webmin modules too
