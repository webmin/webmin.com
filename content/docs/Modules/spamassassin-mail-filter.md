---
title: "SpamAssassin Mail Filter"
date: 2023-07-25
weight: 495
---

### About
**SpamAssassin Mail Filter** is a powerful program for detecting un-wanted spam messages based on their headers and content. It uses a complex set of built-in rules to determine if an email is spam or not, and can also consult other databases of known spam message texts and mail servers used for sending spam. However, the `spamassassin` program itself does not perform any real filtering, instead it just takes email as input, adds special headers indicating if the message is spam or not and then writes it out again. This makes it ideal for use in a [Procmail Mail Filter](/docs/modules/procmail-mail-filter) action. 

### Filtering Spam with SpamAssassin
Assuming that you have SpamAssassin installed on your system, you can set it up to perform filtering for all users by following these steps:

1. Create a new action that feeds mail to the program `/usr/bin/spamassassin` (or wherever it is located on your system). Make sure the **Wait for action program to finish, and check result** and **Action program is a filter** boxes are checked. No conditions should be entered, unless you want to turn off spam checking for certain messages. 
2. Add a second action with the single condition **Matches regular expression** `^X-Spam-Status: Yes`. This special header is set by SpamAssassin on messages that exceed its spam threshold.  The delivery mode can be to append to the file `/dev/null` to throw away all spam, or to something like `$HOME/spam` to place it in a different mail file for users to skim through and delete. 

Because SpamAssassin occasionally falsely identifies email as spam when it is not, just throwing away messages by sending them to `/dev/null` is a bad idea. It is far better to deliver to a separate file or directory that users can read if they wish, just in case. 

By default, email identified as spam has its headers and body modified by SpamAssassin to de-activate any attachments and include a report about why it was categorized. This can be changed by editing the global configuration file `/etc/mail/spamassassin/local.cf`, the exact format of which is not covered in this chapter.

[![](/images/docs/screenshots/modules/light/spamassassin-mail-filter.png "SpamAssassin Mail Filter Screenshot")](/images/docs/screenshots/modules/light/spamassassin-mail-filter.png)

[![](/images/docs/screenshots/modules/light/spamassassin-mail-filter-message-modification.png "SpamAssassin Mail Filter Message Modification Screenshot")](/images/docs/screenshots/modules/light/spamassassin-mail-filter-message-modification.png)

