const Book = require('../models/bookModel');

exports.getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.addBook = async (req, res) => {
  const { title, author, genre, price, publisher, publication_year, stock_count } = req.body;

  const book = new Book({
    title,
  }
  );}