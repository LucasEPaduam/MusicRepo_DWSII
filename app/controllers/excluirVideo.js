const dbConnection = require('../../config/dbConnection');
const {deleteVideo, getVideoForDelete} = require('../models/excluirVideo');

module.exports.deleteExcluirVideo = (app, req, res) =>{
    const video = req.body;
    dbConn = dbConnection();
    deleteVideo(video, dbConn, (error, result) =>{
        res.redirect('/');
    });
};

module.exports.selectExcluirVideo = (app, res, id_musica, callBack) =>{
    dbConn = dbConnection();
    getVideoForDelete(id_musica, dbConn, (error, result) =>{
        res.render('excluirVideo.ejs', {video: result});
    });
};
