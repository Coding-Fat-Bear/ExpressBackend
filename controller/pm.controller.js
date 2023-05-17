const pm = require("../services/pm.service.js")


async function fetchpm(req,res){
    console.log("controller");
    const data = await pm.fetchpm(req)
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
};

async function createpm(req,res) {
    const load = req.body;
    const data = await pm.createpm(load)
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

async function updatepm(req,res) {
    const data = await pm.updatepm(req)
    console.log("controller");
    console.log(data);
    try {
        console.log("updated");
        res.send("Updated");
        // console.log(data.dataValues);
        // res.send(data);
    } catch (error) {
        console.log("Not Updated");
        res.json({
            error : data.original.sqlMessage
          })
    }
    
}

async function deletepm(req,res) {
    const data = await pm.deletepm(req)
    console.log("controller");
    console.log(data);
    if(data == 1 ){
        res.send("Deleted");
        console.log("Not Deleted");
    }else{
        res.send("Not Deleted");
        console.log("Deleted");
    }
    
}

module.exports = {
    fetchpm,
    createpm,
    updatepm,
    deletepm
    };