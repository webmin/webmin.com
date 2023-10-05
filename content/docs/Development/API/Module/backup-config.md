---
title: "Backup Config"
date: 2023-10-05
weight: 6020
---

### Functions from backup config module

#### `backup-config-lib.pl`

Functions for creating configuration file backups. Some example code:

```perl
foreign_require('backup-config');
my @backups = backup_config::list_backups();
my ($apache_backup) = grep { $_->{'mods'} eq 'apache' } @backups;
$apache_backup->{'dest'} = '/tmp/apache.tar.gz';
backup_config::save_backup($apache_backup);
```

##### list_backup_modules

Returns details of all modules that allow backups, each of which is a hash ref in the same format as returned by get_module_info.

##### list_backups

Returns a list of all configured backups, each of which is a hash ref with at least the following keys:

- `mods` - Space-separate list of modules to include
- `dest` - Destination file, FTP or SSH server
- `configfile` - Set to 1 if `/etc/webmin/modulename` files are included
- `nofiles` - Set to 1 if server config files (like `httpd.conf`) are not included
- `others` - A tab-separated list of other files to include
- `email` -Email address to notify
- `emode` - Set to 0 to send email only on failure, 1 to always send
- `sched` - Set to 1 if regular scheduled backups are enabled
- `mins`,`hours`,`days`,`months`,`weekdays` - Cron-style specification of backup time

##### get_backup(id)

Given a unique backup ID, returns a hash ref containing its details, in the same format as `list_backups`.

##### save_backup(&backup)

Given a hash ref containing backup details, saves them to disk. Must be in the same format as returned by `list_backups`, except for the ID which will be randomly assigned if missing.

##### delete_backup(&backup)

Deletes the backup whose details are in the given hash ref.

##### parse_backup_url(string)

Converts a URL like `ftp://` or a filename into its components. These are `user`, `pass`, `host`, `page`, `port` (optional)

##### show_backup_destination(name, value, [local-mode])

Returns HTML for a field for selecting a local or FTP file.

##### parse_backup_destination(name, &in)

Returns a backup destination string, or calls error.

##### execute_backup(&modules, dest, &size, &files, include-webmin, exclude-files, &others)

Backs up the configuration files for the modules to the selected destination. The backup is simply a tar file of config files. Returns undef on success, or an error message on failure.

##### execute_restore(&mods, source, &files, apply)

Restore configuration files from the specified source for the listed modules. Returns undef on success, or an error message.

##### scp_copy(source, dest, password, &error, [port])

Copies a file from some source to a destination. One or the other can be a server, like `user@foo:/path/to/bar/`

##### find_cron_job(&backup)

Given a hash ref containing backup details, finds cron job that runs it.

##### nice_dest(destination, [subdates])

Returns a backup filename in a human-readable format, with dates substituted.

##### date_subs(string)

Given a string with strftime-style format characters in it like `%Y` and `%S`, replaces them with the correct values for the current date and time.

##### show_backup_what(name, webmin?, nofiles?, others)

Returns HTML for selecting what gets included in a backup.

##### parse_backup_what(name, &in)

Returns the _webmin_ and _nofiles_flags, and a tab-separated list of other files to include.

##### expand_directory(directory)

Given a directory, return a list of full paths to all files within it.
