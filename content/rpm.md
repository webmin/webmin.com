---
title: "Rpm"
date: 2017-10-02
categories: []
aliases: []
toc: false
draft: false
---
# Installing the RPM

If you are using the RPM version of Webmin, first download the file from the [downloads page][1] , or run the command : `wget http://prdownloads.sourceforge.net/webadmin/webmin-2.000-1.noarch.rpm` then install optional dependencies with : ` yum -y install perl perl-Net-SSLeay openssl perl-IO-Tty perl-Encode-Detect ` and then run the command : `rpm -U webmin-2.000-1.noarch.rpm` The rest of the install will be done automatically to the directory /usr/libexec/webmin, the administration username set to root and the password to your current root password. You should now be able to login to Webmin at the URL <http://localhost:10000/>. Or if accessing it remotely, replace localhost with your system's IP address.

If you want to connect from a remote server and your system has a firewall installed, see [this page for instructions on how to open up port 10000][2].

# Using the Webmin YUM repository

If you like to install and update Webmin via YUM, create the /etc/yum.repos.d/webmin.repo file containing : `[Webmin]<br />
 name=Webmin Distribution Neutral<br />
 #baseurl=https://download.webmin.com/download/yum<br />
 mirrorlist=https://download.webmin.com/download/yum/mirrorlist<br />
 enabled=1<br />
 gpgkey=https://download.webmin.com/jcameron-key.asc<br />
 gpgcheck=1` You should also fetch and install my GPG key with which the packages are signed, with the commands : `wget https://download.webmin.com/jcameron-key.asc<br />
 rpm --import jcameron-key.asc` You will now be able to install with the commands : ` yum install perl<br />
 yum install webmin ` All dependencies should be resolved automatically.

# Supported RPM-Based Distributions

The Webmin RPM can be installed on Fedora, Redhat Enterprise, older Redhat versions, CentOS and all other distributions derived from Fedora or RHEL. In addition, it can be installed on systems running Mandriva, SuSE, TurboLinux, Caldera OpenLinux.

  [1]: download.html
  [2]: firewall.html
