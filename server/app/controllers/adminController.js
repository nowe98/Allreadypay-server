'use strict'

const Admin = require('../models/adminModel');

exports.list_all_admins = function (req, res) {
    Admin.getAllAdmins(function(err, admin) {

        console.log('controller')
        if (err)
            res.send(err);
        console.log('res', admin);
        res.send(admin);
    });
};

exports.create_admin = function(req, res) {
    const new_admin = new Admin(req.body);
  
    //handles null error 
    if(!new_admin.AdminID || !new_admin.Pass){ 
        res.status(400).send({ error:true, message: 'Please provide information' });
    }
    else{
        Admin.createAdmin(new_admin, function(err, admin) {
            if (err)
                res.send(err);
            res.json(admin);
        });
  }
}

exports.read_a_admin = function(req, res) {
    Admin.getAdminById(req.params.AdminID, function(err, admin) {
      if (err)
        res.send(err);
      res.json(admin[0]);
    })
}

exports.update_a_admin = function(req, res) {
    Admin.updateById(req.params.AdminID, new Admin(req.body), function(err, admin) {
      if (err)
        res.send(err);
      res.json(admin);
    })
}

exports.delete_a_admin = function(req, res) {
    Admin.delete( req.params.AdminID, function(err, r) {
      if (err)
        res.send(err);
      res.json({ message: 'Admin successfully deleted' });
    })
}

