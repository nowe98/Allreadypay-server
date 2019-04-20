'user strict';
const sql = require('../../config/db.js');

//Task object constructor
const Slot = function(slot){
    this.MachineID = slot.MachineID;
    this.NumberSlot = slot.NumberSlot;
    this.ProductID = slot.ProductID;
};

module.exports = Slot;