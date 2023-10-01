---
title: "Creating Modules"
date: 2023-10-01
weight: 5000
---

This page should be read if you are planning to write your own Webmin module, as it explains all the requirements for creating a usable module. 

It assumes that you have a working knowledge of Perl, HTML, and web application concepts. It also focuses towards the new module API in Webmin 1.460 and later.

### Introduction
Webmin is designed to allow the easy addition of new modules without changing any of the existing code. A module can be thought of as something like a Photoshop plugin or iPhone application - it can be written by someone other than the developers of Webmin and distributed under a license the developer chooses. 

A module should be written to administer one service or server, such as the Unix password file or the Apache web server. Some complex system functions may even be split over several modules - for example, disk partitioning, mounting disks, and disk quota management are 3 separate modules in the standard Webmin distribution. 

Modules can theoretically be written in any language. However, to make use of the Webmin API Perl version 5.8 or above should be used. A module should be written entirely in Perl, with no C functions or external binary programs. The aim is for modules to be as portable as possible across different Unix systems and CPU types. 

Modules written in other languages will not be displayed using the standard Webmin UI and will not be able to call its API. For these reasons, using Perl is strongly recommended. 

At their simplest, modules are really just directories of CGI programs that Webmin's web server runs. However, there are certain rules that should be followed to make sure that they work with the Webmin API, main menu, and access control system. Even though you can just stick any existing CGI script into a module directory, this is not a good idea.

### Required Files
Every module has its own directory under the Webmin base directory, in which all the module's CGI programs and configuration files must be stored. For example, if the Webmin base was `/usr/libexec/webmin`,
a module called foobar would be created or installed in `/usr/libexec/webmin/foobar`. 

You can find this base directory by looking at the `root` line in your `/etc/webmin/miniserv.conf` file. It will differ depending on which operating system Webmin is installed.

For a module to be displayed on the main Webmin menu, it should contain at least the following files. Only `module.info` is mandatory though. 

- `module.info`

   This file contains information about the module and the operating systems it runs under. See below for details on its format.
- `images/icon.gif`

   The icon displayed on the main menu for this module. The icon should be 48x48 pixels and should use the same colour scheme as the other icons on the main menu. 
- `lang/en`

   The text strings used by this module, as explained in the **Internationalization** section of this documentation.
- `install_check.pl`

   Program that checks to see if the service or program is installed and usable, returning a non-zero value if so.

Each module name on Webmin's left menu is a link to the module directory. Thus you must have an `index.cgi` file to be displayed when the user clicks on the link. A typical module contains many `.cgi` programs that are linked to from `index.cgi`, each of which performs some function such as displaying a form or saving inputs from a form. 

When you first create a new module, it will not be in the allowed list of any Webmin user and so you will not be able to see it in the main menu. To fix this, you must first delete the file `/etc/webmin/module.infos.cache` to clear the cache of known modules. Then to make your module visible, either edit the file `/etc/webmin/webmin.acl` or use the [Webmin Users](/docs/modules/webmin-users) module to grant yourself access.

### The `module.info` file
This file contains meta-information about your module, such as its title, supported operating systems, and category. It is a text file with each line containing a name and value separated by `=`, a format widely used by Webmin. An example `module.info` file might look like:

```
desc=Foo Web Server
os_support=*-linux
category=servers
```

Required entries are:
- `desc`

   A description for the module, such as **Foo Web Server**. This is the text that will appear on Webmin's left menu.
- `os_support`

   A space-separated list of operating systems that this module supports. The module will only be displayed on the main menu if the OS Webmin is running on is in the list or if there is no os_support line at all. Unless your module configures some service that only exists on a few operating systems (such as X.Org), this line should be omitted instead of trying to list all of those supported by Webmin. The actual operating system codes used in this line can be seen in the third column of the `os_list.txt` file in the Webmin root directory and are the same as those that can be appended to the names of `config-` files, as explained in the [Module Configuration](#module-configuration) section. To specify only a certain version of some OS, add it to the OS name after a slash. For example, a `module.info` file might contain: `os_support=redhat-linux suse-linux/15.5`. If your module supports all Linux distributions both no other operating systems, you can use the OS code `*-linux` in this line.
- `category`

   The code for the Webmin menu category to display the module under. This will typically be one of `servers`, `system`, `net` or `hardware`.

### Module library
The Webmin web server treats files with the extension `.cgi` as CGI programs, just like most other web servers. All the forms, menus, and other pages in your module will be generated by CGI programs, so knowledge of the basic concepts of CGI programming and HTML is necessary for writing a module. 

All CGI programs are run with root privileges, which is generally necessary for them to be able to edit configuration files. In some cases your code may drop those privileges by switching to another user, for example if the module's access control settings for some Webmin user specify it. 

When writing a new module, you should create a file with the same name as the module's directory, but with `-lib.pl` appended. So if your module directory was `foobar`, you should create `foobar-lib.pl`. This file will contain common functions that your module's CGI programs will call and will in turn call Webmin's initialization functions.

An example library file could look like:

```perl
=head1 foobar-lib.pl

Functions for managing the Foobar webserver configuration file.

  foreign_require("foobar");
  my @sites = foobar::list_foobar_websites()

=cut

BEGIN { push(@INC, ".."); };
use WebminCore;
init_config();

=head2 get_foobar_config()

Returns the Foobar Webserver configuration as a list of hash references with name and value keys.

=cut
sub get_foobar_config
{
my $lref = &read_file_lines($config{'foobar_conf'});
my @rv;
my $lnum = 0;
foreach my $line (@$lref) {
    my ($n, $v) = split(/\s+/, $line, 2);
    if ($n) {
      push(@rv, { 'name' => $n, 'value' => $v, 'line' => $lnum });
      }
    $lnum++;
    }
return @rv;
}
```

The first two lines being in the core Webmin API, which exports numerous functions for parameter parsing, HTML generation, user management, reading and writing config files, and much more. These are fully documented below.

The `init_config();` line calls a Webmin API function to initialize the module's environment. This sets several variables in your module's package, such as the `%config` hash containing the module's current configuration. It also checks if the current user is allowed to access this module, blocks links from un-trusted referers, and much more. See the documentation for `init_config` for a full list of the variables it exports.

Finally, the `get_foobar_config` sub is just an example of a function your module's CGI scripts might call to read the config file for the server it manages. In a good module design, all access to configuration files is done via functions like this, rather than directly in CGI scripts. This way your functions can be called from other modules and code duplication is reduced.

Note how the file begins with a POD format documentation comment explaining what it does and giving a short snippet of code showing how another module could call this one. Also, individual functions should have POD format comments, as you can see on `get_foobar_config`. This allows other developers to use a command like `perldoc foobar-lib.pl` to see all the documentation.

### Module CGI scripts

CGIs are responsible for generating the HTML for pages and forms that the user interacts with. Wherever possible they should use the Webmin UI functions to generate headers, forms, inputs, tables, and so on. This way the UI is consistent and can be overridden by custom themes. 

The module's `index.cgi` file might contain code like:

```perl
#!/usr/bin/perl

require 'foobar-lib.pl';
ui_print_header(undef, $text{'index_title'}, "", undef, 1, 1);

$conf = get_foobar_config();
$dir = find($conf, "root");
print &text('index_root', $dir),"<p>\n";

ui_print_footer("/", $text{'index'});
```

The first line is standard for all Perl scripts and must match the path to Perl on your system. This can be found in the `/etc/webmin/perl-path` file.

The line `require 'foobar-lib.pl';` brings in the module's function library described above and calls Webmin's `init_config` initialization function.

The page's HTML header is generated by the call to `ui_print_header`. The most important parameter is `$text{'index_title'}`, which refers to the `%text` hash that is loaded from the module's `lang/en` file, described below.

The next two lines are calls to functions from the example module's library. The `print` statement output's some HTML, using the Webmin API function `text` to substitute a programmatically-generated string into a message.

Finally, the call to `ui_print_footer` generates a link back to Webmin's main menu, if needed.

### Language files
Webmin has an internationalization system based on the contents of files in each module's `lang` sub-directory. The global default language is English, so each module must have a `lang/en` file containing US English messages used by its CGI scripts. It can also have files for other languages, like `de` form German or `fr` for French. Each file contains lines of text, one per message, formatted like:

```text
index_title=Foobar Web Server
index_root=The root directory is $1.
```

When your code calls `init_config`, this file is read into the module-level hash `%text`. In addition, any strings defined in the appropriate files under Webmin's top-level `lang` directory are also read. These contain useful messages codes like `save`, `delete`, and `index`.

The example `index_root` line contains a placeholder `$1`, which will be replaced by the `text` function with its second parameter. Strings can contain multiple placeholders like this, using the codes `$2`, `$3`, and so on.

### Module configuration
Almost all modules have a set of user-editable configuration parameters, available in the `%config` hash which is set by the `init_config function`. When Webmin or a module is installed, a configuration file appropriate for the chosen operating system is copied from the module directory to the Webmin configuration directory for that module, typically something like `/etc/webmin/foobar/config`. It is this file that is read by `init_config`.

In general, module configuration settings are for things that the user may want to edit. These include paths to other config files that the module manages, display preferences, and options that control behavior. Making the locations of programs and other files editable makes your module more flexible and able to support systems on which config files are in different locations.

In most cases, your module only needs to include a single file named `config` in its base directory, which is copied to `/etc/webmin` at install time. If you are writing a module yourself from scratch, you will need to do this manually with commands like:

```
cd /usr/libexec/webmin/foobar
mkdir /etc/webmin/foobar
cp config /etc/webmin/foobar
```

An example `config` file for your module might contain:

```text
foobar_conf=/etc/foobar.conf
sort_mode=0
```

In other cases, you might want the default configuration to differ depending on the operating system. For example, Apache is installed in a different place in almost every operating system, but its config always files have the same format. Webmin's core Apache module contains files named like `config-redhat-linux` and `config-solaris`, which define the locations for `httpd.conf` and `apachectl`. At install time the appropriate file is copied to `/etc/webmin/apache/config` and values from it are then used by the Apache Webmin module to find other config files.

### User configuration editing
Every module with a `config` file should also have a meta-config file named `config.info` that tells the core Webmin API what values and options are allowed. When a user clicks on a module's **Module Config** link, the page that appears is driven by the contents of the module's `config.info` file. A sample file looks like:

```text
foobar_conf=Path to Foobar Webserver configuration file,0
sort_mode=Sort users by,1,1-Name,0-ID
```

Like most Webmin files, `config.info` is a text file with lines in **name=value** format. Each **name** must match an entry in the `config` file.

The right-hand side is a comma-separated list, with the following elements:
- A human-readable description of this configurable setting.
- A numeric type code that determines how the value can be edited.
- An option comma-separated list of type parameters. Their number and format depends on the type code.

Type code zero is most common and is used for free-text fields. The other possible type codes are:
1. **One of many**. The user can choose one of several options. For this type, the rest of the line is a comma-separated list of **value/display** pairs. The **value** part of each pair is what gets stored in the config file, while the **display** part is what is shown to the user.
2. **Many of many**. The user can choose zero of more of several options. Available options are specified in the same way as type 2.
3. **Optional free text**. The user can either select the default option or enter some value. The rest of the line is the description of the default option (typically something like **None** or **Default mode**)
4. **One of many**. The same as type 1, but uses a menu instead of a row of radio buttons
5. **Unix user**. Displays a selector for a user from the host Webmin is running on.
6. **Unix group**. Displays a group selector from the host Webmin is running on.
7. **Directory**. Like the free text input, but with a directory chooser next to it.
8. **File**. Like the free text input, but with a file chooser next to it.
9. **Multiline free text**. The first **value** after the type is the width of the input and the second the height.
10. **Like type 1**, but with an additional option for entering free text of the user's choice.
11. A parameter of this type does not allow the user to enter anything, but instead puts a section header row containing the description into the configuration form at this point.
12. A field for entering a password, without actually displaying the current value. 

Not every configurable parameter needs an entry in `config.info` - only those that the user may want to edit. 

### Global configuration
The hash `%gconfig` contains global configuration options, typically from the file `/etc/webmin/config`. Some useful entries are: 
* `os_type`

   A code for the operating system type detected at install time, such as `debian-linux` or `redhat-linux`. 
* `os_version`

   Webmin's internal code for the OS version, such as `5.9`.
* `path`

   The Unix path for this operating system, as a colon separated list of directories. This is also available in `$ENV{'PATH'}`, as thus to any programs that you module runs.

### User interface
Webmin's API contains a large number of functions for generating forms, tables, inputs, and tabs. While a module can create its own HTML with simple Perl print statements, using the API is both easier and produces a more consistent look. 

Some example code for creating a form might look like:

```perl
print ui_form_start("save.cgi");

print ui_table_row($text{'edit_username'},
    ui_textbox("username", $username, 40));

print ui_table_row($text{'edit_pass'},
    ui_password("pass", $password, 40));

print ui_form_end([ [ undef, $text{'save'} ], [ 'delete', $text{'delete'} ] ]);
```

To create a table, you can use code like:

```perl
print ui_columns_start([ $text{'index_username'}, $text{'index_realname'} ]);
foreach my $u (@users) {
    print ui_columns_row([
        ui_link("edit.cgi?user=$u->{'user'}", $u->{'user'}),
        $u->{'real'} ]);
    }
print ui_columns_end();
```

Some other good guidelines for module user interfaces are:
* Try to follow the layout of core modules. For example, your module's main page `index.cgi` might display a table of objects, each of which contains a link to `edit.cgi`. This page in turn shows a form for editing or creating a user and submits to a script called `save.cgi` to update the underlying config files.
* Don't use Flash or Java unless there is no other alternative. Most dynamic UIs can be created using JavaScript in modern browsers.

### Design goals
A typical Webmin module is written to configure some Unix service, such as Apache, Squid or NFS exports. Most Unix servers are normally configured by editing some text file, which may have a complex format. Any Webmin module that modifies some configuration file must be able to parse all possible options in such a configuration file - even if not all options are presented to the user. 

No module should ever corrupt a service configuration file or remove options that it does not understand. Modules should be able to parse any valid configuration without requiring special comments or a special format. If your module cannot deal with some option in a file, it should be left alone. 

Webmin modules should be designed to be easy for novices to use, but still allow the user to do almost everything that could be done by editing the configuration file directly. However, in some cases configurations options will exist that very few users will need to edit or that do not lend themselves to be edited through a GUI. These kind of settings should be left out of your Webmin module if they would clutter up the user interface with' their presence. 

### Online Help
Webmin has support for context-sensitive help, both for an entire page or for individual elements. The `hlink` function outputs HTML for a link that displays a given help page. Help pages are stored in the `help` subdirectory under the module directory and are named simply `page.html` for those in English. So a call to `hlink` like:

```perl
print ui_table_row(hlink($text{'edit_username'}, 'username'),
    ui_textbox("username", $username, 40));
```

... would output a link to display the help page in the file `help/username.html` under the module's base directory. This could contain:

```html
<header>Foobar Username</header>

Enter the name of a login for the Foobar webserver.<p>

<footer>
```

This file is basically regular HTML, except for the special `<header>` tag which must contain the help page's title.

If the **help** parameter to the `ui_print_header` function is set, a link labeled **Help** to the specified help page is included in the heading. This can be useful if you have created some documentation that explains what the entire page does in general, instead of or as well as documenting fields individually. The same rules about help HTML file selection apply. 

Even though online help is not mandatory (or even common) in Webmin modules, it can be useful to provide additional information to users about what a field really means or what the purpose of a page is. In many cases inputs are not self-explanatory and need additional documentation, so why not make it available from the page itself? 

Webmin modules can support multiple languages through the use of alternative translation files in the lang subdirectory. 
Help pages can exist if more than one language as well, by creating files named like `page.language.html` in the help subdirectory. If such a file exists, it will be used in preference to `page.html`, which is assumed to be in English. For example, to add a Greek version of an existing `name.html` page you would need to create 
`name.el.html`.

### Module Packaging
The [Webmin Configuration](/docs/modules/webmin-configuration) module allows the user to add a new module to their existing setup. Modules must be packaged as a
compressed Unix TAR file containing one or more modules. Each module in the TAR file must have all its files in one subdirectory.

To create such a package, you could use commands like:

```bash
cd /usr/libexec/webmin
tar cvzf /tmp/foomod.wbm.gz foobar
```

The standard extension for Webmin modules is `.wbm.gz` or just `.wbm` if the tar file is not compressed. For themes the extension is usually `.wbt.gz` and for Usermin modules it is `.ubm.gz`.

Webmin modules can also be packaged as RPMs, which are suitable for installing on servers on which the RPM version of Webmin itself is already installed. You can [download](https://raw.githubusercontent.com/webmin/webmin/master/makemodulerpm.pl) a script called `makemodulerpm.pl` that can package up a module directory into an RPM by creating the spec file automatically. It will place the resulting RPM file into the `/usr/src/redhat/RPMS/noarch` directory. The RPM name is always `wbm-` followed by the module's directory name or `wbt-` for themes.

Similarly, you can create a Debian package of a module using `makemoduledeb.pl` [file](https://raw.githubusercontent.com/webmin/webmin/master/makemoduledeb.pl). The resulting `.deb` file is placed in the `/tmp` directory. The package name is always `webmin-` followed by the directory name, for both modules and themes.

### Example module
The best way to show what a Webmin module should look like is via an example. You can install a demo module for the imaginary Foobar Webserver by following these steps:
- Login to Webmin as root and go to **Webmin** ⇾ **Webmin Configuration** ⇾ **Webmin Modules**
- Select the **From HTTP or FTP URL** option and enter the URL `http://download.webmin.com/download/modules/foobar.wbm.gz` into the adjacent text box
- Click the **Install Module** button

You should now be able to find the **Foobar Webserver** module under the **Servers** category. Its source code is in the `foobar` directory under the Webmin root.

The main page of this module shows a table of websites, with a link to add a new one. Adding or editing a site brings up a separate form for entering its details. This kind of layout is typical in Webmin and should be copied (where appropriate) in your own modules.

### The Webmin API
The full API available to modules is documented on the Webmin [API](/docs/development/api/about) page. This covers both the core API and that exported by other modules. You can call functions from other modules with code like:

```perl
foreign_require("useradmin");
@users = useradmin::list_users();
foreach my $u (@users) {
  print $u->{'user'},"\n";
  }
```
