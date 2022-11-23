---
title: "Removing an outdated Webmin APT mirror"
date: 2016-04-22
description: "If you are getting an error like Hash Sum mismatch or similar when updating or installing Webmin..."
categories: []
aliases: []
toc: false
draft: false
---
If you are getting an error like Hash Sum mismatch or similar when updating or installing Webmin from our APT repository, the cause may be that you have an outdated mirror configured. To fix it, edit the /etc/apt/sources.list and remove the line : ` deb http://webmin.mirror.somersettechsolutions.co.uk/repository sarge contrib `
