const express = require('express');
const router = express.Router();
const pmController = require("../controller/pm.controller");
router.get("/fetchpm",pmController.fetchpm);
router.put("/updatepm",pmController.updatepm);
router.delete("/deletepm",pmController.deletepm);
router.post("/createpm",pmController.createpm);

module.exports = router;