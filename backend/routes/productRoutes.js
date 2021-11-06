const express = require("express");
const router = express.Router();

const {
  getAllProduct,
  getProductById,
} = require("../controller/productController");

//@desc GET all products from db
//@route Get /api/products
//@access Public
router.get("/", getAllProduct);

//@desc GET all products by id from db
//@route Get /api/products/:id
//@access Public
router.get("/:id", getProductById);

module.exports = router;
