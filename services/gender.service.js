const {Gender} = require("../models");

async function gengetallserv(callback){
    await Gender.findAll({
          raw : true 
      }).then(genall_res => {
          return callback(null,genall_res);
      }).catch(err=>{
          if(err){
              console.log(err);
          }
      });
  
  }
  
  module.exports = {
    gengetallserv
  }