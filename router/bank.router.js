const router = require("express").Router();
const bankcnt = require("../controller/bank.controller");
const { checkToken } = require("../Auth_tokn/token.validation");

router.get("/bnkgetall/:id",checkToken,bankcnt.bnkgetallcont);

module.exports = router;