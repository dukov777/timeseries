# TimeSeries With influxDB, node and Typescript
Test project with influxdb, typescript and node

InfluxDB https://docs.influxdata.com/influxdb/v1.7/

### Install influxDB 
How to install https://docs.influxdata.com/influxdb/v1.7/introduction/installation/

```console
curl -sL https://repos.influxdata.com/influxdb.key | sudo apt-key add -
source /etc/lsb-release
echo "deb https://repos.influxdata.com/${DISTRIB_ID,,} ${DISTRIB_CODENAME} stable" | sudo tee /etc/apt/sources.list.d/influxdb.list

sudo apt-get update && sudo apt-get install influxdb
sudo service influxdb start
```

To write this code I used https://node-influx.github.io/manual/tutorial.html

For Node test I used Jest and TS https://basarat.gitbooks.io/typescript/docs/testing/jest.html
https://blog.codeship.com/testing-http-apis-supertest/
https://www.npmjs.com/package/supertest-as-promised
https://mherman.org/blog/building-a-restful-api-with-node-and-flow/
https://medium.com/@ryanblahnik/setting-up-testing-with-jest-and-node-js-b793f1b5621e

### Running influx Server
Start server
```console
sudo influxd run
```

### Create manualy the DB and log atleast one record

Connect to server
```console
influx -precision rfc3339 
```

Create database and start use it.
```sql
create database mybd
use mybd
```

Add one measurement in temp timeserie
```sql
insert temp,origin=sofia value=0
select * from temp
```
Add one measurement in temp timeserie
Delete all measurements for `temp` timeserie
```sql
drop measurement temp
```

### Start working with code
How to install
```console
git clone <this repo>
npm install
```
Run server
```console
npm run prod
```

Run tests against server
```console
npm run test
```

You could play around with curl

curl to write record into DB
```console
curl --header "Content-Type: application/json" --request POST --data '{"origin":"XYZ","value":"1"}' http://localhost:3000/temp
```
Read a record
```console
curl http://localhost:3000/origin/XYZ
```
Or read all records
Read a record
```console
curl http://localhost:3000/times
```



