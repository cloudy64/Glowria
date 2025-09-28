const mongoose =require ('mongoose');
const productSchema= new mongoose.Schema({
  name:String,   //lipstick
  description:String,  //long lasting matte 
  price:Number,   //20bhd
  img:String,    //URL to product image
  brand:String, // Dior
  category:String  //Makeup -skincare

})

const products = [
  {
    id: 1,
    name: "Dior Blusher",
    description: "The Dior Blusher gives a natural glow with smooth, blendable color in elegant Dior packaging",
    price: "20BHD",
    brand: "Dior",
    category: "Makeup",
    img: "https://i.pinimg.com/736x/5c/dd/a7/5cdda7e53d34a85210ad2c2fb439b1ae.jpg"
  },
  {
    id: 2,
    name: "Lip Oil Dior",
    description: "The Dior Lip Oil nourishes and hydrates while adding a glossy, non-sticky shine. Infused with caring ingredients, it enhances lips with comfort, color, and a radiant finish",
    price: "20BHD",
    brand: "Dior",
    category: "Makeup",
    img: "https://i.pinimg.com/736x/88/81/b6/8881b6f300fd7d19d2498b0e61d4a111.jpg"
  },
  {
    id: 3,
    name: "Dior Highlighter",
    description: "The Dior Highlighter illuminates the skin with a radiant glow, offering a silky, blendable finish that enhances your natural features with elegance",
    price: "22BHD",
    brand: "Dior",
    category: "Makeup",
    img: "https://i.pinimg.com/736x/b0/7c/b7/b07cb727f2bba10154275101f02eea1e.jpg"
  },
  {
    id: 4,
    name: "Huda Beauty Loose Powder",
    description: "The Huda Beauty Loose Powder sets makeup flawlessly, blurring imperfections with a soft-focus finish. Lightweight and long-lasting, it keeps skin shine-free while feeling comfortable all day",
    price: "21BHD",
    brand: "Huda Beauty",
    category: "Makeup",
    img: "https://i.pinimg.com/736x/96/dc/02/96dc022494cc93cc9d248b0926ed3d0f.jpg"
  },
  {
    id: 5,
    name: "Huda Beauty Eyeshadow",
    description: "The Huda Beauty Eyeshadow delivers rich pigments and blendable textures, offering versatile looks from soft neutrals to bold glam with long-lasting wear",
    price: "28BHD",
    brand: "Huda Beauty",
    category: "Makeup",
    img: "https://i.pinimg.com/736x/d1/d2/c9/d1d2c9fc48af64bc76d8100a31a6c6c7.jpg"
  },
  {
    id: 6,
    name: "Huda Beauty Lip Gloss",
    description: "The Huda Beauty Lip Gloss gives a high-shine finish with rich color and a smooth, non-sticky feel, leaving lips looking plump and radiant",
    price: "14BHD",
    brand: "Huda Beauty",
    category: "Makeup",
    img: "https://i.pinimg.com/736x/2c/8f/94/2c8f9422c0fc120a05d4b6ee81980846.jpg"
  },
  {
    id: 7,
    name: "Huda Beauty Concealer",
    description: "The Huda Beauty Concealer offers full coverage with a lightweight, creamy texture that blends seamlessly to conceal imperfections and brighten the complexion",
    price: "12BHD",
    brand: "Huda Beauty",
    category: "Makeup",
    img: "https://i.pinimg.com/736x/21/2d/16/212d16d16cdfa39b10c1d4fc97e95f66.jpg"
  },
  {
    id: 8,
    name: "Glow Recipe Toner",
    description: "The Glow Recipe Toner hydrates, gently exfoliates, and refines pores for smooth, glowing skin",
    price: "13BHD",
    brand: "Glow Recipe",
    category: "Skincare",
    img: "https://i.pinimg.com/736x/f6/7c/1e/f67c1efb386cea40b51305796419bdb9.jpg"
  },
  {
    id: 9,
    name: "Glow Recipe Sleeping Mask",
    description: "The Glow Recipe Sleeping Mask nourishes and restores skin overnight, leaving it soft, hydrated, and radiant by morning",
    price: "15BHD",
    brand: "Glow Recipe",
    category: "Skincare",
    img: "https://i.pinimg.com/736x/50/46/ce/5046ce53d88ae1297fbe2c48ea99e3fa.jpg"
  },
  {
    id: 10,
    name: "Gisou Hair Mask",
    description: "The Gisou Hair Mask intensely hydrates and strengthens hair, leaving it silky, shiny, and revitalized",
    price: "18BHD",
    brand: "Gisou",
    category: "Skincare",
    img: "https://i.pinimg.com/1200x/af/83/cf/af83cf39cd28414f9e210c32838a82d8.jpg"
  },
  {
    id: 11,
    name: "Gisou Hair Oil",
    description: "The hair oil nourishes and strengthens strands, leaving hair smooth, shiny, and healthy-looking",
    price: "12BHD",
    brand: "Gisou",
    category: "Skincare",
    img: "https://i.pinimg.com/1200x/95/e6/b0/95e6b0e6b87d52274c2ccd07fd2769ab.jpg"
  },
  {
    id: 12,
    name: "Sol De Janeiro Body Cream",
    description: "The Sol de Janeiro Body Cream deeply moisturizes and smooths skin, leaving it soft, glowing, and delicately scented",
    price: "11BHD",
    brand: "Sol De Janeiro",
    category: "Skincare",
    img: "https://i.pinimg.com/736x/8f/8e/76/8f8e76ced8759774104d7a89738c3321.jpg"
  }
];

module.exports = products;