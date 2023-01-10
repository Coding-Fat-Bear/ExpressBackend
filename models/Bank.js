const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Bank', {
    BANCOD: {
      type: DataTypes.STRING(3),
      allowNull: false,
      primaryKey: true
    },
    BNK_TEXT: {
      type: DataTypes.STRING(45),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Bank',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "BANCOD" },
        ]
      },
    ]
  });
};
