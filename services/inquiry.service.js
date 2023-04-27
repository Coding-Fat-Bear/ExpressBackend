const{Inquiry} = require("../models");


async function fetchInq(req){
    console.log(req.body);
    let error ;
    const vWhere = {
        where: {
          INQNO : req.body.INQNO,
          EMPNO : req.body.EMPNO,
        }
      }
    //   data = await inquiry.findOne
    data = await Inquiry.findOne(vWhere).catch(err =>{
        error = err;
            })
         if (error) {
             console.log("has error");
             console.log(error);
             return error
         } else {
             console.log("has no error");
             console.log(data);
             return data
         }
}

async function createInq (req) {
    console.log("servies");
    console.log(req);
    let error ;
     data = await Inquiry.create(req).catch(err =>{
          error = err;
         })
    
    if (error) {
    console.log("has error");
    console.log(data);
    return error
    } else {
    console.log("has no error");
    console.log(data);
    return data
    }

  }

  async function updateInq (req) {
    console.log("servies");
    console.log(req);
    let error ;
    const vWhere = {
        where: {
          INQNO : req.body.INQNO,
          EMPNO : req.body.EMPNO,
        }
      }
      
    console.log("servies");
    data = await Inquiry.update(req,vWhere).catch(err =>{
        console.log(err);
        error = err;
         })
         console.log(data);
         if (error) {
          console.log("has error");
          console.log(error);
          return error
          } else {
          console.log("has no error");
          console.log(data);
          return data
      }
  }
  async function deleteInq (req) {
    console.log("servies");
    console.log(req);
    let error ;
    const vWhere = {
        where: {
          INQNO : req.body.INQNO,
          EMPNO : req.body.EMPNO,
        }
      }
      
    console.log("servies");
    data = await Inquiry.destroy(vWhere).catch(err =>{
        // console.log(err);
        error = err;
         })
         console.log(data);
         if (error) {
          console.log("has error");
          console.log(error);
          return error
          } else {
          console.log("has no error");
          console.log(data);
          return data
      }
  }


module.exports = {
    fetchInq,
    createInq,
    updateInq,
    deleteInq
}