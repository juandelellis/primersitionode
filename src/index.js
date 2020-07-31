const express = require('express');
const app = express();
const path = require('path');
//settings
app.set('port', 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');
//middlewares

//routes
app.use(require('./routes/index'));
//app.get('/', (req, res) => {
    //res.render('index', {tittle: 'First Website'});
    //res.sendFile(path.join(__dirname, '/views/index.html')); 
//});
//static files
app.use(express.static(path.join(__dirname, 'public')));
// Escuchando el servidor
app.listen(app.get('port'), () => {
    console.log('Server on Port', app.get('port'));
});
