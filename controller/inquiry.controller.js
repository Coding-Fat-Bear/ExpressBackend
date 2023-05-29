const inquiry = require("../services/inquiry.service.js")


async function fetchInq(req,res){
    console.log("controller");
    const data = await inquiry.fetchInq(req)
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

async function createInq(req,res) {
    const load = req.body;
    const data = await inquiry.createInq(load)
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

async function updateInq(req,res) {
    const data = await inquiry.updateInq(req)
    console.log("controller");
    console.log(data);
    try {
        console.log("updated");
        res.send(data);
        // console.log(data.dataValues);
        // res.send(data);
    } catch (error) {
        console.log("Not Updated");
        res.json({
            error : data.original.sqlMessage
          })
    }
    
}

async function deleteInq(req,res) {
    const data = await inquiry.deleteInq(req)
    console.log("controller");
    console.log(data);
    if(data == 1 ){
        // res.send("Deleted");
        res.json({
            data : "Deleted"
          })
        console.log("Not Deleted");
    }else{
        // res.send("Not Deleted");
        res.json({
            data : "Not Deleted"
          })
        console.log("Deleted");
    }
    
}

module.exports = {
    fetchInq,
    createInq,
    updateInq,
    deleteInq
    };