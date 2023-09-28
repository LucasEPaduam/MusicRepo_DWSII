module.exports = {
    autentica: (user, dbConnection, callback) => {
        console.log('[Model da Login]', user);
        const sql = `select * from users where nome="${user.nome}" and password="${user.password}";`;
        dbConnection.query(sql, callback);
    }
}
