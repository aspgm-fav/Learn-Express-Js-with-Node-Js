var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Ecommerce' });
});
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Ecommerce' });
});
router.get('/register', function(req, res, next) {
  res.render('register', { title: 'Ecommerce' });
});

module.exports = router;
