require('dotenv').config();
import http from 'http';
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import User from './model/user';
const port = process.env.PORT || 3000;

let app = express();
app.server = http.createServer(app);

// Apply bodyParser to all http-requests
// Set a limit as well in .env
app.use(bodyParser.json({
  limit: process.env.PARSER_LIMIT
}));

// Connect to database
mongoose.connect(process.env.DB_URL, {
  useMongoClient: true
});

// When connected, run this
mongoose.connection.once('open', function(){

});

// Set view engine - hbs
app.set('view engine', 'hbs');

// Set express router
let router = express.Router();

// Add routes
app.get('/test', function(req, res){

});

// Define static content
app.use(express.static('public'));

// Start server
app.server.listen(port, function(){
  console.log('Server running on port ' + port);
});
