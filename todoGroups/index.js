const router = require("express").Router();
const todogroup = require("./todogroup").default;

router.get("/", todogroup.list);
router.post("/add", todogroup.add);
router.put("/update", todogroup.complete);
router.get("/intodo", todogroup.intodo);
router.delete("/delete", todogroup.delete);

module.exports = router;
