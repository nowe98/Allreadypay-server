const express = require('express'),
  app = express(),
  bodyParser = require('body-parser');

const dotenv = require('dotenv');
dotenv.config();
const port = process.env.PORT || 3000;



app.listen(port);

console.log('API server started on: ' + port);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const router = require('./app/routes'); //importing route
app.use('/v1/',router); //register the route



