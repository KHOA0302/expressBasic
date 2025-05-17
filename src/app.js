const express = require("express");
const productRoutes = require("./routes/products.routes");

const app = express();

// Middleware;
app.use(express.json()); // Để xử lý request body dạng JSON

// Sử dụng các routes
app.use("/", productRoutes);

// Các middleware khác có thể được thêm vào đây (ví dụ: logging, authentication)

module.exports = app;
