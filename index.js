const router = require("express").Router();

const aplly = require("./applys");

router.use("/apply", aplly);

module.exports = router;
