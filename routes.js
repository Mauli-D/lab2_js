// Our Express app module
const express = require('express');
const app = express();

// Import our Page Routes
const pageRoutes = require('./routes/pages');
const booksRoutes = require('./routes/books');

// Register our Page Routes with our app
app.use('/', pageRoutes);
app.use('/books', booksRoutes);



//Export the changes
module.exports = app;