'use strict'

const promoReg = require('../models/promotionRegularModel');

exports.list_all_promotionRs = function (req, res) {
    promoReg.getAllPromotions(function(err, pros) {

        if (err)
            res.send(err);
        else{
          console.log('res', pros);
          res.json({"status":200,"message":"Data fetched successfully!", "proRList":pros});
        }

});
};
exports.create_promotionR = function(req, res) {
    const new_pro = new promoReg(req.body);
  
    //handles null error 
    if(!new_pro.ProductID){ 
        res.status(400).send({ error:true, 
            message: 'Please provide information' });
    }
    else{
        promoReg.createPromotion(new_pro, function(err, pro) {
            if (err)
                res.send(err);
            else
              res.json(pro);
        });
  }
}

exports.read_a_promotionR = function(req, res) {
    promoReg.getPromtionById(req.params.PromotionRID, function(err, pro) {
      if (err)
        res.send(err);
      else
        res.json(pro[0]);
    })
}

exports.update_a_promotionR = function(req, res) {
    promoReg.updateById(req.params.PromotionRID, new promoReg(req.body), function(err, result) {
      if (err)
        res.send(err);
      else
        res.json(result);
    })
}

exports.delete_a_promotionR = function(req, res) {
    promoReg.delete( req.params.PromotionRID, function(err, result) {
      if (err)
        res.send(err);
      else
        res.json({ message: 'Place successfully deleted' });
    })
}