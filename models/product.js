const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,   // lipstick
  description: String,  // long lasting matte 
  price: Number,   // 20BHD
  image: String,    // URL to product image
  brand: String, // Dior
  category: String  // Makeup - Skincare
});




module.exports = mongoose.model('Product', productSchema);