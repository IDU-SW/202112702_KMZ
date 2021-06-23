const router = require("express").Router();

const todo = require("./todos");
const todoGroup = require("./todoGroups");

router.use("/todo", todo);
router.use("/todogroup", todoGroup);

module.exports = router;
