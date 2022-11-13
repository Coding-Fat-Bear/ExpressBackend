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

export async function getLoginById (i) {
    return await connection.execute('SELECT * FROM `Login_Master` WHERE LOGINID = ?  ',i);
}

export async function getLoginAll () {
    return await connection.execute('SELECT * FROM `Login_Master` ');
    }

export async function delLoginById (i) {
    return await connection.execute('DELETE FROM `Login_Master` WHERE (`LOGINID` = ?)',i);
}


export async function createLogin (i) {
    return await connection.execute('INSERT INTO `Login_Master` (`LOGINID`, `EMPCOD`, `USERNAME`, `PASSWORD`) VALUES (?,?,?,?)',i);
}
export async function updateLogin (i) {
    return await connection.execute('UPDATE `Login_Master`  SET `USERNAME` = ?, `PASSWORD` = ?, `EMPCOD` = ? ' ,i);
}

let result = await delLoginById([12])
console.log(result);

