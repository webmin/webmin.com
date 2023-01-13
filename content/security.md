---
title: "Security"
date: 2023-01-13
---

## Work in progress ...

This page lists security problems found in Webmin and Usermin, versions affected and recommended solutions.

Found a new security bug? Report it at [security@webmin.com][1].

**Webmin 1.995 and below - XSS vulnerability in the HTTP Tunnel module**<br />
If a less-privileged Webmin user is given permission to edit the configuration of the HTTP Tunnel module, he could use this to introduce a vulnerability that captures cookies belonging to other Webmin users that use the module. Thanks to [BLACK MENACE][2] and [PYBRO][3] for reporting this issue.

**Webmin 1.995 and Usermin 1.850 and below - XSS vulnerabiliy in the Read Mail module**<br />
An HTML email crafted by an attacker could capture browser cookies when opened. Thanks to [ly1g3][4] for reporting this bug.

**Webmin 1.991 and below - privilege escalation exploit (CVE-2022-30708)**<br />
Less privileged Webmin users (excluding those created by Virtualmin and Cloudmin) can modify arbitrary files with root privileges, and so run commands as root. All systems with additional untrusted Webmin users should upgrade immediately.

 Thanks to [esp0xdeadbeef][5] and [V1s3r1on][6] for finding and reporting this issue!

**Webmin 1.984 and below - File Manager privilege exploit (CVE-2022-0824 and CVE-2022-0829)**<br />
Less privileged Webmin users who do not have any File Manager module restrictions configured can access files with root privileges, if using the default Authentic theme. All systems with additional untrusted Webmin users should upgrade immediately. Note that Virtualmin systems are not effected by this bug, due to the way domain owner Webmin users are configured.

 Thanks to Faisal Fs ([faisalfs10x][7]) from [NetbyteSEC][8] for finding and reporting this issue!

**Virtualmin Procmail wrapper version 1.0 - Privilege escalation exploit.**<br />
Version 1.0 of the procmail-wrapper package installed with Virtualmin has a vulnerability that can be used by anyone with SSH access to gain root privileges. To prevent this, all Virtualmin users should upgrade to version 1.1 or later immediately.

**Webmin 1.973 and below - XSS vulnerabilities if Webmin is installed using the setup.pl script (CVE-2021-31760, CVE-2021-31761 and CVE-2021-31762)**<br />
If Webmin is installed using the non-recommended setup.pl script, checking for unknown referers is not enabled by default. This opens the system up to XSS and CSRF attacks using malicious links.<br />
 Fortunately the standard RPM, Deb, TAR and Solaris packages do not use this script and so are not vulnerable. If you did install using the setup.pl script, the vulnerability can be fixed by adding the line referers\_none=1 to /etc/webmin/config .

 Thanks to Meshal ( Mesh3l\_911 ) [@Mesh3l\_911][9] and Mohammed ( Z0ldyck ) [@electronicbots][10] for finding and reporting this issue!

**Webmin 1.941 and below - XSS vulnerability in the Command Shell module (CVE-2020-8820 and CVE-2020-8821)**<br />
A user with privileges to create custom commands could exploit other users via unescaped HTML. Thanks to Mauro Cï¿½seres for reporting this and the following issue.

**Webmin 1.941 and below - XSS vulnerability in the Read Mail module (CVE-2020-12670)**<br />
Saving a malicious HTML attachment could trigger and XSS vulnerability.

**Webmin 1.882 to 1.921 - Remote Command Execution (CVE-2019-15231)**<br />
Webmin releases between these versions contain a vulernability that allows remote command execution! Version 1.890 is vulnerable in a default install and should be upgraded immediately - other versions are only vulnerable if changing of expired passwords is enabled, which is not the case by default. <br />
 Either way, upgrading to version 1.930 is strongly recommended. Alternately, if running versions 1.900 to 1.920, edit /etc/webmin/miniserv.conf, remove the passwd\_mode= line, then run /etc/webmin/restart.<br />
 For more details, see our [What Happened][11] page.

**Webmin 1.900 - Remote Command Execution (Metasploit)**<br />
This is NOT a workable exploit as it requires that the attacker already know the root password. Hence there is no fix for it in Webmin.

**Malicious HTTP headers in downloaded URLs**<br />
 Affects Webmin versions up to 1.860, if the Upload and Download or File Manager module is used to fetch an untrusted URL. If a Webmin user downloads a file from a malicious URL, HTTP headers returned can be used exploit an XSS vulnerability. Thanks to independent security researcher, John Page aka hyp3rlinx, who reported this vulnerability to Beyond Security's SecuriTeam Secure Disclosure program.

**Authentic theme configuration page vulnerability**<br />
 Affects Webmin versions up to 1.800, but is only an issue if your system has un-trusted users with Webmin access and is using the new Authentic theme. A non-root Webmin user could use the theme configuration page to execute commands as root.

**Authentic theme remote access vulnerability**<br />
 Affects Webmin versions up to 1.800, but only if the Authentic theme is enabled globally.<br />
An attacker could execute commands remotely as root, as long as there was no firewall blocking access to Webmin's port 10000.

**XSS (cross-site scripting) vulnerability in xmlrpc.cgi**<br />
 Affects Webmin versions up to 1.750.<br />
A malicious website could create links or Javascript referencing the xmlrpc.cgi script, triggered when a user logged into Webmin visits the attacking site. Thanks to Peter Allor from IBM for finding and reporting this issue (CVE-2015-1990).

**Read Mail module vulerable to malicious links**<br />
 Affects Webmin versions up to 1.720.<br />
If un-trusted users have both SSH access and the ability to use Webmin's Read Mail module (as is the case for Virtualmin domain owners), a malicious link could be created to allow reading any file on the system - even those owned by root. Thanks to Patrick William from RACK911 labs for finding this bug.

**Shellshock vulnerability**<br />
 Affects Webmin versions up to 1.700.<br />
If your bash shell is vulnerable to shellshock, it can be exploited by attackers who have a Webmin login to run arbitrary commands as root. Updating to version 1.710 (or updating bash) will fix this issue.

**Yet another XSS (cross-site scripting) security hole**<br />
 Affects Webmin versions up to 1.590.<br />
A malicious website could create links or Javascript referencing the File Manager module that allowed execution of arbitrary commands via Webmin when the website is viewed by the victim. See [CERT vulnerability note VU#788478][12] for more details. Thanks to Jared Allar from the American Information Security Group for reporting this problem.

**Referer checks don't include port**<br />
 Affects Webmin versions up to 1.590.<br />
If an attacker has control over http://example.com/ , he could create a page with malicious Javascript that could take over a Webmin session at https://example.com:10000/ when http://example.com/ is viewed by the victim. Thanks to Marcin Teodorczyk for finding this issue.

**Another XSS (cross-site scripting) security hole**<br />
 Affects Webmin versions up to 1.540.<br />
This vulnerability can be triggered if an attacker changes his Unix username via a tool like chfn, and a page listing usernames is then viewed by the root user in Webmin. Thanks to Javier Bassi for reporting this bug.

**Unsafe file writes in Virtualmin**<br />
 Affects Virtualmin versions before 3.70.<br />
This bug allows a virtual server owner to read or write to arbitrary files on the system by creating malicious symbolic links and then having Virtualmin perform operations on those links. Upgrading to version 3.70 is strongly recommended if your system has un-trusted domain owners.

**XSS (cross-site scripting) security hole**<br />
 Affects Webmin versions up to 1.390, and Usermin up to 1.320.<br />
This attack could open users who visit un-trusted websites while having Webmin open in the same browser up to having their session cookie captured, which could then allow an attacker to login to Webmin without a password. The quick fix is to go to the **Webmin Configuration** module, click on the **Trusted Referers** icon, set **Referrer checking enabled?** to **Yes**, and un-check the box **Trust links from unknown referrers**. Webmin 1.400 and Usermin 1.330 will make these settings the defaults.

**Windows-only command execution bug**<br />
 Affects Webmin on Windows only, versions before 1.380.<br />
Any user logged into Webmin can execute any command using special URL parameters. This could be used by less-privileged Webmin users to raise their level of access.<br />
 Thanks for Keigo Yamazaki of Little eArth Corporation for finding this bug.

**pam\_login.cgi XSS bug**<br />
 Affects Webmin versions below 1.347, and Usermin versions below 1.277, on any operating system.<br />
A malicious link to Webmin's pam\_login.cgi script can be used to execute Javascript within the Webmin server context, and perhaps steal session cookies.

**chooser.cgi XSS bug**<br />
 Affects Webmin versions below 1.330, and Usermin versions below 1.260, on any operating system.<br />
When using Webmin or Usermin to browse files on a system that were created by an attacker, a specially crafted filename could be used to inject arbitrary Javascript into the browser.

**Remote source code access and XSS bug**<br />
 Affects Webmin versions below 1.296, and Usermin versions below 1.226, on any operating system.<br />
An attacker can view the source code of Webmin CGI and Perl programs using a specially crafted URL. Because the source code for Webmin is freely available, this issue should only be of concern to sites that have custom modules for which they want the source to remain hidden.<br />
 The XSS bug makes use of a similar technique to craft a URL that can allow arbitrary Javascript to be executed in the user's browser if a malicious link is clicked on.<br />
 Thanks for Keigo Yamazaki of Little eArth Corporation for finding this bug.

**Artbitrary remote file access**<br />
 Affects Webmin versions below 1.290, and Usermin versions below 1.220, on any operating system.<br />
An attacker without a login to Webmin can read the contents of any file on the server using a specially crafted URL. All users should upgrade to version 1.290 as soon as possible, or setup IP access control in Webmin.<br />
 Thanks to Kenny Chen for bringing this to my attention.

**Windows artbitrary file access**<br />
 Affects Webmin versions below 1.280, when running on a Windows server.<br />
If running Webmin on Windows, an attacker can remotely view the contents of any file on your system using a specially crafted URL. This does not affect other operating systems, but if you use Webmin on Windows you should upgrade to version 1.280 or later.<br />
 Thanks to Keigo Yamazaki of Little eArth Corporation for discovering this bug.

**Perl syslog input attack**<br />
 Affects Webmin versions below 1.250 and Usermin versions below 1.180, with syslog logging enabled.<br />
When logging of failing login attempts via syslog is enabled, an attacker can crash and possibly take over the Webmin webserver, due to un-checked input being passed to Perl's syslog function. Upgrading to the latest release of Webmin is recommended.<br />
 Thanks to Jack at Dyad Security for reporting this problem to me.

**'Full PAM conversations' mode remote attack**<br />
 Affects Webmin versions between 1.200 and 1.220 and Usermin version between 1.130 and 1.150, when the option **Support full PAM conversations?** is enabled on the **Authentication** page.<br />
When this option is enabled in Webmin or Usermin, an attacker can gain remote access to Webmin without needing to supply a valid login or password. Fortunately this option is not enabled by default and is rarely used unless you have a PAM setup that requires more than just a username and password, but upgrading is advised anyway. <br />
 Thanks to Keigo Yamazaki of Little eArth Corporation and [JPCERT/CC][13] for discovering and notifying me of this bug.

**Brute force password guessing attack**<br />
 Affects Webmin versions below 1.175 and Usermin version below 1.104<br />
All versions of Webmin below 1.175 do not have password timeouts turned on by default, so an attacker can try every possible password for the root or admin user until he finds the correct one.

 The solution is to enable password timeouts, so that repeated attempts to login as the same user will become progressively slower. This can be done by following these steps :

* Go to the **Webmin Configuration** module.
* Click on the **Authentication** icon.
* Select the **Enable password timeouts** button.
* Click the **Save** button at the bottom of the page.

 This problem is also present in Usermin, and can be prevented by following the same steps in the **Usermin Configuration** module.

**Usermin cross-site scripting vulnerability**<br />
 Affects Usermin versions below 1.080<br />
When viewing HTML email, several potentially dangerous types of URLs can be passed through. This can be used to perform malicious actions like executing commands as the logged-in Usermin user. Can only be resolved by upgrading to Webmin 1.150 or Usermin 1.080.

**Module configurations are visible**<br />
 Affects Webmin versions below 1.150<br />
Even if a Webmin user does not have access to a module, he can still view it's Module Config page by entering a URL that calls config.cgi with the module name as a parameter. This can only be resolved by upgrading to version 1.150 or later.

**Account lockout attack**<br />
 Affects Webmin versions below 1.150 and Usermin versions below 1.080<br />
By sending a specially constructed password, an attacker can lock out other users if password timeouts are enabled. This can only be resolved by upgrading to Webmin 1.150 or Usermin 1.080.

  [1]: mailto:security@webmin.com
  [2]: https://github.com/bl4ckmenace
  [3]: https://github.com/Pybro09
  [4]: https://github.com/ly1g3
  [5]: https://github.com/esp0xdeadbeef
  [6]: https://github.com/V1s3r1on
  [7]: https://github.com/faisalfs10x/
  [8]: https://www.netbytesec.com/
  [9]: https://twitter.com/Mesh3l_911
  [10]: https://twitter.com/electronicbots
  [11]: exploit.html
  [12]: http://www.kb.cert.org/vuls/id/788478
  [13]: http://www.jpcert.or.jp/
