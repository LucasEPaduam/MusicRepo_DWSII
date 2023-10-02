const app = require('../../config/server');
const {home} = require('../controllers/home');
const {autenticar} = require('../controllers/login');
const {editarVideo} = require('../controllers/editarVideo');
const {adicionaVideo} = require('../controllers/cadastroVideo');
const {adicionaUser} = require('../controllers/cadastroUsuario');
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
            console.log("AdicionaUser Route REQ", req.body);
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
        check('artista').isLength({min:1}).withMessage('Nome deve ter no minimo 5 caracteres'),
        check('musica').isLength({min:1}).withMessage('Email deve ter no minimo 5 caracteres'),
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
    
    editarVideo: (app) =>{
        app.get('/editarVideo', function(req,res){
            editarVideo(app, req,res);
        });
    },
    cadastroVideo: (app) =>{
        app.get('/cadastroVideo', function(req,res){
            cadastroVideo(app, req,res);
        });
    }
}