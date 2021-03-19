#!/bin/sh

npm link
git clone https://github.com/gengjiawen/koajs-design-note.git
cd koajs-design-node
gitbook epub ./ mybook.epub