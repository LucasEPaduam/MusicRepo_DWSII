const dbConnection = require('../../config/dbConnection');
const {getVideos} = require('../models/home');

module.exports.home = (app, req, res) =>{
    dbConn = dbConnection();
    getVideos(dbConn, (error, result) =>{
        res.render('home.ejs', {videos: result});
    })
    
};