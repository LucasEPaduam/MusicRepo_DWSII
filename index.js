const app  = require('./config/server');
const routes = require('./app/routes/routes');

routes.home(app); //app vem de server.js
routes.login(app);
routes.editarVideo(app);
routes.cadastroUsuario(app);
routes.cadastroVideo(app);