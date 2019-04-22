'user strict';
const sql = require('../../config/db.js');

//Task object constructor
const Slot = function(slot){
    this.MachineID = slot.MachineID;
    this.NumberSlot = slot.NumberSlot;
    this.ProductID = slot.ProductID;
};

module.exports = Slot;

Slot.getSlotById = function (id, number,result) {
    sql.query("SELECT * FROM slot where MachineID = ? AND NumberSlot = ?", [id, number], function(err, res) {
        if(err) {
            console.log("error: ", err);
            result (err, null);
        }
        else {
            result(null, res);
        }
    });
};

Slot.getAllSloteInMachine = function (id, result) {
    sql.query("SELECT * FROM slot WHERE MachineID = ? ", id, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null,err);
        }
        else {
            console.log("user: ",res);
            result(null,res)
        }
    });
};

Slot.updateById = function(MachineID, number, slot, result) {
    sql.query("UPDATE slot SET ProductID = ? WHERE MachineID = ? AND NumberSlot = ?",[slot.ProductID, MachineID, number], function(err, res) {
        if(err) {
            console.log("error: ", err);
            result(null,err);
        }
        else {
            result(null, res);
        }        
    });
};