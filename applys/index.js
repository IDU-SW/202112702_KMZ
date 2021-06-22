const router = require("express").Router();
const { apply } = require("./apply.js");

router.get("/", apply.list);
router.post("/add", apply.add);
router.put("/update", apply.complete);
router.delete("/delete", apply.deleteApply);

module.exports = router;
