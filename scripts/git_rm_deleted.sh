#!/bin/bash


git ls-files --deleted -z | xargs -0 git rm
