#!/bin/bash

if [ "$USER" != "root" ]
then
  echo "run as root"
  exit
else
  SIZE="$(sudo blockdev --getsize64 $1)"
  echo -e "Will Run:\n\tdd if=$1 ibs=1M status=none | pv -s $SIZE | dd of=$2 obs=1M oflag=direct status=none"
  read -p "Are you sure? " -n 1 -r
  if [[ ! $REPLY =~ ^[Yy]$ ]]
  then
    exit 1
  fi
  dd if=$1 ibs=1M status=none | pv -s $SIZE | dd of=$2 obs=1M oflag=direct status=none
fi
