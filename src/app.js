const express = require('express')
const app = express()


const books = [
    { id: 1, titulo: "O Senhor dos anéis" },
    { id: 2, titulo: "O Hobbit" },
]

app.get('/', (req, res) => {
    res.status(200).send('express renderizou!')
})

app.get('/livros', (req, res) => {
    res.status(200).json(books)
})

module.exports = app