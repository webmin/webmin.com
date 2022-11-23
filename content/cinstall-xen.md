---
title: "Cinstall-xen"
date: 2017-10-02
categories: []
aliases: []
toc: false
draft: false
---
# Cloudmin GPL Install Script for Xen

The installer should ideally only be used on systems that are not currently running Webmin or Virtualmin, but since it only installs packages it won't destroy any existing settings. The only supported Linux distributions are CentOS 5, Redhat Enterprise 5, Debian 4.0 and Ubuntu 8.04.

The install script should download and setup a Xen-capable kernel on the system you run it on, and then register that system as a Xen host within Cloudmin. If you aren't already running a Xen kernel you will need to reboot the system before Xen instances can be created though.

The CentOS or Redhat installer can be downloaded from [cloudmin-gpl-redhat-install.sh][1]. Once you have it on the Linux system you want to run Cloudmin on, execute it with the commands :

` chmod +x cloudmin-gpl-redhat-install.sh<br />
 ./cloudmin-gpl-redhat-install.sh<br />
`

The Debian or Ubuntu installer can be downloaded from [cloudmin-gpl-debian-install.sh][2]. Once you have it on the Linux system you want to run Cloudmin on, execute it with the commands :

` chmod +x cloudmin-gpl-debian-install.sh<br />
 ./cloudmin-gpl-debian-install.sh<br />
`

Because it downloads numerous packages from the Cloudmin website and your Linux distribution's repository, it may take up to 10 minutes for the install to complete. Once it is done, you can login to Webmin at https://yourserver:10000/ to see the Cloudmin user interface.

# Cloudmin GPL Repository

One of the main advantages of using the installer over setting up Cloudmin manually is the APT or YUM repository that it sets up on your system. This includes Debian or RPM packages for Webmin and the Cloudmin modules, plus other dependencies like Perl modules.

When updates to Cloudmin-related packages are available, they will be displayed on the System Information page that appears on the right-hand frame after logging in. You can install all updates with the click of a button, or use the Virtualmin Package Updates module to install them selectively.

----

[Czech translation][3] (provided by [Bizow.com][4])

  [1]: http://cloudmin.virtualmin.com/gpl/scripts/cloudmin-gpl-redhat-install.sh
  [2]: http://cloudmin.virtualmin.com/gpl/scripts/cloudmin-gpl-debian-install.sh
  [3]: http://czlib.bizow.com/post/cloudmin-gpl-install-script-pro-xen
  [4]: http://bizow.com/
