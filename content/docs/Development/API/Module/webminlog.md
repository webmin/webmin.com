---
title: "webminlog::"
date: 2023-10-05
weight: 6103
---

### Functions from webminlog module

#### `webminlog-lib.pl`
This module contains functions for parsing the Webmin actions log file.

```perl
foreign_require("webminlog");
my @actions = webminlog::list_webmin_log(undef, "useradmin", undef, undef);
foreach my $a (@actions) {
    print webminlog::get_action_description($a),"\n";
}
```

##### list_webmin_log([only-user], [only-module], [start-time, end-time])
Returns an array of matching Webmin log events, each of which is a hash ref in the format returned by `parse_logline` (see below). By default all actions will be returned, but you can limit it to a subset using by setting the following parameters:
* `only-user` - Only return actions by this Webmin user
* `only-module` - Only actions in this module
* `start-time` - Limit to actions at or after this Unix time
* `end-time` - Limit to actions at or before this Unix time

##### parse_logline(line)
Converts a line of text in the format used in `/var/webmin/webmin.log` into a hash ref containing the following keys:
* `time` - Unix time the action happened
* `id` - A unique ID for the action
* `user` - The Webmin user who did it
* `sid` - The user's session ID
* `ip` - The IP address they were logged in from
* `module` - The Webmin module name in which the action was performed
* `script` - Relative filename of the script that performed the action
* `action` - A short action name, like 'create'
* `type` - The kind of object being operated on, like 'user'
* `object` - Name of the object being operated on, like 'joe'
* `params` - A hash ref of additional information about the action

##### list_diffs(&action)
Returns details of file changes made by this action. Each of which is a hash ref with the keys:
* `type` - The change type, such as create, modify, delete, exec, sql or kill
* `object` - The file or database the change was made to
* `diff` - A diff of the file change made
* `input` - Input to the command run, if available

##### list_files(&action)
Returns details of original files before this action was taken. Each is a hash ref containing keys:
* `type` - One of create, modify or delete
* `file` - Full path to the file
* `data` - Original file contents, if any

##### get_annotation(&action)
Returns the text of the log annotation for this action, or undef if none.

##### save_annotation(&action, text)
Updates the annotation for some action.

##### expand_base_dir(base)
Finds files either under some dir, or starting with some path in the same directory.

##### can_user(username)
Returns 1 if the current Webmin user can view log entries for the given user.

##### can_mod(module)
Returns 1 if the current Webmin user can view log entries for the given module.

##### get_action(id)
Returns the structure for some action identified by an ID, in the same format as returned by `parse_logline`.

##### build_log_index(&index)
Updates the given hash with mappings between action IDs and file positions. For internal use only really.

##### get_action_description(&action, [long])
Returns a human-readable description of some action. This is done by calling the `log_parser.pl` file in the action's source module. If the long parameter is set to 1 and the module provides a more detailed description for the action, it will be returned.
