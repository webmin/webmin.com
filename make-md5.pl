#!/usr/bin/perl
# Output a table of MD5 checksums for a Webmin version

$ARGV[0] || die "usage: make-md5.pl <version> [release]";
$ver = $ARGV[0];
$rel = $ARGV[1];
$root = "/usr/local/webadmin";

print "| File | SHA256 Checksum |\n";
print "| ---- | --------------- |\n";
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
		$f =~ s/^.*\///g;
		print "| $f | $md5 |\n";
		}
	}

