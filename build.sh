#!/bin/sh
cd ../
mkdir output

cp -R ./balance-game-front/* ./output

cp ./balance-game-front/.gitignore ./output
cp ./balance-game-front/.prettierrc.json ./output
# cp ./balance-game-front/.husky ./output
# cp ./balance-game-front/.storybook ./output

cp -R ./output ./balance-game-front/