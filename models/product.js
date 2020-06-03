const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  cost: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model("Product", productSchema);
