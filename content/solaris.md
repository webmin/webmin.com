---
title: "Solaris"
date: 2017-10-02
categories: []
aliases: []
toc: false
draft: false
---
# Installing the Solaris package

If you are using the Solaris package of webmin, first download the file from the [downloads page][1], or with the command : ` wget http://prdownloads.sourceforge.net/webadmin/webmin-2.000.pkg.gz<br />
` if necessary, switch to the root user with: ` su root ` On Solaris 11, it has been reported that the root user be switched from a role account to a normal account in order for logins to work. The command for this is: ` rolemod -K type=normal root ` then run the following commands to uncompress and install it: ` gunzip webmin-2.000.pkg.gz<br />
 pkgadd -d webmin-2.000.pkg WSwebmin<br />
`

The installation will be made to /opt/webmin, the administration username set to root and the password to your current root password. You should now be able to login to Webmin at the URL http://localhost:10000/ .

# Upgrading the Solaris Package

Often Solaris is not configured by default to allow the upgrading of packages. To change this, edit the file /var/sadm/install/admin/default and change the line instance=unique to instance=overwrite. This will allow you to install a new Solaris package of Webmin over an older version.

Another method of upgrading is to use the following commands : ` /etc/webmin/stop<br />
 cp -r /etc/webmin /etc/webmin.old<br />
 pkgrm WSwebmin<br />
 mv /etc/webmin.old /etc/webmin<br />
 gunzip webmin-2.000.pkg.gz<br />
 pkgadd -d webmin-2.000.pkg WSwebmin<br />
`

These will preserve the /etc/webmin directory when un-installing and re-installing, as the un-install process will normally delete it.

  [1]: download.html
