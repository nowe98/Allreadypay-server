'use strict';
const express = require('express')
const promoMemController = require('../controllers/promotionMemController');
const promoRegController = require('../controllers/promotionRegController');

const router = express.Router()


router.route('/mem/')
  .get(promoMemController.list_all_promotionMs)
  .post(promoMemController.create_promotionM);
   
router.route('/mem/:PromotionMID')
  .get(promoMemController.read_a_promotionM)
  .put(promoMemController.update_a_promotionM)
  .delete(promoMemController.delete_a_promotionM);

router.route('/reg/')
  .get(promoRegController.list_all_promotionRs)
  .post(promoRegController.create_promotionR);
   
router.route('/reg/:PromotionRID')
  .get(promoRegController.read_a_promotionR)
  .put(promoRegController.update_a_promotionR)
  .delete(promoRegController.delete_a_promotionR);


module.exports = router