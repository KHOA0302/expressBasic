const Product = require("../models/product.model"); // Đảm bảo đường dẫn đúng

async function getAllProducts(req, res) {
  try {
    const products = await Product.findAll({
      attributes: ["id", "name"], 
    });
    res.status(200).json(products);
  } catch (error) {
    console.error("Lỗi khi lấy danh sách sản phẩm:", error);
    res.status(500).json({ message: "Lỗi server" });
  }
}

module.exports = {
  getAllProducts,
};
