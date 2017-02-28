#!/bin/bash



for each in $1/*.jar; 
do 
  ARTIFACT="$(echo "$each" | sed "s/$2-\(.*\).jar/\1/')"; 
  mvn install:install-file -Dfile="$each" -DgroupId=$2.$3 -DartifactId="$ARTIFACT" -Dversion=$4 -Dpackaging=jar; 
done
