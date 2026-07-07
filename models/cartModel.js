const pool = require('../db');

const getCartByUserId = async (user_id) => {
  const result = await pool.query(
    `SELECT cart_items.id, products.name, products.price, cart_items.quantity
     FROM cart_items
     JOIN products ON cart_items.product_id = products.id
     WHERE cart_items.user_id = $1`,
    [user_id]
  );
  return result.rows;
};

const addToCart = async (user_id, product_id, quantity) => {
  const result = await pool.query(
    'INSERT INTO cart_items (user_id, product_id, quantity) VALUES ($1, $2, $3) RETURNING *',
    [user_id, product_id, quantity]
  );
  return result.rows[0];
};

const removeFromCart = async (id) => {
  await pool.query('DELETE FROM cart_items WHERE id = $1', [id]);
};

module.exports = { getCartByUserId, addToCart, removeFromCart };