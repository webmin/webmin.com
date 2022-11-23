---
title: "Uchanges"
date: 2017-10-02
categories: []
aliases: []
toc: false
draft: false
---
# Usermin Change Log

**Version 1.860 (23rd August 2022)**

* Updated the Authentic theme to the latest version.

**Version 1.853 (27th July 2022)**

* Updated the Authentic theme to the latest version.
* Fixed some other small bugs.

**Version 1.852 (13th July 2022)**

* Updated the Authentic theme to the latest version.
* Fixed issues with restarting on install.

**Version 1.840 (5th March 2022)**

* Better UI behavior for long searches in the Mailbox module.
* Theme and bugfix updates.

**Version 1.834 (31st December 2021)**

* Theme updates and more bugfixes for issues found in 1.833.

**Version 1.833 (4th December 2021)**

* Just bugfixes for issues found in 1.832.

**Version 1.832 (26th November 2021)**

* Added support for extracting archive files and directory uploads in the File Manager.
* Updated the Authentic Theme to the latest version.

**Version 1.830 (28th August 2021)**

* Theme and translation updates.

**Version 1.820 (6th January 2021)**

* Theme and translation updates.

**Version 1.812 (15th November 2020)**

* Unicode folder name fixes.

**Version 1.810 (19th October 2020)**

* Added support for sending email using STARTTLS.
* Updated the Authentic theme to the latest version.

**Version 1.802 (5th July 2020)**

* Added optional automatically generated translations for all languages, and switched all encodings to UTF-8.
* Updated the Authentic theme to the latest version.

**Version 1.791 (16 January 2020)**

* Minor translation and theme updates.

**Version 1.780 (17 August 2019)**

* Minor translation updates.

**Version 1.770 (6th July 2019)**

* More theme and translation updates.

**Version 1.760 (12th May 2019)**

* More theme and translation updates.

**Version 1.750 (19th November 2018)**

* Just theme and translation updates.

**Version 1.750 (4th March 2018)**

* Just theme and translation updates.

**Version 1.730 (14th December 2017)**

* Even more theme and translation updates.

**Version 1.720 (28th June 2017)**

* More theme and translation updates.

**Version 1.710 (9th May 2017)**

* Updates to the Authentic Theme and File Manager modules.
* Multiple translation updates.

**Version 1.701 (6th March 2016)**

* Added a button to sync the Special folder with messages actually marked as special by other mail clients.
* When attaching files to an email message, multiple files can now be selected at the same time.
* Updates to the Authentic theme.

**Version 1.690 (30th December 2015)**

* Updates to the Filemin file manager and Authentic theme.

**Version 1.680 (5th October 2015)**

* German and Catalan translation updates.
* Added the Filemin File Manager module, which will eventually replace the old Java file manager.

**Version 1.660 (12th May 2015)**

* German and Catalan translation updates.

**Version 1.650 (15th February 2015)**

* Added a page to the Change Password module for entering a password recovery email address.
* Fixed bugs in the new default theme that prevented some buttons from appearing in the Read Mail module.

**Version 1.640 (1st January 2015)**

* German and Catalan translation updates.

**Version 1.640 (1st January 2015)**

* German and Catalan translation updates.

**Version 1.620 (29th September 2014)**

* Additional protection against the Shellshock bug.
* When closing the window or tab containing an email message in progress, a popup now first asks for confirmation.
* German and Catalan translation updates.

**Version 1.610 (11th August 2014)**

* German and Catalan translation updates.

**Version 1.600 (20th May 2014)**

* German, Catalan and Dutch translation updates.
* Fixed XSS vulnerabilities in popup windows.

**Version 1.590 (13th March 2014)**

* German, Catalan and Dutch translation updates.
* When a UTF-8 language is enabled (which is now the default), email messages will be converted to UTF-8 so that a mail list containing messages in different languages can be displayed properly.

**Version 1.580 (13th January 2014)**

* Malaysian, German, Catalan and Dutch translation updates.

**Version 1.570 (5th October 2013)**

* German, Catalan and Dutch translation updates.

**Version 1.560 (13th August 2013)**

* The subject line for an autoreply message can now be more easily customized in the Filter and Forward Mail module.
* Messages matching an existing filter can be displayed as search results.
* A filter can be applied to existing matching messages, to move them to the same destination folder that they would have been on delivery.
* German, Polish, Catalan and Dutch translation updates.

**Version 1.550 (14th May 2013)**

* German, Catalan and Dutch translation updates.

**Version 1.540 (3rd February 2013)**

* German, Catalan, Dutch and Polish translation updates.

**Version 1.530 (16th November 2012)**

* Minor translation updates.

**Version 1.520 (22nd September 2012)**

* Changed the default theme for non-webmail installs to the Gray Framed Theme.

**Version 1.510 (30th June 2012)**

* Added support for Ubuntu 12.04.
* The list of allowed directories for users in the File Manager, Protected Web Directories and Upload and Download modules can now include variables like $USER and $GROUP.

**Version 1.500 (21st January 2012)**

* Minor improvements in the Read Mail module.

**Version 1.490 (4th October 2011)**

* More German translation updates, thanks to Raymond Vetter.
* Fixes for forwarding messages with multiple inline images.
* Better default from address for autoreplies.

**Version 1.480 (5th August 2011)**

* German translation updates, thanks to Raymond Vetter.
* The time between autoreplies to the same address now defaults to 1 hour.
* Added vCard and CSV import support to the address book page of the Read Mail module, thanks to Eric Holtzman.
* When forwarding or replying to email with inline images, they are no longer shown as attachments.

**Version 1.470 (30th March 2011)**

* Major dutch translation updates, thanks to Gandyman.
* Added a checkbox (on by default) to not forward bounce emails, which can cause mail loops.
* Text for mail filter rules that match on headers is now automatically escaped unless the new "Regular expression" box is checked, which makes creation of simple substring matching rules easier for users.

**Version 1.460 (2nd December 2010)**

* Added option to select the character set of automatic reply messages.
* Added an option to the Advanced Search page of the Read Mail module to limit results to messages with attachments.

**Version 1.450 (28th August 2010)**

* Split the GPG key management page up into separate tabs, and added a section for importing a key from a public keyserver.
* Added a preferences page to the Read Mail module for setting the default GPG signing key, and enabling signing for recipients by default.
* When sending encrypted email using the recipient's key, it will be automatically fetched from a keyserver if not already in your keyring.
* Messages being auto-responded to will first be checked for spam, if SpamAssassin is installed.

**Version 1.440 (5th March 2010)**

* Links in HTML email are now opened in new windows.
* When showing the mail list, use the most common character for the page, so subject lines show up correctly.
* Quick autoreply and forward setup pages now only show un-conditional rules.

**Version 1.430 (7th December 2009)**

* Autoreply messages starting with &lt;html&gt; or &lt;body&gt; will now be sent using the text/html MIME type.
* Removed limits on the size of an address book group.
* Put text/plain alternative body part before text/html, to be compliant with RFC 2046.

**Version 1.420 (17th September 2009)**

* Dutch translation updates, thanks to Gandyman.
* When an autoreply is deleted, the underlying message file is deleted too
* Split up the Read Mail preferences page into more user-friendly sections.
* Mail with HTML and text bodies now uses a multipart/alternative sub-attachment, so that other attachments are shown properly in mail clients like Hotmail and Yahoo.

**Version 1.410 (10 June 2009)**

* Mail filters that deliver to mbox-format folders now use Procmail locking.
* Creating of filters that match headers is much easier and less error-prone, thanks to a menu for selecting prefix or postfix matching.
* When reading and replying to email, the original character set is now properly used and respected.
* The original sender's email address is now included in the 'wrote' line when replying to or forwarding a message.
* Added an SMTP port option to the module configuration in the Read Mail module.
* When replying to a message, if the original to address is in your list of allowed addresses or marked as a from address in your addressbook, it will be used as the default sender in the response.
* Improved the Usermin search function to use a more consistent layout and include links to the pages matching text was found in.

**Version 1.400 (18 March 2009)**

* Fixed several bugs in Usermin 1.390, in particular the File Manager module and popup windows.

**Version 1.390 (11 March 2009)**

* Converted all modules to use the new WebminCore API, which reduces memory use between modules and is pre-loaded by default to improve response times.
* Added a major Catalan translation update from Jaume Badiella.
* Updated the Disk Quotas user interface to use the new Webmin UI library.
* Re-wrote the SSH Configuration module to use the new Webmin UI library, for a more consistent look.
* Updated the SSH Configuration Host Options section to support all recent client options, and re-designed the Your SSH Keys section to support multiple keys of different types.

**Version 1.380 (25 January 2009)**

* Sent email in HTML format now has a text-format version attached automatically as well.
* Filters based on a message's sender, recipient or subject can now be easily created.
* Added allowed and denied addresses tabs to the Address Book page.
* Fixed the search for messages from the same sender in Maildir folders.
* Converted the SpamAssassin and PostgreSQL modules to use the new Webmin UI library, and generally cleaned up their layout.
* Updated the Java SSH applet to the latest version.

**Version 1.370 (20 October 2008)**

* Converted several modules to use the new Webmin UI library.
* Autoreply messages containing non-ASCII characters are now properly quoted-printable encoded.
* Added text boxes to the GnuPG encryption, decryption, signing and verification pages for working on pasted text.
* When replying to a signed email, the PGP signature is no longer included in the response.
* Added full support for SSH type 2 keys, thanks to Sean Cox.
* Added buttons to the SpamAssassin auto-whitelist page for permanently allowing or denying selected addresses.

**Version 1.360 (12 August 2008)**

* When copying or moving mail between IMAP folders, the current read status is preserved. This also applies when mail is moved to the trash.
* Email headers such as the subject and from address that use 8-bit characters are now properly MIME-words encoded.
* Catalan translation updates by Jaume Badiella.
* Improved support for SSH version 2 keys, thanks to Sean Cox.
* Allow scheduling of downloads in the background at selected times, by users who are already allowed to do immediate background downloads.

**Version 1.350 (25 May 2008)**

* Make the Custom Commands UI consistent with Webmin, support SQL custom commands, and display the upload progress window.
* Added Fetchmail global configuration options to control if users can setup scheduled checking or start the fetchmail daemon.
* Fixed a bug that broke the file manager when referrer checking is enabled.
* Messages flagged as deleted in a Maildir folder (typically by an IMAP server) are now skipped by default.
* Better syncing between IMAP flags and Maildir filenames.
* Added a button in the popup address chooser to select a single address.
* Sped up the display of new messages in large mailboxes, by checking for attachments all at once.
* Always set Content-Disposition: Attachment when saving attachments, to force the save dialog.
* Messages that have been replied to are now tracked and flagged by a small icon in the mail list. When using Maildir folders, the mesage files are also updated to synchronize with IMAP clients.
* Added a page for viewing and removing entries from the user's auto-whitelist file.
* Added fields for sending an email notification when a background download or file upload completes.

**Version 1.340 (26 March 2008)**

* Big Czech translation updates, thanks to Petr Vanek and the Czech translation team.
* All popups in Usermin are now XSS-safe, and thus do not need protection from unknown referers which prevented them from working in some browsers (like IE).
* All Usermin session IDs are now stored MD5 hashed, to prevent sessions from being captured if the sessiondb DBM is somehow read by an attacker.
* Messages that the IMAP server indicates are flagged for deletion are now struck through on the mail list.
* The icon on the mail list indicating if a message has an attachments is now 100% accurate, rather than being based on a header check only. This will slightly slow down the mail list the first time it is used though.
* If a default folder is set, move it to the top of the folder list.
* Added reply buttons when viewing a sent message, for continuing a thread you last posted on.
* Your own email address is no longer included in the CC list when replying to all, by default. The old behaviour can be returned using a new Preferences page option.
* The Print button now opens email in a separate window so that frames don't appear in the printout, and the page that appears now uses standard the Usermin UI library.
* The trash folder is now created and used when all folders are fetched from an IMAP server.
* Fixed a bug that broke searching by message body contents.
* In the Filter Mail module, added a filter condition to match mail with a spam score at or above some level. Also, if spam deletion above some level level is configured globally or for the user's domain, display a non-editable rule for it.

**Version 1.330 (8 February 2008)**

* Links from unknown referers are now blocked by default, to prevent XSS attacks. This may break browsers that don't supply a Referer: HTTP header.
* The default From: address for autoreplies now respects the default address set in the user's address book.
* Added a configuration option to the Protected Web Directories module to deny users the ability to add or edit protected directories.
* The number of unread messages in each folder can be displayed using a new Preferences option in the 'Mail folders' section. By default this is only enabled for IMAP folders, as computing the unread count for other folder types can be slow for if they contain a large number of messages.
* IMAP and POP3 folders can now have their logins set to be the same as the Usermin login.
* When deleting or moving all messages in the search results folder, the original emails are correctly deleted.
* Added warnings if a message it sent with no recipient or subject.
* Added tabs to the Upload and Download module, and support for downloading a whole directory in ZIP format.
* MySQL and PostgreSQL user-interface related settings can now be made on a per-user basis, rather than being global.
* Fixed a bug in the MySQL module that could prevent logins.

**Version 1.320 (20 December 2007)**

* Added a search box to the left frame of the blue theme, for finding modules, config options, help pages and text.
* All images, CSS and other static content served by Usermin has an HTTP Expires for 1 week in the future, to improve cachability.
* Changed the error message that appears when Webmin detects a link from another web page.
* Mail reading user interface cleanups, such as tabs on the address book page.
* The Trash folder name can now be set using a new Preferences page option.
* Inline or remote images in email can be hidden by default by a setting on the Preferences page, then displayed with a link on the Read Mail page.
* When viewing a message you can now reply from the same page using the new 'Quick reply' collapsible section.
* When mail in a Maildir format folder is marked as read or special, flags on the underlying filename are also updated so that the new status is visible to IMAP clients.

**Version 1.310 (7 November 2007)**

* The current folder position is now preserved when reading and replying to email.
* When using an IMAP inbox, the read and special flags are now fetched from and updated on the IMAP server, rather than in a separate file kept by Virtualmin. This allows them to be synced with other IMAP clients like Thunderbird and Outlook.
* Many improvements to the way attachments are displayed when reading or forwarding mail, such as use of tables, links to download and view, and nicer type descriptions.
* When replying to or forwarding an HTML message with inline images, they are properly preserved in the new email.
* Added Preferences page options to move email to the inbox when whitelisting or reporting a non-spam.
* Added links to download all attachments from a message as a ZIP file, and to show all attached images on a single page as a slideshow.
* Embedded images from Outlook are properly displayed.
* Added a Preferences page option to control the wrapping of text messages.
* Added links to select read, unread and special messages.
* Added global configuration settings to use MySQL, PostgreSQL or LDAP backends for storing SpamAssassin preferences.

**Version 1.300 (20 September 2007)**

* Added sysadmin-configurable options in the Filter Mail module to create a .forward file that runs procmail automatically, and to set the minimum time between automatic replies.
* Fixed several indexing bugs in the Read Mail module that caused some messages to appear as _None_ in the mail list after deletion.
* Added a Save and Edit button to the Read Mail module, to save a draft copy of a message and continue working on it.
* Attachments in the Read Mail module are now shown using a table rather than as icons.

**Version 1.290 (2 August 2007)**

* Completely re-wrote the indexing system for mailboxes, to make it faster and more reliable. Messages are now identified by a unique ID, such as the maildir filename or IMAP UID.
* Updated all pages in the Read Mail module to use ui-lib.pl for interface generation, to provide a more consistent and themable look.
* Messages marked as Special are now automatically added to a virtual folder of the same name, making them easier to find.
* Added a Preferences option to whitelist recipients of email that you send.
* Added pages to the Filter Mail module to quicky setup an autoreponder or forwarding.

**Version 1.280 (2 June 2007)**

* Added a Read Mail module Preferences option to have addressbook entries automatically added to the SpamAssassin whitelist.
* When searching a spam, virus or drafts folder, the same buttons that appear in te original folder will appear in the search results.
* Added Preferences page options for selecting the sent mail and drafts folder filenames.
* Added a search box to the address chooser popup.

**Version 1.270 (8 April 2007)**

* Change the default Blue Framed theme to match the style of www.webmin.com, and generally look nicer.
* Replace the old HTMLarea widget for HTML editing in the File Manager and Read Mail modules with Xinha.
* The Filter Mail module can now detect an entry in /etc/aliases that would override the user's .procmailrc, and displays an appropriate warning.
* When automatic domain appending is enabled, both the first and second parts of the domain name are tried.
* View the [detailed change log][1].

**Version 1.260 (27 February 2007)**

* Changed the default theme to the new Blue framed theme.
* Added tabs to the Compose Email page, to allow bigger To:/Cc: fields.
* Fields for client-side attachments are now dynamically generated.
* View the [detailed change log][2].

**Version 1.250 (21 January 2007)**

* Added the Filter Mail module, which provides a simpler interface to Procmail and is better integrated with the Read Mail module's folder system.
* Added a popup window for tracking file uploads in various modules.
* View the [detailed change log][3].

**Version 1.240 (28 November 2006)**

* Added server-side unzipping to the File Manager module, and direct downloading of files from the search results window.
* In the MySQL module, the character set for new databases can be selected.
* MySQL backups can be compressed with gzip and bzip, and compressed backups restored.
* Added a field for selecting the compatability format for MySQL, for restoring into older versions, Oracle and other databases.
* View the [detailed change log][4].

**Version 1.230 (15 September 2006)**

* When the Read Mail module is set to use an IMAP server, all folders are taken exclusively from the server - local folder access is no longer available.
* Improved caching for Maildir folders in the Read Mail module.
* The file manager can now extract tar.bz2 files, store a history of entered paths, and show the total size of a directory.
* Table data can be sorted by clicking on headers in the MySQL and PostgreSQL modules.
* Improved support for PostgreSQL 8, including editing tables with no OID field.
* View the [detailed change log][5].

**Version 1.220 (29 June 2006)**

* Fixed a security hole that would allow a remote attacker to view any file on the system.
* Added caching to speed up Maildir folders in the Read Mail module.
* View the [detailed change log][6].

**Version 1.210 (16 June 2006)**

* All links in the Read Mail module now refer to messages by ID rather than index, to avoid the problem of indexes becoming invalid when mail arrives after the mailbox has been displayed.
* Added support for automatic clearing of mail folders (such as Spam or Trash) whose size or age exceeds some limit.
* Added support for copying the entire contents of a folder and deleting multiple folders at once to the Read Mail module.
* Improved search speed for Maildir folders in the Read Mail module, by using an index.
* Numerous other UI changes in the Read Mail module, such as configurable date format / timezone, message highlighting, and easier selection.
* Updated the Mail Forwarding and Replies module to support attachments to autoreplies.
* View the [detailed change log][7].

**Version 1.200 (4 Apr 2006)**

* Added the MIME Type Programs module, for editing ~/.mailcap.
* Implemented support for editing HTML files using a WSIWYG editor in the File Manager.
* View the [detailed change log][8].

**Version 1.190 (30 Jan 2006)**

* Added support for DAV clients, using the /dav URL path (when enabled).
* The SSH module supports version 2 private and public keys, and allows version 2 authorized keys to be edited.
* The File Manager module can show small previews of GIF, JPEG, PNG, TIFF, PDF and Postscript images, scaled down on the server side.
* The Scheduled Emails module now allows additional files to be attached to the sent email.
* View the [detailed change log][9].

**Version 1.180 (30 Nov 2005)**

* Fixed a possible remotely exploitable security hole caused by a bug Webmin's use of the Perl syslog function.
* The File Manager module can search for files by their content, and preview images.
* The Mail Forwarding module allows a From: address for autoreplies to be entered in 'simple' mode.
* View the [detailed change log][10].

**Version 1.170 (18 Oct 2005)**

* Comments can be entered for jobs in the Scheduled Cron Jobs module.
* The Mail Forwarding module remembers the autoreply message even when it is disabled.
* View the [detailed change log][11].

**Version 1.160 (20 Sep 2005)**

* Fixed a security hole that allows a remote attack if the 'Support full PAM conversations?' option is enabled in the Usermin Configuration module. Thanks to JPCERT for finding this bug.
* The Cron module allows a start and end date to be specified for jobs.
* Added a simpler interface to the Mail Forwarding and Replies module, for setting up one or more of normal delivery, auto-responding and forwarding.
* The MySQL and PostgreSQL modules allow multiple tables to be deleted at once, and display search forms when a database has too many tables.
* The Upload and Download module can now be used to fetch a file from the server running Usermin to the PC on which your browser runs.
* View the [detailed change log][12].

**Version 1.150 (15 Jul 2005)**

* Mail lists in the Read Mail module are now sortable, by From:, Subject: and Date: headers. Also, when searching email, results are put into a virtual folder for easier navigation, rather than simply being displayed on a single page.
* Simplified the Header and Body Tests page in the SpamAssassin module, to more easily allow the definition of rules using the header, score and describe directives.
* View the [detailed change log][13].

**Version 1.140 (2 Jun 2005)**

* Improved the way the OS is detected at install time, so that new versions will be automatically supported.
* The Change Password module now calls PAM properly, so that restrictions on password quality and length are enforced.
* Added support for groups to the Protected Web Directories module.
* Added an icon in the SpamAssassin module for changing the destination for mail classified as spam.
* View the [detailed change log][14].

**Version 1.130 (12 Apr 2005)**

* Fixed a nasty bug that could cause configuration file permissions and ownership to be changed when they are modified.
* Users can now be prevented from accessing certain directories by a new option on the module configuration page.
* View the [detailed change log][15].

**Version 1.120 (24 Mar 2005)**

* Added support for virtual folders in the Read Mail module.
* Spam can now be reported and blocked in both the mail listing and simple message pages in the Read Mail module.
* In the Scheduled Emails module, the text to send can now come from a file.
* View the [detailed change log][16].

**Version 1.110 (24 Jan 2005)**

* Added the Scheduled Emails module, for sending messages at pre-set times or on a regular schedule.
* Updated the Mail Forwarding module to support the vacation program, for sending automatic email replies.
* Added support for sending and receiving delivery and disposition status notifications to the Read Mail module.
* View the [detailed change log][17].

**Version 1.100 (13 Nov 2004)**

* Incorporated a DHTML-based HTML editor into the Read Mail module, which works far better than the previous Java-based editor.
* Added support for selecting specific MySQL and PostgreSQL tables to back up.
* Added an option to the Change Password for updating the user's MySQL password at the same time as the Unix password.
* Added support for Solaris 10 (thanks to Sun), SuSE 9.2, Mandrake 10.1, FreeBSD 5.3 and several Darwin versions.
* View the [detailed change log][18].

**Version 1.090 (5 Sep 2004)**

* Added support for sending mail via an SMTP server that uses authentication to the Read Mail module.
* Added a check to prevent multiple clicks on the Delete button to the Read Mail module, which could cause the wrong messages to be removed.
* When PAM is used for authentication, expired passwords are now detected and the user is prompted to select a new password (if this feature is enabled on the Usermin Configuration module).
* Fixed a security problem that can occur at installation time only, if the /tmp/.webmin directory has already been created by a malicious user.
* View the [detailed change log][19].

**Version 1.080 (3 Jun 2004)**

* Improved the searching facilities of the SpamAssassin module, so that you can search by spam score or full body contents.

**Version 1.070 (5 Apr 2004)**

* Adding a configuration option to the Custom Commands module for limiting which commands are visible to which Unix users and groups.
* The SpamAssassin Mail Filter module now supports searching of the suspected Spam folder.
* The File Manager module can now download an entire directory as a ZIP, or tar.gz archive, and extract multiple files from an uploaded archive.
* View the [detailed change log][20].

**Version 1.060 (26 Jan 2004)**

* Ported the Protected Web Directories module for managing .htaccess files from Webmin to Usermin.<br />
* Added a field for doing a quick subject and sender search to the Read Mail module, as well as a form for doing an advanced multi-field and folder search.<br />
* Added support for address groups to the address book in the Read Mail module.<br />
* Added a Preferences page option in the Read Mail module to enable a Trash folder, into which deleted messages are moved.<br />
* Added the ability to decode winmail.dat files and delivery-status bounce information attachments to the Read Mail module.<br />
* In the GnuPG encryption module, secret keys can now be exported, and you can choose to export the key to a file instead of the browser.<br />

**Version 1.051 (7 Nov 2003)**

* Added support for asking a user whose password has expired to select a new one, on systems that use an /etc/shadow file.<br />
* Added buttons in the Read Mail module for reporting a spam message to razor and blacklisting the sender, if SpamAssassin module is installed.<br />
* Added support for listening on multiple IPs and ports.<br />

**Version 1.040 (12 Sep 2003)**

* Added the PostgreSQL Database module, which has a similar interface to the existing MySQL module.<br />
* Added the SpamAssassin Mail Filter module for setting up procmail to run SpamAssassin, managing its configuration, and reading messages classified as spam.<br />
* Ported Usermin to Trustix 2.0 and improved the FreeBSD 5.1 and SuSE 8.2 ports.<br />

**Version 1.030 (4 Jul 2003)**

* Ported the Caldera-style theme for Webmin to Usermin as well.<br />
* Added access control options to the Read Mail module to limit the types of folders available.<br />
* Added an option to allow detaching of files in the Read Mail module to the server.<br />
* Gave the autoreply feature of the Mail Forwarding module the ability to limit the rate of replies to the same address.<br />
* Improved the File Manager and SSH/Telnet modules to be usable from browsers on OS X.<br />
* Improved the setup.sh script to take a directory parameter, to which all Usermin files will be copied at install time, such as /usr/local/usermin. This allows the original usermin-1.030 directory to be deleted after setup.sh is complete.<br />

**Version 1.020 (11 May 2003)**

* Added the Upload and Download module, similar to the one in Webmin.<br />
* Added the HTTP Tunnel module, which can be set up by an admin to allow access to some other web server via the Usermin server.<br />
* Added an option to hide dot files in the file manager.<br />

**Version 1.010 (5 Apr 2003)**

* Added support for encrypting files for multiple recipients in the GnuPG module, and sending encrypted email to multiple people in the Read Mail module.<br />
* Added support for Redhat 9, SuSE 8.2, FreeBSD 4.8 and Slackware 9.0.<br />
* For users who can select their From: address in the Read Mail module, added address book support to make defining and selection of common addresses easier.<br />
* Added a feature to the Procmail module for manually editing the config file.<br />

**Version 1.000 (20 Feb 2003)**

* **Fixed a serious security problem that allows unauthenticated remote access to Usermin**.<br />
* Added find and replace and goto line support to the File Manager module's editor.<br />
* Fixed a bug that caused problems when logging in on OSX, and stopped Java applets from working under IE.<br />
* Added support for IMAP folders and an IMAP inbox in the Read Mail module.<br />

**Version 0.990 (5 Feb 2003)**

* Updated the Read Mail module to better handle URLs in email.<br />
* Usermin modules can now be cloned by Webmin 1.060.<br />
* Added a button for logging out of a POP3 server to the Read Mail module.<br />

**Version 0.980 (16 Dec 2002)**

* Added width and height tags to all images in the MSC theme, so that it appears better in Mozilla and Netscape.<br />
* Added support in the Read Mail module for DBM mailbox index files (turned off by default though).<br />

**Version 0.970 (4 Nov 2002)**

* Fixed several bugs related to SSL key generation, such as a short expiry time and the possibility of two keys with the same attributes being generated on different systems.<br />
* The address book in the Read Mail module has been changed to allow the easier selection of multiple addresses.<br />
* The File Manager now supports sorting of the right-hand file list by clicking on column headings.<br />

**Version 0.960 (8 Oct 2002)**

* Usermin now generates an SSL key at install time, instead of using a built-in key. Anyone using it in SSL mode **must** generate their own key, as the built-in one is insecure because everyone has access to it! This can be done within Webmin on the SSL Encryption page of the Usermin Configuration module.<br />
* Fixed bugs that could cause the miniserv.pl process to use up all available CPU time.<br />
* Added the Mount Filesystems module, for mounting and unmounting Linux systems with the 'user' option set.<br />
* Ported Usermin to Redhat 8.0 and SuSE 8.1.<br />

**Version 0.950 (12 Sep 2002)**

* Added support for POP3 folders and inboxes to the Read Mail module.<br />
* Also added support for MH directory folders and inboxes.<br />
* Added the ability to restrict which modules are available to certain Unix users and groups.<br />
* Removed feedback link from all pages.<br />
* Added ports to UnitedLinux and Redhat 7.4.<br />

**Version 0.940 (15 Jun 2002)**

* Added support for folders in ~/mail or any external file to the Read Mail module.<br />
* Added a Custom Commands module, which can run selected commands from Webmin.<br />
* Added a System Documentation module, which is almost identical to the one in Webmin.<br />

**Version 0.930 (1 Jul 2002)**

* Added the Change User Details module for changing real name and shell.<br />
* Added the Apache Options Files module for editing .htaccess files.<br />
* Improved the Procmail module to support conditional sections.<br />

**Version 0.920 (4 Jun 2002)**

* Added the new MySQL Database module.<br />
* Added the new Procmail Mail Filter module.<br />

**Version 0.910 (7 May 2002)**

* Fixed a serious security hole that allows a remote attacker to login to Usermin as any user!<br />
* Added a new Fetchmail Mail Retrieval module for configuring fetchmail.<br />

**Version 0.90 (19 Apr 2002)**

* Removed the need for Authen::PAM by reading the /etc/passwd or /etc/shadow file directly if it is not installed.<br />
* Fixed a bug on some operating systems that prevents Webmin from starting at boot time if Usermin is also started at boot.<br />

**Version 0.80 (15 Apr 2002)**

* Added the ability to limit access to only certain users.<br />
* A few other minor changes and fixes.<br />

**Version 0.7 (30 Mar 2002)**

* Added a new Scheduled Commands module.<br />
* Fixed problems with the GnuPG module on FreeBSD.<br />

**Version 0.6 (18 Mar 2002)**

* Added support for multiple secret keys to the GnuPG and Read Mail modules.<br />
* Added an address book to the Read Mail module.<br />
* PAM fixups to better support FreeBSD and systems without pam\_pwdb.so.<br />

**Version 0.5 (11 Mar 2002)**

* Added the Change Password module.<br />
* Added the Scheduled Cron Jobs module.<br />
* Added GnuPG encryption, decryption, signing and verification support to the Read Mail module.<br />

**Version 0.4 (6 Mar 2002)**

* Initial release of Usermin, containing the Mail Forwarding, Read Mail, Login Script, Running Processes, SSH Configuration, SSH Login, File Manager, GnuPG Encryption, Plan File, Change Language and Change Theme modules.<br />

  [1]: uchanges-1.270.html
  [2]: uchanges-1.260.html
  [3]: uchanges-1.250.html
  [4]: uchanges-1.240.html
  [5]: uchanges-1.230.html
  [6]: uchanges-1.220.html
  [7]: uchanges-1.210.html
  [8]: uchanges-1.200.html
  [9]: uchanges-1.190.html
  [10]: uchanges-1.180.html
  [11]: uchanges-1.170.html
  [12]: uchanges-1.160.html
  [13]: uchanges-1.150.html
  [14]: uchanges-1.140.html
  [15]: uchanges-1.130.html
  [16]: uchanges-1.120.html
  [17]: uchanges-1.110.html
  [18]: uchanges-1.100.html
  [19]: uchanges-1.090.html
  [20]: uchanges-1.070.html
