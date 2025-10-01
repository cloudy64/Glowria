const dotenv = require('dotenv');
dotenv.config();

require('./config/databse.js');
const express = require('express');
const app = express();

const methodOverride = require('method-override');
const morgan = require('morgan');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const isSignedIn = require('./middleware/is-signed-in.js');
const passUserToView = require('./middleware/pass-user-to-view.js');

const productController = require('./controllers/product.js');
const authController = require('./controllers/auth.js');
const cartController = require('./controllers/cart.js');

const isAdmin = (req, res, next) => {
  if (req.session.user && req.session.user.role === 'admin') {
    return next();
  }
  res.status(403).send('Access denied. Admins only.');
};

// PORT
const PORT = process.env.PORT || 3000;

// MIDDLEWARE
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
app.use(morgan('dev'));

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
      mongoUrl: process.env.MONGODB_URI,
    }),
  })
);

// app.use(isSignedIn);
app.use(passUserToView);

// View engine
app.set('views', 'views');
app.set('view engine', 'ejs');

// Static files
app.use(express.static('public'));
app.use(passUserToView);


// ROUTES
app.get('/', (req, res) => {
  res.render('index.ejs');
});

// Auth
app.use('/auth', authController);
app.use(isSignedIn);


// Products (explicit routes)
app.use('/products', productController); // list all products
// app.get('/products/:id', productController.show); // show single product

// Admin-only product routes
// app.get('/products/new', isAdmin, productController.newForm);
// app.post('/products', isAdmin, productController.createProduct);
// app.get('/products/:id/edit', isAdmin, productController.editForm);
// app.put('/products/:id', isAdmin, productController.updateProduct);
// app.delete('/products/:id', isAdmin, productController.deleteProduct);

// Cart
// app.get('/cart/add/:productId', cartController.addToCart);
// app.get('/cart', cartController.viewCart);

// START SERVER
app.listen(PORT, () => {
  console.log(`The express app is ready on port ${PORT}!`);
});