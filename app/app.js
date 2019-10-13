const { HOST, PORT } = require('./config/drone.json').connection
const commands = require('./drone/commands')
const { testSequence, launchAndLandSequence } = require('./drone/commandSequences')

const Drone = require('./drone/drone')

// create new Drone object
const drone = new Drone(HOST, PORT)


async function go() {
  console.log(launchAndLandSequence)
  // drone.send(launchAndLandSequence, HOST, PORT, drone.errorHandler)
  // drone.send(testSequence(), HOST, PORT, drone.errorHandler)
}

go()