'use strict'

const User = require('../models/userModel');

exports.list_all_users = function (req, res) {
    User.getAllUser(function(err, user) {

        console.log('controller')
        if (err)
            res.send(err);
        console.log('res', user);
        res.send(user);
    });
};

exports.create_user = function(req, res) {
    const new_user = new User(req.body);
  
    //handles null error 
    if(!new_user.UserID || !new_user.Pass){ 
        res.status(400).send({ error:true, message: 'Please provide information' });
    }
    else{
        User.createUser(new_user, function(err, user) {
            if (err)
                res.send(err);
            res.json(user);
        });
  }
}

exports.read_a_user = function(req, res) {
    User.getUserById(req.params.UserID, function(err, user) {
      if (err)
        res.send(err);
      res.json(user);
    })
}

exports.update_a_user = function(req, res) {
    User.updateById(req.params.UserID, new User(req.body), function(err, user) {
      if (err)
        res.send(err);
      res.json(user);
    })
}

exports.delete_a_user = function(req, res) {
    User.remove( req.params.UserID, function(err, user) {
      if (err)
        res.send(err);
      res.json({ message: 'User successfully deleted' });
    })
}

