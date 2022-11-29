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

export async function getTimesheetById (LOGINID,TSDATE) {
    return await connection.execute('SELECT * FROM `timesheet` WHERE LOGINID = ? AND TSDATE = ? ',[LOGINID,TSDATE]);
}

export async function createTimesheetById (LOGINID,TSDATE,CHECKIN,CHECKOUT) {
    return await connection.execute('INSERT INTO `timesheet` (`loginid`,`tsdate`,`checkin`,`checkout`) VALUES (?,?,?,?)',[LOGINID,TSDATE,CHECKIN,CHECKOUT]);
}
export async function updateTimesheetById (LOGINID,USERNAME,PASSWORD) {
    return await connection.execute('UPDATE `Login_Master`  SET `USERNAME` = ?, `PASSWORD` = ? WHERE (`LOGINID` = ?)' ,[USERNAME,PASSWORD,LOGINID]);
}
