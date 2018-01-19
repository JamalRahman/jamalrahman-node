
var express = require('express');
var router = express.Router();


var date = new Date();
var fs = require('fs');
var url;



router.get('/', function(req, res, next) {

   fs.readFile('dotd.txt', 'utf8', function(err, data) {
       if (err) throw err;
       url = data;
   });
   
  res.render('dogoftheday', {
     title:"Dog of the Day",
     date:date.getTime(),
     commentUrl: "https://reddit.com"+url
  })
});

module.exports = router;
