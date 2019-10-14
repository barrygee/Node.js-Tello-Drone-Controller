const dgram = require('dgram') // interact with UDP in NodeJS
const { wait } = require('../utils')
const { streamDroneStatus, abort, testSequence, launchAndLandSequence } = require('./commandSequences')

class Drone {

  constructor(host, port) {
    this.host = host
    this.port = port
    this.connectToDrone(dgram, this.port)
  }

  connectToDrone(dgram, port) {
    // set up UDP connection to the drone
    this.UDPSocket = dgram.createSocket('udp4')
    this.UDPSocket.bind(port)

    // when a message is received from the drone pass it to the messageFromDrone()
    this.UDPSocket.on('message', message => this.messageFromDrone(message))
  }

  messageFromDrone(message) {
    console.log(`Message From drone: ${message}`)
  }

  async send(commandSequence, host, port, errorHandler) {

    for(let command of commandSequence) {

      console.log(`Running command: ${command.command}, with delay of ${command.delay} milliseconds`)
      
      this.UDPSocket.send(command.command, 0, command.command.length, port, host, errorHandler)

      await wait(command.delay)
    } 
  }

  errorHandler(error) {
    throw new Error(error)
  }

  convertToCommandSequence(commandSequenceName) {

    let commandSequence

    switch(commandSequenceName) {
      case 'streamDroneStatus': 
        commandSequence = streamDroneStatus
        break

      case 'launchAndLandSequence': 
        commandSequence = launchAndLandSequence
        break

      case 'abort': 
        commandSequence = abort
        break

      case 'testSequence': 
        commandSequence = testSequence
        break

      default:
        throw new Error('Unrecognised command sequence name provided')
    }

    return commandSequence
  }
}

module.exports = Drone