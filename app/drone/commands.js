function command() {
  return { 'command': 'command', 'delay': 500 }
}

/*
  information commands
*/
function battery() {
  return { 'command': 'battery?', 'delay': 500 }
}

function getSpeed() {
  return { 'command': 'speed?', 'delay': 3000 }
}

function current_flight_duration() {
  return { 'command': 'time?', 'delay': 500 }
}

function height() {
  return { 'command': 'height?', 'delay': null }
}

function temperature() {
  return { 'command': 'temp?', 'delay': null }
}

function attitude() {
  return { 'command': 'attitude?', 'delay': null }
}

function barometer() {
  return { 'command': 'barometer?', 'delay': null }
}

function acceleration() {
  return { 'command': 'acceleration?', 'delay': null }
}

function tof() {
  return { 'command': 'tof?', 'delay': null }
}

function wifi_signal_to_noise_ratio() {
  return { 'command': 'wifi?', 'delay': null }
}

/*
  control commands
*/
function emergency() {
  return { 'command': 'emergency', 'delay': null }
}

function takeoff() {
  return { 'command': 'takeoff', 'delay': 10000 }
}

function land() {
  return { 'command': 'land', 'delay': 5000 }
}

function speed(value) {
  return { 'command': `speed ${value}`, 'delay': null }
}

function up(value) {
  return { 'command': `up ${value}`, 'delay': 7000 }
}

function down(value) {
  return { 'command': `down ${value}`, 'delay': 7000 }
}

function forward(value) {
  return { 'command': `forward ${value}`, 'delay': 5000 }
}

function back(value) {
  return { 'command': `back ${value}`, 'delay': 5000 }
}

function left(value) {
  return { 'command': `left ${value}`, 'delay': 5000 }
}

function right(value) {
  return { 'command': `right ${value}`, value: value, 'delay': 5000 }
}

function turn_clockwise(value) {
  return { 'command': `cw ${value}`, 'delay': 7000 }
}

function turn_counter_clockwise(value) {
  return { 'command': `ccw ${value}`, 'delay': 7000 }
}

/*
  direction options
    'l' - left
    'r' - right
    'f' - forward
    'b' - back
*/
function flip(direction) {
  return { 'command': `flip ${direction}`, 'delay': 3000 }
}

module.exports = { 
  command, 
  battery,
  getSpeed,
  current_flight_duration,
  height,
  temperature,
  attitude,
  barometer,
  acceleration,
  tof,
  wifi_signal_to_noise_ratio,
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