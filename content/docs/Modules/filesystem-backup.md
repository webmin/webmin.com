---
title: "Filesystem Backup"
date: 2023-03-23
weight: 205
---

### About
This page explains common Unix backup commands, and how Webmin makes use of them to perform one-off or regular backups and restores.

### Introduction to Unix backup commands
Pretty much all Unix and Linux systems come with the `tar` command, which can backup multiple files and directories into a single file, with all permissions and ownership information preserved. _Tar_ is the most common Unix backup format, and although it was originally designed for backups to tape (_tar_ stands for Tape Archive), it works just as well to local or remote files. If you are familiar with the `zip` format on Windows systems, `tar` is very similar.

Most systems also ship with the `dump` and `restore` commands, which are similar to `tar` but operate at a lower level when it comes to accessing the filesystem. While `tar` will work with any files (either local, on a removable drive, or mounted from an NFS or SMB server), the `dump` command can only backup files on a local filesystem. However, it has the advantage that it can backup file attributes that `tar` misses due to shortcomings in its file format, such as `ext4` attributes and Posix ACLs.

When it comes to choosing which format to use, `tar` is mandatory if you want to backup non-local files, or if you may need to restore on a system running a different OS (as the `dump` format is specific to the underlying filesystem type). The `dump` format is only recommended if you need to backup files that have ACLs or other attributes that `tar` would miss.

### Filesystem Backup module
This module allows you to define backup jobs in a variety of formats, and perform either one-off or regularly scheduled backups to local or remote destinations. It can also restore backups in the formats it creates.

When you open the module (under the System category), it will display a list of existing backup jobs as shown below:

[![](/images/docs/screenshots/modules/light/filesystem-backup.png "Filesystem Backup Screenshot")](/images/docs/screenshots/modules/light/filesystem-backup.png)

If this is the first time you have used the module, the table of backups will be empty though.

### Configuration
A few important setting should be defined in the modules' configuration. If you'd like to have _hourly/dayly/weekly/monthly/yearly_ backups, variable substitution would be necessary.

[![](/images/docs/screenshots/modules/light/filesystem-backup-config.png "Filesystem Backup Module Config Screenshot")](/images/docs/screenshots/modules/light/filesystem-backup-config.png)

### Defining backups
To create a new backup job, do the following:
- In the field next to the **Add a new backup of directory** button, enter the full path to the directory you want to save. By default, the module will use the `dump` command for backups, but if you prefer `tar` format you should select the **In tar format** checkbox. Then click the button.  The rest of these steps will assume that you selected the _Tar_ option, as that is the most common format.
- On the **Add New Backup** form (shown below), add an additional paths to backup to the **Directories to backup** field.
- In the **Backup to** section, you can select **File or tape device** if you want to save to a file on the same system. In the adjacent field, either enter a path like `/backup/myfiles.tar`, or if you have an attached tape drive use a path like `/dev/st0` (the first SCSI tape drive).<br> Alternately, you can select the **Host** option, and enter a remote hostname, login name and remote file into the three fields next to it. Remote backups are clearly preferable in most cases, as they can be restored if the system being backed up completely dies!
- If performing a remote backup, the **Remote backup command** field can be used to select the protocol to use for transferring the backup. **SSH** is most commonly used, but **FTP** is a suitable alternative if you don't have an SSH login on the remote system. The default **RSH** protocol is almost never used these days.
- If backing up via SSH or FTP, you will need to enter a password into the **Password for SSH/FTP login** field. This can be omitted if the `root` user on the source system has his `.ssh` directory setup to allow password-less logins as the destination user.
- Most of the fields in the **Backup options** section can be left as their defaults. The only exception is **Compress archive?**, which should be set to _gzip_ or _bzip_ if your backup is not to a tape drive.
- If you want the backup to be run on a regular schedule, select the **Enabled, at times chosen below..** radio button and enter an email address to notify into the **Email scheduled output to** field.
- Select a schedule to run.
- Click the **Create** button at the bottom of the form.

[![](/images/docs/screenshots/modules/light/filesystem-backup-config-add.png "Filesystem Add Backup Screenshot")](/images/docs/screenshots/modules/light/filesystem-backup-config-add.png)


### Running a Backup
Once a backup job has been defined, it can be started by clicking on the **Backup** button in the last column of the backup jobs table. By default this will start the job as a foreground process so that you can view its progress in the browser. However, for long jobs, it may be better to run them in the background so that closing the browser does not interrupt the process. To enable this, click on **Module Config** link and change the **Run backups in** option to **Background**.

Jobs run in the background (either explicitly started from the web interface or run on schedule) will be displayed on the module's main page under the **Running Backup Jobs** header. By clicking on a link in the **Action** column you can terminate running jobs, or if required signal to the job that a new backup tape is available. 

Backups are run using [Scheduled Cron Jobs](/docs/modules/scheduled-cron-jobs).

### Editing and Deleting Backup Jobs
Once a job has been defined, you can edit it by clicking on the source directory(s) in the first column of the backup jobs table on the module's main page. This will bring up the same form as is shown above, in which all of the job settings can be adjusted.

To delete a job, select the checkbox next to it on the module's main page, and click on the **Delete Selected Backups** button.

### Restoring a Backup
If disaster strikes, Webmin can be used to restore backups created using this module, or even backups made manually with the `tar` and `dump` commands. The steps to do this
are:
- Click on the job you want to restore on the module's main page.
- At the bottom of the form, click on the **Restore** button. This will bring up a form with the restore source already filled in, as shown below.
- To restore only some files in the backup, select the **Listed files** option for **Files to restore**, and enter a space-separate list of paths into the adjacent text field. These are typically absolute paths, like `/etc/passwd`.
- Enter a destination path into the **Restore to directory** field. You can enter `/` to restore to the original paths, or something like `/tmp` to restore elsewhere before manually verifying the files and copying them to their correct locations.
- Change the **Only show files in backup?** option to **No** if you want to actually restore files. When this is set to **Yes**, instead of restoring Webmin will simply show you what files the backup contains.
- Click the **Restore Backup Now** button.

[![](/images/docs/screenshots/modules/light/filesystem-backup-config-restore.png "Filesystem Restore Backup Form Screenshot")](/images/docs/screenshots/modules/light/filesystem-backup-config-restore.png)

