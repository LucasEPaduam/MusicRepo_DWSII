const app = require('../../config/server');
const {home} = require('../controllers/home');
const {autenticar} = require('../controllers/login');
const {selectEditarVideo, updateEditarVideo} = require('../controllers/editarVideo');
const {selectExcluirVideo, deleteExcluirVideo} = require('../controllers/excluirVideo');
const {adicionaVideo} = require('../controllers/cadastroVideo');
const {adicionaUser} = require('../controllers/cadastroUsuario');
const {userVideos} = require('../controllers/userVideos');
const { check, validationResult } = require('express-validator');


module.exports = {
    home: (app) =>{
        app.get('/', function(req,res){
            home(app, req,res);
        });
    }, 
    login: (app) =>{
        app.get('/login', function(req,res){
            res.render('login.ejs', {errors:[], user:{}});
        });
    },
    autenticar: (app) => {
        app.post('/autenticar',
        [
         check('nome').isLength({min:5}).withMessage('Nome deve ter no minimo 5 caracteres'),
         check('password').isLength({min:5}).withMessage('Password deve ter no minimo 5 caracteres'),        
        ],function(req, res) {
         const validation = validationResult(req);
         if(validation.errors.length === 0){
             autenticar(app, req, res) 
         } else{
             const user = req.body;
             res.render('login.ejs', {errors: validation.errors, user: user});
         }            
               
     });
 
    },
    insertinguser: (app) => {
        app.get('/cadastroUsuario', function (req, res) {
            res.render('cadastroUsuario.ejs', {errors:[], user:{}});
        });
    },
    salvarUser: (app) => {
       app.post('/salvarUsuario',
       [
        check('nome').isLength({min:5}).withMessage('Nome deve ter no minimo 5 caracteres'),
        check('email').isLength({min:10}).withMessage('Email deve ter no minimo 5 caracteres'),
        check('password').isLength({min:5}).withMessage('Password deve ter no minimo 5 caracteres'),
       ],function(req, res) {
        const validation = validationResult(req);
        if(validation.errors.length === 0){
            adicionaUser(app, req, res) 
            //console.log("AdicionaUser Route REQ", req.body);
        } else{
            const user = req.body;
            res.render('cadastroUsuario.ejs', {errors: validation.errors, user: user});
        }            
              
    });
    },
    insertingvideo: (app) => {
        app.get('/cadastroVideo', function (req, res) {
            res.render('cadastroVideo.ejs', {errors:[], video:{}});
        });
    },
    salvarvideo: (app) => {
       app.post('/salvarVideo',
       [
        check('artista').isLength({min:1}).withMessage('Artista deve ter no minimo 5 caracteres'),
        check('musica').isLength({min:1}).withMessage('Música deve ter no minimo 5 caracteres'),
        check('ano').isLength({min:4, max:4}).isNumeric().withMessage('Ano deve ser numerico'),
       ],function(req, res) {
        const validation = validationResult(req);
        if(validation.errors.length === 0){
            adicionaVideo(app, req, res) 
        } else{
            const video = req.body;
            res.render('cadastroVideo.ejs', {errors: validation.errors, video: video});
        }                      
    });
    },
    cadastroVideo: (app) =>{
        app.get('/cadastroVideo', function(req,res){
            cadastroVideo(app, req,res);
        });
    },
    userVideos: (app) =>{
        app.get('/userVideos', function(req,res){
            userVideos(app, req,res);
        });
    },
    editarVideo: (app) =>{
        app.get('/editarVideo', function(req,res){
            const id_musica = parseInt(req.query.id_musica);
            //console.log('ID do video:', id_musica)
            selectEditarVideo(app, res, id_musica, (error, result) =>{
                
            });
        });
    },
    update: (app) =>{
        app.post('/update', function(req, res){
            const validation = validationResult(req);
            if(validation.errors.length === 0){
                updateEditarVideo(app, req, res); 
            } else{
                const video = req.body;
                res.render('/', {errors: validation.errors, video: video});
            } 
        });
    },
    excluirVideo: (app) =>{
        app.get('/excluirVideo', function(req,res){
            const id_musica = parseInt(req.query.id_musica);
            //console.log('ID do video:', id_musica)
            selectExcluirVideo(app, res, id_musica, (error, result) =>{
                
            });
        });
    },
    delete: (app) =>{
        app.post('/delete', function(req, res){
            const validation = validationResult(req);
            if(validation.errors.length === 0){
                deleteExcluirVideo(app, req, res); 
            } else{
                const video = req.body;
                res.render('/', {errors: validation.errors, video: video});
            } 
        });
    },
}