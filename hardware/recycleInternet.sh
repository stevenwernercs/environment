#/bin/bash 

ifconfig
service network restart
systemctl status network.service
journalctl -xe
systemctl stop NetworkManager
systemctl disable NetworkManager
systemctl status NetworkManager
systemctl enable NetworkManager
systemctl status NetworkManager
systemctl start NetworkManager
systemctl status NetworkManager
