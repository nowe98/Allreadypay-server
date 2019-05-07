'use strict'

const Recent = require('../models/recentModel');

exports.list_all_recents = function (req, res) {
    Recent.getAllRecent(function(err, recents) {

      console.log('recent controller')
      if (err)
          res.send(err);

      console.log('res', recents);
      res.json({"status":200,"message":"Data fetched successfully!", "Recent":recents});
    });
};

exports.create_recent = function(req, res) {
    const new_recent = new Recent(req.body);
  
    //handles null error 
    if(!new_recent.ProductID||!new_recent.MobileNum||!new_recent.MachineID){ 
        res.status(400).send({ error:true, message: 'Please provide information' });
    }
    else{
        Recent.createRecent(new_recent, function(err,r) {
            if (err)
                res.send(err);
            res.json({"status":200,"message":"Add table complete."});
        });
  }
};

exports.read_a_recent = function(req, res) {
    Recent.getRecentById(req.params.RecentID, function(err, recent) {
      if (err)
        res.send(err);
      res.json(recent[0]);
    })
}
exports.list_recent_by_user = function(req, res) {
  Recent.getRecentByUser(req.params.MobileNum, function(err, recents) {
    if (err)
      res.send(err);
      res.json({"status":200,"message":"Data fetched successfully!", "Recent":recents});
  })
}
