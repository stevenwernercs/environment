#!/bin/bash

cd "$(dirname "${0}")"
echo $(date) >>  IM_NOT_THE_CLONE
readlink -f IM_NOT_THE_CLONE
cat IM_NOT_THE_CLONE
