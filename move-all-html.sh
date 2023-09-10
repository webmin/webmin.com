#!/bin/sh
cd /home/jcameron/webmin.com/public && rsync --rsh=ssh -r -v -l * .htaccess jcameron,webadmin@web.sourceforge.net:/home/groups/w/we/webadmin/htdocs/

