import Sequelize from "sequelize";
const db = {};
const apply = new Sequelize("salon", "root", "0727", {
  host: "localhost",
  dialect: "mysql",
  dialectOptions: { charset: "utf8mb4", dateStrings: true, typeCast: true },
  timezone: "+09:00",
});

db.Apply = require("./Apply.js")(apply, Sequelize);

db.sequelize = apply;
db.Sequelize = Sequelize;
apply.sync();

module.exports = db;
