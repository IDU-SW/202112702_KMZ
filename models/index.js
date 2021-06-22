const Sequelize = require("sequelize");

const db = {};
const apply = new Sequelize("apply", "admin", "admin1234", {
  host: "database-1.cedcgarzagog.us-east-2.rds.amazonaws.com",
  dialect: "mysql",
  dialectOptions: { charset: "utf8mb4", dateStrings: true, typeCast: true },
  timezone: "+09:00",
});

db.Apply = require("./Apply.js")(apply, Sequelize);

db.sequelize = apply;
db.Sequelize = Sequelize;
apply.sync();

module.exports = db;
