---
title: "Command Shell"
subSection: "Tools"
date: 2023-08-09
weight: 535
---

### Intro

One problem with SSH/Telnet is its inability to connect if there is a firewall of some kind blocking connections to your system. Even though the rest of Webmin may work fine using HTTP connections, the ports used by the applet may not be available. Even though it is possible to do almost everything in Webmin that you can do at the command line, sometimes it is useful to have a shell prompt for executing Unix commands. 

### About the module
To get around firewall restrictions that prevent an SSH or telnet connection, you can use the Command Shell module, found under the Tools category. It allows you to enter shell commands into the field next to the **Execute command** button, which are run when the button is clicked or the return key pressed. All output from the command is displayed in the **Command history** section at the top of the page. 

You can re-run old commands by selecting them from the menu next to the **Execute previous command** button and then clicking it. If the command history becomes too large, it can be wiped using the **Clear history** button. This will not effect the menu of previously run commands though. 

The module's biggest limitation is that interactive commands like `vi`, `passwd` and `telnet` cannot be run. There is no support for providing input to a command once it has started, so you are limited to non-interactive programs like `cp`, `ls` and `rm`.


[![](/images/docs/screenshots/modules/light/command-shell.png "Command Shell Screenshot")](/images/docs/screenshots/modules/light/command-shell.png)

For using interactive commands, you will need to use a new full-featured [Terminal](/docs/modules/terminal) module instead.