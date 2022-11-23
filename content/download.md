---
title: "Downloading and Installing"
date: 2017-10-02
categories: []
aliases: []
toc: false
draft: false
---
<div id="main">
		




<p>The current Webmin distribution is available in various package formats
for download from:</p>

<p>
Unix tar/gzip format<br>
<a href="https://prdownloads.sourceforge.net/webadmin/webmin-2.000.tar.gz">https://prdownloads.sourceforge.net/webadmin/webmin-2.000.tar.gz</a> 15.1 MB</p>

<p>
RPM suitable for Redhat, Fedora, CentOS, SuSE or Mandrake Linux<br>
<a href="https://prdownloads.sourceforge.net/webadmin/webmin-2.000-1.noarch.rpm">https://prdownloads.sourceforge.net/webadmin/webmin-2.000-1.noarch.rpm</a> 16.3 MB</p>

<p>
Debian package suitable for Debian, Ubuntu or other derived Linux<br>
<a href="https://prdownloads.sourceforge.net/webadmin/webmin_2.000_all.deb">https://prdownloads.sourceforge.net/webadmin/webmin_2.000_all.deb</a> 14.8 MB</p>

<p>
Source RPM suitable for Redhat, Fedora, CentOS, SuSE or Mandrake Linux<br>
<a href="https://prdownloads.sourceforge.net/webadmin/webmin-2.000-1.src.rpm">https://prdownloads.sourceforge.net/webadmin/webmin-2.000-1.src.rpm</a> 15.1 MB</p>

<p>
Solaris package format<br>
<a href="https://prdownloads.sourceforge.net/webadmin/webmin-2.000.pkg.gz">https://prdownloads.sourceforge.net/webadmin/webmin-2.000.pkg.gz</a> 14.8 MB</p>

<p>
ZIP format suitable for Windows<br>
<a href="https://prdownloads.sourceforge.net/webadmin/webmin-2.000.zip">https://prdownloads.sourceforge.net/webadmin/webmin-2.000.zip</a> 19.3 MB</p>

<p>
Minimal version of Webmin, Unix tar/gzip format<br>
<a href="https://prdownloads.sourceforge.net/webadmin/webmin-2.000-minimal.tar.gz">https://prdownloads.sourceforge.net/webadmin/webmin-2.000-minimal.tar.gz</a> 1.9 MB</p>

<p>
A Webmin <a href="https://packages.gentoo.org/package/app-admin/webmin">package for Gentoo</a> is now part of their tree, and can be installed
with the command :<br>
<code>emerge webmin</code>
</p>

<p>
You can also download <a href="https://sourceforge.net/project/showfiles.php?group_id=17457">recent versions of Webmin</a>. Check out the 
<a href="changes.html">change log</a> for a list of new features in this version
and in older releases. </p>

<h1>PGP Verification</h1>

<p>
The <a href="https://download.webmin.com/jcameron-key.asc">PGP key</a> that the RPM packages for versions
1.040 and above were signed with is also available, so that you can verify
their integrity. Just add it to your GnuPG or PGP keyring and run the command
<tt>rpm --checksig webmin-2.000-1.noarch.rpm</tt>. If you are using RPM
version 4 or above, you will need to import the key into RPM&#39;s key database with
the command <tt>rpm --import jcameron-key.asc</tt>. Otherwise, you can run
<tt>gpg --import jcameron-key.asc</tt> as root. </p>

<p>The <a href="https://download.webmin.com/download/sigs/webmin-2.000.tar.gz-sig.asc">PGP signature</a> for the
latest tar/gzip version of Webmin is also available so that you can
verify the tar.gz file with the command
<tt>gpg --verify webmin-2.000.tar.gz-sig.asc webmin-2.000.tar.gz</tt>. </p>

<p>For Debian packages, you can also get the <a href="https://download.webmin.com/download/sigs/webmin_2.000_all.deb-sig.asc">PGP signature</a> for the latest
version, so that you can verify the package with the command 
<tt>gpg --verify webmin_2.000_all.deb-sig.asc webmin_2.000_all.deb</tt>. </p>

<h1>MD5 Verification</h1>

<p>
To verify that you have downloaded Webmin fully and correctly, you can use the
command <tt>md5sum</tt> on the RPM, Debian package or TAR file, and compare it against those listed below :
</p><table width="100%">
<tr> <th>Filename</th> <th>MD5 Checksum</th> </tr>
<tr>
<td>webmin_2.000_all.deb</td>
<td>294e3c587e2467c176e8e396526f784e</td>
</tr>
<tr>
<td>webmin-2.000-minimal.tar.gz</td>
<td>fda2463a9bbae3e8a372439ec4a0fafd</td>
</tr>
<tr>
<td>webmin-2.000-1.noarch.rpm</td>
<td>08e86e3fa4b15b8cb3a034923a7d7d04</td>
</tr>
<tr>
<td>webmin-2.000-1.src.rpm</td>
<td>a3ebfad6a51dc9fbef2c3cbe041c94e0</td>
</tr>
<tr>
<td>webmin-2.000.pkg.gz</td>
<td>866bb3007f062a501a6aec5965facde4</td>
</tr>
<tr>
<td>webmin-2.000.tar.gz</td>
<td>d28ae15b046fbf1d974f17688892eef6</td>
</tr>
<tr>
<td>webmin-2.000.zip</td>
<td>965eb0cf23c1c5856d681fd9a1a2f6d8</td>
</tr>

</table>


<h1>Minimal Package</h1>

<p>The minimal version of Webmin contains only the core API and programs, and a
few modules required for its basic operation. Most modules and all themes have
been left out, but can be easily added later. It can be useful if you only
need some of the programs functionality, and don&#39;t want to download the entire
multi-megabyte package. The 2.000 minimal tar.gz distribution can be downloaded
from <a href="https://prdownloads.sourceforge.net/webadmin/webmin-2.000-minimal.tar.gz">webmin-2.000-minimal.tar.gz</a> </p>

<p>
Additional documentation is available to assist with the installation of
Webmin and other required packages on the following operating systems :
<a href="solaris.html">Sun Solaris</a> and <a href="osx.html">Apple OS X</a>. </p>

<h1>Latest Version Links</h1>

<p>If you want a URL that always downloads the latest version of Webmin,
you can use one of the following :</p>

<p>
Unix tar/gzip format<br>
<a href="http://www.webmin.com/download/webmin-current.tar.gz">https://www.webmin.com/download/webmin-current.tar.gz</a></p>

<p>
RPM suitable for Redhat, Fedora, CentOS, SuSE or Mandrake Linux<br>
<a href="http://www.webmin.com/download/rpm/webmin-current.rpm">https://www.webmin.com/download/rpm/webmin-current.rpm</a></p>

<p>
Debian package suitable for Debian, Ubuntu or other derived Linux<br>
<a href="http://www.webmin.com/download/deb/webmin-current.deb">https://www.webmin.com/download/deb/webmin-current.deb</a></p>

<p>
Solaris package format<br>
<a href="http://www.webmin.com/download/solaris-pkg/webmin-current.pkg.gz">https://www.webmin.com/download/solaris-pkg/webmin-current.pkg.gz</a></p>

<!--
If you want to keep up with new versions of Webmin, an <a href=https://www.mewes.tv/rss/webmin.rss>RSS feed</a> is available. If you don't get an image from the RSS feed directly, one is available <a href=https://www.mewes.tv/rss/webmin_icon.png>here</a>. <p>
-->

			</div>
