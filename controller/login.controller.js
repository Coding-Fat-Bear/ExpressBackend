const login = require("../services/login.service");
const { sign } = require("jsonwebtoken");

const { genSaltSync,hashSync,compareSync } = require("bcrypt");


async function createlogin(req,res){
    const body = req.body;
        const salt = await genSaltSync(10);
        let hash =await hashSync(body.PASSWORD, salt,(err,hsh)=>{});
        body.PASSWORD= hash;
        await login.createuser(body,(err,result)=>{
            if(err){
                console.log(err);
                return res.status(500).json({
                    sucess: 0,
                    message:"Database Connection Error"
                });
            }
            else{
                result.PASSWORD = "Encoded"
                return res.status(200).json({
                    success: 1,
                    data: result
                });
            }
        })
};

// login with Token generation starts
async function logintokencont(req,res){
    const body = req.body;

    await login.logintokensrv(body.USERNAME,(err,result)=>{
        if(err){
            console.log(err);
        }
        if(!result){
            return res.json({
                success:0,
                data: "Invalid Username or Password"
            });
        }

        const logres = compareSync(body.PASSWORD,result.PASSWORD,(er,re)=>{});
          if(logres){
          result.PASSWORD = undefined;
          const jsontoken = sign({result: result},process.env.Token_key,{
              expiresIn: "1h"
          });
          return res.json({
              success:1,
              message:"Login Sucessful",
              LOGINID  : result.LOGINID,
              token:jsontoken
          });
          } else{
              return res.json({
                  success:0,
                  data: "Invalid Username or Password"
              })

          }

    })

}
// login with Token generation end

async function fetch(req,res){
    try {
      const id = req.params.id;
      console.log("the param is "+id);
      const data = await login.fetchLogin(id);
      console.log("data from service is "+ data); 
      console.log(res);
      res.send(data)
    } catch (error) {
      console.log(error);
      res.json({
        message : "fail"
      })
    }
}

module.exports = {
    createlogin,
    logintokencont,
    fetch
}