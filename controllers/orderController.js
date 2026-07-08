const { createOrder, createOrderItem, getOrdersByUserId } = require('../models/orderModel');
const { getCartByUserId } = require('../models/cartModel');
const pool = require('../db');

const placeOrder = async (req, res) => {
  try {
    const cartItems = await getCartByUserId(req.user.id);

    if (cartItems.length === 0) {
      return res.status(400).json({ message: 'Your cart is empty' });
    }

    const totalPrice = cartItems.reduce((sum, item) => {
      return sum + item.price * item.quantity;
    }, 0);

    const order = await createOrder(req.user.id, totalPrice);

    for (const item of cartItems) {
      await createOrderItem(order.id, item.product_id, item.quantity, item.price);
    }

    await pool.query('DELETE FROM cart_items WHERE user_id = $1', [req.user.id]);

    res.status(201).json({ message: 'Order placed successfully', order });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

const getOrders = async (req, res) => {
  try {
    const orders = await getOrdersByUserId(req.user.id);
    res.json(orders);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { placeOrder, getOrders };