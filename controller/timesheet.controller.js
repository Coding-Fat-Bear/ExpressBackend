
const timesheet = require("../services/Timesheet.service")



async function fetchtimesheet(req,res) {
    const data = await timesheet.fetchtimesheet(req)
    try {
       
        
            console.log(data.dataValues);
             res.send(data);
        
        
    } 
    catch (error) {
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

module.exports = {
    fetchtimesheet,
    createtimesheet,
    updatetimesheet
    };