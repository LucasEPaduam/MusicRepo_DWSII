const dbConnection = require('../../config/dbConnection')
const { autentica } = require('../models/login');

module.exports.autenticar = (app, req, res) => {
    
    const user = req.body;
    dbConn = dbConnection();
        autentica (user, dbConn, (error, result) => {
            if(result.length > 0){
                req.session.user = result[0].id_usuario;
                res.redirect('/');
            }else{
                res.redirect('/login');
            }
        });
    
}
    


    