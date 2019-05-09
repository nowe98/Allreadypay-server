'user strict';
const sql = require('../../config/db.js');

//Task object constructor
const Machine = function(machine){
    this.MachineID = machine.MachineID;
    this.PlaceID = machine.PlaceID;
    this.MachineName = machine.MachineName;
    this.ManufacturedDate = machine.ManufacturedDate;
    this.mstatus = machine.mstatus;
    this.AdminID = machine.AdminID;
    this.MachineType = machine.MachineType;
    this.Sales = machine.Sales;
    this.IP = machine.IP;
};

Machine.createMachine = function(newMachine,result){
    sql.query("INSERT INTO machine set ? ;",newMachine,function(err,res){
        if(err) {
            console.log("error: ", err);
            result(err,null);
        }
        else {
            console.log(res.insertId);
        }
    })
    sql.query("CALL add_slot(?, ?);", [newMachine.MachineID, newMachine.MachineType], function(err,res){
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
    sql.query("DELETE FROM slot WHERE MachineID = ?",id,function(err, res) {
        if(err) {
            console.log("error: ", err);
            result(null,err);
        }
        else {
            console.log(res);
        } 
    });
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

Machine.updatestatus = function(id, status, result){
    console.log(status, id);
    sql.query("UPDATE machine SET mstatus = ? WHERE MachineID = ?",[status, id], function(err, res) {
        if(err) {
            console.log("error: ", err);
            result(null,err);
        }
        else {
            result(null, res);
        }        
    });
};

Machine.updateip = function(id, ip, result) {
    sql.query("UPDATE machine set IP =? where MachineID = ?", [ip, id], function(err,res) {
        if(err) {
            console.log("error: ", err);
            result(null,err);
        }
        else {
            result(null, res);
        }   
    });
}

Machine.updatesales = function(id, price, result) {
    sql.query("UPDATE machine SET Sales = Sales + ? WHERE MachineID = ?",[price,id], function(err, res) {
        if(err) {
            console.log("error: ", err)
        }

    })
}

module.exports= Machine;