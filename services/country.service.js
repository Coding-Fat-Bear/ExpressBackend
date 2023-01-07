const {Country} = require("../models/");

async function cntrygetallserv(callback){
  await Country.findAll({
        raw : true 
    }).then(cntryall_res => {
        return callback(null,cntryall_res);
    }).catch(err=>{
        if(err){
            console.log(err);
        }
    });

}

module.exports = {
    cntrygetallserv
}