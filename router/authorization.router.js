const router = require("express").Router();
const authorization = require("../controller/authorization.controller");
const { checkToken } = require("../Auth_tokn/token.validation");

router.get("/auth_chk/:id&:APPMASTER&:AUTHFLG",checkToken,authorization.authcheckcont);


module.exports = router;