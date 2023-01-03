
const login = require ("../services/Login.service");
const {genSaltSync, hashSync,compareSync} = require("bcrypt");
const { sign } = require("jsonwebtoken");
    // async function create  (req,res) {
    //   try{
    //       const EID =  req.body;
    //       console.log(EID);
    //       const data =  await login.createLogin(EID);
    //       console.log(data);
    //       res.json ({ message : "success"});
    //   }
    //   catch(err)
    //   {
    //       console.log(err);
    //       res.json({
    //           message : "fail"
    //         })
    //   }
   
    // }

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

    async function generateToken(req,res){
      const body = req.body;
      console.log(body);
      await login.getbyUname(body.USERNAME,(err,result)=>{
          console.log(err);
          if(err){
              console.log(err);
          }
          console.log("here");
          console.log(result);
          if(!result){
              return res.json({
                  success:0,
                  data: "Invalid Username or Password"
              });
          }
          
          const logres = compareSync(body.PASSWORD,result.PASSWORD,(er,re)=>{});
          console.log(logres);
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
      
        });
    }

    async function createLogin (req,res){
      const body = req.body;
      const salt = await genSaltSync(10);
      console.log(body.PASSWORD);
      let hash = await hashSync(body.PASSWORD, salt,(err,hsh)=>{});
      body.PASSWORD = hash;
      login.createUser(body,(err,result)=>{
          if(err){
              console.log("#######Check"+isNaN(err));
              return res.status(500).json({
                  success: 0,
                  message:"Database Connection Error"
              });
          }else{
            console.log("how?");
            result.PASSWORD = "Hashed";
            return res.status(200).json({
              success: 1,
              data: result
          });
          }
      });
    
    }
  module.exports = {
    // create,
    fetch,
    generateToken,
    createLogin
    };




    