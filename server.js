const http = require('http')

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write(`Request path made ${req.url}`)
    res.end()
}).listen(80)