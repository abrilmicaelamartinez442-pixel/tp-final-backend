const Category = require('../models/categoryModel');

const createCategory = async (data) => {
  return await Category.create(data);
};

const getCategories = async () => {
  return await Category.find();
};

const deleteCategory = async (id) => {
  return await Category.findByIdAndDelete(id);
};

module.exports = {
  createCategory,
  getCategories,
  deleteCategory
};