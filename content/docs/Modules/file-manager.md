---
title: "File Manager"
date: 2023-09-07
weight: 555
---

### About
On this page the **HTML File Manager** module is documented, and its basic features such as copying and pasting, creating files, and searching are explained.

This module is included by default starting with Webmin version 1.762. The HTML File Manager module is called `filemin`, and was initially created by Alexandr Bezenkov.

### The module
Under the Tools category in Webmin is a module that is quite different from any of the others. Instead of configuring some server or service, it allows the user to view and manipulate files on the server through an HTML interface. This HTML File Manager replaces the old Java-based File Manager.

At the top you will see a row of buttons similar to a toolbar.  Below that is a list of files and directories that are in the current directory.

[![](/images/docs/screenshots/modules/light/file-manager.png "File Manager Screenshot")](/images/docs/screenshots/modules/light/file-manager.png)

### Listing and manipulating files
When you first load the file manager, you will see the contents of the _root_ directory on your system, or the user's home directory, depending on who you are logged in as. To navigate into a directory, simply click on its name in the list. To move up one level, either select the left arrow located at the top-left corner of the file manager or press the backspace key.

You can view and modify the contents of any file on your system by right-clicking and selecting the **Edit** option from the context menu.

To download a file or directory from your Webmin system to your computer, simply right-click on its name, open the context menu, and select the **Download** option.

To rename a file or directory, click the **Rename** link in context menu, and enter the new name in the popup window.

The HTML File Manager module allows you to rename, move and copy files. To select the file that you want to manipulate, just click the checkbox to the left of it, and then use standard system keyboard shortcuts to cut, copy, and to paste. You can also use the **Cut**, **Copy** and **Paste** buttons on the toolbar.

To move files to a different directory, select one or more and click the **Cut** button on the toolbar. Then navigate to the destination and click the **Paste** button. If a file with the same name already exists, Webmin will prompt you to rename the pasted file to avoid the clash. If you choose not to rename, the file in the destination directory with the same name will be overwritten. 

To copy files, select them in the right-hand pane and click the **Copy** button. Then go to the directory that you want them to be copied to, and click **Paste**. As when moving files, you will be prompted to rename any that clash with files that already existing in the destination directory. Multiple copies of a file can be made by pasting in different directories. To create a copy of a file in the same directory, just select it and hit **Copy** and **Paste**, and enter a new filename. 

You can delete one or more files and directories by selecting them and clicking the **Delete** button on the toolbar. Before they are actually removed, a confirmation window listing all chosen files will be displayed. When the **Delete** button in the window is clicked, all chosen files, directories and their contents will be permanently deleted. 

A single file can be renamed by selecting it in the right-hand pane and clicking the **Rename** button on the toolbar. This will bring up a window containing the current filename and a text box for entering a new name. When you are ready, click the **Rename** button to have the file renamed.

### Creating files
The HTML File Manager module offers two methods for creating new files. You can create a text file from scratch, or upload data directly from the host your web browser operates on. To initiate a new blank text file, select **File** then **Create new file**. A window will appear prompting you to input the desired filename.

To upload a file from your computer, click **File** then **Upload to current directory** on the toolbar. This will open a dialog window where you can choose the file to upload. When you are ready, click the **Upload to current directory** button to have the file(s) sent to your Webmin server. Once the upload is complete, the directory list will be updated to show the new file. 

You can also retrieve a file from a remote URL. To do that, click **File** then **Download from remote URL**. There, you can enter the URL where your document is remotely hosted, as well as an optional username and password.

### Editing file permissions
Each file or directory on a Unix file system is owned by a single user and group, and have a set of permissions that determines who can access it. Normally these are changed by the `chown` and `chmod` commands, but you can edit them in the file manager as well. To do this, select a file or files from the right-hand pane and click **Tools** then **Change ownership** or **Change permissions** in the toolbar. This will bring up a permissions window.

In the **Change permissions** window, you can select the appropriate read, write, and execute permission for the selected files.

In the **Change ownership** window, you can select the user and group you want as the owner for that file or directory.

If you want, you can tell it to apply the permissions recursively if you have selected a directory.  Just be careful when using that option not to apply the permissions to files you didn't mean to give them to!

### Finding files
The file manager can be used to search for files or directories on your system that match certain criteria. This can be useful if you know the name of a file but not the directory it is located in. To search for files, click on **Tools** in the toolbar, then click **Search** to bring up the search window. In the **Search query** field, enter a search pattern to look for. This can be something like `*.txt` or `foo?.c`.

[![](/images/docs/screenshots/modules/light/file-manager-search.png "File Manager Search Screenshot")](/images/docs/screenshots/modules/light/file-manager-search.png)


### Bookmarks

It is possible to bookmark folders, so that future access to that folder can be done quickly.

To bookmark a folder, use the HTML File Manager to browse to that folder, then click **Bookmarks** then **Bookmark current directory** in the toolbar.

To access the bookmarks later, click **Bookmarks**, and you will see the bookmarks you created at the bottom of the menu.
