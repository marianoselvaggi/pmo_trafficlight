var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt');
var User = require('../models/users.js');

exports.register = function(req,res){
  var newUser = new User(req.body);
  newUser.hash_password = bcrypt.hashSync(req.body.password,10);
  newUser.save(function(err,user){
    if(err) {
      return res.status(400).send({
        message: err.message
      });
    } else {
      user.hash_password = undefined;
      return res.json(user);
    }
  });
};

exports.authenticate = function(req,res){
  User.findOne({
    email: req.body.email
  }, function(err,user){
    if(!user) {
      return res.status(401).send({
        message: 'Authentication failed. User not found!'
      });
    } else {
      if(!user.ComparePassword(req.body.password)) {
        return res.status(401).send({
          message: 'Authentication failed. Wrong password!'
        });
      } else {
        var token = jwt.sign({
          email: user.email,
          fullName: user.fullName,
          id: user._id
        },req.app.get('supersecret'),{
            expiresIn:60*60*4
        });

        return res.json({
          success:true,
          message: 'Enjoy your token!',
          token: token
        });
      }
    }
  });
};

exports.loginRequired = function(req,res,next){
  if(req.user) {
    next();
  } else {
    return res.status(401).json({message: 'Unauthorized user!'});
  }
}
