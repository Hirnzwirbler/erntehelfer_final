var express = require('express');
var router = express.Router();

// passport.use(new LocalStrategy(Login.login));

router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});
// index page 
router.get('/', function(req, res) {
    res.render('pages/index');
});

// about page 
router.get('/about', function(req, res) {
    res.render('pages/about');
});

// Login
router.get('/login', function(req, res){
    res.render('pages/login');
})

router.post('/login', function(req, res){
  res.redirect('../user/login');
})


// Profile
router.get('/profile', function(req, res){
    res.redirect('../user/me')
    //res.render('pages/profile');
})

// Campaigns
router.get('/campaign', function(req, res){
    res.render('pages/campaign');
})

// Campaigns
router.get('/register', function(req, res){
    res.render('pages/register');
})

router.post('/register', function(req, res){
    res.redirect('../user/signup');
  });

  module.exports = router;