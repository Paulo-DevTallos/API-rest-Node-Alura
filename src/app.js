const express = require('express')
const booksController = require('./controller')
const db = require('./db')

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

db.dbConnect()

app.get('/', (req, res) => {res.send('rotas inicial')})
app.get('/livros', booksController.getAll)
app.get('/livros/:id', booksController.getById)
app.post('/livros', booksController.post)
app.put('/livros/:id', booksController.updateBook)
app.delete('/livros/:id', booksController.removeBook)


module.exports = app