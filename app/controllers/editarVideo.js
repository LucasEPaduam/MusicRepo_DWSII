const dbConnection = require('../../config/dbConnection');
const {updateVideo} = require('../models/editarVideo');

module.exports.editarVideo = (app, req, res) =>{
    console.log('Controller da editarVideo');
    const video = req.query.id_musica;
    console.log(video);
    dbConn = dbConnection();
    updateVideo(video, dbConn, (error, result) =>{
        res.render('editarVideo.ejs', {video: result});
    })
};