---
title: "Downloading and Installing"
date: 2017-10-02
draft: false
showtoc: true
---

## Repository

### Setup
The simplest and best way to get [**Webmin**](/about/) is to use automatic [**`webmin-setup-repo.sh`**](https://github.com/webmin/webmin/blob/master/webmin-setup-repo.sh) script to configure repositories on your **RHEL** or **Debian** derivative systems. It can be done in two easy steps:

```
curl -o webmin-setup-repo.sh https://raw.githubusercontent.com/webmin/webmin/master/webmin-setup-repo.sh
sudo sh webmin-setup-repo.sh
```

This script will automatically setup our repository and install our GPG keys on your system, and provide **`webmin`** package for installation and easy upgrades in the future. The supported and tested systems are **Red Hat Enterprise Linux**, **Alma**, **Rocky**, **Oracle**, **CentOS Stream**, **Fedora** or **Debian**, **Ubuntu**, **Kali**.

### Install

If Webmin repository was setup using our **`webmin-setup-repo.sh`** as [described above](#setup) then Webmin can be installed as easy as:

   #### RHEL and derivatives
    sudo dnf install webmin

   #### Debian and derivatives
    sudo apt-get install webmin --install-recommends

### Access
After successful Webmin installation, you can access its interface by entering **`https://<Your-Server-IP>:10000`** in your browser. Check that your firewall configuration allows access through port **10000**.

{{< details-start h2 "Manual <i class='wm wm-cog'></i>" >}}

{{< alert warning exclamation "" "Manual installation **isn’t recommended**—follow the instructions above to set up repositories." >}}

The latest full Webmin distribution is available in various package formats for download:


  [**`rpm`**](https://webmin.com/download/rpm/webmin-current.rpm) — **Red Hat Enterprise Linux**, **Alma**, **Rocky**, **Oracle**, **CentOS Stream**, **Fedora**, **openSUSE**

  [**`deb`**](https://webmin.com/download/deb/webmin-current.deb) — **Debian derivatives (Ubuntu, Kali, Parrot, Pop!, Lite, Devuan)**

  [**`pkg`**](https://webmin.com/download/solaris-pkg/webmin-current.pkg.gz) — **Solaris**
  
  [**`tar`**](https://webmin.com/download/webmin-current.tar.gz) — **FreeBSD** or any other Linux distribution

&nbsp;&nbsp;\* The minimal [**`tar`**](https://webmin.com/download/webmin-current-minimal.tar.gz) version of Webmin contains only the core API and programs, and a few modules required for its basic operation. Most modules and all themes have been left out, but can be easily added later. It can be useful if you only need some of the programs functionality, and don't want to download the entire multi-megabyte package. 

### Checksum Verification
To verify that you have downloaded Webmin fully and correctly, you can use the command **`sha256sum`** on the downloaded file, and compare it against those listed below:

{{% include file="/data/download/checksum-verification.md" %}}

Machine-readable checksums are also available in <a href=/checksum.json>checksum.json</a>.

### Configure
If Webmin package was downloaded manually it can be installed:
   #### RHEL and derivatives
    sudo dnf install ./webmin-current.rpm

   #### Debian and derivatives
    sudo apt-get install --install-recommends ./webmin-current.deb

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
    sudo ./setup.sh /usr/local/webmin
   If you installed it by specifying an installation directory parameter to **`setup.sh`** as the instructions above show, i.e. **`/usr/local/webmin`**, the original **`webmin-current`** directory can now be safely deleted.

   The source package can be installed on any of the supported OS, such as **FreeBSD**, **macOS**, **HP/UX**, **AIX**, and all other flavors of Linux. However, if your system supports one of the other package formats like **`rpm`** or **`deb`** packages, it is *recommended* to install it from that type of package.
{{< details-end >}}

## Older Versions
Older versions of Webmin can be downloaded from [Sourceforge](https://sourceforge.net/projects/webadmin/files/webmin/).

## Standard Modules
If Webmin was installed from the Webmin RPM or DEB repository described above, the standard modules are included in the `webmin` package. Use your system package manager to reinstall or upgrade Webmin instead of downloading individual module files.

If Webmin was installed from the Virtualmin repositories at [download.virtualmin.com](https://download.virtualmin.com), the package is modular. The core modules are installed with `webmin`, and optional standard modules are available as separate `webmin-*` packages. For example:

```bash
sudo apt-get install webmin-squid
sudo dnf install webmin-squid
```

Use the package name that matches the module you need, for example `webmin-cpan`, `webmin-postgresql`, or `webmin-custom`. For the full Virtualmin repository layout, see [Webmin module packages](https://www.virtualmin.com/docs/installation/troubleshooting-repositories/#webmin-module-packages) in the Virtualmin documentation.

Older Virtualmin systems may still use the legacy [software.virtualmin.com](https://software.virtualmin.com) repository and full Webmin builds. When those systems are switched to [download.virtualmin.com](https://download.virtualmin.com) using Virtualmin's repository setup tools, previously used Webmin modules are preserved by installing the matching modular `webmin-*` packages.

The [standard modules directory](https://download.webmin.com/download/modules/) is mainly for manual, non-package-managed, or source/tarball installations. Avoid mixing module downloads from that directory with package-managed Webmin installs unless you have a specific reason.

## Development Builds
There are development pre-release and nightly builds available for testing purposes only. These builds may be unstable or lack certain features. Use them at your own risk!

Repository packages from [download.webmin.dev](https://download.webmin.dev) use the modular Webmin layout, with core modules in `webmin` and optional standard modules available as separate `webmin-*` packages.

### Pre-release Builds
Pre-release builds can be found on [rc.download.webmin.dev](https://rc.download.webmin.dev/) page.

### Testing Builds
Testing builds can be found on [download.webmin.dev](https://download.webmin.dev/) page.
