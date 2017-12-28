
var Gpio = require('onoff').Gpio
var segment_a = {} // top middle
var segment_b = {} // top right
var segment_c = {} // bottom right
var segment_d = {} // bottom middle
var segment_e = {} // left bottom
var segment_f = {}  // left top
var segment_g = {} // middle

function defineGPIOPins(pins){
  segment_a = new Gpio(pins.a, 'out') // top middle
  segment_b = new Gpio(pins.b, 'out') // top right
  segment_c = new Gpio(pins.c, 'out') // bottom right
  segment_d = new Gpio(pins.d, 'out') // bottom middle
  segment_e = new Gpio(pins.e, 'out') // left bottom
  segment_f = new Gpio(pins.f, 'out')  // left top
  segment_g = new Gpio(pins.g, 'out') // middle
}

var numbers = {
    0:'abcdef',
    1:'bc',
    2:'abged',
    3:'abgcd',
    4:'fgbc',
    5:'afgcd',
    6:'afgcde',
    7:'abc',
    8:'abcdefg',
    9:'abcdfg',
    'A':'efabcg',
    'B':'abcdefg',
    'C':'afed',
    'D':'abcdef',
    'E' :'afged',
    'F' :'afge',
    'G' :'afedc',
    'H' :'fbgec',
    'I' :'fe',
    'J' :'bcde',
    'K' :'fbgec',
    'L' :'fed',
    'M' :'eca',
    'N' :'egc',
    'O' :'abcdef',
    'P' :'efgba',
    'Q' :'fbd',
    'R' :'eg',
    'S' :'afgcd',
    'T' :'fegd',
    'U' :'fedcb',
    'V' :'edc',
    'W' :'fbd',
    'X' :'febcg',
    'Y' :'fbgcd',
    'Z' :'abged',
  }

function segmentToBinary(character){
    character = character.toUpperCase()
    character = numbers[character]
  	character = character.split('')
    var binary = [0,0,0,0,0,0,0]
    binary[0] = character.indexOf('a') > -1 ? 1 : 0
    binary[1] = character.indexOf('b') > -1 ? 1 : 0
    binary[2] = character.indexOf('c') > -1 ? 1 : 0
    binary[3] = character.indexOf('d') > -1 ? 1 : 0
    binary[4] = character.indexOf('e') > -1 ? 1 : 0
    binary[5] = character.indexOf('f') > -1 ? 1 : 0
    binary[6] = character.indexOf('g') > -1 ? 1 : 0

    return binary
}

function writeToLed(character,timer){
  var litup = segmentToBinary(character)
    segment_a.writeSync(litup[0])
    segment_b.writeSync(litup[1])
    segment_c.writeSync(litup[2])
    segment_d.writeSync(litup[3])
    segment_e.writeSync(litup[4])
    segment_f.writeSync(litup[5])
    segment_g.writeSync(litup[6])
}

module.exports = {
  writeToLed: writeToLed,
  defineGPIOPins: defineGPIOPins
}
