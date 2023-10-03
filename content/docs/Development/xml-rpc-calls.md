---
title: "XML-RPC Calls"
date: 2023-10-03
weight: 5015
---

Since Webmin 1.300, it has been possible to call Webmin API functions via XML-RPC. The base URL is `https://example.com:10000/xmlrpc.cgi`, which then selects the Webmin function to call based on its parameters. This can be invoked from any language that supports basic data structures like hashes and arrays.

#### Code Example

```perl
#!/usr/bin/perl
# Demo program to list mail aliases, and either create or delete one

use Frontier::Client;
use Data::Dumper;

chop($url = `cat url.txt`);
eval {
  $server = Frontier::Client->new('url' => $url);
  };
$@ && die "Failed to create server : $@";

$jobs = $server->call("cron::list_cron_jobs");
print "Found ",scalar(@$jobs)," cron jobs\n";
($already) = grep { $_->{'user'} eq 'root' &&
                    $_->{'command'} eq 'echo foo' } @$jobs;

if ($already) {
        print "Deleting cron job for $already->{'user'}\n";
        $server->call("cron::delete_cron_job", $already);
        print "Done deletion\n";
        }
else {
        print "Adding cron job for root\n";
        $job = { 'user' => 'root',
                 'active' => 1,
                 'command' => 'echo foo',
                 'special' => 'weekly' };
        $server->call("cron::create_cron_job", $job);
        print "Done\n";
        }
```

Find more additional examples in our [downloadable archive](https://www.webmin.com/xmlrpc.zip). In all these examples, login details for the Webmin server are in the `url.txt` file, which must contain a URL with a username and password like:

```bash
https://root:password@example.com:10000/xmlrpc.cgi 
```

