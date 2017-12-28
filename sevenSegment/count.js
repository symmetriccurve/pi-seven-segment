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



// var b = new Gpio(19, 'out')
// var c = new Gpio(2, 'out')
//var b = new Gpio(3, 'out')

//var button = new Gpio(8, 'in', 'both');
//var request = require('request')
a.writeSync(1)
b.writeSync(1)
c.writeSync(1)

setTimeout(function(){
  a.writeSync(0)
  b.writeSync(0)
  c.writeSync(0)
},5000)
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
