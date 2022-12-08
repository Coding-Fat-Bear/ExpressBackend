const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Login_Master', {
    LOGINID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    EMPCOD: {
      type: DataTypes.MEDIUMINT,
      allowNull: false,
      primaryKey: true
    },
    USERNAME: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    PASSWORD: {
      type: DataTypes.STRING(500),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Login_Master',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "LOGINID" },
          { name: "EMPCOD" },
        ]
      },
      {
        name: "EMPCOD_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "EMPCOD" },
        ]
      },
    ]
  });
};
