var Gpio = require('onoff').Gpio // Constructor function for Gpio objects.
//var button = new Gpio(8, 'out')
var request = require('request')
var segment_a = new Gpio(19, 'out') // top middle
var segment_b = new Gpio(13, 'out') // top right
var segment_c =  new Gpio(20, 'out') // bottom right
var segment_d =  new Gpio(16, 'out') // bottom middle
var segment_e =  new Gpio(12, 'out') // left bottom
var segment_f = new Gpio(6, 'out') // left top
var segment_g = new Gpio(26, 'out') // middle

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
// var number_0= 'abcdef'
// var number_1= 'bc'
// var number_2= 'abged'
// var number_3= 'abgcd'
// var number_4= 'fgbc'
// var number_5= 'afgcd'
// var number_6= 'afgcde'
// var number_7= 'abc'
// var number_8= 'abcdefg'
// var number_9= 'abcdfg'
// var A = ''
// var B =
// var C =
// var D =
// var E =
// var F =
// var G =
// var H =
// var I =
// var J =
// var K =
// var L =
// var M =
// var N =
// var O =
// var P =
// var Q =
// var R =
// var S =
// var D =
// var U =
// var V =
// var W =
// var X =
// var Y =
// var Z =

//var button = new Gpio(8, 'in', 'both');
//var request = require('request')
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

// function writeToLed(character,timer){
//   var litup = segmentToBinary(character)
//   setTimeout(function(){
//     segment_a.writeSync(litup[0])
//     segment_b.writeSync(litup[1])
//     segment_c.writeSync(litup[2])
//     segment_d.writeSync(litup[3])
//     segment_e.writeSync(litup[4])
//     segment_f.writeSync(litup[5])
//     segment_g.writeSync(litup[6])
//   },timer)
// }

var firebase = require('firebase');
var app = firebase.initializeApp({
    apiKey: "AIzaSyC30CGz85NkcAdsYjjYcXfR_hzDOe2h9vs",
    authDomain: "fiery-heat-9547.firebaseapp.com",
    databaseURL: "https://fiery-heat-9547.firebaseio.com",
    projectId: "fiery-heat-9547",
    storageBucket: "fiery-heat-9547.appspot.com",
    messagingSenderId: "635577791704"
});

var starCountRef = firebase.database().ref('pi');
starCountRef.on('value', function(snapshot) {
  console.log("Value Retrived from FireBase",snapshot.val().sevenSegment)
  console.log("Writing to LED",snapshot.val().sevenSegment[0] )
  writeToLed(snapshot.val().sevenSegment['0'])
});

request('https://api.myjson.com/bins/1d3efz', function (error, response, body) {
  //console.log('error:', error); // Print the error if one occurred
  //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', JSON.parse(body)); // Print the HTML for the Google homepage.
  const responseJSON = JSON.parse(body)
  writeToLed(responseJSON.hello)
});

// writeToLed('V',1000)
// writeToLed('I',2000)
// writeToLed('K',3000)
// writeToLed('R',4000)
// writeToLed('A',5000)
// writeToLed('M',6000)
// var number = 0
// var countInterval = setInterval(function(){
//     number = number + 1
//
//     if(number < 10){
//       console.log("Writing to LED", number)
//       writeToLed(number.toString())
//     }else{
//       clearInterval(countInterval)
//     }
//
// },1000)
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
