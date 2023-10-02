const dbConnection = require('../../config/dbConnection');
const { addVideo } = require('../models/cadastroVideo');


module.exports.adicionaVideo = (app, req, res) => {
    const video = req.body;
    const userId = 3;
    dbConn = dbConnection();
        addVideo (video, userId, dbConn, (error, result) => {
            res.redirect('/');
        });
    
}