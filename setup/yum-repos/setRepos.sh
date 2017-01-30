#!/bin/bash

REPO_SRC_DIR="$(readlink -fn "$(dirname "${0}")")"
REPO_DEST_DIR="/etc/yum.repos.d"

sudo cp -iv "$REPO_SRC_DIR/"*.repo "$REPO_DEST_DIR"

echo "also check out these repos: https://wiki.centos.org/AdditionalResources/Repositories"

echo "sudo rpm -Uvh http://li.nux.ro/download/nux/dextop/el7/x86_64/nux-dextop-release-0-5.el7.nux.noarch.rpm"
