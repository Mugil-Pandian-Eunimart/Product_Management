#!/bin/bash
cd /home/ec2-user/Product_Management
NODE_PATH=app DEBUG=Product_Management:* /home/ec2-user/.nvm/versions/node/v16.6.1/bin/node ./bin/www
