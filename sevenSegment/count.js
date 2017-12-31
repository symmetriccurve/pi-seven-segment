var Gpio = require('onoff').Gpio // Constructor function for Gpio objects.
//var button = new Gpio(8, 'out')
var sss = require('single-seven-segment')
sss.defineGPIOPins({
    a: 19,
    b: 13,
    c: 20,
    d: 16,
    e: 12,
    f: 6,
    g: 26
  })

// Seven Segment Display
/*
------ A ----
|           |
F           B
| ----G---- |
E           C
|           |
------ D ----

*/

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
  sss.writeToLed(snapshot.val().sevenSegment['0'])
});
