'use strict';
const express = require('express')
const recentController = require('../controllers/recentController');


const router = express.Router()


router.route('/')
  .get(recentController.list_all_recents)
  .post(recentController.create_recent);
   
router.route('/:RecentID')
  .get(recentController.read_a_recent);


module.exports = router