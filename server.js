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

const routes = require('./app/routes/approutes'); //importing route
routes(app); //register the route
const userroute = require('./app/routes/userroutes');
userroute(app);


