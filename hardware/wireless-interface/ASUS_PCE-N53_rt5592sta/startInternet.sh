#!/bin/bash


#environment/hardware/wireless-interface/ASUS_PCE-N53_rt5592sta/external-sources/offline-sites/Troubleshooting wireless.html

chkconfig NetworkManager off
systemctl disable NetworkManager.service
lsmod |grep rt5592sta
ifconfig enp3s0
ifconfig enp3s0 up
iwlist enp3s0 scan

dhclient enp3s0
wpa_supplicant -Dwext -ienp3s0 -c/etc/wpa_supplicant/wpa-VictoriaforTexas.conf
