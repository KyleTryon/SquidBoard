// const five = require("johnny-five")
// const board = new five.Board()

const stepper = require("./controllers/stepper.js")
const youtube = require("./controllers/youtube.js")
const weather = require("./controllers/weather.js")
const fetch = require('node-fetch')

// board.on("ready", function() {



//   });


//youtube.getSubscribers()
weather.getTemp('c')

