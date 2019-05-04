const jwt = require('jsonwebtoken');
const User = require('../models/userModel')
const dotenv = require('dotenv')

dotenv.config()

exports.login = function(req, res, next) {
  const MobileNum = req.body.MobileNum
  const Pass =  req.body.Pass
  

  if(!MobileNum||!Pass)
    res.status(404).send('fill information')
  User.getUserById(MobileNum, function(err, user) {
    if (err)
      res.send(err);
      
    let valid = User.validatePassword(user[0],Pass)
    if(!valid)
      res.status(401).send('Password not match')
    req.auth ={
      id: MobileNum
    }
    next()
    
  })
}

exports.generate_token = function (req, res,next) {
  req.token = jwt.sign({
    id: req.auth.id,
  }, process.env.JWT_SECRET);
  next()
}
exports.send_token = function (req, res){
  res.setHeader('authorization', req.token)
  res.status(200).json(req.auth)
}
