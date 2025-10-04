const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,   
  description: String,  
  price: Number, 
  image: String,   
  brand: String,
  category: String 
});


module.exports = mongoose.model('Product', productSchema);