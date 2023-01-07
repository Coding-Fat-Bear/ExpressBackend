const {EMP_MST} = require("../models");
const {sequelize} = require("sequelize");

// employee get starts****
async function empgetserv(req,callback){
    let sql = "CALL employeeget("+req+")";
    let get_res = await EMP_MST.sequelize.query(sql).catch(err=>{
        if(err){
            console.log(err);
        }
    }).catch(res=>{
        if(res){
            console.log(res);
        }
    })
    console.log(get_res.length == 0);
    if(get_res.length == 0){
        get_res = "Employee "+req+" doesnot exist";
        let callres = {
            success: 0,
            data: get_res
        };
        console.log(get_res.length);
        return callback(null,callres);
    }else{  
        if (get_res[0].chktxt == undefined){
            let callres1 = {
                success: 1,
                data: get_res[0]
            };
        return callback(null,callres1);
        }else{
            console.log(get_res[0].chktxt);
            let callres2 = {
                success: 0,
                data: get_res[0].chktxt
            };
            return callback(null,callres2);
    }
    }
};
// employee get end****

// employee create starts****
async function empinserv(req,callback){
    let reqobj = Object.values(req); 
    let arry = '';
    reqobj.forEach(element =>{
        arry += ('"'+element+'"'+',');
    })
    let slice_arry = arry.slice(0,-1);
    let sql = "CALL Employee_insert("+slice_arry+");";
    let ins_res = await EMP_MST.sequelize.query(sql).catch(err=>{
        if(err){
            console.log(err);
        }
    })
    if(ins_res.length == 0){
        ins_res = "Employee not created";
        console.log(ins_res.length);
        return callback(null,ins_res);
    }else{
        let shwres = "Employee "+ins_res[0].NEWEMPCOD+" created sucessfully";
        return callback(null,shwres);
    }
};
// employee create end****

// employee update starts****
async function empupserv(req,callback){
    let reqobj = Object.values(req); 
    let arry = '';
    reqobj.forEach(element =>{
        arry += ('"'+element+'"'+',');
    })
    let slice_arry = arry.slice(0,-1);
    console.log(slice_arry);
    let sql = "CALL Employee_Update("+slice_arry+");";
    let upd_res = await EMP_MST.sequelize.query(sql).catch(err=>{
        if(err){
            console.log(err);
        }
    })
    if(upd_res.length == 0){
        upd_res = "Employee not created";
        console.log(upd_res.length);
        return callback(null,upd_res);
    }else{
        
        return callback(null,upd_res[0].succtxt);
    }
}
// employee update end****

// employee delete starts****
async function empdelserv(req,callback){

    let sql = "CALL Employee_delete("+req+");";
    let del_res = await EMP_MST.sequelize.query(sql).catch(err=>{
        if(err){
            console.log(err);
        }
    })
    
    return callback(null,del_res[0].deltxt);
}
// employee delete end****

module.exports ={
    empgetserv,
    empinserv,
    empupserv,
    empdelserv
}
