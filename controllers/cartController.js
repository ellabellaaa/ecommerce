const { getCartByUserId, addToCart, removeFromCart } = require('../models/cartModel');

const getCart = async (req, res) => {
  try {
    const cart = await getCartByUserId(req.user.id);
    res.json(cart);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

const addItem = async (req, res) => {
  try {
    const { product_id, quantity } = req.body;
    const item = await addToCart(req.user.id, product_id, quantity);
    res.status(201).json(item);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

const removeItem = async (req, res) => {
  try {
    await removeFromCart(req.params.id);
    res.json({ message: 'Item removed from cart' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { getCart, addItem, removeItem };