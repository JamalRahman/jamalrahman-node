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
      name: "Group Chat Simulator",
      link: "https://github.com/JamalRahman/fb_messenger_sim",
      image: '../images/splash-swarm.png',
      description: "This NLP multi-agent project simulates a large messenger group chat containing over 100 agents, whose conversational models have been trained using Hidden Markov Models. Agents mimic their real-world counterparts, making conversation based on learned behaviours from 100,000+ training data points."
   },
   {
      name: "C++ Rasterizer",
      link: "https://github.com/jamalrahman/closedgl",
      image: '../images/splash-swarm.png',
      description: "This micro-graphics-engine was written from scratch in pure C++, as an endeavour in understanding the process behind modern computer graphics and to really develop my C++ skills. Everything was hand-written, including a proprierary Bitmap library that can save data to disk as a .bmp image."

   },
   {
      name: "HTTP Web Server",
      link: "https://github.com/jamalrahman/httpServer",
      image: '../images/splash-swarm.png',
      description: "A fully functional, multithreaded, HTTP web server. Written in pure C as an exercise in understanding networking architectures from base-principles, praised for its efficiency & cleanliness."
   },
   {
      name: "Memescraper",
      link: "https://github.com/jamalrahman/memescraper",
      image: "../images/splash-memescraper.png",
      description:"Memescraper is the desktop web-scraping application that mass-downloads reddit content.<br/>Choose your subreddit, choose how many images you want to download and go!"

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
