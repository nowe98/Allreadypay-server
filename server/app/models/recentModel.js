'user strict';
const sql = require('../../config/db.js');

//Task object constructor
const Recent = function(recent){
    this.RecentID = recent.RecentID;
    this.TimeStamp = recent.Time_Stamp;
    this.ProductID = recent.ProductID;
    this.MachineID = recent.MachineID;
};

module.exports = Recent;