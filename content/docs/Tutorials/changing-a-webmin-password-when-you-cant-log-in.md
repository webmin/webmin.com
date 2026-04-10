---
title: "Changing a Webmin Password When You Can't Log In"
summary: "How to reset a Webmin password from the command line."
date: 2026-04-10
author: "Ilia Ross"
weight: 7000
showtoc: true
---

If you cannot log in to Webmin, you can change the password for an existing Webmin user from the command line.

{{< alert warning exclamation-triangle "Webmin password or Unix password?" "The `webmin passwd` command only changes passwords stored in Webmin's own password file. If your Webmin user is configured for Unix authentication instead, reset the system password with the regular `passwd` command." >}}

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
webmin passwd --user username --password new_password_here
```

Use this carefully, because putting passwords on the command line can expose them in shell history or process listings.

### Common problems

#### `webmin: command not found`

Use the bundled CLI under your Webmin installation directory, such as `/usr/share/webmin/bin/webmin` or `/usr/local/webmin/bin/webmin`.

#### The password changed, but you still cannot log in

Check whether that Webmin user is configured for **Unix authentication** instead of a password stored in Webmin itself. If so, reset the Unix password for the underlying system account instead.

#### You are not sure where Webmin is installed

For package installs, common locations are `/usr/libexec/webmin` and `/usr/share/webmin`. For source installs, a common location is `/usr/local/webmin`.
