---
title: "Virtualmin 7.30.3 released"
date: 2024-12-24
tags: ["changelog", "virtualmin-changelog"]
author: "Ilia Ross"
---

* Add a new ClassicPress web app installer
* Fix missing button text when restarting a script’s service (Node.js, etc.)
* Fix advertised installable web apps always show the version as “latest”
* Fix system ID check to address incorrect license identification
* Fix to ensure files inside backups have the correct extensions
* Fix to clean up the code that adjusts FPM versions during the config check
* Fix to remove Webalizer as an option unless it is already installed
* Fix file locking to prevent disruption of configuration files in rare cases
