import express from "express";
import mysql from "mysql";
import "./models/index.mjs";

const storageConnection = mysql.createConnection({
  host: "ec2-3-143-253-164.us-east-2.compute.amazonaws.com",
  user: "admin",
  password: "admin1234",
  port: 3306,
  database: "apply",
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
