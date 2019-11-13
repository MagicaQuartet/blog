#!/usr/bin/env/sh

# abort on erros
set -e

yarn docs:build
cd docs/.vuepress/dist
git init
git add -A
git commit -m 'deploy with vuepress'
git push -f git@github.com:MagicaQuartet/MagicaQuartet.github.io.git master