import express = require('express');
import { portNumber } from "./Config";
import { TimeSeries } from "./TimeSeries";

const ts = new TimeSeries();
const app: express.Application = express();

app.use(express.json());       // to support JSON-encoded bodies

app.get('/', function (req, res) {
  res.send('Time seriel crud!');
});

app.post('/temp', function (req, res) {
  ts.write(req.body.origin, req.body.value)
    .then((err: any) => {
      res.json({ status: "ok" })
    })
    .catch((err: any) => {
      res.status(500).send("Error wrong parameters!")
    })
});

app.get('/origin/:id', function (req, res) {
  ts.read(req.params.id)
    .then((result: any) => {
      res.json(result)
    }).catch((err: any) => {
      res.status(500).send(err.stack)
    })
});

app.get('/times', function (req, res) {
  ts.readAll()
    .then((result: any) => {
      res.json(result)
    }).catch((err: any) => {
      res.status(500).send(err.stack)
    })
});

app.listen(portNumber, function () {
  console.log('Start listening on port ' + portNumber);
});
