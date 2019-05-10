'use strict';
const express = require('express')
const machineController = require('../controllers/machineController');


const router = express.Router()


router.route('/')
  .get(machineController.list_all_machines)
  .post(machineController.create_machine);

router.route('/admin')
  .get(machineController.list_all_machines_admin);

router.route('/:MachineID')
  .get(machineController.read_a_machine)
  .put(machineController.update_a_machine)
  .delete(machineController.delete_a_machine);

router.route('/ip/:MachineID')
  .put(machineController.update_ip);



module.exports = router