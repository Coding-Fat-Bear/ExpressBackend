const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('EMP_MST', {
    EMPCOD: {
      type: DataTypes.MEDIUMINT,
      allowNull: false,
      primaryKey: true
    },
    CCOD: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    EMPNAM: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    EMPDOB: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    GENDER: {
      type: DataTypes.STRING(1),
      allowNull: true
    },
    ADDNO: {
      type: DataTypes.MEDIUMINT,
      allowNull: true
    },
    BIZID: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    DPTCOD: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    EMPTYP: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    QUALI: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    BANCOD: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    RANKCOD: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    MODUL: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    SPLNGID: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    PGMLANG: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    EXSAP: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    EXPIT: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    RESERV: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    BASSAL: {
      type: DataTypes.DECIMAL(11,2),
      allowNull: true
    },
    INCNT: {
      type: DataTypes.DECIMAL(11,2),
      allowNull: true
    },
    BONUS: {
      type: DataTypes.DECIMAL(11,2),
      allowNull: true
    },
    SOCINS: {
      type: DataTypes.DECIMAL(11,2),
      allowNull: true
    },
    HELINS: {
      type: DataTypes.DECIMAL(11,2),
      allowNull: true
    },
    STATBEN: {
      type: DataTypes.DECIMAL(11,2),
      allowNull: true
    },
    CONALW: {
      type: DataTypes.DECIMAL(11,2),
      allowNull: true
    },
    HRALW: {
      type: DataTypes.DECIMAL(11,2),
      allowNull: true
    },
    TAX: {
      type: DataTypes.DECIMAL(11,2),
      allowNull: true
    },
    PENSION: {
      type: DataTypes.DECIMAL(11,2),
      allowNull: true
    },
    LOAN: {
      type: DataTypes.DECIMAL(11,2),
      allowNull: true
    },
    BILRATE: {
      type: DataTypes.DECIMAL(11,2),
      allowNull: true
    },
    ACTSTRDT: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    ACTENDT: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    STREET1: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    STREET2: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    STREET3: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    CITY: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    STATE: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    CNTRY: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    PINCODE: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    PHONE1: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    PHONE2: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    FAXNO: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    EMAIL: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    LNGID: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    TZONE: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    USERNAME: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    PASSWORD: {
      type: DataTypes.STRING(500),
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
    tableName: 'seq_temp',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "EMPCOD" },
        ]
      },
    ]
  });
};
