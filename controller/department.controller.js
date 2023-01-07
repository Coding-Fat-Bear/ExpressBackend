const deptsrv = require("../services/department.service");

async function deptgetallcont(req,res){

    await deptsrv.deptgetallserv((err,result)=>{
        if(err){
            console.log(err);
            return res.status(500).json({
                sucess: 0,
                message:"Database Connection Error"
            });
        }
        else{
            return res.status(200).json({
                success: 1,
                data: result
            });
        }
    })
}

module.exports = {
    deptgetallcont
}