---
title: "Virtualmin"
date: 2023-01-20
showtoc: true
---
## About

Virtualmin is a Webmin module for managing multiple virtual hosts through a single interface, like Plesk or cPanel. It supports the creation and management of **Apache** or **Nginx** virtual hosts, **BIND** DNS domains, **MySQL** and **MariaDB** databases, and mailboxes and aliases with **Postfix** or **Sendmail**. It makes use of the existing Webmin modules for these servers, and so should work with any existing system configuration, rather than needing it's own mail server, web server and so on.

Virtualmin can also create a Webmin user for each virtual server, who is restricted to managing just his domain and its files. Webmin's existing module access control features are used, and are set up automatically to limit the user appropriately. These server administrators can also manage the mailboxes and mail aliases in their domain, via a web interface that is part of the module.

## Licence

Two versions of Virtualmin exist, under separate licenses:

* **Virtualmin GPL**
    This is the freely downloadable version, licensed under the GPL. It is under active development, but does not contain all of the features of the Pro version.
* **Virtualmin Pro**
    This is the commercial version that you have to pay for. It includes [numerous features](https://www.virtualmin.com/professional/) not in the GPL version:
      
    - 60+ installable scripts (Django, Drupal, Ghost, Grav, ionCube, Joomla, Magento, Matomo, Mautic, MediaWiki, Moodle, MyBB, Nextcloud, Node.js, phpBB, TikiWiki and many other)
    - Reseller accounts
    - Resource limits control
    - Cloudflare and Google DNS support
    - Google Storage, Backblaze and Dropbox
    - GPG encrypted backups
    - Cloud mail delivery with Amazon SES
    - Proxy paths management
    - Disk quota monitoring
    - Connectivity check tool
    - Announcement emails to server owners
    - Automatic users mailbox cleanup
    - Mail logs searching
    - Batch server create and modify
    - Extended System Statistics
    - Premium private ticket support

Both the Pro and GPL versions are built from the same codebase, so all bugfixes and some new features go into both of them.

## Changelog

Virtualmin [changelog](/tags/virtualmin-changelog/) can be filtered out using tags.

## Automated Installation

Getting started with Virtualmin can be done with a few simple steps, using our [automated install](https://software.virtualmin.com/gpl/scripts/virtualmin-install.sh) script. The install script will setup your package manager, usually `apt-get` or `dnf` and then download our packages as well as all of the necessary dependencies for running Virtualmin.

{{< alert success question "How to install?" "Documentation on supported systems and installation requirements is available in our Virtualmin **[download](https://www.virtualmin.com/download/)** page." >}}

## Manual Installation

The manual installation process is [described in detail](https://www.virtualmin.com/documentation/installation/manual/) on our official Virtualmin website. Nevertheless, the *strongly* recommended way of installing Virtualmin on a supported operating system is to use the Virtualmin automated install script, which takes care of all dependencies and configuration.

### Packages

These GPL packages should _not_ be installed directly unless you _really_ know what you're doing. Use Virtualmin automated install script instead as [described above](#automated-installation).

{{< details-start post-content-indent-details "<i class='wm wm-download'></i>" open >}}

| File                       | Size |
| -------------------------- | -----|
|[wbm-virtual-server-current.gpl-1.noarch.rpm](https://download.webmin.com/download/virtualmin/wbm-virtual-server-7.7.gpl-1.noarch.rpm) | 6.4 MB |
|[webmin-virtual-server_current.gpl_all.deb](https://download.webmin.com/download/virtualmin/webmin-virtual-server_7.7.gpl_all.deb)     | 4.2 MB |
|[virtual-server-current.gpl.wbm.gz](https://download.webmin.com/download/virtualmin/virtual-server-7.7.gpl.wbm.gz)                     | 6.8 MB |

{{< details-end >}}

If you are interested, [older versions of Virtualmin](https://download.webmin.com/download/virtualmin/) are also available.

### Plugins

A plugin is a Webmin module that adds some functionality to Virtualmin. Typically a plugin will add a new feature that can be activated for a virtual server.

To use a plugin, first download and install it in the same way as you would for any other Webmin module. Then open up the **Features and Plugins** page in Virtualmin, and select the new plugin from the list of those available. Once this is done, the capabilities of the plugin can be enabled for some or all virtual servers, on the **Edit Virtual Server** page.

The best place to find plugins in case of manual installation is in the Virtualmin [repository](https://software.virtualmin.com/gpl/).

## Developing Plugins

The requirements for implementing a plugin are fully documented in the Virtualmin [module developers guide](https://www.virtualmin.com/documentation/developer/plugins/).
