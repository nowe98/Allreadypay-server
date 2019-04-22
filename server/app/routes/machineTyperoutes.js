'use strict';
const express = require('express')
const typeController = require('../controllers/machineTypeController');

const router = express.Router()


router.route('/')
  .get(typeController.list_all_types)
  .post(typeController.create_types);
   
router.route('/:MachineType')
  .get(typeController.read_a_type)
  .delete(typeController.delete_a_type);


module.exports = router