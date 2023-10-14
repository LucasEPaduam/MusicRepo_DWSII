const dbConnection = require('../../config/dbConnection');
const {getVideos} = require('../models/userVideos');

module.exports.userVideos = (app, req, res) =>{
    //console.log('Controller da seusVideos');
    const userId = req.session.user;
    dbConn = dbConnection();
    //console.log(userId);
    getVideos(dbConn, userId, (error, result) =>{
        res.render('userVideos.ejs', {videos: result});
    })
};
