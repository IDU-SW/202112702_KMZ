const Sequelize = require("sequelize");

const db = {};
const apply = new Sequelize("apply", "admin", "admin1234", {
  host: "ec2-3-143-253-164.us-east-2.compute.amazonaws.com",
  dialect: "mysql",
  dialectOptions: { charset: "utf8mb4", dateStrings: true, typeCast: true },
  timezone: "+09:00",
});

db.Apply = require("./Apply.js")(apply, Sequelize);

db.sequelize = apply;
db.Sequelize = Sequelize;
apply.sync();

module.exports = db;
