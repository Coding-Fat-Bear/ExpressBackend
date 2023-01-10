const {Login_Master} = require("../models");


async function createuser(req,callback){
    let reqarr = Object.values(req);
    console.log(reqarr);
    let result = await Login_Master.create(req).catch(err=>{
        console.log(err);
        
    })
    return callback(null,result);
};

// login with Token generation starts
async function logintokensrv(username,callback){
    const vWhere = {
        where: {
          USERNAME : "SomeName"
        }
    }
    vWhere.where.USERNAME = username;

    let result = await Login_Master.findOne(vWhere).catch(err =>{
        return err;
           })
           try {
             return callback (null,result.dataValues)
           } catch (error) {
              return callback (error)
           }

}
// login with Token generation end

async function fetchLogin (id){
    console.log("servies");
    const vWhere = {
        where: {
          LOGINID : "1"
        }
      }
      vWhere.where.LOGINID = id;
    // return data = await Login.findone(vWhere).catch(err =>{
    //   console.log(err);
    //      })
     let data = await Login_Master.findOne(vWhere).catch(err =>{
      console.log(err);
         })
         console.log("there");
         return data;
    }

module.exports ={
    createuser,
    logintokensrv,
    fetchLogin
}
