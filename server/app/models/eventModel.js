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

module.exports = Event;