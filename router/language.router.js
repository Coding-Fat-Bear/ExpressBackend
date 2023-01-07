const router = require("express").Router();
const lngcnt = require("../controller/language.controller");
const { checkToken } = require("../Auth_tokn/token.validation");

router.get("/lngugetall/:id",checkToken,lngcnt.lngugetallcont);

module.exports = router;