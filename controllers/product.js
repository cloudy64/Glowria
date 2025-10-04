
const express = require('express')
const router = express.Router();
const Product = require('../models/product');
const Order = require('../models/order');
const User = require('../models/user')


// Products index page
router.get("/", async (req, res) => {
  try {
    const products = await Product.find({}); // fetch products from DB
    res.render('products/index', { products: products });
  } catch (error) {
    console.error(error);
    res.redirect('/');
  }
})

router.get('/new', async (req, res) => {
  res.render("products/new.ejs")
})

router.post('/', async (req, res) => {
  try {
  const newProduct = req.body;
  console.log(newProduct);
  await Product.create(newProduct);
  res.redirect('/products')
  }
  catch (error){
    console.log(error);
    res.redirect('/')
  }
})

// Show product details
router.get("/:productId", async (req, res) => {
  try {
    const product = await Product.findById(req.params.productId);
    if (!product) return res.redirect("/products");
    res.render('products/show.ejs', { product });
    console.log(req.session.user)
  } catch (error) {
    console.log(error);
    res.redirect("/products");
  }
});


router.get("/:productId/edit", async (req, res) => {
  try {
    const product = await Product.findById(req.params.productId);
    res.render('products/edit.ejs', { product });
  } catch (error) {
    console.error(error);
    res.redirect('/products');
  }
});

router.put("/:productId", async (req, res) => {
  try {
    await Product.findByIdAndUpdate(req.params.productId, req.body);
    res.redirect(`/products/${req.params.productId}`);
  } catch (error) {
    console.error(error);
    res.redirect('/products');
  }
});

router.delete("/:productId", async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.productId);
    res.redirect('/products');
  } catch (error) {
    console.error(error);
    res.redirect('/products');
  }
});






module.exports = router;