const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('App_Auth', {
    LOGINID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    APPMASTER: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    AUTHFLG: {
      type: DataTypes.STRING(4),
      allowNull: true
    }

  },
  {
    sequelize,
    tableName: 'App_Auth',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "LOGINID" },
        ]
      },
    ]
  })
}