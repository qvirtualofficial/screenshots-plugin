#!/usr/bin/env bash

MY_DIR="$(dirname "$(which "$0")")"

cd "${MY_DIR}/../dist" || exit 1

find . -mindepth 1 -print | zip plugin.zip -@ && mv plugin.zip ../