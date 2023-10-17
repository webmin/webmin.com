---
title: "Fail2Ban Intrusion Detector"
date: 2023-09-10
author: "Ilia Ross"
weight: 630
---

### About
The **Fail2Ban Intrusion Detector** module in Webmin provides a user-friendly interface for managing and configuring the Fail2Ban service, which is essential for monitoring and blocking the IP addresses of the offending computers in suspicious activities based on log files. This module offers a comprehensive interface to harness the power of Fail2Ban for enhanced server security. The module located under the Networking category.

[![](/images/docs/screenshots/modules/light/fail2ban-intrusion-detector.png "Fail2Ban Intrusion Detector Screenshot")](/images/docs/screenshots/modules/light/fail2ban-intrusion-detector.png)

### Module Features

#### Log Filters
   - View and manage the criteria that Fail2Ban uses based on given regex to scan log files for suspicious activities.
   - **List, Edit, Delete**: View all available log filters, modify them, or remove them.
   - **Add**: Incorporate a new log filter by defining its pattern and log target.

#### Match Actions
   - Set up and manage the actions Fail2Ban takes when it detects malicious activities.
   - **List, Edit, Delete**: View all available match actions, adjust them, or remove them.
   - **Add**: Integrate a new action to execute when a malicious activity is detected.

#### Filter Action Jails
   - Combine log filters and match actions into a "jail" to actively monitor and take action on suspicious activities.
   - **List, Edit, Delete**: See all available jails, modify their configurations, or delete them.
   - **Add**: Create a new jail by combining a log filter with a match action.
   - **Edit Jail Defaults**:
     Located at the bottom of the Filter Action Jails page, this button allows users to adjust global settings and limits that apply to all the listed jails. This is particularly useful for configuring universal parameters like:
     - **Number of required matches**: Set the threshold for how many log matches should trigger a ban action.
     - **Time to ban an IP**: Define the duration for which an IP address should be banned once it hits the set threshold.

#### Jails Status
   - View the current status of all jails, including active bans.
   - **Unblock**: Release specific IP addresses from the ban, allowing them to access the server again.

#### Global Configuration
   - **Minimum logging level**: Adjust the verbosity of Fail2Ban's logging.
   - **Write logs to**: Choose where the logs should be written. Options include the default destination, STDOUT, STDERR, Syslog service, or a specific log file.
   - **Socket for communication with server**: Define the communication pathway for Fail2Ban operations.

#### Edit Config Files
   - Directly edit Fail2Ban's configuration files for advanced configurations or manual tweaks.
     [![](/images/docs/screenshots/modules/light/fail2ban-intrusion-detector-manual.png "Fail2Ban Intrusion Detector Screenshot")](/images/docs/screenshots/modules/light/fail2ban-intrusion-detector-manual.png)

### Action Buttons

- **Restart Fail2Ban Server**

    To implement and reflect the updated configuration, restart the Fail2Ban service with this control.
  
- **Stop Fail2Ban Server**

    Instantly stop the Fail2Ban service, halting all its operations and log analyses.
  
- **Start at Boot**

    Determine if Fail2Ban should automatically start when the server boots up. If required, a boot script will be set up to ensure its proper initiation.

### Tips

- Before making major changes, always **backup** your current Fail2Ban configuration. This ensures a safe revert point if any issues arise.
  
- Regularly review the **Jails Status** to see which IP addresses have been banned. This can help identify potential threats or false positives.
  
- For new users, start with a more lenient configuration, then gradually tighten the rules as you become more familiar with the patterns of malicious activities against your server.
