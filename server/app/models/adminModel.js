'user strict';
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

module.exports = Admin;