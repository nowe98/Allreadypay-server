'user strict';
const sql = require('../../config/db.js');

//Task object constructor
const Event = function(event){
    this.EventID = event.EventID;
    this.EventName = event.EventName;
    this.Picture = event.Picture;
    this.Description = event.Description;
    this.StartDate = event.StartDate;
    this.EndDate = event.EndDate;
    this.AdminID = event.AdminID

};

Event.createEvent = function(newEvent,result){
    newEvent.EventID=null;
    sql.query("INSERT INTO eventtable set ?",newEvent,function(err,res){
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

Event.getEventById = function (id, result) {
    sql.query("SELECT * FROM eventtable where EventID = ?", id, function(err, res) {
        if(err) {
            console.log("error: ", err);
            result (err, null);
        }
        else {
            result(null, res);
        }
    });
};

Event.getAllEvents = function (result) {
    sql.query("SELECT * FROM eventtable", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null,err);
        }
        else {
            console.log("event: ",res);
            result(null,res)
        }
    });
};

Event.updateById = function(id,event, result) {
    sql.query("UPDATE eventtable SET ? WHERE EventID = ?",[event, id], function(err, res) {
        if(err) {
            console.log("error: ", err);
            result(null,err);
        }
        else {
            result(null, res);
        }        
    });
};

Event.delete = function(id, result) {
    sql.query("DELETE FROM eventtable WHERE EventID=?",id,function(err, res) {
        if(err) {
            console.log("error: ", err);
            result(null,err);
        }
        else {
            result(null,res);
        } 
    });
};
module.exports = Event;