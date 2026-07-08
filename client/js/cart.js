// Load cart items for logged in user
async function loadCart(token) {
  try {
    const res = await fetch('/api/cart', {
      headers: { 'Authorization': `Bearer ${token}` }
    });
    const items = await res.json();
    return items;
  } catch (err) {
    console.error('Failed to load cart:', err);
  }
}

// Remove item from cart
async function removeFromCart(id, token) {
  try {
    const res = await fetch(`/api/cart/${id}`, {
      method: 'DELETE',
      headers: { 'Authorization': `Bearer ${token}` }
    });
    return res.ok;
  } catch (err) {
    console.error('Failed to remove item:', err);
  }
}

// Place order
async function placeOrder(token) {
  try {
    const res = await fetch('/api/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });
    const data = await res.json();
    return { ok: res.ok, data };
  } catch (err) {
    console.error('Failed to place order:', err);
  }
}