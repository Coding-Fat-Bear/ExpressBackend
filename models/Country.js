const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Country', {
    COUNTRY: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true
    },
    CNTR_TEXT: {
      type: DataTypes.STRING(45),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Country',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "COUNTRY" },
        ]
      },
    ]
  });
};