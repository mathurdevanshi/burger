//this will link to npm files
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

//in this type of work, you need to create a static file. That means that you this file really can only fully view the files listed. 
app.use(express.static(process.cws() + '/public'));
app.use(bodyParser.urlencoded({ extended:false}));

//this will set the scene for handlebars
app.use(methodOverride('_method'));
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({ defaultLayout:'main'}));
app.set('view engine', 'handlebars');
var routes = require('./controllers/burgers_controller.js');
app.use('/', routes);

//this part should set the stage for Heroku
const PORT = process.env.PORT|| 5000;
const server = http.createServer((req,res) => {
    res.StatusCode = 200;
    res.setHeader ('conent-Type', 'text/plain');
    res.end('Hello World\n')
});
server.listen(PORT, () => {
    console.log('Server running pn ${PORT}/')
});
