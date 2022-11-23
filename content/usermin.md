---
title: "Usermin"
date: 2017-10-02
categories: []
aliases: []
toc: false
draft: false
---
# What is Usermin?

Usermin is a web-based interface for webmail, password changing, mail filters, fetchmail and much more. It is designed for use by regular non-root users on a Unix system, and limits them to tasks that they would be able to perform if logged in via SSH or at the console. See the [standard modules][1] page for a list of all the functions built into Usermin.

# Who can use Usermin?

Most users of Usermin are sysadmins looking for a simple webmail interface to offer their customers. Unlike most other webmail solutions, it can be used to change passwords, read email with no additional servers installed (like IMAP or POP3), and setup users' Procmail configurations for forwarding, spam filtering and autoreponders.

Usermin also provides web interfaces for viewing and managing data in MySQL and PostgreSQL databases, editing Apache .htaccess configuration files, and running commands on the server. The administrator has full control over which of these modules are available to users.

# Usermin and Webmin integration

By far the easiest way to configure Usermin is via the **Usermin Configuration** module in Webmin. All functionality can be managed via a browser, and because both products come from the same developer the management user interface is always up to date.

  [1]: ustandard.html
