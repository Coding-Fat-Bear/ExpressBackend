const {Rank_emp} = require("../models");

async function rnkempgetallserv(callback){
    await Rank_emp.findAll({
          raw : true 
      }).then(rnkall_res => {
          return callback(null,rnkall_res);
      }).catch(err=>{
          if(err){
              console.log(err);
          }
      });
  
  }
  
  module.exports = {
    rnkempgetallserv
  }