var express = require('express');
var router = express.Router();
var UserCtrl = require('../controllers/users.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/authenticate',function(req,res,next){
  UserCtrl.authenticate(req,res);
});

module.exports = router;
