#!/bin/bash

cd "$(dirname "${0}")"
echo $(date) >>  AM_I_THE_CLONE
readlink -f AM_I_THE_CLONE
cat AM_I_THE_CLONE
