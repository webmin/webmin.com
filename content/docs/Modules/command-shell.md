---
title: "Command Shell"
subSection: "Tools"
date: 2023-04-01
weight: 535
---

One problem with the [[SSH Login]] module is its inability to connect if there is a firewall of some kind blocking telnet or SSH connections to your system. Even though the rest of Webmin may work fine using HTTP connections, the ports used by the applet may not be available. Even though it is possible to do almost everything in Webmin that you can do at the command line, sometimes it is useful to have a shell prompt for executing Unix commands. 

To get around firewall restrictions that prevent an SSH or telnet connection, you can use the Command Shell module, found under the Others category. It allows you to enter shell commands into the field next to the *Execute command* button, which are run when the button is clicked or the return key pressed. All output from the command is displayed in the '''Command history''' section at the top of the page. 

You can re-run old commands by selecting them from the menu next to the '''Execute previous command''' button and then clicking it. If the command history becomes too large, it can be wiped using the '''Clear history''' button. This will not effect the menu of previously run commands though. 

The module's biggest limitation is that interactive commands like vi, passwd and telnet cannot be run. There is no support for providing input to a command once it has started, so you are limited to non-interactive programs like cp, ls and rm. 

[[File:Command Shell.png|frame|none|Command Shell executing <tt>ps ax <nowiki>|</nowiki> grep webmin</tt>]]

=== The Shell In A Box module ===
This module combines the best features of both SSH/Telnet Login and Command Shell - it allows you to make a fully interactive login that is tunneled though an HTTP connection, thus avoiding any firewall restrictions. It is not included as one of the standard Webmin modules, but you can download it from http://www.webmin.com/download/modules/shellinabox.wbm.gz. See chapter [[Webmin Configuration]] for instructions on how to install it. When you enter the module, its main page is taken up entirely by a Java applet. To start the login process, click the '''Connect''' 
button in the lower right-hand corner. A normal login: prompt should appear at the top of the window, allowing you to enter a username and password to login and get a shell prompt. When you are done, just click the '''Disconnect''' button to logout. 

The module's biggest disadvantage is that it uses compiled Linux x86 code, and so cannot be run on other Unix systems or on non-PC hardware. It also uses up a lot of CPU time on the server due to the high number and frequency of HTTP requests that it makes.

[[Category:Others]]
