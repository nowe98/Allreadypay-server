'use strict'

const Event = require('../models/eventModel');

exports.list_all_events = function (req, res) {
    Event.getAllEvents(function(err, events) {

        if (err)
            res.send(err);
        
        console.log('res', events);
        res.json({"status":200,"message":"Data fetched successfully!", "EventList":events});

});
};
exports.create_event = function(req, res) {
    const new_event = new Event(req.body);
  
    //handles null error 
    if(!new_event.AdminID||!new_event.EventName){ 
        res.status(400).send({ error:true, 
            message: 'Please provide information' });
    }
    else{
        Event.createEvent(new_event, function(err, event) {
            if (err)
                res.send(err);
            res.json(event);
        });
  }
}

exports.read_a_event = function(req, res) {
    Event.getEventById(req.params.EventID, function(err, event) {
      if (err)
        res.send(err);
      res.json(event[0]);
    })
}

exports.update_a_event = function(req, res) {
    Event.updateById(req.params.EventID, new Event(req.body), function(err, event) {
      if (err)
        res.send(err);
      res.json(event);
    })
}

exports.delete_a_event = function(req, res) {
    Event.delete( req.params.EventID, function(err, event) {
      if (err)
        res.send(err);
      res.json({ message: 'Place successfully deleted' });
    })
}