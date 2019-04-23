'use strict';
const express = require('express')
const adminController = require('../controllers/adminController');

const router = express.Router()


router.route('/')
  .get(adminController.list_all_admins)
  .post(adminController.create_admin);
   
router.route('/:AdminID')
  .get(adminController.read_a_admin)
  .put(adminController.update_a_admin)
  .delete(adminController.delete_a_admin);


module.exports = router