'use strict';
const express = require('express')
const SlotController = require('../controllers/slotController');

const router = express.Router()


router.route('/:MachineID')
  .get(SlotController.list_all_slot_in_machine);

router.route('/amount/:MachineID/:NumberSlot')
  .put(SlotController.update_amount);
  
router.route('/:MachineID/:NumberSlot')
  .get(SlotController.read_a_slot)
  .put(SlotController.update_a_slot);


module.exports = router