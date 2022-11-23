---
title: "Urpm"
date: 2017-10-02
categories: []
aliases: []
toc: false
draft: false
---
# Installing the Usermin RPM

If you are using the RPM version of Usermin, first download the file from the [downloads page][1] , or run the command : `wget http://prdownloads.sourceforge.net/webadmin/usermin-1.860-1.noarch.rpm` and then run the command : `rpm -U usermin-1.860-1.noarch.rpm` The rest of the install will be done automatically to the directory /usr/libexec/usermin. You should now be able to login at http://localhost:20000 as any user on your system.

If you want to connect from a remote server and your system has a firewall installed, see [this page for instructions on how to open up port 20000][2].

# Using the Usermin YUM repository

If you like to install and update Usermin via RPM, create the /etc/yum.repos.d/webmin.repo file containing : `[Webmin]<br />
 name=Webmin Distribution Neutral<br />
 #baseurl=https://download.webmin.com/download/yum<br />
 mirrorlist=https://download.webmin.com/download/yum/mirrorlist<br />
 enabled=1` You should also fetch and install my GPG key with which the packages are signed, with the commands : `wget https://download.webmin.com/jcameron-key.asc<br />
 rpm --import jcameron-key.asc` You will now be able to install with the command : `yum install usermin` All dependencies should be resolved automatically.

# Supported RPM-Based Distributions

The Usermin RPM can be installed on Fedora, Redhat Enterprise, older Redhat versions, CentOS and all other distributions derived from Fedora or RHEL. In addition, it can be installed on systems running Mandriva, SuSE, TurboLinux, Caldera OpenLinux.

  [1]: udownload.html
  [2]: ufirewall.html
