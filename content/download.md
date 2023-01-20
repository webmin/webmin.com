---
title: "Downloading and Installing"
date: 2017-10-02
draft: false
showtoc: true
---

## Downloading

### Repository Setup
The simplest and best way to get [**Webmin**](/about/) is to use automatic [**`setup-repos.sh`**](https://github.com/webmin/webmin/blob/master/setup-repos.sh) script to configure official repositories on your **RHEL** or **Debian** derivative systems. It can be done in two easy steps:

```
curl -o setup-repos.sh https://raw.githubusercontent.com/webmin/webmin/master/setup-repos.sh
sh setup-repos.sh
```
This script will automatically setup our repository and install our GPG keys on your system, and provide **`webmin`** package for installation and easy upgrades in the future. The supported and tested systems are **Red Hat Enterprise Linux**, **Alma**, **Rocky**, **Oracle**, **CentOS Stream**, **Fedora** or **Debian**, **Ubuntu**, **Kali**.

### Direct Downloads
The latest full Webmin distribution is available in various package formats for download:


  [**`rpm`**](https://www.webmin.com/download/rpm/webmin-current.rpm) — **Red Hat Enterprise Linux**, **Alma**, **Rocky**, **Oracle**, **CentOS Stream**, **Fedora**, **openSUSE**

  [**`deb`**](https://www.webmin.com/download/deb/webmin-current.deb) — **Debian derivatives (Ubuntu, Kali, Parrot, Pop!, Lite, Devuan)**

  [**`pkg`**](https://www.webmin.com/download/solaris-pkg/webmin-current.pkg.gz) — **Solaris**
  
  [**`tar`**](https://www.webmin.com/download/webmin-current.tar.gz) — **FreeBSD** or any other Linux distribution

&nbsp;&nbsp;\* The minimal [**`tar`**](https://www.webmin.com/download/webmin-current-minimal.tar.gz) version of Webmin contains only the core API and programs, and a few modules required for its basic operation. Most modules and all themes have been left out, but can be easily added later. It can be useful if you only need some of the programs functionality, and don't want to download the entire multi-megabyte package. 

#### Checksum Verification
To verify that you have downloaded Webmin fully and correctly, you can use the command **`sha256sum`** on the downloaded file, and compare it against those listed below:

{{% include file="/static/data/download-checksum-verification.md" %}}

## Installing

### Using Package Manager
If Webmin repository was setup using our [**`setup-repos.sh`**](https://raw.githubusercontent.com/webmin/webmin/master/setup-repos.sh) as [described earlier](#repository-setup) then Webmin can be install as easy as:

   #### RHEL and derivatives
    dnf install webmin

   #### Debian and derivatives
    apt-get install webmin

### Using Downloaded Package
If Webmin package was downloaded manually it can be easily installed:
   #### RHEL and derivatives
    dnf install ./webmin-current.rpm

   #### Debian and derivatives
    apt-get install ./webmin-current.deb

   #### Solaris
    # The root user be switched from a role account to a normal account to logins to work
    rolemod -K type=normal root
    # Uncompress
    gunzip webmin-current.pkg.gz
    # Install
    pkgadd -d webmin-current.pkg

   #### FreeBSD and any other Linux installation from source
    # Change directory
    cd /tmp
    # Uncompress
    gunzip webmin-current.tar.gz
    tar xf webmin-current.tar.gz
    cd webmin-current
    # Install
    ./setup.sh /usr/local/webmin
   If you installed it by specifying an installation directory parameter to **`setup.sh`** as the instructions above show, i.e. **`/usr/local/webmin`**, the original **`webmin-current`** directory can now be safely deleted.

   The source package can be installed on any of the supported OS, such as **FreeBSD**, **HP/UX**, **AIX**, and all other flavors of Linux. However, if your system supports one of the other package formats like **`rpm`** or **`deb`** packages, it is *recommended* to install it from that type of package.

## Standard Modules
The standard modules that you may have deleted from Webmin on your system can be re-installed by downloading using [this](https://download.webmin.com/download/modules/) link.


## Development Builds
There are development pre-release and nightly builds available for testing purposes only. These builds may be unstable or lack certain features. Use them at your own risk!

### Pre-release Builds
Pre-release builds can be found on [devel.webmin.com](https://download.webmin.com/devel/) page.

### Nightly Builds
Nightly builds can be found on [builds.webmin.dev](https://builds.webmin.dev/) page.

