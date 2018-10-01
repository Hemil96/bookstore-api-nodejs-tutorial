const mongoose = require('mongoose');

const BookSchema = mongoose.Schema({
    name: String,
    author: String,
}, {
    timestamps: true
});

module.exports = mongoose.model('Book', BookSchema);