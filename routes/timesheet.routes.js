const express = require('express');
const router = express.Router();
const timesheetController = require("../controller/timesheet.controller");
router.post("/create/:id",timesheetController.createtimesheet)
router.get("/fetch/:id",timesheetController.fetchtimesheet)
router.get("/update/:id",timesheetController.updatetimesheet)
module.exports = router;