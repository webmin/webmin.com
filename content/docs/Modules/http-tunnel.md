---
title: "HTTP Tunnel"
date: 2023-09-07
author: "Ilia Ross"
weight: 565
---

### About

The **HTTP Tunnel** module located in Tools category is designed to facilitate connections to another HTTP server via a tunnel through the primary Webmin server. This can be especially useful when the desired HTTP server is behind a firewall or in a restricted network environment, and you want to access it through a Webmin server that has the necessary network permissions.

[![](/images/docs/screenshots/modules/light/http-tunnel.png "HTTP Tunnel Screenshot")](/images/docs/screenshots/modules/light/http-tunnel.png)

With this module, the Webmin server essentially acts as an intermediary or proxy, relaying HTTP requests from the client to the target HTTP server and then sending the responses back to the client. It allows for indirect access to a target server that might otherwise be inaccessible due to network restrictions.
