---
title: "PPP Dialin Server"
date: 2023-09-13
weight: 705
---

### About
This page covers the process of setting up a Linux system with an attached modem as a dial-in server using the **point to point protocol** (PPP), so that other computers can dial up to it and access connected networks. 

### Intro
Any Linux system with a modem attached can be configured so that other computers can dial up to it and start a PPP session, giving them TCP/IP access to the system and any networks that it is connected 
to. This allows it to act like a miniature ISP, and in fact some small ISPs have been run using Linux systems with multiple serial port cards as access servers. 

Two separate programs are responsible for different parts of the dial-in service. The first is `mgetty`, which communicates on a serial port with an attached modem and instructs it to answer the phone. Once the server and client modems are connected, `mgetty` displays a text login prompt and waits for either a username or the start of a PPP session. A client can login in text mode and get a Unix shell prompt without needing to start a PPP session at all, but this is rarely done these days. Once the client disconnects or logs out, `mgetty` hangs up the modem and waits for a new connection. 

To install `mgetty` you may use the [Software Packages](/docs/modules/software-packages) module.

Because most clients start a PPP session as soon as they connect, `mgetty` is usually configured to run the separate `pppd` program if it detects a PPP connection. This creates a ppp network interface on the server, authenticates the client, assigns an IP address and starts sending and receiving data using the PPP protocol. The assigned IP address and other configuration options are using set on a per-serial-port basis, so that you can have multiple modems and support several simultaneous clients with different addresses. 

The PPP Dialin Server module allows you to setup both `mgetty` and `pppd` so that clients can dial in and start PPP sessions. When you enter it from the Networking category the main page simply shows four icons, under which are the actual configurable options. 

Currently, the PPP Dialin Server module can only be used on Linux and Solaris systems, even though `mgetty` is available on some other versions of Unix. If neither of the programs that it configures are installed, the main page will display an error message - however, all Linux distributions include packages for `pppd` and `mgetty` on their CDs or websites. If only `mgetty` is installed, you can use the **Serial Port Configuration** and **Caller ID Access** features. Conversely, if only `pppd` is installed, you can only access the **PPP Options** and **PPP Accounts** pages. 

When you use the module to set up `mgetty` to answer calls on a serial port, an entry is added to the `/etc/inittab` file so that init will run the `mgetty` process at boot time, and re-run it as necessary. You will be able to see this entry in the [Bootup and Shutdown](/docs/modules/bootup-and-shutdown) module but should not edit it there unless you know what you are doing. 

Even though this chapter was written with Linux in mind, the module behaves almost identically on Solaris. The only difference is the names of the serial port device files - whereas `/dev/ttyS0` is the first serial port on Linux, Solaris would use `/dev/term/a` instead.

### Configuring a PPP server
Before you can set a system up to allow clients to connect with PPP, it must either have a modem attached to a serial port, or be connected via a null-modem cable to another machine. Internal modems that emulate a serial port can be used as well, although they are not recommended as they do not have easily visible LEDs to indicate if the modem is connected, transmitting and so on. USB modems should work, as long as they are recognized by the kernel - however, they will probably use a special device file. Modems that require special drivers to operate (commonly known as Winmodems) cannot be used at all, unless there is a driver for the modem available on Linux. 

Naturally, any modem must be connected to a phone line. Because your system will be configured to answer the phone after a few rings, the phone line should not be used for anything else - otherwise, voice callers will have their calls answered by the modem, which is not very friendly. 

Once all the hardware is ready, the steps to set your system up as a PPP server are: 
1. On the main page of the module, click on the **Serial Port Configuration** icon. This will take you to a page listing any existing ports that have been configured for PPP or voicemail. 
2. Click on the **Add a new serial port** link, which will bring up the port configuration form shown in the first screenshot below. 
3. Set the **Serial device** to the port on which your modem or null-modem cable is connected. **Serial port 1** corresponds to the device file `/dev/ttyS0`, and so on. For modems on serial devices not starting with `/dev/ttyS` (such as USB modems), select the **Other device** option and enter the full device file path into the text field next to the menu. 
4. Set the **Type** option to either **Direct connection** (for a system connected via null-modem cable), or **Modem** (for an actual dial-in modem). 
5. The **Port** speed field should be set to the baud rate that the modem or null-modem connection will use. This must be one of the standard speeds, such as _57600_ or _33600_. 
6. In the **Answer** after field, enter the number of rings that you want `mgetty` to wait for before answering the phone. If the phone line your modem is on will be also used for receiving voice calls, you could set this to something large like _20_ to give yourself plenty of time to answer the phone before the modem does. Naturally, this option has no meaning for null-modem connections. 
7. Click the **Create** button. A new entry will be added to the `/etc/inittab` file, and you will be returned to the serial ports list. 
8. Click **Apply Configuration** to activate `mgetty` on the new port. Phone calls to the line your modem is on should now be answered after the configured number of rings. If you only care about text-only clients, then nothing more needs to be done - they will be able to dial up, authenticate at the login prompt and execute shell commands. 
9. To set up PPP, click on the **PPP Options** icon back on the main page. This will take you to the form shown in the second image below, where you can set options that will apply to all PPP connections. 
10. Unless you want clients to login in text mode and start the `pppd` command manually, it is best to set the **Automatically detect PPP connections on serial ports?** option to **Yes**.  With this enabled, `mgetty` will detect that the client wants to start a PPP session when the server is waiting for a login prompt, and run `pppd` automatically. 
11. In the **PPP IP Address** fields, enter the IP address that you want the server's end of the connection to use (the **Local IP**) and the address for the client's end of the connection (the **Remote IP**). Normally these addresses will not be on your local LAN, but on a different subnet. Other systems on the network should be configured to route traffic for the client's address to your system, so that they can communicate.  If no addresses are specified, then the PPP server will use whatever addresses are supplied by the client. This might make sense when connecting two machines via null-modem, but will not work with most dialup clients. It is possible to assign the client an IP address that is within the range of the local LAN, by turning on the **Create proxy ARP entry?** option. If this is enabled, enter an unused LAN IP address into the **Remote IP** field and your system's current Ethernet IP into the **Local IP** field. 
12. Set the **Control lines mode** field to **Local** for a null-modem connection, or **Modem** if there is a real modem connected to the serial port. 
13. Unless you are setting up a null-modem connection, clients should be forced to authenticate to prevent potential attackers from connecting. To turn on authentication, set the **Require authentication?** field to **Yes**. To turn it off totally for null-modem use, set the field to **No**. To set usernames and passwords for clients to authenticate against, see the **Managing PPP accounts** section below. 
14. To disconnect clients that have been idle for a long period, enter a number of seconds into the **Idle time before disconnect** field. 
15. Enter the IP addresses of any DNS servers on your network into the **DNS servers for clients** field. Client operating systems like Windows will use them automatically, which simplifies their configuration. 
16. Finally, click the **Save** button. Clients should now be able to dial in, establish a PPP session and access your system and network! 

If your system is going to have multiple simultaneous PPP clients connected, then you will need to set different options for each serial port. In particular, each client must have a different remote IP address, although the local address can be re-used. 

To set up different PPP options for each serial port, the steps to follow are: 
1. On the module's main page, click on the **PPP Options** icon.  Change the **PPP IP Addresses** field back to **From client**, and set any other options that you want set on a per-port basis back to their defaults as well. 
2. Go back to the main page, click on **Serial Port Configuration** and then on the **Edit** link under **Port PPP Config** for the serial port that you want to set options for. This will take you to the per-port options page, which is very similar to the global PPP options form.
3. Enter remote and local IP addresses that you want PPP clients connecting on this port to be assigned, and change any other options that have not been set on the global PPP options page. 
4. When done, click the **Save** button. Clients connecting on the configured port will use the new options from now on. 

The easiest way to stop your system from acting as a PPP server is to simply remove the serial port configuration entry for your modem. If you have multiple modems attached, the steps below can be used to disable one without any effect on the others: 

1. On the main page, click on **Serial Port Configuration** and then on the device name of the port with the attached modem. 
2. On the port options page, click the **Delete** button in the lower-right corner. The appropriate entry will be removed from the `/etc/inittab` file, and you will be returned to the list of enabled ports. 
3. Click the **Apply Configuration** button to make the change active. From now on, your system will no longer answer incoming phone calls or communicate with another computer attached by a null-modem cable.

### Managing PPP accounts
If you enable dial-in access to your system, you should force all clients to authenticate themselves by turning on the 'Require authentication?' option on the **PPP Options** page. Even if you think that your server doesn't need to authenticate clients because only you know the phone number of the line your modem is on, it is still a good idea to enable it in case someone stumbles across the number by accident - or in case a 'war dialer' trying out hundreds of phone numbers in search of insecure servers finds it. Once authentication is enabled, you can add a new account that is allowed to login by following these steps: 
1. On the main page of the module, click on the **PPP Accounts** icon. This will take you to a page listing all existing accounts, including those that have been created for dialing out to other servers. 
2. Follow the **Create a new PPP account** link, which will bring you to the account creation form shown below. 
3. Enter a login name into the **Username** field, and make sure its **Any** option is not selected. 
4. Make sure the **Server** field is set to **Any**. If you set it to something else, then the username will only be accepted when the client's hostname matches whatever you enter. 
5. Select the **Set to** option in the **Password field**, and enter a password for the account into the text field next to it. It is also possible to have the PPP server read the password from a separate file, by selecting the **From file** option and entering a filename into its text field. Or you can remove the need for a password to be supplied at all, by selecting **None** - however, this isn't a very good idea from a security point of view. 
6. Assuming that all clients are being assigned IP address, set the **Valid Addresses** field to **Allow any**. However, if no addresses are specified in the PPP Options page, you may want to select Allow listed and enter acceptable addresses into the text box below it. 
7. Finally, click the **Save** button and the new PPP account will be created. It can be used immediately by connecting clients. 

To edit an existing PPP account, just click on its username from the accounts list. This will being you to the account editing form, which is almost identical to the creation form shown in the image above. Change the username, password or any other options, and click the **Save** button to save you changes and make them immediately active. Or click the **Delete** button on the editing form to remove the account instead. 

By default, Webmin will add new users to the `/etc/ppp/pap-secrets` file. This is only read by the PPP server when doing PAP authentication, which is used by default. If you have manually configured your system to authenticate clients using the more secure CHAP protocol instead, you will need to configure Webmin to edit the chap-secrets file instead. This can be done by clicking on the **Module Config** link in the top-left corner of the main page, and changing the **PAP secrets file** field to `/etc/ppp/chap-secrets`.

### Restricting access by caller ID
If your phone line has caller ID enabled and your modem supports it, `mgetty` can be configured to block certain callers based on their phone numbers. By default, any caller will be allowed to 
connect - but you can change this so that only a few numbers are a allowed by following these steps: 
1. On the main page of the module, click on the **Caller ID Access** icon. This will take you to a form listing restricted numbers, which will probably be empty if you have not added any yet. 
2. Click on the **Add a new caller ID number** link, which will take you to a form for entering the new number. 
3. Set the **Phone number** option to **Numbers starting with**, and enter a partial or complete phone number that you want to allow into the field next to it. If you enter something like just _555_, any caller whose phone number starts with _555_ (such as _555-1234_) will be allowed. 
4. Set the **Action** field to **Allow**. 
5. Click the **Create** button, which will save the number and return you to the list of those that are allowed and denied. 
6. To add another allowed number, repeat steps 2 through 5. 
7. Finally, click on **Add a new caller ID number** again and on the creation form set **Phone number** to **All numbers** and the **Action** to **Deny**. 
8. Click the **Create** button to have this final deny entry added to the list. From now on, only the phone numbers that you explicitly allowed will be able to connected. 

Because the system checks each entry in the list in order and stops when it finds one that matches, any entry that denies (or allows) all callers must appear at the bottom of the list - otherwise, those after it will never be processed. If you want to allow a new phone number in future, after adding it the arrows in the **Move** column must be used to move it above the final entry that denies everyone. 

Because some clients may not provide caller ID information, the **Unknown numbers** option for the **Phone number** field can be used to match their calls. Allowing all unknown callers is not a good way to block known attackers though, as they may just disable the sending of caller ID information on their phone line. 

Caller ID restrictions should never be the only form of security on your dial-in server, as caller numbers are supplied by the phone company and thus not totally under your control. PPP authentication should be enabled as well, so that all clients are forced to login. 

### Module access control
Like others, this module has several options that you can set in the Webmin Users module to control which of its features a user can use. They are most useful for disabling parts of the module that are no use on a particular system - for example, you may only want the PPP Accounts page to be visible for a certain user. 

To edit access control options in this module for a user or group, the steps to follow are: 
- In the Webmin Users module, click on PPP Dialin Server next to the name of a user who has been granted access to the module. 
- For the **Available pages** field, de-select those icons on the module's main page that you don't want the user to be able to access. If PPP Options is de-selected, he will not be able to edit the options that apply to a single serial port either. 
- If the user is granted access to only a single page, setting the **Go direct to one page?** field to **Yes** will cause the browser to jump directly to that page when the module is entered. This is useful to skip the module's main page when it is only going to contain a single icon. 
- Click the **Save** button to make the access control settings active.
