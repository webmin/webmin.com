window.addEventListener('DOMContentLoaded', () => {
    // Add container
    const chocolat_drop = document.createElement("div");
    chocolat_drop.classList.add('chocolat-drop');
    document.querySelector("body > .header").before(chocolat_drop);

    // Set offsets
    const menuTopHeight = function() { return document.querySelector('body > .header').clientHeight },
        footerBottomHeight = function() { return document.querySelector('body > footer').clientHeight },
        fixChocolatDrop = function() {
            chocolat_drop.style = 'top: ' + menuTopHeight() + 'px; bottom: ' + footerBottomHeight() + 'px';
            document.querySelector('body > .main').style.setProperty('min-height', 'calc(100vh - ' + menuTopHeight() + 'px - ' + footerBottomHeight() + 'px)');
        };
    fixChocolatDrop();

    // Check dark mode
    const isDarkMode = function() { return localStorage.getItem("pref-theme") === 'dark' || document.body.classList.contains('dark') },
        screenshotType = function() { return isDarkMode() ? 'dark' : 'light' },
        themeToggle = document.querySelector('#theme-toggle'),
        getScreenshots = [{
                src: '/images/screenshots/' + screenshotType() + '/1-dashboard.png',
                title: 'Webmin ⇾ System ⇾ Dashboard'
            },
            {
                src: '/images/screenshots/' + screenshotType() + '/2-stats-history.png',
                title: 'Webmin ⇾ System ⇾ Dashboard ⇾ Stats History'
            }, {
                src: '/images/screenshots/' + screenshotType() + '/3-webmin-configuration.png',
                title: 'Webmin ⇾ Webmin ⇾ Webmin Configuration'
            }, {
                src: '/images/screenshots/' + screenshotType() + '/4-bootup-and-shutdown.png',
                title: 'Webmin ⇾ System ⇾ Bootup and Shutdown'
            }, {
                src: '/images/screenshots/' + screenshotType() + '/5-change-password.png',
                title: 'Webmin ⇾ System ⇾ Change Passwords'
            }, {
                src: '/images/screenshots/' + screenshotType() + '/6-system_-_disk_-_and_-_network_-_filesystems_-_edit_-_mount.png',
                title: 'Webmin ⇾ System ⇾ Disk and Network Filesystems: Edit Mount'
            }, {
                src: '/images/screenshots/' + screenshotType() + '/7-system_-_disk_-_quotas_-_filesystem_-_quotas.png',
                title: 'Webmin ⇾ System ⇾ Disk Quotas: Filesystem Quotas'
            }, {
                src: '/images/screenshots/' + screenshotType() + '/8-system_-_log_-_file_-_rotation.png',
                title: 'Webmin ⇾ System ⇾ Log File Rotation'
            }, {
                src: '/images/screenshots/' + screenshotType() + '/9-system_-_running_-_processes.png',
                title: 'Webmin ⇾ System ⇾ Running Processes'
            }, {
                src: '/images/screenshots/' + screenshotType() + '/10-system_-_scheduled_-_cron_-_jobs.png',
                title: 'Webmin ⇾ System ⇾ Scheduled Cron Jobs'
            }, {
                src: '/images/screenshots/' + screenshotType() + '/11-system_-_software_-_package_-_updates.png',
                title: 'Webmin ⇾ System ⇾ Software Package Updates'
            }, {
                src: '/images/screenshots/' + screenshotType() + '/12-system_-_system_-_logs_-_viewer_-_view_-_logfile.png',
                title: 'Webmin ⇾ System ⇾ System Logs Viewer: View Logfile'
            }, {
                src: '/images/screenshots/' + screenshotType() + '/13-system_-_users_-_and_-_groups.png',
                title: 'Webmin ⇾ System ⇾ Users and Groups'
            }, {
                src: '/images/screenshots/' + screenshotType() + '/14-servers_-_apache_-_webserver_-_edit_-_config_-_files.png',
                title: 'Webmin ⇾ Servers ⇾ Apache Webserver: Edit Config Files'
            }, {
                src: '/images/screenshots/' + screenshotType() + '/15-servers_-_bind_-_dns_-_server.png',
                title: 'Webmin ⇾ Servers ⇾ BIND DNS Server'
            }, {
                src: '/images/screenshots/' + screenshotType() + '/16-servers_-_mariadb_-_database_-_server.png',
                title: 'Webmin ⇾ Servers ⇾ MariaDB Database Server'
            }, {
                src: '/images/screenshots/' + screenshotType() + '/17-servers_-_ssh_-_server_-_networking.png',
                title: 'Webmin ⇾ Servers ⇾ SSH Server: Networking'
            }, {
                src: '/images/screenshots/' + screenshotType() + '/18-tools_-_custom_-_commands_-_create_-_command.png',
                title: 'Webmin ⇾ Tools ⇾ Custom Commands: Create Command'
            }, {
                src: '/images/screenshots/' + screenshotType() + '/19-tools_-_file_-_manager_-_[:etc].png',
                title: 'Webmin ⇾ Tools ⇾ File Manager [etc]'
            }, {
                src: '/images/screenshots/' + screenshotType() + '/20-tools_-_file_-_manager_-_[:etc]_-__-_edit_-_file.png',
                title: 'Webmin ⇾ Tools ⇾ File Manager [etc] : Edit File'
            }, {
                src: '/images/screenshots/' + screenshotType() + '/21-tools_-_php_-_configuration_-_resource_-_limits.png',
                title: 'Webmin ⇾ Tools ⇾ PHP Configuration: Resource Limits'
            }, {
                src: '/images/screenshots/' + screenshotType() + '/22-tools_-_system_-_and_-_server_-_status.png',
                title: 'Webmin ⇾ Tools ⇾ System and Server Status'
            }, {
                src: '/images/screenshots/' + screenshotType() + '/23-tools_-_terminal.png',
                title: 'Webmin ⇾ Tools ⇾ Terminal'
            }, {
                src: '/images/screenshots/' + screenshotType() + '/23-tools_-_terminal_-_edit_-_file.png',
                title: 'Webmin ⇾ Tools ⇾ Terminal: Edit File'
            }, {
                src: '/images/screenshots/' + screenshotType() + '/31-authentic_-_theme_-_-_-_dropdown_-_terminal.png',
                title: 'Webmin ⇾ Tools ⇾ Terminal: Dropdown Terminal'
            }, {
                src: '/images/screenshots/' + screenshotType() + '/24-tools_-_upload_-_and_-_download.png',
                title: 'Webmin ⇾ Tools ⇾ Upload and Download'
            }, {
                src: '/images/screenshots/' + screenshotType() + '/25-networking_-_fail2ban_-_intrusion_-_detector.png',
                title: 'Webmin ⇾ Networking ⇾ Fail2Ban Intrusion Detector'
            }, {
                src: '/images/screenshots/' + screenshotType() + '/26-networking_-_firewalld.png',
                title: 'Webmin ⇾ Networking ⇾ FirewallD'
            }, {
                src: '/images/screenshots/' + screenshotType() + '/27-networking_-_network_-_configuration_-_network_-_interfaces.png',
                title: 'Webmin ⇾ Networking ⇾ Network Configuration: Network Interfaces'
            }, {
                src: '/images/screenshots/' + screenshotType() + '/28-hardware_-_logical_-_volume_-_management_-_edit_-_logical_-_volume.png',
                title: 'Webmin ⇾ Hardware ⇾ Logical Volume Management: Edit Logical Volume'
            }, {
                src: '/images/screenshots/' + screenshotType() + '/29-hardware_-_partitions_-_on_-_local_-_disks_-_edit_-_disk_-_partitions.png',
                title: 'Webmin ⇾ Hardware ⇾ Partitions on Local Disks: Edit Disk Partitions'
            }, {
                src: '/images/screenshots/' + screenshotType() + '/30-hardware_-_system_-_time.png',
                title: 'Webmin ⇾ Hardware ⇾ System Time'
            }, {
                src: '/images/screenshots/' + screenshotType() + '/31-cluster_-_cluster_-_users_-_and_-_groups.png',
                title: 'Webmin ⇾ Cluster ⇾ Cluster Users and Groups'
            }, {
                src: '/images/screenshots/' + screenshotType() + '/33-virtualmin_-_virtual_-_server_-_summary.png',
                title: 'Virtualmin ⇾ Virtual Server Summary'
            }, {
                src: '/images/screenshots/' + screenshotType() + '/32-virtualmin_-_create_-_virtual_-_server.png',
                title: 'Virtualmin ⇾ Create Virtual Server'
            }, {
                src: '/images/screenshots/' + screenshotType() + '/34-virtualmin_-_edit_-_users_-_mail_-_and_-_ftp_-_users.png',
                title: 'Virtualmin ⇾ Edit Users: Mail and FTP Users'
            }, {
                src: '/images/screenshots/' + screenshotType() + '/35-virtualmin_-_edit_-_mail_-_aliases_-_mail_-_aliases.png',
                title: 'Virtualmin ⇾ Edit Mail Aliases: Mail Aliases'
            }, {
                src: '/images/screenshots/' + screenshotType() + '/36-virtualmin_-_edit_-_databases.png',
                title: 'Virtualmin ⇾ Edit Databases'
            }, {
                src: '/images/screenshots/' + screenshotType() + '/37-virtualmin_-_install_-_scripts.png',
                title: 'Virtualmin ⇾ Install Scripts'
            }, {
                src: '/images/screenshots/' + screenshotType() + '/38-virtualmin_-_administration_-_options_-_disk_-_usage.png',
                title: 'Virtualmin ⇾ Administration Options ⇾ Disk Usage'
            }, {
                src: '/images/screenshots/' + screenshotType() + '/39-virtualmin_-_administration_-_options_-_edit_-_owner_-_limits_-_server_-_owner_-_limits.png',
                title: 'Virtualmin ⇾ Administration Options ⇾ Edit Owner Limits: Server Owner Limits'
            }, {
                src: '/images/screenshots/' + screenshotType() + '/40-virtualmin_-_administration_-_options_-_edit_-_resource_-_limits_-_resource_-_limits.png',
                title: 'Virtualmin ⇾ Administration Options ⇾ Edit Resource Limits: Resource Limits'
            }, {
                src: '/images/screenshots/' + screenshotType() + '/41-virtualmin_-_administration_-_options_-_excluded_-_directories_-_and_-_dbs.png',
                title: 'Virtualmin ⇾ Administration Options ⇾ Excluded Directories and DBs'
            }, {
                src: '/images/screenshots/' + screenshotType() + '/42-virtualmin_-_server_-_configuration_-_dns_-_options.png',
                title: 'Virtualmin ⇾ Server Configuration ⇾ DNS Options'
            }, {
                src: '/images/screenshots/' + screenshotType() + '/43-virtualmin_-_server_-_configuration_-_php_-_options.png',
                title: 'Virtualmin ⇾ Server Configuration ⇾ PHP Options'
            }, {
                src: '/images/screenshots/' + screenshotType() + '/44-virtualmin_-_server_-_configuration_-_proxy_-_paths.png',
                title: 'Virtualmin ⇾ Server Configuration ⇾ Proxy Paths'
            }, {
                src: '/images/screenshots/' + screenshotType() + '/45-virtualmin_-_server_-_configuration_-_ssl_-_certificate.png',
                title: 'Virtualmin ⇾ Server Configuration ⇾ SSL Certificate'
            }, {
                src: '/images/screenshots/' + screenshotType() + '/46-virtualmin_-_server_-_configuration_-_transfer_-_virtual_-_server.png',
                title: 'Virtualmin ⇾ Server Configuration ⇾ Transfer Virtual Server'
            }, {
                src: '/images/screenshots/' + screenshotType() + '/47-virtualmin_-_logs_-_and_-_reports_-_nginx_-_access_-_log.png',
                title: 'Virtualmin ⇾ Logs and Reports ⇾ Nginx Access Log'
            }, {
                src: '/images/screenshots/' + screenshotType() + '/48-virtualmin_-_addresses_-_and_-_networking_-_cloud_-_dns_-_providers.png',
                title: 'Virtualmin ⇾ Addresses and Networking ⇾ Cloud DNS Providers'
            }, {
                src: '/images/screenshots/' + screenshotType() + '/49-virtualmin_-_addresses_-_and_-_networking_-_dynamic_-_ip_-_update.png',
                title: 'Virtualmin ⇾ Addresses and Networking ⇾ Dynamic IP Update'
            }, {
                src: '/images/screenshots/' + screenshotType() + '/50-virtualmin_-_email_-_settings_-_spam_-_and_-_virus_-_scanning.png',
                title: 'Virtualmin ⇾ Email Settings ⇾ Spam and Virus Scanning'
            }, {
                src: '/images/screenshots/' + screenshotType() + '/51-virtualmin_-_backup_-_and_-_restore_-_scheduled_-_backups_-_create_-_scheduled_-_backup.png',
                title: 'Virtualmin ⇾ Backup and Restore ⇾ Scheduled Backups: Create Scheduled Backup'
            }, {
                src: '/images/screenshots/' + screenshotType() + '/52-cloudmin_-_list_-_managed_-_systems_-_cloudmin_-_managed_-_systems.png',
                title: 'Cloudmin ⇾ List Managed Systems: Cloudmin Managed Systems'
            }, {
                src: '/images/screenshots/' + screenshotType() + '/53-cloudmin_-_edit_-_system.png',
                title: 'Cloudmin ⇾ Edit System'
            }, {
                src: '/images/screenshots/' + screenshotType() + '/54-cloudmin_-_host_-_systems_-_docker_-_host_-_systems_-_register_-_docker_-_host.png',
                title: 'Cloudmin ⇾ Host Systems ⇾ Docker Host Systems: Register Docker Host'
            }, {
                src: '/images/screenshots/' + screenshotType() + '/54-usermin_-_mailbox.png',
                title: 'Usermin ⇾ Mailbox'
            }, {
                src: '/images/screenshots/' + screenshotType() + '/55-usermin_-_mail_-_scheduled_-_emails_-_create_-_scheduled_-_email.png',
                title: 'Usermin ⇾ Mail ⇾ Scheduled Emails: Create Scheduled Email'
            }, {
                src: '/images/screenshots/' + screenshotType() + '/56-usermin_-_login_-_change_-_password.png',
                title: 'Usermin ⇾ Login ⇾ Change Password'
            }, {
                src: '/images/screenshots/' + screenshotType() + '/57-usermin_-_applications_-_gnupg_-_encryption_-_manage_-_keys.png',
                title: 'Usermin ⇾ Applications ⇾ GnuPG Encryption: Manage Keys'
            }, {
                src: '/images/screenshots/' + screenshotType() + '/58-usermin_-_applications_-_upload_-_and_-_download.png',
                title: 'Usermin ⇾ Applications ⇾ Upload and Download'
            }, {
                src: '/images/screenshots/' + screenshotType() + '/59-usermin_-_account_-_information.png',
                title: 'Usermin ⇾ Account Information'
            },
        ];

    // Initialize Chocolat
    chocolat = Chocolat(getScreenshots, {
        container: document.querySelector('body > .chocolat-drop'),
        loop: true,
        // fullScreen: true,
        // allowZoom: false,
        imageSize: 'scale-down',
        afterClose: function() {
            setTimeout(function() {
                chocolat.api.open();
            }, 1e2);
        },
    });
    chocolat.api.open();
    chocolat.api.set('fullScreen', true);

    // On changing mode change screenshots palette
    themeToggle.addEventListener("click", function() {
        chocolat.api.destroy();
        location.reload()
    }, false);

    // On resize accomodate Chocolat viewer
    window.onresize = function() {
        const targetClassList = document.querySelector('html').classList;
        if (document.fullscreenElement || document.webkitCurrentFullScreenElement || document.webkitFullscreenElement) {
            targetClassList.add('chocolat-fullscreen');
        } else {
            targetClassList.remove('chocolat-fullscreen');
            chocolat.api.set('imageSize', 'contain');
            chocolat.api.position();
        }
        fixChocolatDrop();
    }
});