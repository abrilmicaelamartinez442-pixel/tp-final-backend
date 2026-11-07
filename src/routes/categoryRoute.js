const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');
const verifyToken = require('../middleware/verifyToken');

router.post('/', verifyToken, categoryController.createCategory);
router.get('/', categoryController.getCategories);
router.delete('/:id', verifyToken, categoryController.deleteCategory);

export default router; 
