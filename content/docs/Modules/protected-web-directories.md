---
title: "Protected Web Directories"
date: 2023-09-09
author: "Ilia Ross"
weight: 595
---

### About
The **Protected Web Directories** module lets you manage web directories that are protected using `.htaccess` and `.htpasswd` files. To be able to use web directory protection, the webserver has to allow overriding authentication.

{{< alert primary exclamation "Note" "When using Apache, the webserver configuration has to include a line `AllowOverride AuthConfig` either globally or on the relevant web-directory." >}}

### What is `.htaccess` file?

1. **Purpose**: `.htaccess` (Hypertext Access) is a configuration file used by Apache-based web servers. It allows for decentralized management of web server configuration.
  
2. **Scope**: The directives in this file apply to the directory in which the file is placed, as well as all of its subdirectories.

3. **Uses**:
   - **URL Redirection**: Redirect requests from one URL to another.
   - **Error Documents**: Define custom error pages.
   - **Access Control**: Restrict access to certain resources on the server.
   - **Performance**: Adjust caching settings.
   - **Other Configurations**: Modify settings like file extensions for certain scripts, set MIME types, etc.

### What is `.htpasswd` file?

1. **Purpose**: The `.htpasswd` file is used in combination with `.htaccess` to password-protect web directories.

2. **Content**: It contains pairs of usernames and password hashes. The passwords are stored as encrypted hashes (not plain text) for security reasons.

3. **How it works with .htaccess**:
   - In the `.htaccess` file, directives are set up to require a password to access a directory.
   - The `.htpasswd` file is then referenced in the `.htaccess` file to provide the list of valid user/password combinations.
   - When a user tries to access the directory, they are prompted for a username and password. The entered credentials are checked against the `.htpasswd` file. If they match a pair in the file, access is granted.

### Examples

An example of the two working together for basic authentication:

**.htaccess**:
```
AuthType Basic
AuthName "Protected Area"
AuthUserFile /home/ubuntu22-pro/public_html/phpmyadmin/.htpasswd
Require valid-user
```

**.htpasswd** (a user "joe" with password "doe"):
```
joe:$y$j9T$IXTG.WcFv0j62zNShfRY7.$5MElFnn0K9mVX5mc8/.cIVMVjpdxL5p6xLGVuS8LG3.
```

In this setup, when a user tries to access the directory where the `.htaccess` file is located, they will be prompted to enter a username and password. If they enter `joe` and `123` respectively, they would be granted access because the `.htpasswd` file contains the hashed password that corresponds to the username `joe`.

[![](/images/docs/screenshots/modules/light/protected-web-directories.png "Protected Web Directories Screenshot")](/images/docs/screenshots/modules/light/protected-web-directories.png)
