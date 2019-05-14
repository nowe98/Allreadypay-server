'user strict';
const sql = require('../config/db');

//Task object constructor
const User = function(user){
    this.MobileNum = user.MobileNum;
    this.Pass = user.Pass;
    this.balance =user.balance;
}
User.createUser = function (newUser, result) {
    sql.query("INSERT INTO userbank set ?", newUser, function(err, res) {

        if(err) {
            console.log("error: ", err);
            result(err,null);
        }
        else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });

};

User.getUserById = function (MobileNum, result) {
    sql.query("SELECT * FROM userbank where MobileNum = ?", MobileNum, function(err, res) {
        if(err) {
            console.log("error: ", err);
            result (err, null);
        }
        else {
            result(null, res);
        }
    });
};

User.getAllUser = function (result) {
    sql.query("SELECT * FROM userbank", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null,err);
        }
        else {
            console.log("user: ",res);
            result(null,res)
        }
    });
};

User.updatebalance = function(MobileNum,user, result) {
    sql.query("UPDATE userbank SET balance = balance - ? WHERE MobileNum = ?",[user.balance, MobileNum], function(err, res) {
        if(err) {
            console.log("error: ", err);
            result(null,err);
        }
        else {
            result(null, res);
        }        
    });
};


  
User.delete = function(id, result) {
    sql.query("DELETE FROM userbank WHERE MobileNum=?",id,function(err, res) {
        if(err) {
            console.log("error: ", err);
            result(null,err);
        }
        else {
            result(null,res);
        } 
    });
};


module.exports= User;