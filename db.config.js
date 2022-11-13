module.exports = {
    HOST: "agn.db.mysql.agnieindia.com",
    USER: "db_user",
    PASSWORD: "AgnChennai@2021",
    DB: "agnieportal",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };