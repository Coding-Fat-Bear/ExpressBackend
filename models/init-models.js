var DataTypes = require("sequelize").DataTypes;
var _Project_Master = require("./Project_Master");

function initModels(sequelize) {
  var Project_Master = _Project_Master(sequelize, DataTypes);


  return {
    Project_Master,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
