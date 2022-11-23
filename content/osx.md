---
title: "Osx"
date: 2017-10-02
categories: []
aliases: []
toc: false
draft: false
---
# Installing Webmin and Usermin on OS X

These instructions, contributed by Kevin Capwell, will allow you to install webmin on any Apple Macintosh OS X server. The version that I was using is as follows:

Server: 10.3<br />
 Perl: 5.8.1-RC3 to see version open terminal cd /usr/bin then type perl --version<br />
 OpenSSL: 0.9.7b to see version open terminal cd /usr/bin then type OpenSSL version<br />

### INSTALL DEVELOPER TOOLS

 1. Go to https://connect.apple.com/ and become a member of ADC - it's free!<br />
 2. Click on 'Download Software'.<br />
 3. Click on 'Developer Tools'.<br />
 4. Download the Xcode Tools v1.0 and 1.0.1 update. As of this writing download the Xcode CD is in 20 parts, however, Xcode should come with your box copy of 10.3.<br />
 5. Click twice on the Xcode.dmg icon.<br />
 6. Click twice on the 'Developer' package.<br />
 7. Enter your administrator password when you are prompted.<br />
 8. After selecting the drive to install the developer tools, then click the 'Customize' button. Make sure the check the BSD SDK option.<br />
 9. Perform the install.<br />

### INSTALL THE NET\_SSLEAY.PM

 1. Download and install the Perl Mod "Net::SSLeay"<br />
 2. Go to the web page <http://www.cpan.org/modules/by-module/Net/><br />
 3. Download the 'Net\_SSLeay.pm-1.25.tar.gz' this version was tested with the perl and openssh that are installed with 10.3. In my case this is Perl 5.8.1 and OpenSSL 0.9.7b (to see your versions look at the commands above)<br />
 4. I copied the Net\_SSLeay.pm-1.25.tar.gz to /usr/local<br />
 5. tar -zxvf Net\_ssleay.pm-1.25.tar.gz<br />
 6. cd Net\_ssleay.pm-1.25<br />
 7. type 'perl Makefile.PL -t' (without the quotes builds and tests) You should see a successful install message<br />
 8. Issue the 'sudo -s' command (without the quotes) - enter your admin password. You should now see a root# prompt at the beginning of each line you type.<br />
 9. Type 'make install' (without the quotes).<br />
 10. If the command "perl -e 'use Net::ssleay'" (without the "" quotes) doesn't output any error message, then the ssl support that webmin needs is properly installed.<br />

### INSTALL THE AUTHEN\_PAM.PM

 1. Download and install the Perl Mod "Authen::PAM"<br />
 2. Go to the web page <http://www.cpan.org/modules/by-module/Authen/><br />
 3. Download the 'Authen-PAM-0.15.tar.gz' file<br />
 4. I copied the Authen-PAM-0.15.tar.gz to /usr/local<br />
 5. tar -zxvf Authen-PAM-0.15.tar.gz<br />
 6. cd Authen-PAM-0.15<br />
 7. type 'perl Makefile.PL -t' (without the quotes builds and tests) You should see a successful install message<br />
 8. Issue the 'sudo -s' command (without the quotes) - enter your admin password. You should now see a root# prompt at the beginning of each line you type.<br />
 9. Type 'make install' (without the quotes).<br />

### INSTALL WEBMIN

 1. Go to <http://www.webmin.com/download.html> download the current Unix tar/gzip version.<br />
 2. I copied the webmin-2.000.tar.gz to /usr/local<br />
 3. tar -zxvf webmin-2.000.tar.gz<br />
 4. cd webmin-2.000<br />
 5. type './setup.sh' (without the quotes).<br />
 6. Accept defaults for config and log file directory (one return for each will do).<br />
 7. Accept the default path to perl (it should test ok).<br />
 8. Accept the default port for webmin (port 10000).<br />
 9. Login name can be anything you want (the default is admin).<br />
 10. Login password can be anything you want. Then you will be asked to verify the password.<br />
 11. If you followed the instructions above correctly you will be prompted with 'Use SSL (y/n):' you can now answer Y. This will encrypt your connections with the Xserve.<br />
 12. Answer Y to Start Webmin at boot time.<br />
 13. After the install is complete, copy the file pam-webmin to /etc/pam.d/webmin and re-start Webmin with /etc/webmin/stop ; /etc/webmin/start. This will enable PAM authentication, if you need it.<br />

If everything installs correctly you will see 'Webmin has been installed and started successfully. Use your web browser to go to:

https://&lt;your server name or IP address&gt;:10000

and login with the name and password that you entered previously.

### INSTALL USERMIN

 1. Go to <http://www.webmin.com/udownload.html> download the current Unix tar/gzip version.<br />
 2. I copied the usermin-1.860.tar.gz to /usr/local<br />
 3. tar -zxvf usermin-1.860.tar.gz<br />
 4. cd usermin-1.860<br />
 5. type './setup.sh' (without the quotes).<br />
 6. Accept defaults for config and log file directory (one return for each will do).<br />
 7. Accept the default path to perl (it should test ok).<br />
 8. Accept the default port for webmin (port 20000).<br />
 9. If you followed the instructions above correctly you will be prompted with 'Use SSL (y/n):' you can now answer Y. This will encrypt your connections with the Xserve.<br />
 10. After the install is complete, copy the file pam-usermin to /etc/pam.d/usermin and re-start Usermin with /etc/webmin/stop ; /etc/webmin/start. This will enable PAM authentication for all users who login.<br />
 Usermin is useful for changing passwords and (optionally) reading mail. It is a terrific user tool with security built in. I highly recommend that you experiment with it for ease of use with your users.<br />
