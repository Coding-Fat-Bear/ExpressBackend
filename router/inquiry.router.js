const express = require('express');
const router = express.Router();
const inquiryController = require("../controller/inquiry.controller");
router.get("/fetchInq",inquiryController.fetchInq);
router.put("/updateInq",inquiryController.updateInq);
router.delete("/deleteInq",inquiryController.deleteInq);
router.post("/createInq",inquiryController.createInq);

module.exports = router;