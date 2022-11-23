---
title: "Plugins"
date: 2017-10-02
categories: []
aliases: []
toc: false
draft: false
---
# Introduction To Virtualmin Plugins

A plugin is a Webmin module that adds some functionality to Virtualmin. Typically a plugin will add a new feature that can be activated for a virtual server, such as AWstats reporting or Mailman mailing lists. A plugin can also add new capabilities for mail / FTP users, such as access to DAV or SubVersion repositories.

To use a plugin, first download and install in the same way as you would for any other Webmin module (using the **Webmin Configuration** module). Then open up the **Plugin Modules** page in Virtualmin, and select the new plugin from the list of those available. Once this is done, the capabilities of the plugin can be enabled for some or all virtual servers, on the **Edit Server** page.

# Finding Available Plugins

The best place to find plugins is the third-party modules database. To search for all modules in the plugins category, go to [the list of modules in the Virtualmin category][1].

# Developing Plugins

A plugin is simply a Webmin module with a virtual\_feature.pl file the defines the capabilities it exports to Webmin. The requirements for implementing a plugin are fully documented in the [module developers guide][2].

  [1]: http://www.webmin.com/cgi-bin/search_third.cgi?cat=Virtualmin
  [2]: modules-virtualmin.html
