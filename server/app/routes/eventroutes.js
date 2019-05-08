'use strict';
const express = require('express')
const eventController = require('../controllers/eventController');

const router = express.Router()


router.route('/')
  .get(eventController.list_all_events)
  .post(eventController.create_event);
   
router.route('/:EventID')
  .get(eventController.read_a_event)
  .put(eventController.update_a_event)
  .delete(eventController.delete_a_event);


module.exports = router