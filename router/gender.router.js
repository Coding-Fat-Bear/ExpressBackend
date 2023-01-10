const router = require("express").Router();
const gencnt = require("../controller/gender.controller");
const { checkToken } = require("../Auth_tokn/token.validation");

router.get("/gengetall/:id",checkToken,gencnt.gengetallcont);

module.exports = router;