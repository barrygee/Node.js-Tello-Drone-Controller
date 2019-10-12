const { HOST, PORT } = require('./config/drone.json').connection
const commands = require('./commands')
const commandSequences = require('./commandSequences')

const Drone = require('./drone/drone')

// create new Drone object
const drone = new Drone(HOST, PORT)

async function go() {
  drone.send(commandSequences.testSequence, HOST, PORT, drone.errorHandler)
}



go()