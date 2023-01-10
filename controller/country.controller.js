const cntrysrv = require("../services/country.service");

async function cntrygetallcont(req,res){

    await cntrysrv.cntrygetallserv((err,result)=>{
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
    cntrygetallcont
}