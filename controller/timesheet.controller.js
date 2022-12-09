const res = require("express/lib/response");
const timesheet = require("../services/Timesheet.service")



async function fetchtimesheet(req,res) {
    const data = await timesheet.fetchtimesheet(1)
    console.log(data.dataValues);
}

async function createtimesheet(req,res) {
    const load = req.body;
    console.log(load);
    res.send("sent");
    const data = await timesheet.createtimesheet(load)
    console.log(data);
}

async function updatetimesheet(req,res) {
    const data = await timesheet.updatetimesheet(req)
    console.log(data);
}

module.exports = {
    fetchtimesheet,
    createtimesheet,
    updatetimesheet
    };