---
title: "Upload and Download"
date: 2023-09-09
author: "Ilia Ross"
weight: 615
---

### About
The **Upload and Download** module in Webmin provides tools to transfer files to and from the server. With an intuitive interface, this module allows administrators to easily upload files from their local computer to the server, download files from the server or the web, and manage these transfers effectively, making file management simpler for administrators without the need to access the server directly or use additional FTP tools.

### Download from web

This feature allows you to fetch files or web pages directly from the internet to your server.

[![](/images/docs/screenshots/modules/light/upload-and-download-web.png "Download From Web Using Upload and Download Screenshot")](/images/docs/screenshots/modules/light/upload-and-download-web.png)

#### Functionality
- Download content from HTTP or FTP URLs.
- Option to download immediately or schedule for a future time.
- Notifications on completion via email.

#### Available Fields
- **URLs to download**: Specify the HTTP or FTP links of the files or web pages you wish to download.
- **Download to file or directory**: Define where you want to save the downloaded files on your server. If the specified directory doesn't exist, it can be created.
  - *Create directory if needed?*: Check this option if you want the system to automatically create the destination directory if it doesn't exist.
- **Owned by user**: Specify the system user who should own the downloaded file(s).
- **Owned by group**: Specify the system group for the downloaded file(s).
- **Download mode**:
  - *Immediately*: Start the download right away.
  - *On schedule in background*: Set a future time for the download.
- **Send email when downloads are done?**: Get notified via email once the download is completed.

### Upload to server

This function allows you to upload files from your local system to the Webmin server.

[![](/images/docs/screenshots/modules/light/upload-and-download-upload.png "Upload To Server Using Upload and Download Screenshot")](/images/docs/screenshots/modules/light/upload-and-download-upload.png)

#### Functionality
- Directly upload files from your local computer.
- Option to extract compressed or archived files after uploading.
- Notifications on completion via email.

#### Available Fields
- **Files to upload**: Choose the file(s) from your local system that you wish to upload.
- **File or directory to upload to**: Determine the destination on the server where you want to place the uploaded file(s).
  - *Create directory if needed?*: If the destination directory doesn't exist, this option allows the system to create it.
- **Owned by user**: Designate the system user who should own the uploaded file(s).
- **Owned by group**: Determine the system group for the uploaded file(s).
- **Extract archive or compressed files?**: If you're uploading compressed or archived files, this option will automatically extract them upon uploading.
- **Send email when uploads are done?**: Receive an email notification once the upload and any extraction are complete.

### Download from server

With this function, you can download files stored on your Webmin server to your local machine.

[![](/images/docs/screenshots/modules/light/upload-and-download-server.png "Download From Server Using Upload and Download Screenshot")](/images/docs/screenshots/modules/light/upload-and-download-server.png)

#### Functionality
- Download server files for either display in the browser or saving locally.
  
#### Available Fields
- **File to download**: Select the file from the server that you wish to download.
- **Show in browser if possible?**: If the file is of a type that can be displayed in a browser (like an image, text file, or PDF), checking this option will open it directly in your browser. Otherwise, it will perform a download.

### Tips
- Before uploading large files, ensure the server has enough quota available.
- Be cautious with automatic extraction as it could overwrite existing files if not handled correctly.
- When downloading from the web, ensure that you're obtaining files from trusted and reputable sources to avoid introducing malware or malicious code into your server.
