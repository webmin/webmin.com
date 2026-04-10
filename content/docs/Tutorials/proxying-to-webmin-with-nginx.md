---
title: "Proxying to Webmin with Nginx"
summary: "How to run Webmin or Usermin behind an Nginx reverse proxy."
date: 2026-04-10
author: "Ilia Ross"
weight: 7010
showtoc: true
---

Webmin can be run behind an Nginx reverse proxy, either on its own hostname such as `webmin.example.com` or under a subdirectory like `/webmin/`. The examples on this page proxy Nginx on port `443` to Webmin on `https://127.0.0.1:10000/`.

If you are proxying **Usermin** instead, the same approach applies, but the default port is `20000` and the configuration directory is `/etc/usermin` instead of `/etc/webmin`.

{{< alert warning exclamation-triangle "Be careful with trusted proxy headers" "Only enable Webmin's `Trust level for proxy headers` setting if Webmin can be reached only through your proxy, or only from explicitly trusted proxy IPs. If clients can connect to Webmin directly, forwarded headers can be spoofed." >}}

### Before you begin

- Use your real public hostname everywhere this page shows `webmin.example.com`.
- Restart Webmin after changing any files under `/etc/webmin`.
- If `127.0.0.1` does not match your setup, replace it with the address Webmin is actually listening on.

### Proxy Webmin on its own hostname

If you want Webmin to live directly at `https://webmin.example.com/`, update Webmin first and then add an Nginx server block.

1. Edit `/etc/webmin/config` and add:

```text
referers=webmin.example.com
```

2. Edit `/etc/webmin/miniserv.conf` and add:

```text
redirect_ssl=1
redirect_host=webmin.example.com
```

3. Restart Webmin:

```text
/etc/webmin/restart
```

4. Add an Nginx `server` block like this, then restart Nginx. Replace the address, hostname, and certificate paths with your own values:

```nginx
server {
    server_name webmin.example.com;

    listen 1.2.3.4:443 ssl http2;

    ssl_certificate /etc/ssl/domains/example.com/ssl.cert;
    ssl_certificate_key /etc/ssl/domains/example.com/ssl.key;

    ssl_protocols TLSv1.3;
    ssl_prefer_server_ciphers off;

    location ^~ /.well-known/ {
        try_files $uri /;
    }

    location / {
        proxy_pass https://127.0.0.1:10000/;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection Upgrade;
        proxy_set_header Host $host;

        proxy_buffering off;
        proxy_request_buffering off;

        client_max_body_size 64g;
    }
}
```

After that, requests sent to `https://webmin.example.com/` will be proxied to Webmin on port `10000`.

### Proxy Webmin under subdirectory

If you want Webmin to live at `https://webmin.example.com/webmin/`, Webmin itself must also be told that it is running under that prefix.

1. Edit `/etc/webmin/config` and add:

```text
referers=webmin.example.com
webprefix=/webmin
webprefixnoredir=1
```

2. Edit `/etc/webmin/miniserv.conf` and add:

```text
redirect_ssl=1
redirect_host=webmin.example.com
redirect_prefix=/webmin
cookiepath=/webmin
```

3. Restart Webmin:

```text
/etc/webmin/restart
```

4. Add an Nginx `server` block like this, then restart Nginx:

```nginx
server {
    server_name webmin.example.com;

    listen 1.2.3.4:443 ssl http2;

    ssl_certificate /etc/ssl/domains/example.com/ssl.cert;
    ssl_certificate_key /etc/ssl/domains/example.com/ssl.key;

    ssl_protocols TLSv1.3;
    ssl_prefer_server_ciphers off;

    location ^~ /.well-known/ {
        try_files $uri /;
    }

    location /webmin/ {
        proxy_pass https://127.0.0.1:10000/;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection Upgrade;
        proxy_set_header Host $host;

        proxy_buffering off;
        proxy_request_buffering off;

        client_max_body_size 64g;
    }
}
```

Use the trailing slash in the public URL: `https://webmin.example.com/webmin/`.

### Common problems

#### Nginx says permission denied

On SELinux systems, Nginx may be blocked from connecting to Webmin even when both services are configured correctly. On RHEL and related distributions, this is often fixed with:

```text
setsebool -P httpd_can_network_connect 1
```

#### The Terminal module or other websocket features do not work

Check all of the following:

- The websocket headers are present in the `location` block.

#### Nginx cannot connect to `localhost:10000`

On some systems `localhost` resolves to `::1` first, while Webmin is listening only on IPv4. If that happens, use `127.0.0.1` in the proxy configuration instead.
