var express = require('express');
var router = express.Router();

var projects = [
   {
      name: "Agent-Based Modelling of Traffic Evacuation Strategies",
      link: "https://static.jamalrahman.co.uk/dissertation.pdf",
      image: '../images/splash-diss.png',
      description: "The dissertation for my Masters degree. This project develops a robust multi-agent optimisation system in Java capable of simulating traffic evacuations on arbitrary graphed road networks, and evaluating evacuation performance over configurable scenarios."
   },
   {
      name: "C++ Rasterizer",
      link: "https://github.com/jamalrahman/closedgl",
      image: '../images/splash-swarm.png',
      description: "This micro-graphics-engine was written from scratch in pure C++, as an endeavour in understanding the process behind modern computer graphics and to really develop my C++ skills. Everything was hand-written, including a proprierary Bitmap library that can save data to disk as a .bmp image."

   },
   {
      name: "Hybrid TFIDF",
      link: "https://github.com/jamalrahman/hybridtfidf",
      image: '../images/splash-hybridtfidf.png',
      description: "A Python implementation of the Hybrid-TFIDF algorithm This is an implementation of the Hybrid TF-IDF algorithm as proposed by David Ionuye and Jugal K. Kalita (2011)."
   },
   {
      name: "Memescraper",
      link: "https://github.com/jamalrahman/memescraper",
      image: "../images/splash-memescraper.png",
      description:"Memescraper is the desktop web-scraping application that mass-downloads reddit content.<br/>Choose your subreddit, choose how many images you want to download and go!"

   },
   {
      name: "Find A Game - Recommendation",
      link: "https://github.com/JamalRahman/recommender",
      image: "../images/recc.png",
      description:"Video Game recommendation system & genre-exploration using vector embeddings"

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
