const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Department', {
    DPTCOD: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true
    },
    DPT_TEXT: {
      type: DataTypes.STRING(45),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Department',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "DPTCOD" },
        ]
      },
    ]
  });
};
