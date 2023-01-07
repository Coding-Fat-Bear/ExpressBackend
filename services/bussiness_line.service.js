const {Business_Line} = require("../models");

async function bslngetallserv(callback){
    await Business_Line.findAll({
          raw : true 
      }).then(bslnall_res => {
          return callback(null,bslnall_res);
      }).catch(err=>{
          if(err){
              console.log(err);
          }
      });
  
  }
  
  module.exports = {
    bslngetallserv
  }