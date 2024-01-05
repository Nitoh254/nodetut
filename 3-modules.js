// CommonJS, every file is module(by default)
// modules - Encapsulated code (only share minimum)
const names = require('./4-names.js');
const sayHi = require('./5-utilis.js');
const data = require('./6-alternative-flavor.js');
require('./7-mine-grenade');

sayHi('susan');
sayHi(names.john);
sayHi(names.peter);