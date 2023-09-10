const dbConnection = require('../../config/dbConnection');

module.exports.editarVideo = (app, req, res) =>{
    console.log('Controller da editarVideo');
    dbConn = dbConnection();
    res.render('editarVideo.ejs');  
};