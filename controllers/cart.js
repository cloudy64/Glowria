const Order = require('../models/order');
const products = require('../models/product');

exports.addToCart = async (req, res) => {
  if (!req.user) return res.redirect('/auth/sign-in');

  const productId = parseInt(req.params.productId);
  const product = products.find ? products.find(p => p.id === productId) : await products.findById(productId);
  if (!product) return res.redirect('/products');

  let cart = await Order.findOne({ userId: req.user._id, status: 'cart' });
  if (!cart) cart = new Order({ userId: req.user._id, orderItems: [] });

  const existingItem = cart.orderItems.find(item => item.productId === product.id);
  if (existingItem) existingItem.quantity += 1;
  else cart.orderItems.push({
    productId: product.id,
    name: product.name,
    price: parseFloat(product.price),
    quantity: 1
  });

  await cart.save();
  res.redirect('/cart');
};

exports.viewCart = async (req, res) => {
  if (!req.user) return res.redirect('/auth-sign-in');

  const cart = await Order.findOne({ userId: req.user._id, status: 'cart' });
  res.render('cart/index', { cart });
};