---
title: "Cloudmin"
date: 2017-10-02
categories: []
aliases: []
toc: false
draft: false
---
# What is Cloudmin?

It is a UI built on top of Webmin for managing virtual systems, such as Xen, KVM and OpenVZ instances. Using Cloudmin you can create, destroy, resize, startup, shutdown and restrict multiple instances using different virtualization technologies from a single interface. It also has a full command line API that can be used to manage virtual systems from a shell script or via HTTP requests.

Cloudmin is designed for use by VPS hosting companies that sell virtual systems to their customers, but is also suited for anyone who wants to get into virtualization for application management, testing, controlling a cluster of Virtualmin hosts, or just to learn about cloud computing.

Cloudmin supports additional logins called system owners, who can be given limited access to a subset of virtual systems, and can be restricted in the actions that they perform. Owners can have limits set on their disk, RAM and CPU usage that apply across all their virtual systems, either defined on a per-owner limit or from a plan.

# What License is Cloudmin Under?

Two versions of Cloudmin exist, under separate licenses:

* **Cloudmin GPL**
    This is the freely downloadable version, licensed under the GPL. It is under active development, but does not contain all of the features of the Pro version, and is limited to managing a single Xen or KVM host system.
* **Cloudmin Pro**
    This is the commerical version that you have to pay for. It includes numerous features not in the GPL version, such as support for Xen, OpenVZ, KVM, Vservers, EC2 and Solaris Zones, as well as the ability to manage multiple host systems. It also gives customers access to a wider range of system images, and commercial support. To learn more, visit the [Virtualmin][1] website.

Both the Pro and GPL versions are built from the same codebase, so all bugfixes and some new features go into both of them. If you enjoy using the GPL version, it can be upgraded in-place to the Pro release without losing any existing settings or virtual machines.

# Cloudmin GPL Limitations

The Pro version of Cloudmin has the following additional features that are not present in the GPL version :

* Support for Xen, OpenVZ, KVM, VServers, Solaris Zones virtual systems.
* Can create and manage EC2 accounts, instances, images, addresses and storage volumes.
* The ability to manage multiple host systems (each of which can run multiple virtual systems) from a single interface.
* Support for managing multiple non-virtual systems, such as machines running Virtualmin.
* Live replication of settings from a Cloudmin master to one or more backup systems.
* Multiple locations for storing system images, to avoid repeated copies to distant datacenters.

  [1]: http://www.virtualmin.com/
