---
title: "Webmin CLI"
menuTitle: "Webmin CLI"
summary: "A practical reference for the webmin command and its main built-in subcommands."
date: 2026-08-10
author: "Ilia Ross"
weight: 8000
showtoc: true
---

The `webmin` command provides a command-line interface for common Webmin administration, recovery and development tasks. It is useful when the web interface is unavailable, when a maintainer asks you to test a patch, or when a task needs to be scripted.

{{< alert warning exclamation-triangle "Run as root" "The `webmin` command refuses to run as an unprivileged user. Its subcommands can change passwords, configuration and installed program files, and can stop or restart Webmin. Read the command and substitute values carefully before running it." >}}

The general form is:

```text
webmin [global options] command [command options]
```

### Finding the command

Package installations normally make `webmin` available in the shell as `/usr/bin/webmin`. Check with:

```text
command -v webmin
```

If it is not in `PATH`, run the copy inside the Webmin installation directory. Common locations are:

```text
/usr/libexec/webmin/bin/webmin
/usr/share/webmin/bin/webmin
/usr/local/webmin/bin/webmin
```

All examples on this page use the shorter `webmin` form.

### Getting help

The installed Webmin version is the best source for the exact commands available on a particular system:

```text
webmin --list-commands
webmin --list-commands --describe
webmin --man patch
webmin patch --help
```

`--list-commands` includes the commands bundled with Webmin and commands supplied by installed modules. A module command is shown as `module-command`, and can be inspected with `webmin --man module-command`.

### Global options

| Option | Purpose |
| --- | --- |
| `--help`{{< rawhtml >}}<br>{{< /rawhtml >}}`-h` | Show the main command usage, or use it after a subcommand to show that command's usage. |
| `--config PATH`{{< rawhtml >}}<br>{{< /rawhtml >}}`-c PATH` | Use a Webmin configuration directory other than `/etc/webmin`. |
| `--list-commands`{{< rawhtml >}}<br>{{< /rawhtml >}}`-l` | List the commands available in this installation. |
| `--describe`{{< rawhtml >}}<br>{{< /rawhtml >}}`-d` | Add a short description to `--list-commands`. |
| `--man`{{< rawhtml >}}<br>{{< /rawhtml >}}`-m` | Display the full manual for a command, as in `webmin --man patch`. |
| `--version`{{< rawhtml >}}<br>{{< /rawhtml >}}`-v` | Print only the installed Webmin version. |
| `--versions`{{< rawhtml >}}<br>{{< /rawhtml >}}`-V` | Print Webmin, Usermin and available module and theme versions. |

To use a non-standard configuration directory, put the global option before the command:

```text
webmin --config /usr/local/etc/webmin server status
```

### Subcommands overview

| Command | Purpose |
| --- | --- |
| [patch](#webmin-patch) | Apply a commit, patch file or raw file to Webmin or a module. |
| [passwd](#webmin-passwd) | Change a Webmin user's Unix or Webmin-only password. |
| [disable-twofactor](#webmin-disable-twofactor) | Remove two-factor authentication from a Webmin account. |
| [server](#webmin-server) | Start, stop, inspect or restart the Webmin service. |
| [list-config](#webmin-list-config) | Read core or module configuration values. |
| [set-config](#webmin-set-config) | Change a core or module configuration value. |
| [enable-proxy](#webmin-enable-proxy) | Prepare Webmin to run behind a reverse proxy. |
| [disable-proxy](#webmin-disable-proxy) | Re-enable Webmin's direct HTTPS service. |
| [update-devel](#webmin-update-devel) | Update a development checkout of Webmin, Usermin or Authentic Theme. |

Installed modules can add more commands. Use `webmin --list-commands --describe` to discover them.

#### `webmin patch`

`webmin patch` applies an upstream change directly to an installed copy of Webmin or one of its modules. It is a convenience wrapper around `curl` and the system `patch` command, falling back to `git apply` if `patch` is unavailable.

{{< alert warning exclamation-triangle "Patches change installed files" "The command has no dry-run or automatic rollback mode. Back up Webmin, or at least the affected files, before applying an untrusted or experimental change. Review the commit and make sure its repository matches the installed product or module." >}}

This is most useful when a Webmin or Virtualmin maintainer provides a commit to test before the fix is included in a normal release.

```text
webmin patch PATCH_URL_OR_FILE
```

##### Apply a GitHub or GitLab commit

Pass the commit page URL. The command automatically requests its `.patch` form when the URL does not already end in `.patch` or `.diff`:

```text
webmin patch https://github.com/webmin/webmin/commit/FULL_COMMIT_ID
```

For a Virtualmin GPL commit, the repository name tells the command to apply the patch under Webmin's `virtual-server` module:

```text
webmin patch https://github.com/virtualmin/virtualmin-gpl/commit/FULL_COMMIT_ID
```

The command also recognizes a specific commit within a GitHub pull request:

```text
webmin patch https://github.com/OWNER/REPOSITORY/pull/123/commits/FULL_COMMIT_ID
```

GitLab commit URLs and GitLab merge-request diff URLs with a `commit_id` are supported as well.

##### Full and short commit IDs

Both a full commit ID and a sufficiently long unique abbreviation can work. The hosting service resolves the abbreviated ID; the `webmin` command does not guess which commit was intended. An ambiguous or unknown abbreviation should fail instead of selecting an arbitrary commit.

Use the full commit URL when practical. It is unambiguous, easier to audit later and simple to copy from the commit page.

##### Apply a local patch file

For a Webmin core patch, change to the Webmin installation directory and pass an absolute path to the patch file:

```text
cd /usr/share/webmin
webmin patch /root/patches/webmin-fix.patch
```

For a module patch, change to that module's directory first. Local patch files do not contain a repository URL from which the command can infer the target module:

```text
cd /usr/share/webmin/virtual-server
webmin patch /root/patches/virtualmin-fix.patch
```

RPM-based systems commonly use `/usr/libexec/webmin` instead of `/usr/share/webmin`.

##### Apply full patch text

The complete text of a patch can also be passed through standard input. This is useful when a maintainer provides a patch to paste directly into the shell instead of a URL or saved file.

The following example first enters the Virtualmin Pro module directory on either an RPM-based or Debian-based installation, then applies everything between the `EOF` markers:

```text
{ cd /usr/libexec/webmin/virtual-server/pro ||
  cd /usr/share/webmin/virtual-server/pro; } &&
webmin patch /dev/stdin <<'EOF'
-- paste the full patch text here --
EOF
```

Paste the full patch text between the `EOF` markers, including its file headers and diff content. Keep `EOF` quoted as shown so the shell passes characters such as `$`, backticks and backslashes without expanding them. The patch command runs only if one of the two `cd` commands succeeds.

##### Replace file from a raw URL

A raw GitHub or GitLab URL on the `main` or `master` branch is treated differently: the command downloads the file and replaces the corresponding installed file instead of applying a diff.

```text
webmin patch https://raw.githubusercontent.com/webmin/webmin/master/PATH/TO/FILE
```

This form is convenient but carries more risk because it replaces the whole file. Prefer a reviewed commit patch when one is available.

##### Options and requirements

| Option | Purpose |
| --- | --- |
| `--help`{{< rawhtml >}}<br>{{< /rawhtml >}}`-h` | Show command usage. |
| `--config PATH`{{< rawhtml >}}<br>{{< /rawhtml >}}`-c PATH` | Use a configuration directory other than `/etc/webmin`. |

`curl` is required. Either `patch` or `git` must also be installed. After a successful patch, Webmin reloads its server and prints the files that were changed or replaced.

The patch remains outside the package manager's normal state and may be replaced by a later Webmin or module upgrade. Keep the commit URL so you can identify the change. If a patch must be removed before an official upgrade is available, restore the affected files from a backup or reinstall the same package version, then apply any other intentional local changes again.

#### `webmin passwd`

`webmin passwd` changes the authentication password for an existing Webmin user. If an account with the same name also exists as a Unix user, interactive use asks whether to change the Unix password or create a separate Webmin-only password.

```text
webmin passwd USERNAME
webmin passwd --user USERNAME --unix
webmin passwd --user USERNAME --webmin-only
```

| Option | Purpose |
| --- | --- |
| `--user USERNAME`{{< rawhtml >}}<br>{{< /rawhtml >}}`-u USERNAME` | Select an existing Webmin user. The username can instead be supplied as the only positional argument. |
| `--unix` | Run the system `passwd` command for the matching Unix user and configure Webmin to use Unix authentication. This requires an interactive terminal. |
| `--webmin-only`{{< rawhtml >}}<br>{{< /rawhtml >}}`--webmin` | Set a separate password in Webmin's `miniserv.users` file, even when a matching Unix user exists. |
| `--password PASSWORD  ⁨ ⁨ ⁨ ⁨ ⁨ ⁨ ⁨ ⁨ ⁨`{{< rawhtml >}}<br>{{< /rawhtml >}}`-p PASSWORD` | Supply a Webmin-only password non-interactively. The password may be exposed in shell history or the process list. |
| `--stdout`{{< rawhtml >}}<br>{{< /rawhtml >}}`-o` | Print the password hash without changing the user file. |
| `--config PATH`{{< rawhtml >}}<br>{{< /rawhtml >}}`-c PATH` | Use a configuration directory other than `/etc/webmin`. |
| `--help`{{< rawhtml >}}<br>{{< /rawhtml >}}`-h` | Show command usage. |

When both account types exist, `--unix` is normally the best choice because Webmin and other system services continue to use the same Unix password. A Webmin-only password overrides Unix authentication for that Webmin account.

For recovery steps and installation-path examples, see [Changing a Webmin Password When You Can't Log In](/docs/tutorials/changing-a-webmin-password-when-you-cant-log-in/).

#### `webmin disable-twofactor`

This recovery command removes the configured two-factor provider and credentials from an existing Webmin user, then reloads Webmin:

```text
webmin disable-twofactor --user USERNAME
```

| Option | Purpose |
| --- | --- |
| `--user USERNAME`{{< rawhtml >}}<br>{{< /rawhtml >}}`-u USERNAME` | Select the Webmin user whose second factor should be removed. |
| `--config PATH`{{< rawhtml >}}<br>{{< /rawhtml >}}`-c PATH` | Use a configuration directory other than `/etc/webmin`. |
| `--help`{{< rawhtml >}}<br>{{< /rawhtml >}}`-h` | Show command usage. |

Use it when the second factor, such as a phone or security key, is unavailable. The user can configure two-factor authentication again after signing in.

#### `webmin server`

`webmin server` controls the Webmin service and can display its status or detailed runtime statistics:

```text
webmin server status
webmin server restart
webmin server --command reload
```

| Action | What it does |
| --- | --- |
| `status` | Show service status with `systemctl`, or the system's `service` command when systemd is unavailable. |
| `start` | Start Webmin using the start helper in its configuration directory. |
| `stop` | Stop Webmin cleanly. |
| `restart` | Stop and start Webmin using its normal restart helper. |
| `reload` | Ask Webmin to reload using its normal reload helper. |
| `force-restart ⁨` | Restart with Webmin's force-kill helper when a normal restart is not sufficient. |
| `kill` | Stop and terminate the service. Reserve this for a stuck service. |
| `stats` | On systemd-based Linux systems, print extensive process, memory, file-descriptor, network, I/O, cgroup and recent-log details. |

The action can be positional or supplied with `--command ACTION` (`-x ACTION`). `--config PATH` (`-c PATH`) selects another configuration directory, and `--help` (`-h`) shows usage.

The `stats` output can contain command arguments and selected environment variables. Review it for secrets before posting it publicly.

#### `webmin list-config`

`webmin list-config` reads values stored in Webmin's core `miniserv.conf` or in a module's `config` file. With no options, it prints the entire `miniserv.conf` file:

```text
webmin list-config
webmin list-config --option port
webmin list-config --module apache
webmin list-config --module apache --option test_manual
```

| Option | Purpose |
| --- | --- |
| `--module MODULE`{{< rawhtml >}}<br>{{< /rawhtml >}}`-m MODULE` | Read `/etc/webmin/MODULE/config` instead of `miniserv.conf`. |
| `--option NAME`{{< rawhtml >}}<br>{{< /rawhtml >}}`-o NAME` | Print only the stored value of one option. |
| `--describe`{{< rawhtml >}}<br>{{< /rawhtml >}}`-d` | For a module, print descriptions from its `config.info` instead of current values. |
| `--config PATH`{{< rawhtml >}}<br>{{< /rawhtml >}}`-c PATH` | Use a configuration directory other than `/etc/webmin`. |
| `--help`{{< rawhtml >}}<br>{{< /rawhtml >}}`-h` | Show command usage. |

This command reports values explicitly stored in the file. It does not calculate every default or validate whether a value is currently effective.

#### `webmin set-config`

`webmin set-config` changes or adds one stored configuration value:

```text
webmin set-config --option port --value 10000
webmin set-config --module apache --option test_manual --value 1
```

With no `--module`, it edits `miniserv.conf` and restarts Webmin. With `--module`, it edits that module's `config` file and validates the option against the module's `config.info`; it does not restart Webmin.

| Option | Purpose |
| --- | --- |
| `--option NAME`{{< rawhtml >}}<br>{{< /rawhtml >}}`-o NAME` | Select the option to change. This is required. |
| `--value VALUE`{{< rawhtml >}}<br>{{< /rawhtml >}}`-v VALUE` | Set the new value. |
| `--module MODULE`{{< rawhtml >}}<br>{{< /rawhtml >}}`-m MODULE` | Change a module's configuration instead of `miniserv.conf`. |
| `--force`{{< rawhtml >}}<br>{{< /rawhtml >}}`-f` | Skip module option-name validation, allowing hidden or unknown options. |
| `--config PATH`{{< rawhtml >}}<br>{{< /rawhtml >}}`-c PATH` | Use a configuration directory other than `/etc/webmin`. |
| `--help`{{< rawhtml >}}<br>{{< /rawhtml >}}`-h` | Show command usage. |

{{< alert warning exclamation-triangle "Configuration values are low-level" "This command writes configuration files directly. A syntactically accepted value can still be invalid for the selected option. Record the old value with `webmin list-config` before changing it, and use `--force` only when the option is known to be valid." >}}

#### `webmin enable-proxy`

`webmin enable-proxy` changes Webmin's own settings so that another web server can terminate HTTPS and reverse-proxy requests to Webmin:

```text
webmin enable-proxy --referer webmin.example.com
webmin enable-proxy --referer webmin.example.com --prefix /webmin
```

| Option | Purpose |
| --- | --- |
| `--referer HOSTNAME`{{< rawhtml >}}<br>{{< /rawhtml >}}`-r HOSTNAME` | Set the hostname used to reach Webmin. The system hostname is used when omitted. |
| `--prefix PATH`{{< rawhtml >}}<br>{{< /rawhtml >}}`-p PATH` | Set a public URL prefix such as `/webmin`. Omit it when Webmin is proxied at `/`. |
| `--config PATH`{{< rawhtml >}}<br>{{< /rawhtml >}}`-c PATH` | Use a configuration directory other than `/etc/webmin`. |
| `--help`{{< rawhtml >}}<br>{{< /rawhtml >}}`-h` | Show command usage. |

The command sets the proxy hostname and, when requested, URL-prefix values in Webmin's `config` file. It disables Webmin's own SSL and SSL redirect in `miniserv.conf`, then restarts Webmin. The proxy is expected to provide HTTPS to clients.

{{< alert primary exclamation "Configure the reverse proxy separately" "This command does not configure Apache, Nginx, Cloudflare Tunnel or firewall rules. See [Proxying to Webmin with Apache](/docs/tutorials/proxying-to-webmin-with-apache/), [Proxying to Webmin with Nginx](/docs/tutorials/proxying-to-webmin-with-nginx/) or [Using Cloudflare Tunnel with Webmin](/docs/tutorials/using-cloudflare-tunnel-with-webmin/) for the other half of the setup." >}}

Do not run this command until the proxy is ready and you have another way to reach the server if the proxy configuration fails.

#### `webmin disable-proxy`

`webmin disable-proxy` re-enables Webmin's own SSL and SSL redirect, then restarts Webmin:

```text
webmin disable-proxy
```

It accepts only `--config PATH` (`-c PATH`) and `--help` (`-h`).

The command does not remove every hostname or URL-prefix value previously written by `enable-proxy`. If Webmin still redirects to the proxy hostname or prefix, inspect the remaining values with `webmin list-config` and remove or correct them through the Webmin interface or its configuration files.

#### `webmin update-devel`

`webmin update-devel` updates Webmin, Usermin or Authentic Theme from its Git development source.

{{< alert warning exclamation-triangle "Prefer the unstable package repository" "Using `webmin update-devel` is not recommended for normal development updates. It is better to configure the official [Webmin unstable repository](https://download.webmin.dev/) instead, using the setup command provided on that page, so development builds remain managed by the system package manager." >}}

Use this command only when maintaining or testing a source-based development installation.

```text
webmin update-devel --product webmin
webmin update-devel --product usermin --theme
webmin update-devel --product webmin --theme=THEME_RELEASE
```

| Option | Purpose |
| --- | --- |
| `--product webmin\|usermin`{{< rawhtml >}}<br>{{< /rawhtml >}}`-p webmin\|usermin` | Select the product. This is required. |
| `--theme[=RELEASE]`{{< rawhtml >}}<br>{{< /rawhtml >}}`-t[=RELEASE]` | Update only Authentic Theme, optionally to a specified release. |
| `--help`{{< rawhtml >}}<br>{{< /rawhtml >}}`-h` | Show command usage. |

Without `--theme`, the command runs the product's `update-from-repo.sh -force` helper. With `--theme`, it runs Authentic Theme's update helper. Both operations require a suitable source checkout and network access, and can replace local files with unstable development versions.

### Common problems

#### `webmin: command not found`

Use the copy under the installation directory, as described in [Finding the command](#finding-the-command), or correct the system package installation.

#### The command reports that it must be run as root

Open a root shell or use the system's approved privilege-escalation method. Do not make the command *setuid*.

#### The wrong Webmin installation is selected

Pass its configuration directory before the command:

```text
webmin --config /path/to/webmin-config COMMAND
```

The `root` entry in that directory's `miniserv.conf` identifies the corresponding installation directory.

#### A command is missing

Commands vary with the installed Webmin version and modules. Check `webmin --version`, then run `webmin --list-commands --describe`. Upgrade through the normal supported release process if the needed command is not part of that version.
