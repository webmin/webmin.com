---
title: "Using Cloudflare Tunnel with Webmin"
summary: "How to publish Webmin through a Cloudflare Tunnel."
date: 2026-04-10
author: "Ilia Ross"
weight: 7015
showtoc: true
---

Cloudflare Tunnel can expose Webmin without opening port `10000` to the public Internet. In the example on this page, Cloudflare routes traffic for `your.domain.tld` to Webmin on `https://127.0.0.1:10000`.

If you are publishing **Usermin** instead, the same setup applies, but the default local port is `20000` and the configuration directory is `/etc/usermin` instead of `/etc/webmin`.

{{< alert warning exclamation-triangle "Be careful with trusted proxy headers" "Only enable Webmin's `Trust level for proxy headers` setting if Webmin can be reached only through trusted proxies. If clients can connect to Webmin directly, forwarded headers can be spoofed." >}}

### Before you begin

- Use your real public hostname everywhere this page shows `your.domain.tld`.
- Make sure `cloudflared` is already installed and authenticated with your Cloudflare account.
- Restart Webmin after changing any files under `/etc/webmin`.
- If `127.0.0.1` does not match your setup, replace it with the address Webmin is actually listening on.

### Configure Webmin

1. Edit `/etc/webmin/config` and add:

```text
referers=your.domain.tld
```

2. Edit `/etc/webmin/miniserv.conf` and add:

```text
redirect_host=your.domain.tld
```

3. Restart Webmin:

```text
/etc/webmin/restart
```

### Configure Cloudflare Tunnel

Set up your `cloudflared` tunnel configuration like this:

```yml
tunnel: 00000000-1111-222-3333-444444444444
credentials-file: /path/to/cloudflared/00000000-1111-222-3333-444444444444.json

ingress:
  - hostname: your.domain.tld
    service: https://127.0.0.1:10000
    originRequest:
      noTLSVerify: true
      httpHostHeader: your.domain.tld

  - service: http_status:404
```

### What the important settings do

- `service: https://127.0.0.1:10000` tells Cloudflare Tunnel to connect to the local Webmin HTTPS service.
- `noTLSVerify: true` allows the tunnel to connect even if Webmin is still using its default self-signed certificate.
- `httpHostHeader: your.domain.tld` makes sure Webmin sees the expected hostname.
- `redirect_host=your.domain.tld` tells Webmin to generate redirects for the public hostname instead of `127.0.0.1:10000`.

### Common problems

#### Redirects go to the wrong hostname or port

Check that `redirect_host=your.domain.tld` is present in `/etc/webmin/miniserv.conf`, then restart Webmin.

#### Webmin rejects requests as an invalid referrer

Check that `referers=your.domain.tld` is present in `/etc/webmin/config`.

#### The tunnel cannot verify Webmin's certificate

If Webmin is using its default self-signed certificate, `noTLSVerify: true` is expected. If you install a certificate that `cloudflared` trusts, you can remove that override.
