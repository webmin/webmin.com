---
title: "Tgz"
date: 2017-10-02
categories: []
aliases: []
toc: false
draft: false
---
# Installing the tar.gz file

Before downloading Webmin, you must already have Perl 5 installed on your system. Perl is usually installed as /usr/local/bin/perl or /usr/bin/perl, and comes as part of most recent versions of Linux. If you don't have Perl, you can download the source from <http://www.perl.com/> and compile it for your system. Most operating systems come with Perl these days, so check your operating system CD or website for a package as well.

To download the Webmin tar.gz package, either follow the link on the [downloads page][1] , or run commands like : ` [root@yourhost /]# cd /tmp<br />
 [root@yourhost /tmp]# wget http://prdownloads.sourceforge.net/webadmin/webmin-2.000.tar.gz<br />
`

When unpacked, the distribution creates a subdirectory called webmin-2.000 under the current directory. Since recent versions of Webmin support installation into a directory of your choice, you can pick a destination directory such as /usr/local/webmin. Then run the following commands in the directory containing the webmin-2.000.tar.gz file : ` [root@yourhost /tmp]# gunzip webmin-2.000.tar.gz<br />
 [root@yourhost /tmp]# tar xf webmin-2.000.tar<br />
 [root@yourhost /tmp]# cd webmin-2.000<br />
 [root@yourhost /tmp/webmin-2.000]# ./setup.sh /usr/local/webmin<br />
`

When the setup.sh script is run, it will ask the following questions :

* The Webmin configuration directory<br />
 The directory in which all Webmin configuration information is stored. This is now separate from the Webmin install directory, so that configurations are saved when you upgrade. <br />
 If you have previously installed Webmin and use the same config directory, this will be the only question asked.
* The Webmin log directory<br />
 The location for pid and webserver log files.
* The full path to perl on your system<br />
 This is usually /usr/bin/perl or /usr/local/bin/perl
* Your Operating system type<br />
 In Webmin versions 0.990 and above, this question is only asked if your operating system cannot be automatically determined.<br />
 The setup script will display a list of supported systems. If your OS is not on the list, you can **try** choosing the closest match. However this may not work properly, and may even cause serious problems!
* Web server port<br />
 The TCP port that the Webmin web server will listen on.
* Web server login and password<br />
 The login name and password used to acess the Webmin web server.
* Web server hostname<br />
 The hostname of the machine on which Webmin will run.
* Use SSL<br />
 This question will only be asked if your system has the Perl SSL libraries installed. See below for more..
* Start Webmin at boot time<br />
 If your OS is supported, Webmin will ask if you want to have it automatically started at boot time.

Assuming you answer all the above questions correctly, the Webmin web server will be started and the setup script will give you the URL to go to. Enter this URL into your browser, and you will be prompted for the login and password that you choose in setup.sh. Once you have logged in your browser should show the main Webmin page, on which is an icon for each module you have installed.

Typically you can connect to Webmin at <http://localhost:10000/>. Or if accessing it remotely, replace localhost with your system's IP address.

If you installed Webmin by specifying an installation directory parameter to setup.sh as the instructions above show, the original webmin-2.000 directory can now be safely deleted.

# Supported Operating Systems

The TAR package of Webmin can be installed on any one of the [supported operating systems][2], such as HP/UX, AIX, FreeBSD, and all flavours of Linux. However, if your system supports one of the other package formats like RPM or Debian packages, it is recommended to install Webmin from that type of package.

  [1]: download.html
  [2]: support.html
