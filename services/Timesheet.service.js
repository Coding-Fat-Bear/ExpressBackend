const{time_sheet} = require("../Models");


async function createtimesheet (req) {
    console.log("servies");
    console.log(req);
    let error ;
     data = await time_sheet.create(req).catch(err =>{
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
  
  async function fetchtimesheet (req) {
    console.log("servies");
    const id = req.params.id;
    const date = req.params.date;
    let error ;
    const vWhere = {
        where: {
          LOGINID : id,
          tsdate: date,
        }
      }

    vWhere.where.LOGINID = id;
    vWhere.where.tsdate = date;
    data = await time_sheet.findOne(vWhere).catch(err =>{
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

  async function updatetimesheet (req) {
    const body = req.body;
    const id = req.params.id;
    const date = req.params.date;
    let error ;
    const vWhere = {
        where: {
          LOGINID : id,
          tsdate: date,
        }
      }
      
      vWhere.where.LOGINID = id;
      vWhere.where.tsdate = date;
    body.LOGINID =id;
    console.log("servies");
    data = await time_sheet.update(body,vWhere).catch(err =>{
        console.log(err);
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

  module.exports = {
    createtimesheet,
    fetchtimesheet,
    updatetimesheet
}