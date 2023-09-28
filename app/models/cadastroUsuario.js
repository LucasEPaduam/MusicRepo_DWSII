module.exports = {
addUser:(user, dbConnection, callback) => {
    console.log('[Model da Home]');
    const sql = `insert into users (nome, email, password) VALUES ("${user.nome}", "${user.email}", "${user.password}");`;
    dbConnection.query(sql, callback);
}
}