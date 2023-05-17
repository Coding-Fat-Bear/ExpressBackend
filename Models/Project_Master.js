const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Project_Master', {
    PRJNO: {
      type: DataTypes.STRING(9),
      allowNull: false,
      primaryKey: true
    },
    PRJDES: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    BIZID: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    CNTRTYP: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    BPNO: {
      type: DataTypes.MEDIUMINT,
      allowNull: true
    },
    EUSRNO: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    SREPNO: {
      type: DataTypes.MEDIUMINT,
      allowNull: true
    },
    ACMNO: {
      type: DataTypes.MEDIUMINT,
      allowNull: true
    },
    FRMDT: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    PRJLIVDT: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    TODT: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    CNTFRMDT: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    CNTTODT: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    EXTFLG: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    DELLOCID: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    DELVRBLID: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    WRKHRS: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    OTHRS: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ACTFLG: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    CREDT: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    CRETIM: {
      type: DataTypes.TIME,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Project_Master',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "PRJNO" },
        ]
      },
    ]
  });
};
