// Chocolat for screenshots page
window.addEventListener("DOMContentLoaded", () => {
    // Add container
    const chocolat_drop = document.createElement("div"),
        isMac = navigator.userAgent.includes("Mac"),
        altKey = isMac ? "⌥" : "Alt",
        concatKey = isMac ? " " : " + ";
    chocolat_drop.classList.add("chocolat-drop");
    document.querySelector("body > .header").before(chocolat_drop);

    // Set offsets
    const menuTopHeight = function () {
            return document.querySelector("body > .header").clientHeight;
        },
        footerBottomHeight = function () {
            return document.querySelector("body > footer").clientHeight;
        },
        fixChocolatDrop = function () {
            chocolat_drop.style =
                "top: " + menuTopHeight() + "px; bottom: " + footerBottomHeight() + "px";
            document
                .querySelector("body > .main")
                .style.setProperty(
                    "min-height",
                    "calc(100svh - " + menuTopHeight() + "px - " + footerBottomHeight() + "px)"
                );
        };
    fixChocolatDrop();

    // Check dark mode
    const themeToggle = document.querySelector("#theme-toggle"),
        getScreenshots = function () {
            const screenShotType =
                localStorage.getItem("pref-theme") === "dark" ||
                document.body.classList.contains("dark")
                    ? "dark"
                    : "light";
            return [
                {
                    src: "/images/screenshots/" + screenShotType + "/1-dashboard.png",
                    title: "Webmin ⇾ System ⇾ Dashboard",
                },
                {
                    src: "/images/screenshots/" + screenShotType + "/2-stats-history.png",
                    title: "Webmin ⇾ System ⇾ Dashboard ⇾ Stats History",
                },
                {
                    src: "/images/screenshots/" + screenShotType + "/3-webmin-configuration.png",
                    title: "Webmin ⇾ Webmin ⇾ Webmin Configuration",
                },
                {
                    src: "/images/screenshots/" + screenShotType + "/4-webmin-servers-index.png",
                    title: "Webmin ⇾ Webmin ⇾ Webmin Servers Index",
                },
                {
                    src: "/images/screenshots/" + screenShotType + "/4-bootup-and-shutdown.png",
                    title: "Webmin ⇾ System ⇾ Bootup and Shutdown",
                },
                {
                    src: "/images/screenshots/" + screenShotType + "/5-change-password.png",
                    title: "Webmin ⇾ System ⇾ Change Passwords",
                },
                {
                    src: "/images/screenshots/" + screenShotType + "/6-system-disk-and-network-filesystems-edit-mount.png",
                    title: "Webmin ⇾ System ⇾ Disk and Network Filesystems: Edit Mount",
                },
                {
                    src: "/images/screenshots/" + screenShotType + "/7-system-disk-quotas-filesystem-quotas.png",
                    title: "Webmin ⇾ System ⇾ Disk Quotas: Filesystem Quotas",
                },
                {
                    src: "/images/screenshots/" + screenShotType + "/8-system-log-file-rotation.png",
                    title: "Webmin ⇾ System ⇾ Log File Rotation",
                },
                {
                    src: "/images/screenshots/" + screenShotType + "/9-system-running-processes.png",
                    title: "Webmin ⇾ System ⇾ Running Processes",
                },
                {
                    src: "/images/screenshots/" + screenShotType + "/9-system-running-processes-info.png",
                    title: "Webmin ⇾ System ⇾ Running Processes: Process Information",
                },
                {
                    src: "/images/screenshots/" + screenShotType + "/10-system-scheduled-cron-jobs.png",
                    title: "Webmin ⇾ System ⇾ Scheduled Cron Jobs",
                },
                {
                    src: "/images/screenshots/" + screenShotType + "/10-system-scheduled-cron-jobs-edit.png",
                    title: "Webmin ⇾ System ⇾ Scheduled Cron Jobs: Edit Cron Job",
                },
                {
                    src: "/images/screenshots/" + screenShotType + "/11-system-software-package-updates.png",
                    title: "Webmin ⇾ System ⇾ Software Package Updates",
                },
                {
                    src: "/images/screenshots/" + screenShotType + "/11-system-software-package-info.png",
                    title: "Webmin ⇾ System ⇾ Software Packages: Package Information",
                },
                {
                    src: "/images/screenshots/" + screenShotType + "/12-system-system-logs-viewer-view-logfile.png",
                    title: "Webmin ⇾ System ⇾ System Logs Viewer: View Logfile",
                },
                {
                    src: "/images/screenshots/" + screenShotType + "/13-system-users-and-groups.png",
                    title: "Webmin ⇾ System ⇾ Users and Groups",
                },
                {
                    src: "/images/screenshots/" + screenShotType + "/14-servers-apache-webserver.png",
                    title: "Webmin ⇾ Servers ⇾ Apache Webserver",
                },
                {
                    src: "/images/screenshots/" + screenShotType + "/14-servers-apache-webserver-edit-config-files.png",
                    title: "Webmin ⇾ Servers ⇾ Apache Webserver: Edit Config Files",
                },
                {
                    src: "/images/screenshots/" + screenShotType + "/15-servers-bind-dns-server.png",
                    title: "Webmin ⇾ Servers ⇾ BIND DNS Server",
                },
                {
                    src: "/images/screenshots/" + screenShotType + "/15-servers-bind-dns-server-edit-config.png",
                    title: "Webmin ⇾ Servers ⇾ BIND DNS Server: Edit Config",
                },
                {
                    src: "/images/screenshots/" + screenShotType + "/16-servers-mariadb-database-server.png",
                    title: "Webmin ⇾ Servers ⇾ MariaDB Database Server",
                },
                {
                    src: "/images/screenshots/" + screenShotType + "/17-servers-ssh-server.png",
                    title: "Webmin ⇾ Servers ⇾ SSH Server",
                },
                {
                    src: "/images/screenshots/" + screenShotType + "/17-servers-ssh-server-authentication.png",
                    title: "Webmin ⇾ Servers ⇾ SSH Server: Authentication",
                },
                {
                    src: "/images/screenshots/" + screenShotType + "/19-tools-file-manager.png",
                    title: "Webmin ⇾ Tools ⇾ File Manager",
                },
                {
                    src: "/images/screenshots/" + screenShotType + "/20-tools-file-manager-edit-file.png",
                    title: "Webmin ⇾ Tools ⇾ File Manager: Edit File",
                },
                {
                    src: "/images/screenshots/" + screenShotType + "/21-tools-php-configuration.png",
                    title: "Webmin ⇾ Tools ⇾ PHP Configuration",
                },
                {
                    src: "/images/screenshots/" + screenShotType + "/21-tools-php-configuration-resource-limits.png",
                    title: "Webmin ⇾ Tools ⇾ PHP Configuration: Resource Limits",
                },
                {
                    src: "/images/screenshots/" + screenShotType + "/21-tools-php-configuration-edit-configuration-manually.png",
                    title: "Webmin ⇾ Tools ⇾ PHP Configuration: Edit Configuration Manually",
                },
                {
                    src: "/images/screenshots/" + screenShotType + "/22-tools-system-and-server-status.png",
                    title: "Webmin ⇾ Tools ⇾ System and Server Status",
                },
                {
                    src: "/images/screenshots/" + screenShotType + "/23-tools-terminal.png",
                    title: "Webmin ⇾ Tools ⇾ Terminal",
                },
                {
                    src: "/images/screenshots/" + screenShotType + "/23-tools-terminal-edit-file.png",
                    title: "Webmin ⇾ Tools ⇾ Terminal: Edit File",
                },
                {
                    src: "/images/screenshots/" + screenShotType + "/24-tools-upload-and-download.png",
                    title: "Webmin ⇾ Tools ⇾ Upload and Download",
                },
                {
                    src: "/images/screenshots/" + screenShotType + "/25-networking-fail2ban-intrusion-detector.png",
                    title: "Webmin ⇾ Networking ⇾ Fail2Ban Intrusion Detector",
                },
                {
                    src: "/images/screenshots/" + screenShotType + "/25-networking-fail2ban-intrusion-detector-edit-config-files.png",
                    title: "Webmin ⇾ Networking ⇾ Fail2Ban Intrusion Detector: Edit Config Files",
                },
                {
                    src: "/images/screenshots/" + screenShotType + "/26-networking-firewalld.png",
                    title: "Webmin ⇾ Networking ⇾ FirewallD",
                },
                {
                    src: "/images/screenshots/" + screenShotType + "/27-networking-network.png",
                    title: "Webmin ⇾ Networking ⇾ Network Configuration",
                },
                {
                    src: "/images/screenshots/" + screenShotType + "/27-networking-network-routing-and-gateways.png",
                    title: "Webmin ⇾ Networking ⇾ Network Configuration: Routing and Gateways",
                },
                {
                    src: "/images/screenshots/" + screenShotType + "/27-networking-network-hostname-and-dns-client.png",
                    title: "Webmin ⇾ Networking ⇾ Network Configuration: Hostname and DNS Client",
                },
                {
                    src: "/images/screenshots/" + screenShotType + "/28-hardware-logical-volume-management.png",
                    title: "Webmin ⇾ Hardware ⇾ Logical Volume Management",
                },
                {
                    src: "/images/screenshots/" + screenShotType + "/29-hardware-partitions-on-local-disks-edit-disk-partitions.png",
                    title: "Webmin ⇾ Hardware ⇾ Partitions on Local Disks: Edit Disk Partitions",
                },
                {
                    src: "/images/screenshots/" + screenShotType + "/30-hardware-system-time.png",
                    title: "Webmin ⇾ Hardware ⇾ System Time",
                },
                {
                    src: "/images/screenshots/" + screenShotType + "/32-virtualmin-list-virtual-servers.png",
                    title: "Virtualmin ⇾ List Virtual Servers",
                },
                {
                    src: "/images/screenshots/" + screenShotType + "/32-virtualmin-create-virtual-server.png",
                    title: "Virtualmin ⇾ Create Virtual Server",
                },
                {
                    src: "/images/screenshots/" + screenShotType + "/33-virtualmin-virtual-server-summary.png",
                    title: "Virtualmin ⇾ Virtual Server Summary",
                },
                {
                    src: "/images/screenshots/" + screenShotType + "/34-virtualmin-edit-users.png",
                    title: "Virtualmin ⇾ List Users",
                },
                {
                    src: "/images/screenshots/" + screenShotType + "/35-virtualmin-edit-user.png",
                    title: "Virtualmin ⇾ Edit User",
                },
                {
                    src: "/images/screenshots/" + screenShotType + "/36-virtualmin-edit-databases.png",
                    title: "Virtualmin ⇾ Edit Databases",
                },
                {
                    src: "/images/screenshots/" + screenShotType + "/37-virtualmin-install-scripts.png",
                    title: "Virtualmin ⇾ Install Scripts",
                },
                {
                    src: "/images/screenshots/" + screenShotType + "/38-virtualmin-administration-options-disk-usage.png",
                    title: "Virtualmin ⇾ Administration Options ⇾ Disk Usage",
                },
                {
                    src: "/images/screenshots/" + screenShotType + "/43-virtualmin-server-configuration-php-options.png",
                    title: "Virtualmin ⇾ Server Configuration ⇾ PHP Options",
                },
                {
                    src: "/images/screenshots/" + screenShotType + "/43-virtualmin-server-configuration-websites-options.png",
                    title: "Virtualmin ⇾ Server Configuration ⇾ Websites Options",
                },
                {
                    src: "/images/screenshots/" + screenShotType + "/45-virtualmin-server-configuration-ssl-certificate.png",
                    title: "Virtualmin ⇾ Server Configuration ⇾ SSL Certificate",
                },
                {
                    src: "/images/screenshots/" + screenShotType + "/47-virtualmin-logs-and-reports-apache-access-log.png",
                    title: "Virtualmin ⇾ Logs and Reports ⇾ Apache Access Log",
                },
                {
                    src: "/images/screenshots/" + screenShotType + "/48-virtualmin-addresses-and-networking-cloud-dns-providers.png",
                    title: "Virtualmin ⇾ Addresses and Networking ⇾ Cloud DNS Providers",
                },
                {
                    src: "/images/screenshots/" + screenShotType + "/51-virtualmin-backup-and-restore-scheduled-backups-create-scheduled-backup.png",
                    title: "Virtualmin ⇾ Backup and Restore ⇾ Scheduled Backups: Create Scheduled Backup",
                },
                {
                    src: "/images/screenshots/" + screenShotType + "/51-virtualmin-backup-and-restore-cloud-storage-providers.png",
                    title: "Virtualmin ⇾ Backup and Restore ⇾ Cloud Storage Providers",
                },
                {
                    src: "/images/screenshots/" + screenShotType + "/51-virtualmin-wp-workbench-manager.png",
                    title: "Virtualmin ⇾ WP Workbench Manager",
                },
                {
                    src: "/images/screenshots/" + screenShotType + "/51-virtualmin-wp-workbench.png",
                    title: "Virtualmin ⇾ Manage Web Apps: Manage WordPress with WP Workbench",
                },
                {
                    src: "/images/screenshots/" + screenShotType + "/52-cloudmin-list-managed-systems-cloudmin-managed-systems.png",
                    title: "Cloudmin ⇾ List Managed Systems: Cloudmin Managed Systems",
                },
                {
                    src: "/images/screenshots/" + screenShotType + "/53-cloudmin-edit-system.png",
                    title: "Cloudmin ⇾ Edit System",
                },
                {
                    src: "/images/screenshots/" + screenShotType + "/54-usermin-mailbox.png",
                    title: "Usermin ⇾ Mailbox",
                },
                {
                    src: "/images/screenshots/" + screenShotType + "/56-usermin-login-change-password.png",
                    title: "Usermin ⇾ Login ⇾ Change Password",
                },
                {
                    src: "/images/screenshots/" + screenShotType + "/59-usermin-account-information.png",
                    title: "Usermin ⇾ Account Information",
                },
            ];
        };

    // Prepare to initialize Chocolat
    const insertFullScreenToggle = function () {
            const fullscreenCont = document.createElement("div"),
                fullscreenIcon = document.createElement("i");
            fullscreenCont.classList.add("screen-full-container");
            fullscreenCont.setAttribute(
                "aria-label",
                "Enter Full Screen (" + altKey + concatKey + "F)"
            );
            fullscreenCont.setAttribute("title", "Enter Full Screen (" + altKey + concatKey + "F)");
            fullscreenIcon.classList.add("wm", "wm-sm", "wm-fw", "wm-expand");
            fullscreenCont.appendChild(fullscreenIcon);
            document.querySelector(".chocolat-image-wrapper").appendChild(fullscreenCont);
            document.querySelector(".screen-full-container").addEventListener(
                "click",
                function (e) {
                    e.stopPropagation();
                    document.querySelector(".chocolat-bottom .chocolat-fullscreen").click();
                },
                false
            );
            // Toggle full screen on clicking the container
            document.querySelector(".chocolat-image-wrapper").addEventListener(
                "click",
                function (e) {
                    e.stopPropagation();
                    document.querySelector(".chocolat-bottom .chocolat-fullscreen").click();
                },
                false
            );
        },
        chocolatOptions = {
            container: document.querySelector("body > .chocolat-drop"),
            loop: true,
            allowZoom: false,
            closeOnBackgroundClick: false,
            imageSize: "scale-down",
            afterClose: function () {
                setTimeout(function () {
                    chocolat.api.open();
                }, 1e2);
            },
        };

    // Initialize Chocolat
    let chocolat = Chocolat(getScreenshots(), chocolatOptions);
    chocolat.api.open();

    // Insert custom open in full screen toggle
    insertFullScreenToggle();

    // On changing mode change screenshots palette
    themeToggle.addEventListener(
        "click",
        function () {
            const currIndex = chocolat.api.current();
            chocolat.destroy();
            chocolat = Chocolat(getScreenshots(), chocolatOptions);
            chocolat.api.open(currIndex || 0);
            insertFullScreenToggle();
        },
        false
    );

    window.addEventListener("resize", function () {
        // On resize accommodate Chocolat viewer
        const targetClassList = document.documentElement.classList;
        if (
            document.fullscreenElement ||
            document.webkitFullscreenElement ||
            document.mozFullScreenElement ||
            document.msFullscreenElement
        ) {
            targetClassList.add("chocolat-fullscreen");
        } else {
            targetClassList.remove("chocolat-fullscreen");
            chocolat.api.set("imageSize", "contain");
            chocolat.api.position();
        }
        fixChocolatDrop();
    });

    // On exit full screen, resize Chocolat viewer to avoid image overflow
    document.addEventListener("fullscreenchange", function () {
        window.dispatchEvent(new Event("resize"));
        // Re-try when animation is complete
        setTimeout(function () {
            window.dispatchEvent(new Event("resize"));
        }, 120);
    });

    // On pressing escape key, do not close Chocolat viewer
    document.addEventListener(
        "keydown",
        function (event) {
            if (event.key === "Escape") {
                event.preventDefault();
                event.stopPropagation();
                event.stopImmediatePropagation();
            }
        },
        true
    );
});
