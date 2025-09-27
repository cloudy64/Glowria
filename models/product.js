const mongoose =require ('mongoose');
const productSchema= new mongoose.Schema({
  name:String,   //lipstick
  description:String,  //long lasting matte 
  price:Number,   //20bhd
  img:String,    //URL to product image
  brand:String, // Dior
  category:String  //Makeup -skincare

})


module.exports=mongoose.model("Product" , productSchema);