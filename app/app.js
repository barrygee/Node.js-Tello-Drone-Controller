const { HOST, PORT } = require('./config/drone.json').connection
const commands = require('./drone/commands')
const { testSequence } = require('./drone/commandSequences')

const Drone = require('./drone/drone')

// create new Drone object
const drone = new Drone(HOST, PORT)

async function go() {
  drone.send(testSequence, HOST, PORT, drone.errorHandler)
}

go()