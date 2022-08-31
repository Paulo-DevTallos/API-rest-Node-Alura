const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    titulo: String,
    autor: String,
    editora: String,
    preco: Number,
    createdAt: { type: Date, default: Date.now() }
})

const Model = mongoose.model('books', schema)

module.exports = Model