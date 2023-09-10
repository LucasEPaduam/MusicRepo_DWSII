const app = require('../../config/server');
const {home} = require('../controllers/home');
const {login} = require('../controllers/login');
const {editarVideo} = require('../controllers/editarVideo');
const {cadastroVideo} = require('../controllers/cadastroVideo');
const {cadastroUsuario} = require('../controllers/cadastroUsuario');

module.exports = {
    home: (app) =>{
        app.get('/', function(req,res){
            home(app, req,res);
        });
    }, 
    login: (app) =>{
        app.get('/login', function(req,res){
            login(app, req,res);
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
    },
    cadastroUsuario: (app) =>{
        app.get('/cadastroUsuario', function(req,res){
            cadastroUsuario(app, req,res);
        });
    }
}