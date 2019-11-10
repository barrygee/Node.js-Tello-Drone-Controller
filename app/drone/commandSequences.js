const { command, 
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
        flip } = require('./commands')

const streamDroneStatus = [command(),
                           battery(),
                           temperature(),
                           height(),
                           getSpeed(),
                           current_flight_duration(),
                           acceleration(),
                           attitude(),
                           barometer()]

const abort = [command(),
               emergency()]

const testSequence = [command(), 
                      takeoff(), 
                      up(40),
                      down(40), 
                      turn_clockwise(360),
                      turn_counter_clockwise(360),
                      forward(40),
                      back(40),
                      left(40),
                      right(40),
                      land()]

const launchAndLandSequence = [command(), 
                               takeoff(), 
                               turn_clockwise(360),
                               turn_counter_clockwise(360),
                               land()]

const launchAndFlip= [command(), 
                      takeoff(), 
                      flip('l'),
                      flip('r'),
                      land()]

module.exports = { 
  streamDroneStatus,
  abort,
  testSequence,
  launchAndLandSequence,
  launchAndFlip
}