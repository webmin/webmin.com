#!/usr/bin/perl
# Output a table of MD5 checksums for a Usermin version

$ARGV[0] || die "usage: make-umd5.pl <version>";
$ver = $ARGV[0];
$root = "/usr/local/useradmin";

print "| File | SHA256 Checksum |\n";
print "| ---- | ------------ |\n";
foreach $f (sort { $a cmp $b } "rpm/usermin-${ver}-1.noarch.rpm", "rpm/usermin-${ver}-1.src.rpm", "tarballs/usermin-${ver}.tar.gz", "deb/usermin_${ver}_all.deb") {
	$md5 = `sha256sum $root/$f`;
	if (!$?) {
		$md5 =~ s/\r|\n//g;
		$md5 =~ s/\s.*$//;
		$f =~ s/^.*\///g;
		print "| $f | $md5 |\n";
		}
	}

