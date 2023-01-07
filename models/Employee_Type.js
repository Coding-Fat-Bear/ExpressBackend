const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Employee_Type', {
    EMPTYP: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true
    },
    EMTY_TEXT: {
      type: DataTypes.STRING(45),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Employee_Type',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "EMPTYP" },
        ]
      },
    ]
  });
};
