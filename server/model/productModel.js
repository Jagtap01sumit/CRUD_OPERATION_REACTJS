const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  productName: { type: String },
  amount: { type: Number },
  quantity: { type: Number },
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
