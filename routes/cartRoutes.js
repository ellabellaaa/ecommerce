const express = require('express');
const router = express.Router();
const { getCart, addItem, removeItem } = require('../controllers/cartController');
const { protect } = require('../middleware/authMiddleware');

router.get('/', protect, getCart);
router.post('/', protect, addItem);
router.delete('/:id', protect, removeItem);

module.exports = router;