---
title: "RPM-based Virtualmin GPL EC2 image available"
date: 2007-09-05
description: "Now that there is an install script for Virtualmin GPL on CentOS 5, I have created a new EC2..."
categories: []
aliases: []
toc: false
draft: false
---
Now that there is an install script for Virtualmin GPL on CentOS 5, I have created a new EC2 image that built from it. Unlike older images, this one includes an updatable version of Apache which can run CGI scripts from any directory, and a new Webmin module for installing updated packages. The AMI is ami-4ff71226, and full instructions on how to use it are available on the [Virtualmin on Amazon EC2][1] page.

  [1]: http://www.webmin.com/ec2.html
