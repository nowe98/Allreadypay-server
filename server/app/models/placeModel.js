'use strict'

const sql = require('../../config/db')

const Place = function(place){
    this.PlaceID = place.PlaceID;
    this.PlaceName = place.PlaceName;
    this.latitude = place.latitude;
    this.longitude = place.longitude;
}

Place.createPlace = function(newPlace,result){
    sql.query("INSERT INTO place set ?",newPlace,function(err,res){
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

Place.getPlaceById = function (PlaceID, result) {
    sql.query("SELECT * FROM place where PlaceID = ?", PlaceID, function(err, res) {
        if(err) {
            console.log("error: ", err);
            result (err, null);
        }
        else {
            result(null, res);
        }
    });
};

Place.getAllPlace = function (result) {
    sql.query("SELECT * FROM place", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null,err);
        }
        else {
            console.log("place: ",res);
            result(null,res)
        }
    });
};

Place.updateById = function(PlaceID,place, result) {
    sql.query("UPDATE place SET ? WHERE PlaceID = ?",[place, PlaceID], function(err, res) {
        if(err) {
            console.log("error: ", err);
            result(null,err);
        }
        else {
            result(null, res);
        }        
    });
};

Place.delete = function(id, result) {
    sql.query("DELETE FROM place WHERE PlaceID=?",id,function(err, res) {
        if(err) {
            console.log("error: ", err);
            result(null,err);
        }
        else {
            result(null,res);
        } 
    });
};

module.exports = Place;