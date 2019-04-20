'user strict';
const sql = require('../../config/db.js/');

//Task object constructor
const Type_machine = function(typemachine){
    this.MachineType = typemachine.MachineType;
    this.Slots = typemachine.Slots;
    this.CapacityPerBlocks = typemachine.CapacityPerBlocks;
};



module.exports= Type_machine;