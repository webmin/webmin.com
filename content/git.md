---
title: "Git"
date: 2017-10-02
categories: []
aliases: []
toc: false
draft: false
---
# Webmin Git repository

The primary Webmin source code repository has been moved to [Github][1], which makes it easier for other developers to check out and modify the code. If you want to run the latest code or contribute, you can check out the source as follows :

1. Sign up for a Github account at <http://github.com/>, if you don't already have one.
2. On a development system (preferably without Webmin already installed), check out the code with the commands :
`` git clone git://github.com/webmin/webmin.git /usr/local/webadmin<br />
 cd /usr/local/webadmin<br />
 sudo ln -s `which perl` /usr/local/bin/perl<br />
 sudo ./local-setup.sh<br />
``
3. Answer the questions local-setup.sh asks about the config directory. The defaults will generally work fine.
4. To refresh your repository, run the commands :
` cd /usr/local/webadmin<br />
 git pull<br />
 sudo /etc/webmin/restart<br />
`

In order to get commit access, you must first send email to developers@webmin.com with your Github username, and a description of what you plan to work on.

# Usermin Git repository

The Usermin repository can also be checked out from Github, once you have the Webmin respository available. The steps for this are :

1. Run the commands :
` git clone git://github.com/webmin/usermin.git /usr/local/useradmin<br />
 cd /usr/local/useradmin<br />
 sudo ./local-setup.sh<br />
`
2. Answer the questions local-setup.sh asks about the config directory. The defaults will generally work fine.
3. To refresh your repository, run the commands :
` cd /usr/local/useradmin<br />
 git pull<br />
 sudo /etc/usermin/restart<br />
`

  [1]: http://github.com/webmin/
