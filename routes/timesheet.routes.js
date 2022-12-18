const express = require('express');
const router = express.Router();
const timesheetController = require("../controller/timesheet.controller");
router.post("/create/:id",timesheetController.createtimesheet)
router.get("/fetch/:id/:date",timesheetController.fetchtimesheet)
router.put("/update/:id/:date",timesheetController.updatetimesheet)
// router.get("/fetchAll/:id",timesheetController.fetchAlltimesheet)
module.exports = router;