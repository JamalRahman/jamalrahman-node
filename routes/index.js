var express = require('express');
var router = express.Router();

var projects = [
   {
      name: "ClosedGL",
      link: "https://jamalrahman.co.uk/ClosedGL",
      image: '../images/splash-swarm.png',
      description: "ClosedGL is a 3D rendering engine written from scratch in pure C++, as an endeavour in understanding the process behind modern computer graphics. The name is a pun on the Open Graphics Library (OpenGL)."

   },
   {
      name: "Memescraper",
      link: "https://blog.jamalrahman.co.uk/memescraper/",
      image: "../images/splash-memescraper.png",
      description:"Memescraper is the desktop application that mass-downloads reddit content.<br/>Choose your subreddit, choose how many images you want to download and go!"

   }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
     title: 'Home',
     projects: projects
  });
});

module.exports = router;
