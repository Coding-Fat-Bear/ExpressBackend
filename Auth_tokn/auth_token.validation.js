const { verify } = require("jsonwebtoken");
const authorization = require("../services/authorization.service");

let auth_para =  {
    LOGINID: undefined,
    APPMASTER : undefined,
    AUTHFLG :undefined
};

module.exports = {
    authcheckToken:(req,res,next)=>{
        let token = req.get("authorization");
        if(token){
            token = token.slice(7);
            verify(token,process.env.Token_key,(err,decoded)=>{
                console.log("decoded ="+JSON.stringify(decoded.result.LOGINID));
                res.user =  decoded.result.LOGINID;
                console.log(res.user);
                const id = req.params.id
                console.log(req.params.id);
                if(err){
                    return res.json({
                        success:0,
                        message: "Invalid token"
                    })
                }else{
                    if (res.user == id) {
                        auth_para.LOGINID = req.params.id;
                        auth_para.APPMASTER = req.params.APPMASTER;
                        auth_para.AUTHFLG = req.params.AUTHFLG;

                        authorization.appmasterauth_check(auth_para,(err,result)=>{
                            if(err){
                                console.log(err);
                                return res.status(500).json({
                                    sucess: 0,
                                    message:"Dont have access"
                                });
                            }
                            else{
                                console.log('auth');
                                console.log(result.length);
                                if(result.length == 0){
                                    console.log("no access");
                                    return res.json({
                                        success: 0,
                                        message: "Dont have access"
                                    })
                                }else{
                                    console.log("have access");
                                    next();
                                }
                            }
                        })
                        
                    } else {
                        console.log("no access");
                        res.json({
                            success: 0,
                            message: "Dont have access"
                        })
                    }
                    
                }
            })
        }else{
            res.json({
                success:0,
                message: "Access denied! Unauthorized user"
            })
        }
    }
}