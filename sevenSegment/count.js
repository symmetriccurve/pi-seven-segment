var Gpio = require('onoff').Gpio // Constructor function for Gpio objects.
//var button = new Gpio(8, 'out')
// var a = new Gpio(2, 'out')
// var b = new Gpio(3, 'out')
// var c = new Gpio(4, 'out')
// var d = new Gpio(5, 'out')
// var e = new Gpio(6, 'out')
// var f = new Gpio(7, 'out')

var a = new Gpio(19, 'out') // top middle
var b = new Gpio(13, 'out') // top right
var c =  new Gpio(20, 'out') // bottom right
var d =  new Gpio(16, 'out') // bottom middle
var e =  new Gpio(12, 'out') // left bottom
var f = new Gpio(6, 'out') // left top
var g = new Gpio(26, 'out') // middle


var number_1= [1,1,0,0,0,0,0]
var number_2= [1,1,0,1,1,0,1]
var number_3= [1,1,1,1,1,1,1]
var number_4= [1,1,1,1,1,1,1]
var number_5= [1,1,1,1,1,1,1]
var number_6= [1,1,1,1,1,1,1]
var number_7= [1,1,1,1,1,1,1]
var number_8= [1,1,1,1,1,1,1]
var number_9= [1,1,1,1,0,1,1]
var H= [0,1,1,0,1,1,1]
var I= [0,0,0,0,1,1,0]

//var button = new Gpio(8, 'in', 'both');
//var request = require('request')
function segmentToBinary(character){
  // character = ['a','b','c','f']
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

function writeToLed(character){
  var litup = [0,0,0,0,0,0,0]
  switch (character) {
    case 's':
        litup = S
      break;
    case 'I':
        litup = I
      break;
    case 'H':
        litup = H
      break;
    case '2':
        litup = number_2
      break;
    case '3':
        litup = number_3
      break;
    case '4':
        litup = number_4
      break;
    case '5':
        litup = number_5
      break;
    case '6':
        litup = number_6
      break;
    case '7':
        litup = number_7
      break;
    case '8':
        litup = number_8
      break;
    case '9':
        litup = number_9
      break;
    default:

  }
  a.writeSync(litup[0])
  b.writeSync(litup[1])
  c.writeSync(litup[2])
  d.writeSync(litup[3])
  e.writeSync(litup[4])
  f.writeSync(litup[5])
  g.writeSync(litup[6])
}

writeToLed('2')
// a.writeSync(1)
// b.writeSync(1)
// c.writeSync(1)
//
// setTimeout(function(){
//   a.writeSync(0)
//   b.writeSync(0)
//   c.writeSync(0)
// },5000)
// d.writeSync(1)
// e.writeSync(1)
// f.writeSync(1)
// g.writeSync(1)
//a.unexport();
// b.writeSync(1)
// c.writeSync(1)

// button.watch(function(err, value) {
//   if(value){
//     console.log("Button Released")
//   }else{
//     console.log("Button Pressed")
//     led.writeSync(led.readSync() ^ 1)
//   }
// });
