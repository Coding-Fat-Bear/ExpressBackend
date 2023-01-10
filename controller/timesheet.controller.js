
const timesheet = require("../services/Timesheet.service")



async function fetchtimesheet(req,res) {
    console.log("controller");
    const data = await timesheet.fetchtimesheet(req)
    try {
       console.log(1);
            console.log(data.dataValues);
             res.send(data);
        
    } 
    catch (error) {
        console.log(2);
        console.log(data);
        res.json({
            error : "no such id exist"
          })
    }
}

async function createtimesheet(req,res) {
    const load = req.body;
    const data = await timesheet.createtimesheet(load)
    console.log("controller");
    try {
        console.log(data.dataValues);
        res.send(data);
    } catch (error) {
        res.json({
            error : data.original.sqlMessage
          })
    }
}

async function updatetimesheet(req,res) {
    const data = await timesheet.updatetimesheet(req)
    console.log("controller");
    console.log(data);
    try {
        console.log(data.dataValues);
        res.send(data);
    } catch (error) {
        res.json({
            error : data.original.sqlMessage
          })
    }
    
}
async function fetchAlltimesheet(req,res){
    const data = await timesheet.fetchMonthTimesheet(req)
    console.log("controller");
    console.log(data);
    if (data == "error") {
        res.json({
            error :" no data exist"
          })
    } else {
        res.send(data);
    }
}

module.exports = {
    fetchtimesheet,
    createtimesheet,
    updatetimesheet,
    fetchAlltimesheet
    };