var express = require('express');
var router = express.Router();
var UserCtrl = require('../controllers/users.js')

/* GET users listing. */
router.post('/register', function(req, res, next) {
  UserCtrl.register(req,res);
});

router.post('/authenticate',function(req,res,next){
  UserCtrl.authenticate(req,res);
});

module.exports = router;
