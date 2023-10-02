module.exports = {
    autentica: (user, dbConnection, callback) => {
        const sql = `select * from users where nome="${user.nome}" and password="${user.password}";`;
        dbConnection.query(sql, callback);
    }
}
