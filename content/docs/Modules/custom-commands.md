---
title: "Custom Commands"
date: 2023-09-07
weight: 545
---

### About
Most system administrators like to create shell scripts to perform common tasks, like backing up a database or adding a new user of some kind. Because every system and organization is different, there will always be tasks that a generalized tool like Webmin cannot do as easily as a simple customized script. Unfortunately, scripts run at the command line are not easy for an inexperienced user to use. 

The Custom Commands module allows you to create simple web interfaces for shell scripts and commands, so that they can be run from within Webmin at the click of a button. It also allows you to define parameters of various types for each command that can be entered by the user and substituted into the shell command. This can be used to provide additional arguments or input to the scripts that are run, depending on selections made by the user before running it. 

Another feature of the module is the ability to define file editors, so that frequently changed files can be edited through Webmin's web interface. You can also define commands to be run before and after the file is edited, so that it can be validated, copied or backed up before editing. 

Possibly the most useful feature of the module is its access control support. You can grant other Webmin users the rights to use some or all of the commands and editors, while giving only yourself and other trusted administrators permissions to create and edit commands. This means that the other users can only execute the scripts and edit the files that you allow them to, but without full root privileges. 

Unlike most other modules, this one does not deal with the configuration of some separate server or service. Therefore it has the exact same user interface and functionality on all versions of Unix that Webmin can run on. 

When you enter the module from the Others category, its main page shows all existing custom commands and file editors, along with their parameters. The screenshot below shows an example from a system with 3 file editor and 7 commands defined, two of which have a parameter. If you have not used the module before, the page will be empty though. 

[![](/images/docs/screenshots/modules/light/custom-commands.png "Custom Commands Screenshot")](/images/docs/screenshots/modules/light/custom-commands.png)

You can run any command shown on the main page by just clicking its button. However, if the command has parameters fields or choices you must fill them in or make the appropriate selections before running it. When the button is clicked, you will be taken to a page showing al output from the command, so that you can see if it succeeded or failed. 

To use a file editor, just click on its button on the main page. This will take you to an editing form showing the current file contents, which you can change freely. When done, click the **Save** button below the text box to write out the new file contents. 

### Creating a new command
To create a new command that can be run using a button on the module's main page, the steps to follow are : 
 - Click on the **Create a new custom command** link above or below the existing buttons.
 - Enter a short description for your command into the **Description** field. Whatever text you enter will appear on the command's button on the main page. You can also enter additional text (including HTML tags) into the larger text box below it, to be displayed underneath the button. 
 - In the **Command** field, enter the shell script or command that you want to execute. All standard shell metacharacters are supported, such as `||`, `&`, `<` and `>`. To enter multiple commands, separate them with `;` or `&&`. If your command has parameters they will be converted into environment variables when the command is run. So if you have a parameter called `foo`, all occurrences of `$foo` in the command string will be replaced with whatever the user enters for that parameter. For example, a command that allowed the user to finger any user on the system might look like _finger $user_ . 
 - By default, the command will run in the Webmin directory for this module. To change this, de-select **Default** for the **Run in directory** field and enter a different path into the text box next to it. 
 - In the **Run as user** field, enter the name of the Unix user that the command should run as. You can select Webmin user instead, which will cause it to run as the Unix user with the same name as the Webmin user who runs it. When the command is executed, it will not normally have access to the same environment variables that the Unix user would have if he logged in via telnet or SSH.  However, if you check the **Use user's environment** option then all variables set in the user's `.profile`, `.cshrc` and other login files will be available. Webmin runs the command with su, which switches to the user, executes his shell and then executes the command. 
 - If your command produces HTML output that you want to appear in the browser when it is run, change the **Command outputs HTML?** field to **Yes**. Otherwise Webmin will escape all HTML tags in the output, which is the correct thing to do for commands that produce just normal text. 
 - To control the placement of the new command on the module's front page, enter a number for the **Ordering on main page** option. Commands are ordered so that those with the highest number appear first. If **Default** is chosen, the ordering number is taken to be zero. If you do not set the ordering number for any of your custom commands, they will be displayed in the order that they were created. 
 - To prevent the user seeing the actual shell command being run when its button is clicked, set the **Hide command when executing?** field to **Yes**. This is a good idea if you command contains passwords or other sensitive information you want to hide from the user. 
 - To have the command appear in Usermin's Custom Commands module, change the **Available in Usermin?** field to **Yes**. See [Usermin Configuration](/docs/modules/usermin-configuration) for more information on how to install and configure Usermin. 
 - If you want your command to have parameters that the user can set on the main page, you need to fill in the **Command parameters** section. Each row in the table in this section defines one parameter, and for each the following information must be entered :
    - **Name** &mdash; A short unique name for this parameter, which  can be used in the **Command** field (prefixed with a $) to indicate where the value entered by the user should be substituted. The name should be made up of only letters, numbers and the underline character.
    - **Description** &mdash; The text that will label the parameter on the module's main page. This can contain any characters including HTML tags, but should not be too long.
    - **Type** &mdash; This menu controls how the parameter is displayed on the module's main page, and what inputs are allowed. The most common choice is **Text**, but all available options and their meanings are covered in the [Parameter Types](#parameter-types) section below.
    - **Quote parameter?** &mdash;  If set to **Yes**, the value entered by the user will be quoted with `"` characters before substitution. When creating a new command, only one empty row for entering a single parameter is available. To add more, you will need to re-edit the command after saving it. 
 - Finally, when you are done entering the details of your new command, click the **Create** button. As long as there are no errors in the form, you will be returned to the module's main page on which the new command button should be visible 

Once a command has been created, you can edit it by clicking on the **Edit command** link below it on the module's main page. All the fields described above can be changed, and an additional parameter added. Once you are done making changes, click the **Save** button at the bottom of the page. Or to get rid of the command, click the **Delete** button in the bottom-right corner instead.

### Parameter types
For each parameter in a command, you can choose a type from its menu under the **Type** column. The available options and their meanings are : 
- **Text** The parameter is a text field, into which any string can be entered.
- **User** The parameter is a small text field with a user selection button next to it. Only valid UNIX users can be entered or selected from the pop-up user window.
- **UID** Like the User option, but the username entered will be converted to a UID for substitution into the command when it is run.
- **Group** The parameter is a small text field with a group selection button next to it. Only valid UNIX groups can be entered or selected.
- **GID** Like the Group option, but the group name entered will be converted to a GID for substitution into the command when it is run.
- **File** A text field with a file chooser button next to it. No validation is done to check that an actual file or valid filename is entered.
- **Directory** Like the File option, but the chooser button pops up a directory chooser instead.
- **Option..** The parameter is displayed as a pair of radio buttons, labelled Yes and No. If Yes is chosen, the text entered in the field next to the type menu on the command creation form will be substituted into the command string. If No is chosen, an empty string will be substituted instead. This type can be useful for optional shell command arguments—for example, in a command like `rm $force /some/directory`. In this example, the `force` parameter would use the Option type and have `–f` entered into the text field next to the type menu.
- **Password** Like the Text type, but an HTML password field is used instead to hide the text entered by the user.
- **Menu..** If this type is chosen, the parameter is displayed as a drop-down menu in which the choices are taken from the file entered in the field next to the type menu. Each line in the file defines one menu entry. If the line contains a comma, the text after the comma is what appears to the user in the menu, while the text before it is the actual value to which the parameter is set when the command is run.
- **Upload** This type displays a file upload input that the user can use to select a file on his PC. When the command is run, the file is uploaded to the server and placed in a temporary file. The full path to this file is then used as the parameter when the command is run, so that it can be copied to some directory, converted to a different format, or whatever you like. When the command completes, the temporary file will be deleted.

### Creating a new file editor
To add a new button to the module's main page for editing a file, you must follow these steps: 
 - Click on the **Create a new file editor** link above or below the existing buttons.
 - Enter a short description for the file to be edited into the **Description** field. Whatever text you enter will appear on the editor's button on the main page. You can also enter additional text (including HTML tags) into the larger text box below it, to be displayed underneath the button.
 - Enter the full path to the file to be edited into the **File to edit** field. The file does not necessarily have to exist yet.
 - To have the file's owner changed when it is saved, set the **File ownership** field to **User** and enter a Unix username and group name into the fields next to it. This is especially useful when editing a file that does not exist yet, so that the ownership of the newly created file is set properly. If you leave the field set to **Leave as it**, the file's ownership will not be changed when it is saved. Newly created files will be owned by root. 
 - To have the file's access permissions changed when it is saved, set the **File permissions** field to **Set to octal** and enter the permissions (like _700_ or _664_) into the field next to it. To you select **Leave as it**, the file's permissions will not be changed when it is saved. The permissions on newly created files depend on the Webmin processes's umask. 
 - To have a command run just before the file is saved by the user, fill in the **Command to run before saving** field. This could be useful for making a backup copy, checking the file out of RCS or anything else that you can come up with. 
 - Similarly, to have a command run just after the file is saved fill in the **Command to run after saving** field. This can be useful for validating the file's contents, copying it to another system or checking it back into RCS. 
 - To control the placement of the new editor's button on the module's front page, enter a number for the **Ordering on main page** option. Commands and editors are ordered so that those with the highest number appear first. If **Default** is chosen, the ordering number is taken to be zero. If you do not set the ordering number for any of your file editors, they will be displayed in the order that they were created. 
 - To have the editor appear in Usermin's Custom Commands module, change the **Available in Usermin?** field to **Yes**. See [Usermin Configuration](/docs/modules/usermin-configuration) for more information on how to install and configure Usermin. 
 - Finally, click the **Save** button. If there are no errors in the form, you will be returned to the module's main page which will include a button for the new editor. 

Once an editor has been created, you can edit it by clicking on the **Edit file editor** link below it on the module's main page. Once you are done making changes, click the **Save** button at the bottom of the page. Or to get rid of the editor, click the **Delete** button in the bottom-right corner instead.

### Module access control
The access control options in the Custom Commands module are designed to allow a master Webmin user to give some other users the rights to run selected commands, but not edit or create them. From a security point of view, it makes no sense to give an un-trusted user permissions to create his own custom commands, because that would allow him to run any command as root and so compromise the security of the entire system. Similarly, you can restrict the file editors that a Webmin user can use, and prevent him from creating new editors. 

Once you have created a user or group with access to the Custom Commands module, the steps to follow to limit his access are:
 - In the [Webmin Users](/docs/modules/webmin-users) module, click on **Custom Commands** next to the name of the user or group that you want to grant access to. This will bring up the access control form for the module. 
 - Change the **Can edit module configuration?** field to **No**. 
 - Unless you want the user to be able to run all commands and use all editors, set the **Commands this user can run** field to **Selected** and choose those that he should be allowed to use from the list below. Alternately, you can choose **All except selected** and select from the list the commands that he should not be allowed to use. All others will be available to him. 
 - Change the **Can create and edit commands?** field to **No**. 
 - Click the **Save** button. The access control settings will be activated and you will be returned to the main page of the Webmin Users module. 

If you want to grant access to selected custom commands and editors to a large number of users, a better solution may be to install Usermin, which allows any Unix user to login. Any command for which the he **Available in Usermin?** field is set to **Yes** will be visible in Usermin's Custom Commands module, and work in exactly the same way. See [Usermin Configuration](/docs/modules/usermin-configuration) for more information on Usermin and how it can be configured to limit which Unix users can run custom commands.
