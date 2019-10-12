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
                      buildCommandObject(up, 40), 
                      buildCommandObject(turn_counter_clockwise, 360), 
                      buildCommandObject(turn_clockwise, 360), 
                      buildCommandObject(forward, 40), 
                      buildCommandObject(back, 40),
                      buildCommandObject(left, 10),
                      buildCommandObject(right, 10), 
                      land]


async function go() {
  drone.send(testSequence, HOST, PORT, drone.errorHandler)
}

function buildCommandObject(command, value) {
  return { command: `${command.command} ${value}`, delay: command.delay }
}

go()