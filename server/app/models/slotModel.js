'user strict';
const sql = require('../../config/db.js');

//Task object constructor
const Slot = function(slot){
    this.MachineID = slot.MachineID;
    this.NumberSlot = slot.NumberSlot;
    this.ProductID = slot.ProductID;
    this.Amount = slot.Amount;
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
    sql.query("UPDATE slot SET ProductID = ? AND Amount = ? WHERE MachineID = ? AND NumberSlot = ?",[slot.ProductID, slot.Amount, MachineID, number], function(err, res) {
        if(err) {
            console.log("error: ", err);
            result(null,err);
        }
        else {
            result(null, res);
        }        
    });
};
Slot.getAmount = function(md, pd,result) {
    sql.query("SELECT * FROM slot WHERE MachineID = ? AND ProductID = ?",[md, pd], function(err, res) {
        if(err) {
            console.log("error: ", err);
            result(null,err);
        }
        else {
            result(null, res);
        }        
    });
}
Slot.decreaseAmount = function(md, pd) {
    sql.query("UPDATE slot SET Amount = Amount-1 WHERE MachineID = ? AND ProductID = ?",[md, pd], function(err, res) {
        if(err) {
            console.log("error: ", err);
        } 
    });
}