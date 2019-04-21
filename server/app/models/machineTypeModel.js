'user strict';
const sql = require('../../config/db.js');

//Task object constructor
const Type_machine = function(typemachine){
    this.MachineType = typemachine.MachineType;
    this.Slots = typemachine.Slots;
    this.CapacityPerBlocks = typemachine.CapacityPerBlocks;
};

Type_machine.createTypeMachine = function(newtype,result){
    sql.query("INSERT INTO type_machine set ?",newtype,function(err,res){
        if(err) {
            console.log("error: ", err);
            result(err,null);
        }
        else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    })
};

Type_machine.getTypemachineById = function (MachineType, result) {
    sql.query("SELECT * FROM type_machine where MachineType = ?", MachineType, function(err, res) {
        if(err) {
            console.log("error: ", err);
            result (err, null);
        }
        else {
            result(null, res);
        }
    });
};

Type_machine.getAllType = function (result) {
    sql.query("SELECT * FROM type_machine", function (err, res) {
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

Type_machine.delete = function(id, result) {
    sql.query("DELETE FROM type_machine WHERE MachineType = ?",id,function(err, res) {
        if(err) {
            console.log("error: ", err);
            result(null,err);
        }
        else {
            result(null,res);
        } 
    });
};

module.exports= Type_machine;