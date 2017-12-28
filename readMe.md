```npm install single-seven-segment```


//Require the Package

var SevenSegmentDisplay = require('single-seven-segment')

//Define the GPIO Pins before lighting up the LED

SevenSegmentDisplay.defineGPIOPins({
    a: 19,
    b: 13,
    c: 20,
    d: 16,
    e: 12,
    f: 6,
    g: 26
  })

//Write to
SevenSegmentDisplay.writeToLed('L')
SevenSegmentDisplay.writeToLed('E')
SevenSegmentDisplay.writeToLed('D')
SevenSegmentDisplay.writeToLed('2')
