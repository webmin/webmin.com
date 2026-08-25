/* jshint esversion: 6 */
// Install command widget with option toggles and a curl/wget switch, shared
// across sites. A container opts in via the .install-command class or a
// data-install-cmd attribute naming a custom command builder registered in
// window.installCommandBuilders; without one the GPL one-liner is built.
(function () {
    // Read the selected installation options from the widget container
    const readOpts = function (box) {
        return {
            bundle: (box.dataset.bundle || "LAMP").toUpperCase(),
            os: (box.dataset.os || "rpm").toLowerCase(),
            db: (box.dataset.db || "mariadb").toLowerCase(),
            postgres: box.dataset.postgres === "1",
            minimal: box.dataset.minimal === "1",
            grade: (box.dataset.grade || "A").toUpperCase(),
            branch: (box.dataset.branch || "stable").toLowerCase(),
            hostssl: box.dataset.ssl !== "0",
            tool: (box.dataset.tool || "curl").toLowerCase()
        };
    };

    // Installer flags for the selected options; the bundle is always
    // printed explicitly, other flags only for non-default choices
    const buildArgs = function (opts) {
        let args = " --bundle " + (opts.bundle === "LEMP" ? "LEMP" : "LAMP");
        if (opts.minimal) {
            args += " --type mini";
        }
        // Extra packages steer the database choice: they are installed
        // before the stack, so a preinstalled MySQL replaces MariaDB on
        // Debian-family systems, and PostgreSQL support packages differ
        // between the Debian and Enterprise Linux families
        const extras = [];
        if (opts.db === "mysql" && opts.os === "deb") {
            extras.push("mysql-server", "mysql-common", "libdbd-mysql-perl");
        }
        if (opts.postgres) {
            extras.push("postgresql",
                opts.os === "deb" ? "postgresql-client" : "postgresql-server");
        }
        if (extras.length) {
            args += " --extra " + extras.join(",");
        }
        if (opts.postgres) {
            args += " --include PostgreSQL";
        }
        if (opts.grade === "B") {
            args += " --os-grade B";
        }
        if (opts.branch === "unstable") {
            args += " --branch unstable";
        }
        if (!opts.hostssl) {
            args += " --no-hostname-ssl";
        }
        return args;
    };

    // Quote a value for safe use inside a single-quoted shell word
    const shQuote = function (s) {
        return "'" + String(s || "").replace(/'/g, "'\"'\"'") + "'";
    };

    // Default GPL one-liner used when no custom builder is registered
    const buildGplCmd = function (opts) {
        const download = (opts.tool === "wget" ? "wget -qO-" : "curl -fsSL") +
            " https://download.virtualmin.com/virtualmin-install";
        return 'sudo sh -c "$(' + download + ')" --' + buildArgs(opts);
    };

    // Personalized Pro command using the wrapper from the shop API, with
    // the license taken from the container's serial and license data
    const buildProCmd = function (opts, box) {
        const serialRaw = (box.dataset.serial || "").trim();
        const licenseRaw = (box.dataset.license || "").trim();
        const out = "virtualmin-install-" + serialRaw + ".sh";
        const args = buildArgs(opts);
        const wget = opts.tool === "wget";

        // The unstable branch is served directly from the development
        // download server, with the license passed via environment
        // variables instead of the personalized wrapper
        if (opts.branch === "unstable") {
            const devUrl = "https://download.virtualmin.dev/install-script";
            return (
                (wget
                    ? "wget -nv -O " + shQuote(out) + " " + shQuote(devUrl)
                    : "curl -fsS -o " + shQuote(out) + " " + shQuote(devUrl)) + " && " +
                "sudo env SERIAL=" + shQuote(serialRaw) + " " +
                "KEY=" + shQuote(licenseRaw) + " " +
                "sh " + shQuote(out) + args
            );
        }

        // The personalized wrapper is fetched from the shop API; wget
        // passes the license as POST fields instead of basic auth
        const url = location.origin + "/api/install";
        const serial = encodeURIComponent(serialRaw);
        const license = encodeURIComponent(licenseRaw);
        return (
            (wget
                ? "wget -nv --post-data " + shQuote("serial=" + serial + "&license=" + license) + " " +
                    "-O " + shQuote(out) + " " + shQuote(url)
                : "curl -fsS -X POST " +
                    "-u " + shQuote(serial + ":" + license) + " " +
                    "-o " + shQuote(out) + " " + shQuote(url)) + " && " +
            "sudo sh " + shQuote(out) + args
        );
    };

    // Local variant for a script already downloaded to the server, used
    // on docs pages; only the flags change, so there is no tool switch
    const buildLocalCmd = function (opts) {
        return "sudo sh virtualmin-install.sh" + buildArgs(opts);
    };

    // Local Pro variant passes the license through environment variables,
    // as documented for a script that is already on the server
    const buildLocalProCmd = function (opts, box) {
        return "sudo env SERIAL=" + shQuote((box.dataset.serial || "").trim()) + " " +
            "KEY=" + shQuote((box.dataset.license || "").trim()) + " " +
            "sh virtualmin-install.sh" + buildArgs(opts);
    };

    // Resolve the command builder for a widget container: the base mode
    // comes from data-install-cmd, while the Pro edition with a chosen
    // license upgrades the matching base command
    const resolveBuilder = function (box) {
        const mode = box.dataset.installCmd;
        const custom = window.installCommandBuilders &&
            window.installCommandBuilders[mode];
        if (custom) {
            return custom;
        }
        const pro = mode === "pro" ||
            (box.dataset.edition === "pro" && box.dataset.serial);
        if (mode === "local") {
            return pro ? buildLocalProCmd : buildLocalCmd;
        }
        return pro ? buildProCmd : buildGplCmd;
    };

    // Offer the loaded licenses as a picker, a clear note for signed-in
    // users without a usable license, or a sign-in link for visitors,
    // placed just before the edition switch
    const offerLicenses = function (box, state) {
        // The visitor may have switched back to GPL while licenses loaded
        if ((box.dataset.edition || "gpl") !== "pro") {
            return;
        }
        const editionPair = box.querySelector(
            '.install-command__option[data-group="edition"]'
        ).parentElement;
        box.querySelectorAll(".install-command__license").forEach(function (el) {
            el.remove();
        });
        const licenses = state.licenses;

        if (!state.signedIn) {
            const link = document.createElement("a");
            link.className = "install-command__license install-command__license-link";
            link.href = "/account/";
            const icon = document.createElement("i");
            icon.className = "wm wm-fw wm-user-circle";
            link.appendChild(icon);
            link.appendChild(document.createTextNode("Sign in to use your license"));
            editionPair.parentElement.insertBefore(link, editionPair);
            render(box);
            return;
        }

        if (!licenses.length) {
            const note = document.createElement("span");
            note.className = "install-command__license install-command__license-note";
            note.textContent = state.inactive > 0
                ? "No active licenses found"
                : "No licenses found";
            editionPair.parentElement.insertBefore(note, editionPair);
            render(box);
            return;
        }

        const picker = document.createElement("select");
        picker.className = "install-command__license";
        picker.setAttribute("aria-label", "License serial for the install command");
        licenses.forEach(function (item) {
            const option = document.createElement("option");
            option.value = item.serial;
            option.textContent = item.serial;
            picker.appendChild(option);
        });
        picker.onchange = function () {
            const chosen = licenses.find(function (item) {
                return item.serial === picker.value;
            });
            box.dataset.serial = chosen ? chosen.serial : "";
            box.dataset.license = chosen ? chosen.license : "";
            render(box);
        };
        // A key badge is joined to the picker's left edge and clicking
        // it opens the picker as if the select itself was clicked
        const keyBadge = document.createElement("span");
        keyBadge.className = "install-command__license install-command__license-icon";
        const keyGlyph = document.createElement("i");
        keyGlyph.className = "wm wm-fw wm-key";
        keyBadge.appendChild(keyGlyph);
        keyBadge.onclick = function () {
            picker.focus();
            if (picker.showPicker) {
                try {
                    picker.showPicker();
                } catch (e) {
                    // Some browsers refuse without a fresh user gesture
                }
            }
        };
        editionPair.parentElement.insertBefore(keyBadge, editionPair);
        editionPair.parentElement.insertBefore(picker, editionPair);
        picker.onchange();
    };

    // Switch between the GPL one-liner and a personalized Pro command
    // built from one of the signed-in user's licenses
    const applyEdition = function (box, edition) {
        if (edition !== "pro") {
            delete box.dataset.serial;
            delete box.dataset.license;
            box.querySelectorAll(".install-command__license").forEach(function (el) {
                el.remove();
            });
            render(box);
            return;
        }

        // Load the license state once and reuse it on later switches
        if (box._installCmdLicenses) {
            offerLicenses(box, box._installCmdLicenses);
            return;
        }

        // Show a spinner beside the switch while the licenses are loading
        const editionPair = box.querySelector(
            '.install-command__option[data-group="edition"]'
        ).parentElement;
        const spinner = document.createElement("span");
        spinner.className = "install-command__license install-command__license-spinner";
        spinner.setAttribute("role", "status");
        spinner.setAttribute("aria-label", "Loading licenses");
        const spinnerIcon = document.createElement("i");
        spinnerIcon.className = "wm wm-fw wm-refresh";
        spinner.appendChild(spinnerIcon);
        editionPair.parentElement.insertBefore(spinner, editionPair);

        // A failed or unauthenticated request reads as a signed-out visitor
        const signedOut = { signedIn: false, licenses: [], inactive: 0 };
        fetch("/wp-admin/admin-ajax.php?action=vm_install_licenses", { credentials: "same-origin" })
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                box._installCmdLicenses = (data && data.success && data.data)
                    ? {
                        signedIn: true,
                        licenses: data.data.licenses || [],
                        inactive: data.data.inactive || 0
                    }
                    : signedOut;
                offerLicenses(box, box._installCmdLicenses);
            })
            .catch(function () {
                box._installCmdLicenses = signedOut;
                offerLicenses(box, signedOut);
            });
    };

    // Keep copy button label/state transitions in one place
    const copyState = function (copyButton, copied) {
        if (!copyButton) {
            return;
        }
        const defaultLabel = (copyButton.dataset.copyLabel || "copy").trim();
        const copiedLabel = (copyButton.dataset.copiedLabel || "copied!").trim();
        clearTimeout(copyButton._installCmdCopyTimer);
        if (copied) {
            copyButton.textContent = copiedLabel;
            copyButton.classList.add("is-copied");
            copyButton._installCmdCopyTimer = setTimeout(function () {
                copyButton.textContent = defaultLabel;
                copyButton.classList.remove("is-copied");
            }, 1600);
        } else {
            copyButton.textContent = defaultLabel;
            copyButton.classList.remove("is-copied");
        }
    };

    // When the edition group no longer shares a line with the other
    // options it aligns left instead of floating alone on the right
    const updateWrap = function (box) {
        const group = box.querySelector(".install-command__edition-group");
        if (!group) {
            return;
        }
        const first = group.parentElement.firstElementChild;
        group.classList.toggle("install-command__edition-group--wrapped",
            first !== group && group.offsetTop > first.offsetTop);
    };

    // MySQL is only offered on Debian-family systems, so the choice is
    // hidden elsewhere and falls back to MariaDB when it was selected
    const updateDbChoices = function (box) {
        const mysql = box.querySelector(
            '.install-command__option[data-group="db"][data-value="mysql"]'
        );
        if (!mysql) {
            return;
        }
        const rpm = (box.dataset.os || "rpm") !== "deb";
        if (rpm && box.dataset.db === "mysql") {
            box.dataset.db = "mariadb";
            box.querySelectorAll(
                '.install-command__option[data-group="db"]'
            ).forEach(function (other) {
                other.setAttribute("aria-pressed",
                    other.dataset.value === "mariadb" ? "true" : "false");
            });
        }
        mysql.style.display = rpm ? "none" : "";
        mysql.parentElement.classList.toggle("install-command__pair--single", rpm);
    };

    // Rebuild the displayed command, preserving the box scroll position
    // and rendering the curl/wget word as a clickable switch
    const render = function (box) {
        const pre = box.querySelector(".install-command__command");
        if (!pre) {
            return;
        }
        updateDbChoices(box);
        const cmd = resolveBuilder(box)(readOpts(box), box);
        const scroller = box.querySelector(".install-command__scroll");
        let scrollerLeft = 0,
            scrollerAtEnd = false;
        if (scroller) {
            scrollerLeft = scroller.scrollLeft;
            scrollerAtEnd = scrollerLeft > 0 &&
                scrollerLeft + scroller.clientWidth >= scroller.scrollWidth - 1;
        }

        const tool = readOpts(box).tool === "wget" ? "wget" : "curl";
        const toolIndex = cmd.indexOf(tool);
        if (toolIndex === -1) {
            // Commands without a download tool, such as the local script
            // form, are rendered as plain text with no switch
            pre.textContent = cmd;
        } else {
            const toolButton = document.createElement("button");
            toolButton.type = "button";
            toolButton.className = "install-command__tool";
            toolButton.textContent = tool;
            toolButton.title = "Switch to " + (tool === "wget" ? "curl" : "wget");
            toolButton.setAttribute("aria-label", toolButton.title);
            toolButton.onclick = function (e) {
                e.preventDefault();
                box.dataset.tool = tool === "wget" ? "curl" : "wget";
                render(box);
                return false;
            };

            pre.textContent = "";
            pre.appendChild(document.createTextNode(cmd.slice(0, toolIndex)));
            pre.appendChild(toolButton);
            pre.appendChild(document.createTextNode(cmd.slice(toolIndex + tool.length)));
        }

        if (scroller) {
            scroller.scrollLeft = scrollerAtEnd ? scroller.scrollWidth : scrollerLeft;
        }
        copyState(box.querySelector(".install-command__copy"), false);
        updateWrap(box);
    };

    // Wire the option buttons and copy button of one widget container
    const init = function (box) {
        const pre = box.querySelector(".install-command__command");
        if (!pre || box.dataset.installCmdInit === "1") {
            return;
        }
        box.dataset.installCmdInit = "1";

        // Switch an option in its group or flip an on/off one
        box.querySelectorAll(".install-command__option").forEach(function (button) {
            button.addEventListener("click", function (e) {
                e.preventDefault();
                const group = (button.dataset.group || "").trim();
                const value = (button.dataset.value || "").trim();
                if (!group) {
                    return;
                }
                if (group === "minimal" || group === "ssl" || group === "postgres") {
                    // Independent on/off switches combining with any other option
                    const on = box.dataset[group] === "1";
                    box.dataset[group] = on ? "0" : "1";
                    button.setAttribute("aria-pressed", on ? "false" : "true");
                } else {
                    // Segmented groups with exactly one choice always selected
                    box.dataset[group] = value;
                    box.querySelectorAll(
                        '.install-command__option[data-group="' + group + '"]'
                    ).forEach(function (other) {
                        other.setAttribute("aria-pressed",
                            other.dataset.value === value ? "true" : "false");
                    });
                }
                if (group === "edition") {
                    applyEdition(box, value);
                    return;
                }
                render(box);
            });
        });

        // Copy the full command including the tool word
        const copyButton = box.querySelector(".install-command__copy");
        if (copyButton) {
            copyButton.addEventListener("click", function (e) {
                e.preventDefault();
                const cmd = resolveBuilder(box)(readOpts(box), box);
                navigator.clipboard.writeText(cmd).then(
                    function () {
                        copyState(copyButton, true);
                    },
                    function () {
                        copyState(copyButton, false);
                        window.prompt("Copy the install command to the clipboard:", cmd);
                    }
                );
            });
        }

        window.addEventListener("resize", function () {
            updateWrap(box);
        });

        render(box);
    };

    // Public API reused by pages with custom command builders
    window.installCommand = {
        readOpts: readOpts,
        buildArgs: buildArgs,
        copyState: copyState,
        render: render,
        init: init
    };

    document.addEventListener("DOMContentLoaded", function () {
        document.querySelectorAll(".install-command, [data-install-cmd]").forEach(init);
    });
})();
