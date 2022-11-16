import mysql from 'mysql2/promise';
import * as dotenv from 'dotenv' 
dotenv.config()
const connection = await mysql.createPool({
    host : process.env.HOST,
    user : process.env.USER,
    password : process.env.PASSWORD,
    database : process.env.DB,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

export async function getTimesheetById (LOGINID) {
    return await connection.execute('SELECT * FROM `Login_Master` WHERE LOGINID = ?  ',[LOGINID]);
}

export async function createTimesheetById (EMPCOD,USERNAME,PASSWORD) {
    return await connection.execute('INSERT INTO `Login_Master` (`EMPCOD`, `USERNAME`, `PASSWORD`) VALUES (?,?,?)',[EMPCOD,USERNAME,PASSWORD]);
}
export async function updateTimesheetById (LOGINID,USERNAME,PASSWORD) {
    return await connection.execute('UPDATE `Login_Master`  SET `USERNAME` = ?, `PASSWORD` = ? WHERE (`LOGINID` = ?)' ,[USERNAME,PASSWORD,LOGINID]);
}
