// src/routes/products.routes.js
const express = require("express");
const productController = require("../controllers/products.controller");
const router = express.Router();

// Định nghĩa các routes cho sản phẩm
router.get("/", productController.getAllProducts);

module.exports = router;
