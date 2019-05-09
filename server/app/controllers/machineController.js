'use strict'

const Machine = require('../models/machineModel');

exports.list_all_machines = function (req, res) {
    Machine.getAllMachines(function(err, machines) {

      console.log('machine controller')
      if (err)
          res.send(err);

      const newmachines = machines.map((machine) => ({
        vending_ID: machine.MachineID,
        vending_type: machine.MachineType,
        place_ID:machine.PlaceID,
        vending_name: machine.MachineName,
        status: machine.mstatus

      }));
      
      console.log('res', newmachines);
      res.json({"status":200,"message":"Data fetched successfully!", "VendInPlace":newmachines});
    });
};

exports.create_machine = function(req, res) {
    const new_machine = new Machine(req.body);
  
    //handles null error 
    if(!new_machine.MachineID){ 
        res.status(400).send({ error:true, message: 'Please provide information' });
    }
    else{
        Machine.createMachine(new_machine, function(err, machine) {
            if (err)
                res.send(err);
            res.json(machine);
        });
  }
}

exports.read_a_machine = function(req, res) {
    Machine.getMachineById(req.params.MachineID, function(err, machine) {
      if (err)
        res.send(err);
      res.json(machine[0]);
    })
}

exports.update_a_machine = function(req, res) {
    Machine.updateById(req.params.MachineID, new Machine(req.body), function(err, machine) {
      if (err)
        res.send(err);
      res.json(machine);
    })
}

exports.delete_a_machine = function(req, res) {
    Machine.delete( req.params.MachineID, function(err, machine) {
      if (err)
        res.send(err);
      res.json({ message: 'Machine successfully deleted' });
    })
}

exports.update_status = function(id, status){
  Machine.updatestatus(id, status)
}

var getClientAddress = function (req) {
  return (req.headers['x-forwarded-for'] || '').split(',')[0] 
      || req.connection.remoteAddress;
};

exports.update_ip = function(req, res) {
  var ipAddress = getClientAddress(req);
  
  Machine.updateip(req.params.MachineID, ipAddress, function(err, machine) {
    if (err)
      res.send(err);
    res.json(machine);
  })
}

