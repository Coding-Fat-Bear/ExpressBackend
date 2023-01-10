const router = require("express").Router();
const pgmlngcnt = require("../controller/pgm_lngu.controller");
const { checkToken } = require("../Auth_tokn/token.validation");

router.get("/pgmlnggetall/:id",checkToken,pgmlngcnt.pgmlnggetallcont);

module.exports = router;