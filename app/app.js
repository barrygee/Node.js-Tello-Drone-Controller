const { HOST, PORT } = require('./config/drone.json').connection
const { command } = require('./config/drone.json').commands
const { speed, battery, current_flight_duration, height, temperture, attitude, barometer, acceleration, tof, wifi_signal_to_noise_ratio } = require('./config/drone.json').commands.get
const { emergency, takeoff, land, video_stream_on, video_stream_off, up, down, left, right, forward, back, turn_clockwise, turn_counter_clockwise, flip } = require('./config/drone.json').commands.control
const { wait } = require('./utils')

const Drone = require('./drone/drone')

// create new Drone object
const drone = new Drone(HOST, PORT)

const testSequence = [command, 
                      takeoff, 
                      buildCommand(up, 40), 
                      buildCommand(turn_counter_clockwise, 360), 
                      buildCommand(turn_clockwise, 360), 
                      buildCommand(forward, 40), 
                      buildCommand(back, 40),
                      buildCommand(left, 10),
                      buildCommand(right, 10), 
                      land]


async function go() {
  drone.send(testSequence, HOST, PORT, drone.errorHandler)
}

function buildCommand(command, value) {
  return { command: `${command.command} ${value}`, delay: command.delay }
}

go()