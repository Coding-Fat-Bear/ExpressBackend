const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Business_Line', {
    BIZID: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true
    },
    BIZ_TEXT: {
      type: DataTypes.STRING(45),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Business_Line',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "BIZID" },
        ]
      },
    ]
  });
};
