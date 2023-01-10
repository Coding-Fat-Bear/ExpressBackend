const { verify } = require("jsonwebtoken");

module.exports = {
    checkToken:(req,res,next)=>{
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
                    res.json({
                        success:0,
                        message: "Invalid token"
                    })
                }else{
                    if (res.user == id) {
                        console.log("have access");
                        next();
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