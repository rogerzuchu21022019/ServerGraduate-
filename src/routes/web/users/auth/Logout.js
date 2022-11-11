var express = require('express');
var router = express.Router();

router.get('/auth/logout', function(req, res, next) {
  res.render('login')
});

module.exports = router;

