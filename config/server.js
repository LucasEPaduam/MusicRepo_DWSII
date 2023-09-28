let express = require('express');
let expressSession = require("express-session");
let app = express();
let port = 3000;

app.set('view engine', 'ejs');
app.set('views', './app/views');
app.use(express.static('./public')); //__dirname + 

//substituir o body-parser
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(expressSession({
    secret: "Lucas",
    resave: false,
    saveUninitialized: false
}));

app.listen(port, function() {
    console.log('servidor rodando com express na porta', port);
});

module.exports = app;