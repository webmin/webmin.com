---
title: "servers::"
date: 2023-10-05
weight: 6070
---

### Functions from servers module

#### `servers-lib.pl`
Functions for managing remote Webmin servers, which can be monitored or used for RPC operations.

```perl
foreign_require( "servers" );
my $newserv = { 'host' => 'box.foo.com',
                'port' => 10000,
                'ssl' => 1,
                'user' => 'root',
                'pass' => 'smeg',
                'fast' => 1 };
servers::save_server( $newserv );
remote_foreign_require( $newserv, 'webmin', 'webmin-lib.pl' );
my $ver = remote_foreign_call( $newserv, 'webmin', 'get_webmin_version' );
```

##### list_servers()
Returns a list of registered Webmin servers. Each is a hash ref, with the following keys:
* `id` - A unique ID for this server, separate from the hostname
* `host` - The full Internet hostname or IP address
* `port` - Port number that Webmin listens on, such as 10000
* `ssl` - Set to 1 if Webmin is in SSL mode
* `group` - A tab-separated list of group names that this server is in
* `desc` - An optional human-readable description
* `fast` - Set to 1 if fast RPC mode (using non-HTTP TCP connections on ports 10001 and above) is used, 0 for only HTTP
* `user` - The login used to access Webmin on this system, such as root or admin
* `pass` - The password for the username above
* `autouser` - Set to 1 if the admin will be prompted for a username and password when accessing this remote system in this module's UI
* `sameuser` - Set to 1 if this current login and password will be used to login to this remote system

##### list_servers_sorted( applyacl )
Returns a list of servers, sorted according to the module configuration. The format is the same as `list_servers`.

##### get_server( id )
Given a remote server's unique ID, returns the hash reference in the same format as list_serves.

##### save_server( &server )
Updates a Webmin server on disk, based on the details in the given hash ref, which must be in the same format as list_servers.

##### delete_server( id )
Deletes the Webmin server details identified by the given ID.

##### can_use_server(&server)
Returns 1 if the current Webmin user can use and edit the server specified by the given hash ref.

##### list_all_groups([&servers])
Returns a list of all Webmin server groups and their members, each of which is a hash ref with the keys:
* `name` - A unique group name
* `members` - An array ref of server hostnames

##### logged_in( &serv )
For internal use only.

##### @server_types
This array lists operating system types known to this module. Each element is an array ref with the elements:
* Internal OS code, such as "centos".
* Human-readable OS name, such as "CentOS Linux".
* Webmin OS code for this type, like "redhat-linux".
* Webmin OS name for this type.

##### this_server()
Returns a fake servers-list entry for this server.

##### get_my_address()
Returns the system's IP address, taken from eth0 or reverse resolution of the hostname. Returns undef if this cannot be computed.

##### address_to_broadcast( address, net-mode )
Given an IP address, converts it to a broadcast by changing the last few octets to 255.

##### test_server( host )
Returns undef if some server can be connected to OK, or an error message.

##### find_cron_job()
Returns the cron job hash ref for the regular scheduled new servers check.

##### find_servers( &addresses, limit, no-print, defuser, defpass, deftype, &cluster-modules, find-self, port )
Attempts to find and register Webmin servers by sending out broadcast pings. Mainly for internal use.
