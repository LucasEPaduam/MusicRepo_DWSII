const dbConnection = require('../../config/dbConnection');
const {getVideos} = require('../models/home');

module.exports.home = (app, req, res) =>{
    console.log('Controller da Home');
    dbConn = dbConnection();
    getVideos(dbConn, (error, result) =>{
        console.log(error);
        console.log(result);
        res.render('home.ejs', {videos: result});
    })
    
};