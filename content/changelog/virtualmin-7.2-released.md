---
title: "Virtualmin 7.2 released"
date: 2022-09-22
tags: ["changelog", "virtualmin-changelog"]
---

* Add significant improvements to CloudFlare DNS support including proxying and importing existing zones
* Add multiple FPM improvements in [#425](https://github.com/virtualmin/virtualmin-gpl/pull/425)
* Add .well-known location work with proxy enabled sites in [#422](https://github.com/virtualmin/virtualmin-gpl/pull/422)
* Add repos check and throw an error if outdated in [#434](https://github.com/virtualmin/virtualmin-gpl/pull/434)
* Add an API command to mass update IPs in [b239113](https://github.com/virtualmin/virtualmin-gpl/commit/b239113928997115c617b7a4afa482ecd7815358)
* Add DKIM DNS record check and split up table showing DKIM keys
* Add various DNS related improvements
* Fix support for WHMCS 8.5.x automatic post-install and upgrades
* Fix to default to PHP-FPM on new installs
* Fix to drop adding no longer needed `<Proxy *>` directives in [#423](https://github.com/virtualmin/virtualmin-gpl/pull/423)
* Fix to use Require all granted directives with Apache 2.4 in [#424](https://github.com/virtualmin/virtualmin-gpl/pull/424)
* Fix to remove download immediately option in [#379](https://github.com/virtualmin/virtualmin-gpl/pull/379)
* Fix to make sure that actual PHP version is set by the script in [#437](https://github.com/virtualmin/virtualmin-gpl/pull/437)
* Fix PHP max children logic in [#439](https://github.com/virtualmin/virtualmin-gpl/pull/439)
* Fix upgrades to Pro work correctly for both Virtualmin 6 and 7 installs
* Fix to turn off autoconfig when email is disabled for a domain [#408](https://github.com/virtualmin/virtualmin-gpl/issues/408)
* Fix to use correct field for DNS slave servers
* Fix to include Virtualmin Pro API commands in `virtualmin --help` output
