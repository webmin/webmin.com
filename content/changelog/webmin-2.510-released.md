---
title: "Webmin 2.510 released"
date: 2025-09-16
tags: ["changelog", "webmin-changelog"]
---

* Fix to ensure DNSSEC re-signing period is less than 30 days in the BIND DNS module
* Fix to treat 201 as a valid response code in the internal download function
* Update the Authentic theme to the latest version with various improvements and fixes:
  - Add optimizations to dashboard graphs with dynamic trimming to prevent page lagging
  - Add improvements to how the system cache for the dashboard is updated
  - Add support to correctly reload the page in proxy mode
  - Add an option to choose if default page should always load when switching navigation
  - Fix to ensure the color palette is preserved for the user [webmin#2537](https://github.com/webmin/webmin/issues/2537)
  - Fix algorithm for calculating rows per page in data table pagination
  - Fix the alert info box text color for dark mode
  - Fix critical lags and appearance of Custom Commands module 

---

#### Assets

| File                       | Size |
| -------------------------- | -----|
|[webmin-2.510-1.noarch.rpm](https://github.com/webmin/webmin/releases/download/2.510/webmin-2.510-1.noarch.rpm) | 32.1 MB |
|[webmin_2.510_all.deb](https://github.com/webmin/webmin/releases/download/2.510/webmin_2.510_all.deb)           | 26 MB |
|[webmin-2.510.pkg.gz](https://github.com/webmin/webmin/releases/download/2.510/webmin-2.510.pkg.gz)             | 36.2 MB |
|[webmin-2.510.tar.gz](https://github.com/webmin/webmin/releases/download/2.510/webmin-2.510.tar.gz)             | 36.7 MB | 
|[webmin-2.510-minimal.tar.gz](https://github.com/webmin/webmin/releases/download/2.510/webmin-2.510-minimal.tar.gz) | 3.61 MB | 
