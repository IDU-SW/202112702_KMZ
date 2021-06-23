import express from "express";
import mysql from "mysql";
import "./models";

const storageConnection = mysql.createConnection({
  host: "database-1.c2mjemzrowef.ap-northeast-2.rds.amazonaws.com",
  user: "admin",
  password: "cometrue",
  port: 3306,
  database: "nodejstodo",
  timezone: "+09:00",
  dateStrings: "date",
});

storageConnection.connect((err) => {
  if (err) {
    return;
  }
  storageConnection.end();
});

const router = require("./index");

const app = express(); //express 사용

app.use(express.json());
app.use("/", router);

app.listen({ port: 3000 }, () => console.log(`Listening on port 4000!`));
