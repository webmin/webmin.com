---
title: "Utgz"
date: 2017-10-02
categories: []
aliases: []
toc: false
draft: false
---
# Installing the Usermin tar.gz file

Before downloading Usermin, you must already have Perl 5 installed on your system. Perl is usually installed as /usr/local/bin/perl or /usr/bin/perl, and comes as part of most recent versions of Linux. If you don't have Perl, you can download the source from <http://www.perl.com/> and compile it for your system. Most operating systems come with Perl these days, so check your operating system CD or website for a package as well.

To download the Usermin tar.gz package, either follow the link on the [downloads page][1] , or run commands like : ` [root@yourhost /]# cd /tmp<br />
 [root@yourhost /tmp]# wget http://prdownloads.sourceforge.net/webadmin/usermin-1.860.tar.gz<br />
`

When unpacked, the distribution creates a subdirectory called usermin-1.860 under the current directory. Since recent versions of Usermin support installation into a directory of your choice, you can pick a destination directory such as /usr/local/usermin. Then run the following commands in the directory containing the usermin-1.860.tar.gz file : ` [root@yourhost /tmp]# gunzip usermin-1.860.tar.gz<br />
 [root@yourhost /tmp]# tar xf usermin-1.860.tar<br />
 [root@yourhost /tmp]# cd usermin-1.860<br />
 [root@yourhost /tmp/usermin-1.860]# ./setup.sh /usr/local/usermin<br />
`

When the setup.sh script is run, it will ask the following questions :

* The Usermin configuration directory<br />
 The directory in which all Usermin configuration information is stored. This is now separate from the Usermin install directory, so that configurations are saved when you upgrade. <br />
 If you have previously installed Usermin and use the same config directory, this will be the only question asked.
* The Usermin log directory<br />
 The location for pid and webserver log files.
* The full path to perl on your system<br />
 This is usually /usr/bin/perl or /usr/local/bin/perl
* Your Operating system type<br />
 This question is only asked if your operating system cannot be automatically determined.<br />
 The setup script will display a list of supported systems. If your OS is not on the list, you can **try** choosing the closest match. However this may not work properly, and may even cause serious problems!
* Web server port<br />
 The TCP port that the Usermin web server will listen on.
* Web server hostname<br />
 The hostname of the machine on which Usermin will run.
* Use SSL<br />
 This question will only be asked if your system has the Perl SSL libraries installed. See below for more..

Assuming you answer all the above questions correctly, the Usermin web server will be started and the setup script will give you the URL to go to. Enter this URL into your browser, and you will be prompted for a login and password. You should be able to login as any valid Unix user on your system.

If you installed Usermin by specifying an installation directory parameter to setup.sh as the instructions above show, the original usermin-1.860 directory can now be safely deleted.

# Supported Operating Systems

The TAR package of Usermin can be installed on any one of the [supported operating systems][2], such as HP/UX, AIX, FreeBSD, and all flavours of Linux. However, if your OS does not support PAM and does not have a regular /etc/passwd or /etc/shadow file, the it may be impossible to login.

  [1]: udownload.html
  [2]: support.html
