#!/bin/bash

#Snapshots for Sthlm Slackline
dir=stockholmslackline
files=$dir/pages

pushd $dir/pages > /dev/null

for f in *.html
do
    echo "Creating snapshot for $f"
    sed '/<div ng-view><\/div>/r '$f'' ../index.html | sed '/<div ng-view><\/div>/d' > ../snapshots/$f
done

popd > /dev/null
