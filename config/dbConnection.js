const mysql = require('mysql2');

const host = 'localhost';
const database = 'musicrepo';
const user = 'root';
const password = 'Fifa$2Pince$#@';

module.exports = () => {
    return dbConn = mysql.createConnection({
        host: host,
        user: user,
        password: password,
        database: database        
    });
}
