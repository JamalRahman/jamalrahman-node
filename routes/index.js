var express = require('express');
var router = express.Router();

var projects = [
   {
      name: "Agent-Based Modelling of Traffic Evacuation Strategies",
      link: "https://static.jamalrahman.co.uk/dissertation.pdf",
      image: '../images/splash-diss.png',
      description: "The dissertation for my Masters degree. This project builds a scalable multi-agent model of road traffic, designed to simulate regional evacuation scenarios. It is capable of running experiments on arbitrary configurable scenarios."
   },
   {
      name: "ClosedGL",
      link: "https://github.com/jamalrahman/closedgl",
      image: '../images/splash-swarm.png',
      description: "ClosedGL is a 3D rendering engine written from scratch in pure C++, as an endeavour in understanding the process behind modern computer graphics. The name is a pun on the Open Graphics Library (OpenGL)."

   },
   {
      name: "Memescraper",
      link: "https://static.jamalrahman.co.uk/Memescraper.jar",
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
