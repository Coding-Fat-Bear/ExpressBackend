  const express = require('express');
  const router = express.Router();
const loginController = require("../controller/login.controller");
const { checkToken } = require("../auth/token.validation");
    router.post("/create",loginController.createLogin)
    // router.get("/fetch/:id",checkToken,loginController.fetch)
    router.get("/fetch/:id",checkToken,loginController.fetch)
    router.post("/login",loginController.generateToken);
module.exports = router;
