const app  = require('./config/server');
const routes = require('./app/routes/routes');

routes.home(app); //app vem de server.js
routes.login(app);
routes.insertinguser(app);
routes.salvarUser(app);

routes.autenticar(app);
routes.editarVideo(app);

routes.cadastroVideo(app);

