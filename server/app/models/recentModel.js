'user strict';
const sql = require('../../config/db.js');

//Task object constructor
const Recent = function(recent){
    this.RecentID = recent.RecentID;
    this.TimeStamp = recent.TimeStamp;
    this.ProductID = recent.ProductID;
    this.MachineID = recent.MachineID;
};

Recent.createRecent = function(newPlace,result){
    sql.query("INSERT INTO recent set ?",newRecent,function(err,res){
        if(err) {
            console.log("error: ", err);
            result(err,null);
        }
        else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    })
};

Recent.getRecentById = function (RecentID, result) {
    sql.query("SELECT * FROM recent where RecentID = ?", RecentID, function(err, res) {
        if(err) {
            console.log("error: ", err);
            result (err, null);
        }
        else {
            result(null, res);
        }
    });
};

Recent.getAllRecent = function (result) {
    sql.query("SELECT * FROM recent", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null,err);
        }
        else {
            console.log("recent: ",res);
            result(null,res)
        }
    });
};


module.exports = Recent;