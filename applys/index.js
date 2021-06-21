const router = require("express").Router();
const apply = require("./apply.js").default;

router.get("/", apply.list);
router.post("/add", apply.add);
router.put("/update", apply.complete);
router.get("/suclist", apply.suclist);
router.delete("/delete", apply.delete);

module.exports = router;
