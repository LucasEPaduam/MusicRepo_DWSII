const dbConnection = require('../../config/dbConnection');
const {updateVideo} = require('../models/editarVideo');

module.exports.editarVideo = (app, req, res, video) =>{
    console.log('Controller da editarVideo');
    console.log(video);
    dbConn = dbConnection();
    updateVideo(dbConn, video, (error, result) =>{
        res.render('editarVideo.ejs', {video: result});
    })
};