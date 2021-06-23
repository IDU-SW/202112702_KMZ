import Sequelize from "sequelize";
const db = {};
const todo = new Sequelize("nodejstodo", "admin", "cometrue", {
  host: "database-1.c2mjemzrowef.ap-northeast-2.rds.amazonaws.com",
  dialect: "mysql", //사용할 데이터베이스 종류
  dialectOptions: { charset: "utf8mb4", dateStrings: true, typeCast: true },
  timezone: "+09:00",
});

db.Todo = require("./Todo")(todo, Sequelize);
db.TodoGroup = require("./TodoGroup")(todo, Sequelize);

db.sequelize = todo;
db.Sequelize = Sequelize;
todo.sync();

module.exports = db;
