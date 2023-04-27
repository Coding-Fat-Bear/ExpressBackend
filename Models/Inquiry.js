const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Inquiry', {
    INQNO: {
      autoIncrement: true,
      type: DataTypes.MEDIUMINT,
      allowNull: false,
      primaryKey: true
    },
    CCOD: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    EMPNO: {
      type: DataTypes.MEDIUMINT,
      allowNull: true
    },
    ASSNPER: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    BIZID: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    MODUL: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    LNGID: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    FRMDT: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    TODT: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    POSBPER: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    PRJDES: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    PRJSTS: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    PHASEID: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    ESTMAMT: {
      type: DataTypes.DECIMAL(12,2),
      allowNull: true
    },
    CURR: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    TAX: {
      type: DataTypes.DECIMAL(12,2),
      allowNull: true
    },
    UNIT: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    QTY: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    RATE: {
      type: DataTypes.DECIMAL(12,2),
      allowNull: true
    },
    CUSTNO: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    EUSRNO: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    CUSTINFO: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    REMARKS: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    ACTFLG: {
      type: DataTypes.STRING(1),
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
    tableName: 'Inquiry',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "INQNO" },
        ]
      },
    ]
  });
};
