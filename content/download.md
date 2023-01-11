---
title: "Downloading and Installing"
date: 2017-10-02
categories: []
aliases: []
toc: false
draft: false
---
The current Webmin distribution is available in various package formats for download from:

Unix tar/gzip format  
[https://prdownloads.sourceforge.net/webadmin/webmin-2.000.tar.gz](https://prdownloads.sourceforge.net/webadmin/webmin-2.000.tar.gz) 15.1 MB

RPM suitable for Redhat, Fedora, CentOS, SuSE or Mandrake Linux  
[https://prdownloads.sourceforge.net/webadmin/webmin-2.000-1.noarch.rpm](https://prdownloads.sourceforge.net/webadmin/webmin-2.000-1.noarch.rpm) 16.3 MB

Debian package suitable for Debian, Ubuntu or other derived Linux  
[https://prdownloads.sourceforge.net/webadmin/webmin\_2.000\_all.deb](https://prdownloads.sourceforge.net/webadmin/webmin_2.000_all.deb) 14.8 MB

Source RPM suitable for Redhat, Fedora, CentOS, SuSE or Mandrake Linux  
[https://prdownloads.sourceforge.net/webadmin/webmin-2.000-1.src.rpm](https://prdownloads.sourceforge.net/webadmin/webmin-2.000-1.src.rpm) 15.1 MB

Solaris package format  
[https://prdownloads.sourceforge.net/webadmin/webmin-2.000.pkg.gz](https://prdownloads.sourceforge.net/webadmin/webmin-2.000.pkg.gz) 14.8 MB

ZIP format suitable for Windows  
[https://prdownloads.sourceforge.net/webadmin/webmin-2.000.zip](https://prdownloads.sourceforge.net/webadmin/webmin-2.000.zip) 19.3 MB

Minimal version of Webmin, Unix tar/gzip format  
[https://prdownloads.sourceforge.net/webadmin/webmin-2.000-minimal.tar.gz](https://prdownloads.sourceforge.net/webadmin/webmin-2.000-minimal.tar.gz) 1.9 MB

A Webmin [package for Gentoo](https://packages.gentoo.org/package/app-admin/webmin) is now part of their tree, and can be installed with the command :  
`emerge webmin`

You can also download [recent versions of Webmin](https://sourceforge.net/project/showfiles.php?group_id=17457). Check out the [change log](changes.html) for a list of new features in this version and in older releases.

PGP Verification
================

The [PGP key](https://download.webmin.com/jcameron-key.asc) that the RPM packages for versions 1.040 and above were signed with is also available, so that you can verify their integrity. Just add it to your GnuPG or PGP keyring and run the command rpm --checksig webmin-2.000-1.noarch.rpm. If you are using RPM version 4 or above, you will need to import the key into RPM's key database with the command rpm --import jcameron-key.asc. Otherwise, you can run gpg --import jcameron-key.asc as root.

The [PGP signature](https://download.webmin.com/download/sigs/webmin-2.000.tar.gz-sig.asc) for the latest tar/gzip version of Webmin is also available so that you can verify the tar.gz file with the command gpg --verify webmin-2.000.tar.gz-sig.asc webmin-2.000.tar.gz.

For Debian packages, you can also get the [PGP signature](https://download.webmin.com/download/sigs/webmin_2.000_all.deb-sig.asc) for the latest version, so that you can verify the package with the command gpg --verify webmin\_2.000\_all.deb-sig.asc webmin\_2.000\_all.deb.

MD5 Verification
================

To verify that you have downloaded Webmin fully and correctly, you can use the command md5sum on the RPM, Debian package or TAR file, and compare it against those listed below :

Filename

MD5 Checksum

webmin\_2.000\_all.deb

294e3c587e2467c176e8e396526f784e

webmin-2.000-minimal.tar.gz

fda2463a9bbae3e8a372439ec4a0fafd

webmin-2.000-1.noarch.rpm

08e86e3fa4b15b8cb3a034923a7d7d04

webmin-2.000-1.src.rpm

a3ebfad6a51dc9fbef2c3cbe041c94e0

webmin-2.000.pkg.gz

866bb3007f062a501a6aec5965facde4

webmin-2.000.tar.gz

d28ae15b046fbf1d974f17688892eef6

webmin-2.000.zip

965eb0cf23c1c5856d681fd9a1a2f6d8

Minimal Package
===============

The minimal version of Webmin contains only the core API and programs, and a few modules required for its basic operation. Most modules and all themes have been left out, but can be easily added later. It can be useful if you only need some of the programs functionality, and don't want to download the entire multi-megabyte package. The 2.000 minimal tar.gz distribution can be downloaded from [webmin-2.000-minimal.tar.gz](https://prdownloads.sourceforge.net/webadmin/webmin-2.000-minimal.tar.gz)

Additional documentation is available to assist with the installation of Webmin and other required packages on the following operating systems : [Sun Solaris](solaris.html) and [Apple OS X](osx.html).

Latest Version Links
====================

If you want a URL that always downloads the latest version of Webmin, you can use one of the following :

Unix tar/gzip format  
[https://www.webmin.com/download/webmin-current.tar.gz](http://www.webmin.com/download/webmin-current.tar.gz)

RPM suitable for Redhat, Fedora, CentOS, SuSE or Mandrake Linux  
[https://www.webmin.com/download/rpm/webmin-current.rpm](http://www.webmin.com/download/rpm/webmin-current.rpm)

Debian package suitable for Debian, Ubuntu or other derived Linux  
[https://www.webmin.com/download/deb/webmin-current.deb](http://www.webmin.com/download/deb/webmin-current.deb)

Solaris package format  
[https://www.webmin.com/download/solaris-pkg/webmin-current.pkg.gz](http://www.webmin.com/download/solaris-pkg/webmin-current.pkg.gz)
