const router = require("express").Router();
const todo = require("./todo").default;

router.get("/", todo.list);
router.post("/add", todo.add);
router.put("/update", todo.complete);
router.get("/suclist", todo.suclist);
router.delete("/delete", todo.delete);

module.exports = router;
