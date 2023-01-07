const router = require("express").Router();
const emptypcnt = require("../controller/employee_type.controller");
const { checkToken } = require("../Auth_tokn/token.validation");

router.get("/emptypgetall/:id",checkToken,emptypcnt.emptypgetallcont);

module.exports = router;