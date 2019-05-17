const jwt = require('jsonwebtoken');
const User = require('../models/userModel')
const Admin = require('../models/adminModel')
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
      id: MobileNum,
      type: 'user'
    }
    next()
    
  })
}

exports.login_admin = function(req, res, next) {
  const AdminID = req.body.AdminID
  const Pass =  req.body.Pass
  

  if(!AdminID||!Pass)
    res.status(404).send('fill information')
  Admin.getAdminById(AdminID, function(err, admin) {
    if (err)
      res.send(err);
      admin[0].Pass
    let valid = Admin.validatePassword(admin[0],Pass)
    if(!valid)
      res.status(401).send('Password not match')
    req.auth ={
      id: AdminID,
      type: 'admin',
      level: admin[0].llevel
    }
    next()
    
  })
}

exports.generate_token_admin = function (req, res,next) {
  req.token = jwt.sign({
    id: req.auth.id,
    type: req.auth.type,
    level: req.auth.level
  }, process.env.JWT_SECRET);
  next()
}

exports.generate_token = function (req, res,next) {
  req.token = jwt.sign({
    id: req.auth.id,
    type: req.auth.type
  }, process.env.JWT_SECRET);
  next()
}
exports.send_token = function (req, res){
  res.setHeader('authorization', req.token)
  res.status(200).json(req.auth)
}
