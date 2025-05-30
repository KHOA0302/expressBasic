const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_DATABASE || "express_bacis",
  process.env.DB_USER || "root",
  process.env.DB_PASSWORD || "0302",
  {
    host: process.env.DB_HOST || "172.17.240.1",
    dialect: "mysql", // Chỉ định đây là MySQL
    dialectModule: require('mysql2'),
  }
);

// Hàm để kiểm tra kết nối (tùy chọn)
async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log("Success :))");
  } catch (error) {
    console.error("Fail :((", error);
  }
}

testConnection(); // Gọi hàm kiểm tra kết nối

module.exports = sequelize;
