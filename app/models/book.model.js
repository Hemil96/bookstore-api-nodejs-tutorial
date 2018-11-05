const mongoose = require("mongoose");

const BookSchema = mongoose.Schema(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    price: { type: Number, required: true },
    format: { type: String, required: true },
    overview: { type: String, required: false }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Book", BookSchema);
