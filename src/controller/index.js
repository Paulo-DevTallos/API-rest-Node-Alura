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

    book.save(err => {
        if(err) {
            res.status(500).send({ message: `${err.message} - falha ao cadastrar o livro` })
        } else {
            res.status(201).json({ message: 'sucesso!' })
        }
    })

}

async function updateBook(req, res) {
    const { id } = req.params
    const book = await BookModel.findByIdAndUpdate(id, req.body, { new: true })

    res.send({ message: 'success', book })
}

async function removeBook(req, res) {
    const { id } = req.params
    const remove = await BookModel.deleteOne({ _id: id })

    const message = remove.deletedCount ? 'success' : 'error'

    res.send({ message })
}

module.exports = {
    getById,
    getAll,
    post,
    updateBook,
    removeBook,
}