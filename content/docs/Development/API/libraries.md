---
title: "Libraries"
date: 2023-10-01
weight: 6000
---

### API libraries
The Webmin API has a set of core functions that are available to all modules, and functions exported by other modules that yours can optionally use.

| API | Description |
|-----|-------------|
| [WebminCore](/docs/development/api/webmincore/) | Library containing essential libraries and functionalities required for Webmin's operation |
| [acl::](/docs/development/api/module/acl/) | Library for editing Webmin users, passwords and access rights |
| [backup_config::](/docs/development/api/module/backup-config/) | Library for creating configuration file backups |
| [cron::](/docs/development/api/module/cron/) | Library for listing, creating and managing Unix users' cron jobs |
| [init::](/docs/development/api/module/init/) | Library for Linux services boot management |
| [passwd::](/docs/development/api/module/passwd/) | Library with functionalities for changing user passwords |
| [quota::](/docs/development/api/module/quota/) | Library for Unix user and group quota management |
| [servers::](/docs/development/api/module/servers/) | Library for managing and monitoring remote Webmin servers with RPC |
| [smart_status::](/docs/development/api/module/smart-status/) | Library for getting SMART status |
| [useradmin::](/docs/development/api/module/useradmin/) | Library for user and group management |
| [usermin::](/docs/development/api/module/usermin/) | Library for configuring Usermin running on this system |
| [webmin::](/docs/development/api/module/webmin/) | Library for configuring _miniserv_ and adjusting global Webmin settings |
| [webmin_log::](/docs/development/api/module/webmin-log/) | Library for parsing the Webmin actions log file |

The extensive Webmin API can also be called from your own Perl scripts that do not run under miniserv, as long as they run as root. The easiest way to do this is to install the `Webmin::API` Perl module, which takes care of a lot of the boilerplate code that would be otherwise required.

### API in standalone Perl scripts
The steps to install and use this module are:

1. [Download](https://www.webmin.com/Webmin-API-1.0.tar.gz) the `Webmin::API` Perl module
2. Extract and install it with the following commands, run as _root_:
```text
tar xvzf Webmin-API-1.0.tar.gz
cd Webmin-API
perl Makefile.PL
make install
```
3. Create a new Perl script, starting with:

```perl
#!/usr/bin/perl
use Webmin::API;
```

Your script can then call all the core Webmin functions, like `find_byname`, `foreign_require` and etc. There is no need to call `init_config`, as it will be run for you when the module is imported.
