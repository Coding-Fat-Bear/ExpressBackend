import mysql from 'mysql2/promise';

const connection = await mysql.createPool({
    host : 'agn.db.mysql.agnieindia.com',
    user : 'db_user',
    password : 'AgnChennai@2021',
    database : 'agnieportal',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

export async function getLoginById (LOGINID) {
    return await connection.execute('SELECT * FROM `Login_Master` WHERE LOGINID = ?  ',[LOGINID]);
}

export async function getLoginAll () {
    return await connection.execute('SELECT * FROM `Login_Master` ');
    }

export async function delLoginById (LOGINID) {
    return await connection.execute('DELETE FROM `Login_Master` WHERE (`LOGINID` = ?)',[LOGINID]);
}


export async function createLogin (EMPCOD,USERNAME,PASSWORD) {
    return await connection.execute('INSERT INTO `Login_Master` (`EMPCOD`, `USERNAME`, `PASSWORD`) VALUES (?,?,?)',[EMPCOD,USERNAME,PASSWORD]);
}
export async function updateLogin (LOGINID,USERNAME,PASSWORD) {
    return await connection.execute('UPDATE `Login_Master`  SET `USERNAME` = ?, `PASSWORD` = ? ' ,[LOGINID,USERNAME,PASSWORD]);
}


