'user strict';
const sql = require('../../config/db.js');

//Task object constructor
const Recent = function(recent){
    this.RecentID = recent.RecentID;
    this.MobileNum = recent.MobileNum;
    this.ProductID = recent.ProductID;
    this.MachineID = recent.MachineID;
};

Recent.createRecent = function(newRecent,result){
    newRecent.RecentID=null;
    sql.query("CALL create_recent(?, ?, ?)",[newRecent.MobileNum, newRecent.ProductID, newRecent.MachineID],function(err,res){
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

Recent.getRecentById = function (id, result) {
    sql.query("SELECT * FROM recent where RecentID = ?", id, function(err, res) {
        if(err) {
            console.log("error: ", err);
            result (err, null);
        }
        else {
            result(null, res);
        }
    });
};

Recent.getRecentByUser = function (id, result) {
    sql.query("SELECT * FROM recent where MobileNum = ?", id, function(err, res) {
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