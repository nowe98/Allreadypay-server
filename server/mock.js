const express = require('express'),
  app = express(),
  bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const port = 3001;


app.listen(port);

console.log('API server started on: ' + port);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/',function(req,res){
  console.log("get");
  res.send("Hi, there");
});
const corsOption = {
  origin: true,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  exposedHeaders: ['authorization']
};

app.use(cors(corsOption));

const router = require('./mockup/userroutes'); //importing route
app.use('/users/',router); //register the route



