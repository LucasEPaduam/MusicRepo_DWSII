const dbConnection = require('../../config/dbConnection');

module.exports.login = (app, req, res) =>{
    console.log('Controller da login');
    dbConn = dbConnection();
    res.render('login.ejs');  
};