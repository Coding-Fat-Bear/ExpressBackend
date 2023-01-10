const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Rank_emp', {
    RANKCOD: {
      type: DataTypes.STRING(2),
      allowNull: false,
      primaryKey: true
    },
    RNK_TEXT: {
      type: DataTypes.STRING(45),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Rank_emp',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "RANKCOD" },
        ]
      },
    ]
  });
};
