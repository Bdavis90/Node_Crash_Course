const Logger = require('./logger')

const logger = new Logger();

logger.on('hello', data => {
    console.log('Called listener', data)
})

logger.log("Hello World")