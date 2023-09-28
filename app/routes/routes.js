const app = require('../../config/server');
const {home} = require('../controllers/home');
const {login, autenticar} = require('../controllers/login');
const {editarVideo} = require('../controllers/editarVideo');
const {cadastroVideo} = require('../controllers/cadastroVideo');
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
         console.log("Validation Routes" , validation);
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
        } else{
            const user = req.body;
            res.render('cadastroUsuario.ejs', {errors: validation.errors, user: foto});
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