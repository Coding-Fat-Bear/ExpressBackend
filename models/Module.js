const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Module', {
    MODUL: {
      type: DataTypes.STRING(4),
      allowNull: false,
      primaryKey: true
    },
    MOD_TEXT: {
      type: DataTypes.STRING(45),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Module',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "MODUL" },
        ]
      },
    ]
  });
};
