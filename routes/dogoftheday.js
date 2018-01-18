var express = require('express');
var router = express.Router();


var date = new Date();
var fs = require('fs');
var commentUrl;

fs.readFile('../dotd.txt', 'utf8', function(err, data) {
    if (err) throw err;
    commentUrl = data;
});

router.get('/', function(req, res, next) {
  res.render('dogoftheday', {
     title:"Dog of the Day",
     date:date.getTime(),
     commentUrl:"https://reddit.com/"
  })
});

module.exports = router;
