var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { page: 'Home' });
});

router.get('/home', function (req, res, next) {
  res.render('index', { page: 'Home' });
});


router.get('/projects', function (req, res, next) {
  res.render('index', { page: 'Projects' });
});

router.get('/about-me', function (req, res, next) {
  res.render('index', { page: 'About Me' });
});

router.get('/services', function (req, res, next) {
  res.render('index', { page: 'Services' });
});

router.get('/contact-me', function (req, res, next) {
  res.render('index', { page: 'Contact Me' });
});


module.exports = router;
