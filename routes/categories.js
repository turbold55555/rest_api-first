const express = require('express');
const router = express.Router();
const {getCategories,
    getCategory,
    createCategory,
    updateCategory,
    deleteCategory,
} = require('../controller/categories')

router.route('/').get(getCategories).post(createCategory);
router.route('/:ids').get(getCategory).put(updateCategory).delete(deleteCategory);

module.exports = router;
