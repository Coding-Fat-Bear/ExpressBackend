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

export async function getEmployeeById (EmployeeID) {
    return await connection.execute('SELECT * FROM `Employee_Master` WHERE EmployeeID = ?  ',[EmployeeID]);
}

export async function getEmployeeAll () {
    return await connection.execute('SELECT * FROM `Employee_Master` ');
}

export async function delEmployeeById (EmployeeID) {
    return await connection.execute('DELETE FROM `Employee_Master` WHERE (`EmployeeID` = ?)',[EmployeeID]);
}

export async function createEmployee (EMPCOD,USERNAME,PASSWORD) {
    return await connection.execute('INSERT INTO `Employee_Master` (`EMPCOD`, `USERNAME`, `PASSWORD`) VALUES (?,?,?)',[EMPCOD,USERNAME,PASSWORD]);
}
export async function updateEmployee (EmployeeID,USERNAME,PASSWORD) {
    return await connection.execute('UPDATE `Employee_Master`  SET `USERNAME` = ?, `PASSWORD` = ? WHERE (`EmployeeID` = ?)' ,[USERNAME,PASSWORD,EmployeeID]);
}
