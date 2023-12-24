const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  productName : {type : String},
  price : {type : Number},
  productPic : {type : String},
  productDetails : {type : String},  
});
const Product = mongoose.model("Products", ProductSchema);

module.exports = Product;
