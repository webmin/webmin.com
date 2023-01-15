---
title: "About"
date: 2017-10-02
draft: false
---

### Intro

Webmin is a web-based system administration tool for Unix-like servers, and services with over 1,000,000 installations worldwide. Using it, it is possible to configure operating system internals, such as users, disk quotas, services or configuration files, as well as modify, and control open-source apps, such as **BIND** DNS Server, **Apache** HTTP Server, **PHP**, **MySQL**, and many more.

Webmin consists of a simple web server, and a number of sub-programs which directly update system files like `/etc/fstab` and `/etc/passwd`. The web server and all sub-programs are written in Perl version 5, and use no non-standard Perl modules.

### Licence

All recent versions of Webmin are licensed under BSD-3-Clause licence, meaning that it may be freely distributed and modified for commercial and non-commercial use.

### Supported Systems
Because different Unix-like operating systems and Linux distributions use different locations for their various config files, Webmin can only support systems for which it has been configured. The following operating systems are supported by the current Webmin version:
{{< details-start post-content-details "<i class='wm wm-linux'></i>"  >}}
{{% include file="/static/data/supported-os.txt" %}}
{{< details-end >}}

### Supported Languages

Translation of Webmin modules into different languages is done by volunteers. The partial module translations made by humans are covered by automated language manager script.

All translated modules have a main language file without extension, i.e. `de` and automatically translated variant, i.e. `de.auto`. Volunteers willing to contribute to the translations, should take automatically translated strings from `.auto` language file (located in `lang/` directory of each module), review, edit and move them to the main language file.

All language files must use `utf-8` encoding. The following languages are supported by the current Webmin version:

{{< details-start post-content-details "<i class='wm wm-language'></i>"  >}}
|  Code   |   Language          |     Human Translated    |       Machine Translated
| ------- | ------------------- | ----------------------- | ------------------------ |
|  **en** |  **English**        |          100%           |           100%           |
|  de     |  Deutsch            |          98%            |           100%           |
|  ca     |  català             |          97%            |           100%           |
|  no     |  norsk              |          91%            |           100%           |
|  nl     |  Nederlands         |          89%            |           100%           |
|  fr     |  français           |          65%            |           100%           |
|  pl     |  polski             |          65%            |           100%           |
|  hu     |  magyar             |          53%            |           100%           |
|  cs     |  čeština            |          62%            |           100%           |
|  es     |  español            |          58%            |           100%           |
|  ja     |  日本語              |          53%            |           100%           |
|  ru     |  русский            |          51%            |           100%           |
| pt_BR   |  português (Brasil) |          44%            |           100%           |
|  ko     |  한국어               |          42%            |           100%           |
|  zh     |  中文 (简体)         |          40%            |           100%           |
|  uk     |  українська         |          39%            |           100%           |
|  it     |  italiano           |          38%            |           100%           |
|  zh_TW  |  中文 (繁體)         |          34%            |           100%           |
|  tr     |  Türkçe             |          34%            |           100%           |
|  sv     |  svenska            |          31%            |           100%           |
|  bg     |  български          |          30%            |           100%           |
|  fa     |  فارسی              |          26%            |           100%           |
|  ms     |  Melayu             |          16%            |           100%           |
|  hr     |  hrvatski           |          13%            |           100%           |
|  el     |  Ελληνικά           |          11%            |           100%           |
|  sk     |  slovenčina         |          11%            |           100%           |
|  pt     |  português          |          10%            |           100%           |
|  da     |  dansk              |          6%             |           100%           |
|  ar     |  العربية            |          3%             |           100%           |
|  eu     |  euskara            |          3%             |           100%           |
|  fi     |  suomi              |          1%             |           100%           |
|  af     |  Afrikaans          |          0%           |           100%           |
|  be     |  беларуская         |          0%           |           100%           |
|  he     |  עברית              |          0%           |           100%           |
|  lt     |  lietuvių           |          0%           |           100%           |
|  lv     |  latviešu           |          0%           |           100%           |
|  mt     |  Malti              |          0%           |           100%           |
|  ro     |  română             |          0%           |           100%           |
|  sl     |  slovenščina        |          0%           |           100%           |
|  th     |  ไทย                |          0%           |           100%           |
|  ur     |  اردو               |          0%           |           100%           |
|  vi     |  Tiếng Việt         |          0%           |           100%           |

{{< details-end >}}



### Modules
Because Webmin supports the concept of modules (like Photoshop plugins), anyone can develop and distribute their own Webmin modules for any purpose, and distribute them under any licence (such as GPL, commercial or shareware). [More information](https://doxfer.webmin.com/Webmin/ModuleDevelopment) about the Webmin API and writing your own modules is available.

### Developers
[Jamie Cameron](/about-jamie) &mdash; Author and the lead developer of Webmin.

[@iliajie](https://github.com/iliajie) &mdash; Continuous code contributions, author of language manager script and [Authentic Theme](https://github.com/webmin/authentic-theme).

### Contributors

**Martin Mewes** &mdash; Translating large amounts of Webmin into German, and co-ordinating other translators.

**Jaume Badiella** &mdash; Providing an extensive Catalan translation, which is more complete than any language other than English.

**[Gerhard Klein](mailto:gerhard@Klein-home.de)** &mdash; Porting various Webmin modules to HPUX.

**[Alicher Alikhodjaev](mailto:cher@park.ru)** &mdash; Providing porting information for FreeBSD.

**[Juergen Egeling](mailto:egeling@punkt.de)** &mdash; More porting information for FreeBSD.

**[Hans Waasdorp](mailto:hansw@imco.nl)** &mdash; Providing access to a FreeBSD 3.0 system for testing.

**[Thomas James Mackie III](mailto:tmackie@awak.com)** &mdash; Providing access to TurboLinux and Corel Linux systems for testing.

**[Kevin Lo](mailto:kevlo@openbsd.org)** &mdash; Contributing a port for OpenBSD.

**[.. and hundreds of many others](https://github.com/webmin/webmin/graphs/contributors)**


