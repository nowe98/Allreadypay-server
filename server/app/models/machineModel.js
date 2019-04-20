'user strict';
const sql = require('../../config/db.js/');

//Task object constructor
const Machine = function(machine){
    this.MachineID = machine.MachineID;
    this.MachineName = machine.MachineName;
    this.Location = machine.Location;
    this.ManufacturedDate = machine.ManufacturedDate;
    this.mstatus = machine.mstatus;
    this.AdminID = machine.AdminID;
    this.MachineType = machine.MachineType;
    this.Sales = machine.Sales;
};

module.exports= Machine;