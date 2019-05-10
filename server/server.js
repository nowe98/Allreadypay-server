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
const axios = require('axios')
const sql =require('./config/db')

var intervalObject = setInterval(function () { 
  axios.get('http://192.168.137.199:5000/status')
      .then((res) => {
          //console.log(`statusCode: ${res.statusCode}`)
          console.log(res.data)
          sql.query("UPDATE machine SET mstatus = ? WHERE MachineID = ?",[res.data.status, res.data.machineID], function(err, res) {
            if(err) {
                console.log("error: ", err);
            }    
        });
      })
      .catch((error) => {
          console.error(error)
          sql.query("UPDATE machine SET mstatus = ? WHERE MachineID = ?",[0, res.data.machineID], function(err, res) {
            if(err) {
                console.log("error: ", err);
            }
            else {
            }
          })
      })
  
},30000);



