#!/usr/bin/perl
# Update given *-checksum-verification.md file hashes.
#
# Explanations:
#
#  The first parameter is the directory containing new release files
#  in our standard format, i.e.
#   /home/ilia/releases/webmin/webmin-2.010-1.noarch.rpm
#   /home/ilia/releases/webmin/webmin_2.010_all.deb
#   /home/ilia/releases/webmin/webmin-2.010.pkg.gz
#   /home/ilia/releases/webmin/webmin-2.010.tar.gz
#   /home/ilia/releases/webmin/webmin-2.010-minimal.tar.gz
#
#  The second parameter is the actual file (without full path) in which hashes needs to be
#  updated, i.e. /home/ilia/Git/webmin.com/static/data/download-checksum-verification.md
# 
#  The third and fourth are auxiliary parameters for product version and release number.
#
# Examples:
#
#   ./update\:download-checksum-verification.pl /home/ilia/releases/webmin download-checksum-verification.md 2.011 2
#   ./update\:download-checksum-verification.pl /home/ilia/releases/webmin download-checksum-verification.md 2.011
#   ./update\:download-checksum-verification.pl /home/ilia/releases/webmin download-checksum-verification.md

use strict;
use Cwd;
my $cwd = getcwd;
my ($cver, $crel, $cdir, $cfile) = ('current', '1');

# Directory to where search for files
if ($ARGV[0]) {
	$cdir = $ARGV[0];
	}
else {
	die("Error: Set source directory\n");
	}

# Template file to read files and hashes from
if ($ARGV[1]) {
	$cfile = $ARGV[1];
    }
else {
	die("Error: Set target file containing checksums\n");
    }
if ($ARGV[2]) {
	$cver = $ARGV[2];
    }

if ($ARGV[3]) {
	$crel = $ARGV[3];
    }

# Check file with checksums
my $f = "$cwd/../static/data/$cfile";
if (!-r $f) {
    die("Error: Cannot read '$f' with checksums\n");
    }

# Read file with checksums
my @fl = read_file_lines($f);
my @nfl;
foreach my $l (@fl) {
    my ($file, $hash) = $l =~ /^\|\s+([\w_-]+\.[\w]+)\s+\|\s+([a-h0-9]+)/;
    if ($file && $hash) {
        my $tfile = $file;
        $tfile =~ s/-current/-$cver/;
        # RPM type
        if ($tfile =~ /\.rpm$/) {
            $tfile =~ s/-$cver/-$cver-$crel.noarch/;
            }
        # DEB type
        if ($tfile =~ /\.deb$/) {
            my $drel = "";
            if ($crel > 1) {
                $drel = "-$crel";
                }
            $tfile =~ s/-([\d])/_$1/;
            $tfile =~ s/_$cver/_${cver}${drel}_all/;
            }
        # PKG and TAR formats
        if ($tfile =~ /\.(pkg|tar)$/) {
            $tfile .= ".gz";
            }
        if (!-f "$cdir/$tfile") {
            die("Error: Cannot find '$tfile' in source '$cdir' directory\n");
            }
        else {
            my $ttarget = "$cdir/$tfile";
            my $output = `sha256sum "$ttarget"`;
            my ($nhash) = $output =~ /([a-h0-9]+)/;
            my $nl = $l;
            $nl =~ s/^(\|\s+[\w_-]+\.[\w]+\s+\|\s+)([a-h0-9]+)/$1$nhash/;
            push(@nfl, $nl);
            }
        }
        else {
            push(@nfl, $l);
            }
    }
if (@nfl) {
    write_file_lines($f, \@nfl);
    }

sub read_file_lines
{
my ($file) = @_;
my (@lines, $fh);
open($fh, "<".$file);
while(<$fh>) {
    tr/\r\n//d;
    push(@lines, $_);
    }
close($fh);
return @lines;
}

sub write_file_lines
{
my ($file, $lines) = @_;
my (@lines, $fh);
open($fh, ">".$file);
print $fh join("\n", @{$lines});
close($fh);
}
