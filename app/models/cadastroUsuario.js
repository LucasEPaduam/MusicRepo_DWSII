module.exports = {
addUser:(user, dbConnection, callback) => {
    const sql = `insert into users (nome, email, password) VALUES ("${user.nome}", "${user.email}", "${user.password}");`;
    dbConnection.query(sql, callback);
}
}