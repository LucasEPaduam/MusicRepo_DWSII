const dbConnection = require('../../config/dbConnection');

module.exports.cadastroVideo = (app, req, res) =>{
    console.log('Controller da cadastroVideo');
    dbConn = dbConnection();
    res.render('cadastroVideo.ejs');  
};