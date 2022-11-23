---
title: "Udownload"
date: 2017-10-02
categories: []
aliases: []
toc: false
draft: false
---
# Downloading and Installing

A tar/gzip archive containing the current Usermin distribution is available for download from:

Unix tar/gzip format<br />
<https://prdownloads.sourceforge.net/webadmin/usermin-1.860.tar.gz> 6.1 MB

RPM suitable for Redhat, Fedora, CentOS, SuSE or Mandrake Linux<br />
<https://prdownloads.sourceforge.net/webadmin/usermin-1.860-1.noarch.rpm> 6.6 MB

Source RPM suitable for Redhat, Fedora, CentOS SuSE or Mandrake Linux<br />
<https://prdownloads.sourceforge.net/webadmin/usermin-1.860-1.src.rpm> 6.1 MB

Debian package suitable for Debian, Ubuntu or other derived Linux<br />
[https://prdownloads.sourceforge.net/webadmin/usermin\_1.860\_all.deb][1] 6.1 MB

You can also download [recent versions of Usermin][2]. You can also view the [change log][3] for a list of new features in this version and older releases.

If you just want to use Usermin for webmail with an existing IMAP server, [special Usermin packages][4] are available that have been pre-modded with a theme and default configuration for this purpose.

The [PGP key][5] that the RPM packages for versions 0.970 and above were signed with is also available, so that you can verify their integrity. Just add it to your GnuPG or PGP keyring and run the command rpm --checksig usermin-1.860-1.noarch.rpm. If you are using RPM version 4 or above, you will need to import the key into RPM's key database with the commands : `wget https://download.webmin.com/jcameron-key.asc<br />
 rpm --import jcameron-key.asc`

The [PGP signature][6] for the latest tar/gzip version of Usermin is also available so that you can verify the tar.gz file with the command gpg --verify usermin-1.860.tar.gz-sig.asc usermin-1.860.tar.gz.

# MD5 Verification

To verify that you have downloaded Usermin fully and correctly, you can use the command md5sum on the RPM, Debian package or TAR file, and compare it against those listed below :

<table>
<tr>
<th>Filename</th>
<th>MD5 Checksum</th>
</tr>
<tr>
<td>usermin\_1.860\_all.deb</td>
<td>307fd39ceae26d534df4aaa968000b1c</td>
</tr>
<tr>
<td>usermin-1.860-1.noarch.rpm</td>
<td>bb0fdb46da15690ff61446b9e307bd3d</td>
</tr>
<tr>
<td>usermin-1.860-1.src.rpm</td>
<td>24fed1ed92eca78b6d6c7bb6af701644</td>
</tr>
<tr>
<td>usermin-1.860.tar.gz</td>
<td>20ac95fa72ed7c9996f1abab84cf0f80</td>
</tr>
</table>

# Requirements

Because it allows logins by any Unix user on your system, Usermin needs some way of checking user passwords. By default, this will be done by just reading the /etc/shadow file directly, but if your system uses NIS this will not work.

Instead, you will need to install the Authen::PAM perl module. This module can be installed using Webmin's Perl Modules module, or manually downloaded from [CPAN][7]. For this module to compile, you must have the PAM header files installed on your system. On some Linux distributions they can be found in the pam-devel package, which may not be installed by default.

In addition, Usermin requires that a PAM service called usermin be created. On Linux, this typically involves creating the file /etc/pam.d/usermin containing : ` #%PAM-1.0<br />
 auth required pam_unix.so shadow nullok<br />
 account required pam_unix.so<br />
 password required pam_unix.so shadow nullok use_authtok<br />
 session required pam_unix.so<br />
`

However, if you install the RPM version this file will be created for you automatically.

Under OSX, the PAM service file apparently has to be slightly different. If you are running MacOS X, /etc/pam.d/usermin should instead contain : ` # login: auth account password session auth sufficient pam_opendirectory.so try_first_pass auth required pam_deny.so account required pam_permit.so password required pam_deny.so session required pam_permit.so `

On FreeBSD and Solaris, you probably will not need to edit the PAM config file /etc/pam.conf as it is setup to do Unix authentication for unknown services by default.

# Latest Version Links

If you want a URL that always downloads the latest version of Usermin, you can use one of the following :

Unix tar/gzip format<br />
<http://www.webmin.com/download/usermin-current.tar.gz>

RPM suitable for Redhat, Fedora, CentOS, SuSE or Mandrake Linux<br />
<http://www.webmin.com/download/rpm/usermin-current.rpm>

Debian package suitable for Debian, Ubuntu or other derived Linux<br />
<http://www.webmin.com/download/deb/usermin-current.deb>

  [1]: https://prdownloads.sourceforge.net/webadmin/usermin_1.860_all.deb
  [2]: https://sourceforge.net/project/showfiles.php?group_id=17457
  [3]: uchanges.html
  [4]: uwebmail.html
  [5]: https://download.webmin.com/jcameron-key.asc
  [6]: https://download.webmin.com/download/sigs/usermin-1.860.tar.gz-sig.asc
  [7]: http://www.cpan.org/
