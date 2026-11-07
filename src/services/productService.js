const Product = require('../models/productModel');

const createProduct = async (data) => {
  return await Product.create(data);
};

const getProducts = async () => {
  // Se usa populate para traer los datos completos de la categoría
  return await Product.find().populate('categoria');
};

const getProductById = async (id) => {
  return await Product.findById(id).populate('categoria');
};

const updateProduct = async (id, data) => {
  return await Product.findByIdAndUpdate(id, data, { new: true }).populate('categoria');
};

const deleteProduct = async (id) => {
  return await Product.findByIdAndDelete(id);
};

module.exports = {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct
};