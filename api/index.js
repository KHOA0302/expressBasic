// api/index.js
const express = require('express');
const productRoute = require('../src/routes/products.route'); 
const homeRoute = require('../src/routes/home.route'); // Điều chỉnh đường dẫn
// Điều chỉnh đường dẫn
// const database = require('../src/config/database'); // Điều chỉnh đường dẫn

const app = express();
app.use(express.json()); // Middleware để parse JSON body

// Kết nối và đồng bộ hóa cơ sở dữ liệu (đảm bảo nó không chặn khởi động function)
// database.sequelize.sync({ force: false }) // Ví dụ với Sequelize
//   .then(() => console.log('Database synced!'))
//   .catch(err => console.error('Database sync error:', err));

// Gắn Product Routes vào ứng dụng Express chính
// Mọi request đến /api/products sẽ được xử lý bởi productRoutes
// app.use('/products', productRoute);
app.use('/', homeRoute);


// Route mặc định cho /api
app.get('/api', (req, res) => {
  res.send('Welcome to the main API!');
});

module.exports = app; // Export ứng dụng Express để Vercel chạy