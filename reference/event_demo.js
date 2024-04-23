const event = require('events');
const { EventEmitter } = require('stream');

// Create class
class MyEmitter extends EventEmitter {}

// Init object
const myEmitter = new MyEmitter();

// Event listener
myEmitter.on('event', () => console.log('Event Fired!'))

// Init event
myEmitter.emit('event');