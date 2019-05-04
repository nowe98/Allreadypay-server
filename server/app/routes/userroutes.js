'use strict';
const express = require('express')
const userController = require('../controllers/userController');
const auth = require('../controllers/auth');
const authMiddleware = require('../middlewares/authMiddleware')

const router = express.Router()


router.route('/')
  .get(userController.list_all_users)
  .post(userController.create_user);

router.route('/auth')
  .get(authMiddleware.authenticate, (req, res) => {
  res.status(200).send(req.headers.authorization)
})
   
router.route('/:MobileNum')
  .get(userController.read_a_user)
  .put(userController.update_a_user)
  .delete(userController.delete_a_user);


router.route('/login')
  .post(auth.login, auth.generate_token, auth.send_token);


module.exports = router
