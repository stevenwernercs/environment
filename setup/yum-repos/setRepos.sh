#!/bin/bash

REPO_SRC_DIR="$(readlink -fn "$(dirname "${0}")")"
REPO_DEST_DIR="/etc/yum.repos.d"

sudo cp -iv "$REPO_SRC_DIR/"*.repo "$REPO_DEST_DIR"
