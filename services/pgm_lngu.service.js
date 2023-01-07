const {Programming_Language} = require("../models");

async function pgmlnggetallserv(callback){
    await Programming_Language.findAll({
          raw : true 
      }).then(pgmall_res => {
          return callback(null,pgmall_res);
      }).catch(err=>{
          if(err){
              console.log(err);
          }
      });
  
  }
  
  module.exports = {
    pgmlnggetallserv
  }