const Book = require('../models/book.model.js');

// Create and Save a new Book
exports.create = (req, res) => {
    // Validate request
    if(!req.body.author || !req.body.name) {
        return res.status(400).send({
            message: "Book name or author can not be empty"
        });
    }

    // Create a Book
    const book = new Book({
        name: req.body.name,
        content: req.body.content
    });

    // Save Book in the database
    book.save()
    .then(data => {
        res.status(201).json({ message: 'Book created!', data: data });
    }).catch(err => {
        res.status(500).json({
            message: err.message || "Some error occurred while creating the Book."
        });
    });
};
  
// Retrieve and return all books from the database.
exports.findAll = (req, res) => {
    Book.find()
    .then(books => {
        res.status(200).json({ message: "Books retrived!", data: books });
    }).catch(err => {
        res.status(500).json({
            message: err.message || "Some error occurred while retrieving books."
        });
    });
};

// Find a single book with a bookId
exports.findOne = (req, res) => {
    Book.findById(req.params.bookId)
    .then(book => {
        if(!book) {
            return res.status(404).send({
                message: "Book not found with id " + req.params.bookId
            });            
        }
        res.send(book);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Book not found with id " + req.params.bookId
            });                
        }
        return res.status(500).json({
            message: "Error retrieving book with id " + req.params.bookId
        });
    });
};

// Update a book identified by the bookId in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body.name || !req.body.author) {
        return res.status(400).send({
            message: "Book name or author can not be empty"
        });
    }

    // Find book and update it with the request body
    Book.findByIdAndUpdate(req.params.bookId, {
        name: req.body.name,
        author: req.body.author
    }, {new: true})
    .then(book => {
        if(!book) {
            return res.status(404).json({
                message: "Book not found with id " +      req.params.bookId
            });
        }
        res.status(200).json({ message : "Book updated!", data: book });
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).json({
                message: "Book not found with id " + req.params.bookId
            });                
        }
        return res.status(500).send({
            message: "Error updating book with id " + req.params.bookId
        });
    });
};

// Delete a book with the specified bookId in the request
exports.delete = (req, res) => {
    Book.findByIdAndRemove(req.params.bookId)
    .then(book => {
        if(!book) {
            return res.status(404).json({
                message: "Book not found with id " + req.params.bookId
            });
        }
        res.status(202).json({message: "Book deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Book not found with id " + req.params.bookId
            });                
        }
        return res.status(500).json({
            message: "Could not delete book with id " + req.params.bookId
        });
    });
};