// const express = require('express');
const router = require("express").Router();
const {createlogin,logintokencont,fetch} = require("../controller/login.controller");
const { checkToken } = require("../Auth_tokn/token.validation");


router.post("/create",createlogin);
router.post("/login",logintokencont);
router.get("/fetch/:id",fetch);

// router.get("/fetch/:id",checkToken,fetch)
module.exports = router;