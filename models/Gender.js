const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Gender', {
    GENDER: {
      type: DataTypes.STRING(1),
      allowNull: false,
      primaryKey: true
    },
    GEN_TEXT: {
      type: DataTypes.STRING(45),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Gender',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "GENDER" },
        ]
      },
    ]
  });
};
