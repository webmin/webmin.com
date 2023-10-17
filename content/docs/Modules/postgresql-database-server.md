---
title: "PostgreSQL Database Server"
date: 2023-05-20
weight: 435
---

### About
This page covers the **PostgreSQL Database Server**, and explains how to use Webmin to manage tables, users, groups and data. 

### Intro
Like the [MySQL Database Server](/docs/modules/mysql-database-server), PostgreSQL is a free database server that supports multiple databases and tables, and allows clients to query them with SQL. It is most useful for programmers writing applications that need to use a database to store information. Popular languages like Perl, C, Java and PHP all have APIs for accessing a PostgreSQL database. 

A PostgreSQL server can host multiple databases, and each database can contain multiple tables. A table in turn contains fields, each of which has a type and size. Tables contain records, each of which usually contains information about some object, such as a person, product or purchase. Fields can be thought of as the columns in a table, and the actual records of data as the rows. Some fields can also contain multiple values, like an array. 

SQL (which stands for Structured Query Language) is a language for extracting data from or updating data in a database. Almost all databases use SQL, and its syntax is generally the same across all the different database packages, such as Oracle, PostgreSQL and MySQL. Its syntax is not covered in this chapter though. 

Packages for PostgreSQL come with many Linux distributions, and it can be compiled and installed on almost all varieties of Unix. Its operation is the same on all operating systems, and thus so is the Webmin module for managing it. 

PostgreSQL consists of a server process that reads and writes the actual database files, and a set of client programs that communicate with the server. The most commonly used is the psql command, which allows a user to execute SQL queries and view the results. None of the clients access the database files directly - that is left entirely to the server. 

All of the PostgreSQL database files are stored under a directory such as `/var/lib/pgsql` or `/usr/local/pgsql`. As well, there are several text configuration files that effect the operation of the server and clients. The most important is pg_hba.conf, which lists client hosts that are allowed to connect to the server. This is the only file that Webmin edits directly - all other database configuration is done by connecting to the database server, either directly or through the psql command. 

### The module
This module allows an administration to manage databases, tables, fields and records in a PostgreSQL server. In many ways it is very similar to the [MySQL Database Server](/docs/modules/mysql-database-server) module.  When you click on its icon in the Servers category of Webmin, the main page displays a list of existing databases on your system as shown in this screenshot:

[![](/images/docs/screenshots/modules/light/postgresql-database-server.png "PostgreSQL Database Server Screenshot")](/images/docs/screenshots/modules/light/postgresql-database-server.png)

If Webmin detects that PostgreSQL is not installed, have not been initialised or cannot be connected to, the main page will not appear as shown in the image above. Instead, some kind of error message will be displayed. The most common ones are covered in the next few paragraphs. 

If the message PostgreSQL is not running on your system appears, you will need to start the database server before this module can be used to manage it. Just click the **Start PostgreSQL Server** button at the bottom of the page. If you want it to be started at boot time from now on, use the Bootup and Shutdown module (covered on [Bootup and Shutdown](/docs/modules/bootup-and-shutdown)) to create a new action to start it. On most Linux distributions, the PostgreSQL packages include a bootup action script called postgres or postgresql that is not enabled by default. 

If PostgreSQL is running by Webmin does not know the administration username and password needed to connect to it, and **PostgreSQL Login** form will be displayed on the main page. You must enter valid login details for your database server, typically for the postgres user who has full access to all databases and features. Logging in as some other less privileges user may work at first, but you will not be able to use all of the features of the module. Sometimes PostgreSQL is set up to authenticate users by their Unix username, rather than by a separate login and password (the ident authentication mode). If this is the case on your system, you will need to check the **Connect as same Unix user?** box on the form. 

If an error message like The PostgreSQL host configuration file **hba.conf** was not found appears, then either the module's configuration is incorrect or your server has not yet been initialised for the first time. Many packaged versions for Linux systems need to be initialised before they can be used, usually by running the initdb command. If the module knows how to do this on your system, an **Initialize Database** button will be displayed that you can click on to set up the server for the first time. 

The error message The PostgreSQL client program `psql was not found on your system` indicates that PostgreSQL is not installed at all, or that it is in a different directory to the one Webmin expects. On Linux and FreeBSD systems, the module assumes that you have installed the packages for the database included with your distribution, while on other operating systems it assumes that a standard installation from the source code into `/usr/local/pgsql` was done. If you have installed it and that error message still appears, you will need to read the *Configuring the PostgreSQL Database Server module* section for details on how to adjust the paths that the module uses. 

If you are running Linux and PostgreSQL is not installed, use the [[Software Packages]] module to install all packages starting with postgres from the distribution CD or website. Often there will be several, such as postgresql, postgresql-server and postgresql-devel. For other operating systems, visit [www.postgresql.org](https://www.postgresql.org/) to download the source code distribution, then compile and install it. 

The PostgreSQL module uses SQL commands to perform actions like creating tables, adding fields and editing records. To execute these commands Webmin must connect to the database server, which can be done in one of two ways. It can either run the psql command with the correct parameters and parse its output, or use the Perl `DBI` library to connect directly. 

The former method is always available, because the psql command is always installed when the database server is. However, it is not totally reliable as certain kinds of table data produce output that cannot always be parsed. For this reason, you should install the `DBI` and `DBD::Pg` Perl modules. If either is missing, a message will be displayed at the bottom of the main page prompting you to install one or both by clicking on a link. This will ake you to a page in the [Perl Modules](/docs/modules/perl-module) module where `DBI` and/or `DBD::Pg` are downloaded and installed for you. 

### Creating a new database
When PostgreSQL is first installed, a database called `template1` is usually created. Because this is used as the template for any new databases, you should create your own to contain tables for your application to store data in. The steps to do this are : 
- On the module's main page, click on the **Create a new database** link above or below the table of existing database icons. 
- Enter a unique name for it into the **Database name** field.  This should consist only of letters, numbers and the `_` character. 
- When the **Database file path** field is set the **Default**, the files that actually contain the database's data will be created in the default directory. On Linux systems, this will usually be something like `/var/lib/pgsql/data` - on other operating systems, it will probably be `/usr/local/pgsql/var`.  To use a different directory, as the Unix user the database runs as (usually postgres) first create it with the mkdir command and then run initlocation with the directory name as a parameter. Then select the section radio button for the **Database file path** field and enter the directory in the adjacent text box. Unfortunately, unless PostgreSQL has been compiled to support absolute data directory paths, an error will occur when you click the **Create** button. By default, this feature is not enabled. 
- Click the **Create** button. The database will be added, and you will be returned to the module's main page which should include its new icon. If a database called `template1` exists on your server, any tables or other objects that it contains will be copied to the newly created database. This can be useful if you want to add many databases with similar structures. 

### Creating a new table
A table can be added to an existing database at any time. Each table has one or more fields, each of which has a type, size and other attributes. To add a table, the steps to follow are : 
- On the main page, click on the icon for the database that you want to add the table to. This will take you to the database editing page shown in the screenshow below, on which is an icon for each existing table. 
- Enter the number of fields that you want your new table to have into the **Fields** text box next to the **Create a new table** button, and then click the button. This brings up a form for entering the details of the new table and its initial fields. 
- Choose a name for table and enter it into the **Table name** field.  The name must be unique within the database, and should use only letters, numbers and the `_` character. 
- Each row of the **Initial fields** table defines a field that will be added to the new table. The kind of field that is added depends on what you input for the row under each of the following columns :
  - **Field name** &mdash; The name for this field, which must be unique within the table and should be made up of only letters, numbers and _. If left blank, no field will be added for this row.
  - **Data type** &mdash; The selection that you make from this menu determines the type of data that can be stored in this field.  The most common types are <tt>varchar</tt> for variable-length text strings, <tt>int4</tt> for integer numbers and float4 for fractional numbers. See the **Field types** section below for more details. 
  - **Type width** &mdash; This field can be left blank, in which case the default size for the chosen type will be used. Otherwise, you must enter a number which is the number of characters (for char or varchar fields) or digits (for numeric fields) that the field can store. Some types such as blob and date do not need or allow a type to be specified at all.
  - **Field options** &mdash; If **Array?** is checked, this field will be an array capable of storing more than one value.  If **Allow nulls?** is checked, the database will allow SQL NULL values to be inserted into this field. If **Primary key?** is checked, this field will be part of the primary key for the table. All tables should have a key, which is usually the first field and of int or varchar type. When **Unique?** is checked, PostgreSQL will prevent more than one record having the same value for this field. Primary key fields are also automatically unique. 
- When you are done entering fields, hit the **Create** button at the bottom of the page. The table will be added to the database, and you will be returned to the page listing existing tables. 

### Adding and editing fields
New fields can be added to tables, and the names of existing fields can be changed. There is no way to change the type of size of a field though, unless you delete and re-add it. When a field is created, it will always initially contain NULL values in existing rows of the table. 

To add a field, the steps to follow are : 
- On the module's main page, click on the icon for the database that contains the table. Then click on the icon for the table itself - this will bring you to a page listing the names, types and sizes of existing fields, as shown in the screenshot below. 
- Select a type for the new field from the menu next to the **Add field of type** button. When clicked, your browser display the field creation form for entering the rest of the details. 
- Choose a name for this field that consists of only letters, numbers and the `_` character and enter it into the **Field name** text box. No two fields in the same table can have the same name. 
- For a char or varchar field, enter the maximum number of characters that it can hold into the **Type width** text box. For a numeric field, you must instead enter two numbers separated by a comma, like *10,2*. The first is the maximum number of digits that a number in this field can store, and the second is the number of digits to the right of the decimal point. For other field types, the **Type width** text box does not appear at all. 
- If you want this field to be able to store multiple values of the same type, select **Yes** for the **Array field?** option. 
- Click **Create** to have the field added to the table, as long as there were no errors in your input. 

Once a field has been created, you can only change its name, unlike in MySQL where its type or size can be modified. However, this means that there is no risk to data that it contains. To rename a field in a table, the steps to follow are: 
- On the module's main page, click on the icon for the database containing the table, and then on the table icon. This will bring you to the list of fields in the table, an example of which is shown in the screenshot above. 
- Click on the name of the field that you want to change. 
- On the editing form, update the **Field name** text box with a new name. Naturally this must follow the same naming rules as apply when creating a field. 
- Click the **Save** button to have the change made in the database. 

### Deleting a field
Unlike MySQL, the PostgreSQL database server has no built-in SQL command for deleting a field from a table. However, it is possible to carry out the removal of a field by creating a new temporary table that lacks the field, deleting the old table and renaming to temporary to the original name. This works, and Webmin can do it all for you automatically - however, some information such as indexes and default field values will be lost in the process. The actual data in the table (apart from that in the deleted field) will be safe though. 

If your table does not contain any indexes or fields with default values, you can go ahead and remove a field by following these steps : 
- Click on the icon for the database containing the table on the module's main page, and then on the table icon itself. 
- Click on the **Drop Field** button on the table editing form, below the list of existing fields. This brings you to a page listing all the fields in table, each of which has a radio button next to it under **Drop This One**. 
- Select the radio button field that you want to remove from the table. 
- Check the **Select box to confirm** checkbox at the bottom of the form. 
- Hit the **Drop Field** button to remove the chosen field. Once it has been deleted, the same page will be re-displayed so that you can remove another if you wish. 

### Field types
PostgreSQL has a large number of field types, all of which are supported by Webmin. However, not all of them are particularly useful for the average database. The best source of informationis the [official documentation](https://www.postgresql.org/docs/current/datatype.html).

PostgreSQL has several types for storing geometric objects, such as `point`, `path`, `box` and `circle`, and types for network information such as `inet`, `cidr` and `macaddr`. Fields of all these types can be created and edited using this module, even though they are not documented above. However, no other databases (such as Oracle or MySQL) support these types, so it may be wise to avoid them if you want your programs to be database-independent. 

### Viewing and editing table contents
The PostgreSQL module allows you to view and edit the contents of any table in any database, even those that do not have primary keys. Unlike the MySQL module, it can identify specific rows to edit using the special oid column, which contains a unique identifier for each record. 

To view the contents of a table, follow these steps : 
- On the main page, click on the icon for the database that contains the table, and then on the icon for the table itself. 
- On the table editing form, click on the **View Data** button at the bottom. This will bring you to a page containing a table of the first 20 rows in the table. 
- If the table contains more rows than can be displayed on one page, the start and end of the visible range and the total number of rows will be displayed at the top. Next to it are left and right arrows for moving to the next or previous 20 records.  Unlike the MySQL module, there is no way to search for records or jump to a particular row number on this page. 

This same page can also be used to edit, delete or add records. Records to edit must first be selected using the checkboxes to the right of each row, or the **Select all** and **Invert selection** links. When you click the **Edit selected rows** button, the page will be re-displayed with the values of all chosen records in text boxes. Make whatever changes you like, and click the **Save** button at the bottom of the page to update the database. Or hit **Cancel** if you want to stop editing without saving your modifications. 

To delete records, select them using the same checkboxes and selection links, and click the **Delete selected rows** button. The chosen records will be immediately removed from the database with no further confirmation. 

To add a new record, hit the **Add row** button below the table. An additional row will appear containing empty text boxes for you to enter new details. Clicking **Save** will add the new record to the table, and move the display so that you can see the new row. Alternately, you can click **Cancel** if you change your mind about adding a record. 

### Deleting tables and databases
This module also contains buttons for deleting a table from a database, or an entire database and everything in it. When a table is removed, all records and fields that it contains will be lost.

To remove one, the steps to follow are : 
- On the module's main page, click on the icon for the database that you want to remove the table from, and then on the icon for the table itself. 
- Click on the **Drop Table** button below the list of fields.  This will take you to a confirmation page that asks if you are sure and tells you how many records will be deleted. 
- To go ahead, click the **Drop Table** button again. Once it has been removed, you will be return to the list of surviving tables in the database. 

It is also possible to delete an entire database and all the tables and records in it. Any database can be removed, but deleting `template1` is a bad idea as the module connects to it when retrieving the list of other databases, and assumes that it will always exist. As usual, unless you have made a backup there is no way to undo the deletion. 

Assuming you really want to delete a database, follow these steps : 
- On the main page, click on the icon for the database that you want to remove. 
- Hit the **Drop Database** button below the list of tables. A confirmation page will be displayed, telling you how many tables and records will be lost if you go ahead. 
- To continue with the deletion, click the **Drop Database** button and you will be returned to the module's main page when it is done. 

It is possible to remove the `template1` database if you change the **Initial PostgreSQL database** field on the module configuration to some other database that is not going to be removed. 

### Executing SQL commands
The PostgreSQL module also provides a simple interface for running SQL commands on a database and displaying their output. The steps to use it are : 
- On the main page, click on the icon for the database that you want to run commands in. 
- Click on the **Execute SQL** button below the list of table icons.  This will take you to a page for entering SQL commands, running files of commands and loading data into the database. 
- Enter any one SQL command into the text box at the top of the page and hit the **Execute** button. If there was a mistake in your SQL syntax or the command cannot be executed, the error message from PostgreSQL will be displayed. Otherwise, a table of results from the SQL (if any) will be shown. Only `SELECT` statements produce results - `UPDATE`, `INSERT` and other commands that modify records do not. 

Unlike the MySQL module, there is no command history or support for running multiple SQL statements from a file. 

### Backing up and restoring a database
If one of your databases contains important information, it should be backed up regularly in case a disk failure or SQL mistake causes data loss. It is also a good idea to create a backup before performing some potentially risky operation, such as running a complex SQL statement that modifies lots of records. 

Due to changes in the parameters of the `pg_dump` and `pg_restore` commands, the module only allows you to create and restore backups when using PostgreSQL versions 7.2 and above. If you are using an older release, the buttons explained in the steps below will not be visible. 

To use the module to make a backup, the steps to follow are : 
- On the main page, click on the icon for the database that you want to backup. 
- Click on the **Backup** button below the list of tables. This will take you to a form for entering the backup destination and options. 
- In the **Backup file path** field, enter the full file path that the backup should be written to, such as `/tmp/backup.tar`.  The file must not already exist - if it does, an error will occur when you hit the **Backup** button. 
- From the Backup file format menu, select the type of file that should be created. The available options are : 
  - **Plain SQL text** &mdash; The file will contain a series of SQL commands that re-create the tables in the database and re-populate them with data.  This format is convenient in that backup files can be manually edited, but you cannot include large objects (like blobs) in an SQL backup, or selectively restore from it.
  - **Tar archive** &mdash; The backup file will be a standard Unix tar file, containing various files that specify table structures and contents.  Large objects are supported, and selective restoring is possible.
  - **Custom archive** &mdash; The file will be in PostgreSQL's custom backup format, which is compressed and supports large objects, data exclusion and re-ordering at restore time. 
- To make the backup, hit the **Backup** button at the bottom of the form. If everything goes well, you will be redirected to the table list - otherwise, a page showing the backup command run and its error output will be displayed. 

If you have a database that is being used for an important production purpose, it should be backed up regularly using PostgreSQL backup schedule feature.

Once a backup file has been created, it can be restored on the same system or on another server running MySQL. The steps are : 
- On the module's main page, click on the icon for the database that the backup should be restored into. 
- Hit the **Restore** button below the list of tables to bring up a form for selecting the backup file. 
- In the **Backup file path** field, enter the full path to the file containing PostgreSQL backup data such as `/tmp/backup.tar`.  This file can be in any of the formats available on the backup form. 
- Normally, the restore process will attempt to re-create tables before restoring data into them. To avoid this, change the **Only restore data, not tables?** field to **Yes**. This will only work if all the tables in the backup already exist.  All data that the currently contain will be combined with restored records. 
- Normally, the restore process will fail if a table in the backup already exists in the database. To have existing tables dropped before restoration, change the **Delete tables before restoring?** field to **Yes**. It makes no sense to set both this and the previous field to **Yes**. 
- Click the **Restore** button to re-load data and tables from the backup file. An error message showing output from the pg_restore command will be displayed if something goes wrong - otherwise, you will be returned to the list of tables in the database. 

### Managing PostgreSQL users
As you would expect, the PostgreSQL database server does not simply allow anyone to connect and start manipulating data. Instead, it verifies clients by requiring them to send a username and password, which it checks against its own internal user list. This list of database users is totally separate from the Unix user list in the `/etc/passwd` file. 

By default, only the user `postgres` will exist, and he will have full access to all databases and tables. If you are writing an application that uses a database, an new user should be created for that application to login as. If multiple people will be accessing your database using the `psql` command or other client programs, each should have his own login and password. 

To add a new user, the steps to follow are : 
- On the module's main page, click on the **PostgreSQL Users** icon. This will take you to a list of existing users and their abilities, as shown in the screenshot below. 
- Click on the **Create a new user link** above or below the list, which will bring up the user creation form. 
- Enter a unique name for the user, make up of only letters, numbers and the `_` character, into the **Username** field. 
- To set a password for this user, select the second radio button in the **Password** field and enter a password into the text box next to it. If **None** is chosen, the user will not be able to login unless the server has been configured to allow connections without a password (as explained in the *Restricting client access* section). 
- If you want this user to be able to create his own databases, change the **Can create databases?** field to **No**. Only the master administration user (postgres) really needs to be able to do this. 
- To give this user to rights to edit and create PostgreSQL users, change the **Can create users?** field to **Yes**. Again, this should normally be left as **No**. 
- The **Valid until** field controls how long this user can be used for. If **Forever** is selected, it will have no expiry date - but if the second option is chosen and a date in _YYYY-MM-DD_ format entered into the text field, the account will not be usable after that date. 
- Click the **Create** button to have the new account added to PostgreSQL's user list. People or programs will be able to login as this user immediately. Often the database server is set up by default to allow any local user to login without needing to supply a password at all. To change this, see the **Restricting client access** section. 
- To configure exactly which tables and views this new user can access, follow the instructions in the **Editing object permissions** section. 

[![](/images/docs/screenshots/modules/light/postgresql-database-server-users.png "PostgreSQL Database Server Users Screenshot")](/images/docs/screenshots/modules/light/postgresql-database-server-users.png)

Once a user has been created, it can be editing by clicking on its name in the user list shown in the screenshot above. This takes you to the editing form which is almost identical to the user creation form, except that the user's name cannot be changed. Once you have finished modifying the password, expiry date and other fields, hit the **Save** button to make the changes active. 

A user can be deleted as well by clicking the **Delete** button on its editing page. Be careful not to remove the postgres user, as it is normally used by this Webmin module to login to PostgreSQL. In fact, even editing this user can cause problems if you set an expiry date or take away its ability to create databases or other users. 

Like many other modules, this module can be configured to automatically create, update or delete a PostgreSQL user when a Unix user is added, modified or removed respectively. This can be useful if you allow some of the Unix users on your system to access databases, and want to keep their passwords in sync. 

To set up synchronization, the steps to follow are : 
- On the module's main page, click on the **PostgreSQL Users** icon, and scroll down to the form below the list of existing accounts. 
- If you want a new PostgreSQL user to be created for each new Unix user, check the **Add a new PostgreSQL user when a Unix user is added** box. Automatically created users will not have any specific object permissions though. 
- If you want PostgreSQL users to have their passwords changed when the same thing happens to matching Unix users, check the **Update a PostgreSQL user when the matching Unix user is modified** box. 
- To have a PostgreSQL user deleted at the same time as the Unix user of the same name, check the *Delete a PostgreSQL user when the matching Unix user is deleted* box. 
- Hit the **Save** button to make the new synchronization settings active. 

### Managing PostgreSQL groups
PostgreSQL keeps its own internal list of groups, each of which can contain zero or more users. Groups are most useful when assigning object permissions, as they allow you to grant access to a table or view to many users at once. Apart from that, they perform no role in access control or authentication. 

To create a group, the steps to follow are : 
- On the module's main page, click on the **PostgreSQL Groups** icon. Your browser will display a table of existing groups and their members, if any. When PostgreSQL is first installed, no groups are defined. 
- Click on the **Create a new group** link to go to the group creation form. 
- Enter a name consisting of letters, numbers and the `_` character in to the **Group name** field. No other group or user can have the same name. 
- Leave the **Group ID** field unchanged, as the ID is chosen automatically by Webmin. 
- Select the users who will be members of this group from the **Members** list. In most browsers, you can ctrl-click to select more than one username, or shift-click to select an entire range. 
- Click **Create** to add the group. Object permissions can now be assigned to it, as explained in the **Editing object permissions** section. 

Just like a user, a group that you have created can be edited by clicking on its name in the list on the PostgreSQL Groups page, changing the name or membership list on the editing form and hitting **Save**. Or it can be deleted by clicking the **Delete** button on the same form. 

### Restricting client access
Usually, the default PostgreSQL configuration allows any user to connect to the database server from the same system without needing to login, but prevents all remote access. If you want to allow clients to connect from other systems (for example if you are setting up a database server that will be accessed from a separate web server), then PostgreSQL needs to be configured to allow this. 

To grant access to another host, follow these instructions : 
- On the module's main page, click on the **Allowed Hosts** icon.  You will be taken to a page listing hosts from which connections are allowed, the databases clients can access and the authentication modes used. Typically, only local connections and those from _127.0.0.1_ will be allowed initially. 
- Click on the **Create a new allowed host** link above or below the list to bring up the host creation form. 
- In the **Host address** field, select **Single host** and enter the IP or hostname of the remote client system into the adjacent field. Alternately, to allow an entire LAN select **Network** and enter the network address (like *192.168.1.0*) and netmask (like *255.255.255.0*) into the fields next to it. 
- To give the specified host or network access to all databases on your server, leave the **Database** field set to **All databases**.  Otherwise, make a selection from the menu to limit the client to just that one. If you want to grant a client access to two databases, you will need to add two host entries each with a different choice selected from **Database** menu. 
- In the **Authentication mode** field, select **Plaintext password**.  The option **No authentication required** will also allow users on the client system to connect, but without needing to provide a valid password. Clearly, this is not very secure. 
- Hit the **Create** button to add the new allow host entry. 

If your system has multiple users, each of whom has a data in a PostgreSQL database that belongs to them, you should not allow them to login to the database server without a password. By default, PostgreSQL allows exactly this, which is not particularly secure! Fortunately, it can be easily fixed. However, there is a risk that you will lock Webmin itself out of the database, as it is often set up by default to login as the user postgres without a password. 

Follow the instructions below to re-configure the module to login with a password, and to force local users to do the same thing : 
- On the module's main page, click on the **PostgreSQL Users** icon and then on the postgres user to bring up its editing form. 
- Select the second radio button for the Password field and enter a nice secure password into the adjacent text field.  Then click **Save**. 
- Go back to the module's main page, and hit the **Module Config** link. 
- In the **Administration password** field, select **Set to** and enter the password you chose into the text field. Then click **Save** at the bottom of the form. 
- Click on the **Allowed Hosts** icon, and then on **Local connection** in **the Host address** column. Change the *Authentication mode* field to **Plaintext password**, and click the **Save** button. After your browser returns to the list of allowed hosts, click on **127.0.0.1** and make the same change. 
- Return to the module's main page. If all went well, you will still be able to see and manage databases, and all users will require a password to connect. 

When a client connects to the database server, PostgreSQL checks the host entries on the Allowed Hosts page in order. As soon as it finds one that matches the client address and requested database, the authentication mode for that entry is used. You can use this feature to block certain hosts while allowing all others by creating a host entry with the **Host address** field set to the IP you want to block, and the **Authentication mode** set to **Reject connection**. This entry must appear in the list above any broader entry that would allow the same client. 

Because new allowed host entries are always added to the end of the list, the page has a feature for moving around. The up and down arrows under the **Move** column in the list can be clicked on to move an entry up or down one place respectively. 

### Editing object privileges
Each PostgreSQL object (a table, view, index or sequence) has an owner, which is the user who created it. By default, only the owner can select data from or update records in an object, which is not too useful if your server has multiple users who will all need access to the same tables. Fortunately, it is possible to grant access to database objects to other users or groups, by following the steps below : 
- On the module's main page, click on the **Granted Privileges** icon. Assuming you actually have some tables in your databases, this will bring up a page listing all existing objects and their current permissions. 
- Click on the name of the object that you want to grant access to, which will take you to its privileges editing form. 
- The **Grant privileges to** table lists all users and groups to whom access has been granted, followed by a blank row for adding a new one. Most of the time, it will just contain that one empty row though. In the **User** column, select the name of the user or group to grant privileges to from the menu, or choose **Everyone** to grant access to all PostgreSQL users.  In the Privileges column, check the boxes for the rights that should be granted to the chosen user or group. The available options are their meanings are:
  - **SELECT** &mdash; When checked, the user will be able to view records in this table or view with an SQL SELECT query.
  - **UPDATE** &mdash; When chosen, this option gives users the ability to update existing records in the table.
  - **INSERT** &mdash; This option gives users the right to add new records to the table with an SQL INSERT statement.
  - **DELETE** &mdash; When checked, the user will be able to delete existing records from the table.
  - **RULE** &mdash; Allows the user to create of rules on the table or view.  A rule is an piece of SQL code that is executed to transform data inserted, updated or deleted in the table.
  - **REFERENCES** &mdash; Allows the user to create a field that references this table as a foreign key.
  - **TRIGGER** &mdash; When checked, the user will be able to create triggers for this table. Because the table only displays one empty row at a time, you will need to save and re-edit the object permissions if you want to grant access to more than one user. If several users are to be given the same permissions, it is better to put them in a group and grant access to the group instead.

- Hit the **Save** button at the bottom of the page to make the new permissions active. 

Unlike MySQL, there is no way to give a user access to an entire database, or just to a field within a table. All privileges are granted at the table level only. 

### Module access control
As [Webmin Users](/docs/modules/webmin-users) explains, it is possible to create a Webmin user who has access to only a subset of the features of some modules. In the case of the PostgreSQL Database Server module, you can limit a user to being able to manage tables and fields in specific databases, and prevent him from editing users, groups or granted permissions. This can be useful if various databases on your server are owned by different people, and you want to give each of them a Webmin login to manage only those that belong to them. 

Once a user has been given access to the module, to limit him to only certain databases the steps to follow are : 
- In the Webmin Users module, click on PostgreSQL Database Server next to the name of a user or group who has access to the module. 
- On the access control form, change the **Can edit module configuration?** field to **No**. This is necessary to prevent the user changing the programs that the module uses for accessing the database. 
- In the **Databases this user can manage** field, choose the **Selected** option. Then select the databases he should have access to from the list below. 
- Change the **Can create new databases?** field to **No**. There is no reason that a restricted user of this type should be able to add new databases. 
- Unless you want the user to be able to delete his own databases, change the **Can drop databases?** field to **No**. Leaving it set to **Yes** is harmless though, as he will only be able to delete those that you have granted him access to. 
- Change the **Can stop and start PostgreSQL server?** field to **No**. 
- Change the **Can edit users, groups, hosts and grants?** field to **No**, so that he cannot create a new PostgreSQL user with access to all databases. 
- Set the **Can create backups?** field to **No**, as giving a user the rights to make a backup may allow him to overwrite files on your system. 
- The **Can restore backups?** field can be safely set to **Yes**, as there is no danger in allowing a user to re-load data into his databases from a backup file. 
- Finally, to make the new access control restrictions active, click **Save**. 

### Module Configuration
Like most other modules, this one has several options that you can set by clicking on the **Module Config** link in the top-left corner of its main page. Those fields listed under **Configurable option** relate to its connection to the database and user interface, while those under **System configuration** define the paths to the PostgresSQL programs and files. 

Unless you have installed the database server in a different directory to the default for your operating system, fields in the second section do not generally need to be changed. This can happen if you installed PostgreSQL from the source code instead of using the package supplied with your Linux distribution, or if you have two copies of PostgreSQL installed and are configuring a clone of the module (covered in [Webmin Configuration](/docs/modules/webmin-configuration#cloning-a-webmin-module)) to manage the second install.

