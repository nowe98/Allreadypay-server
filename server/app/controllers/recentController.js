'use strict'

const Recent = require('../models/recentModel');
const Product = require('../models/productModel');
const Machine = require('../models/machineModel');
const Slot = require('../models/slotModel');
const axios = require('axios');

exports.list_all_recents = function (req, res) {
    Recent.getAllRecent(function(err, recents) {

      if (err)
          res.send(err);

      console.log('res', recents);
      res.json({"status":200,"message":"Data fetched successfully!", "Recent":recents});
    });
};

exports.create_recent = async function(req, res) {
    const new_recent = new Recent(req.body);
    if(!new_recent.ProductID||!new_recent.MobileNum||!new_recent.MachineID){ 
      res.status(400).send({ error:true, message: 'Please provide information' });
    }

    let amount ;
    await Slot.getAmount(new_recent.MachineID,new_recent.ProductID, function(err,rest) {
      amount = rest[0].Amount;
      console.log(amount)
      if(amount<=0||!amount){
        console.log("hi",amount);
        res.status(401).send({ error:true, message: 'out of stock' });
      }
      else{
        Product.getProductById(new_recent.ProductID, function(err, product) {
          Machine.updatesales(new_recent.MachineID,product[0].Price)
        })
        Product.updateSales(new_recent.ProductID);
        Slot.decreaseAmount(new_recent.MachineID,new_recent.ProductID);
        Recent.createRecent(new_recent, function(err,r) {
            if (err)
              res.send(err);
            res.json({"status":200,"message":"Add table complete."});
        });
        axios.get('http://192.168.137.199:5000/runvend/'+new_recent.ProductID)
        .then((res) => {
            //console.log(`statusCode: ${res.statusCode}`)
            //console.log(res.data)
        })
        .catch((error) => {
            console.error(error)
        })
          
      }
    });
    //handles null error 
    
    
     

    
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
