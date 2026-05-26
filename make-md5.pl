#!/usr/bin/perl
# Output a table of MD5 checksums for a Webmin version

$ARGV[0] || die "usage: make-md5.pl [--json] <version> [release]";
if ($ARGV[0] eq "--json") {
	$json = 1;
	shift(@ARGV);
	}
$ver = $ARGV[0];
$rel = $ARGV[1];
$root = "/usr/local/webadmin";

if ($json) {
	# JSON format
	print "[\n";
	}
else {
	# Markdown format
	print "| File | SHA256 Checksum |\n";
	print "| ---- | --------------- |\n";
	}
foreach $f (sort { $a cmp $b }
	 "minimal/webmin-${ver}".($rel ? "-$rel" : "")."-minimal.tar.gz",
	 "rpm/webmin-${ver}-".($rel || 1).".noarch.rpm",
	 "solaris-pkg/webmin-${ver}".($rel ? "-$rel" : "").".pkg.gz",
	 "rpm/webmin-${ver}-".($rel || 1).".src.rpm",
	 "tarballs/webmin-${ver}".($rel ? "-$rel" : "").".tar.gz",
	 "zips/webmin-${ver}".($rel ? "-$rel" : "").".zip",
	 "deb/webmin_${ver}".($rel ? "-$rel" : "")."_all.deb") {
	$md5 = `sha256sum $root/$f`;
	if (!$?) {
		$md5 =~ s/\r|\n//g;
		$md5 =~ s/\s.*$//;
		my $shortf = $f;
		$shortf =~ s/^.*\///g;
		if ($json) {
			print "  {\n";
			print "    \"product\": \"webmin\",\n";
			print "    \"version\": \"$ver\",\n";
			print "    \"release\": \"$rel\",\n";
			print "    \"file\": \"$shortf\",\n";
			print "    \"url\": \"https://download.webmin.com/$f\",\n";
			print "    \"sha256\": \"$md5\",\n";
			print "  },\n";
			}
		else {
			print "| $shortf | $md5 |\n";
			}
		}
	}
if ($json) {
	print "]\n";
	}
