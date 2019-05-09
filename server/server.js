const express = require('express'),
  app = express(),
  bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const port = process.env.PORT || 3000;

const machine = require('./app/controllers/machineController')

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

const router = require('./app/routes'); //importing route
app.use('/v1/',router); //register the route

var count =0;

var intervalObject = setInterval(function () { 
  count++; 
  console.log(count, 'seconds passed'); 
  if (count == 20) { 
      console.log('exiting'); 
      clearInterval(intervalObject); 
  } 
}, 1000); 



