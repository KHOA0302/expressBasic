// api/products.api.js
const express = require("express");

const router = express.Router(); // Khởi tạo một Express Router

router.get('/', (req, res) => {
  res.send('Welcome to the home page!');
});

// Xuất ứng dụng Express để Vercel/Netlify có thể sử dụng như một hàm
module.exports = router;