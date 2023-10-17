---
title: "Network Services"
date: 2023-09-10
weight: 655
---

### About
This module allows you to configure **xinetd**, a super-server that is similar in purpose to `inetd` but has several additional features. Like the [Network Services and Protocols](/docs/modules/network-services-and-protocols) module, this one can also be found under the Networking category. However, its link will only appear if Webmin detects that `xinetd` is installed, which it does by looking for the `/etc/xinetd.conf` file. If you have compiled and installed it manually, you may need to create a symbolic link to the real location of `xinetd.conf`. 

The main page lists all services that have server programs assigned, their port numbers, protocol, program and active status. Services with no program are never shown, unlike in the Internet Services module. 

[![](/images/docs/screenshots/modules/light/network-services.png "Network Services Screenshot")](/images/docs/screenshots/modules/light/network-services.png)

On Linux distributions that use `xinetd`, most server program packages include a file that adds an appropriate service to list shown on the main page. These are generally disabled by default, so that services are not unexpectedly enabled the moment you install them. 

If you are using a different operating system on which you have installed `xinetd`, the user interface will be exactly the same as on Linux. However, server program packages will probably not set up services when installed. 

### Enabling or editing an extended internet service
If you want to allow users to fetch mail from your system using the POP3 protocol or login via telnet it is necessary to turn on the appropriate service in this module, assuming it is listed on the main page. If not, you will need to first install the appropriate package from your distribution website, which should add an entry for the service. If not, see the section below on how to create an extended internet service.

Existing services can also be changed in other ways, for example to restrict the allowed client IP addresses or number of concurrent connections. To edit a service, the steps to follow are: 
- On the main page of the Extended Internet Services module, click on the name of the service that you want to edit. This will take you to the form shown below. 
- The **Service name**, **Socket type** and **Protocol** options should all be left unchanged. The **Port** field should only be changed if you know what you are doing. 
- To turn on the service, set the **Service enabled?** field to **Yes**. Or if it is already enabled and you want to turn it off,  select **No**. 
- If you want the service to be accessible only via a single IP address on your server, enter it into the **Bind to address**  field. This can be useful if you have multiple virtual IP interfaces on your system and want different servers to listen on different addresses. 
- Most of the fields under **Server program options** can be left unchanged, unless you want to limit the amount of load the service puts on your system. If so, you can set the **Max concurrent servers** field to the maximum number of server processes that should be allowed to run at any one time. The **Maximum connections per second** and **Delay if maximum is reached** fields can be set to limit the rate at which clients are allowed to connect and the amount of time that the service is disabled if that rate is exceeded. 
- To control which addresses clients are allowed to connect from, use the fields in the **Service access control** section. If **Allow access from** is set to **Only listed hosts**, only the IP addresses (like _192.168.1.55_), hosts (like _server.foo.com_) and networks (like _192.168.1.0/24_) entered will be allowed. If **Deny access from** is set to **Only listed hosts**, the hosts, IP addresses and networks entered will be prevented from connecting. If a client matches an entry in both lists, the most specific entry will be used to determine whether access is allowed or denied. For example, if _192.168.1.10_ was allowed and _192.168.1.0/24_ was denied then a client with IP address _192.168.1.10_ would be able to connect. 
- If you want to limit the times at which the service can be used, fill in the **Allow access at times** field. It must be in the format `HH:MM-HH:MM`, such as _9:00_-_17:00_ to allow access during normal working hours. 
- Click the **Save** button when you are done making changes. As long as you haven't made any mistakes, the browser will return to the module's main page. 
- Click the **Apply Changes** button to make your modifications active. 
 
If you want to totally delete a service, you can click the **Delete** button on the editing form instead. However, it is usually better to simply disable it so that it can be easily turned back on later. 

### Creating an extended internet service
If you want to enable a protocol that is not in the list on the main page or redirect traffic from a particular port to another host, then you will need to create a new service using this module. The appropriate server program for the service must be installed first, unless you are setting a redirection. The steps to follow are: 
- Click on the **Create a new internet service** above or below the list on the main page. This will take you to the creation form, similar to the one if Figure 15-5. 
- If the service is for a standard protocol like telnet or finger, enter its name in the **Service name** field. The **Port number** can then be left set to **Standard**. Otherwise, enter a unique    name into the **Service name** field and set the **Port number** to the port you want the service to listen on. 
- If you want the service to be accessible only via a single IP address on your server, enter it into the **Bind to address** field. This can be useful if you have multiple virtual IP interfaces on your system and want different servers to listen on different addresses. 
- Set the **Protocol** field to the protocol you want the service to use, usually TCP. The Socket type field should be set to **Stream** for TCP protocol services, or **Datagram** for UDP services. 
- If your service is going to use a server program, set the **Service handled by** option to the **Server program** option and enter its command and any arguments into the field next to it – for example /usr/sbin/in.telnetd –a. If the service is just redirecting traffic to another host, select the *Redirect to host* option and enter the destination hostname and port in the corresponding fields. 
- In the **Run as user** field, enter the name of the Unix user that the server program will be run as. This is not necessary for redirection services. 
- Unless the server program always completes very quickly, set the **Wait until complete** field to **No**. If you leave it set to **Yes**, `xinetd` will not process any more connections until the program finishes. 
- To limit the rate at which clients can connect, set the **Max concurrent servers** and **Maximum connections** per second fields as explained in the section on “Enabling or editing an extended internet service” above. 
- To limit the addresses from which clients can connect or the times at which connections are allowed, set the fields under **Service access control** as explained in the section above. 
- When done, click the **Create** button. If there are no errors in the form, you will be returned to the main page on which your new service should now be listed. 
- Click the **Apply Changes** button to make the service active. 

Once a service has been created, you can test it by running telnet localhost _portnumber_ at the shell prompt on your system. You can edit or delete your service at any time by following the instructions in the previous section. 

### Editing default options
There are several global options that apply to all services handled by `xinetd`, for logging and IP access control. To edit these options, the steps to follow are: 
- Click the **Edit Defaults** button at the bottom of the module's main page, which will take you to the default options form. 
- To restrict the addresses from which clients can connect to any service, fill in the **Allow access from** and **Deny access from** fields. They accept the same input as the fields of the  same name on the service form, as explained in the section above. Any IP access controls configured for an individual service will override the default settings that you enter on this form. 
- To have `xinetd` log to syslog, set the **Xinetd logging mode** field to **Log to syslog facility** and choose the facility and priority that it should use. Chapter 13 explains in detail how to configure the log file that messages from `xinetd` will be written to, based on the selected priority and facility. Normally, this is the default and best option. If you want `xinetd` to log directly to a file, select the **Log to file** option and enter the log file path into the field next to it. To have a warning message logged when the file becomes too big, enter a file size in bytes into the **Soft file limit** field. To set a file size limit that will never be exceeded, fill in the **Hard file limit** field. If the soft limit is set but the hard limit is not, it will default to 1% more than the soft limit. If neither is set, the log file will grow forever – which could cause all your disk space to be consumed by an attacker making millions of connections to `xinetd`. To turn off logging altogether, set the **Xinetd logging mode** field to **Disable logging**. 
- To control which events are logged, choose the appropriate options from the **On successful connection log** and **On failed connection log** fields. 
- When done, click the **Save** button. As long as there are no errors in your input, you will be returned to the module's main page. 

Click the **Apply Changes** button to make the new defaults active.

