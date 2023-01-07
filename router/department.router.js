const router = require("express").Router();
const deptcnt = require("../controller/department.controller");
const { checkToken } = require("../Auth_tokn/token.validation");

router.get("/deptgetall/:id",checkToken,deptcnt.deptgetallcont);

module.exports = router;