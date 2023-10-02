const dbConnection = require('../../config/dbConnection');
const { addUser } = require('../models/cadastroUsuario');


module.exports.adicionaUser = (app, req, res) => {
    const user = req.body;
    dbConn = dbConnection();
        addUser (user, dbConn, (error, result) => {
            res.redirect('/');
        });
    
}