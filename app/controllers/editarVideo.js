const dbConnection = require('../../config/dbConnection');
const {update, getVideo} = require('../models/editarVideo');

module.exports.updateEditarVideo = (app, req, res) =>{
    //console.log('Controller da updateEditarVideo');
    const video = req.body;
    dbConn = dbConnection();
    update(video, dbConn, (error, result) =>{
        //console.log(result);
        //console.log(error);
        res.redirect('/');
    });
};

module.exports.selectEditarVideo = (app, res, id_musica, callBack) =>{
    //console.log('Controller da selectEditarVideo');
    //const video = req.query.id_musica;
    //console.log(video);
    dbConn = dbConnection();
    getVideo(id_musica, dbConn, (error, result) =>{
        //console.log(result);
        res.render('editarVideo.ejs', {video: result});
    });
};
