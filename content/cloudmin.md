---
title: "Cloudmin"
date: 2023-01-21
showtoc: true
---
## About

Cloudmin provides a web interface for management of multiple systems, typically virtual systems running under some virtualization technology such as **Xen**, **KVM**, **OpenVZ**, **LXC** or **Docker**. Using Cloudmin you can create, destroy, resize, startup, shutdown and restrict multiple instances using different virtualization technologies from a single interface. It also has a full command line API that can be used to manage virtual systems from a shell script or via HTTP requests.

A single Cloudmin master can manage multiple host systems, each of which can in turn host multiple virtual systems.

The same web interface is used regardless of the type of virtual system being managed, any multiple types can co-exist within the same Cloudmin install or on the same host system. Wherever possible, the same functions are available regardless of the virtualization type of the system being managed, even though their implementation may differ.

Cloudmin is designed for use by VPS hosting companies that sell virtual systems to their customers, but is also suited for anyone who wants to get into virtualization for application management, testing, controlling a cluster of Virtualmin hosts, or just to learn about cloud computing.

Cloudmin supports additional logins called system owners, who can be given limited access to a subset of virtual systems, and can be restricted in the actions that they perform. Owners can have limits set on their disk, RAM and CPU usage that apply across all their virtual systems, either defined on a per-owner limit or from a plan.

## Licence

Two versions of Cloudmin exist, under separate licenses:

* **Cloudmin GPL**
    This is the freely downloadable version, licensed under the GPL. It is under active development, but does not contain all of the features of the Pro version, and is limited to managing a single Xen or KVM host system.
* **Cloudmin Pro**
    This is the commercial version that you have to pay for. It includes numerous features not included in the GPL version:

    * Support for **Xen**, **OpenVZ**, **KVM**, **Solaris Zones** virtual systems
    * Can create and manage **GCE** and **EC2** accounts, instances, images, addresses and storage volumes
    * The ability to manage multiple host systems (each of which can run multiple virtual systems) from a single interface
    * Support for managing multiple non-virtual systems, such as machines running Virtualmin
    * Live replication of settings from a Cloudmin master to one or more backup systems
    * Multiple locations for storing system images, to avoid repeated copies to distant datacenters
    * Premium private ticket support

    To learn more about Cloudmin Pro, visit the Cloudmin [documentation](https://www.virtualmin.com/documentation/cloudmin/) and [shop](https://www.virtualmin.com/product-category/cloudmin/) pages on Virtualmin website.

Both the Pro and GPL versions are built from the same codebase, so all bugfixes and some new features go into both of them. If you enjoy using the GPL version, it can be upgraded in-place to the Pro release without losing any existing settings or virtual machines.

## Changelog

Cloudmin [changelog](/tags/cloudmin-changelog/) can be filtered out using tags.

## Installation

The installer should ideally only be used on a freshly installed system, but since it only installs packages it won't destroy any existing settings. The only supported Linux distributions are RHEL and derivatives and Debian and Ubuntu.

One of the main advantages of using the installer over setting up Cloudmin manually is the repository that it sets up on your system.

### Xen

The Xen install script should download and setup a Xen-capable kernel on the system you run it on, and then register that system as a Xen host within Cloudmin. If you aren't already running a Xen kernel you will need to reboot the system before Xen instances can be created.

### KVM

The KVM install script will replace the systems existing `eth0` network interface with a `br0` interface with the same address. This is required to create a network bridge that KVM virtual machines can use to talk to the rest of your network. The existing `eth0` must have a statically configured IP address for this automatic conversion to work. Once it is done, a reboot is required to activate the new interface.

## Downloads

[**`rpm-xen`**](http://cloudmin.virtualmin.com/gpl/scripts/cloudmin-gpl-redhat-install.sh) **|** [**`rpm-kvm`**](http://cloudmin.virtualmin.com/gpl/scripts/cloudmin-kvm-redhat-install.sh) — **Red Hat Enterprise Linux**, **Alma**, **Rocky**, **Oracle**, **Fedora**

[**`deb-xen`**](http://cloudmin.virtualmin.com/gpl/scripts/cloudmin-gpl-debian-install.sh) **|** [**`deb-kvm`**](http://cloudmin.virtualmin.com/gpl/scripts/cloudmin-kvm-debian-install.sh) — **Debian and Ubuntu**

Downloaded install script, once you have it on the Linux system you want to run Cloudmin on, can be executed with the folowing command:


```shell
sh cloudmin-install.sh
```

When updates to Cloudmin-related packages are available, they will be displayed on the dashboard that appears on the right side of the screen after logging in. You can install all updates with the click of a button, or use the Virtualmin Package Updates module to install them selectively.


Because it downloads numerous packages from the Cloudmin and your Linux distribution's repositories, it may take some time for the install to complete.

