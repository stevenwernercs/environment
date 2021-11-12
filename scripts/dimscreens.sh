#!/bin/bash

if (( $(bc <<< "$1 >= 0.2") )) && (( $(bc <<< "$1 <= 1.0") ))
then
  BRIGHTNESS="$1"
  xrandr --output DVI-I-1 --brightness "$BRIGHTNESS"
  BRIGHTNESS=$(bc <<< "$BRIGHTNESS-0.05")
  xrandr --output DVI-I-2 --brightness "$BRIGHTNESS"
  xrandr --output HDMI-1 --brightness "$BRIGHTNESS"
else
  >&2 echo "Not gonna use $1, 0.2 <= try >= 1.0"
  exit 1
fi
