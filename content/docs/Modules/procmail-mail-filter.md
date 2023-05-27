---
title: "Procmail Mail Filter"
date: 2023-05-27
weight: 455
---

This page explains how to use the '''Procmail''' program and Webmin to filter and deliver email coming into your system. 

=== Introduction to Procmail ===
Procmail is a powerful program for filtering and re-directing email that would normally be sent to users' mailboxes. It can be used at both the system level to filter message for all users on your system, on a per-user basis, or both. Unlike normal Sendmail aliases, Procmail can be used to deliver messages differently depending on their headers and content. This makes it an excellent tool for blocking un-wanted email, such as spam. 

When installed on a system, Procmail effectively replaces the normal mail.local email delivery command that [[Sendmail Mail Server]] and other MTAs run to append a message to a user's mail file. Even though it is most commonly used with Sendmail, other MTAs such as [[QMail Mail Server]] and [[Postfix Mail Server]] can be configured to use Procmail for delivery as well. As far as the program is concerned, the actual mail server in use does not matter as long as email is passed to it properly. 

Procmail's primary configuration file is /etc/procmailrc, which is usually managed by the system administrator. Individual users can also create their own .procmailrc files with the same format in their home directories. The system-wide file is always read and processed first, so any rules that it contains to re-direct messages based on their content cannot be overridden by individual users. 

A Procmail configuration file is divided into actions, each of which has a series of conditions and a delivery mode. The conditions determine which messages the action matches, while the delivery mode controls what happens to those that match. Procmail will process actions in order until it finds one that matches, deliver the message as specified and then stop processing. 

The configuration file can also include variable assignments that may be used by later actions or even other variables. It can also contain special conditional sections, which are lists of actions to be run only if some conditions are matches. In a way, these are like if-then statements in a programming language. 

Procmail behaves pretty much the same on all Unix-like operating systems. The only difference is the default delivery location - all Linux distributions use /var/spool/mail as the user mail file directory, which other Unix variants such as Solaris use /var/mail. However, this difference has no effect on the program's configuration file format or the user interface of the Procmail Mail Filter module. 

Procmail is most useful when configured by individual users to perform tasks such as sorting email from different people into different mailboxes, writing to two different mail files or dropping email from specific addresses. The Procmail Webmin module and this chapter only deal with system-wide configuration though - if you want a tool that lets individual users configure the program though a web interface, [[Usermin]] is the program to use. It has a module with an identical interface that manages .procmailrc files instead of /etc/procmailrc,and another with an even simpler interface.

The global Procmail configuration can be used to have mail delivered to a different directory or in a different format to that normally used by your mail server. For example, instead of users' mail being appended to the files in /var/spool/mail it could be written to the file mbox in their home directories instead. Better still, Procmail can be set up to write to a Qmail-style mail directory, usually called Maildir and located in users' home directories. 

Because it deals only with email delivered locally on your system, Procmail cannot be used for mail filtering if you use a client program such as Mozilla or Evolution to download email from your ISP's or company's server. If you do not run your own mail server but still want to make use of Procmail's features, you will need to set up [[Fetchmail Mail Retrieval]] to download messages and pass them to the MTA on your system. 

=== The Procmail Mail Filter module ===
The Webmin module for managing the system-wide configuration file is called Procmail Mail Filter, and can be found under the Servers category. Clicking on its icon will take you to the main page like the one shown in the screenshot below. All existing actions are listed, and below them are links for adding new actions of various types. 

<img src=http://www.webmin.com/screenshots/chapter45/figure1.gif><br>
The Procmail module main page 

Unlike other modules, this one will not complain if Procmail is not installed on your system. You should use the [[Software Packages]] module to check for and install the package that comes with your Linux distribution or operating system. If no package exists, you will need to download the source from www.procmail.org, compile and install it. 

Just installing Procmail is not enough for it to be actually used on your system though. By default, mail servers like Sendmail, Qmail and Postfix use their own standard mail delivery programs and not Procmail. Individual users can change this by creating a .forward or .qmail file containing the line /usr/bin/procmail which passes all incoming email to the Procmail program. However, it is better to re-configure your MTA globally to use Procmail so that individual users do not have to set it up. The *Setting up Sendmail* section below explains how to configure Sendmail - other mail servers will need to be set up differently. 

=== Setting up Sendmail ===
As long as you have the M4 files from which your primary Sendmail configuration file was built, setting up Sendmail to use Procmail is easy. Unfortunately, configuring the mail server by editing sendmail.cf directly is not so easy, and so is not covered in this chapter. However, all modern Linux distributions include the M4 files that you will need, either in the sendmail package or a separate one such as sendmail-cf. 

To configure the Sendmail MTA to use Procmail, follow these steps: 
# Go to the [[Sendmail Configuration]] module, which can be found in Webmin under the Servers category. 
# Click on the *Sendmail M4 Configuration *icon on its main page. A list of existing M4 directives should appear - if not, the M4 files needed to re-configure Sendmail are probably not installed on your system. 
# Check to see if the line FEATURE(local_procmail) already exists. If it does, delivery using Procmail is already enabled and there is no need to follow the rest of these steps. 
# From the menu next to the '''Add new entry of type''' button select '''Feature''', and then hit the button to display the feature creation form. 
# From the '''Feature''' menu select '''local_procmail'''. Leave the '''Parameters''' field empty. 
# Hit the '''Create''' button to have the new feature added to the M4 file. Your browser will be returned to the list of existing directives, at the bottom of which will be the new FEATURE(local_procmail) line. 
# Click the up arrow next to the new line as many times as is needed to move it above the MAILER(local) line. This is necessary because the file is processed in order, and the new directive changes the behavior of the MAILER line. 
# When the new FEATURE line is in place, hit the *Rebuild Sendmail Configuration* button at the bottom of the page. A confirmation page will be displayed showing the changes that will be made to the primary Sendmail configuration file - and as long as you have not been modifying sendmail.cf directly, they will be related only to the new Procmail support. 
# Click on '''Yes, replace it now''' to have the new configuration saved and activated. From now on, all mail delivered by Sendmail to local users will be processed by Procmail. To check if everything worked, try sending a few test messages and make sure that they are delivered as normal. 

For more information about how the Sendmail module's M4 features work and where to find the configuration files, read the *Adding Sendmail features with M4* section of [[Sendmail Configuration]].

=== Creating and editing actions ===
As the introduction to this chapter explains, the Procmail configuration file consists of a series of actions. When email arrives, each is checked in order until one matches and its delivery mode carried out. If no actions match (or none exist), the email is delivered to the default destination which is usually the user's mail file under /var/spool/mail. 

To create a new action, follow these steps : 
# Click on the '''Add a new filter action''' link below the list of existing actions on the module's main page. The form shown in the image below will be displayed for entering its destination and conditions. 
# Select the type of destination for messages that match this action from the '''Delivery mode''' menu. The available options are : *Append to file *Email will be appended in standard mailbox format to the file entered in the adjacent text field, such as ''/var/spool/mail/fred''. To throw a message away, enter /dev/null as the file. *Write to maildir *Matching email will be added to the Qmail-style mail directory whose path is entered in the text field. If this directory does not exist yet, Procmail will create it (and the needed subdirectories) for the user. *Write to MH folder *Email will be added to the specified MH-style mail directory. This mail format also uses one file per message, but places them in all a single directory and gives message files incrementing numeric filenames, like 1, 2, 3 and so on. *Forward to address *Email will be sent to the address or user entered in the adjacent text field, such as ''foo@example.com''. *Feed to program *Email messages that match will be fed as input to the program whose path and arguments are entered into the text box next to the menu. If a non-absolute mail filename or directory (like ''Mailbox'' or ''Maildir'') is entered, Procmail will assume that it is relative to the home directory of the user to whom the email is being delivered. 
# To have Procmail check the bodies of received messages rather than just the headers, check the '''Apply conditions to body''' box. This is necessary if any of the conditions you enter later need to match text in the email itself. 
# Normally Procmail will ignore the case of headers when checking conditions. To change this, check the '''Case-sensitive matching''' box. 
# If you want Procmail to continue on through the configuration file even if this action matches, check the *Continue processing even if conditions match* box. This can be used to have email delivered to several different files or folders, by turning on this option for all delivery rules except the last. 
# Procmail will normally ignore the exit status of the program that email is fed to. To have it fail (and thus bounce the message) if the program fails, turn on the *Wait for action program to finish, and check result* option. 
# If the delivery program that you entered reads in and then outputs email with some modifications, check the *Action program is a filter* box. The *Continue processing even if conditions match* option should also be enabled so that processing continues with the modified version of the message. This feature can be useful if you have written a program that checks and marks messages by adding or changing a header, which can then be checked by later actions. 
# The '''Action conditions''' section of the form is for entering the conditions that determine which messages will be delivered by this action. If none are specified, messages that reach the action will always be delivered, and if more than one is entered they must all match for delivery to take place. This section is actually a table that starts out with two blank rows. The menu in each row determines the type of condition and how the text in the box next to it is interpreted. The available options are:
#* <b>Matches regular expression</b><br> For this condition to match the message headers (and possibly the body too) must match the Perl-style regular expression entered in the text box. Remember that this expression is apply to all the headers as though they were a single block of text, so you should precede any header name with a ^ to indicate the start of a line. For example, to catch messages whose subject contains the word ''foo'' you could enter ''^Subject:.*foo.*''.
#* <b>Doesn't match regular expression</b><br> This condition type works just like the previous one, except that it matches messages that do not match the regular expression.
#* <b>Evaluate output of command</b><br> The shell command entered in the text box will be run, its output read by Procmail and then interpreted again as an action line from the configuration file. This type of condition is extremely powerful as it allows you to create dynamically generated conditions - however, for everyday mail filtering you probably don't need to use it.
#* <b>Check exit status of command</b><br> This type of condition matches if the shell command entered has an exit status of zero, indicating success. It can be used to have mail delivered to different destinations depending on the system's hostname, the time of day or the existence of some file.
#* <b>Mail is smaller than</b><br> The condition will match if the total size of the message is smaller than the number of bytes entered in the adjacent text box.
#* <b>Mail is bigger than</b><br> As its name suggests, this type of condition is the opposite of the previous one. 
# When you are done entering conditions, hit the '''Save''' button.  The new action will be added to the list on the main page, and will starting being used on incoming email. To add more than two conditions you will need to re-edit the action so that two more empty rows appear in the '''Action conditions''' section. 

<img src=http://www.webmin.com/screenshots/chapter45/figure2.gif><br>
The Procmail action creation form

An existing action can be edited by clicking on its entry in the '''Action to take''' column on the module's main page, which brings up an editing form the same as the one above. From here you can make changes and then hit '''Save''' to activate them, or just hit '''Delete''' to remove the action altogether. 

Because the ordering of actions matters, the module allows you to change their positions in the Procmail configuration with the up and down arrows next to each on the main page. Variable assignments, conditional blocks and include files can also be moved in the same way. 

By following the instructions above, you could easily create an action that delivers all email to the Qmail-style ''Maildir'' directory in user's home directories. Even though this mail format is preferable due to its superior reliability compared to the traditional files in /var/spool/mail, it is not much use unless mail clients or the POP3 server on your system know how to read it. The POP3 server that comes with most operating systems expects to fine email under /var/spool/mail, and so will have to be replaced or re-configured to support any new mail format or location. Other mail clients that read user mail files directly (such as Pine, Elm and Usermin) can be configured to use whatever new location you choose. 

=== Creating and editing variable assignments ===
Procmail actions can make use of shell-style variables in their conditions and delivery destinations. For example, you could create an action that delivers to the file ''/mail/$LOGNAME'', in which ''$LOGNAME'' is the username of the user to whom email is being delivered. Several variables (like .LOGNAME and DEFAULT) are set automatically by Procmail, while others can be set in the configuration file for later use. You can even override the automatic variables to change the behavior of the program, such as the default delivery destination or shell to use for executing commands. 

To create a new variable assignment, follow these steps : 
# On the module's main page, click on the *Add a new variable setting* link below the list of existing actions. The variable creation form will be displayed. 
# In the '''Variable name''' field enter the name of the variable to set, such as ''DEFAULT''. All automatic variables have upper case names, and those that you create yourself should as well.  No spaces or non-alphanumeric characters are allowed. 
# In the '''Value''' field enter the value to assign to this variable, such as ''Maildir/''. The value can include references to other variables. 
# Hit the '''Create''' button to add the variable to the list on the main page. 
# Use the up arrow next to the new variable in the list to move it to the correct location, which will typically be at the top of the file. Variable assignments only effect, so one added at the bottom may not have any effect. 

As with actions, a variable can be edited or deleted by clicking on its name in the list. Variables can also be moved about with the up and down arrows next to them. Because they only effect actions and other assignments below them in the file, you will certainly want to move any new variable up to near the top of the list. One added and left at the bottom will not have any effect (except on the default delivery destination). 

Procmail defines and allows you to change several special variables. The names and meanings of the most interesting ones are listed in the table below: 

=== Conditional blocks and include files ===
A conditional block is a group of actions and variable assignments in the Procmail configuration file that is only processed if some conditions match. They can be used to create quite complex sets of actions, almost like a programming language. This module allows you to create and edit conditional blocks, but displays their contents as just configuration file text rather than parsing the actions that they contain. This means that you have to be familiar with the Procmail file format to use them. 

To create an conditional block, follow these steps: 
# Click on '''Add a new conditional block''' below the list of actions on the module's main page. 
# In the '''Procmail code to execute''' text box enter the configuration file lines for the actions or variable assignments to be processed if the conditions match. As soon as any action in the block matches, processing of the entire configuration file will stop. However if none match, processing will continue as usual with the next action after the block. See the procmailrc manual page in the System Documentation module for details of the format. 
# Fill in the '''Action conditions''' section just as you would for a normal action, as explain in '''Creating and editing actions''' earlier in the chapter. 
# Hit the '''Create''' button to create the new block. 

As with actions, you can edit or delete a conditional block by clicking on it in the list on the module's main page. The entire block can also be moved around with the up and down arrows next to it. 

An include file is a special directive that tells Procmail to read and process a separate configuration file in the same format as /etc/procmailrc. Some spam filtering programs are actually just Procmail files that can be included into your primary configuration. To create an include directive, follow these steps : 
# Click on the '''Add a new include file''' link on the module's main page. 
# In the '''Included file''' field on the form that appears, enter the full path to the other configuration file. You can also enter a relative path, in which case Procmail will search for that file in the home directory of the Unix user that mail is being delivered to. When handling an include, Procmail will stop processing altogether as soon as it finds a matching action in the file. If none are found it will continue processing the actions that come after the include in the primary configuration file. 
# Hit the '''Create''' button to finish the process. 

Normally includes are listed on the module's main page just like actions and variable assignments, and can be edited, deleted or moved about. However, if the '''Show contents of include files?''' setting is enabled on the '''Module Config''' page the module will display the actual actions inside the include file for you to edit or delete. They can even be moved up and down, although only within the file. Enabling this option is not a good idea if you have a massive include file (such as one for spam filtering) as it will make the module's main page un-usably large. 

==See also==
* Filtering spam with [[SpamAssassin Mail Filter|SpamAssassin]]

[[Category:Mail Filters]]
