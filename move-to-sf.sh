#!/bin/sh
cd /home/jcameron/webmin.com
for f in $*; do
	rsync --rsh=ssh -r -v -l --delete public/$f jcameron,webadmin@web.sourceforge.net:/home/groups/w/we/webadmin/htdocs/$f
done

