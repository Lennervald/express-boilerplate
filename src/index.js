import http from 'http';
import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import hbs from 'express-handlebars';

require('dotenv').config();

import User from './model/user'
import routes from './routes/index'

let app = express();
app.server = http.createServer(app);

// view engine setup
app.engine('hbs', hbs({extname: 'hbs', defaultLayout: 'layout', layoutsDir: __dirname + '/views/layouts/'}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');


// apply bodyParser, limit request size
app.use(bodyParser.json({ limit: process.env.PARSER_LIMIT }));
app.use(bodyParser.urlencoded({ extended: false }));

// init routes
app.use('/', routes);

// catch 404, forward to error handler
app.use(function(req, res, next){
  let err = new Error('404 Not Found');
  err.status = 404;
  next(err);
});

// connect to database
mongoose.connect(process.env.DB_URL, {
  useMongoClient: true
});

// when connected, run this
mongoose.connection.once('open', function(){

});

// Define static content
app.use(express.static('public'));

// start server
app.server.listen(process.env.PORT, function(){
  console.log('Server running on port ' + process.env.PORT);
});
