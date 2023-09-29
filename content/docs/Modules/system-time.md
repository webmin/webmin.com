---
title: "System Time"
date: 2023-09-29
weight: 855
---

### About
This page explains how the set the system and hardware clocks on your server. 

### The module
All Unix systems have an internal clock to keep track of the current time, even when the system is powered off. Linux systems effectively system is running, and a separate hardware clock that runs all the time. The kernel's system time is set based on the hardware time when the kernel is loaded, so they should be synchronized. However, if one of the clocks is slower than the other it is possible for the hardware and system times to fall out of sync on a system that has been running for a long time. 

All Unix systems store the time internally as the number of seconds since 1st January, 1970 GMT. For display, this is converted to a human-readable local time based on the system's configured time zone. All Linux distributions allow you to choose your time zone at install time, and include a tool for changing it later.

The system and hardware times can be displayed and set using the date and `hwclock` commands respectively. Only the _root_ user can change the system time, and only root can use the `hwclock` command to display the hardware time. 

You can adjust both the system and hardware times using the System Time module, which can be found under the Hardware category. The module only really has one page, which is shown in the screenshot below. Both times on the page are updated every five seconds, so that they remain correct even if the page has been displayed in your browser for a long period. 

[![](/images/docs/screenshots/modules/light/system-time.png "System Time Screenshot")](/images/docs/screenshots/modules/light/system-time.png)

### Changing the system time
The system time can be brought forwards or sent backwards at any time using this Webmin module. Generally, this is quite safe - however, large changes may confuse some programs that do not expect to see the current time go backwards or jump forwards by a huge amount. 

To change the system time, the steps to follow are:
- On the main page of the module, select a new **Day**, **Month**, **Year**, **Hour**, **Minute** and **Second** in the **System Time** section. 
- Click the **Apply** button below the fields. The new date and time will be set, and the page will be re-displayed. 

It is also possible to force the system time to be set to the current hardware time, by clicking the **Set system time to hardware time** button. Either way, any change will immediately be visible to all programs running on your system, such as desktop clocks, syslog and mail clients. 

### Change the hardware time
Because the hardware time is only read by the kernel when the system boots, it can be changed without having any effect on programs that are currently running. To change it, follow these steps: 
- On the main page of the module, select a new **Day**, **Month**, **Year**, **Hour**, **Minute** and **Second** in the **Hardware Time** section. 
- Click the **Apply** button below the fields. The new date and time will be set, and the page will be re-displayed. 

You can also synchronize the hardware time with the system time by clicking the **Set hardware time to system time** button. It is a good idea to do this every now and then on a system that hasn't been re-booted for a long time, so that they do not drift too far out of sync. 

### Changing the timezone
All Unix systems store the time internally as a number of seconds since 1st January 1970, GMT time. When a program (such as the `date` command) displays the current time to the user, it needs to convert this to the correct timezone, which involves applying the correct time offsetand adjusting for daylight savings.

For this reason, your system must have the timezone set correctlyto display and log times properly. Fortunately you can do this usingthe System Time module as follows :
- Scroll down to the **Time Zone** section of the main page.
- Select the correct zone from the list. They are order by continent first, then by city or country.
- Click **Save**.

[![](/images/docs/screenshots/modules/light/system-time-zone.png "Change Timezone - System Time Screenshot")](/images/docs/screenshots/modules/light/system-time-zone.png)

### Synchronizing times with another server
The System Time module can also be used to set the system or hardware time based on the system time of another server. The other server must be either running an NTP (Network Time Protocol) server. For your system to use NTP for synchronization you must have the `ntpdate` NTP client program installed. 

To synchronized the time, the steps to follow are: 
- Enter the hostname or IP address of the other server into the **Host/Address** field in the **Time Server** section. It is always better to choose a server that is close by, so that the effect of network latency is minimized. Multiple servers may be entered though.
- Check the **Set hardware time too** box, as this should always be updated to match the system time.
- If you want to have the sync done regularly, change **Synchronize on schedule?** to **Yes** and select the times to sync at using the fiels below it.  Once per day is typically good enough.
- Click the **Sync and Apply** button. If the server cannot be contacted or does not support the NTP or time protocols, an error message will be displayed. Otherwise the time or times will be set and the page re-displayed. 

[![](/images/docs/screenshots/modules/light/system-time-sync.png "Time Server Sync - System Time Screenshot")](/images/docs/screenshots/modules/light/system-time-sync.png)

### Module access control
Like many other modules, it is possible to restrict what a Webmin user or group can do in the System Time module. However, the available restrictions are very basic due the to module's limited functionality, and do not really make it any more secure for use by un-trusted users. 

Once a Webmin user has been granted access to the module as described in [Webmin Users](/docs/modules/webmin-users), you can limit what he can do by following these steps: 
- In the [Webmin Users](/docs/modules/webmin-users) module, click on System Time next to the name of the user or group that you want to restrict. 
- Change the **Can edit module configuration?** field to **No**, so that the user cannot change operating-specific settings. 
- To stop the user changing the system time, set the **User can edit system time** field to **No**. 
- To prevent the user from changing the hardware time, set the **User can edit hardware time** field to **No**. 
- When done, click the **Save** button at the bottom of the page to make the new restrictions active. 

### Other operating systems
Linux is the only operating system supported by the System Time module that has separate hardware and system times. Solaris, Irix, HP/UX and OpenServer have only a single system time, which can be set in exactly the same ways as on Linux. FreeBSD, NetBSD and MacOS X also only support system time, which can also be set in the same ways, but only to the nearest minute. Other operating systems cannot use this module at all.
