'use strict'
const ejs = require('ejs');
const express = require('express');
const app = express();
const methodOverride = require('method-override');
const bodyParser = require('body-Parser');
const morgan = require('morgan');
const usersRouter = require('./controllers/users');
require('locus');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/public"));
app.use(morgan("tiny"));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(methodOverride("_method"));

app.get('/', function(req, res) {
    res.render('statics/home')
});

//app.use('/users', usersRouter);

app.listen(process.env.PORT || 3001, function() {
    console.log("Server is listening");
});
