'use strict';
const express = require('express')
const auth = require('../controllers/auth');
const authMiddleware = require('../middlewares/authMiddleware')

const router = express.Router()


router.route('/auth')
  .get(authMiddleware.authenticate, (req, res) => {
  res.status(200).send(req.headers.authorization)
})

router.route('/loginadmin')
    .post(auth.login_admin,auth.generate_token_admin, auth.send_token);

router.route('/login')
  .post(auth.login, auth.generate_token, auth.send_token);


module.exports = router
