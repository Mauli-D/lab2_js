const Book = require('../models/book');

exports.index = (req, res) => {
  Book.find()
  .then(books => {
    res.render('books/index', {
      books: books,
      title: 'Archive'
    });
  })
  .catch(err => {
    console.error(`ERROR: ${err}`);
  });
};

exports.show = (req, res) => {
  Book.findById(req.params.id)
  .then(book => {
    res.render('books/show', {
      book: book,
      title: book.title
    });
  })
  .catch(err => {
    console.error(`ERROR: ${err}`);
  });
};

exports.new = (req, res) => {
  res.render('books/new', {
    title: 'New Book Post'
  });
};

exports.edit = (req, res) => {
  Book.findById(req.params.id)
  .then(book => {
    res.render('books/edit', {
      book: book,
      title: book.title
    });
  })
  .catch(err => {
    console.error(`ERROR: ${err}`);
  });
};

exports.create = (req, res) => {
  Book.create(req.body.book)
  .then(() => {
    res.redirect('/books');
  })
  .catch(err => {
    console.error(`ERROR: ${err}`);
  });
};

exports.update = (req, res) => {
  Book.updateOne({
    _id: req.body.id
  }, req.body.book, {
    runValidators: true
  })
  .then(() => {
    res.redirect(`/books/${req.body.id}`);
  })
  .catch(err => {
    console.error(`ERROR: ${err}`);
  });
};

exports.destroy = (req, res) => {
  Book.deleteOne({
    _id: req.body.id
  })
  .then(() => {
    res.redirect('/books');
  })
  .catch(err => {
    console.error(`ERROR: ${err}`);
  });
};