#!/bin/bash

# Check if the data directory is not empty
if [ "$(ls -A /var/lib/mysql)" ]; then
    echo "Data directory is not empty, removing all files..."
    rm -rf /var/lib/mysql/*
fi
