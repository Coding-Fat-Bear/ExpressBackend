const router = require("express").Router();
const moducnt = require("../controller/module.controller");
const { checkToken } = require("../Auth_tokn/token.validation");

router.get("/modugetall/:id",checkToken,moducnt.modugetallcont);

module.exports = router;