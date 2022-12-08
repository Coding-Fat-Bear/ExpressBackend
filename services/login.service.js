const{Login,Login_Master} = require("../Models");

   async function createLogin (req) {
      console.log("servies");
      // const EID =  req.body;
      return data = await Login_Master.create(req).catch(err =>{
      console.log(err);
           })
    }
    async function createUser (data,callback) {
      console.log("servies");
      console.log(data);
      let error;
      result = await Login_Master.create(data).catch(err =>{
          error = err;
           })
       if (error) {
        console.log("Error" +error);
        return callback(error);
       }else{
        return callback (null,result.dataValues)
       }
        
    }
    
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

    async function getbyUname(username,callback){
      console.log(username);
      const vWhere = {
        where: {
          USERNAME : "SomeName"
        }
      }
      vWhere.where.USERNAME = username;
      
      result = await Login_Master.findOne(vWhere).catch(err =>{
        return err;
           })
           console.log("result  :  "+result);
           try {
            return callback (null,result.dataValues)
           } catch (error) {
              return callback (error)
           }
      
      }

    

  module.exports = {
        createLogin,
        fetchLogin,
        getbyUname,
        createUser
    }
    // exports.createLogin = 
    //     createLogin ;