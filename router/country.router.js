const router = require("express").Router();
const cntrycnt = require("../controller/country.controller");
const { checkToken } = require("../Auth_tokn/token.validation");

router.get("/cntrygetall/:id",checkToken,cntrycnt.cntrygetallcont);

module.exports = router;