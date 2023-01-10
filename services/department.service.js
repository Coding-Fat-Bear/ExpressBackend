const {Department} = require("../models");

async function deptgetallserv(callback){
    await Department.findAll({
          raw : true 
      }).then(deptall_res => {
          return callback(null,deptall_res);
      }).catch(err=>{
          if(err){
              console.log(err);
          }
      });
  
  }
  
  module.exports = {
    deptgetallserv
  }