'user strict';
const sql = require('../../config/db.js');

//Task object constructor
const Machine = function(machine){
    this.MachineID = machine.MachineID;
    this.PlaceID = machine.PlaceID;
    this.Description = machine.Description;
    this.ManufacturedDate = machine.ManufacturedDate;
    this.mstatus = machine.mstatus;
    this.AdminID = machine.AdminID;
    this.MachineType = machine.MachineType;
    this.Sales = machine.Sales;
};

Machine.createMachine = function(newMachine,result){
    sql.query("INSERT INTO machine set ?",newMachine,function(err,res){
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

Machine.getMachineById = function (id, result) {
    sql.query("SELECT * FROM machine where MachineID = ?", id, function(err, res) {
        if(err) {
            console.log("error: ", err);
            result (err, null);
        }
        else {
            result(null, res);
        }
    });
};

Machine.getAllMachines = function (result) {
    sql.query("SELECT * FROM machine", function (err, res) {
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

Machine.updateById = function(MachineID,machine, result) {
    sql.query("UPDATE machine SET ? WHERE MachineID = ?",[machine, MachineID], function(err, res) {
        if(err) {
            console.log("error: ", err);
            result(null,err);
        }
        else {
            result(null, res);
        }        
    });
};

Machine.delete = function(id, result) {
    sql.query("DELETE FROM machine WHERE MachineID = ?",id,function(err, res) {
        if(err) {
            console.log("error: ", err);
            result(null,err);
        }
        else {
            result(null,res);
        } 
    });
};

module.exports= Machine;