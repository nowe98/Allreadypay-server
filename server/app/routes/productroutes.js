'use strict';
const express = require('express')
const productController = require('../controllers/productController');

const router = express.Router()


router.route('/')
  .get(productController.list_all_products)
  .post(productController.create_product);

router.route('/admin')
  .get(productController.list_all_products_admin);
   
router.route('/:ProductID')
  .get(productController.read_a_product)
  .put(productController.update_a_product)
  .delete(productController.delete_a_product);

router.route('/machine/:MachineID')
  .get(productController.list_product_by_machine);

module.exports = router