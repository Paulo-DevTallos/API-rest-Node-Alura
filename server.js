const http = require('http')
//import { createServer } from 'http' - ES6
const port = 3000 || process.env.port

const server = http.createServer((req, res) => {
    res.writeHead(200, {'content-type': 'text/plain'})
    res.end('Olá mundo!')
})

server.listen(port, () => {
    console.log(`server running http://localhost:${port}`)
})

