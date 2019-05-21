const express = require('express'),
  app = express(),
  bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const port = process.env.PORT || 3000;


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



// const axios = require('axios')
// const sql =require('./config/db')

// var intervalObject = setInterval(function () { 
//   sql.query("SELECT MachineID, IP FROM machine", function(err, res) {
//     if(err) {
//         console.log("error: ", err);
//     }
//     else {
//       //console.log(res)
//       for (var i of res) {
//         if(!i.IP)
//           sql.query("UPDATE machine SET mstatus = ? WHERE MachineID = ?",[0,i.MachineID], function(err, res) {
//             if(err) {
//                 console.log("error: ", err);
//                 //result(null,err);
//             }
//             else {
//               //console.log("result", res);
//             }        
//           });
//         else {
//           let a =i
//           //console.log("test",a);
//           axios.get('http://'+a.IP+':5000/status')
//             .then((res) => {
//                 //console.log(`statusCode: ${res.statusCode}`)
//                 console.log("hi",a)
//                 //console.log(res.data)
//                 sql.query("UPDATE machine SET mstatus = ? WHERE MachineID = ?",[1, a.MachineID], function(err, res) {
                  
//                   if(err) {
//                       console.log("error: ", err);
//                   }    
//               });
//             })
//             .catch((error) => {
//               console.log("fail",a)
//                 // console.error(error)
//                 sql.query("UPDATE machine SET mstatus = ? WHERE MachineID = ?",[0, a.MachineID], function(err, res) {
//                   if(err) {
//                       console.log("error: ", err);
//                   }
//                 })
//             })

//         }


//       }
//     }
//   });
  
//   },50000);



