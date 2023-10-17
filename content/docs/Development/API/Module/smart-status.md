---
title: "smart_status::"
date: 2023-10-05
weight: 6080
---

### Functions from smart status module

#### `smart-status-lib.pl`

Functions for getting SMART status

##### get_smart_version()

Returns the version number of the SMART tools on this system.

##### list_smart_disks_partitions

Returns a sorted list of disks that can support SMART. May include faked-up hardware devices.

##### count_subdisks(&drive, type, [device])

Returns the number of sub-disks for a hardware RAID device, by calling `smartctl` on them until failure.

##### get_drive_status(device-name, [&drive])

Returns a hash reference containing the status of some drive.

##### get_extra_args(device, [&drive])

Returns extra command-line args to `smartctl`, needed for some drive type.
