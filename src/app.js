const express = require('express')
const app = express()


const books = [
    { id: 1, titulo: "O Senhor dos anéis" },
    { id: 2, titulo: "O Hobbit" },
]

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).send('express renderizou!')
})

app.get('/livros', (req, res) => {
    res.status(200).json(books)
})

app.get('/livros/:id', (req, res) => {
    let index = buscarLivros(req.params.id)
    res.json(books[index])
})

//post sempre tem que pegar o que vem no body
app.post('/livros', (req, res) => {
    books.push(req.body)
    res.status(201).send('livro cadastrado com sucesso!')
})

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