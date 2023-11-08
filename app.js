const Logger = require('./logger')
const logger = new Logger();

logger.on('Logging', (args) => {
    console.log('Listener invoked', args)
})

logger.log("Logging check");