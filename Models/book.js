const mongoose = require('mongoose');

// Our Schema
const BookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: false
  },
  category: {
    type: String,
    enum: ['COMIC', 'SPORT', 'TRAVEL'],
    default: 'COMIC'
  }
}, {
  timestamps: true
});

// Query Helper
BookSchema.query.comics = function () {
  return this.where({
    category: 'COMIC'
  });
};

BookSchema.query.sports = function () {
  return this.where({
    category: 'SPORT'
  });
};

BookSchema.query.travels = function () {
  return this.where({
    category: 'TRAVEL'
  });
};

module.exports = mongoose.model('Book', BookSchema);
