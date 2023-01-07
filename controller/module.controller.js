const modusrv = require("../services/module.service");

async function modugetallcont(req,res){
    await modusrv.modugetallserv((err,result)=>{
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
    modugetallcont
}