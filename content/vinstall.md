---
title: "Vinstall"
date: 2017-10-02
categories: []
aliases: []
toc: false
draft: false
---
# Virtualmin GPL Installer

The installer should only be used on systems that are not currently running Webmin or hosting any websites. Ideally, it should be run on a system that has a fresh install of either CentOS 5, Debian 4.0, Ubuntu 8.04 or Solaris as at the moment those are the only supported operating systems. Further documentation on supported systems and install requirements is available on the [Virtualmin download page][1].

The Linux installer can be downloaded from [install.sh][2]. Once you have it on the Linux system you want to run Virtualmin on, execute it with the commands :

` chmod +x install.sh<br />
 ./install.sh<br />
`

The Solaris installer can be downloaded from [solaris-install.sh][3]. The commands to run it on your Solaris Sparc or X86 system are :

` chmod +x solaris-install.sh<br />
 ./solaris-install.sh<br />
`

Because it downloads numerous packages from the Virtualmin website and your Linux distribution's repository, it may take up to 30 minutes for the install to complete. Once it is done, you can login to Webmin at https://yourserver:10000/ to see the Virtualmin user interface.

# Virtualmin GPL Repository

One of the main advantages of using the installer over setting up Virtualmin manually is the APT or YUM repository that it sets up on your system. This includes Debian or RPM packages for Webmin, Usermin and the Virtualmin modules, plus modified versions of dependent programs like Apache and PHP.

When updates to Virtualmin-related packages are available, they will be displayed on the System Information page that appears on the right-hand frame after logging in. You can install all updates with the click of a button, or use the Virtualmin Package Updates module to install them selectively.

  [1]: http://www.virtualmin.com/download.html
  [2]: http://software.virtualmin.com/gpl/scripts/install.sh
  [3]: http://software.virtualmin.com/gpl/scripts/solaris-install.sh
