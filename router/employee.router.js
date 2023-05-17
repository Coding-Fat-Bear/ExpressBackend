const express = require('express');
const router = require("express").Router();
const employee = require("../controller/employee.controller");
const { authcheckToken } = require("../Auth_tokn/auth_token.validation");

router.post("/empins",authcheckToken,employee.empincont);
router.get("/empget/:id/:APPMASTER/:AUTHFLG/:EMPCOD",authcheckToken,employee.empgetcont);
router.put("/empupd",authcheckToken,employee.empupcont);
router.delete("/empdel",authcheckToken,employee.empdelcont);


module.exports = router;