const express = require("express");
const router = express.Router();
const products = require("../models/product");


router.get("/", (req, res) => {
  res.render("products/index", { products });
});




router.get("/:id", async (req, res) => {
  try {
    const product = products.find(p => p.id == req.params.id);
    res.render("products/show", { product });
  } catch (error) {
    console.log(error);
    res.redirect("/products");
  }
});

module.exports = router;