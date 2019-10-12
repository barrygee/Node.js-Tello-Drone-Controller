const { command } = require('./config/drone.json').commands

const { get_speed, 
        battery, 
        current_flight_duration, 
        height, 
        temperture, 
        attitude, 
        barometer, 
        acceleration, 
        tof, 
        wifi_signal_to_noise_ratio } = require('./config/drone.json').commands.get
        
const { emergency, 
        takeoff, 
        land,
        speed, 
        video_stream_on, 
        video_stream_off, 
        up, 
        down, 
        left, 
        right, 
        forward, 
        back, 
        turn_clockwise, 
        turn_counter_clockwise, 
        flip } = require('./config/drone.json').commands.control


function buildCommandObject(command, value) {
  return { command: `${command.command} ${value}`, delay: command.delay }
}

static function command() {
  return command
}

/*
 control commands
*/
static function emergency() {
  return emergency
}

static function takeoff() {
  return takeoff
}

static function land() {
  return land
}

static function speed(value) {
  return buildCommandObject(speed, value)
}

static function up(value) {
  return buildCommandObject(up, value)
}

static function down(value) {
  return buildCommandObject(down, value)
}

static function forward(value) {
  return buildCommandObject(forward, value)
}

static function back(value) {
  return buildCommandObject(back, value)
}

static function left(value) {
  return buildCommandObject(left, value)
}

static function right(value) {
  return buildCommandObject(right, value)
}

static function turn_clockwise(value) {
  return buildCommandObject(turn_clockwise, value)
}

static function turn_counter_clockwise(value) {
  return buildCommandObject(turn_counter_clockwise, value)
}

static function flip(direction) {

  switch(direction) {
    case 'left':
      return buildCommandObject(flip, 'l')

    case 'right':
      return buildCommandObject(flip, 'r')

    case 'forward':
      return buildCommandObject(flip, 'f')
    
    case 'back':
      return buildCommandObject(flip, 'b')

    default:
        return buildCommandObject(flip, 'b')
  }
}

/*
 information commands
*/

static function battery() {
  return battery
}