const express = require('express');
const app = require('./config/server');
const routes = require('./app/routes/routes');

const router = express.Router();

router.use((req, res, next) => {
    if (!req.session.user === false) {        
        next();
    } else {
        res.redirect('/login');
    }
});

routes.home(app);
routes.login(app);
routes.autenticar(app);
routes.insertinguser(app);
routes.salvarUser(app);
routes.insertingvideo(app);
routes.salvarvideo(app);

routes.editarVideo(router);


app.use(router); 



