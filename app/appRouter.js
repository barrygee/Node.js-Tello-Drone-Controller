const express             = require('express')
const router              = express.Router()

const { abort, testSequence, launchAndLandSequence } = require('./drone/commandSequences')

const Drone               = require('./drone/drone')
const { HOST, PORT }      = require('./config/drone.json').connection

// create new Drone object
const drone = new Drone(HOST, PORT)


// default route
router.get('/', (req, res) => {
  res.send('App ui')
})

// send a command sequence to the drone
router.get('/command?commandSequence', (req, res) => {
  drone.send(req.params.commandSequence, 
             drone.host, 
             drone.port, 
             drone.errorHandler)
       .then(() => res.redirect('/'))
       .catch(error => console.log(`There was an error ${error}`))
})

// catch all undefined routes - redirect back to the default route
router.get('*', (req, res) => res.redirect('/'))

module.exports = router;