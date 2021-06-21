import express from "express";
import mysql from "mysql";
import "./models/index.js";

const storageConnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "0727",
  port: 3306,
  database: "salon",
  timezone: "+09:00",
  dateStrings: "date",
});

storageConnection.connect((err) => {
  if (err) {
    return;
  }
  storageConnection.end();
});

const router = require("./index.js");

const app = express(); //express 사용

app.use(express.json());
app.use("/", router);

app.listen({ port: 3000 }, () => console.log(`Listening on port 3000!`));
