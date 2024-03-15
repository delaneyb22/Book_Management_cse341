const express = require('express');
const app = express();
const database = require('./database');
const booksRouter = require('./routes/books');

app.use(express.json());
app.use('/books', booksRouter);

const PORT = process.env.PORT || 3000;

database.connect((err) => {
  if (err) {
    console.error('An error occurredconnecting to MongoDB: ', err);
  } else {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  }
});