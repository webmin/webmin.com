---
title: "WebminCore"
date: 2023-10-05
weight: 6105
---

### Core Webmin API

#### `web-lib-funcs.pl`
Common functions for Webmin scripts. This file gets in-directly included by all scripts that use `web-lib.pl`.

```perl
use WebminCore;
init_config();
ui_print_header(undef, 'My Module', '');
print 'This is Webmin version ', get_webmin_version(),'<p>\n';
ui_print_footer();
```

##### read_file(file, &hash, [&order], [lowercase], [split-char])
Fill the given hash reference with name=value pairs from a file. The required parameters are:
* `file` - The file to head, which must be text with each line like name=value
* `hash` - The hash reference to add values read from the file to
* `order` - If given, an array reference to add names to in the order they were read
* `lowercase` - If set to 1, names are converted to lower case
* `split-char` - If set, names and values are split on this character instead of =

##### read_file_cached(file, &hash, [&order], [lowercase], [split-char])
Like read_file, but reads from an in-memory cache if the file has already been read in this Webmin script. Recommended, as it behaves exactly the same as read_file, but can be much faster.

##### write_file(file, &hash, [join-char])
Write out the contents of a hash as name=value lines. The parameters are:
* `file` - Full path to write to
* `hash` - A hash reference containing names and values to output
* `join-char` - If given, names and values are separated by this instead of =

##### html_escape(string)
Converts `&`, `<` and `>` codes in text to HTML entities, and returns the new string. This should be used when including data read from other sources in HTML pages.

##### quote_escape(string, [only-quote])
Converts " and ' characters in a string into HTML entities, and returns it. Useful for outputing HTML tag values.

##### tempname([filename])
Returns a mostly random temporary file name, typically under the `/tmp/.webmin` directory. If filename is given, this will be the base name used. Otherwise a unique name is selected randomly.

##### transname([filename])
Behaves exactly like tempname, but records the temp file for deletion when the current Webmin script process exits.

##### trunc(string, maxlen)
Truncates a string to the shortest whole word less than or equal to the given width. Useful for word wrapping.

##### indexof(string, value, ...)
Returns the index of some value in an array of values, or -1 if it was not found.

##### indexoflc(string, value, ...)
Like indexof, but does a case-insensitive match

##### sysprint(handle, [string]+)
Outputs some strings to a file handle, but bypassing IO buffering. Can be used as a replacement for print when writing to pipes or sockets.

##### check_ipaddress(ip)
Check if some IPv4 address is properly formatted, returning 1 if so or 0 if not.

##### check_ip6address(ip)
Check if some IPv6 address is properly formatted, and returns 1 if so.

##### generate_icon(image, title, link, [href], [width], [height], [before-title], [after-title])
Prints HTML for an icon image. The parameters are:
* `image` - URL for the image, like images/foo.gif
* `title` - Text to appear under the icon
* `link` - Optional destination for the icon's link
* `href` - Other HTML attributes to be added to the `<a href>` for the link
* `width` - Optional width of the icon
* `height` - Optional height of the icon
* `before-title` - HTML to appear before the title link, but which is not actually in the link
* `after-title` - HTML to appear after the title link, but which is not actually in the link

##### urlize
Converts a string to a form ok for putting in a URL, using % escaping.

##### un_urlize(string)
Converts a URL-encoded string to it's original contents - the reverse of the urlize function.

##### include(filename)
Read and output the contents of the given file.

##### copydata(in-handle, out-handle)
Read from one file handle and write to another, until there is no more to read.

##### ReadParseMime([maximum], [&cbfunc, &cbargs])
Read data submitted via a POST request using the multipart/form-data coding, and store it in the global `%in` hash. The optional parameters are:
* `maximum` - If the number of bytes of input exceeds this number, stop reading and call error
* `cbfunc` - A function reference to call after reading each block of data
* `cbargs` - Additional parameters to the callback function

##### ReadParse([&hash], [method], [noplus])
Fills the given hash reference with CGI parameters, or uses the global hash `%in` if none is given. Also sets the global variables `$in` and `@in`. The other parameters are:
* `method` - For use of this HTTP method, such as GET
* `noplus` - Don't convert + in parameters to spaces

##### read_fully(fh, &buffer, length)
Read data from some file handle up to the given length, even in the face of partial reads. Reads the number of bytes read. Stores received data in the string pointed to be the buffer reference.

##### read_parse_mime_callback(size, totalsize, upload-id)
Called by ReadParseMime as new data arrives from a form-data POST. Only updates the file on every 1% change though. For internal use by the upload progress tracker.

##### read_parse_mime_javascript(upload-id, [&fields])
Returns an onSubmit= Javascript statement to popup a window for tracking an upload with the given ID. For internal use by the upload progress tracker.

##### PrintHeader(charset)
Outputs the HTTP headers for an HTML page. The optional charset parameter can be used to set a character set. Normally this function is not called directly, but is rather called by `ui_print_header` or header.

##### header(title, image, [help], [config], [nomodule], [nowebmin], [rightside], [head-stuff], [body-stuff], [below])
Outputs a Webmin HTML page header with a title, including HTTP headers. The parameters are:
* `title` - The text to show at the top of the page
* `image` - An image to show instead of the title text. This is typically left blank
* `help` - If set, this is the name of a help page that will be linked to in the title
* `config` - If set to 1, the title will contain a link to the module's config page
* `nomodule` - If set to 1, there will be no link in the title section to the module's index
* `nowebmin` - If set to 1, there will be no link in the title section to the Webmin index
* `rightside` - HTML to be shown on the right-hand side of the title. Can contain multiple lines, separated by `<br>`. Typically this is used for links to stop, start or restart servers
* `head-stuff` - HTML to be included in the `<head>` section of the page
* `body-stuff` - HTML attributes to be include in the `<body>` tag
* `below` - HTML to be displayed below the title. Typically this is used for application or server version information

##### get_html_title(title)
Returns the full string to appear in the HTML `<title>` block.

##### get_html_framed_title
Returns the title text for a framed theme main page.

##### get_html_status_line(text-only)
Returns HTML for a script block that sets the status line, or if text-only is set to 1, just return the status line text.

##### popup_header([title], [head-stuff], [body-stuff])
Outputs a page header, suitable for a popup window. If no title is given, absolutely no decorations are output. Also useful in framesets. The parameters are:
* `title` - Title text for the popup window
* `head-stuff` - HTML to appear in the `<head>` section
* `body-stuff` - HTML attributes to be include in the `<body>` tag

##### footer([page, name]+, [noendbody])
Outputs the footer for a Webmin HTML page, possibly with links back to other pages. The links are specified by pairs of parameters, the first of which is a link destination, and the second the link text. For example:
```perl
footer('/', 'Webmin index', '', 'Module menu');
```

##### popup_footer
Outputs html for a footer for a popup window, started by `popup_header`.

##### load_theme_library
Immediately loads the current theme's `theme.pl` file. Not generally useful for most module developers, as this is called automatically by the header function.

##### redirect(url)
Output HTTP headers to redirect the browser to some page. The url parameter is typically a relative URL like `index.cgi` or `list_users.cgi`.

##### kill_byname(name, signal)
Finds a process whose command line contains the given name (such as httpd), and sends some signal to it. The signal can be numeric (like 9) or named (like KILL).

##### kill_byname_logged(name, signal)
Like kill_byname, but also logs the killing.

##### find_byname(name)
Finds processes searching for the given name in their command lines, and returns a list of matching PIDs.

##### error([message]+)
Display an error message and exit. This should be used by CGI scripts that encounter a fatal error or invalid user input to notify users of the problem. If `error_setup` has been called, the displayed error message will be prefixed by the message setup using that function.

##### popup_error([message]+)
This function is almost identical to error, but displays the message with HTML headers suitable for a popup window.

##### error_setup(message)
Registers a message to be prepended to all error messages displayed by the error function.

##### wait_for(handle, regexp, regexp, ...)
Reads from the input stream until one of the regexps matches, and returns the index of the matching regexp, or -1 if input ended before any matched. This is very useful for parsing the output of interactive programs, and can be used with a two-way pipe to feed input to a program in response to output matched by this function.

If the matching regexp contains bracketed sub-expressions, their values will be placed in the global array @matches, indexed starting from 1. You cannot use the Perl variables `$1`, `$2` and so on to capture matches.

Example code:
```perl
my $rv = wait_for($loginfh, "username:");
if ($rv -1) {
    error("Didn't get username prompt");
}
print $loginfh "joe\n";
my $rv = wait_for($loginfh, "password:");
if ($rv -1) {
    error("Didn't get password prompt");
}
print $loginfh "smeg\n";
```

##### fast_wait_for(handle, string, string, ...)
This function behaves very similar to wait_for (documented above), but instead of taking regular expressions as parameters, it takes strings. As soon as the input contains one of them, it will return the index of the matching string. If the input ends before any match, it returns -1.

##### has_command(command)
Returns the full path to the executable if some command is in the path, or undef if not found. If the given command is already an absolute path and exists, then the same path will be returned.

##### make_date(seconds, [date-only], [fmt])
Converts a Unix date/time in seconds to a human-readable form, by default formatted like dd/mmm/yyyy hh:mm:ss. Parameters are:
* `seconds` - Unix time is seconds to convert
* `date-only` - If set to 1, exclude the time from the returned string
* `fmt` - Optional, one of dd/mon/yyyy, dd/mm/yyyy, mm/dd/yyyy or yyyy/mm/dd

##### file_chooser_button(input, type, [form], [chroot], [addmode])
Return HTML for a button that pops up a file chooser when clicked, and places the selected filename into another HTML field. The parameters are:
* `input` - Name of the form field to store the filename in
* `type` - 0 for file or directory chooser, or 1 for directory only
* `form` - Index of the form containing the button
* `chroot` - If set to 1, the chooser will be limited to this directory
* `addmode` - If set to 1, the selected filename will be appended to the text box instead of replacing it's contents

##### popup_window_button(url, width, height, scrollbars?, &field-mappings)
Returns HTML for a button that will popup a chooser window of some kind. The parameters are:
* `url` - Base URL of the popup window's contents
* `width` - Width of the window in pixels
* `height` - Height in pixels
* `scrollbars` - Set to 1 if the window should have scrollbars. The field-mappings parameter is an array ref of array refs containing
** `Attribute` to assign field to in the popup window
** `Form` field name
** `CGI` parameter to URL for value, if any

##### read_acl(&user-module-hash, &user-list-hash)
Reads the Webmin acl file into the given hash references. The first is indexed by a combined key of username,module , with the value being set to 1 when the user has access to that module. The second is indexed by username, with the value being an array ref of allowed modules.

This function is deprecated in favour of foreign_available, which performs a more comprehensive check of module availability.

##### acl_filename
Returns the file containing the webmin ACL, which is usually `/etc/webmin/webmin.acl`.

##### acl_check
Does nothing, but kept around for compatability.

##### get_miniserv_config(&hash)
Reads the Webmin webserver's (`miniserv.pl`) configuration file, usually located at `/etc/webmin/miniserv.conf`, and stores its names and values in the given hash reference.

##### put_miniserv_config(&hash)
Writes out the Webmin webserver configuration file from the contents of the given hash ref. This should be initially populated by get_miniserv_config, like so:

```perl
get_miniserv_config(\%miniserv);
$miniserv{'port'} = 10005;
put_miniserv_config(\%miniserv);
restart_miniserv();
```

##### restart_miniserv([nowait])
Kill the old miniserv process and re-start it, then optionally waits for it to restart. This will apply all configuration settings.

##### reload_miniserv
Sends a USR1 signal to the miniserv process, telling it to read-read it's configuration files. Not all changes will be applied though, such as the IP addresses and ports to accept connections on.

##### check_os_support(&minfo, [os-type, os-version], [api-only])
Returns 1 if some module is supported on the current operating system, or the OS supplies as parameters. The parameters are:
* `minfo` - A hash ref of module information, as returned by get_module_info
* `os-type` - The Webmin OS code to use instead of the system's real OS, such as redhat-linux
* `os-version` - The Webmin OS version to use, such as 13.0
* `api-only` - If set to 1, considers a module supported if it provides an API to other modules on this OS, even if the majority of its functionality is not supported

##### http_download(host, port, page, destfile, [&error], [&callback], [sslmode], [user, pass], [timeout], [osdn-convert], [no-cache], [&headers])
Downloads data from a HTTP url to a local file or string. The parameters are:
* `host` - The hostname part of the URL, such as www.google.com
* `port` - The HTTP port number, such as 80
* `page` - The filename part of the URL, like `/index.html`
* `destfile` - The local file to save the URL data to, like `/tmp/index.html`. This can also be a scalar reference, in which case the data will be appended to that scalar
* `error` - If set to a scalar ref, the function will store any error message in this scalar and return 0 on failure, or 1 on success. If not set, it will simply call the error function if the download fails
* `callback` - If set to a function ref, it will be called after each block of data is received. This is typically set to \&progress_callback, for printing download progress
* `sslmode` - If set to 1, an HTTPS connection is used instead of HTTP
* `user` - If set, HTTP authentication is done with this username
* `pass` - The HTTP password to use with the username above
* `timeout` - A timeout in seconds to wait for the TCP connection to be established before failing
* `osdn-convert` - If set to 1, URL for downloads from sourceforge are converted to use an appropriate mirror site
* `no-cache` - If set to 1, Webmin's internal caching for this URL is disabled
* `headers` - If set to a hash ref of additional HTTP headers, they will be added to the request

##### complete_http_download(handle, destfile, [&error], [&callback], [osdn], [oldhost], [oldport], [&send-headers], [old-ssl])
Do a HTTP download, after the headers have been sent. For internal use only, typically called by `http_download`.

##### ftp_download(host, file, destfile, [&error], [&callback], [user, pass], [port])
Download data from an FTP site to a local file. The parameters are:
* `host` - FTP server hostname
* `file` - File on the FTP server to download
* `destfile` - File on the Webmin system to download data to
* `error` - If set to a string ref, any error message is written into this string and the function returns 0 on failure, 1 on success. Otherwise, error is called on failure
* `callback` - If set to a function ref, it will be called after each block of data is received. This is typically set to \&progress_callback, for printing download progress
* `user` - Username to login to the FTP server as. If missing, Webmin will login as anonymous
* `pass` - Password for the username above
* `port` - FTP server port number, which defaults to 21 if not set

##### ftp_upload(host, file, srcfile, [&error], [&callback], [user, pass], [port])
Upload data from a local file to an FTP site. The parameters are:
* `host` - FTP server hostname
* `file` - File on the FTP server to write to
* `srcfile` - File on the Webmin system to upload data from
* `error` - If set to a string ref, any error message is written into this string and the function returns 0 on failure, 1 on success. Otherwise, error is called on failure
* `callback` - If set to a function ref, it will be called after each block of data is received. This is typically set to \&progress_callback, for printing upload progress
* `user` - Username to login to the FTP server as. If missing, Webmin will login as anonymous
* `pass` - Password for the username above
* `port` - FTP server port number, which defaults to 21 if not set

##### no_proxy(host)
Checks if some host is on the no proxy list. For internal use by the http_download and ftp_download functions.

##### open_socket(host, port, handle, [&error])
Open a TCP connection to some host and port, using a file handle. The parameters are:
* `host` - Hostname or IP address to connect to
* `port` - TCP port number
* `handle` - A file handle name to use for the connection
* `error` - A string reference to write any error message into. If not set, the error function is called on failure

##### download_timeout
Called when a download times out. For internal use only.

##### ftp_command(command, expected, [&error], [filehandle])
Send an FTP command, and die if the reply is not what was expected. Mainly for internal use by the ftp_download and ftp_upload functions.

##### to_ipaddress(hostname)
Converts a hostname to an a.b.c.d format IP address, or returns undef if it cannot be resolved.

##### icons_table(&links, &titles, &icons, [columns], [href], [width], [height], &befores, &afters)
Renders a 4-column table of icons. The useful parameters are:
* `links` - An array ref of link destination URLs for the icons
* `titles` - An array ref of titles to appear under the icons
* `icons` - An array ref of URLs for icon images
* `columns` - Number of columns to layout the icons with. Defaults to 4

##### replace_file_line(file, line, [newline]*)
Replaces one line in some file with 0 or more new lines. The parameters are:
* `file` - Full path to some file, like `/etc/hosts`
* `line` - Line number to replace, starting from 0
* `newline` - Zero or more lines to put into the file at the given line number. These must be newline-terminated strings

##### read_file_lines(file, [readonly])
Returns a reference to an array containing the lines from some file. This array can be modified, and will be written out when flush_file_lines() is called. The parameters are:
* `file` - Full path to the file to read
* `readonly` - Should be set 1 if the caller is only going to read the lines, and never write it out
Example code:
```perl
my $lref = read_file_lines("/etc/hosts");
push(@$lref, "127.0.0.1 localhost");
flush_file_lines("/etc/hosts");
```

##### flush_file_lines([file], [eol])
Write out to a file previously read by read_file_lines to disk (except for those marked readonly). The parameters are:
* `file` - The file to flush out
* `eof` - End-of-line character for each line. Defaults to \n

##### unflush_file_lines(file)
Clear the internal cache of some given file, previously read by read_file_lines.

##### unix_user_input(fieldname, user, [form])
Returns HTML for an input to select a Unix user. By default this is a text box with a user popup button next to it.

##### unix_group_input(fieldname, user, [form])
Returns HTML for an input to select a Unix group. By default this is a text box with a group popup button next to it.

##### hlink(text, page, [module], [width], [height])
Returns HTML for a link that when clicked on pops up a window for a Webmin help page. The parameters are:
* `text` - Text for the link
* `page` - Help page code, such as "intro"
* `module` - Module the help page is in. Defaults to the current module
* `width` - Width of the help popup window. Defaults to 600 pixels
* `height` - Height of the help popup window. Defaults to 400 pixels
The actual help pages are in each module's help sub-directory, in files with .html extensions.

##### user_chooser_button(field, multiple, [form])
Returns HTML for a javascript button for choosing a Unix user or users. The parameters are:
* `field` - Name of the HTML field to place the username into
* `multiple` - Set to 1 if multiple users can be selected
* `form` - Index of the form on the page

##### group_chooser_button(field, multiple, [form])
Returns HTML for a javascript button for choosing a Unix group or groups The parameters are:
* `field` - Name of the HTML field to place the group name into
* `multiple` - Set to 1 if multiple groups can be selected
* `form` - Index of the form on the page

##### foreign_check(module, [api-only])
Checks if some other module exists and is supported on this OS. The parameters are:
* `module` - Name of the module to check
* `api-only` - Set to 1 if you just want to check if the module provides an API that others can call, instead of the full web UI

##### foreign_exists(module)
Checks if some other module exists. The module parameter is the short module name.

##### foreign_available(module)
Returns 1 if some module is installed, and acessible to the current user. The module parameter is the module directory name.

##### foreign_require(module, [file], [package])
Brings in functions from another module, and places them in the Perl namespace with the same name as the module. The parameters are:
* `module` - The source module's directory name, like sendmail
* `file` - The API file in that module, like `sendmail-lib.pl`. If missing, all API files are loaded
* `package` - Perl package to place the module's functions and global variables in
If the original module name contains dashes, they will be replaced with _ in the package name.

##### foreign_call(module, function, [arg]*)
Call a function in another module. The module parameter is the target module directory name, function is the perl sub to call, and the remaining parameters are the arguments. However, unless you need to call a function whose name is dynamic, it is better to use Perl's cross-module function call syntax like `module::function(args)`.

##### foreign_config(module, [user-config])
Get the configuration from another module, and return it as a hash. If the user-config parameter is set to 1, returns the Usermin user-level preferences for the current user instead.

##### foreign_installed(module, mode)
Checks if the server for some module is installed, and possibly also checks if the module has been configured by Webmin. For mode 1, returns 2 if the server is installed and configured for use by Webmin, 1 if installed but not configured, or 0 otherwise. For mode 0, returns 1 if installed, 0 if not. If the module does not provide an `install_check.pl` script, assumes that the server is installed.

##### foreign_defined(module, function)
Returns 1 if some function is defined in another module. In general, it is simpler to use the syntax `&defined(module::function)` instead.

##### get_system_hostname([short])
Returns the hostname of this system. If the short parameter is set to 1, then the domain name is not prepended - otherwise, Webmin will attempt to get the fully qualified hostname, like `foo.example.com`.

##### get_webmin_version
Returns the version of Webmin currently being run, such as 1.450.

##### get_module_acl([user], [module], [no-rbac], [no-default])
Returns a hash containing access control options for the given user and module. By default the current username and module name are used. If the no-rbac flag is given, the permissions will not be updated based on the user's RBAC role (as seen on Solaris). If the no-default flag is given, default permissions for the module will not be included.

##### get_group_module_acl(group, [module])
Returns the ACL for a Webmin group, in an optional module (which defaults to the current module).

##### save_module_acl(&acl, [user], [module])
Updates the acl hash for some user and module. The parameters are:
* `acl` - Hash reference for the new access control options
* `user` - User to update, defaulting to the current user
* `module` - Module to update, defaulting to the caller

##### save_group_module_acl(&acl, group, [module])
Updates the acl hash for some group and module. The parameters are:
* `acl` - Hash reference for the new access control options
* `group` - Group name to update
* `module` - Module to update, defaulting to the caller

##### init_config
This function must be called by all Webmin CGI scripts, either directly or indirectly via a per-module `lib.pl` file. It performs a number of initialization and housekeeping tasks, such as working out the module name, checking that the current user has access to the module, and populating global variables. Some of the variables set include:
* `$config_directory` - Base Webmin config directory, typically `/etc/webmin`
* `$var_directory` - Base logs directory, typically `/var/webmin`
* `%config` - Per-module configuration
* `%gconfig` - Global configuration
* `$scriptname` - Base name of the current perl script
* `$module_name` - The name of the current module
* `$module_config_directory` - The config directory for this module
* `$module_config_file` - The config file for this module
* `$module_root_directory` - This module's code directory
* `$webmin_logfile` - The detailed logfile for webmin
* `$remote_user` - The actual username used to login to webmin
* `$base_remote_user` - The username whose permissions are in effect
* `$current_theme` - The theme currently in use
* `$root_directory` - The first root directory of this webmin install
* `@root_directories` - All root directories for this webmin install

##### load_language([module], [directory])
Returns a hashtable mapping text codes to strings in the appropriate language, based on the `$current_lang` global variable, which is in turn set based on the Webmin user's selection. The optional module parameter tells the function which module to load strings for, and defaults to the calling module. The optional directory parameter can be used to load strings from a directory other than lang.

In regular module development you will never need to call this function directly, as init_config calls it for you, and places the module's strings into the %text hash.

##### text_subs(string)
Used internally by load_language to expand `$code` substitutions in language files.

##### text(message, [substitute]+)
Returns a translated message from %text, but with `$1`, `$2`, etc.. replaced with the substitute parameters. This makes it easy to use strings with placeholders that get replaced with programmatically generated text. For example:
```perl
print &text('index_hello', $remote_user),"<p>\n";
```

##### encode_base64(string)
Encodes a string into base64 format, for use in MIME email or HTTP authorization headers.

##### decode_base64(string)
Converts a base64-encoded string into plain text. The opposite of encode_base64.

##### get_module_info(module, [noclone], [forcache])
Returns a hash containg details of the given module. Some useful keys are:
* `dir` - The module directory, like sendmail
* `desc` - Human-readable description, in the current users" language
* `version` - Optional module version number
* `os_support` - List of supported operating systems and versions
* `category` - Category on Webmin's left menu, like net

##### get_all_module_infos(cachemode)
Returns a list contains the information on all modules in this webmin install, including clones. Uses caching to reduce the number of module.info files that need to be read. Each element of the array is a hash reference in the same format as returned by get_module_info. The cache mode flag can be: 0 = read and write, 1 = don"t read or write, 2 = read only

##### get_theme_info(theme)
Returns a hash containing a theme's details, taken from it's theme.info file. Some useful keys are:
* `dir` - The theme directory, like blue-theme
* `desc` - Human-readable description, in the current users' language
* `version` - Optional module version number
* `os_support` - List of supported operating systems and versions

##### list_languages
Returns an array of supported languages, taken from Webmin's os_list.txt file. Each is a hash reference with the following keys:
* `lang` - The short language code, like es for Spanish
* `desc` - A human-readable description, in English
* `charset` - An optional character set to use when displaying the language
* `titles` - Set to 1 only if Webmin has title images for the language
* `fallback` - The code for another language to use if a string does not exist in this one. For all languages, English is the ultimate fallback

##### read_env_file(file, &hash)
Similar to Webmin's read_file() function, but handles files containing shell environment variables formatted like:
```bash
export FOO=bar
SMEG="spod"
```
The file parameter is the full path to the file to read, and hash a Perl hash ref to read names and values into.

##### write_env_file(file, &hash, [export])
Writes out a hash to a file in name="value" format, suitable for use in a shell script. The parameters are:
* `file` - Full path for a file to write to
* `hash` - Hash reference of names and values to write
* `export` - If set to 1, preceed each variable setting with the word "export"

##### lock_file(filename, [readonly], [forcefile])
Lock a file for exclusive access. If the file is already locked, spin until it is freed. Uses a .lock file, which is not 100% reliable, but seems to work OK. The parameters are:
* `filename` - File or directory to lock
* `readonly` - If set, the lock is for reading the file only. More than one script can have a readonly lock, but only one can hold a write lock
* `forcefile` - Force the file to be considered as a real file and not a symlink for Webmin actions logging purposes

##### unlock_file(filename)
Release a lock on a file taken out by lock_file. If Webmin actions logging of file changes is enabled, then at unlock file a diff will be taken between the old and new contents, and stored under `/var/webmin/diffs` when `webmin_log` is called. This can then be viewed in the Webmin Actions Log module.

##### test_lock(file)
Returns 1 if some file is currently locked, 0 if not.

##### unlock_all_files
Unlocks all files locked by the current script.

##### can_lock_file(file)
Returns 1 if some file should be locked, based on the settings in the Webmin Configuration module. For internal use by lock_file only.

##### webmin_log(action, type, object, &params, [module], [host, script-on-host, client-ip])
Log some action taken by a user. This is typically called at the end of a script, once all file changes are complete and all commands run. The parameters are:
* `action` - A short code for the action being performed, like "create"
* `type` - A code for the type of object the action is performed to, like "user"
* `object` - A short name for the object, like "joe" if the Unix user "joe" was just created
* `params` - A hash ref of additional information about the action
* `module` - Name of the module in which the action was performed, which defaults to the current module
* `host` - Remote host on which the action was performed. You should never need to set this (or the following two parameters), as they are used only for remote Webmin logging
* `script-on-host` - Script name like `create_user.cgi` on the host the action was performed on
* `client-ip` - IP address of the browser that performed the action

##### additional_log(type, object, data, [input])
Records additional log data for an upcoming call to webmin_log, such as a command that was run or SQL that was executed. Typically you will never need to call this function directory.

##### webmin_debug_log(type, message)
Write something to the Webmin debug log. For internal use only.

##### system_logged(command)
Just calls the Perl system() function, but also logs the command run.

##### backquote_logged(command)
Executes a command and returns the output (like `command`), but also logs it.

##### backquote_with_timeout(command, timeout, safe?, [maxlines])
Runs some command, waiting at most the given number of seconds for it to complete, and returns the output. The maxlines parameter sets the number of lines of output to capture. The safe parameter should be set to 1 if the command is safe for read-only mode users to run.

##### backquote_command(command, safe?)
Executes a command and returns the output (like `command`), subject to command translation. The safe parameter should be set to 1 if the command is safe for read-only mode users to run.

##### kill_logged(signal, pid, ...)
Like Perl's built-in kill function, but also logs the fact that some process was killed. On Windows, falls back to calling process.exe to terminate a process.

##### rename_logged(old, new)
Re-names a file and logs the rename. If the old and new files are on different filesystems, calls mv or the Windows rename function to do the job.

##### rename_file(old, new)
Renames a file or directory. If the old and new files are on different filesystems, calls mv or the Windows rename function to do the job.

##### symlink_logged(src, dest)
Create a symlink, and logs it. Effectively does the same thing as the Perl symlink function.

##### symlink_file(src, dest)
Creates a soft link, unless in read-only mode. Effectively does the same thing as the Perl symlink function.

##### link_file(src, dest)
Creates a hard link, unless in read-only mode. The existing new link file will be deleted if necessary. Effectively the same as Perl's link function.

##### make_dir(dir, perms, recursive)
Creates a directory and sets permissions on it, unless in read-only mode. The perms parameter sets the octal permissions to apply, which unlike Perl's mkdir will really get set. The recursive flag can be set to 1 to have the function create parent directories too.

##### set_ownership_permissions(user, group, perms, file, ...)
Sets the user, group owner and permissions on some files. The parameters are:
* `user` - UID or username to change the file owner to. If undef, then the owner is not changed
* `group` - GID or group name to change the file group to. If undef, then the group is set to the user's primary group
* `perms` - Octal permissions set to set on the file. If undef, they are left alone
* `file` - One or more files or directories to modify

##### unlink_logged(file, ...)
Like Perl's unlink function, but locks the files beforehand and un-locks them after so that the deletion is logged by Webmin.

##### unlink_file(file, ...)
Deletes some files or directories. Like Perl's unlink function, but also recursively deletes directories with the rm command if needed.

##### copy_source_dest(source, dest)
Copy some file or directory to a new location. Returns 1 on success, or 0 on failure - also sets `$!` on failure. If the source is a directory, uses piped tar commands to copy a whole directory structure including permissions and special files.

##### remote_session_name( host|&server )
Generates a session ID for some server. For this server, this will always be an empty string. For a server object it will include the hostname and port and PID. For a server name, it will include the hostname and PID. For internal use only.

##### remote_foreign_require(server, module, file)
Connects to `rpc.cgi` on a remote webmin server and have it open a session to a process that will actually do the require and run functions. This is the equivalent for foreign_require, but for a remote Webmin system. The server parameter can either be a hostname of a system registered in the Webmin Servers Index module, or a hash reference for a system from that module.

##### remote_foreign_call(server, module, function, [arg]*)
Call a function on a remote server. Must have been setup first with remote_foreign_require for the same server and module. Equivalent to foreign_call, but with the extra server parameter to specify the remote system's hostname.

##### remote_foreign_check(server, module, [api-only])
Checks if some module is installed and supported on a remote server. Equivilant to foreign_check, but for the remote Webmin system specified by the server parameter.

##### remote_foreign_config(server, module)
Gets the configuration for some module from a remote server, as a hash. Equivalent to foreign_config, but for a remote system.

##### remote_eval(server, module, code)
Evaluates some perl code in the context of a module on a remote webmin server. The server parameter must be the hostname of a remote system, module must be a module directory name, and code a string of Perl code to run. This can only be called after remote_foreign_require for the same server and module.

##### remote_write(server, localfile, [remotefile], [remotebasename])
Transfers some local file to another server via Webmin's RPC protocol, and returns the resulting remote filename. If the remotefile parameter is given, that is the destination filename which will be used. Otherwise a randomly selected temporary filename will be used, and returned by the function.

##### remote_read(server, localfile, remotefile)
Transfers a file from a remote server to this system, using Webmin's RPC protocol. The server parameter must be the hostname of a system registered in the Webmin Servers Index module, localfile is the destination path on this system, and remotefile is the file to fetch from the remote server.

##### remote_finished
Close all remote sessions. This happens automatically after a while anyway, but this function should be called to clean things up faster.

##### remote_error_setup(&function)
Sets a function to be called instead of `&error` when a remote RPC operation fails. Useful if you want to have more control over your remote operations.

##### remote_rpc_call(server, structure)
Calls `rpc.cgi` on some server and passes it a perl structure (hash,array,etc) and then reads back a reply structure. This is mainly for internal use only, and is called by the other remote_* `functions.

#####` remote_multi_callback(&servers, parallel, &function, arg||&args, &returns, &errors, [module, library])
Executes some function in parallel on multiple servers at once. Fills in the returns and errors arrays respectively. If the module and library parameters are given, that module is remotely required on the server first, to check if it is connectable. The parameters are:
* `servers` - A list of Webmin system hash references
* `parallel` - Number of parallel operations to perform
* `function` - Reference to function to call for each system
* `args` - Additional parameters to the function
* `returns` - Array ref to place return values into, in same order as servers
* `errors` - Array ref to place error messages into
* `module` - Optional module to require on the remote system first
* `library` - Optional library to require in the module

##### serialise_variable(variable)
Converts some variable (maybe a scalar, hash ref, array ref or scalar ref) into a url-encoded string. In the cases of arrays and hashes, it is recursively called on each member to serialize the entire object.

##### unserialise_variable(string)
Converts a string created by serialise_variable() back into the original scalar, hash ref, array ref or scalar ref. If the original variable was a Perl object, the same class is used on this system, if available.

##### other_groups(user)
Returns a list of secondary groups a user is a member of, as a list of group names.

##### date_chooser_button(dayfield, monthfield, yearfield)
Returns HTML for a button that pops up a data chooser window. The parameters are:
* `dayfield` - Name of the text field to place the day of the month into
* `monthfield` - Name of the select field to select the month of the year in, indexed from 1
* `yearfield` - Name of the text field to place the year into

##### help_file(module, file)
Returns the path to a module's help file of some name, typically under the help directory with a .html extension.

##### seed_random
Seeds the random number generator, if not already done in this script. On Linux this makes use of the current time, process ID and a read from `/dev/urandom`. On other systems, only the current time and process ID are used.

##### disk_usage_kb(directory)
Returns the number of kB used by some directory and all subdirs. Implemented by calling the =du -k= command.

##### recursive_disk_usage(directory)
Returns the number of bytes taken up by all files in some directory and all sub-directories, by summing up their lengths. The disk_usage_kb is more reflective of reality, as the filesystem typically pads file sizes to 1k or 4k blocks.

##### help_search_link(term, [ section, ... ] )
Returns HTML for a link to the man module for searching local and online docs for various search terms. The term parameter can either be a single word like "bind", or a space-separated list of words. This function is typically used by modules that want to refer users to additional documentation in man pages or local system doc files.

##### make_http_connection(host, port, ssl, method, page, [&headers])
Opens a connection to some HTTP server, maybe through a proxy, and returns a handle object. The handle can then be used to send additional headers and read back a response. If anything goes wrong, returns an error string. The parameters are:
* `host` - Hostname or IP address of the webserver to connect to
* `port` - HTTP port number to connect to
* `ssl` - Set to 1 to connect in SSL mode
* `method` - HTTP method, like GET or POST
* `page` - Page to request on the webserver, like `/foo/index.html`
* `headers` - Array ref of additional HTTP headers, each of which is a 2-element array ref

##### read_http_connection(&handle, [bytes])
Reads either one line or up to the specified number of bytes from the handle, originally supplied by make_http_connection.

##### write_http_connection(&handle, [data+])
Writes the given data to the given HTTP connection handle.

##### close_http_connection(&handle)
Closes a connection to an HTTP server, identified by the given handle.

##### clean_environment
Deletes any environment variables inherited from miniserv so that they won"t be passed to programs started by webmin. This is useful when calling programs that check for CGI-related environment variables and modify their behaviour, and to avoid passing sensitive variables to un-trusted programs.

##### reset_environment
Puts the environment back how it was before clean_environment was callled.

##### progress_callback
Never called directly, but useful for passing to &http_download to print out progress of an HTTP request.

##### switch_to_remote_user
Changes the user and group of the current process to that of the unix user with the same name as the current webmin login, or fails if there is none. This should be called by Usermin module scripts that only need to run with limited permissions.

##### create_user_config_dirs
Creates per-user config directories and sets `$user_config_directory` and `$user_module_config_directory` to them. Also reads per-user module configs into %userconfig. This should be called by Usermin module scripts that need to store per-user preferences or other settings.

##### create_missing_homedir(&uinfo)
If auto homedir creation is enabled, create one for this user if needed. For internal use only.

##### filter_javascript(text)
Disables all javascript `<script>`, onClick= and so on tags in the given HTML, and returns the new HTML. Useful for displaying HTML from an un-trusted source.

##### resolve_links(path)
Given a path that may contain symbolic links, returns the real path.

##### simplify_path(path, bogus)
Given a path, maybe containing elements '..' and '.' , convert it to a clean, absolute form. Returns undef if this is not possible.

##### same_file(file1, file2)
Returns 1 if two files are actually the same

##### flush_webmin_caches
Clears all in-memory and on-disk caches used by Webmin.

##### list_usermods
Returns a list of additional module restrictions. For internal use in Usermin only.

##### available_usermods(&allmods, &usermods)
Returns a list of modules that are available to the given user, based on usermod additional/subtractions. For internal use by Usermin only.

##### get_available_module_infos(nocache)
Returns a list of modules available to the current user, based on operating system support, access control and usermod restrictions. Useful in themes that need to display a list of modules the user can use. Each element of the returned array is a hash reference in the same format as returned by get_module_info.

##### get_visible_module_infos(nocache)
Like get_available_module_infos, but excludes hidden modules from the list. Each element of the returned array is a hash reference in the same format as returned by get_module_info.

##### get_visible_modules_categories(nocache)
Returns a list of Webmin module categories, each of which is a hash ref with "code", "desc" and "modules" keys. The modules value is an array ref of modules in the category, in the format returned by get_module_info. Un-used modules are automatically assigned to the "unused" category, and those with no category are put into "others".

##### is_under_directory(directory, file)
Returns 1 if the given file is under the specified directory, 0 if not. Symlinks are taken into account in the file to find it's "real" location.

##### parse_http_url(url, [basehost, baseport, basepage, basessl])
Given an absolute URL, returns the host, port, page and ssl flag components. Relative URLs can also be parsed, if the base information is provided.

##### check_clicks_function
Returns HTML for a JavaScript function called check_clicks that returns true when first called, but false subsequently. Useful on onClick for critical buttons. Deprecated, as this method of preventing duplicate actions is un-reliable.

##### load_entities_map
Returns a hash ref containing mappings between HTML entities (like ouml) and ascii values (like 246). Mainly for internal use.

##### entities_to_ascii(string)
Given a string containing HTML entities like &ouml; and &#55;, replace them with their ASCII equivalents.

##### get_product_name
Returns either "webmin" or "usermin", depending on which program the current module is in. Useful for modules that can be installed into either.

##### get_charset
Returns the character set for the current language, such as iso-8859-1.

##### get_display_hostname
Returns the system's hostname for UI display purposes. This may be different from the actual hostname if you administrator has configured it so in the Webmin Configuration module.

##### save_module_config([&config], [modulename])
Saves the configuration for some module. The config parameter is an optional hash reference of names and values to save, which defaults to the global %config hash. The modulename parameter is the module to update the config file, which defaults to the current module.

##### save_user_module_config([&config], [modulename])
Saves the user's Usermin preferences for some module. The config parameter is an optional hash reference of names and values to save, which defaults to the global %userconfig hash. The modulename parameter is the module to update the config file, which defaults to the current module.

##### nice_size(bytes, [min])
Converts a number of bytes into a number followed by a suffix like GB, MB or kB. Rounding is to two decimal digits. The optional min parameter sets the smallest units to use - so you could pass 1024*1024 to never show bytes or kB.

##### get_perl_path
Returns the path to Perl currently in use, such as `/usr/bin/perl`.

##### get_goto_module([&mods])
Returns the details of a module that the current user should be re-directed to after logging in, or undef if none. Useful for themes.

##### select_all_link(field, form, [text])
Returns HTML for a "Select all" link that uses Javascript to select multiple checkboxes with the same name. The parameters are:
* `field` - Name of the checkbox inputs
* `form` - Index of the form on the page
* `text` - Message for the link, defaulting to "Select all"

##### select_invert_link(field, form, text)
Returns HTML for an "Invert selection" link that uses Javascript to invert the selection on multiple checkboxes with the same name. The parameters are:
* `field` - Name of the checkbox inputs
* `form` - Index of the form on the page
* `text` - Message for the link, defaulting to "Invert selection"

##### select_rows_link(field, form, text, &rows)
Returns HTML for a link that uses Javascript to select rows with particular values for their checkboxes. The parameters are:
* `field` - Name of the checkbox inputs
* `form` - Index of the form on the page
* `text` - Message for the link, de
* `rows` - Reference to an array of 1 or 0 values, indicating which rows to check

##### check_pid_file(file)
Given a pid file, returns the PID it contains if the process is running.

##### get_mod_lib
Return the local os-specific library name to this module. For internal use only.

##### module_root_directory(module)
Given a module name, returns its root directory. On a typical Webmin install, all modules are under the same directory - but it is theoretically possible to have more than one.

##### list_mime_types
Returns a list of all known MIME types and their extensions, as a list of hash references with keys:
* `type` - The MIME type, like text/plain
* `exts` - A list of extensions, like .doc and .avi
* `desc` - A human-readable description for the MIME type

##### guess_mime_type(filename, [default])
Given a file name like xxx.gif or foo.html, returns a guessed MIME type. The optional default parameter sets a default type of use if none is found, which defaults to application/octet-stream.

##### open_tempfile([handle], file, [no-error], [no-tempfile], [safe?])
Opens a file handle for writing to a temporary file, which will only be renamed over the real file when the handle is closed. This allows critical files like `/etc/shadow` to be updated safely, even if writing fails part way through due to lack of disk space. The parameters are:
* `handle` - File handle to open, as you would use in Perl's open function
* `file` - Full path to the file to write, prefixed by `>` or `>>` to indicate over-writing or appending. In append mode, no temp file is used
* `no-error` - By default, this function will call error if the open fails. Setting this parameter to 1 causes it to return 0 on failure, and set `$!` with the error code
* `no-tempfile` - If set to 1, writing will be direct to the file instead of using a temporary file
* `safe` - Indicates to users in read-only mode that this write is safe and non-destructive

##### close_tempfile(file||handle)
Copies a temp file to the actual file, assuming that all writes were successful. The handle must have been one passed to open_tempfile.

##### print_tempfile(handle, text, ...)
Like the normal print function, but calls `&error` on failure. Useful when combined with open_tempfile, to ensure that a criticial file is never only partially written.

##### is_selinux_enabled
Returns 1 if SElinux is supported on this system and enabled, 0 if not.

##### get_clear_file_attributes(file)
Finds file attributes that may prevent writing, clears them and returns them as a list. May call error. Mainly for internal use by open_tempfile and close_tempfile.

##### reset_file_attributes(file, &attributes)
Put back cleared attributes on some file. May call error. Mainly for internal use by close_tempfile.

##### cleanup_tempnames
Remove all temporary files generated using transname. Typically only called internally when a Webmin script exits.

##### open_lock_tempfile([handle], file, [no-error])
Returns a temporary file for writing to some actual file, and also locks it. Effectively the same as calling lock_file and open_tempfile on the same file, but calls the unlock for you automatically when it is closed.

##### month_to_number(month)
Converts a month name like feb to a number like 1.

##### number_to_month(number)
Converts a number like 1 to a month name like Feb.

##### get_rbac_module_acl(user, module)
Returns a hash reference of RBAC overrides ACLs for some user and module. May return undef if none exist (indicating access denied), or the string * `if` full access is granted

##### supports_rbac([module])
Returns 1 if RBAC client support is available, such as on Solaris.

##### use_rbac_module_acl(user, module)
Returns 1 if some user should use RBAC to get permissions for a module

##### execute_command(command, stdin, stdout, stderr, translate-files?, safe?)
Runs some command, possibly feeding it input and capturing output to the give files or scalar references. The parameters are:
* `command` - Full command to run, possibly including shell meta-characters
* `stdin` - File to read input from, or a scalar ref containing input, or undef if no input should be given
* `stdout` - File to write output to, or a scalar ref into which output should be placed, or undef if the output is to be discarded
* `stderr` - File to write error output to, or a scalar ref into which error output should be placed, or undef if the error output is to be discarded
* `translate-files` - Set to 1 to apply filename translation to any filenames. Usually has no effect
* `safe` - Set to 1 if this command is safe and does not modify the state of the system

##### open_readfile(handle, file)
Opens some file for reading. Returns 1 on success, 0 on failure. Pretty much exactly the same as Perl's open function.

##### open_execute_command(handle, command, output?, safe?)
Runs some command, with the specified file handle set to either write to it if in-or-out is set to 0, or read to it if output is set to 1. The safe flag indicates if the command modifies the state of the system or not.

##### translate_filename(filename)
Applies all relevant registered translation functions to a filename. Mostly for internal use, and typically does nothing.

##### translate_command(filename)
Applies all relevant registered translation functions to a command. Mostly for internal use, and typically does nothing.

##### register_filename_callback(module|undef, &function, &args)
Registers some function to be called when the specified module (or all modules) tries to open a file for reading and writing. The function must return the actual file to open. This allows you to override which files other code actually operates on, via the translate_filename function.

##### register_command_callback(module|undef, &function, &args)
Registers some function to be called when the specified module (or all modules) tries to execute a command. The function must return the actual command to run. This allows you to override which commands other other code actually runs, via the translate_command function.

##### capture_function_output(&function, arg, ...)
Captures output that some function prints to STDOUT, and returns it. Useful for functions outside your control that print data when you really want to manipulate it before output.

##### modules_chooser_button(field, multiple, [form])
Returns HTML for a button for selecting one or many Webmin modules. field - Name of the HTML field to place the module names into. multiple - Set to 1 if multiple modules can be selected. form - Index of the form on the page.

##### substitute_template(text, &hash)
Given some text and a hash reference, for each ocurrance of `$FOO` or `${FOO}` in the text replaces it with the value of the hash key foo. Also supports blocks like `${IF-FOO}` ... `${ENDIF-FOO}`, whose contents are only included if foo is non-zero, and `${IF-FOO}` ... `${ELSE-FOO}` ... `${ENDIF-FOO}`.

##### running_in_zone
Returns 1 if the current Webmin instance is running in a Solaris zone. Used to disable module and features that are not appropriate, like those that modify mounted filesystems.

##### running_in_vserver
Returns 1 if the current Webmin instance is running in a Linux VServer. Used to disable modules and features that are not appropriate.

##### running_in_xen
Returns 1 if Webmin is running inside a Xen instance, by looking at `/proc/xen/capabilities`.

##### list_categories(&modules, [include-empty])
Returns a hash mapping category codes to names, including any custom-defined categories. The modules parameter must be an array ref of module hash objects, as returned by get_all_module_infos.

##### is_readonly_mode
Returns 1 if the current user is in read-only mode, and thus all writes to files and command execution should fail.

##### command_as_user(user, with-env?, command, ...)
Returns a command to execute some command as the given user, using the su statement. If on Linux, the `/bin/sh` shell is forced in case the user does not have a valid shell. If with-env is set to 1, the -s flag is added to the su command to read the user's .profile or .bashrc file.

##### list_osdn_mirrors(project, file)
Given a OSDN project and filename, returns a list of mirror URLs from which it can be downloaded. Mainly for internal use by the http_download function.

##### convert_osdn_url(url)
Given a URL like http://osdn.dl.sourceforge.net/sourceforge/project/file.zip or http://prdownloads.sourceforge.net/project/file.zip , convert it to a real URL on the best mirror.

##### get_current_dir
Returns the directory the current process is running in.

##### supports_users
Returns 1 if the current OS supports Unix user concepts and functions like su , getpw* `and` so on. This will be true on Linux and other Unixes, but false on Windows

##### supports_symlinks
Returns 1 if the current OS supports symbolic and hard links. This will not be the case on Windows.

##### quote_path(path)
Returns a path with safe quoting for the current operating system.

##### get_windows_root
Returns the base windows system directory, like c:/windows.

##### read_file_contents(file)
Given a filename, returns its complete contents as a string. Effectively the same as the Perl construct `cat file`.

##### unix_crypt(password, salt)
Performs Unix encryption on a password, using the built-in crypt function or the `Crypt::UnixCrypt` module if the former does not work. The salt parameter must be either an already-hashed password, or a two-character alpha-numeric string.

##### split_quoted_string(string)
Given a string like ''foo 'bar baz' quux'', returns the array: foo, bar baz, quux

##### write_to_http_cache(url, file|&data)
Updates the Webmin cache with the contents of the given file, possibly also clearing out old data. Mainly for internal use by http_download.

##### check_in_http_cache(url)
If some URL is in the cache and valid, return the filename for it. Mainly for internal use by http_download.

##### supports_javascript
Returns 1 if the current browser is assumed to support javascript.

##### get_module_name
Returns the name of the Webmin module that called this function. For internal use only by other API functions.

##### get_module_variable(name, [ref])
Returns the value of some variable which is set in the caller's context, if using the new WebminCore package. For internal use only.

##### clear_time_locale()
Temporarily force the locale to C, until reset_time_locale is called. This is useful if your code is going to call =strftime= from the POSIX package, and you want to ensure that the output is in a consistent format.

##### reset_time_locale()
Revert the locale to whatever it was before clear_time_locale was called

##### callers_package(filehandle)
Convert a non-module filehandle like FOO to one qualified with the caller's caller's package, like `fsdump::FOO`. For internal use only.

##### web_libs_package()
Returns the package this code is in. We can't always trust `__PACKAGE__`. For internal use only.

##### unique(string, ...)
Returns the unique elements of some array, passed as its parameters.

#### `ui-lib.pl`
Common functions for generating HTML for Webmin user interface elements.
```perl
use WebminCore;
init_config();
ui_print_header(undef, 'My Module', '');

print ui_form_start('save.cgi');
print ui_table_start('My form', undef, 2);

print ui_table_row('Enter your name',
      ui_textbox('name', undef, 40));

print ui_table_end();
print ui_form_end([ [ undef, 'Save' ] ]);

ui_print_footer('/', 'Webmin index');
```

##### ui_table_start(heading, [tabletags], [cols], [&default-tds], [right-heading])
Returns HTML for the start of a form block into which labelled inputs can be placed. By default this is implemented as a table with another table inside it, but themes may override this with their own layout.

The parameters are:
* `heading` - Text to show at the top of the form
* `tabletags` - HTML attributes to put in the outer `<table>`, typically something like width=100%
* `cols` - Desired number of columns for labels and fields. Defaults to 4, but can be 2 for forms with lots of wide inputs
* `default-tds` - An optional array reference of HTML attributes for the `<td>` tags in each row of the table
* `right-heading` - HTML to appear in the heading, aligned to the right

##### ui_table_end
Returns HTML for the end of a block started by `ui_table_start`.

##### ui_table_row(label, value, [cols], [&td-tags])
Returns HTML for a row in a table started by `ui_table_start`, with a 1-column label and 1+ column value. The parameters are:
* `label` - Label for the input field. If this is undef, no label is displayed
* `value` - HTML for the input part of the row
* `cols` - Number of columns the value should take up, defaulting to 1
* `td-tags` - Array reference of HTML attributes for the `<td>` tags in this row

##### ui_table_hr
Returns HTML for a row in a block started by `ui_table_row`, with a horizontal line inside it to separate sections.

##### ui_table_span(text)
Outputs a table row that spans the whole table, and contains the given text.

##### ui_columns_start(&headings, [width-percent], [noborder], [&tdtags], [heading])
Returns HTML for the start of a multi-column table, with the given headings. The parameters are:
* `headings` - An array reference of headers for the table's columns
* `width-percent` - Desired width as a percentage, or undef to let the browser decide
* `noborder` - Set to 1 if the table should not have a border
* `tdtags` - An optional reference to an array of HTML attributes for the table's `<td>` tags
* `heading` - An optional heading to put above the table

##### ui_columns_row(&columns, &tdtags)
Returns HTML for a row in a multi-column table. The parameters are:
* `columns` - Reference to an array containing the HTML to show in the columns for this row
* `tdtags` - An optional array reference containing HTML attributes for the row's `<td>` tags

##### ui_columns_header(&columns, &tdtags)
Returns HTML for a row in a multi-column table, styled as a header. Parameters are the same as `ui_columns_row`.

##### ui_checked_columns_row(&columns, &tdtags, checkname, checkvalue, [checked?], [disabled])
Returns HTML for a row in a multi-column table, in which the first column contains a checkbox. The parameters are:
* `columns` - Reference to an array containing the HTML to show in the columns for this row
* `tdtags` - An optional array reference containing HTML attributes for the row's `<td>` tags
* `checkname` - Name for the checkbox input. Should be the same for all rows
* `checkvalue` - Value for this checkbox input
* `checked` - Set to 1 if it should be checked by default
* `disabled` - Set to 1 if the checkbox should be disabled and thus un-clickable

##### ui_radio_columns_row(&columns, &tdtags, checkname, checkvalue, [checked], [disabled])
Returns HTML for a row in a multi-column table, in which the first column is a radio button. The parameters are:
* `columns` - Reference to an array containing the HTML to show in the columns for this row
* `tdtags` - An optional array reference containing HTML attributes for the row's `<td>` tags
* `checkname` - Name for the radio button input. Should be the same for all rows
* `checkvalue` - Value for this radio button option
* `checked` - Set to 1 if it should be checked by default
* `disabled` - Set to 1 if the radio button should be disabled and thus un-clickable

##### ui_columns_end
Returns HTML to end a table started by `ui_columns_start`.

##### ui_columns_table(&headings, width-percent, &data, &types, no-sort, title, empty-msg)
Returns HTML for a complete table, typically generated internally by `ui_columns_start`, `ui_columns_row` and `ui_columns_end`. The parameters are:
* `headings` - An array ref of heading HTML
* `width-percent` - Preferred total width
* `data` - A 2x2 array ref of table contents. Each can either be a simple string, or a hash ref like:
```perl
  { 'type' => 'group', 'desc' => 'Some section title' }
  { 'type' => 'string', 'value' => 'Foo', 'colums' => 3, 'nowrap' => 1 }
  { 'type' => 'checkbox', 'name' => 'd', 'value' => 'foo', 'label' => 'Yes', 'checked' => 1, 'disabled' => 1 }
  { 'type' => 'radio', 'name' => 'd', 'value' => 'foo', ... }
```
* `types` - An array ref of data types, such as "string", "number", "bytes" or "date"
* `no-sort` - Set to 1 to disable sorting by theme
* `title` - Text to appear above the table
* `empty-msg` - Message to display if no data

##### ui_form_columns_table(cgi, &buttons, select-all, &otherlinks, &hiddens, &headings, width-percent, &data, &types, no-sort, title, empty-msg)
Similar to `ui_columns_table`, but wrapped in a form. Parameters are:
* `cgi` - URL to submit the form to
* `buttons` - An array ref of buttons at the end of the form, similar to that taken by `ui_form_end`
* `select-all` - If set to 1, include select all / invert links
* `otherslinks` - An array ref of other links to put at the top of the table, each of which is a 3-element hash ref of url, text and alignment (left or right)
* `hiddens` - An array ref of hidden fields, each of which is a 2-element array ref containing the name and value
All other parameters are the same as `ui_columns_table`.

##### ui_form_start(script, method, [target], [tags])
Returns HTML for the start of a a form that submits to some script. The parameters are:
* `script` - CGI script to submit to, like `save.cgi`
* `method` - HTTP method, which must be one of "get", "post" or "form-data". If form-data is used, the target CGI must call ReadParseMime to parse parameters
* `target` - Optional target window or frame for the form
* `tags` - Additional HTML attributes for the form tag

##### ui_form_end([&buttons], [width])
Returns HTML for the end of a form, optionally with a row of submit buttons. These are specified by the buttons parameter, which is an array reference of array refs, with the following elements:
* `HTML` value for the submit input for the button, or undef for none
* `Text` to appear on the button
* `HTML` or other inputs to appear after the button
* `Set` to 1 if the button should be disabled
* `Additional` HTML attributes to appear inside the button's input tag

##### ui_textbox(name, value, size, [disabled?], [maxlength], [tags])
Returns HTML for a text input box. The parameters are:
* `name` - Name for this input
* `value` - Initial contents for the text box
* `size` - Desired width in characters
* `disabled` - Set to 1 if this text box should be disabled by default
* `maxlength` - Maximum length of the string the user is allowed to input
* `tags` - Additional HTML attributes for the `<input>` tag

##### ui_filebox(name, value, size, [disabled?], [maxlength], [tags], [dir-only])
Returns HTML for a text box for choosing a file. Parameters are the same as `ui_textbox`, except for the extra dir-only option which limits the chooser to directories.

##### ui_bytesbox(name, bytes, [size], [disabled?])
Returns HTML for entering a number of bytes, but with friendly kB/MB/GB options. May truncate values to 2 decimal points! The parameters are:
* `name` - Name for this input
* `bytes` - Initial number of bytes to show
* `size` - Desired width of the text box part
* `disabled` - Set to 1 if this text box should be disabled by default

##### ui_upload(name, size, [disabled?], [tags])
Returns HTML for a file upload input, for use in a form with the form-data method. The parameters are:
* `name` - Name for this input
* `size` - Desired width in characters
* `disabled` - Set to 1 if this text box should be disabled by default
* `tags` - Additional HTML attributes for the `<input>` tag

##### ui_password(name, value, size, [disabled?], [maxlength])
Returns HTML for a password text input. Parameters are the same as `ui_textbox`, and behaviour is identical except that the user's input is not visible.

##### ui_hidden(name, value)
Returns HTML for a hidden field with the given name and value.

##### ui_select(name, value|&values, &options, [size], [multiple], [add-if-missing], [disabled?], [javascript])
Returns HTML for a drop-down menu or multiple selection list. The parameters are:
* `name` - Name for this input
* `value` - Either a single initial value, or an array reference of values if this is a multi-select list
* `options` - An array reference of possible options. Each element can either be a scalar, or a two-element array ref containing a submitted value and displayed text
* `size` - Desired vertical size in rows, which defaults to 1. For multi-select lists, this must be set to something larger
* `multiple` - Set to 1 for a multi-select list, 0 for single
* `add-if-missing` - If set to 1, any value that is not in the list of options will be automatically added (and selected)
* `disabled` - Set to 1 to disable this input
* `javascript` - Additional HTML attributes for the `<select>` input

##### ui_multi_select(name, &values, &options, size, [add-if-missing], [disabled?], [options-title, values-title], [width])
Returns HTML for selecting many of many from a list. By default, this is implemented using two `<select>` lists and Javascript buttons to move elements between them. The resulting input value is \n separated.

Parameters are:
* `name` - HTML name for this input
* `values` - An array reference of two-element array refs, containing the submitted values and descriptions of items that are selected by default
* `options` - An array reference of two-element array refs, containing the submitted values and descriptions of items that the user can select from
* `size` - Vertical size in rows
* `add-if-missing` - If set to 1, any entries that are in values but not in options will be added automatically
* `disabled` - Set to 1 to disable this input by default
* `options-title` - Optional text to appear above the list of options
* `values-title` - Optional text to appear above the list of selected values
* `width` - Optional width of the two lists in pixels

##### ui_multi_select_javascript
Returns `<script>` section for left/right select boxes. For internal use only.

##### ui_radio(name, value, &options, [disabled?])
Returns HTML for a series of radio buttons, of which one can be selected. The parameters are:
* `name` - HTML name for the radio buttons
* `value` - Value of the button that is selected by default
* `options` - Array ref of radio button options, each of which is an array ref containing the submitted value and description for each button
* `disabled` - Set to 1 to disable all radio buttons by default

##### ui_yesno_radio(name, value, [yes], [no], [disabled?])
Like `ui_radio`, but always displays just two inputs (yes and no). The parameters are:
* `name` - HTML name of the inputs
* `value` - Option selected by default, typically 1 or 0
* `yes` - The value for the yes option, defaulting to 1
* `no` - The value for the no option, defaulting to 0
* `disabled` - Set to 1 to disable all radio buttons by default

##### ui_checkbox(name, value, label, selected?, [tags], [disabled?])
Returns HTML for a single checkbox. Parameters are:
* `name` - HTML name of the checkbox
* `value` - Value that will be submitted if it is checked
* `label` - Text to appear next to the checkbox
* `selected` - Set to 1 for it to be checked by default
* `tags` - Additional HTML attributes for the `<input>` tag
* `disabled` - Set to 1 to disable the checkbox by default

##### ui_oneradio(name, value, label, selected?, [tags], [disabled?])
Returns HTML for a single radio button. The parameters are:
* `name` - HTML name of the radio button
* `value` - Value that will be submitted if it is selected
* `label` - Text to appear next to the button
* `selected` - Set to 1 for it to be selected by default
* `tags` - Additional HTML attributes for the `<input>` tag
* `disabled` - Set to 1 to disable the radio button by default

##### ui_textarea(name, value, rows, cols, [wrap], [disabled?], [tags])
Returns HTML for a multi-line text input. The function parameters are:
* `name` - Name for this HTML `<textarea>`
* `value` - Default value. Multiple lines must be separated by \n
* `rows` - Number of rows, in lines
* `cols` - Number of columns, in characters
* `wrap` - Wrapping mode. Can be one of soft, hard or off
* `disabled` - Set to 1 to disable this text area by default
* `tags` - Additional HTML attributes for the `<textarea>` tag

##### ui_user_textbox(name, value, [form], [disabled?], [tags])
Returns HTML for an input for selecting a Unix user. Parameters are the same as `ui_textbox`.

##### ui_group_textbox(name, value, [form], [disabled?], [tags])
Returns HTML for an input for selecting a Unix group. Parameters are the same as `ui_textbox`.

##### ui_opt_textbox(name, value, size, option1, [option2], [disabled?], [&extra-fields], [max])
Returns HTML for a text field that is optional, implemented by default as a field with radio buttons next to it. The parameters are:
* `name` - HTML name for the text box. The radio buttons will have the same name, but with _def appended
* `value` - Initial value, or undef if you want the default radio button selected initially
* `size` - Width of the text box in characters
* `option1` - Text for the radio button for selecting that no input is being given, such as "Default"
* `option2` - Text for the radio button for selecting that you will provide input
* `disabled` - Set to 1 to disable this input by default
* `extra-fields` - An optional array ref of field names that should be disabled by Javascript when this field is disabled
* `max` - Optional maximum allowed input length, in characters

##### ui_submit(label, [name], [disabled?], [tags])
Returns HTML for a form submit button. Parameters are:
* `label` - Text to appear on the button
* `name` - Optional HTML name for the button. Useful if the CGI it submits to needs to know which of several buttons was clicked
* `disabled` - Set to 1 if this button should be disabled by default
* `tags` - Additional HTML attributes for the `<input>` tag

##### ui_reset(label, [disabled?])
Returns HTML for a form reset button, which clears all fields when clicked. Parameters are:
* `label` - Text to appear on the button
* `disabled` - Set to 1 if this button should be disabled by default

##### ui_button(label, [name], [disabled?], [tags])
Returns HTML for a form button, which doesn"t do anything when clicked unless you add some Javascript to it. The parameters are:
* `label` - Text to appear on the button
* `name` - HTML name for this input
* `disabled` - Set to 1 if this button should be disabled by default
* `tags` - Additional HTML attributes for the `<input>` tag, typically Javascript inside an onClick attribute

##### ui_date_input(day, month, year, day-name, month-name, year-name, [disabled?])
Returns HTML for a date-selection field, with day, month and year inputs. The parameters are:
* `day` - Initial day of the month
* `month` - Initial month of the year, indexed from 1
* `year` - Initial year, four-digit
* `day-name` - Name of the day input field
* `month-name` - Name of the month select field
* `year-name` - Name of the year input field
* `disabled` - Set to 1 to disable all fields by default

##### ui_buttons_start
Returns HTML for the start of a block of action buttons with descriptions, as generated by `ui_buttons_row`.
```perl
print ui_buttons_start();
print ui_buttons_row('start.cgi', 'Start server',
                     'Click this button to start the server process');
print ui_buttons_row('stop.cgi', 'Stop server',
                     'Click this button to stop the server process');
print ui_buttons_end();
```

##### ui_buttons_end
Returns HTML for the end of a block started by `ui_buttons_start`.

##### ui_buttons_row(script, button-label, description, [hiddens], [after-submit], [before-submit])
Returns HTML for a button with a description next to it, and perhaps other inputs. The parameters are:
* `script` - CGI script that this button submits to, like `start.cgi`
* `button-label` - Text to appear on the button
* `description` - Text to appear next to the button, describing in more detail what it does
* `hiddens` - HTML for hidden fields to include in the form this function generates
* `after-submit` - HTML for text or inputs to appear after the submit button
* `before-submit` - HTML for text or inputs to appear before the submit button

##### ui_buttons_hr([title])
Returns HTML for a separator row, for use inside a `ui_buttons_start` block.

##### ui_post_header([subtext])
Returns HTML to appear directly after a standard header() call. This is never called directly - instead, `ui_print_header` calls it. But it can be overridden by themes.

##### ui_pre_footer
Returns HTML to appear directly before a standard `footer()` call. This is never called directly - instead, `ui_print_footer` calls it. But it can be overridden by themes.

##### ui_print_header(subtext, args...)
Print HTML for a header with the post-header line. The args are the same as those passed to header(), defined in `web-lib-funcs.pl`. The exception is the additional subtext parameter, which is for optional HTML to display just below the header.

##### ui_print_unbuffered_header(subtext, args...)
Like `ui_print_header`, but ensures that output for this page is not buffered or contained in a table. This should be called by scripts that are producing output while performing some long-running process.

##### ui_print_footer(args...)
Print HTML for a footer with the pre-footer line. Args are the same as those passed to footer().

##### ui_config_link(text, &subs)
Returns HTML for a module config link. The first non-null sub will be replaced with the appropriate URL for the module's config page.

##### ui_print_endpage(text)
Prints HTML for an error message followed by a page footer with a link to /, then exits. Good for main page error messages.

##### ui_subheading(text, ...)
Returns HTML for a section heading whose message is the given text strings.

##### ui_links_row(&links)
Returns HTML for a row of links, like "Select all" or "Invert selection". Each element of the links array ref should be an HTML fragment like:
```perl
<a href='user_form.cgi'>Create new user</a>
```

##### ui_hidden_javascript
Returns `<script>` and `<style>` sections for hiding functions and CSS. For internal use only.

##### ui_hidden_start(title, name, status, thisurl)
Returns HTML for the start of a collapsible hidden section, such as for advanced options. When clicked on, the section header will expand to display whatever is between this function and `ui_hidden_end`. The parameters are:
* `title` - Text for the start of this hidden section
* `name` - A unique name for this section
* `status` - 1 if it should be initially open, 0 if not
* `thisurl` - URL of the current page. This is used by themes on devices that don"t support Javascript to implement the opening and closing

##### ui_hidden_end(name)
Returns HTML for the end of a hidden section, started by `ui_hidden_start`.

##### ui_hidden_table_row_start(title, name, status, thisurl)
Similar to `ui_hidden_start`, but for use within a table started with `ui_table_start`. I recommend against using this where possible, as it can be difficult for some themes to implement.

##### ui_hidden_table_row_end(name)
Returns HTML to end a block started by `ui_hidden_table_start`.

##### ui_hidden_table_start(heading, [tabletags], [cols], name, status, [&default-tds], [rightheading])
Returns HTML for the start of a form block into which labelled inputs can be placed, which is collapsible by clicking on the header. Basically the same as `ui_table_start`, and must contain HTML generated by `ui_table_row`.

The parameters are:
* `heading` - Text to show at the top of the form
* `tabletags` - HTML attributes to put in the outer `<table>`, typically something like width=100%
* `cols` - Desired number of columns for labels and fields. Defaults to 4, but can be 2 for forms with lots of wide inputs
* `name` - A unique name for this table
* `status` - Set to 1 if initially open, 0 if initially closed
* `default-tds` - An optional array reference of HTML attributes for the `<td>` tags in each row of the table
* `right-heading` - HTML to appear in the heading, aligned to the right

##### ui_hidden_table_end(name)
Returns HTML for the end of a form block with hiding, as started by `ui_hidden_table_start`.

##### ui_tabs_start(&tabs, name, selected, show-border)
Returns a row of tabs from which one can be selected, displaying HTML associated with that tab. The parameters are:
* `tabs` - An array reference of array refs, each of which contains the value and user-visible text for a tab
* `name` - Name of the HTML field into which the selected tab will be placed
* `selected` - Value for the tab selected by default
* `show-border` - Set to 1 if there should be a border around the contents of the tabs
Example code:
```perl
my @tabs = ( [ 'list', 'List services' ],
             [ 'install', 'Install new service' ] );
print ui_tabs_start(\@tabs, 'mode', 'list');

print ui_tabs_start_tab('mode', 'list');
generate_service_list();
print ui_tabs_end_tab('mode', 'list');

print ui_tabs_start_tab('mode', 'install');
generate_install_form();
print ui_tabs_end_tab('mode', 'install');

print ui_tabs_end();
```

##### ui_tabs_end(show-border)
Returns HTML to end a block started by `ui_tabs_start`. The show-border parameter must match the parameter with the same name in the start function.

##### ui_tabs_start_tab(name, tab)
Must be called before outputting the HTML for the named tab, and returns HTML for the required `<div>` block.

##### ui_tabs_start_tabletab(name, tab)
Behaves like `ui_tabs_start_tab`, but for use within a `ui_table_start` block. I recommend against using this where possible, as it is difficult for themes to implement.

##### ui_tabs_end_tab
Returns HTML for the end of a block started by `ui_tabs_start_tab`.

##### ui_tabs_end_tabletab
Returns HTML for the end of a block started by `ui_tabs_start_tabletab`.

##### ui_max_text_width(width, [text-area?])
Returns a new width for a text field, based on theme settings. For internal use only.

##### ui_radio_selector(&opts, name, selected)
Returns HTML for a set of radio buttons, each of which shows a different block of HTML when selected. The parameters are:
* `opts` - An array ref to arrays containing [ value, label, html ]
* `name` - HTML name for the radio buttons
* `selected` - Value for the initially selected button

##### ui_grid_table(&elements, columns, [width-percent], [&tds], [tabletags], [title])
Given a list of HTML elements, formats them into a table with the given number of columns. However, themes are free to override this to use fewer columns where space is limited. Parameters are:
* `elements` - An array reference of table elements, each of which can be any HTML you like
* `columns` - Desired number of columns in the grid
* `width-percent` - Optional desired width as a percentage
* `tds` - Array ref of HTML attributes for `<td>` tags in the tables
* `tabletags` - HTML attributes for the `<table>` tag
* `title` - Optional title to add to the top of the grid

##### ui_radio_table(name, selected, &rows)
Returns HTML for a table of radio buttons, each of which has a label and some associated inputs to the right. The parameters are:
* `name` - Unique name for this table, which is also the radio buttons" name
* `selected` - Value for the initially selected radio button
* `rows` - Array ref of array refs, one per button. The elements of each are the value for this option, a label, and option additional HTML to appear next to it

##### ui_up_down_arrows(uplink, downlink, up-show, down-show)
Returns HTML for moving some objects in a table up or down. The parameters are:
* `uplink` - URL for the up-arrow link
* `downlink` - URL for the down-arrow link
* `up-show` - Set to 1 if the up-arrow should be shown, 0 if not
* `down-show` - Set to 1 if the down-arrow should be shown, 0 if not

##### ui_hr
Returns a horizontal row tag, typically just an `<hr>`

##### ui_nav_link(direction, url, disabled)
Returns an arrow icon linking to the provided url.

##### ui_confirmation_form(cgi, message, &hiddens, [&buttons], [otherinputs], [extra-warning])
Returns HTML for a form asking for confirmation before performing some action, such as deleting a user. The parameters are:
* `cgi` - Script to which the confirmation form submits, like `delete.cgi`
* `message` - Warning message for the user to see
* `hiddens` - Array ref of two-element array refs, containing hidden form field names and values
* `buttons` - Array ref of two-element array refs, containing form button names and labels
* `otherinputs` - HTML for extra inputs to include in the form
* `extra-warning` - An additional separate warning message to show

##### js_disable_inputs(&disable-inputs, &enable-inputs, [tag])
Returns Javascript to disable some form elements and enable others. Mainly for internal use.

##### ui_page_flipper(message, [inputs, cgi], left-link, right-link, [far-left-link], [far-right-link], [below])
Returns HTML for moving left and right in some large list, such as an inbox or database table. If only 5 parameters are given, no far links are included. If any link is undef, that array will be greyed out. The parameters are:
* `message` - Text or display between arrows
* `inputs` - Additional HTML inputs to show after message
* `cgi` - Optional CGI for form wrapping arrows to submit to
* `left-link` - Link for left-facing arrow
* `right-link` - Link for right-facing arrow
* `far-left-link` - Link for far left-facing arrow, optional
* `far-right-link` - Link for far right-facing arrow, optional
* `below` - HTML to display below the arrows

##### js_checkbox_disable(name, &checked-disable, &checked-enable, [tag])
For internal use only.

##### js_redirect(url, [window-object])
Returns HTML to trigger a redirect to some URL.

[[Category:API]]
