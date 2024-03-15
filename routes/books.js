const express = require('express');
const router = express.Router();
const booksController = require('../controllers/bookController');

// Get all books
router.get('/', booksController.getAllBooks);

// Add a new book
router.post('/', booksController.addBook);

module.exports = router;