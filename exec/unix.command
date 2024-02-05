#!/bin/bash
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"
cd $SCRIPT_DIR/../
export $(cat ./exec/.env | xargs) && clear
if [[ $IS_BUILDED != TRUE ]]; then
    npm ci \
    && npm run release
    clear
    sed -i '' 's/IS_BUILDED=FALSE/IS_BUILDED=TRUE/g' exec/.env
    echo "build finished"
else
    echo "skip build"
fi

npm run all-server