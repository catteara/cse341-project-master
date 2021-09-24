const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const books = [];

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res, next) => {
  res.render('index', { pageTitle: 'Add Product' });
});

app.get('/books', (req, res, next) => {
  res.render('books', {
    pageTitle: 'Book List',
    books: books,
    hasbooks: books.length > 0
  });
});

app.post('/add-book', (req, res, next) => {
  books.push({ name: req.body.bookTitle },{ author: req.body.author },{ price: req.body.price });
  res.redirect('/books');
});

app.listen(3000);