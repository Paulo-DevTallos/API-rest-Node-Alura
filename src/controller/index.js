const BookModel = require('../model')

async function getAll(req, res) {
    const listBooks = await BookModel.find()
    res.send(listBooks)
}

async function getById(req, res) {
    const { id } = req.params
    const object = id ? { _id: id } : null
    const books = await BookModel.find(object)
    
    res.send(books)
}

async function post(req, res) {
    const {
        titulo,
        autor,
        editora,
        preco,
    } = req.body

    const book = await new BookModel({
        titulo,
        autor,
        editora,
        preco,
    })

    book.save()

    res.json({ message: 'sucesso!' })
}

module.exports = {
    getById,
    getAll,
    post,
}