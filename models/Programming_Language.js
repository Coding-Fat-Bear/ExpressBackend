const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Programming_Language', {
    PGMLANG: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true
    },
    PGLN_TEXT: {
      type: DataTypes.STRING(45),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Programming_Language',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "PGMLANG" },
        ]
      },
    ]
  });
};
