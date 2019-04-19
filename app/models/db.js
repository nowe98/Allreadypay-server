'user strict';

var mysql = require('mysql');

//local mysql db connection
var connection = mysql.createConnection({
    host     : process.env.API_HOST,
    user     : process.env.API_USER,
    password : process.env.API_PASSWORD,
    port     : process.env.API_PORT,
    database : process.env.API_DATABASE
});

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;