const dbConnection = require('../../config/dbConnection');
const {getVideos} = require('../models/editarVideo');

module.exports.editarVideo = (app, req, res) =>{
    console.log('Controller da editarVideo');
    const userId = req.session.user;
    dbConn = dbConnection();
    console.log(userId);
    getVideos(dbConn, userId, (error, result) =>{
        res.render('editarVideo.ejs', {videos: result});
    })
};
