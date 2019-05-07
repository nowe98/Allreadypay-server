'use strict';
const express = require('express')
const recentController = require('../controllers/recentController');


const router = express.Router()


router.route('/')
  .get(recentController.list_all_recents)
  .post(recentController.create_recent);
   
router.route('/:RecentID')
  .get(recentController.read_a_recent);

router.route('/user/:MobileNum')
  .get(recentController.read_a_recent_by_user);


module.exports = router