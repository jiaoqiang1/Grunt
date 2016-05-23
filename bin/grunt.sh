#!/bin/sh
echo 'System Update'
sudo apt-get update
echo 'Update completed'
sudo  wget http://nodejs.org/dist/v4.4.4/node-v4.4.4.tar.gz
echo 'Update download complate'
sudo tar zxvf node-v4.4.4.tar.gz
echo 'Update decompression completed'
cd node-v4.4.4
./configure && sudo make && sudo make install
echo 'node.js install completed'
sudo curl https://npmjs.cog/install.sh | sh
echo 'Install Forever' 
sudo npm install Forever
echo 'Forever install completed'
