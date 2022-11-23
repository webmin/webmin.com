---
title: "Deb"
date: 2017-10-02
categories: []
aliases: []
toc: false
draft: false
---
# Installing on Debian and Ubuntu

If you are using the DEB version of webmin, first download the file from the [downloads page][1] , or run the command : `wget http://prdownloads.sourceforge.net/webadmin/webmin_2.000_all.deb` then run the command : `dpkg --install webmin_2.000_all.deb` The install will be done automatically to /usr/share/webmin, the administration username set to root and the password to your current root password. You should now be able to login to Webmin at the URL <http://localhost:10000/>. Or if accessing it remotely, replace localhost with your system's IP address.

If Debian complains about missing dependencies, you can install them with the command : `apt-get install perl libnet-ssleay-perl openssl libauthen-pam-perl libpam-runtime libio-pty-perl apt-show-versions python unzip shared-mime-info` If you are installing on Ubuntu and the apt-get command reports that some of the packages cannot be found, edit /etc/apt/sources.list and make sure the lines ending with universe are not commented out.

Some Debian-based distributions (Ubuntu in particular) don't allow logins by the root user by default. However, the user created at system installation time can use sudo to switch to root. Webmin will allow any user who has this sudo capability to login with full root privileges.

If you want to connect from a remote server and your system has a firewall installed, see [this page for instructions on how to open up port 10000][2].

# Using the Webmin APT repository

If you like to install and update Webmin via APT, edit the /etc/apt/sources.list file on your system and add the line : `deb https://download.webmin.com/download/repository sarge contrib ` If that file does not exist, instead create /etc/apt/sources.list.d/webmin.list containing : `deb [signed-by=/usr/share/keyrings/jcameron-key.gpg] https://download.webmin.com/download/repository sarge contrib `

 You should also fetch and install my GPG key with which the repository is signed, with the commands : ` cd /root<br />
 wget https://download.webmin.com/jcameron-key.asc<br />
 apt-key add jcameron-key.asc ` On Debian 11 and Ubuntu 22.04 or higher, the commands are : ` cd /root<br />
 wget https://download.webmin.com/jcameron-key.asc<br />
 cat jcameron-key.asc | gpg --dearmor >/etc/apt/trusted.gpg.d/jcameron-key.gpg ` You will now be able to install with the commands : ` apt-get install apt-transport-https<br />
 apt-get update<br />
 apt-get install webmin ` All dependencies should be resolved automatically.

# Supported Debian-based Distributions

Webmin has been tested on all regular Debian releases, Ubuntu Linux, and derivatives like Xandros and APLINUX.

# Source Packages

The files needed to build the Debian package are [deb/webmin\_2.000.dsc][3], [deb/webmin\_2.000.diff][4], and [webmin-2.000.tar.gz][5] .

  [1]: download.html
  [2]: firewall.html
  [3]: https://download.webmin.com/download/deb/webmin_2.000.dsc
  [4]: https://download.webmin.com/download/deb/webmin_2.000.diff
  [5]: http://www.webmin.com/download/webmin-2.000.tar.gz
