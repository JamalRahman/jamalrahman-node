var express = require('express');
var router = express.Router();

var date = new Date();
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('dogoftheday', {
     title:"Dog of the Day",
     date:date.getTime(),
     commentUrl:"loltest"
  })
});

module.exports = router;
