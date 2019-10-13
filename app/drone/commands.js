const { commands } = require('../config/drone.json')
const { get, control } = require('../config/drone.json').commands


  function buildCommandObject(command, value) {
    return { command: `${command.command} ${value}`, delay: command.delay }
  }

  function command() {
    return commands.command
  }

  /*
  control commands
  */
  function emergency() {
    return control.emergency
  }

  function takeoff() {
    return control.takeoff
  }

  function land() {
    return control.land
  }

  function speed(value) {
    return buildCommandObject(control.speed, value)
  }

  function up(value) {
    return buildCommandObject(control.up, value)
  }

  function down(value) {
    return buildCommandObject(control.down, value)
  }

  function forward(value) {
    return buildCommandObject(control.forward, value)
  }

  function back(value) {
    return buildCommandObject(control.back, value)
  }

  function left(value) {
    return buildCommandObject(control.left, value)
  }

  function right(value) {
    return buildCommandObject(control.right, value)
  }

  function turn_clockwise(value) {
    return buildCommandObject(control.turn_clockwise, value)
  }

  function turn_counter_clockwise(value) {
    return buildCommandObject(control.turn_counter_clockwise, value)
  }

  function flip(direction) {

    switch(direction) {
      case 'left':
        return buildCommandObject(control.flip, 'l')

      case 'right':
        return buildCommandObject(control.flip, 'r')

      case 'forward':
        return buildCommandObject(control.flip, 'f')
      
      case 'back':
        return buildCommandObject(control.flip, 'b')

      default:
          return buildCommandObject(control.flip, 'b')
    }
  }

  /*
  information commands
  */

  function battery() {
    return get.battery
  }

  module.exports = { 
    command, 
    battery,
    emergency,
    takeoff,
    land,
    speed,
    up,
    down,
    forward,
    back,
    left,
    right,
    turn_clockwise,
    turn_counter_clockwise,
    flip
   }