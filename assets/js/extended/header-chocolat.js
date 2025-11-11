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
                    src: "/images/screenshots/" + screenShotType + "/4-bootup-and-shutdown.png",
                    title: "Webmin ⇾ System ⇾ Bootup and Shutdown",
                },
                {
                    src: "/images/screenshots/" + screenShotType + "/5-change-password.png",
                    title: "Webmin ⇾ System ⇾ Change Passwords",
                },
                {
                    src:
                        "/images/screenshots/" +
                        screenShotType +
                        "/6-system_-_disk_-_and_-_network_-_filesystems_-_edit_-_mount.png",
                    title: "Webmin ⇾ System ⇾ Disk and Network Filesystems: Edit Mount",
                },
                {
                    src:
                        "/images/screenshots/" +
                        screenShotType +
                        "/7-system_-_disk_-_quotas_-_filesystem_-_quotas.png",
                    title: "Webmin ⇾ System ⇾ Disk Quotas: Filesystem Quotas",
                },
                {
                    src:
                        "/images/screenshots/" +
                        screenShotType +
                        "/8-system_-_log_-_file_-_rotation.png",
                    title: "Webmin ⇾ System ⇾ Log File Rotation",
                },
                {
                    src:
                        "/images/screenshots/" +
                        screenShotType +
                        "/9-system_-_running_-_processes.png",
                    title: "Webmin ⇾ System ⇾ Running Processes",
                },
                {
                    src:
                        "/images/screenshots/" +
                        screenShotType +
                        "/10-system_-_scheduled_-_cron_-_jobs.png",
                    title: "Webmin ⇾ System ⇾ Scheduled Cron Jobs",
                },
                {
                    src:
                        "/images/screenshots/" +
                        screenShotType +
                        "/11-system_-_software_-_package_-_updates.png",
                    title: "Webmin ⇾ System ⇾ Software Package Updates",
                },
                {
                    src:
                        "/images/screenshots/" +
                        screenShotType +
                        "/12-system_-_system_-_logs_-_viewer_-_view_-_logfile.png",
                    title: "Webmin ⇾ System ⇾ System Logs Viewer: View Logfile",
                },
                {
                    src:
                        "/images/screenshots/" +
                        screenShotType +
                        "/13-system_-_users_-_and_-_groups.png",
                    title: "Webmin ⇾ System ⇾ Users and Groups",
                },
                {
                    src:
                        "/images/screenshots/" +
                        screenShotType +
                        "/14-servers_-_apache_-_webserver_-_edit_-_config_-_files.png",
                    title: "Webmin ⇾ Servers ⇾ Apache Webserver: Edit Config Files",
                },
                {
                    src:
                        "/images/screenshots/" +
                        screenShotType +
                        "/15-servers_-_bind_-_dns_-_server.png",
                    title: "Webmin ⇾ Servers ⇾ BIND DNS Server",
                },
                {
                    src:
                        "/images/screenshots/" +
                        screenShotType +
                        "/16-servers_-_mariadb_-_database_-_server.png",
                    title: "Webmin ⇾ Servers ⇾ MariaDB Database Server",
                },
                {
                    src:
                        "/images/screenshots/" +
                        screenShotType +
                        "/17-servers_-_ssh_-_server.png",
                    title: "Webmin ⇾ Servers ⇾ SSH Server",
                },
                {
                    src:
                        "/images/screenshots/" +
                        screenShotType +
                        "/19-tools_-_file_-_manager.png",
                    title: "Webmin ⇾ Tools ⇾ File Manager",
                },
                {
                    src:
                        "/images/screenshots/" +
                        screenShotType +
                        "/20-tools_-_file_-_manager_-_edit_-_file.png",
                    title: "Webmin ⇾ Tools ⇾ File Manager: Edit File",
                },
                {
                    src:
                        "/images/screenshots/" +
                        screenShotType +
                        "/21-tools_-_php_-_configuration_-_resource_-_limits.png",
                    title: "Webmin ⇾ Tools ⇾ PHP Configuration: Resource Limits",
                },
                {
                    src:
                        "/images/screenshots/" +
                        screenShotType +
                        "/22-tools_-_system_-_and_-_server_-_status.png",
                    title: "Webmin ⇾ Tools ⇾ System and Server Status",
                },
                {
                    src: "/images/screenshots/" + screenShotType + "/23-tools_-_terminal.png",
                    title: "Webmin ⇾ Tools ⇾ Terminal",
                },
                {
                    src:
                        "/images/screenshots/" +
                        screenShotType +
                        "/23-tools_-_terminal_-_edit_-_file.png",
                    title: "Webmin ⇾ Tools ⇾ Terminal: Edit File",
                },
                {
                    src:
                        "/images/screenshots/" +
                        screenShotType +
                        "/24-tools_-_upload_-_and_-_download.png",
                    title: "Webmin ⇾ Tools ⇾ Upload and Download",
                },
                {
                    src:
                        "/images/screenshots/" +
                        screenShotType +
                        "/25-networking_-_fail2ban_-_intrusion_-_detector.png",
                    title: "Webmin ⇾ Networking ⇾ Fail2Ban Intrusion Detector",
                },
                {
                    src: "/images/screenshots/" + screenShotType + "/26-networking_-_firewalld.png",
                    title: "Webmin ⇾ Networking ⇾ FirewallD",
                },
                {
                    src:
                        "/images/screenshots/" +
                        screenShotType +
                        "/27-networking_-_network.png",
                    title: "Webmin ⇾ Networking ⇾ Network Configuration",
                },
                {
                    src:
                        "/images/screenshots/" +
                        screenShotType +
                        "/28-hardware_-_logical_-_volume_-_management.png",
                    title: "Webmin ⇾ Hardware ⇾ Logical Volume Management",
                },
                {
                    src:
                        "/images/screenshots/" +
                        screenShotType +
                        "/29-hardware_-_partitions_-_on_-_local_-_disks_-_edit_-_disk_-_partitions.png",
                    title: "Webmin ⇾ Hardware ⇾ Partitions on Local Disks: Edit Disk Partitions",
                },
                {
                    src:
                        "/images/screenshots/" +
                        screenShotType +
                        "/30-hardware_-_system_-_time.png",
                    title: "Webmin ⇾ Hardware ⇾ System Time",
                },
                {
                    src:
                        "/images/screenshots/" +
                        screenShotType +
                        "/33-virtualmin_-_virtual_-_server_-_summary.png",
                    title: "Virtualmin ⇾ Virtual Server Summary",
                },
                {
                    src:
                        "/images/screenshots/" +
                        screenShotType +
                        "/32-virtualmin_-_create_-_virtual_-_server.png",
                    title: "Virtualmin ⇾ Create Virtual Server",
                },
                {
                    src:
                        "/images/screenshots/" +
                        screenShotType +
                        "/34-virtualmin_-_edit_-_users_-_mail_-_and_-_ftp_-_users.png",
                    title: "Virtualmin ⇾ Edit Users: Mail and FTP Users",
                },
                {
                    src:
                        "/images/screenshots/" +
                        screenShotType +
                        "/35-virtualmin_-_edit_-_mail_-_aliases_-_mail_-_aliases.png",
                    title: "Virtualmin ⇾ Edit Mail Aliases: Mail Aliases",
                },
                {
                    src:
                        "/images/screenshots/" +
                        screenShotType +
                        "/36-virtualmin_-_edit_-_databases.png",
                    title: "Virtualmin ⇾ Edit Databases",
                },
                {
                    src:
                        "/images/screenshots/" +
                        screenShotType +
                        "/37-virtualmin_-_install_-_scripts.png",
                    title: "Virtualmin ⇾ Install Scripts",
                },
                {
                    src:
                        "/images/screenshots/" +
                        screenShotType +
                        "/38-virtualmin_-_administration_-_options_-_disk_-_usage.png",
                    title: "Virtualmin ⇾ Administration Options ⇾ Disk Usage",
                },
                {
                    src:
                        "/images/screenshots/" +
                        screenShotType +
                        "/39-virtualmin_-_administration_-_options_-_edit_-_owner_-_limits_-_server_-_owner_-_limits.png",
                    title: "Virtualmin ⇾ Administration Options ⇾ Edit Owner Limits: Server Owner Limits",
                },
                {
                    src:
                        "/images/screenshots/" +
                        screenShotType +
                        "/40-virtualmin_-_administration_-_options_-_edit_-_resource_-_limits_-_resource_-_limits.png",
                    title: "Virtualmin ⇾ Administration Options ⇾ Edit Resource Limits: Resource Limits",
                },
                {
                    src:
                        "/images/screenshots/" +
                        screenShotType +
                        "/41-virtualmin_-_administration_-_options_-_excluded_-_directories_-_and_-_dbs.png",
                    title: "Virtualmin ⇾ Administration Options ⇾ Excluded Directories and DBs",
                },
                {
                    src:
                        "/images/screenshots/" +
                        screenShotType +
                        "/42-virtualmin_-_server_-_configuration_-_dns_-_options.png",
                    title: "Virtualmin ⇾ Server Configuration ⇾ DNS Options",
                },
                {
                    src:
                        "/images/screenshots/" +
                        screenShotType +
                        "/43-virtualmin_-_server_-_configuration_-_php_-_options.png",
                    title: "Virtualmin ⇾ Server Configuration ⇾ PHP Options",
                },
                {
                    src:
                        "/images/screenshots/" +
                        screenShotType +
                        "/44-virtualmin_-_server_-_configuration_-_proxy_-_paths.png",
                    title: "Virtualmin ⇾ Server Configuration ⇾ Proxy Paths",
                },
                {
                    src:
                        "/images/screenshots/" +
                        screenShotType +
                        "/45-virtualmin_-_server_-_configuration_-_ssl_-_certificate.png",
                    title: "Virtualmin ⇾ Server Configuration ⇾ SSL Certificate",
                },
                {
                    src:
                        "/images/screenshots/" +
                        screenShotType +
                        "/46-virtualmin_-_server_-_configuration_-_transfer_-_virtual_-_server.png",
                    title: "Virtualmin ⇾ Server Configuration ⇾ Transfer Virtual Server",
                },
                {
                    src:
                        "/images/screenshots/" +
                        screenShotType +
                        "/47-virtualmin_-_logs_-_and_-_reports_-_nginx_-_access_-_log.png",
                    title: "Virtualmin ⇾ Logs and Reports ⇾ Nginx Access Log",
                },
                {
                    src:
                        "/images/screenshots/" +
                        screenShotType +
                        "/48-virtualmin_-_addresses_-_and_-_networking_-_cloud_-_dns_-_providers.png",
                    title: "Virtualmin ⇾ Addresses and Networking ⇾ Cloud DNS Providers",
                },
                {
                    src:
                        "/images/screenshots/" +
                        screenShotType +
                        "/49-virtualmin_-_addresses_-_and_-_networking_-_dynamic_-_ip_-_update.png",
                    title: "Virtualmin ⇾ Addresses and Networking ⇾ Dynamic IP Update",
                },
                {
                    src:
                        "/images/screenshots/" +
                        screenShotType +
                        "/50-virtualmin_-_email_-_settings_-_spam_-_and_-_virus_-_scanning.png",
                    title: "Virtualmin ⇾ Email Settings ⇾ Spam and Virus Scanning",
                },
                {
                    src:
                        "/images/screenshots/" +
                        screenShotType +
                        "/51-virtualmin_-_backup_-_and_-_restore_-_scheduled_-_backups_-_create_-_scheduled_-_backup.png",
                    title: "Virtualmin ⇾ Backup and Restore ⇾ Scheduled Backups: Create Scheduled Backup",
                },
                {
                    src:
                        "/images/screenshots/" +
                        screenShotType +
                        "/52-cloudmin_-_list_-_managed_-_systems_-_cloudmin_-_managed_-_systems.png",
                    title: "Cloudmin ⇾ List Managed Systems: Cloudmin Managed Systems",
                },
                {
                    src:
                        "/images/screenshots/" +
                        screenShotType +
                        "/53-cloudmin_-_edit_-_system.png",
                    title: "Cloudmin ⇾ Edit System",
                },
                {
                    src:
                        "/images/screenshots/" +
                        screenShotType +
                        "/54-cloudmin_-_host_-_systems_-_docker_-_host_-_systems_-_register_-_docker_-_host.png",
                    title: "Cloudmin ⇾ Host Systems ⇾ Docker Host Systems: Register Docker Host",
                },
                {
                    src: "/images/screenshots/" + screenShotType + "/54-usermin_-_mailbox.png",
                    title: "Usermin ⇾ Mailbox",
                },
                {
                    src:
                        "/images/screenshots/" +
                        screenShotType +
                        "/55-usermin_-_mail_-_scheduled_-_emails_-_create_-_scheduled_-_email.png",
                    title: "Usermin ⇾ Mail ⇾ Scheduled Emails: Create Scheduled Email",
                },
                {
                    src:
                        "/images/screenshots/" +
                        screenShotType +
                        "/56-usermin_-_login_-_change_-_password.png",
                    title: "Usermin ⇾ Login ⇾ Change Password",
                },
                {
                    src:
                        "/images/screenshots/" +
                        screenShotType +
                        "/57-usermin_-_applications_-_gnupg_-_encryption_-_manage_-_keys.png",
                    title: "Usermin ⇾ Applications ⇾ GnuPG Encryption: Manage Keys",
                },
                {
                    src:
                        "/images/screenshots/" +
                        screenShotType +
                        "/58-usermin_-_applications_-_upload_-_and_-_download.png",
                    title: "Usermin ⇾ Applications ⇾ Upload and Download",
                },
                {
                    src:
                        "/images/screenshots/" +
                        screenShotType +
                        "/59-usermin_-_account_-_information.png",
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
