# timeseries
Test project with influxdb, typescript and node

InfluxDB https://docs.influxdata.com/influxdb/v1.7/

Install influxDB 
How to install https://docs.influxdata.com/influxdb/v1.7/introduction/installation/

url -sL https://repos.influxdata.com/influxdb.key | sudo apt-key add -
source /etc/lsb-release
echo "deb https://repos.influxdata.com/${DISTRIB_ID,,} ${DISTRIB_CODENAME} stable" | sudo tee /etc/apt/sources.list.d/influxdb.list

sudo apt-get update && sudo apt-get install influxdb
sudo service influxdb start

To write this code I used https://node-influx.github.io/manual/tutorial.html

For Node test I used Jest and TS https://basarat.gitbooks.io/typescript/docs/testing/jest.html
https://blog.codeship.com/testing-http-apis-supertest/
https://www.npmjs.com/package/supertest-as-promised
https://mherman.org/blog/building-a-restful-api-with-node-and-flow/
https://medium.com/@ryanblahnik/setting-up-testing-with-jest-and-node-js-b793f1b5621e
