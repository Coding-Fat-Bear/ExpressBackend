const {Language} = require("../models");

async function lngugetallserv(callback){
    await Language.findAll({
          raw : true 
      }).then(lngall_res => {
          return callback(null,lngall_res);
      }).catch(err=>{
          if(err){
              console.log(err);
          }
      });
  
  }
  
  module.exports = {
    lngugetallserv
  }