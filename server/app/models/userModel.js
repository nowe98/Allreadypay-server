'user strict';
const sql = require('../../config/db.js');
const crypto = require('crypto')

//Task object constructor
const User = function(user){
    this.MobileNum = user.MobileNum;
    this.Pass = user.Pass;
    this.Ppoint = user.Ppoint;
    this.FirstName = user.FirstName;
    this.LastName = user.LastName;
    this.Sex = user.Sex;
    this.Email = user.Email;
    this.hash = user.hash;
    this.salt = user.salt
};
User.createUser = function (newUser, result) {
    newUser.Ppoint=0;
    newUser = User.setpassword(newUser);
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
    sql.query("UPDATE usertable SET ? WHERE MobileNum = ?",[user, MobileNum], function(err, res) {
        if(err) {
            console.log("error: ", err);
            result(null,err);
        }
        else {
            result(null, res);
        }        
    });
};

User.setpassword = function(user) {
    user.salt = crypto.randomBytes(16).toString('hex');
    user.hash = crypto.pbkdf2Sync(user.Pass, user.salt, 10000, 512, 'sha512').toString('hex');
    return user;
};


User.validatePassword = function(user,password) {
    const hash = crypto.pbkdf2Sync(password, user.salt, 10000, 512, 'sha512').toString('hex');
    return user.hash === hash;
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