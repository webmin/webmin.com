---
title: "SSL Tunnels"
date: 2023-09-13
weight: 745
---

### About
On this page the `stunnel` program and the Webmin module for setting it up are documented. 

### Intro
SSL is a protocol for encrypting data in a TCP connection as it travels over the network. It was originally developed to protect the traffic between web browsers and servers, but can be used to encrypt any kind of data stream that would normally be sent via the TCP protocol. 

The SSL protocol allows clients and servers to authenticate themselves to each other, so that a client can be sure it is really connecting to the host it thinks it is. This is done using certificates which are issued by a certificate authority recognized by the client (so that they can be verified) and associated with a particular hostname. Without certificates, an attacker could re-direct an SSL connection to his own server and capture sensitive information from a client that thinks it is talking to the real server. 

Any data that travels across the Internet un-encrypted can be captured and read by an attacker with access to one of the networks that it passes through. Even data traveling between a client and server system on a LAN can be easily listening in on. When you connect to a telnet, FTP or POP3 server your password is sent over the network and thus can be captured by an attacker. 

SSL can be used to protect data in these kinds of situations, but only if both the client and server support it. Most web browsers and mail clients can make SSL-encrypted HTTP, POP3 and IMAP connections, but not all web and POP3 servers can accept them. POP3 in particular is hard to protect, because the standard server that comes with most Unix systems does not support SSL at all. Fortunately though there is a solution - `stunnel`. 

`stunnel` is a simple program that converts an un-encrypted connection into an SSL-encrypted one. It is typically set up to be run from a super-server like `inetd` or `xinetd`, and then run some other program like the POP3 server that does not support SSL. This design allows it to protect any server that is normally run from `inetd`, such as telnet, NNTP and IMAP servers. 

Not all servers can be usefully protected with encryption though, because no client exists to use them in SSL mode. For example, I have never heard of a telnet or FTP client that can use SSL, because the common SSH package already allows encrypted remote logins and files transfers.

### The SSL Tunnels module
This Webmin module makes it easy to set up super-server services that run `stunnel` to start some server program. Even though this can be done manually using the Internet Services module (covered in chapter 15), this one is specifically designed for setting up and configuring `stunnel`. It automatically detects if you have `inetd` and/or `xinetd` installed, reads their configurations to check for existing SSL tunnels and adds to them when you create 
a new tunnel. If both are installed, new SSL tunnels are added to the `xinetd` configuration as it is the superior of the two in my opinion. 

The module can be found in Webmin under the Networking category on the main menu. When you click on its icon a page like the one shown below will be displayed, listing all existing tunnels. At the bottom of the page is a button labeled **Apply Changes** which when clicked re-starts `inetd` or `xinetd`, thus making the current configuration active. 

If the program cannot be found on your server, an error message like **The stunnel command /usr/bin/stunnel was not found on your system** will be displayed instead. This can indicate that it is not installed or that the module is looking in the wrong directory for the `stunnel` command. In the latter case you can adjust the module's configuration, as explained in the *Configuring the SSL Tunnels module* section later on the page.

However, if the program really isn't installed, check your operating system repository or website to see if a package for `stunnel` exists. If so, you can install it using the [Software Packages](/docs/modules/software-packages) module. Otherwise you will need to download the source code from [stunnel.org](www.stunnel.org), compile and install it. 

### Creating and editing SSL Tunnels
If you want to protect some service with SSL encryption you will need to create a new SSL tunnel. Two different types of tunnel can be created - one that runs a server process like `inetd` does, or one that connects to another host and port in non-SSL mode. The latter is simpler if you already have the server running in non-encrypted mode, but will be slightly slower due to the need to make an extra network connection. 

Before you can create a tunnel you must decide on a port number for it to use. For some protocols there is a standard port number - for example _995_ is often used for encrypted POP3, and _993_ is used for encrypted IMAP. Of course, the port number you choose must not be in use by any other `inetd` service or server on your system. 

The steps to follow to create a tunnel are:
1. On the module's main page, click on the **Add a new SSL tunnel** link above or below the table of existing tunnels.
2. In the **Service name** field enter a unique name for this tunnel's `inetd` service, such as _ssl-pop3_. 
3. In the **TCP port** field enter the port number that the tunnel should accept connections on, such as _993_. 
4. Unless you want the tunnel to be temporarily disabled, set the **Active?** field to **Yes**. 
5. If this tunnel should run a program like a POP3 server, select the **Run `inetd` style program** option. In the **Path to program** field enter the full path to the server, such as `/usr/sbin/ipop3d`.  In the **with arguments** field enter the program name followed by any command line arguments, such as _ipop3d_. As with services created in the Internet Services and Protocols module you must include the program name as the first argument. 
6. Alternately, if this tunnel should connect to some existing server, select the **Connect to remote host** option. Then enter the host to connect to (such as _localhost_) and the port number to use (such as _110_) in the **Remote hostname** and **Remote port** fields respectively. 
7. The **SSL certificate and key file** field determines which SSL certificate will be presented to clients for this connection.  If you have generated your own self-signed or real certificate with the openssl command, select the **Use cert in file** option and enter the full path to the file in the adjacent text box.  Otherwise you can choose **Use Webmin's cert** to use the same certificate that Webmin uses in SSL mode, or **Compiled-in default** to use the certificate that comes with the stunnel software. If you do generate your own certificate, make sure that the file contains both the private key and cert in PEM format. 
8. When connecting to a remote host, stunnel can be configured to behave in the opposite way to normal. Instead of accepting an SSL connection and decrypting it, you can instead choose to have it accept a normal connection and encrypt it for connecting to a different SSL-capable server. This mode can be enabled by selecting **Accept normal and connect with SSL** in the **Tunnel mode** field. It can be useful if neither your client or server programs support SSL, but you still want data between them to be encrypted. stunnel could be set up on the client system in this mode, configured to connect to another stunnel service on the server system that uses the **Accept SSL and connect normally** mode. 
9. Hit the **Create** button at the bottom of the page to add the new service. 
10. After your have been returned to the module's main page, click on **Apply Changes** to make the new tunnel active. 

All details of an existing tunnel can be edited by clicking on its name in the list on the module's main page. This will bring up an editing form with all the fields already filled in. You can either make changes and hit the **Save** button to record them, or click on **Delete** to completely remove the tunnel. Ether way, the **Apply Changes** button on the main page must be clicked to make the changes active.
