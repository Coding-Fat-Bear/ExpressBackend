const{time_sheet} = require("../Models");


async function createtimesheet (req) {
    console.log("servies");
    console.log(req);
    return data = await time_sheet.create(req).catch(err =>{
    console.log("error"+err);
         })
  }
  async function fetchtimesheet (req) {
    console.log("servies");
    console.log("parm"+req);
    const vWhere = {
        where: {
          LOGINID : "1"
        }
      }
      vWhere.where.LOGINID = req;
    return data = await time_sheet.findOne(vWhere).catch(err =>{
    console.log(err);
         })
  }
  async function updatetimesheet (req) {
    console.log("servies");
    return data = await time_sheet.update(req).catch(err =>{
    console.log(err);
         })
  }

  module.exports = {
    createtimesheet,
    fetchtimesheet,
    updatetimesheet
}