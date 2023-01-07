const {Module} = require("../models");

async function modugetallserv(callback){
    await Module.findAll({
          raw : true 
      }).then(modall_res => {
          return callback(null,modall_res);
      }).catch(err=>{
          if(err){
              console.log(err);
          }
      });
  
  }
  
  module.exports = {
    modugetallserv
  }