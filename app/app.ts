// lib/app.ts
import express = require('express');
let config = require("./Test");
// import {portNumber} from "./Test"

// Create a new express application instance
const app: express.Application = express();
// let port: number = portNumber;

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(config.portNumber, function () {
  console.log('Example app listening on port 3000!');
});

class Student {
    full_name: string;
    constructor(public name:string) {
        this.full_name = name;
    }
}
