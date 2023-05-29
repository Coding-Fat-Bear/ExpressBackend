const express = require('express');
const router = express.Router();
const inquiryController = require("../controller/inquiry.controller");
router.get("/fetchInq/:id/:APPMASTER/:AUTHFLG/:INQNO",inquiryController.fetchInq);
router.put("/updateInq/:id/:APPMASTER/:AUTHFLG",inquiryController.updateInq);
router.delete("/deleteInq/:id/:APPMASTER/:AUTHFLG/:INQNO",inquiryController.deleteInq);
router.post("/createInq/:id/:APPMASTER/:AUTHFLG",inquiryController.createInq);

module.exports = router;