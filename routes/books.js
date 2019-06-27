const router = require('express').Router();

const BooksController = require('../controllers/booksController');

//Begin routes
router.get('/', BooksController.index);
router.get('/new', BooksController.new);
router.get('/:id', BooksController.show);
router.get('/:id/edit', BooksController.edit);
router.post('/', BooksController.create);
router.post('/update', BooksController.update);
router.post('/destroy', BooksController.destroy);
//End routes

module.exports = router;