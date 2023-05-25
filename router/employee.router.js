const express = require('express');
const router = require("express").Router();
const employee = require("../controller/employee.controller");
const { authcheckToken } = require("../Auth_tokn/auth_token.validation");


router.post("/empins/:id/:APPMASTER/:AUTHFLG/",authcheckToken,employee.empincont);
router.get("/empget/:id/:APPMASTER/:AUTHFLG/:EMPCOD",employee.empgetcont);
router.put("/empupd/:id/:APPMASTER/:AUTHFLG/",authcheckToken,employee.empupcont);
router.delete("/empdel/:id/:APPMASTER/:AUTHFLG/:EMPCOD",authcheckToken,employee.empdelcont);


module.exports = router;