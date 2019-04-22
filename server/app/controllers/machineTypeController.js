'use strict'

const Type = require('../models/machineTypeModel');

exports.list_all_types = function (req, res) {
    Type.getAllType(function(err, types) {

        console.log('controller')
        if (err)
            res.send(err);

        
        console.log('res', types);
        res.json({"status":200,"message":"Data fetched successfully!", "ProductList":types});

});
};
exports.create_types = function(req, res) {
    const new_type = new Type(req.body);
  
    //handles null error 
    if(!new_type.MachineType){ 
        res.status(400).send({ error:true, message: 'Please provide information' });
    }
    else{
        Type.createTypeMachine(new_type, function(err, type) {
            if (err)
                res.send(err);
            res.json(type);
        });
  }
}

exports.read_a_type = function(req, res) {
    Type.getTypemachineById(req.params.MachineType, function(err, type) {
      if (err)
        res.send(err);
      res.json(type[0]);
    })
}

exports.delete_a_type = function(req, res) {
    Type.delete( req.params.MachineType, function(err, type) {
      if (err)
        res.send(err);
      res.json({ message: 'User successfully deleted' });
    })
}