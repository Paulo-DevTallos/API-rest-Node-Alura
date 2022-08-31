const http = require('http')
//import { createServer } from 'http' - ES6
const port = 3000 || process.env.port


const routes = {
    '/': 'Curso de NodeJS',
    '/livros': 'Entrei na página de livros',
    '/autores': 'Listagem de autores',
    '/editoras': 'Página de editoras'
}


const server = http.createServer((req, res) => {
    res.writeHead(200, {'content-type': 'text/plain'})
    res.end(routes[req.url]) //req.url faz uma leitura do recurso da rota 
})

server.listen(port, () => {
    console.log(`server running http://localhost:${port}`)
})

