---
title: "Changing a Webmin Password When You Can't Log In"
summary: "How to reset a Webmin password from the command line."
date: 2026-04-10
author: "Ilia Ross"
weight: 7000
showtoc: true
---

If you cannot log in to Webmin, you can change the password for an existing Webmin user from the command line.

{{< alert warning exclamation-triangle "Webmin password or Unix password?" "A Webmin user can use the matching Unix account's password or a separate password stored by Webmin. When both accounts exist, interactive use asks which one to change. Use `--unix` or `--webmin-only` to select explicitly." >}}

### For package-based installs

If Webmin was installed from an `rpm` or `deb` package, run this command as `root`:

```text
webmin passwd username
```

Replace `username` with the Webmin login you want to update, such as `root` or `admin`.

You can also use the explicit form:

```text
webmin passwd --user username
```

If a matching Unix user exists, choose the recommended Unix password option at the prompt. This keeps Webmin and other system services, such as SSH, on the same password.

You can select it directly with:

```text
webmin passwd --user username --unix
```

To set a separate password used only by Webmin, run:

```text
webmin passwd --user username --webmin-only
```

### For tar or source installs

If the `webmin` command is not installed system-wide, run the bundled CLI command from your Webmin installation directory instead.

Typical examples are:

```text
/usr/libexec/webmin/bin/webmin passwd --user username
```

```text
/usr/share/webmin/bin/webmin passwd --user username
```

```text
/usr/local/webmin/bin/webmin passwd --user username
```

If your Webmin configuration directory is not `/etc/webmin`, specify it explicitly:

```text
/usr/local/webmin/bin/webmin passwd --config /path/to/webmin-config --user username
```

### Set a password non-interactively

If you need to set the password in a single command, the CLI also supports passing it directly:

```text
webmin passwd --user username --webmin-only --password new_password_here
```

Use this carefully, because putting passwords on the command line can expose them in shell history or process listings.

### Common problems

#### `webmin: command not found`

Use the bundled CLI under your Webmin installation directory, such as `/usr/share/webmin/bin/webmin` or `/usr/local/webmin/bin/webmin`.

#### The password changed, but you still cannot log in

Check which password type the account uses. Run `webmin passwd --user username` interactively to choose, or use `--unix` for the matching Unix account and `--webmin-only` for a separate Webmin password.

#### You are not sure where Webmin is installed

For package installs, common locations are `/usr/libexec/webmin` and `/usr/share/webmin`. For source installs, a common location is `/usr/local/webmin`.

For the main built-in subcommands and global options, see the [Webmin CLI](/docs/reference/webmin-command-line/).
