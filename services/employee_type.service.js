const {Employee_Type} = require("../models");

async function emptypgetallserv(callback){
    await Employee_Type.findAll({
          raw : true 
      }).then(emptypall_res => {
          return callback(null,emptypall_res);
      }).catch(err=>{
          if(err){
              console.log(err);
          }
      });
  
  }
  
  module.exports = {
    emptypgetallserv
  }