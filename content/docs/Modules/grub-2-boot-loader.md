---
title: "GRUB 2 Boot Loader"
date: 2026-06-27
weight: 766
---

### About
This page explains how to use Webmin's **GRUB 2 Boot Loader** module to inspect GRUB 2 boot entries, edit common defaults, add custom menu entries, configure appearance and password protection, regenerate the boot menu and install GRUB when needed.

### Intro
GRUB 2 is the boot loader used by most current Linux distributions. It loads the operating system kernel after the system firmware has initialized the hardware. On BIOS systems it is typically installed to a disk boot area, while on UEFI systems it is installed into an EFI System Partition and registered with firmware boot variables.

GRUB 2 differs from the older GRUB Legacy boot loader documented in [GRUB Boot Loader](/docs/modules/grub-boot-loader). GRUB Legacy commonly used files such as `menu.lst` or `grub.conf`. GRUB 2 generates its main menu from `/etc/default/grub`, scripts under `/etc/grub.d/`, optional custom entries and sometimes Boot Loader Specification entries. The generated menu file is not normally edited by hand.

Because boot loader mistakes can leave a system unable to boot, changes should be made carefully. The Webmin module is designed to inspect the current configuration, validate generated output where possible and make risky actions explicit.

### The module
The **GRUB 2 Boot Loader** module can be found under the Hardware category. The main page shows a configuration summary, detected boot mode, Secure Boot state, important file paths, the menu generation command, the boot loader install command and discovered boot entries.

The module has several main areas:

- **Generated menu** lists entries found in the generated GRUB menu.
- **Custom entries** manages entries from the configured custom menu file.
- **Global Options** edits common settings from the GRUB defaults file.
- **Edit Theme and Appearance** controls terminal output, graphics, colors, theme and background image.
- **Edit GRUB Password** manages password protection for GRUB editing.
- **Edit Config Files Manually** opens allowed GRUB files for advanced editing.
- **Regenerate GRUB menu** rebuilds the generated menu.
- **Install GRUB Boot Loader** runs the GRUB installer with explicit confirmation.

If GRUB 2 is not installed or the configured paths are wrong, the module displays the missing item and links to module configuration.

### Viewing boot entries
The **Generated menu** tab lists boot entries detected from the generated GRUB menu. Entries can include distribution-generated Linux entries, Boot Loader Specification entries, submenu entries and operating systems found by OS prober.

Generated entries are shown for review and runtime actions, but are not edited directly from that tab. To change ordinary Linux kernel options, edit the GRUB defaults. To add administrator-maintained entries, use the custom entries page.

The module can show which entry is the configured default, which entry is saved in the GRUB environment and which entry is selected for one-time boot. When supported by the local GRUB tools, you can use **Make Default** or **Boot Once** for a selected entry.

### Editing default options
The **Edit GRUB Defaults** page updates common settings such as:

- The default menu entry, including saved-environment defaults.
- Timeout style and timeout duration.
- Terminal output, such as console or graphical terminal.
- Kernel options for regular Linux entries and for all Linux entries.
- Whether recovery or rescue entries are disabled.
- Whether OS prober is disabled.
- Graphics mode, background image, colors and theme.

On systems using Boot Loader Specification entries, kernel options may be stored in BLS entry files or in the GRUB environment. The module detects the source and warns if tools such as `grubby` are needed to update existing BLS entries.

Saving default settings rewrites the managed assignments in normalized shell format while preserving other lines and comments where possible. After changing defaults, regenerate the GRUB menu before relying on them at the next boot.

### Custom menu entries
Custom GRUB entries are stored in the configured custom menu file, often `/etc/grub.d/40_custom` or a similar file. The **Custom entries** tab lets you add, edit, reorder or delete those entries.

Each custom entry has a menu title, an optional entry ID and GRUB commands. This is useful for unusual boot targets, locally maintained rescue entries or operating systems that are not generated automatically.

After changing custom entries, regenerate the GRUB menu so they appear in the generated menu file.

### Regenerating the GRUB menu
The **Regenerate GRUB menu** action runs the configured menu generation command, such as `grub2-mkconfig` or `grub-mkconfig`. Webmin writes the generated output to a temporary file first, checks that the file is usable and replaces the live generated menu only after the checks pass.

Use this action after changing GRUB defaults, custom entries, theme settings or password protection. If the generation command is missing or produces an empty or invalid menu, the live menu is not replaced.

### Password protection
The **Edit GRUB Password** page can enable GRUB password protection with a superuser name and a PBKDF2 password hash. Webmin can generate the hash if the GRUB password hashing command is available, or you can paste a pre-generated `grub.pbkdf2` hash.

Password protection limits interactive GRUB editing at boot. It does not replace disk encryption, firmware security or operating system authentication.

### Theme and appearance
GRUB 2 can display text menus, graphical menus, background images and themes. Webmin can install or select a `theme.txt` file, theme directory, local archive or supported URL, and it can copy a background image into the configured GRUB background directory.

Themes require graphical terminal output. If terminal output is set to console, GRUB may boot correctly but the theme will not appear.

### Installing GRUB
The **Install GRUB Boot Loader** page runs the configured GRUB install command. On BIOS systems this typically targets a disk such as `/dev/sda`. On UEFI systems it usually uses an EFI System Partition, a platform target, a boot loader ID and optional firmware-variable behavior.

Installing GRUB changes boot data on disk or in EFI firmware. Confirm the install only after checking that the target, EFI directory and platform match the system you intend to boot. Installing to the wrong disk or EFI directory can make the system unbootable.

### Manual editing and module configuration
The manual editor can open allowed GRUB files, including defaults, generated files, custom files, password scripts, theme or color scripts, the GRUB environment and BLS entries depending on module configuration. Webmin validates supported files before saving.

The module configuration controls paths to GRUB files and commands, including the defaults file, generated menu file, GRUB script directory, custom menu entries file, password script, theme directory, background directory, GRUB environment file, BLS directory, menu generation command, install command, runtime selection commands and validation tools.

### Module access control
Through [Webmin Users](/docs/modules/webmin-users), access can be split into viewing GRUB configuration, editing defaults, managing password protection, generating the menu, changing runtime boot selection, manual editing, installing GRUB and including GRUB files in backups. Installing GRUB and manually editing files should normally be limited to trusted administrators.
