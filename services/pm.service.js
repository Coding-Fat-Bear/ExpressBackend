const{Project_Master} = require("../models");


async function fetchpm(req){
    console.log(req.body);
    let error ;
    const vWhere = {
        where: {
          PRJNO : req.body.PRJNO
        }
      }
    //   data = await Project_Master.findOne
    data = await Project_Master.findOne(vWhere).catch(err =>{
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

async function createpm (req) {
    console.log("servies");
    console.log(req);
    let error ;
     data = await Project_Master.create(req).catch(err =>{
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

  async function updatepm (req) {
    console.log("servies");
    let error ;
    console.log(req.body);
    const vWhere = {
      where: {
        PRJNO : req.body.PRJNO
      }
    }
      console.log(vWhere); 
    console.log("servies");
    delete req.body.PRJNO;
    console.log(req.body);
    console.log("hardcode");
    console.log({
      "PRJNO": "PRJ06",
      "PRJDES": "test26"
    });
    data = await Project_Master.update(req.body,vWhere).catch(err =>{
      // data = await Project_Master.update(req.body,{where: {
      //   "PRJNO": "PRJ06"
      // }}).catch(err =>{
        console.log("err");
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
  async function deletepm (req) {
    console.log("servies");
    console.log(req);
    let error ;
    const vWhere = {
        where: {
          PRJNO : req.body.PRJNO
        }
      }
      
    console.log("servies");
    data = await Project_Master.destroy(vWhere).catch(err =>{
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
    fetchpm,
    createpm,
    updatepm,
    deletepm
}