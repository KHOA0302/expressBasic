// api/products.api.js
const express = require("express");
const productController = require("../controllers/products.controller");
const sequelize = require("../config/database");

const router = express.Router(); // Khởi tạo một Express Router

router.get('/products', productController.getAllProducts); // URL sẽ là /api/products

// Xuất ứng dụng Express để Vercel/Netlify có thể sử dụng như một hàm
module.exports = router;