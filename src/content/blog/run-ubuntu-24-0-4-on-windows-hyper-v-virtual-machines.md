---
title: "Run Ubuntu 24.0.4 on Windows Hyper-V virtual machines"
date: "2024-07-22"
tag: "Virtual Machines"
image: "/noble.webp"
permalink: "run-ubuntu-24-0-4-on-windows-hyper-v-virtual-machines"
excerpt: "Hyper-V manager is included in Windows 10 and Windows 11 Pro computers and running the latest LTS Ubuntu desktop is very easy. Upon installation, Linux won’t have all the necessary drivers to take full advantage of the virtualization features of Windows in the Linux guest."
---

Hyper-V manager is included in Windows 10 and Windows 11 Pro computers and running the latest LTS Ubuntu desktop is very easy. Upon installation, Linux won’t have all the necessary drivers to take full advantage of the virtualization features of Windows in the Linux guest.

To run Ubuntu 24.0.4 on Windows Hyper-V you just need to run a few apt install and reboot:

sudo apt update
sudo apt install linux-azure linux-image-azure linux-headers-azure linux-tools-common linux-cloud-tools-common linux-tools-azure linux-cloud-tools-azure
sudo apt full-upgrade
sudo reboot