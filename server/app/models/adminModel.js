'use strict';
const sql = require('../../config/db.js');

//Task object constructor
const Admin = function(admin){
    this.AdminID = admin.AdminID;
    this.Pass = admin.Pass;
    this.FirstName = admin.FirstName;
    this.LastName = admin.LastName;
    this.Sex = admin.Sex;
    this.Email = admin.Email;
    this.llevel = admin.llevel;
};

Admin.createAdmin = function (newAdmin, result) {
    if(!newAdmin.llevel) {
        newAdmin.llevel =1;
    }
    if(newAdmin.llevel<1||newAdmin>3) {
        newAdmin.llevel =1;
    }
    sql.query("INSERT INTO admin set ?", newAdmin, function(err, res) {

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

Admin.getAdminById = function (AdminID, result) {
    sql.query("SELECT * FROM admin where AdminID = ?", AdminID, function(err, res) {
        if(err) {
            console.log("error: ", err);
            result (err, null);
        }
        else {
            result(null, res);
        }
    });
};

Admin.getAllAdmins = function (result) {
    sql.query("SELECT * FROM admin", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null,err);
        }
        else {
            console.log("admin: ",res);
            result(null,res);
        }
    });
};

Admin.updateById = function(AdminID,admin, result) {
    sql.query("UPDATE admin SET FirstName = ?, LastName = ? WHERE AdminID = ?",[admin.FirstName, admin.LastName, AdminID], function(err, res) {
        if(err) {
            console.log("error: ", err);
            result(null,err);
        }
        else {
            result(null, res);
        }        
    });
};

Admin.validatePassword = function(admin,password) {
    // const hash = crypto.pbkdf2Sync(password, user.salt, 10000, 512, 'sha512').toString('hex');
    return admin.Pass === password;
};


Admin.delete = function(id, result) {
    sql.query("DELETE FROM admin WHERE AdminID=?",id,function(err, res) {
        if(err) {
            console.log("error: ", err);
            result(null,err);
        }
        else {
            result(null,res);
        } 
    });
};


module.exports = Admin;