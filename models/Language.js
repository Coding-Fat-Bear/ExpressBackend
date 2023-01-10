const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Language', {
    LNGID: {
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true
    },
    LNG_TEXT: {
      type: DataTypes.STRING(45),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Language',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "LNGID" },
        ]
      },
    ]
  });
};
