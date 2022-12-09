const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('time_sheet', {
    LOGINID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Login_Master',
        key: 'LOGINID'
      }
    },
    tsdate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    checkin: {
      type: DataTypes.DATE,
      allowNull: true
    },
    checkout: {
      type: DataTypes.DATE,
      allowNull: true
    },
    totalhours: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    btend: {
      type: DataTypes.DATE,
      allowNull: true
    },
    timeid: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    btstart: {
      type: DataTypes.DATE,
      allowNull: true
    },
    breakflag: {
      type: DataTypes.CHAR(1),
      allowNull: true
    },
    comment: {
      type: DataTypes.STRING(7999),
      allowNull: true
    },
    temp: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    otstart: {
      type: DataTypes.DATE,
      allowNull: true
    },
    otend: {
      type: DataTypes.DATE,
      allowNull: true
    },
    otbtstart: {
      type: DataTypes.DATE,
      allowNull: true
    },
    otbtend: {
      type: DataTypes.DATE,
      allowNull: true
    },
    daytype: {
      type: DataTypes.STRING(45),
      allowNull: true,
      defaultValue: "none"
    }
  }, {
    sequelize,
    tableName: 'time_sheet',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "timeid" },
        ]
      },
      {
        name: "timeid_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "timeid" },
        ]
      },
      {
        name: "_idx",
        using: "BTREE",
        fields: [
          { name: "LOGINID" },
        ]
      },
    ]
  });
};
