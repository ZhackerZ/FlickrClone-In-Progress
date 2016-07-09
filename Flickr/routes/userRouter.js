var express = require('express');
var bodyParser = require('body-parser');

var passport = require('passport');
var Verify = require('./verify'); 

var Users = require('../models/users');

var router = express.Router();
router.use(bodyParser.json());

router.post('/register', function(req, res) {
    User.register(new User({ username : req.body.username }),
      req.body.password, function(err, user) {
        if (err) {
            return res.status(500).json({err: err});
        }
        passport.authenticate('local')(req, res, function () {
            return res.status(200).json({status: 'Registration Successful!'});
        });
    });
});

router.post('/login', function(req, res, next) {
  passport.authenticate('local', function(err, user, info) {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.status(401).json({
        err: info
      });
    }
    req.logIn(user, function(err) {
      if (err) {
        return res.status(500).json({
          err: 'Could not log in user'
        });
      }
        
      var token = Verify.getToken(user);
      res.status(200).json({
        status: 'Login successful!',
        success: true,
        token: token
      });
    });
  })(req,res,next);
});

router.get('/logout', function(req, res) {
    req.logout();
  res.status(200).json({
    status: 'Bye!'
  });
});


router.route('/')
.get(function (req, res, next) {
    Users.find({}, function (err, user) {
        if (err) throw err;
        res.json(user);
    });
})

.delete(function (req, res, next) {
    Users.remove({}, function (err, resp) {
        if (err) throw err;
        res.json(resp);
    });
});

router.route('/:userId')
.get(function (req, res, next) {
    Users.findById(req.params.userId, function (err, user) {
        if (err) throw err;
        res.json(user);
    });
})

.put(function (req, res, next) {
    Users.findByIdAndUpdate(req.params.userId, {
        $set: req.body
    }, {
        new: true
    }, function (err, user) {
        if (err) throw err;
        res.json(user);
    });
})

.delete(function (req, res, next) {
    Users.findByIdAndRemove(req.params.userId, function (err, resp) {        
    	if (err) throw err;
        res.json(resp);
    });
});

module.exports = router;