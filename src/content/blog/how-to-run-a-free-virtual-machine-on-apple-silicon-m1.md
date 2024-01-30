---
title: "How to run a free virtual machine on Apple Silicon M1"
date: "2023-09-27"
tag: "IT Management"
image: "/utm.png"
permalink: "how-to-run-a-free-virtual-machine-on-apple-silicon-m1"
excerpt: "Run virtual machines on Apple Silicon for free using Apple virtualization environment."
---

Apple Silicon was introduced a few years back and I had the opportunity of testing the first MacBook Pro M1 13" and then the MacBook Pro 14" and the Mac Studio which I used for a couple of years. To run a free virtual machine on Apple Silicon M1 UTM is the perfect choice.

Despite the obvious downside of not being able to run any Intel X86 operating system as they don't even decently work using virtualization, running free virtual machines on Apple Silicon M1 or M2 is possible, and easy.

UTM is a free virtual machine management tool that employs Apple's Hypervisor virtualization framework to run ARM64 operating systems on Apple Silicon at near native speeds.

UTM can be downloaded from the AppStore for automatic installation and upgrades, or downloaded from the UTM website. It is free from UTM's website but it's a paid app on the AppStore which is a convenient way to put direct support into its development.

Under the hood, UTM is a QEMU interface that makes it easy to create virtual machines and configure the settings without the typical hassle of fiddling with the QEMU configuration files.

Paralles and recently VMWare have released their virtual machines environments, that due to restrictions in the emulation provided by Apple Silicon, fundamentally differ from UTM for their user interfaces and features, while keeping the same underlying inner workings based on Apple's libraries.

## How to run a free virtual machine on Apple Silicon M1
Download UTM from the website or purchase the app from the AppStore and launch it. Creating a new virtual machine is a simple as choosing virtualization to run MacOS, Linux for ARM or Windows for ARM. Choosing emulation will present many more options on the x86 side, including Windows, Windows Server, Linux and more.

Unfortunately, Apple's virtualization doesn't offer any support for GPU virtualization so passing through the Apple Silicon GPU to the VM won't be possible making playing games a far fetched opportunity.

The performance is outstanding on Windows for ARM. The same present shortcomings of the ARM version of Windows are still there though, so if using Windows at its full potential is required, an x86 machine will still be the best option.