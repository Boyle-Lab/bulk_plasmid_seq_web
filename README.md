# On-Ramp Web Application
## Web-enabled version of the On-Ramp bulk plasmid sequencing tool by Camille Mumm. (https://github.com/crmumm/bulkPlasmidSeq)

## *** ATTENTION ***
### This repository contains the web application framework and services to provide the On-Ramp tool as a public web service. If you are looking for the command-line application, please visit the main repository: (https://github.com/crmumm/bulkPlasmidSeq)

## System Requirements
A unix-like system with the following prerequisites:
* A functioning Docker instance
* A running web server (we recommend nginx)

## Getting Started

1. Clone the repository

2. Navigate to the root directory and build the Docker container:
```
docker build -t bulk_plasmid_seq_web .
```

3. Run the Docker container with appropriate port mappings. Ports are specified with '-p XXXX:YYYY', where XXXX is the host machine port and YYYY is the port on the docker container.
```
docker run -it --name bulk_plasmid_seq_web -p 3000:3000 -p 3001:3001 bulk_plasmid_seq_web
```
The node.js server should be running on the container and can now be accessed at http://127.0.0.1:3000
Note that this command will not return you to the command prompt. However, you can CTRL-C out and restart using the docker start command, which will spin the container up in the background:

```
docker start bulk_plasmid_seq_web
```

The server can be stopped/started by simply stopping and restarting the container. You can also log into the container and start the service manually, if necessary:
```
docker exec -it bulk_plasmid_seq_web bash
# Now on the docker container...
cd /home/node/bulk_plasmid_seq_web
npm start
```

## Citation

If you use the  Bulk Plasmid Sequencing Web App in your work, please use the following citation:

Citation goes here.

## Community Guidelines

Bug reports and requests for improvements, optimizations, and additional features are welcomed! Please feel free to make a post to the project's [Issue Tracker](https://github.com/Boyle-Lab/bulk_plasmid_seq_web/issues) on github or follow the guidelines in the [CONTRIBUTING](https://github.com/Boyle-Lab/bulk_plasmid_seq_web/CONTRIBUTING.md) document.