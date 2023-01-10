const { App_Auth } = require("../models");

async function appmasterauth_check(req,callback){

    let sql = "CALL Authorization_check("+req.LOGINID+",'"+req.APPMASTER+"','"+req.AUTHFLG+"');";
    let auth_res = await App_Auth.sequelize.query(sql).catch(err=>{
        return callback(err);
    })
    console.log('Final');
    console.log(auth_res);
    return callback(null,auth_res);

}

module.exports = {
    appmasterauth_check
}