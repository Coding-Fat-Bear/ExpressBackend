var DataTypes = require("sequelize").DataTypes;
var _Inquiry = require("./Inquiry");

function initModels(sequelize) {
  var Inquiry = _Inquiry(sequelize, DataTypes);


  return {
    Inquiry,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
