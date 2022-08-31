const express = require('express')
const booksController = require('./controller')
const db = require('./db')

const app = express()


const books = [
    { id: 1, titulo: "O Senhor dos anéis" },
    { id: 2, titulo: "O Hobbit" },
]

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

db.dbConnect()

app.get('/livros', booksController.getAll)
app.get('/livros/:id', booksController.getById)
app.post('/livros', booksController.post)

/*app.get('/livros', (req, res) => {
    res.status(200).json(books)
})*/


//post sempre tem que pegar o que vem no body

app.put('/livros/:id', (req, res) => {
    let index = buscarLivros(req.params.id)
    books[index].titulo = req.body.titulo // o index que eu pesquisar do array será atualizado de acordo com o que vier no corpo da requisição

    res.json(books)
})

app.delete('/livros/:id', (req, res) => {
    let { id } = req.params
    let index = buscarLivros(id)
    books.splice(index, 1) // qual a posição do item que será excluido
    res.send(`livro ${id} removido da lista`)
})

function buscarLivros(id) {
    return books.findIndex(book => book.id === id)
}


module.exports = app