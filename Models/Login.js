
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Login', {
    LOGINID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    USERNAME: {
      type: DataTypes.STRING(45),
      allowNull: false,
      primaryKey: true
    },
    PASSWORD: {
      type: DataTypes.STRING(45),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Login',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "LOGINID" },
          { name: "USERNAME" },
        ]
      },
    ]
  });
};
