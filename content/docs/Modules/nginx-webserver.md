---
title: "Nginx Webserver"
date: 2026-06-27
weight: 356
---

### About
This page explains how to use Webmin's **Nginx Webserver** module to manage Nginx global settings, server blocks, URL locations, logging, SSL, FastCGI, proxying, access control, gzip compression, server-side includes and rewrite rules.

### Intro
Nginx is a high-performance HTTP server and reverse proxy. It is commonly used to serve static files, proxy requests to application servers, terminate SSL, handle HTTP/2, compress responses and route requests by hostname or URL path.

Nginx configuration is built from directives stored in text files. A top-level `http` block contains global webserver settings and one or more `server` blocks. Each server block describes a website or virtual host. Inside a server block, `location` blocks apply settings to matching URL paths.

The module has a similar purpose to the [Apache Webserver](/docs/modules/apache-webserver) module, but works with Nginx configuration syntax and Nginx concepts such as server blocks and locations.

### The module
The **Nginx Webserver** module can be found under the Servers category. The main page has tabs for global configuration, existing server blocks and creating a new server block. It also shows the detected Nginx version and provides controls to start, stop or apply the Nginx configuration.

If the configured Nginx command or configuration file cannot be found, the module displays an error and links to module configuration. If no `http` section exists in the Nginx configuration, the module cannot manage it as a webserver.

From the module index you can:

- Edit global network, logging, MIME, document, user and process settings.
- View, create, edit, enable, disable or delete server blocks.
- Open a server block URL.
- Configure SSL, logging, document roots, FastCGI, proxying, gzip, SSI, access control and rewrites.
- Create and edit URL locations inside server blocks.
- Manually edit Nginx configuration files.
- Start, stop or apply the Nginx configuration.

### Global settings
Global configuration applies to the Nginx `http` context unless a server block or location overrides it. The module groups global settings into pages:

- **Network Configuration** controls options such as `sendfile`, TCP behavior, gzip defaults and keepalive timeout and request limits.
- **MIME Types** manages content types and file extensions.
- **Logging Settings** controls the error log, global access log, PID file and custom log formats.
- **Other Settings** controls worker process count, the Unix user and group used by worker processes, worker priority, directory index files and default MIME type.
- **Document Options** sets the default root directory.
- **Server-Side Include Settings** controls SSI behavior and MIME types.

Use **Apply Changes** after saving global settings so Nginx reloads or restarts with the new configuration.

### Server blocks
A server block is Nginx's equivalent of a virtual host. It usually matches one or more hostnames and one or more listen addresses or ports.

To create a server block:

- Open the **Create server block** tab.
- Enter the server name, such as `www.example.com`.
- Add one or more listen addresses and ports.
- Choose whether it is a default host, whether SSL is enabled, whether HTTP/2 is enabled and whether IPv6-only behavior applies.
- Enter the document root directory or other basic server settings.
- Save the server block and apply the configuration.

The server block list shows the address, port, root directory, proxy target and URL for each server. If the module is configured with a directory for enabled server-block links, it also shows state and can enable or disable manageable server block files by creating or removing symbolic links. Server blocks managed by Virtualmin should normally be enabled or disabled from Virtualmin instead of directly in this module.

### Locations
Locations apply settings to specific URL paths inside a server block. Match types include sub-directory, exact directory, case-sensitive regular expression, case-insensitive regular expression, regular-expression disabled and named location.

To create a location, open a server block and click **Add a new location**. Enter the URL path, match type and any location-specific settings. Locations can have their own document options, FastCGI settings, proxy settings, gzip settings, access controls and rewrite rules.

Locations are useful for routing `/api` to an application server, sending PHP scripts to FastCGI, protecting a private path with a password file, or applying caching and compression only to selected URLs.

### SSL and HTTP/2
Server block SSL settings control the certificate file, private key file, allowed protocols and cipher list. SSL mode must have a valid certificate and private key before it can be enabled.

The server block form includes an HTTP/2 mode flag for listen entries. Whether that directive is accepted depends on the installed Nginx version and local configuration. SSL certificates themselves can be created or renewed by other Webmin tools, such as Webmin SSL settings or Virtualmin for hosted domains.

### FastCGI and proxying
The **FastCGI Options** page configures the backend host and port, directory index script and extra FastCGI parameters. This is commonly used for PHP-FPM or other FastCGI application servers.

The **Proxy Settings** page configures reverse proxy behavior for a server block or location, including the upstream URL, local bind address, response buffer size and HTTP headers to set, pass or hide.

### Access control and users
The **Access Control** page manages allow and deny rules for IP addresses or CIDR networks. It also supports HTTP Basic authentication by setting a realm and password file.

When a password file is configured, **Manage Users** lets you create, edit or delete users in that file and enable or disable their logins. The password-file path is checked against the allowed directories for the Webmin user.

### Logging, gzip, SSI and rewrites
Server blocks and locations can override logging options, including access log files and formats. Gzip settings control compression level and MIME types to compress. Server-side include settings control whether Nginx parses SSI files and how SSI errors are handled.

The **URL Re-Writing** page manages rewrite and redirect rules. A rewrite maps an original URL path to a new path or URL and can restart processing, stop processing, return a temporary redirect or return a permanent redirect.

### Manual editing and applying changes
The **Edit Configuration Files** page opens files that are part of the Nginx configuration. The module can test the new configuration before saving. This is useful for directives not yet exposed in the forms, but should be used carefully because a syntax error can prevent Nginx from applying the configuration.

Use **Apply Changes** after edits. The module runs the configured apply command, usually an Nginx reload or restart command. If the configuration test fails, the module reports the error instead of silently applying a broken configuration.

### Configuring the module
Module configuration controls the path to the main Nginx config file, where new server blocks are added, the directory for links to enabled server-block files, the path to the Nginx command, commands to start, stop and apply configuration, and default extra directives for new server blocks.

These paths normally match distribution packages. If Nginx was compiled manually or installed in a custom location, update the module configuration before managing server blocks.

### Module access control
Through [Webmin Users](/docs/modules/webmin-users), access can be allowed for all server blocks or only for listed server blocks. Separate permissions control whether a user can change server block names and listen addresses, create server blocks, stop or start Nginx, edit global settings, manually edit raw configuration files, configure log files, or write password files as a selected Unix user. Allowed directories apply to document roots and password-file paths.
