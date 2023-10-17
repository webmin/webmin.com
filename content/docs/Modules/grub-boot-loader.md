---
title: "GRUB Boot Loader"
date: 2023-09-13
subSection: "Hardware"
weight: 765
---

### About
On this page the Linux boot process and  **GRUB boot loader** are covered. It explains how to run different operating systems or load different kernels at boot time. 

### Intro
When a Linux system running on computer hardware is started, the first code to be run is the BIOS (Basic Input Output System) which is loaded from ROM. After it has finished testing the system's memory and discovering what hardware is installed, it attempts to pass control to an operating system boot loader to continue the boot process. The boot loader is a tiny program that may prompt the user to choose which OS to run, and then loads the rest of the operating system kernel from a hard drive, floppy disk or some other source. 

On a normal system, the boot loader is loaded by the BIOS from the first block on the primary hard drive, called the master boot record or MBR. However, the BIOS may (depending on its configuration) check the floppy drive or CD-ROM for a boot loader first, so that the system can be booted off a removable disk. This is usually only done when installing a new operating system - for normal everyday use, almost every system boots from hard disk. 

There are several boot loaders available for Linux, but the two most common and the two which will be covered in this page are LILO and GRUB. Both work only on x86-compatible PC hardware, so if you are running Linux on an Apple, SPARC or Alpha system, this page will not be much use to you. Each non-PC hardware platform has its own specialized Linux boot loader, designed to deal with the particular quirks and requirements of the platform. 

Other operating systems (such as Windows, FreeBSD and Solaris) have their own boot loaders, which do basically the same thing as LILO or GRUB, but are designed to load the kernel of a different OS instead. Webmin does not support the configuration of any non-Linux boot loader, so if you are running a different version of Unix this page can be skipped. 

On a Linux system, the boot loader's primary responsibility is the loading of the kernel. Once the kernel has been loaded into memory and control has been transferred to it, the boot loader's job is done. The kernel then mounts the root filesystem, initialized drivers, and finally runs the init program to continue the [Bootup and Shutdown](/docs/modules/bootup-and-shutdown) module.

The boot loader can also start the process of loading a totally different OS on systems that have more than one installed. It does this by loading the other operating system's boot loader from the first block of a partition or other hard disk, and then transferring control to it. The other OS then loads exactly as it would if its boot loader were run directly by the BIOS. Being able to decide which operating system to load at boot time makes 
it practical to have two or more installed on the same system, such as Windows and Linux. 

Both LILO and GRUB can be configured to display a menu of boot options when they are loaded, allowing the user to select which particular kernel to load or other operating system to load. Being able to choose from several different kernels can be particularly useful when you have installed a new one and want to have the option of booting into both new and old. It is even possible to have several boot options that all load the same kernel version, but with different command-line options. 

All Linux distributions will give you the option of automatically setting up a boot loader at installation time. You can usually choose to boot other installed operating systems as well, for example if you are adding Linux to a system with Windows already installed on a different partition. If this default configuration is working for you, be very careful when changing the LILO or GRUB configuration manually or through Webmin. A single mistake may render your system un-bootable, and necessitate the use of a rescue disk to recover. 

GRUB usually uses the configuration file `/boot/grub/grub.cfg` (previously `menu.lst`) and LILO it does understand the format of `ext2`, `ext3`, `ext4` and `vfat` filesystems and so can read the `menu.lst` and kernel files without the need for a block map. For this reason and because GRUB can load a kernel stored anywhere on the hard disk, it is usually considered to be a superior boot loader, and has been over LILO on most Linux distributions. 

### The module
As the name suggests, this module allows you to set up GRUB. Like the LILO module, when you enter it from the Hardware category the main page shows a list of icons, one for each boot-time option.

The module's icon will only appear if Webmin detects that GRUB is installed on your system. If it is not visible or if an error is displayed when you enter the module, GRUB is not installed. If so, LILO is probably being used instead and so you should use the Linux Boot Loader module. 

One peculiarity of GRUB is that internally it refers to all hard disks by their BIOS disk number. `hd0` is the first drive identified by the BIOS, and `hd0,0` is the first partition on that drive. On a system with only IDE hard drives, this numbering is quite simple - BIOS disk 0 is the primary master, or `/dev/hda` on Linux. Disk 2 (called `hd1` by GRUB) is the primary slave, and so on. However, on a system with SCSI and IDE drives, things get more complex. IDE disks usually come before SCSI in the BIOS ordering, but this may be reversed on some systems. Fortunately, the GRUB module in recent versions of Webmin can automatically detect the relationship between Linux device files and BIOS disk numbers. 

### Booting a new Linux kernel or BSD with GRUB
If you have just compiled a new kernel and want to be able to use it, you will need to add a new GRUB boot option. 

A similar process should be followed if you have both Linux and FreeBSD, NetBSD or OpenBSD installed on your system and want to be able to choose one of them at boot time. To set this up, the steps to follow are: 
- To boot a Linux kernel, after compiling copy its compressed kernel image file (usually found under the source directory at arch/i386/bzImage) to the `/boot` directory. Normally it should be renamed to vmlinuz-_xx.yy.zz_, where `xx.yy.zz` is the kernel version number. 
- On the main page of the **GRUB Boot Loader** module, click on the **Add a new boot option** link to go to the option creation form. 
- Enter a unique name for your new kernel into the **Option title** field, such as `linux-xx.yy.zz`. Whatever you enter will appear in the GRUB menu at boot time. 
- Set the **Boot image partition** field to **Selected** and choose the partition that contains your kernel from the list next to it. If the partition does not appear in the menu, you will need to choose **Other** instead and enter the disk and partition into the field next to it, in the `hdX,Y` format used by GRUB.  For example, `hd2,1` would be the second partition on BIOS drive 3. 
- For **Operating system to boot**, select **Linux kernel** and enter the path to the kernel's compressed image file into the field next to it. To pass additional arguments to the kernel, enter them into the **Kernel options** field below it. For FreeBSD, you must also select **Linux kernel** and enter `/boot/loader` into the field. No additional kernel arguments are allowed.  For NetBSD or OpenBSD, select **Linux kernel** as well and enter `type=netbsd /netbsd-elf`. 
- If the root directory on your system is mounted from a device that is not compiled into the Linux kernel (such as a SCSI disk or hardware RAID controller), you will need to create an initial RAM disk containing the kernel modules needed to access the root filesystem. The simplest way of checking to see if this is necessary is to look at other existing boot kernel configurations.  To create an initial RAM disk file under the `/boot` directory for kernel version `xx.yy.zz`, you will need to run a command like : `mkinitrd /boot/initrd-xx.yy.zz xx.yy.zz`. Then set the **Initial ramdisk file** field to the path to the newly created file.
- Finally, click the **Create** button. As long as there were no errors detected in your input, you will be returned to the module's main page which will now contain an addition icon for the new kernel. 
- To boot into the new kernel, you will need to re-start your system. When GRUB loads at boot time, it will display a menu of available boot options, from which you can select the newly added kernel. Be sure to watch the debugging output and error messages that the kernel displays while booting, so that if anything goes wrong you can diagnose the problem. If there is a problem, you may need to re-boot and select the old kernel option, then use Webmin to fix the GRUB configuration. 

Once you have created a new kernel boot option, you can edit it by clicking on its icon on the module's main page. On the editing form, any of the fields can be edited and the changes saved by clicking the **Save** button, or the kernel can be removed by clicking **Delete** instead. Always be careful editing any kernel configurations that you did not create yourself, as a mistake may make the system unbootable. 

### Booting another operating system with GRUB
If your system has another operating system installed on a different hard disk or partition, you can configure GRUB so that it can be chosen and started at boot time instead of Linux. If you want to boot FreeBSD, NetBSD or OpenBSD see the **Booting a new Linux kernel or BSD** section above instead - but for Windows, UnixWare or any other OS the steps to follow are: 
- On the module's main page, click on **Add a new boot option** to bring up the boot option creation form. 
- Enter a unique name for into the **Option title** field, such as windows. 
- Set the **Boot image partition** field to **Selected** and choose the partition that contains the other OS from the list next to it. If the partition does not appear in the menu, you will need to choose **Other** instead and enter the disk and partition into the field next to it, in the `hdX`,`Y` format used by GRUB. 
- Change the **Operating system to boot** to **Other OS**. 
- Normally, GRUB will simply run the boot loader in the first sector of the chosen partition. However, there may not always be a boot loader there, if for example the operating system normally writes its loader to the master boot record. If the other operating system is Windows, select the **From chainloader file** and enter `+1` into the field next to it. You must also check the **Make root partition action?** option. If booting SCO UnixWare, you need to also select the **From chainloader file** and enter `force +1` into the field next to it. The **Make root partition action?** option must also be selected. 
- Click the **Create** button to have the new OS added. Your browser will return to the module's main page, which will now include an icon for your new boot option. 
- To boot into the other operating system, re-start your system and select it from the GRUB menu at boot time. 

As with boot options for Linux kernels, your can edit or delete the option for another operating system by clicking on its icon on the module's main page. Any changes will take effect immediately, to be used when the system is next re-booted. 

### Editing global GRUB options
GRUB has several options that apply to all bootable kernels and operating systems. To edit these global options, the steps to follow are: 
- Click the **Edit Global Options** button on the module's main page, which will take you to the options form. 
- To control which kernel is booted automatically if the user does not choose one from the GRUB menu within the configured time limit, change the **Default boot option** field. If the option you choose cannot be loaded, GRUB will fall back to whatever is selected in the **Fallback boot option** field. 
- To change the amount of time that GRUB will wait for the user to choose a boot option before it uses the default instead, edit the **Timeout before using default** field. 
- The GRUB boot menu allows users to do things like change kernel parameters and read arbitrary files on Linux filesystems.  To prevent this, enter a password into the **Boot password** field. This will limit users to the available boot options unless the password is entered. Furthermore, boot options in which the **Password locked?** field has been set will not be selectable either. 
- When done, click the **Save** button and you will be returned to the module's main page. 

### Installing GRUB
If you have been using the LILO boot loader and want to switch to GRUB, you will need to install it on the same master boot record or partition that LILO is currently using. This only has to be done once, unlike LILO which has to be effectively re-installed every time its configuration is changed. 

To install GRUB, the steps to follow are: 
- On the module's main page, click on the **Edit Global Options** button. 
- From the **Install GRUB on disk/partition** menu, select the disk or partition onto which you want GRUB installed. This will typically be the first hard drive on your system. 
- Click the **Save** button to return to the module's main page. 
- Click on the **Install GRUB** button to have it written to the drive or partition chosen in step 2. 
- So that your system can be booted into Linux from now on, create any necessary kernel boot options as explained in the **Booting a new Linux kernel or BSD** section. If you re-boot before doing this, it will be impossible to start Linux again!

### GRUB 2
GRUB 2 is used in all newer distros uses configuration files in `/etc/grub.d/`. Module configuration could be modified, but Webmin **GRUB boot loader module** won't work with GRUB 2 system.

#### Differences between GRUB 2 and GRUB
GRUB and GRUB 2 are both boot loaders, but they are different versions with GRUB 2 being the successor to GRUB (often referred to as GRUB Legacy). They have several key differences and are not directly compatible. Here's an overview of their distinctions and how to use GRUB 2 from the command line.

1. **Configuration files**:
   - **GRUB**: Uses `/boot/grub/menu.lst` or `/boot/grub/grub.conf` for its configuration.
   - **GRUB 2**: Uses `/boot/grub/grub.cfg`. This file shouldn't be edited directly as it's generated by other configuration files and scripts. The main configuration file for GRUB 2 is `/etc/default/grub` and the scripts in `/etc/grub.d/`.

2. **Command syntax**:
   - **GRUB**: Commands like `root` and `kernel` are used in its configuration.
   - **GRUB 2**: Uses commands like `set root` and `linux` instead.

3. **Disk naming**:
   - **GRUB**: Uses the old convention like `(hd0,0)` for the first partition of the first hard disk.
   - **GRUB 2**: Uses a similar but distinct convention: `hd0,msdos1`.

4. **Filesystem support**:
   - **GRUB**: Has limited filesystem support.
   - **GRUB 2**: Supports a wider range of filesystems including `ext4`, and even supports RAID and LVM configurations.

5. **Themes and graphics**:
   - **GRUB 2**: Has better graphical and theming capabilities compared to its predecessor.

6. **Modular nature**:
   - **GRUB 2**: Is more modular. It loads external modules to support different filesystems or features, reducing the core size of the bootloader.

#### Using GRUB 2 from the command line

1. **Update GRUB 2 configuration**: After making any changes to `/etc/default/grub` or `/etc/grub.d/`, you should regenerate the `grub.cfg` file using:
   ```bash
   sudo update-grub
   ```

2. **Manually install GRUB 2 to the MBR**:
   ```bash
   sudo grub-install /dev/sdX
   ```
   Replace `sdX` with the appropriate drive, e.g., `sda` for the first hard drive.

3. **Enter the GRUB 2 command line**: If you're at the GRUB 2 menu during boot (the menu where you select which OS or kernel to boot), you can press 'c' to enter the GRUB 2 command line, which is useful for troubleshooting boot issues.

4. **Set default entry**: To set a default boot entry, you can modify the `GRUB_DEFAULT` parameter in `/etc/default/grub` and then run `sudo update-grub`.

5. **Boot parameters**: You can edit the boot parameters for a particular boot entry by pressing 'e' at the GRUB 2 menu. This is temporary and changes will not persist across reboots.

6. **Recover GRUB 2**: If you happen to lose GRUB 2 due to a Windows installation or some other mishap, you can use a Linux live CD/USB to _chroot_ into your system and reinstall GRUB 2.

Remember, while GRUB 2 is more powerful and flexible than its predecessor, it's also more complex. It's crucial to backup any configuration files before making changes, and be very careful when executing commands that write to the Master Boot Record (MBR).