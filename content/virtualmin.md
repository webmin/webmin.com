---
title: "Virtualmin"
date: 2017-10-02
categories: []
aliases: []
toc: false
draft: false
---
# What is Virtualmin?

It is a Webmin module for managing multiple virtual hosts through a single interface, like Plesk or Cpanel. It supports the creation and management of Apache virtual hosts, BIND DNS domains, MySQL databases, and mailboxes and aliases with Sendmail or Postfix. It makes use of the existing Webmin modules for these servers, and so should work with any existing system configuration, rather than needing it's own mail server, web server and so on.

Virtualmin can also create a Webmin user for each virtual server, who is restricted to managing just his domain and its files. Webmin's existing module access control features are used, and are set up automatically to limit the user appropriately. These server administrators can also manage the mailboxes and mail aliases in their domain, via a web interface that is part of the module.

# What License is Virtualmin Under?

Two versions of Virtualmin exist, under separate licenses:

* **Virtualmin GPL**
    This is the freely downloadable version, licensed under the GPL. It is under active development, but does not contain all of the features of the Pro version.
* **Virtualmin Pro**
    This is the commerical version that you have to pay for. It includes numerous features not in the GPL version (like script installers, resellers, HTML editor, an improved UI, mobile access, spam and virus filtering). Customers also get support, a simplified complete installation script and access to a repository of updated packages. To learn more, visit the [Virtualmin Pro][1] website.

Both the Pro and GPL versions are built from the same codebase, so all bugfixes and some new features go into both of them.

  [1]: http://www.virtualmin.com/
