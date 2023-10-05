---
title: "webmin::"
date: 2023-10-05
weight: 6095
---

### Functions from webmin module

#### `webmin-lib.pl`
Common functions for configuring _miniserv_ and adjusting global Webmin settings.

##### setup_ca
Internal function to create all the configuration files needed for the Webmin client SSL certificate CA.

##### list_themes
Returns an array of all installed themes, each of which is a hash ref corresponding to the `theme.info` file.

##### install_webmin_module(file, unlink, nodeps, &users||groups)
Installs a Webmin module or theme, and returns either an error message or references to three arrays for descriptions, directories and sizes. On success or failure, the file is deleted if the `unlink` parameter is set. Unless the `nodeps` parameter is set to 1, any missing dependencies will cause installation to fail.

Any new modules will be granted to the users and groups named in the fourth parameter, which must be an array reference.

##### grant_user_module(&users/groups, &modules)
Grants users or groups access to a set of modules. The users parameter must be an array ref of usernames or group names, and modules must be an array ref of module names.

##### delete_webmin_module(module, [delete-acls])
Deletes some Webmin module, clone or theme, and return a description of the thing deleted. If the `delete-acls` flag is set, all .acl files are removed too.

##### file_basename(name)
Returns the part of a filename after the last `/`.

##### gnupg_setup
Setup `gnupg` so that _rpm_ and _.tar.gz_ files can be verified. Returns 0 if ok, 1 if `gnupg` is not installed, or 2 if something went wrong.

##### list_standard_modules
Returns a list containing the short names, URLs and descriptions of the standard Webmin modules. If an error occurs, returns the message instead.

##### standard_chooser_button(input, [form])
Returns HTML for a popup button for choosing a standard module.

##### list_third_modules
Returns a list containing the names, versions, URLs and descriptions of the third-party Webmin modules. If an error occurs, returns the message instead.

##### third_chooser_button(input, [form])
Returns HTML for a popup button for choosing a third-party module.

##### get_webmin_base_version
Gets the Webmin version, rounded to the nearest `.01`

##### base_version
Rounds a version number down to the nearest `.01`

##### get_newmodule_users
Returns a ref to an array of users to whom new modules are granted by default, or `undef` if the admin hasn't chosen any yet.

##### save_newmodule_users(&users)
Saves the list of users to whom new modules are granted. If `undef` is given, the default behavior (of using _root_ or _admin_) is used.

##### get_miniserv_sockets(&miniserv)
Returns an array of tuple refs, each of which contains an IP address and port number that Webmin listens on. The IP can be `*` (meaning any), and the port can be `*` (meaning the primary port).

##### fetch_updates(url, [login, pass], [sig-mode])
Returns a list of updates from some URL, or calls `&error`. Each element is an array reference containing:
* Module directory name
* Version number
* Absolute or relative download URL
* Operating systems the update is relevant for, in the same format as the os_support line in a module.info file
* Human-readable description of the update
  The parameters are:

    * `url` - Full URL to download updates from
    * `login` - Optional login for the URL
    * `pass` - Optional password for the URL
    * `sig`-mode - 0=No check, 1=Check if possible, 2=Must check

##### check_update_signature(host, port, page, ssl, user, pass, file, sig-mode)
Given a downloaded module update file, fetch the signature from the same URL with `-sig.asc` appended, and check that it is valid. Parameters are:
* `host` - Module download host
* `port` - Module download port
* `page` - Module download URL path
* `ssl` - Use SSL to download?
* `user` - Login for module download
* `pass` - Password for module download
* `file` - File containing module to check
* `sig-mode` - 0 - No check, 1 - Check if possible, 2 - Must check

##### find_cron_job(\@jobs)
Finds the cron job for Webmin updates, given an array ref of cron jobs as returned by `cron::list_cron_jobs`.

##### get_ipkeys(&miniserv)
Returns a list of IP address to key file mappings from a `miniserv.conf` entry.

##### save_ipkeys(&miniserv, &keys)
Updates `miniserv.conf` entries from the given list of keys.

##### validate_key_cert(key, [cert])
Call `&error` if some key and cert file don't look correct, based on the `BEGIN` line.

##### detect_operating_system([os-list-file], [with-cache])
Returns a hash containing `os_type`, `os_version`, `real_os_type` and `real_os_version`, suitable for the current system.

##### show_webmin_notifications([no-updates])
Print various notifications for the current user, if any. These can include password expiry, Webmin updates and more.

##### get_webmin_notifications([no-updates])
Returns a list of Webmin notification messages, each of which is a string of HTML. If the no-updates flag is set, Webmin version / module updates are not included.

##### get_system_uptime
Returns the number of seconds the system has been up, or `undef` if un-available.

##### list_operating_systems([os-list-file])
Returns a list of known OSs, each of which is a hash ref with keys:
* `realtype` - A human-readable OS name, like Ubuntu Linux
* `realversion` - A human-readable version, like 2204
* `type` - Webmin's internal OS code, like debian-linux
* `version` - Webmin's internal version number, like 13
* `code` - A fragment of Perl that will return `true` if evaluated on this OS

##### shared_root_directory
Returns 1 if the Webmin root directory is shared with another system, such as via NFS, or in a Solaris zone. If so, updates and module installs are not allowed.

##### submit_os_info(id)
Send via email a message about this system's OS and Perl version. Returns `undef` if all is good, or an error message.

##### get_webmin_id
Returns a (hopefully) unique ID for this Webmin install.

##### ip_match(ip, [match]+)
Checks an IP address against a list of IPs, networks and networks/masks, and returns 1 if a match is found.

##### prefix_to_mask(prefix)
Converts a number like 24 to a mask like 255.255.255.0.

##### valid_allow(text)
Returns `undef` if some text is a valid IP, hostname or network for use in allowed IPs, or an error message if not.

##### get_preloads(&miniserv)
Returns a list of module names and files to pre-load, based on a Webmin _miniserv_ configuration hash. Each is a two-element array ref containing a package name and the relative path of the `.pl` file to pre-load.

##### save_preloads(&miniserv, &preloads)
Updates a Webmin _miniserv_ configuration hash from a list of preloads, in the format returned by `get_preloads`.

##### get_tempdirs(&gconfig)
Returns a list of per-module temp directories, each of which is an array ref containing a module name and directory.

##### save_tempdirs(&gconfig, &tempdirs)
Updates the global config with a list of per-module temp dirs

##### get_module_install_type(dir)
Returns the installation method used for some module (such as _rpm_), or `undef` if it was installed from a _wbm_.

##### get_install_type
Returns the package type Webmin was installed form (_rpm_, _deb_, _solaris-pkg_ or `undef` for _tar.gz_).

##### list_cached_files
Returns a list of cached filenames for downloads made by Webmin, as array refs containing a full path and url.

##### show_restart_page([title, msg])
Output a page with header and footer about Webmin needing to restart.

##### cert_info(file)
Returns a hash of details of a cert in some file.

##### cert_pem_data(file)
Returns a cert in PEM format, from a file containing the PEM and possibly other keys.

##### cert_pkcs12_data(keyfile, [certfile])
Returns a cert in PKCS12 format.

##### get_blocked_users_hosts(&miniserv)
Returns a list of blocked users and hosts from the file written by Webmin at run-time.

##### show_ssl_key_form([defhost], [defemail], [deforg])
Returns HTML for inputs to generate a new self-signed cert.

##### parse_ssl_key_form(&in, keyfile, [certfile])
Parses the key generation form, and creates new key and cert files. Returns `undef` on success or an error message on failure.

##### build_installed_modules(force-all, force-mod)
Calls each module's `install_check` function, and updates the cache of modules whose underlying servers are installed.

##### get_latest_webmin_version
Returns 1 and the latest version of Webmin available on [webmin.com](https://webmin.com), or 0 and an error message.

##### filter_updates(&updates, [version], [include-third], [include-missing])
Given a list of updates, filters them to include only those that are suitable for this system. The parameters are:
* `updates` - Array ref of updates, as returned by `fetch_updates`
* `version` - Webmin version number to use in comparisons
* `include-third` - Set to 1 to include non-core modules in the results
* `include-missing` - Set to 1 to include modules not currently installed
