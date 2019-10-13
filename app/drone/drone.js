const dgram = require('dgram') // interact with UDP in NodeJS
const { wait } = require('../utils')

class Drone {

  constructor(HOST, PORT) {
    this.host = HOST
    this.port = PORT
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

  async send(commands, HOST, PORT, errorHandler) {

    let i = 0

    while(i <= commands.length) {

      console.log(`Running command ${commands[i].command}, with delay of ${commands[i].delay}`)
      
      const { command, delay } = commands[i]

      this.UDPSocket.send(command, 0, command.length, PORT, HOST, errorHandler)

      await wait(delay)

      i += 1
    }
  }

  errorHandler(error) {
    throw new Error(error)
  }
}

module.exports = Drone