const dbConnection = require('../../config/dbConnection')
const { autentica } = require('../models/login');

module.exports.autenticar = (app, req, res) => {
    
    const user = req.body;
    console.log('Controller da Home - Autenticar', user);
    dbConn = dbConnection();
        autentica (user, dbConn, (error, result) => {
            if(result.length > 0){
                req.session.user = true;
                console.log("User" , req.session.user);
                res.redirect('/');
            }else{
                req.session.user = false;
                res.redirect('/login');
            }
        });
    
}
    


    