var express = require('express');
var router = express.Router();

router.delete('/auth/logout', function(req, res, next) {
  res.render('login')
});

module.exports = router;

