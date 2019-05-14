'use strict';
const express = require('express')
const userController = require('./userController');

const router = express.Router()


router.route('/')
  .get(userController.list_all_users)
  .post(userController.create_user);

   
router.route('/:MobileNum')
  .get(userController.read_a_user)
  .put(userController.update_a_user)
  .delete(userController.delete_a_user);



module.exports = router
