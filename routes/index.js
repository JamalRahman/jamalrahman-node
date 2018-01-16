var express = require('express');
var router = express.Router();

var projects = [
   {
      name: "Swarm",
      link: "https://jamalrahman.co.uk/swarm",
      description: "Swarm is an agent-based-modelling approach to search. Watch a psuedorandomly generated graph traversal problem be solved in real time using swarm intelligent algorithms."
   },
   {
      name: "Memescraper",
      link: "https://static.jamalrahman.co.uk/Memescraper.jar",
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
