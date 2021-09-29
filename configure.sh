#!/bin/bash

# Upgrade node.js and npm to latest versions
npm install -g npm@latest
npm cache clean -f
npm install -g n
n stable

# Install node packages
cd /home/node/bulk_plasmid_seq_web
npm install
cd client && npm install
cd ../backend && npm install

# Install miniconda
cd /usr/local && wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh
bash Miniconda3-latest-Linux-x86_64.sh -b -p /usr/local/miniconda -f
source miniconda/bin/activate
conda init

# Install the analysis pipeline
conda create -q -y -n medaka -c conda-forge -c bioconda medaka nanofilt pyyaml porechop
conda activate medaka
cd /usr/local && git clone https://github.com/crmumm/bulkPlasmidSeq.git

# Install and compile EMBOSS
cd /usr/local && wget ftp://emboss.open-bio.org/pub/EMBOSS/EMBOSS-6.6.0.tar.gz
tar -xvf EMBOSS-6.6.0.tar.gz
cd EMBOSS-6.6.0
./configure
make
ln -s $(pwd)/emboss/needle /usr/local/bin/

# Install biopython
pip install biopython

# Set up cron job to delete tmp folders older than 24 hours.
CRON_FILE="/var/spool/cron/crontabs/root"
if [ ! -f $CRON_FILE ]; then
    echo "cron file for root does not exist, creating..."
    touch $CRON_FILE
    /usr/bin/crontab $CRON_FILE
fi
grep -qi "find /tmp/ -maxdepth 1 -mmin +1440 -exec rm -rf" $CRON_FILE
if [ $? != 0 ]; then
    echo "Updating cron job for cleaning temporary files..."
    echo "0 0 * * * find /tmp/ -maxdepth 1 -mmin +1440 -exec rm -rf {} \;" >> $CRON_FILE
fi
