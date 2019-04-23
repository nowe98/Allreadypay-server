'use strict'

const Place = require('../models/placeModel');

exports.list_all_places = function (req, res) {
    Place.getAllPlace(function(err, places) {

        console.log('Place controller')
        if (err)
            res.send(err);
        
        console.log('res', places);
        res.json({"status":200,"message":"Data fetched successfully!", "PlaceList":places});

});
};
exports.create_place = function(req, res) {
    const new_place = new Place(req.body);
  
    //handles null error 
    if(!new_place.PlaceID||!new_place.PlaceName
        ||!new_place.latitude||!new_place.longitude){ 
        res.status(400).send({ error:true, 
            message: 'Please provide information' });
    }
    else{
        Place.createPlace(new_place, function(err, place) {
            if (err)
                res.send(err);
            res.json(place);
        });
  }
}

exports.read_a_place = function(req, res) {
    Place.getPlaceById(req.params.PlaceID, function(err, place) {
      if (err)
        res.send(err);
      res.json(place[0]);
    })
}

exports.update_a_place = function(req, res) {
    Place.updateById(req.params.PlaceID, new Place(req.body), function(err, place) {
      if (err)
        res.send(err);
      res.json(place);
    })
}

exports.delete_a_place = function(req, res) {
    Place.delete( req.params.PlaceID, function(err, place) {
      if (err)
        res.send(err);
      res.json({ message: 'User successfully deleted' });
    })
}