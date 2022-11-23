---
title: "Udeb"
date: 2017-10-02
categories: []
aliases: []
toc: false
draft: false
---
# Installing Usermin on Debian

If you are using the Debian package version of Usermin, first download the file from the [downloads page][1] , or run the command : `wget http://prdownloads.sourceforge.net/webadmin/usermin_1.860_all.deb` then run the command : `dpkg --install usermin_1.860_all.deb` The install will be done automatically to /usr/share/usermin. You should now be able to login at http://localhost:20000 as any user on your system.

If Debian complains about missing dependencies, you can install them with the command : `apt-get install perl libnet-ssleay-perl openssl libauthen-pam-perl libpam-runtime libio-pty-perl` If you are installing on Ubuntu and the apt-get command reports that some of the packages cannot be found, edit /etc/apt/sources.list and make sure the lines ending with universe are not commented out.

If you want to connect from a remote server and your system has a firewall installed, see [this page for instructions on how to open up port 20000][2].

# Using the Usermin APT repository

If you like to install and update Usermin via APT, edit the /etc/apt/sources.list file on your system and add the line : `deb https://download.webmin.com/download/repository sarge contrib` You will now be able to install with the command : `apt-get update<br />
apt-get install usermin` All dependencies should be resolved automatically.

# Supported Debian-based Distributions

Usermin has been tested on all regular Debian releases, Ubuntu Linux, and derivatives like Xandros and APLINUX.

# Source Packages

The files needed to build the Debian package are [deb/usermin\_1.860.dsc][3], [deb/usermin\_1.860.diff][4], and [usermin-1.860.tar.gz][5] .

  [1]: udownload.html
  [2]: ufirewall.html
  [3]: https://download.webmin.com/download/deb/usermin_1.860.dsc
  [4]: https://download.webmin.com/download/deb/usermin_1.860.diff
  [5]: http://www.webmin.com/download/usermin-1.860.tar.gz
