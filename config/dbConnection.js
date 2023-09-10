const mysql = require('mysql');

const host = 'localhost';
const database = 'musicrepo';
const user = 'root';
const password = '';

module.exports = () => {
    console.log('entrou em login');
    return dbConn = mysql.createConnection({
        host: host,
        user: user,
        password: password,
        database: database        
    });
}
