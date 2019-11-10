const express    = require('express')
const router     = express.Router()

const Drone      = require('./drone/drone')
const { host, port, state } = require('./config/drone.json').connection


// default route
router.get('/', (req, res) => {
  let drone = new Drone(host, port)
  drone.send(drone.convertToCommandSequence('streamDroneStatus'),
             drone.host,
             drone.port)
       .then(() => res.send('App ui'))
       .catch(error => res.send(`There was an error ${error}`))
})


// default route
router.get('/state', (req, res) => {
  let drone = new Drone(host, state.port)
})


/*
  send a command sequence to the drone

  @options:
    abort
    testSequence
    launchAndLandSequence
*/
router.get('/command', (req, res) => {
  drone.send(drone.convertToCommandSequence(req.query.commandSequence),
             drone.host,
             drone.port,
             drone.errorHandler)
       .then(() => res.redirect('/'))
       .catch(error => console.log(`There was an error ${error}`))
})

module.exports = router