const banksrv = require("../services/bank.service");

async function bnkgetallcont(req,res){

    await banksrv.bnkgetallserv((err,result)=>{
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
    bnkgetallcont
}