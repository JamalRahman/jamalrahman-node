var express = require('express');
var router = express.Router();

var projects = [
   {
      name: "ClosedGL",
      link: "https://jamalrahman.co.uk/ClosedGL",
      image: '../images/splash-swarm.png',
      description: "ClosedGL is a pun on the Open Graphics Library (OpenGL). It is a 3D rendering engine written from scratch in pure C++, as an endeavour in understanding the process behind computer graphics."

   },
   {
      name: "Memescraper",
      link: "https://blog.jamalrahman.co.uk/memescraper/",
      image: "../images/splash-memescraper.png",
      description:"Memescraper is the desktop application that mass-downloads reddit content.<br/>Choose your subreddit, choose how many images you want to download and go!"

   },
   {
      name: "Dog of the Day",
      link: "/dogoftheday",
      image: "../images/splash-pup.jpg",
      description:"Dog of the Day is a simple web app that scrapes reddit.com/r/dogpictures on a 24 hourly basis.<br/>The most popular dog photo at the time is downloaded and displayed as today's dog."
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
