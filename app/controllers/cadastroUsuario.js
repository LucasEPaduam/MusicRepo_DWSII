const dbConnection = require('../../config/dbConnection');

module.exports.cadastroUsuario = (app, req, res) =>{
    console.log('Controller da cadastroUsuario');
    dbConn = dbConnection();
    res.render('cadastroUsuario.ejs');  
};