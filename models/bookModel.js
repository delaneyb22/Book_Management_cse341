const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  genre: { type: String, required: true },
  price: { type: Number, required: true },
  publisher: { type: String, required: true },
  publication_year: { type: Number, required: true },
  stock_count: { type: Number, required: true }
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;