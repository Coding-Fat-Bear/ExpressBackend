var DataTypes = require("sequelize").DataTypes;
var _Rank_emp = require("./Rank_emp");

function initModels(sequelize) {
  var Rank_emp = _Rank_emp(sequelize, DataTypes);


  return {
    Rank_emp,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
