'use strict';
const express = require('express')
const placeController = require('../controllers/placeController');

const router = express.Router()


router.route('/')
  .get(placeController.list_all_places)
  .post(placeController.create_place);
   
router.route('/:PlaceID')
  .get(placeController.read_a_place)
  .put(placeController.update_a_place)
  .delete(placeController.delete_a_place);


module.exports = router