const dbConnection = require('../../config/dbConnection');
const { addUser } = require('../models/cadastroUsuario');


module.exports.adicionaUser = (app, req, res) => {
    console.log('Controller da Home - Add User');
    const user = req.body;
    dbConn = dbConnection();
        addUser (user, dbConn, (error, result) => {
            console.log(result);
            res.redirect('/');
        });
    
}