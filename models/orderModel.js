const pool = require('../db');

const createOrder = async (user_id, total_price) => {
  const result = await pool.query(
    'INSERT INTO orders (user_id, total_price) VALUES ($1, $2) RETURNING *',
    [user_id, total_price]
  );
  return result.rows[0];
};

const createOrderItem = async (order_id, product_id, quantity, price) => {
  const result = await pool.query(
    'INSERT INTO order_items (order_id, product_id, quantity, price) VALUES ($1, $2, $3, $4) RETURNING *',
    [order_id, product_id, quantity, price]
  );
  return result.rows[0];
};

const getOrdersByUserId = async (user_id) => {
  const result = await pool.query(
    `SELECT orders.id, orders.total_price, orders.status, orders.created_at,
     json_agg(json_build_object('product_id', order_items.product_id, 'quantity', order_items.quantity, 'price', order_items.price)) as items
     FROM orders
     JOIN order_items ON orders.id = order_items.order_id
     WHERE orders.user_id = $1
     GROUP BY orders.id`,
    [user_id]
  );
  return result.rows;
};

module.exports = { createOrder, createOrderItem, getOrdersByUserId };