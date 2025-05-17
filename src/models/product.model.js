const sequelize = require("../config/database"); // Đảm bảo đường dẫn đến file cấu hình database là đúng
const { DataTypes } = require("sequelize");

const Product = sequelize.define(
  "product",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "product", // Chỉ định tên bảng trong MySQL
    timestamps: false, // Nếu bảng của bạn không có cột createdAt và updatedAt
  }
);

module.exports = Product;
