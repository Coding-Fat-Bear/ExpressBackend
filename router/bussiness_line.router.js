const router = require("express").Router();
const bslncnt = require("../controller/bussiness_line.controller");
const { checkToken } = require("../Auth_tokn/token.validation");

router.get("/bslngetall/:id",checkToken,bslncnt.bslngetallcont);

module.exports = router;