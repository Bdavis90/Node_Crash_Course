const EventEmitter = require('events')
const uuid = require('uuid')

class Logger extends EventEmitter
{
    log(msg)
    {
        this.emit('message', {id: uuid.v4(), msg})
    }
}

const logger = new Logger();

logger.on('hello', data => {
    console.log('Called listener', data)
})

logger.log("Hello World")
