const {Bank} = require("../models");

async function bnkgetallserv(callback){
  await Bank.findAll({
        raw : true 
    }).then(bnkall_res => {
        return callback(null,bnkall_res);
    }).catch(err=>{
        if(err){
            console.log(err);
        }
    });

}

module.exports = {
    bnkgetallserv
}