const Book = require('../Models/book');

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

exports.comics = (req, res) => {
  Book.find().comics()
  .then(books => {
    res.render('books/index', {
      books: books,
      title: 'Comics'
    });
  })
  .catch(err => {
    console.error(`ERROR: ${err}`);
  });
};

exports.sports = (req, res) => {
  Book.find().sports()
  .then(books => {
    res.render('books/index', {
      books: books,
      title: 'Sports'
    });
  })
  .catch(err => {
    console.error(`ERROR: ${err}`);
  });
};

exports.travels = (req, res) => {
  Book.find().travels()
  .then(books => {
    res.render('books/index', {
      books: books,
      title: 'Travels'
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