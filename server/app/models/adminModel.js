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
};

Admin.createAdmin = function (newAdmin, result) {
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
            result(null,res)
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

Admin.validate = function(admin, result){
        if(err) {
            console.log("error: ", err);
            result(null,err);
        }
        else {
            if(this.AdminID==admin.AdminID&&this.Pass==admin.Pass)
            result(null,1);
        }
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