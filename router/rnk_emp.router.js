const router = require("express").Router();
const rnkempcnt = require("../controller/rnk_emp.controller");
const { checkToken } = require("../Auth_tokn/token.validation");

router.get("/rnkempgetall/:id",checkToken,rnkempcnt.rnkempgetallcont);

module.exports = router;