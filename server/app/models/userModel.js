'user strict';
const sql = require('../../config/db.js');

//Task object constructor
const User = function(user){
    this.MobileNum = user.MobileNum;
    this.Pass = user.Pass;
    this.Ppoint = user.Ppoint;
    this.FirstName = user.FirstName;
    this.LastName = user.LastName;
    this.Sex = user.Sex;
    this.Email = user.Email;
};
User.createUser = function (newUser, result) {
    newUser.Ppoint=0;
    sql.query("INSERT INTO usertable set ?", newUser, function(err, res) {

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
    sql.query("SELECT * FROM usertable where MobileNum = ?", MobileNum, function(err, res) {
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
    sql.query("SELECT * FROM usertable", function (err, res) {
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

User.updateById = function(MobileNum,user, result) {
    sql.query("UPDATE usertable SET FirstName = ?, LastName = ? WHERE MobileNum = ?",[user.FirstName, user.LastName, MobileNum], function(err, res) {
        if(err) {
            console.log("error: ", err);
            result(null,err);
        }
        else {
            result(null, res);
        }        
    });
};

User.validate = function(user, result){
        if(err) {
            console.log("error: ", err);
            result(null,err);
        }
        else {
            if(this.MobileNum==user.MobileNum&&this.Pass==user.Pass)
            result(null,1);
        }
};
User.delete = function(id, result) {
    sql.query("DELETE FROM usertable WHERE MobileNum=?",id,function(err, res) {
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