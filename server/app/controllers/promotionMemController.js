'use strict'

const Mem = require('../models/promotionMemberModel');

exports.list_all_promotionMs = function (req, res) {
    Mem.getAllPromotions(function(err, pros) {

        if (err)
            res.send(err);
        else {
          console.log('res', pros);
          res.json({"status":200,"message":"Data fetched successfully!", "proMList":pros});
        }

});
};
exports.create_promotionM = function(req, res) {
    const new_pro = new Mem(req.body);
  
    //handles null error 
    if(!new_pro.ProductID){ 
        res.status(400).send({ error:true, 
            message: 'Please provide information' });
    }
    else{
        Mem.createPromotion(new_pro, function(err, pro) {
            if (err)
                res.send(err);
            else
              res.json(pro);
        });
  }
}

exports.read_a_promotionM = function(req, res) {
    Mem.getPromtionById(req.params.PromotionMID, function(err, pro) {
      if (err)
        res.send(err);
      else
        res.json(pro[0]);
    })
}

exports.update_a_promotionM = function(req, res) {
    Mem.updateById(req.params.PromotionMID, new Mem(req.body), function(err, result) {
      if (err)
        res.send(err);
      else
        res.json(result);
    })
}

exports.delete_a_promotionM = function(req, res) {
    Mem.delete( req.params.PromotionMID, function(err, result) {
      if (err)
        res.send(err);
      if(result.errno==1451)
        res.status(400).send({ error:true, message: 'have foreign key' });
      else
        res.json({ message: 'Place successfully deleted' });
    })
}