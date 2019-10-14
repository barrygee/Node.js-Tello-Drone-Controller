function buildCommandObject(obj) {
  const { command, value, delay } = obj

  return value ? { command: `${command} ${value}`, delay: delay } : { command: command, delay: delay }
}

function command() {
  return buildCommandObject({ 'command': 'command', 'value': null, 'delay': 500 })
}

/*
  information commands
*/
function battery() {
  return buildCommandObject({ 'command': 'battery?', 'value': null, 'delay': 500 })
}

function getSpeed() {
  return buildCommandObject({ 'command': 'speed?', 'value': null, 'delay': 3000 })
}

function current_flight_duration() {
  return buildCommandObject({ 'command': 'time?', 'value': null, 'delay': 500 })
}

function height() {
  return buildCommandObject({ 'command': 'height?', 'value': null, 'delay': null })
}

function temperature() {
  return buildCommandObject({ 'command': 'temp?', 'value': null, 'delay': null })
}

function attitude() {
  return buildCommandObject({ 'command': 'attitude?', 'value': null, 'delay': null })
}

function barometer() {
  return buildCommandObject({ 'command': 'barometer?', 'value': null, 'delay': null })
}

function acceleration() {
  return buildCommandObject({ 'command': 'acceleration?', 'value': null, 'delay': null })
}

function tof() {
  return buildCommandObject({ 'command': 'tof?', 'value': null, 'delay': null })
}

function wifi_signal_to_noise_ratio() {
  return buildCommandObject({ 'command': 'wifi?', 'value': null, 'delay': null })
}

/*
  control commands
*/
function emergency() {
  return buildCommandObject({ 'command': 'emergency', 'value': null, 'delay': null })
}

function takeoff() {
  return buildCommandObject({ 'command': 'takeoff', 'value': null, 'delay': 10000 })
}

function land() {
  return buildCommandObject({ 'command': 'land', 'value': null, 'delay': 5000 })
}

function speed(value) {
  return buildCommandObject({ 'command': 'speed', 'value': value, 'delay': null })
}

function up(value) {
  return buildCommandObject({ 'command': 'up', 'value': value, 'delay': 7000 })
}

function down(value) {
  return buildCommandObject({ 'command': 'down', 'value': value, 'delay': 7000 })
}

function forward(value) {
  return buildCommandObject({ 'command': 'forward', 'value': value, 'delay': 5000 })
}

function back(value) {
  return buildCommandObject({ 'command': 'back', 'value': value, 'delay': 5000 })
}

function left(value) {
  return buildCommandObject({ 'command': 'left', 'value': value, 'delay': 5000 })
}

function right(value) {
  return buildCommandObject({ 'command': 'right', value: value, 'delay': 5000 })
}

function turn_clockwise(value) {
  return buildCommandObject({ 'command': 'cw', 'value': value, 'delay': 7000 })
}

function turn_counter_clockwise(value) {
  return buildCommandObject({ 'command': 'ccw', 'value': value, 'delay': 7000 })
}

/*
  direction options
    'l' - left
    'r' - right
    'f' - forward
    'b' - back
*/
function flip(direction) {
  return buildCommandObject({ 'command': 'flip', 'value': direction, 'delay': 3000 })
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