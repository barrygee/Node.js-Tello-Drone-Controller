const commands = require('./commands')

function testSequence() {
  return [commands.command(), 
          commands.takeoff(), 
          commands.up(40), 
          commands.turn_clockwise(360),
          commands.turn_counter_clockwise(360),
          commands.forward(40),
          commands.back(40),
          commands.left(40),
          commands.right(40),
          commands.land()]
}

module.exports = { 
  testSequence 
}