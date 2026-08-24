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

    // Default GPL one-liner used when no custom builder is registered
    const buildGplCmd = function (opts) {
        const download = (opts.tool === "wget" ? "wget -qO-" : "curl -fsSL") +
            " https://download.virtualmin.com/virtualmin-install";
        return 'sudo sh -c "$(' + download + ')" --' + buildArgs(opts);
    };

    // Resolve the command builder for a widget container
    const resolveBuilder = function (box) {
        const custom = window.installCommandBuilders &&
            window.installCommandBuilders[box.dataset.installCmd];
        return custom || buildGplCmd;
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

    // Rebuild the displayed command, preserving the box scroll position
    // and rendering the curl/wget word as a clickable switch
    const render = function (box) {
        const pre = box.querySelector(".install-command__command");
        if (!pre) {
            return;
        }
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

        if (scroller) {
            scroller.scrollLeft = scrollerAtEnd ? scroller.scrollWidth : scrollerLeft;
        }
        copyState(box.querySelector(".install-command__copy"), false);
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
                if (group === "minimal" || group === "ssl") {
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
