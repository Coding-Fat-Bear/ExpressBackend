const authorization = require("../services/authorization.service");

let auth_para =  {
            LOGINID: undefined,
            APPMASTER : undefined,
            AUTHFLG :undefined
        };

async function authcheckcont(req,res){
    auth_para.LOGINID = req.params.id;
    auth_para.APPMASTER = req.params.APPMASTER;
    auth_para.AUTHFLG = req.params.AUTHFLG;

    await authorization.appmasterauth_check(auth_para,(err,result)=>{
        if(err){
            console.log(err);
             res.status(500).json({
                sucess: 0,
                message:"Database Connection Error"
            });
        }
        else{
            if(result.length > 0){
             return res.status(200).json({
                success: 1,
                data: result
            });
        }else{
            return res.status(200).json({
                success: 0,
                data: result
            });
        }
        }
    })
};

module.exports = {
    authcheckcont
}