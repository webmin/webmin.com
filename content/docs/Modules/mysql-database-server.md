---
title: "MySQL Database Server"
date: 2023-05-19
weight: 415
---

On this page the '''MySQL database''' and the Webmin module managing it are explained, and the steps to follow to create databases, tables and users are listed. 

:''See [[Introduction to MySQL]]''

This module allows you to create databases, tables and fields, edit records and manage MySQL users through a simple web interface. Its icon can be found under the Servers category, and when you click on it the module's main page will display a table of icons for existing databases as shown in the screenshot below (assuming MySQL is installed and running). 

[[File:MySQL Database Server.png|none|frame|The MySQL Database Server module main page, right after installation of mariadb-server, and running the recommended <tt>/usr/bin/mysql_secure_installation</tt> to remove security breaches]]

If the database server is running but Webmin does not know the correct password to login to it with, the main page will display a *MySQL Login* form instead. You should enter the administration username into the '''Login''' field (usually root), and the corresponding password into the ''Password''' field. Even though it is possible to enter the username and password for any MySQL user, non-root users cannot perform tasks such as creating databases and tables - and so neither will the module be able to. 

By default, the module is configured to login with the username and password that the MySQL package for your distribution uses by default. Only if you have changed it manually or through Webmin will the '''MySQL Login''' page appear. 

If the database server is not installed at all on your system, the main page will display an error message like *The MySQL client program <tt>/usr/bin/mysql</tt> was not found on your system*. Check your distribution CD or website for all MySQL-related packages, and install them using the Software Packages module. Often there are several, named something like mysql, mysql-client, mysql-server and mysql-devel. Each Linux distribution seems to use a different set of packages, so make sure you install them all. 

On FreeBSD and NetBSD, the module expects the MySQL package for those operating systems to be installed. On other Unix variants, it assumes that you have compiled and installed MySQL from the source code distribution, available from http://www.mysql.com/. 

If the module complains that it cannot find the mysql program even though you have it installed, you will need to adjust the paths that it uses. This can happen if you installed it from the source instead of using the package that comes with your Linux distribution.

The MySQL module uses SQL commands to perform actions like creating tables, adding fields and editing records. To execute these commands Webmin must connect to the database server, which can be done in one of two ways. It can either run the mysql command with the correct parameters and parse its output, or use the Perl DBI library to connect directly. 

The former method is always available, because the mysql command is always installed when the database server is. However, it is not totally reliable as certain kinds of table data produce output that cannot always be parsed. For this reason, you should install the DBI and DBD::mysql Perl modules. If either is missing, a message will be displayed at the bottom of the main page prompting you to install one or both by clicking on a link. This will take you to a page in the Perl Modules module (covered in chapter 27) where DBI and/or DBD::mysql are downloaded and installed for you. 

=== Creating a new database ===
[[File:MySQL Edit Database.png|frame|none|The database editing page]]
When MySQL is first installed, a database called mysql is created that contains authentication and access control related tables. If you want to store your own data, it is best to create your own database to add tables to instead of messing with the mysql database. To do this, the steps to follow are: 
# On the module's main page, click on the '''Create a new database''' link above or below the table of existing database icons.  This will take you to a form for entering the new database's details. 
# Enter a name for the new database into the '''Database name''' field. Names should contain only letters and numbers, and no spaces. 
# It is possible to use the form to create an initial table for the new database. However, you can just as easily add one after it is created as the '''Create a new table''' section explains. 
# Click the '''Create''' button at the bottom of the form to create the database. You will be returned to the module's main page, which will now include a new database icon. 

=== Creating a new table ===
[[File:MySQL Edit Table.png|frame|none|The table editing page]]
Tables can be added to newly created or existing databases at any time. Every table has one or more fields, each of which has a type (such as integer, decimal or text) and a size. Fields can also be indexed, to speed up SQL queries that look up records based on the values in that column. 
To add a new table to a database, the steps to follow are : 
# On the module's main page, click on the database icon. This will bring you to the database editing page shown in the screenshot below, which contains an icon for each existing table and buttons for performing various actions. 
# Enter the number of fields that you want your new table to have into the '''Fields''' text box next to the '''Create a new table''' button, and then click the button. This brings up a form for entering the details of the new table and its initial fields. 
# Enter a name for this table into the '''Table name''' field. It should consist of letters, numbers and the _ character, and must be unique within this database. 
# To have its fields copied from an existing table, select it from the '''Copy fields from table''' menu. Any additional fields that you enter below in the '''Initial fields''' table will be added after the copied one. 
# The '''Table type''' menu can be used to choose a different storage type for this table. The most commonly used types are:
#;MyISAM: The standard table type for MySQL versions 3.23 and above.  On operating systems that support large files, tables of this size can be approximately 2,000,000,000 GB in size.  Table files are OS independent, keys can be 500 bytes long and 32 key columns can be used in a single table.
#;InnoDB: A superior table type that supports transactions, huge amounts of data, and runs much faster that MyISAM.
#;ISAM: The old standard MySQL table type, now replaced with MyISAM.  An ISAM table file can only be 4 GB in size, keys can only be 256 bytes long, and a table can have at most 16 key columns.
#;Heap: The data in Heap tables is stored only in memory. This makes them very fast, but useful only for temporary data as the table's contents will be lost of MySQL is shut down.  If you select the '''Default''' option or if the chosen type is not supported by MySQL on your system, the MyISAM type will be used. 
# The '''Initial fields''' section is for entering the details of the actual fields that your new table will contain. Each row that you fill in defines a single field, based on the values that you enter under each of the following headings :
#;Field name: A unique name for this field, which should consist of letters, numbers and the _ character. It is not a good idea to choose a name that is the same as an SQL reserved word, such as select, update or index.
#;Data type: From this menu you must select the type for data in this field. The most common are varchar (for variable length text strings) and int (for integer numbers). See the '''Field types''' section below for a complete list of supported types.
#;Type width: The size of data that can be stored in this field. This has different meanings depending on the type - for example, for a varchar field the width is the maximum text length, but for an int field it is the maximum number of decimal digits. Once again, the '''Field types''' section of this chapter covers widths in more detail. If you leave this text box blank for a field, the default width will be used. Many types (such as blob, text and date) have fixed sizes and so should not have a width entered at all. 
#;Primary key?: If this box is checked, this field will be part of the primary key for the table. Key fields are indexed by MySQL, so that SQL statements that refer to all of them in the where clause run faster. However, no two records can have the same values in their primary key field(s). Traditionally, the first field in a table is the key. Not all types can be used - typically, a primary key field is an int or varchar. All tables should have a primary key, so that data in them can be edited in Webmin.
#;Autoincrement?: If this option is checked for a numeric field, MySQL will automatically insert a number one higher than the maximum in the table whenever a record is added (unless the record creation statement specifies a value explicitly). This can be useful for the automatic generation of ID numbers, and is often enabled for primary key fields. 
# Once you have entered all fields, hit the '''Create''' button at the bottom of the form. If the table cannot be created for some reason, the SQL error message from MySQL will be displayed.  This can occur if a field name is invalid, or if a type width does not make sense for a type. If this happens, use your browser's back button to return to the form and fix the problems. Once the table is successfully created, you will be returned to the database editing page which will now include a new table icon. 

=== Adding and editing fields ===
[[File:MySQL Modify Field.png|frame|none|Modify field]]
New fields can be added to a table and existing ones changed or deleted. Adding a field poses no risk to existing data, but changing the type or size of one may - and deleting a field will cause the data that it contains to be lost. To add a new field, the steps to follow are: 
# On the module's main page, click on the icon for the database that contains the table, and then on the table icon. This will bring up the page shown in the image below, which lists the names, types and other details of all existing fields. 
# Select the type for the new field from the menu next to the *Add field of type* button before clicking it. See the '''Field types''' section below for a list of types and their purposes. 
# On the field addition form that appears, enter a unique name for this field into the '''Field name''' text box. No two fields in the same table can have the same name, and only letters, numbers and _ can be used. 
# If you are adding a char or varchar field, you must enter a maximum number of characters into the '''Type width''' text box. If adding a float, double or decimal field, you must enter two numbers into the '''Width and decimals''' text boxes. The first is the total number of digits that a value can contain, and the second the number of digits to the right of the decimal point. For negative numbers, the minus sign counts as a digit - so a field with '''Width and decimals''' set to 5 and 2 could store numbers from 99.99 to 999.99. For date, datetime, time, blob and text fields, there is no width input at all, as these types have fixed or unlimited sizes. For enum and set fields, you must enter a list of possible values into the *Enumerated values* text box. For all other field types (such as int) the '''Type width''' can be either set to '''Default''' to have the field use the default size for the chosen type, or a width can be entered.  For int fields, this is the maximum number of digits that a value in this field can contain. 
# For integer field types (such as int and smallint), the *Type options* radio buttons allow you to choose if values in this field should be left-filled with zeros (the '''Fill with zeros''' option), or if they should be unsigned (the '''Unsigned''' option).  If '''None''' is selected, values will be signed and no additional zeros will be added. For float, double and decimal fields, the same '''Type options''' are also displayed but without the '''Unsigned''' option. Fields of these types are always signed.  For char and varchar fields, Type options has two different choices - '''Case sensitive''' and '''Case insensitive'''. If insensitive is selected, SQL queries that match values in this field will ignore case differences. 
# To prevent SQL NULL values being inserted into this field, change the '''Allow null?''' input to '''No'''. This can be useful if every record should have a value for this field, and must be selected if this field is going to be part of the primary key for the table. 
# To have a default value inserted when a record is added to the table and no value is specified for this field, fill in the '''Default value''' text box. Naturally, the value must be of the correct type for the field. If your table already contains some rows, their values for this field will be set to whatever you enter here when the new field is added. 
# If this field is going to be the key for the table, change the '''Part of primary key?''' selection to '''Yes'''. More than one field part of the key, in which case it is a combination of all of them. 
# Finally, click '''Create'''. If there are no errors in your inputs, the field will be added to the table and you will be returned to the table editing page.

Newly created or existing fields can be edited as well, by following the steps below. However, making changes to the type of a field or reducing its size may result in data loss if the old values are not compatible with the new type. For example, converting a varchar to an int will cause all non-numeric values to be lost - however, converting an int to a varchar is generally safe as long as the new size is large enough. 

# On the module's main page, click on the icon for the database that contains the table, and then on the table icon. This will bring up the page shown in the screenshot above, which lists the names, types and other details of all existing fields. 
# Click on the name of the field that you want to modify to go to the field editing form. 
# To re-name the field, edit the '''Field name''' text box. 
# To change the field's type, select a new one from the *Data type* menu. As explained above, this should be done with care. 
# Depending on the current type, different inputs will be displayed for editing its size. These are the same ones as explained in step 4 of the field creation instructions above. Increasing the size of a field will not harm any data that it contains, but decreasing it will cause values to be truncated if they are longer than the new size. 
# The '''Type options''', '''Allow nulls?''', '''Default value''' and '''Part of primary key?''' inputs have the same meanings here as in the field creation steps. Change them if you want to adjust these options for the existing field. 
# When you are done, hit the '''Save''' button at the bottom of the form. The field will be immediately updated, and any data that it contains will be modified or truncated as appropriate. 

An existing field can be removed by clicking the '''Delete''' button on the field editing form instead of '''Save'''. Any data that it contains will be immediately deleted forever. Naturally, you cannot delete the last field in a table. 

=== Field types ===
MySQL supports most of the same field types as other SQL databases. The best source of information on types is the official MySQL documentation, at http://dev.mysql.com/doc/refman/4.1/en/data-types.html (forMySQL 3 and 4), or http://www.mysql.org/doc/refman/5.0/en/data-types.html (for MySQL 5).

Newer versions of MySQL may introduce more types, but you should still be able to edit the data in fields of unsupported types though. 

=== Viewing and editing table contents ===
The MySQL module allows you to view the contents of any table in any database. Tables that have a primary key can have their records modified or deleted and new ones added as well. Unfortunately, there is no way to edit the contents of a table without a key, as the module needs some way of identifying specific records. All tables in a database should have one though. 

To view the contents of a table, follow these steps: 
# On the main page, click on the icon for the database that contains the table, and then on the icon for the table itself. 
# On the table editing form, click on the '''View Data''' button at the bottom. This will bring you to a page containing a table of the first 20 rows in the table. 
# If the table contains more rows than can be displayed on one page, the start and end of the visible range and the total number of rows will be displayed at the top. Next to it are left and right arrows for moving to the next or previous 20 records. 
# For large tables, a search form is also displayed at the bottom of the page. To use it, select a field name from the first menu, a comparison type from the second and enter a value to search for into the final text box. When the '''Search''' button is clicked, only rows for which the chosen field matches will be displayed.  To switch back to viewing all records, click the '''Reset search''' link that now appears above the table. The '''contains''' comparison type finds records in which the field contains the entered text, while the '''matches''' type finds records for which the field value matches an SQL pattern as used in a like clause.  In such a pattern, % matches any string of characters, and _ matches any single character - just like * and ? do at the shell prompt. 
# When viewing a large table, a button labeled '''Jump to''' is also displayed at the bottom of the page. If a number is entered into the adjacent field and the button clicked, the display will move immediately to that row. 

If the table has a primary key, this same page can also be used to edit, delete or add records. Records to edit must first be selected using the checkboxes to the right of each row, or the '''Select all''' and '''Invert selection''' links. When you click the *Edit selected rows* button, the page will be re-displayed with the values of all chosen records in text boxes. Make whatever changes you like, and click the '''Save''' button at the bottom of the page to update the database. Or hit '''Cancel''' if you want to stop editing without saving your modifications. 

To delete records, select them using the same checkboxes and selection links, and click the '''Delete selected rows''' button. The chosen records will be immediately removed from the database with no further confirmation. 

To add a new record, hit the '''Add row''' button below the table. An additional row will appear containing empty text boxes for you to enter new details. Clicking '''Save''' will add the new record to the table, and move the display so that you can see the new row. Alternately, you can click '''Cancel''' if you change your mind about adding a record. 

Normally, records are edited or added in text fields that appear in the table in the appropriate columns. However, if you are editing a table that contains a blob or text field, or if the *Use vertical row adding interface* module configuration option is enabled, a different layout is used. Instead, text boxes for fields are listed in a separate box inside or below the table, with field name labels to the right. For text or blob fields, a text box is displayed so that you can enter multiple lines of text if necessary. 

=== Deleting tables and databases ===
When a table is removed from a database, all records and fields that it contains will be lost. You can remove any table, although deleting those in the mysql database is a bad idea as they contain important MySQL access control information. To remove one, the steps to follow are: 
# On the module's main page, click on the icon for the database that you want to remove the table from, and then on the icon for the table itself. 
# Click on the '''Drop Table''' button below the list of fields.  This will take you to a confirmation page that asks if you are sure and tells you how many records will be deleted. 
# To go ahead, click the '''Drop Table''' button again. Once it has been removed, you will be return to the list of surviving tables in the database. 

It is also possible to delete an entire database and all the tables and records in it. Any database can be removed, but deleting the mysql database is a very bad idea. As usual, unless you have made a backup there is no way to undo the deletion. 

Assuming you really want to delete a database, follow these steps: 
# On the main page, click on the icon for the database that you want to remove. 
# Hit the '''Drop Database''' button below the list of tables. A confirmation page will be displayed, telling you how many tables and records will be lost if you go ahead. 
# To continue with the deletion, click the '''Drop Database''' button and you will be returned to the module's main page when it is done. 
# Alternately, you can choose to remove all the tables and their records by clicking on '''Just delete all tables''' instead.  The database itself will be left empty. 

=== Executing SQL commands ===
The MySQL module also provides a simple interface for running SQL commands on a database and displaying their output. The steps to use it are: 
# On the main page, click on the icon for the database that you want to run commands in. 
# Click on the '''Execute SQL''' button below the list of table icons.  This will take you to a page for entering SQL commands, running files of commands and loading data into the database. 
# Enter any one SQL command into the text box at the top of the page and hit the '''Execute''' button. If there was a mistake in your SQL syntax or the command cannot be executed, the error message from MySQL will be displayed. Otherwise, a table of results from the SQL (if any) will be shown. Only SELECT statements produce results - UPDATE, INSERT and other commands that modify records do not. 
# When you are done viewing the results, use the *Return to Execute SQL form* to return to the form. 
# Every command that is executed successfully is added to a history for the database. You can re-run a previous SQL command by leaving the text box empty and selecting it from the menu below, then hitting '''Execute'''. To clear out the command history, click the '''Clear History''' button instead. This can be useful if it is getting cluttered up with old statements that you don't need to re-use. 

The same page can be used to run multiple commands from a text file and display their output. Because the process is exactly the same as restoring a backup, it is explained in the restore part of the '''Backing up and restoring a database''' section below. 

=== Backing up and restoring a database ===
[[file:MySQL Backup all Databases.png|frame|none|MySQL Backup all Databases]]
If one of your databases contains important information, it should be backed up regularly in case a disk failure or SQL mistake causes data loss. It is also a good idea to create a backup before performing some potentially risky operation, such as changing the type of a field or running a complex SQL statement that modifies lots of records. 

To use the module to make a backup, the steps to follow are: 
# On the main page, click on the icon for the database that you want to backup. 
# Click on the '''Backup Database''' button below the list of tables.  This will take you to a form for entering the backup destination and options. 
# In the '''Backup to file''' field, enter the full file path that the backup should be written to, such as ''/tmp/backup.sql''.  If the file already exists, it will be overwritten. 
# To restrict the backup to only some records, de-select the '''All rows''' option for the *Only backup rows matching where clause* field and enter an SQL WHERE clause into the adjacent field, for example ''foo = 'bar'''. This only works if the clause is valid for all tables in the database, so in the example all tables would need to have a ''foo'' field. 
# If the '''Add drop table statements to backup?''' field is set to '''Yes''', the backup will include SQL statements to delete existing tables of the same name when restoring. This means that if you restore it on another system, data in those tables will be replaced with the new data from the backup. If '''No''' is selected, the restored data will be added to any that already exists. The best choice really depends on what you are trying to do. For a normal backup, you should select '''Yes''' so that any corrupt or conflicting data is removed when the backup is restored. However, if you are transferring records to another system or database '''No''' should be selected instead so that existing records in the target table are not lost. 
# To make the backup, hit the '''Backup Now''' button at the bottom of the form, and page showing its success or failure will be displayed. 

MySQL backup files are in fact just lists of SQL CREATE TABLE and INSERT statements that when run restore the database to the state it was in when the backup was made. Although this uses more disk space than a more compressed binary format would, it allows you to easy view and modify the file if you wish. It also means that a backup file can be used on a system with a different architecture, as the file contains only ASCII text. 

If you have a database that is being used for an important production purpose, it should be backed up regularly, such as once per day. Instead of following the instructions above every day, you can use the Scheduled Cron Jobs module (covered in chapter 10) to create a job that does the backup for you. To find out what command to run, use the instructions above to make a backup first and then visit the Webmin Actions Log module (covered in chapter 54) to see command that it used. 

Once a backup file has been created, it can be restored on the same system or on another server running MySQL. Depending on what the '''Add drop table statements to backup?''' field was set to at backup time, the contents of any existing tables with the same names as those in the backup may be deleted. Therefore you should generally only restore if the tables do not exist, or contain outdated or invalid data that you want to overwrite. 

Because a backup file is just a list of SQL statements, the restoration process just involves running all the commands in the file. This means that you can follow these same steps to execute a file of your own commands as well: 
# On the module's main page, click on the icon for the database that the backup should be restored into. 
# Click on the '''Execute SQL''' button, and scroll down to the *Select SQL commands file to execute on database* section. 
# If the backup file is on the system running MySQL and Webmin, choose the '''From local file''' option and enter the full path to the file into the adjacent text field. If the backup is on the PC that your browser is running on, choose *From uploaded file* and use the '''Browse''' button to select the backup file. 
# Hit the '''Execute''' button to restore the backup or execute the SQL commands in the file. A page listing all output from MySQL as the execution proceeds will be displayed. Generally there will be none unless an error occurs or the file contains SELECT statements. 

=== Managing MySQL users ===
[[File:MySQL User Permisions.png|frame|none|MySQL User Permisions]]
Your MySQL database server requires all clients to authenticate themselves with a username and password before they can execute SQL commands. It has its own tables of users, passwords and permissions that are consulted when a client tries to login, rather than the Unix user files /etc/passwd and /etc/shadow. Detailed permissions can be defined for each user, in order to limit the kinds of SQL statements that he can use, the client hosts he can connect from, and the databases, tables and fields that he can modify. 

Typically after MySQL has been first installed, only the root user is able to login. This user will have permissions to access all databases and tables and perform all actions, and so is generally used for administration purposes only. If you want to write an application that uses a database, it is a good idea to create another user for that purpose and set up the application to login as that user. 

The standard MySQL install also creates an '''Anonymous''' user with no password and access to databases starting with test. This special user is used for any login attempt for which no other matching user is found. Anonymous users are explained in more detail below. 
[[File:MySQL Create User.png|frame|none|Create User]]
To add a user, the steps to follow are: 
# On the module's main page, click on the '''User Permissions''' icon. This will take you to a page listing existing users, as shown in the screenshot below. 
# Click on the '''Create a new user link''' above or below the table to go to the user creation form. 
# In the '''Username''' field, select the second radio button and enter a name for this user. Even though it is possible to create multiple user entries with the same name as explained later, this new one should be unique. 
# Assuming you want the user to have a password, change the '''Password''' field to '''Set to''' and enter it in the adjacent field. If you choose '''None''', then no password needs to be given, and attempts to login with a password will be rejected. 
# To allow this user to login only from a specific host, select the second radio button in the '''Hosts''' field and enter a host name into the text box. The hostname must be the same as the one returned by a reverse lookup of the client's IP address, which will almost always be a complete hostname like ''pc.example.com'' instead of just ''server''. You can enter an IP address instead, or a hostname or IP address SQL pattern like ''%.example.com''.  To allow a user to connect only from the same system as the database server is running on, enter ''localhost'' as the host. If '''Any''' is selected, this user will be able to connect from any host.  Be careful when creating a user who has a host specified - if he tries to connect from somewhere else and an Anonymous user exists with a matching host, he will be logged in as the Anonymous user instead! 
# In the '''Permissions''' list, select the entries for the actions that you want the user to be able to perform. For an application user, being able to select, insert, update and delete records is usually enough. Un-trusted users should never be given permissions beyond '''Drop tables''', as that would allow him to harm the database, access arbitrary files or enhance his own permissions. If a user does not have any permissions at all, he will be unable to connect unless some have been granted for a specific database or host (as explained in the next section). 
# To create the user, click the '''Save''' button at the bottom of the page. The new MySQL login will be usable immediately, and will have access to all databases and tables with the permissions specified in step 6. See the next section in this chapter for information on how to restrict a user to only certain databases or tables. 

When a client tries to login, MySQL searches for the first matching user and host in the list of users. The server always checks entries with specific hostnames before those that allow any host, and Anonymous user entries before those for a specific user. This means that a user may end up with the Anonymous permissions even though he is in the user list with greater privileges. Due to the confusion this can cause, I recommend deleting all anonymous user entries unless you fully understand their effects. 

It is possible and even useful to have multiple entries for the same user in the list, as long as they have different hostnames. For example, if you want to allow the user ''fred'' to login from only clients ''server.example.com'' and ''www.foo.com'', you would need to create two entries from ''fred'' with the '''Host''' field set differently. The should have the same password and permissions though, unless you want to require a different password or grant different permissions depending on the host the user is connecting from. 

New and existing users can be edited by clicking on their names in the list, which brings up an editing form almost identical to the one used for creating a user. The only different is that the Password field has a '''Don't change''' option which is selected if the user has a password, and which tells Webmin to leave the password unchanged when the user is saved. After making changes, click the '''Save''' button at the bottom of the form to update the user in the database. Or to delete it, hit the '''Delete''' button. If there are multiple entries for the same user, you will have 
to update them all individually if changing the password or permissions. 

Unless you have already created another administration user with full privileges, the root user should not be deleted. Because this Webmin module normally logs in a root itself, modifying or removing this user may force you to login to MySQL again as explained in the introduction to the module earlier in the chapter. By deleting the root user or removing its privileges, it is possible to deny yourself access to the database, which can only be fixed using command-line programs like mysqladmin. 

Like many other modules, the MySQL Database Server module can be configured to automatically create, update or delete a MySQL user when the same thing happens to a corresponding Unix user. This can be useful if you allow some of the Unix users on your system to access databases, and want to keep their passwords and usernames synchronized. 

To set up synchronization, the steps to follow are: 
# On the module's main page, click on the '''User Permissions''' icon. Scroll down to the form below the list of existing MySQL users. 
# If you want a new MySQL user to be created for each new Unix user, check the '''Add a new MySQL user when a Unix user is added''' box.  Then select the permissions that should be granted to the user from the list to the right. When a MySQL user is automatically added, its will be allowed to login from any host. 
# If you want MySQL users to be renamed or have their passwords changed when the same thing happens to matching Unix users, check the *Update a MySQL user when the matching Unix user is modified* box. If more than one entry exists for the same user, they will all be effected. 
# To have a MySQL user deleted at the same time as the Unix user of the same name, check the *Delete a MySQL user when the matching Unix user is deleted* box. If more than one entry exists for the same user, they will all be deleted. 
# Click the '''Save''' button to make the new synchronization settings active.

=== Managing database, host, table and field permissions ===
Users created by following the instructions in the previous section have access to all databases on the server with the same permissions. However, it is possible to give a user access to only specific databases by following the steps below: 
# Make sure the user does not have any permissions on the User Permissions page. Any that he has set here will apply to all databases, which is not what you want. 
# On the module's main page, click on the '''Database Permissions''' icon. This will bring up a list of users and the privileges they have for specific databases. 
# Click on the '''Create new database permissions''' link above or below the list. 
# In the form that appears, the '''Databases''' field controls which databases he will have access to. You can either select the '''Any''' radio button to grant permissions for all databases, select the second radio button to grant access to the database selected from the menu, or choose the final button to grant access to databases whose names match the SQL pattern entered into the adjacent field. Typically the second option is the one that you want to select, so that you can grant access to a single database. If the user should have access to more than one, you will need to add multiple database permissions entries. 
# In the '''Username''' field, select the second radio button and enter the name of the MySQL user to whom access should be granted. 
# The '''Hosts''' field allows you to choose which client host(s) the user will be able to connect to the database from. You should normally select '''Any''', which gives him access from anywhere - unless the user himself is prevented from connecting from some hosts, explained in the '''Managing MySQL users section'''.
# From the '''Permissions''' list, select the privileges that the user should have for the chosen database. These will be added to any that are set for the user on the User Permissions page. 
# Click the '''Save''' button to add and activate the new permissions.  You will be returned to the database permissions list. 

You can edit database permissions by clicking on a database name from the list. This will take you to an editing form identical to the creation form in which the database, username, hosts or permissions can be changed. The '''Save''' button saves and activates any changes, while the '''Delete''' button removes the permissions from the database. 

When MySQL is first installed, database permissions for the Anonymous user in the test and test_% databases will be created automatically. Assuming the Anonymous user exists in the User Permissions page, these give anyone who can connect to MySQL access to records in those databases. Unless you are making use of anonymous logins, these database permissions can be safely deleted. 

MySQL also allows permissions to be granted on databases to all users connecting from certain client hosts. This can be useful if you want to increase the privileges that a particular client system has, such as a web server connecting to your database server. To add host permissions, the steps to follow are: 
# On the module's main page, click on the '''Host Permissions''' icon. This will take you to a page listing existing permissions granted to client hosts, if any. When MySQL is installed, no permissions of this type are initially defined. 
# Click on the '''Create new host permissions''' to bring up a form for adding a new host permissions entry. 
# If the permissions should apply to all databases, select the '''Any''' radio button in the '''Databases''' field. If they are for only a specific database, select the second radio button and choose a database from the menu next to it. If you want to grant permissions to databases whose names match an SQL pattern, select the final radio button and enter the pattern into the adjacent text field. 
# In the '''Hosts''' field, select the second radio button and enter a hostname, IP address or hostname or IP pattern (like ''%.example.com'' or ''192.168.1.%'') into the field next to it. Selecting the '''Any''' button isn't particularly useful. 
# From the '''Permissions''' menu, choose those privileges that will be granted to all users connecting to the chosen database from the specified host. These will be added to any other permissions that are granted on the User Permissions or Database Permissions pages. 
# Click the '''Save''' button to activate the new client host permissions. 

As usual, you can edit existing an host permissions entry by clicking on the database name from the list, editing fields and clicking '''Save'''. Or you can remove it with the '''Delete''' button. 

MySQL also supports the granting of permissions to specific tables and fields to users connecting from certain hosts. Webmin allows you to set these up by clicking on the '''Table Permissions''' and '''Field Permissions''' icons on the main page. However, as they are quite complex and rarely used, they are not covered in this chapter. 

=== Module access control  ===
Normally a Webmin user who has access to the MySQL Database Server module can manage all databases and use all of the module's features. However, as [[WebminUsers|WebminUsers]] explains it is possible to restrict what a user can do with a module. In this case, you can grant access to only certain databases, control the directory that backups can be written to, and restrict the creation and deletion of databases. This can be useful if various databases on your server are owned by different people, and you want to give each of them a Webmin login to manage only those that belong to them. 

To set up this kind of module access control, the steps to follow are: 
# In the Webmin Users module, click on MySQL Database Server next to the name of a user or group who has access to the module. 
# On the access control form, change the '''Can edit module configuration?''' field to '''No'''. This is necessary to prevent the user changing the programs that the module uses for accessing the database. 
# In the '''Databases this user can manage''' field, choose the '''Selected''' option. Then select the databases he should have access to from the list below. 
# Change the '''Can create new databases?''' field to '''No'''. There is no reason that a restricted user of this type should be able to add new databases. 
# Unless you want the user to be able to delete his own databases, change the '''Can drop databases?''' field to '''No'''. Leaving it set to '''Yes''' is harmless though, as he will only be able to delete those that you have granted him access to. 
# Change the '''Can stop and start MySQL server?''' field to '''No'''. 
# If you want this Webmin user to be able to control access by MySQL users to his databases, change the '''Can edit permissions?''' field to '''Only for managed databases'''. This will give him access to the Database, Host, Table and Field Permissions pages, but limit him to viewing and editing entries for the databases he is granted access to. To deny access to MySQL permission management altogether, select '''No''' instead.  Choosing '''Yes''' is a bad idea, as it would allow the user to create MySQL users with access to all databases on the server. 
# If the '''Can edit table data?''' field is set to '''No''', the user will not be able to create tables, edit fields, run SQL commands or make backups. Instead, he will only be able to use the module's record viewing and editing feature. 
# When the '''Login to MySQL as''' field is set to *Username from Module Config*, all database actions performed by this user will be done as the MySQL user set in the module configuration, typically root. However, you may want the Webmin user to login as a less-privileged MySQL user as an additional security precaution. This way, even if the user finds a way to defeat the module's restrictions he will still not be able to execute SQL commands as root. To use a different login, select the '''Username''' option and enter a valid MySQL login and password into the adjacent fields. This alternate user must have the privileges to perform everything that the module needs to do though, such as creating tables and possibly granting permissions. 
# Normally Webmin runs the mysqldump command to make backups as the root Unix user, and allows the backup file to be created anywhere on your system. Because this may allow important files to be overwritten, you should change the *Backup file directory* field to a safe directory for creating backups in, such as <tt>/home/someuser/backup</tt>. Better still, the '''Write backup as Unix user''' field should be changed to a user other than root, such as the Webmin user's Unix login. The mysqldump command will be run as this user instead, which prevents it from being used to overwrite files. 
# Finally, to make the new access control restrictions active, click '''Save'''. 

If you want to give a large number of users access to MySQL though a web interface, an alternative to configuring the Webmin module for each user is to install Usermin. It has a MySQL module with an identical interface, and can be easily configured to limit which databases are visible. See chapter 47 for more information. 

=== Module Configuration  ===
[[file:MySQL Module Configuration.png|frame|none|Module Configuration]]
Like many other modules, this one has several options that you can set by clicking on the '''Module Config''' link in the top-left corner of the main page. Those fields listed under *Configurable option* relate to the module's user interface and the method it uses to connect to the database, while those under *System configuration* define the paths to the MySQL programs and files. 

Unless you have installed the database server in a different directory to the default for your operating system, fields in the second section do not generally need to be changed. This can happen if you installed MySQL from the source code instead of using the package supplied with your Linux distribution, or if you have two copies of MySQL installed and are configuring a clone of the module (covered in [[Webmin Configuration]]) to manage the second install. 

If you have multiple copies of MySQL installed on your system, you should clone this module once for each server. The last three configuration options can then be customised to connect to each of the MySQL installs, which will probably be listening on different ports or use different socket files.

[[Category:MySQL]]
