---
title: "Windows"
date: 2017-10-02
categories: []
aliases: []
toc: false
draft: false
---
# Installing on Windows

Recent Webmin versions can be installed and run on Windows, although with limited functionality as not all the servers that Webmin configures (such as Samba, Sendmail and so on) are available. The steps to install on Windows from the source code are :

1. Install winzip or pkunzip so that you can extract the .zip file linked to above.
2. Install the latest versions of [ActiveState Perl][1] for Windows. Note that currently, only the 32-bit version works.
3. Install the [process.exe][2] program, a command-line tool for listing and killing Windows processes.
4. Verify that sc.exe is installed. This is part of Windows XP, and may be found in the Windows Resource Kit on other versions of the OS.
5. Install the [Win32::Daemon][3] Perl module. This can be done with the command ppm install Win32-Daemon .
6. Create the c:\\temp directory if it doesn't already exist.
7. After extracting the Webmin ZIP file to c:\\webmin , open a command shell window, cd to that directory and run perl setup.pl.
8. Answer all the questions as you would for a tar.gz install of Webmin, as documented [on this page][4].
9. Login to Webmin, go to Webmin -&gt; Webmin Configuration -&gt; Webmin Modules, and install the optional [MSI software discovery][5] module. This allows the Software Packages module to list all installed software.

# Windows Installer

Philipp Gï¿½hring has created a proper installer for Webmin on Windows, available from [WebminInstall.exe][6]. It requires that you install [ActiveState Perl][7] first, but is far simpler to install as it is packaged as a single .exe file.

The source code for the installer is available in [WebminInstaller.zip][8].

  [1]: http://www.activestate.com/Perl.plex?hdr=1
  [2]: http://retired.beyondlogic.org/solutions/processutil/processutil.htm
  [3]: http://code.activestate.com/ppm/Win32-Daemon/
  [4]: tgz.html
  [5]: https://download.webmin.com/download/modules/SW_Discovery.zip
  [6]: https://download.webmin.com/download/windows/WebminInstall.exe
  [7]: http://www.activestate.com/Perl.plex?hdr=1
  [8]: https://download.webmin.com/download/windows/WebminInstaller.zip
