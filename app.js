// const Logger = require('./logger')
const http = require('http');
// const logger = new Logger();

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write("Hello World");
        res.end();
    }
})

server.listen(8080);

console.log("Listening on port 8080...");

// logger.on('Logging', (args) => {
//     console.log('Listener invoked', args)
// })

// logger.log("Logging check");