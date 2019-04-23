'use strict';
const express = require('express')
const machineController = require('../controllers/machineController');


const router = express.Router()


router.route('/')
  .get(machineController.list_all_machines)
  .post(machineController.create_machine);
   
router.route('/:MachineID')
  .get(machineController.read_a_machine)
  .put(machineController.update_a_machine)
  .delete(machineController.delete_a_machine);


module.exports = router