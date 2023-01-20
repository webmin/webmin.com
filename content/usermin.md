---
title: "Usermin"
date: 2017-10-02
showtoc: true
---
## About

Usermin is a web-based interface for webmail, password changing, mail filters, fetchmail and much more. It is designed for use by regular non-root users on a Unix system, and limits them to tasks that they would be able to perform if logged in via SSH or at the console.

Most users of Usermin are sysadmins looking for a simple webmail interface to offer their customers. Unlike most other webmail solutions, it can be used to change passwords, read email with no additional servers installed (like IMAP or POP3), and setup users' configurations for forwarding, spam filtering and autoreponders.

Usermin also provides web interfaces for viewing and managing data in MySQL and PostgreSQL databases, editing Apache `.htaccess` configuration files, running commands on the server, and full featured File Manager. The administrator has full control over which of these modules are available to users.


### Integration

The easiest way to configure Usermin is via the **Webmin ⇾ Usermin Configuration** module in Webmin.

## Downloading

### Repository Setup
The simplest and best way to get **Usermin** is to use automatic [**`setup-repos.sh`**](https://github.com/webmin/webmin/blob/master/setup-repos.sh) script to configure official repositories on your **RHEL** or **Debian** derivative systems. It can be done in two easy steps:

```
curl -o setup-repos.sh https://raw.githubusercontent.com/webmin/webmin/master/setup-repos.sh
sh setup-repos.sh
```

This script will automatically setup our repository and install our GPG keys on your system, and provide **`usermin`** package for installation and easy upgrades in the future. The supported and tested systems are **Red Hat Enterprise Linux**, **Alma**, **Rocky**, **Oracle**, **CentOS Stream**, **Fedora** or **Debian**, **Ubuntu**, **Kali**.

### Direct Downloads
The latest Usermin distribution is available in various package formats for download:


  [**`rpm`**](https://www.webmin.com/download/rpm/usermin-current.rpm) — **Red Hat Enterprise Linux**, **Alma**, **Rocky**, **Oracle**, **CentOS Stream**, **Fedora**, **openSUSE**

  [**`deb`**](https://www.webmin.com/download/deb/usermin-current.deb) — **Debian derivatives (Ubuntu, Kali, Parrot, Pop!, Lite, Devuan)**
  
  [**`tar`**](https://www.webmin.com/download/usermin-current.tar.gz) — **FreeBSD** or any other Linux distribution


#### Checksum Verification
To verify that you have downloaded Usermin fully and correctly, you can use the command **`sha256sum`** on the downloaded file, and compare it against those listed below:

{{% include file="/static/data/usermin-checksum-verification.md" %}}

## Installing

### Using Package Manager
If Usermin repository was setup using our [**`setup-repos.sh`**](https://raw.githubusercontent.com/webmin/webmin/master/setup-repos.sh) as [described earlier](#repository-setup) then Usermin can be install as easy as:

   #### RHEL and derivatives
    dnf install usermin

   #### Debian and derivatives
    apt-get install usermin

### Using Downloaded Package
If Usermin package was downloaded manually it can be easily installed:
   #### RHEL and derivatives
    dnf install ./usermin-current.rpm

   #### Debian and derivatives
    apt-get install ./usermin-current.deb

   #### FreeBSD and any other Linux installation from source
    # Change directory
    cd /tmp
    # Uncompress
    gunzip usermin-current.tar.gz
    tar xf usermin-current.tar.gz
    cd usermin-current
    # Install
    ./setup.sh /usr/local/usermin
   
   {{< details-start post-content-indent-details "More details for installations from source.."  >}}
  
  Because it allows logins by any Unix user on your system, Usermin needs some way of checking user passwords. By default, this will be done by just reading the `/etc/shadow` file directly, but if your system uses NIS this will not work. Instead, you will need to install the `Authen::PAM` Perl module and configure Usermin a PAM service. 

  On Linux, this typically involves creating the file `/etc/pam.d/usermin` containing:
  ```text
  #%PAM-1.0
   auth required pam_unix.so shadow nullok
   account required pam_unix.so
   password required pam_unix.so shadow nullok use_authtok
   session required pam_unix.so
  ```

  Under macOS, the PAM service file has to be slightly different. If you are running macOS, `/etc/pam.d/usermin` should instead contain: 
  ```text
  # login: auth account password session auth sufficient pam_opendirectory.so try_first_pass auth required pam_deny.so account required pam_permit.so password required pam_deny.so session required pam_permit.so
  ```

  On FreeBSD, you probably will not need to edit the PAM config file `/etc/pam.conf` as it is setup to do Unix authentication for unknown services by default.
   {{< details-end >}}

   If you installed it by specifying an installation directory parameter to **`setup.sh`** as the instructions above show, i.e. **`/usr/local/usermin`**, the original **`usermin-current`** directory can now be safely deleted.

   The source package can be installed on any of the supported OS, such as **FreeBSD**, **macOS**, and all other flavors of Linux. However, if your system supports one of the other package formats like **`rpm`** or **`deb`** packages, it is *recommended* to install it from that type of package.


## Standard Modules
The standard modules that you may have deleted from Usermin on your system can be re-installed by downloading using [this](https://download.webmin.com/download/umodules/) link.

## Supported Languages
Translation of Usermin modules into different languages is done by volunteers. {{% include file="/static/data/supported-languages.md" %}}
{{< details-start post-content-details "<i class='wm wm-language'></i>"  >}}
{{% include file="/static/data/supported-languages-list.md" %}}
{{< details-end >}}

## Development Builds
There are development pre-release and nightly builds available for testing purposes only. These builds may be unstable or lack certain features. Use them at your own risk!

### Pre-release Builds
Pre-release builds can be found on [devel.webmin.com](https://download.webmin.com/devel/) page.

### Nightly Builds
Nightly builds can be found on [builds.webmin.dev](https://builds.webmin.dev/) page.

