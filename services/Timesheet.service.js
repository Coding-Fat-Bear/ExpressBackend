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



  async function fetchMonthTimesheet (req) {
    const id = req.params.id;
    const month = req.params.month;
    const year = req.params.year;
    const error = "error";
    console.log("servies");
    const query = `SELECT * FROM agnieportal.time_sheet WHERE MONTH(tsdate) = ${month} AND YEAR(tsdate) = ${year} AND LOGINID = ${id};`
    console.log(query);
    const data = await time_sheet.sequelize.query(query).catch(
      error => {console.log(error);
        return error;});
      if (data[0][0] == undefined) {
        console.log("has no records");
        return error
      }else
      {
        return data[0]
      }
     
         
      }
  

  module.exports = {
    createtimesheet,
    fetchtimesheet,
    updatetimesheet,
    fetchMonthTimesheet
}