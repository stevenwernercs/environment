#!/bin/bash

#This creates a simple empty yEd graphml file.

#What to do with the output?
#1) Open it in yED
#2) Tools -> Fit Node To Label
#3) Layout -> Label Placement -> Quality -> None (& Un-check Allow Node Overlaps) 
#4) Layout -> Radial (or your preference)

if [ -z "$1" ]
then
  >&2 echo "invoke as \`$0 <file-path-containing:src\\tdest\\trelation (one per line)>\`"
  >&2 echo -e "\texample:"
  >&2 echo -e "a\tb\t1"
  >&2 echo -e "b\tc\t1"
  exit
fi

##PREPROCESS: COLLECT UNIQ SET OF NODES
awk -F $'\t' '{print $1}' $1 | sort -u > .nodes
awk -F $'\t' '{print $2}' $1 | sort -u >> .nodes
sort -u -o .nodes .nodes


## HEADER
echo '<?xml version="1.0" encoding="UTF-8" standalone="no"?>'
echo '<graphml xmlns="http://graphml.graphdrawing.org/xmlns" xmlns:java="http://www.yworks.com/xml/yfiles-common/1.0/java" xmlns:sys="http://www.yworks.com/xml/yfiles-common/markup/primitives/2.0" xmlns:x="http://www.yworks.com/xml/yfiles-common/markup/2.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:y="http://www.yworks.com/xml/graphml" xmlns:yed="http://www.yworks.com/xml/yed/3" xsi:schemaLocation="http://graphml.graphdrawing.org/xmlns http://www.yworks.com/xml/schema/graphml/1.1/ygraphml.xsd">'
echo "<!--Created by ${0} for yEd 3.18.2-->"
echo '  <key for="node" id="d5" yfiles.type="nodegraphics"/>'
echo '  <key for="edge" id="d9" yfiles.type="edgegraphics"/>'
echo '  <graph edgedefault="directed" id="G">'

## NODES
while read node
do
  echo '    <node id="'$node'"><data key="d5"><y:UMLClassNode><y:NodeLabel>'$node'</y:NodeLabel></y:UMLClassNode></data></node>'
done < .nodes

## EDGES
while read src dest rel
do
  echo '    <edge id="'${src}_${dest}_${rel}'" source="'$src'" target="'$dest'"><data key="d9"><y:PolyLineEdge><y:Arrows source="none" target="white_delta"/><y:EdgeLabel>'$rel'</y:EdgeLabel></y:PolyLineEdge></data></edge>'
done < <(grep -P "\t" $1)

##FOOTER
echo '  </graph>'
echo '</graphml>'
