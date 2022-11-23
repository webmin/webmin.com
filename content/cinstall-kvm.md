---
title: "Cinstall-kvm"
date: 2017-10-02
categories: []
aliases: []
toc: false
draft: false
---
# Cloudmin GPL Install Script for KVM

The installer should ideally only be used on systems that are not currently running Webmin or Virtualmin, but since it only installs packages it won't destroy any existing settings. The only supported Linux distributions are CentOS 5 and later, Redhat Enterprise 5 and later, Fedora 10 and later, Debian 5.0, and Ubuntu 8.04 or later.

The install script will replace the systems existing eth0 network interface with a br0 interface with the same address. This is required to create a network bridge that KVM virtual machines can use to talk to the rest of your network. The existing eth0 must have a statically configured IP address for this automatic conversion to work. Once it is done, a reboot is required to activate the new interface.

The CentOS or Redhat installer can be downloaded from [cloudmin-kvm-redhat-install.sh][1]. Once you have it on the Linux system you want to run Cloudmin on, execute it with the commands :

` chmod +x cloudmin-kvm-redhat-install.sh<br />
 ./cloudmin-kvm-redhat-install.sh<br />
`

The Debian or Ubuntu installer can be downloaded from [cloudmin-kvm-debian-install.sh][2]. Once you have it on the Linux system you want to run Cloudmin on, execute it with the commands :

` chmod +x cloudmin-kvm-debian-install.sh<br />
 ./cloudmin-kvm-debian-install.sh<br />
`

Because it downloads numerous packages from the Cloudmin website and your Linux distribution's repository, it may take up to 10 minutes for the install to complete. Once it is done, you can login to Webmin at https://yourserver:10000/ to see the Cloudmin user interface.

# Cloudmin GPL Repository

One of the main advantages of using the installer over setting up Cloudmin manually is the APT or YUM repository that it sets up on your system. This includes Debian or RPM packages for Webmin and the Cloudmin modules, plus other dependencies like Perl modules.

When updates to Cloudmin-related packages are available, they will be displayed on the System Information page that appears on the right-hand frame after logging in. You can install all updates with the click of a button, or use the Virtualmin Package Updates module to install them selectively.

  [1]: http://cloudmin.virtualmin.com/gpl/scripts/cloudmin-kvm-redhat-install.sh
  [2]: http://cloudmin.virtualmin.com/gpl/scripts/cloudmin-kvm-debian-install.sh
